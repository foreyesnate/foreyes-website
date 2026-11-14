"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  calculatorCopy,
  implementationCopy,
  leadCopy,
  pricing,
  QUOTED_ON_CALL,
  serviceCopy,
  type AccountsOptionId,
} from "@/content/pricing";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { BookingCalendar } from "@/components/site/BookingCalendar";
import { LeadForm } from "@/components/site/LeadForm";
import { cn } from "@/lib/cn";
import {
  accountsPayableMonthly,
  buildSummary,
  computeEstimate,
  estimateHeadline,
  formatMoney,
  initialPricingState,
  locationsAddOn,
  payrollMonthly,
  pricingReducer,
} from "@/lib/pricing";
import { CheckRow, ChoiceGroup, PriceTag, RangeField, Switch, type Choice } from "./controls";
import { EstimateCard, EstimateFigure, MobileEstimateBar } from "./Estimate";

type Step = "build" | "contact" | "sent";

const NOT_SURE = "__not-sure__";

/** One service: a header with a real switch, and controls that open when it is on. */
function ServiceCard({
  icon,
  name,
  blurb,
  on,
  onToggle,
  status,
  statusTone = "navy",
  compact = false,
  children,
}: {
  icon: IconName;
  name: string;
  blurb: string;
  on: boolean;
  onToggle: (next: boolean) => void;
  /** Price of this service right now, or what it starts from. */
  status: string;
  statusTone?: "navy" | "teal";
  /** Supporting services are drawn a size down from the two flagships. */
  compact?: boolean;
  children?: ReactNode;
}) {
  const id = useId();
  const titleId = `${id}-title`;
  const panelId = `${id}-panel`;
  return (
    <article
      className={cn(
        "rounded-[1.75rem] border-2 transition-[background-color,border-color,box-shadow] duration-300",
        on ? "border-navy bg-white shadow-lift" : "border-transparent bg-stone",
      )}
    >
      <div className={cn("flex items-start gap-4", compact ? "p-5 sm:p-6" : "p-5 sm:p-7")}>
        <span
          aria-hidden="true"
          className={cn(
            "hidden shrink-0 place-items-center rounded-2xl transition-colors duration-300 sm:grid",
            compact ? "h-12 w-12" : "h-14 w-14",
            on ? "bg-navy text-white" : "bg-white text-navy shadow-soft",
          )}
        >
          <Icon name={icon} size={compact ? 24 : 27} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 id={titleId} className={compact ? "text-[1.3125rem] leading-tight" : "text-subheading sm:text-[1.625rem]"}>
              {name}
            </h3>
            <Switch checked={on} onChange={onToggle} labelledBy={titleId} controls={panelId} />
          </div>
          <p className="mt-2 max-w-xl text-ink-500">{blurb}</p>
          <p className="mt-3.5">
            <PriceTag tone={on ? (statusTone === "teal" ? "teal" : "yellow") : "muted"}>{status}</PriceTag>
          </p>
        </div>
      </div>
      <div id={panelId}>
        <AnimatePresence initial={false}>
          {on && children ? (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0, filter: "blur(6px)" }}
              animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
              exit={{ height: 0, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className={cn("grid gap-7 border-t-2 border-stone-200", compact ? "p-5 sm:p-6" : "p-5 sm:p-7")}>
                {children}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </article>
  );
}

function QuotedNote({ children }: { children: ReactNode }) {
  return (
    <p className="flex gap-3 rounded-2xl bg-teal-50 p-4 text-[0.9375rem] leading-snug text-ink-700">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-ink">
        <Icon name="phone" size={13} strokeWidth={2.4} />
      </span>
      <span>{children}</span>
    </p>
  );
}

/** Shown by the lead form once the estimate has been sent. */
function SentPanel({ onShown }: { onShown: () => void }) {
  useEffect(() => {
    onShown();
  }, [onShown]);
  return (
    <div>
      <div className="rounded-[1.75rem] bg-teal-100 p-7 sm:p-8">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-yellow text-ink">
          <Icon name="check" size={28} strokeWidth={2.6} />
        </span>
        <h3 className="text-heading mt-5">{leadCopy.thanksTitle}</h3>
        <p className="mt-3 max-w-xl text-ink-700">{leadCopy.thanksBody}</p>
      </div>
      <BookingCalendar className="mt-5 shadow-soft" />
    </div>
  );
}

export function PricingCalculator() {
  const [state, dispatch] = useReducer(pricingReducer, initialPricingState);
  const [step, setStep] = useState<Step>("build");
  // Once opened, the form stays mounted (hidden) so going back to edit the
  // selections never throws away what was typed into it.
  const [formOpened, setFormOpened] = useState(false);
  const [barVisible, setBarVisible] = useState(false);

  const estimate = useMemo(() => computeEstimate(state), [state]);
  const summary = useMemo(() => buildSummary(state), [state]);
  const headline = estimateHeadline(estimate);

  const gridRef = useRef<HTMLDivElement>(null);
  const formHeadingRef = useRef<HTMLHeadingElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const previousStep = useRef<Step>("build");

  // The pinned mobile bar belongs to the calculator: show it only while the
  // calculator is on screen, so it never sits over the FAQs or the footer.
  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setBarVisible(entry.isIntersecting), {
      rootMargin: "-30% 0px -15% 0px",
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Moving between the controls and the form: bring the new view to the top
  // and hand keyboard focus to it.
  useEffect(() => {
    if (previousStep.current === step) return;
    const from = previousStep.current;
    previousStep.current = step;
    if (step === "sent") return;
    const target = step === "contact" ? formHeadingRef.current : from === "contact" ? controlsRef.current : null;
    if (!target) return;
    // A whole view has been swapped, so jump there rather than glide.
    gridRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
    target.focus({ preventScroll: true });
  }, [step]);

  const getStarted = useCallback(() => {
    setFormOpened(true);
    setStep("contact");
  }, []);
  const editSelections = useCallback(() => setStep("build"), []);
  const markSent = useCallback(() => setStep("sent"), []);

  const { bookkeeping, insuranceBilling, accountsPayable, payroll, practiceConsulting } = state;
  const tiers = pricing.bookkeeping.revenueTiers;
  const tier = tiers[bookkeeping.revenueTier];
  const bk = serviceCopy.bookkeeping;
  const ib = serviceCopy.insuranceBilling;
  const ap = serviceCopy.accountsPayable;
  const pr = serviceCopy.payroll;
  const pc = serviceCopy.practiceConsulting;

  const bookkeepingMonthly = estimate.lines
    .filter((line) => line.service === "bookkeeping" && line.kind === "priced")
    .reduce((sum, line) => sum + line.amount, 0);
  const bookkeepingCustom = estimate.lines.some((line) => line.service === "bookkeeping" && line.kind === "custom");

  const accountChoices: Choice<AccountsOptionId>[] = pricing.bookkeeping.accounts.map((option) => ({
    value: option.id,
    label: option.label,
    note: option.monthly === null ? "Custom quote" : option.monthly === 0 ? "Included" : `+${formatMoney(option.monthly)}/mo`,
  }));
  const optionalChoices = (options: readonly string[]): Choice<string>[] => [
    ...options.map((option) => ({ value: option, label: option })),
    { value: NOT_SURE, label: ib.notSure },
  ];

  const apMonthly = accountsPayableMonthly(accountsPayable.count);
  const payrollPrice = payrollMonthly(payroll.count);
  const unit = (count: number, [one, many]: readonly [string, string]) => (count === 1 ? one : many);

  return (
    <Section tone="white" id="calculator" aria-labelledby="calculator-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading id="calculator-title" eyebrow="Monthly pricing" title={calculatorCopy.heading} lede={calculatorCopy.lede} />
        </Reveal>

        {/* One polite announcement of the result for screen reader users. */}
        <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          Your estimate: {headline}.
        </p>

        <div
          ref={gridRef}
          className="mt-12 grid scroll-mt-28 gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_27rem] xl:gap-14"
        >
          <div className="min-w-0">
            {/* ---------------------------------------------------------- */}
            {/* The controls                                                */}
            {/* ---------------------------------------------------------- */}
            <div ref={controlsRef} tabIndex={-1} hidden={step !== "build"} className="outline-none">
              <Reveal y={16} blur={false}>
                <div className="grid gap-5">
                  <ServiceCard
                    icon="ledger"
                    name={bk.name}
                    blurb={bk.blurb}
                    on={bookkeeping.on}
                    onToggle={(on) => dispatch({ type: "toggle", service: "bookkeeping", on })}
                    status={
                      !bookkeeping.on
                        ? bk.from
                        : bookkeepingCustom
                          ? "Custom quote"
                          : `${formatMoney(bookkeepingMonthly)} a month`
                    }
                  >
                    <RangeField
                      label={bk.revenue.label}
                      hint={bk.revenue.hint}
                      min={0}
                      max={tiers.length - 1}
                      value={bookkeeping.revenueTier}
                      onChange={(index) => dispatch({ type: "setRevenueTier", index })}
                      display={tier.label}
                      valueText={`${tier.label} in annual revenue, ${
                        tier.monthly === null ? "custom quote" : `${formatMoney(tier.monthly)} per month`
                      }`}
                      minLabel={tiers[0].label}
                      maxLabel={tiers[tiers.length - 1].label}
                      ticks
                      effect={
                        <PriceTag tone={tier.monthly === null ? "yellow" : "navy"}>
                          {tier.monthly === null ? "Custom quote" : `${formatMoney(tier.monthly)}/mo`}
                        </PriceTag>
                      }
                    />
                    <RangeField
                      label={bk.locations.label}
                      hint={bk.locations.hint}
                      min={pricing.bookkeeping.locations.min}
                      max={pricing.bookkeeping.locations.max}
                      value={bookkeeping.locations}
                      onChange={(value) => dispatch({ type: "setLocations", value })}
                      display={`${bookkeeping.locations} ${unit(bookkeeping.locations, bk.locations.unit)}`}
                      valueText={`${bookkeeping.locations} ${unit(bookkeeping.locations, bk.locations.unit)}, adds ${formatMoney(
                        locationsAddOn(bookkeeping.locations),
                      )} per month`}
                      minLabel={String(pricing.bookkeeping.locations.min)}
                      maxLabel={String(pricing.bookkeeping.locations.max)}
                      ticks
                      stepper
                      stepperNoun="locations"
                      effect={
                        <PriceTag>
                          {bookkeeping.locations > 1 ? `+${formatMoney(locationsAddOn(bookkeeping.locations))}/mo` : "Included"}
                        </PriceTag>
                      }
                      footnote={bk.locations.overMax}
                    />
                    <ChoiceGroup
                      legend={bk.accounts.label}
                      hint={bk.accounts.hint}
                      options={accountChoices}
                      value={bookkeeping.accounts}
                      onChange={(id) => dispatch({ type: "setAccounts", id })}
                    />
                    <div className="grid gap-3">
                      <CheckRow
                        label={bk.salesTaxFiling.label}
                        hint={bk.salesTaxFiling.hint}
                        checked={bookkeeping.salesTaxFiling}
                        onChange={(value) => dispatch({ type: "setSalesTaxFiling", value })}
                        tag={<PriceTag>+{formatMoney(pricing.bookkeeping.salesTaxFiling.monthly)}/mo</PriceTag>}
                      />
                      <CheckRow
                        label={bk.holdingCompany.label}
                        hint={bk.holdingCompany.hint}
                        checked={bookkeeping.holdingCompany}
                        onChange={(value) => dispatch({ type: "setHoldingCompany", value })}
                      />
                    </div>
                  </ServiceCard>

                  <ServiceCard
                    icon="claim"
                    name={ib.name}
                    blurb={ib.blurb}
                    on={insuranceBilling.on}
                    onToggle={(on) => dispatch({ type: "toggle", service: "insuranceBilling", on })}
                    status={QUOTED_ON_CALL}
                    statusTone="teal"
                  >
                    <QuotedNote>{ib.note}</QuotedNote>
                    <p className="-mb-2 text-[0.9375rem] text-ink-500">{ib.optional}</p>
                    <ChoiceGroup
                      legend={ib.providers.label}
                      options={optionalChoices(ib.providers.options)}
                      value={insuranceBilling.providers ?? NOT_SURE}
                      onChange={(value) => dispatch({ type: "setBillingProviders", value: value === NOT_SURE ? null : value })}
                    />
                    <ChoiceGroup
                      legend={ib.claims.label}
                      options={optionalChoices(ib.claims.options)}
                      value={insuranceBilling.claims ?? NOT_SURE}
                      onChange={(value) => dispatch({ type: "setBillingClaims", value: value === NOT_SURE ? null : value })}
                    />
                  </ServiceCard>
                </div>
              </Reveal>

              <Reveal y={16} blur={false}>
                <p className="mb-4 mt-10 max-w-2xl font-display text-[1.25rem] font-semibold leading-snug tracking-[-0.015em]">
                  {calculatorCopy.supportingHeading}
                </p>
                <div className="grid gap-4">
                  <ServiceCard
                    compact
                    icon="bill"
                    name={ap.name}
                    blurb={ap.blurb}
                    on={accountsPayable.on}
                    onToggle={(on) => dispatch({ type: "toggle", service: "accountsPayable", on })}
                    status={accountsPayable.on ? `${formatMoney(apMonthly)} a month` : ap.from}
                  >
                    <RangeField
                      label={ap.count.label}
                      hint={ap.count.hint}
                      min={pricing.accountsPayable.min}
                      max={pricing.accountsPayable.max}
                      value={accountsPayable.count}
                      onChange={(value) => dispatch({ type: "setAccountsPayableCount", value })}
                      display={accountsPayable.count}
                      valueText={`${accountsPayable.count} ${unit(accountsPayable.count, ap.count.unit)}, ${formatMoney(apMonthly)} per month`}
                      minLabel={String(pricing.accountsPayable.min)}
                      maxLabel={String(pricing.accountsPayable.max)}
                      stepper
                      stepperNoun="bills paid per month"
                      effect={<PriceTag>{formatMoney(apMonthly)}/mo</PriceTag>}
                      footnote={ap.count.overMax}
                    />
                  </ServiceCard>

                  <ServiceCard
                    compact
                    icon="payroll"
                    name={pr.name}
                    blurb={pr.blurb}
                    on={payroll.on}
                    onToggle={(on) => dispatch({ type: "toggle", service: "payroll", on })}
                    status={payroll.on ? `${formatMoney(payrollPrice)} a month` : pr.from}
                  >
                    <RangeField
                      label={pr.count.label}
                      hint={pr.count.hint}
                      min={pricing.payroll.min}
                      max={pricing.payroll.max}
                      value={payroll.count}
                      onChange={(value) => dispatch({ type: "setPayrollCount", value })}
                      display={payroll.count}
                      valueText={`${payroll.count} ${unit(payroll.count, pr.count.unit)}, ${formatMoney(payrollPrice)} per month`}
                      minLabel={String(pricing.payroll.min)}
                      maxLabel={String(pricing.payroll.max)}
                      stepper
                      stepperNoun="employees paid"
                      effect={<PriceTag>{formatMoney(payrollPrice)}/mo</PriceTag>}
                      footnote={pr.count.overMax}
                    />
                  </ServiceCard>

                  <ServiceCard
                    compact
                    icon="compass"
                    name={pc.name}
                    blurb={pc.blurb}
                    on={practiceConsulting.on}
                    onToggle={(on) => dispatch({ type: "toggle", service: "practiceConsulting", on })}
                    status={QUOTED_ON_CALL}
                    statusTone="teal"
                  >
                    <QuotedNote>{pc.note}</QuotedNote>
                  </ServiceCard>
                </div>
              </Reveal>

              <Reveal y={16} blur={false}>
                <div className="mt-10 grid gap-5 rounded-[1.75rem] border-2 border-dashed border-stone-400 p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-7">
                  <div>
                    <p className="eyebrow text-teal-700">{implementationCopy.eyebrow}</p>
                    <h3 className="mt-2 text-[1.3125rem] leading-tight">{implementationCopy.title}</h3>
                    <p className="tabular mt-3 font-display text-[2.5rem] font-bold leading-none tracking-[-0.03em]">
                      {formatMoney(pricing.implementation.oneTime)}
                    </p>
                    <p className="mt-2 text-[0.875rem] text-ink-500">{implementationCopy.notIncluded}</p>
                  </div>
                  <p className="text-ink-500 sm:border-l-2 sm:border-stone-200 sm:pl-8">{implementationCopy.body}</p>
                </div>
              </Reveal>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* The lead form (kept mounted once opened)                    */}
            {/* ---------------------------------------------------------- */}
            {formOpened ? (
              <div hidden={step === "build"} className="rounded-[2.5rem] bg-stone p-5 sm:p-9">
                {step === "contact" ? (
                  <button
                    type="button"
                    onClick={editSelections}
                    className="-ml-2 mb-6 inline-flex h-11 items-center gap-2 rounded-full px-3 font-display text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-ink/5"
                  >
                    <Icon name="arrowRight" size={17} className="rotate-180" />
                    {leadCopy.back}
                  </button>
                ) : null}

                {step !== "sent" ? (
                  <>
                    <h3 ref={formHeadingRef} tabIndex={-1} className="text-heading outline-none">
                      {leadCopy.heading}
                    </h3>
                    <p className="mt-3 max-w-xl text-ink-500">{leadCopy.body}</p>

                    {/* The figure again, for phones, where the card is out of view. */}
                    <div className="mt-6 rounded-[1.5rem] bg-ink p-5 text-white lg:hidden">
                      <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-teal-200">
                        {calculatorCopy.estimateLabel}
                      </p>
                      <div className="mt-1.5">
                        <EstimateFigure estimate={estimate} size="sm" />
                      </div>
                      {estimate.hasPriced && !estimate.customQuote && estimate.quotedOnCall.length ? (
                        <p className="mt-1 text-[0.8125rem] text-white/75">
                          + {estimate.quotedOnCall.join(", ")} (quoted on your call)
                        </p>
                      ) : null}
                    </div>

                    <details className="group mt-6 rounded-[1.5rem] bg-white">
                      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[1.5rem] px-5 font-display font-semibold [&::-webkit-details-marker]:hidden">
                        {leadCopy.summaryToggle}
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-stone transition-transform duration-300 group-open:rotate-180">
                          <Icon name="chevronDown" size={17} strokeWidth={2.4} />
                        </span>
                      </summary>
                      <pre className="tabular overflow-x-auto whitespace-pre-wrap border-t-2 border-stone-200 px-5 py-4 font-sans text-[0.9375rem] leading-relaxed text-ink-700">
                        {summary}
                      </pre>
                    </details>
                  </>
                ) : null}

                <LeadForm
                  formName="Pricing Form"
                  details={summary}
                  submitLabel={leadCopy.submit}
                  success={<SentPanel onShown={markSent} />}
                  className={step === "sent" ? undefined : "mt-8"}
                />
              </div>
            ) : null}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* The estimate: sticky card on desktop                          */}
          {/* ------------------------------------------------------------ */}
          <aside aria-label="Your estimate" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <EstimateCard estimate={estimate} step={step} onGetStarted={getStarted} onEdit={editSelections} />
          </aside>
        </div>
      </Container>

      <MobileEstimateBar estimate={estimate} visible={barVisible && step === "build"} onGetStarted={getStarted} />
    </Section>
  );
}
