"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { calculatorCopy, fieldCopy, leadCopy, resultCopy } from "@/content/billing-calculator";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { StickyColumn } from "@/components/ui/StickyColumn";
import { Reveal } from "@/components/motion/Reveal";
import { BookingCalendar } from "@/components/site/BookingCalendar";
import { LeadForm } from "@/components/site/LeadForm";
import { PriceTag, RangeField } from "@/components/pages/pricing/controls";
import {
  billingCalculatorConfig,
  billingHeadline,
  buildBillingSummary,
  clampField,
  computeBillingEstimate,
  defaultBillingValues,
  displayBillingEstimate,
  INPUT_FIELDS,
  type BillingField,
  type BillingValues,
  type RangeRule,
} from "@/lib/billing-calculator";
import { cn } from "@/lib/cn";
import { MoneyRangeField } from "./MoneyRangeField";
import { ResultBar, ResultCard, ResultRecap, type Step } from "./Result";
import { unbroken } from "./unbroken";

const { inputs, assumptions } = billingCalculatorConfig;

/** Where a sticky column rests under the header (top-32), as in <StickyColumn>. */
const STICKY_LINE = 128;

// Shown only when JavaScript is off, in place of the calculator. Kept here
// rather than in the content file because it is the one line a visitor with
// scripts on never sees; move it there if the wording needs an owner.
const noScriptNote =
  "The calculator needs JavaScript, and it is turned off in your browser. Turn it on and reload this page to enter your numbers. You can also bring your numbers to a Discovery Call.";

/** A value that only updates once it has stopped changing for `delay` ms. */
function useSettled<T>(value: T, delay: number): T {
  const [settled, setSettled] = useState(value);
  useEffect(() => {
    const timer = window.setTimeout(() => setSettled(value), delay);
    return () => window.clearTimeout(timer);
  }, [value, delay]);
  return settled;
}

/** A percentage slider with minus and plus buttons, built on the pricing calculator's RangeField. */
function PercentField({
  field,
  rule,
  value,
  onChange,
}: {
  field: BillingField;
  rule: RangeRule;
  value: number;
  onChange: (field: BillingField, next: number) => void;
}) {
  const copy = fieldCopy[field];
  return (
    <RangeField
      label={copy.label}
      hint={copy.hint}
      min={rule.min}
      max={rule.max}
      step={rule.step}
      value={value}
      onChange={(next) => onChange(field, next)}
      display={`${value}%`}
      valueText={`${value} percent`}
      minLabel={`${rule.min}%`}
      maxLabel={`${rule.max}%`}
      stepper
      stepperNoun={copy.noun}
    />
  );
}

/** Shown by the lead form once the numbers have been sent. */
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

export function BillingCalculator() {
  const [values, setValues] = useState<BillingValues>(defaultBillingValues);
  // True until the visitor changes one of the four practice numbers. While it
  // is, everything on show is labelled as an example.
  const [usingExamples, setUsingExamples] = useState(true);
  const [step, setStep] = useState<Step>("build");
  // Once opened, the form stays mounted (hidden) so going back to edit the
  // numbers never throws away what was typed into it.
  const [formOpened, setFormOpened] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);
  const [recapShown, setRecapShown] = useState(false);
  const assumptionsId = useId();

  const estimate = useMemo(() => computeBillingEstimate(values), [values]);
  const display = useMemo(() => displayBillingEstimate(values, estimate), [values, estimate]);
  const summary = useMemo(() => buildBillingSummary(values, usingExamples), [values, usingExamples]);

  // Read out politely, and only once a dragged slider has come to rest.
  const announcement = useSettled(
    `${usingExamples ? `${resultCopy.exampleLabel}. ` : ""}${billingHeadline(display)}`,
    700,
  );

  const gridRef = useRef<HTMLDivElement>(null);
  const formHeadingRef = useRef<HTMLHeadingElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const recapRef = useRef<HTMLDivElement>(null);
  const previousStep = useRef<Step>("build");

  const setField = useCallback((field: BillingField, next: number) => {
    setValues((current) => ({ ...current, [field]: clampField(field, next) }));
    if ((INPUT_FIELDS as readonly BillingField[]).includes(field)) setUsingExamples(false);
  }, []);

  // The pinned bar belongs to the calculator: show it only while the
  // calculator is on screen, so it never sits over the sections below.
  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setBarVisible(entry.isIntersecting), {
      rootMargin: "-30% 0px -15% 0px",
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Short desktop screens: the result card is taller than the room under the
  // header, so it cannot stick and scrolls away while the numbers beside it
  // are still being changed. Once most of it has gone, a short recap that
  // follows it down the column is shown, and that one does stay in view.
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const recap = recapRef.current;
        const cardBox = entry.boundingClientRect;
        const leaving = entry.intersectionRatio < 0.3 && cardBox.top < STICKY_LINE;
        // Where the card does stick, the recap rests behind it and the two
        // overlap. The recap is only ever shown clear of the card.
        setRecapShown(leaving && !!recap && recap.getBoundingClientRect().top >= cardBox.bottom);
      },
      { rootMargin: `-${STICKY_LINE}px 0px 0px 0px`, threshold: [0, 0.3, 0.6] },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // Moving between the numbers and the form: bring the new view to the top
  // and hand keyboard focus to it.
  useEffect(() => {
    if (previousStep.current === step) return;
    const from = previousStep.current;
    previousStep.current = step;
    if (step === "sent") {
      // The thank-you is shorter than the form it replaces. Bring it to the
      // top so it is not left above the viewport. (LeadForm announces it.)
      gridRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
      return;
    }
    const target = step === "form" ? formHeadingRef.current : from === "form" ? controlsRef.current : null;
    if (!target) return;
    gridRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
    target.focus({ preventScroll: true });
  }, [step]);

  const openForm = useCallback(() => {
    setFormOpened(true);
    setStep("form");
  }, []);
  const editNumbers = useCallback(() => setStep("build"), []);
  const markSent = useCallback(() => setStep("sent"), []);

  const collections = fieldCopy.monthlyCollections;
  const aged = fieldCopy.agedAR;

  return (
    <Section tone="white" id="calculator" aria-labelledby="calculator-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="calculator-title"
            eyebrow={calculatorCopy.eyebrow}
            title={calculatorCopy.heading}
            lede={calculatorCopy.lede}
          />
        </Reveal>

        {/* One polite announcement of the result for screen reader users. */}
        <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </p>

        {/* The calculator runs in the browser. With JavaScript off its sliders
            would move and nothing would change, so it is put away and this
            note stands where it would be. */}
        <noscript>
          <style>{`[data-billing-calculator]{display:none!important}`}</style>
          <div className="mt-10 max-w-2xl rounded-[1.75rem] border-2 border-navy bg-white p-6 sm:p-8">
            <p className="text-ink-700">{noScriptNote}</p>
            <a
              href={site.bookingHref}
              className="mt-5 inline-flex min-h-12 items-center rounded-full bg-yellow px-6 font-display font-semibold text-ink"
            >
              {resultCopy.primary}
            </a>
          </div>
        </noscript>

        <div
          ref={gridRef}
          data-billing-calculator=""
          className="mt-12 grid scroll-mt-28 gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_27rem] xl:gap-14"
        >
          <div className="min-w-0">
            {/* ---------------------------------------------------------- */}
            {/* The numbers                                                 */}
            {/* ---------------------------------------------------------- */}
            {/* Below the desktop layout the result bar is pinned over the bottom
                of the screen, with the chat bubble lifted above its right-hand
                end. The scroll margin keeps whichever control takes keyboard
                focus clear of both. */}
            <div
              ref={controlsRef}
              tabIndex={-1}
              hidden={step !== "build"}
              className="outline-none max-lg:[&_:is(input,button)]:scroll-mb-44"
            >
              <Reveal y={16} blur={false}>
                <div className="rounded-[1.75rem] border-2 border-navy bg-white shadow-lift">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 p-5 sm:px-7 sm:py-6">
                    <h3 className="flex items-center gap-3.5 text-subheading sm:text-[1.625rem]">
                      <span aria-hidden="true" className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-white sm:grid">
                        <Icon name="claim" size={24} />
                      </span>
                      {calculatorCopy.inputsTitle}
                    </h3>
                    {usingExamples ? <PriceTag tone="yellow">{calculatorCopy.exampleTag}</PriceTag> : null}
                  </div>
                  {/* The labels here run to two and three lines, so all of them
                      take the tighter leading (the shared slider's label has none). */}
                  <div className="grid grid-cols-[minmax(0,1fr)] gap-7 border-t-2 border-stone-200 p-5 sm:p-7 [&>*+*]:border-t-2 [&>*+*]:border-stone-200 [&>*+*]:pt-7 [&_label]:leading-snug">
                    <MoneyRangeField
                      label={collections.label}
                      hint={collections.hint}
                      noun={collections.noun}
                      rule={inputs.monthlyCollections}
                      value={values.monthlyCollections}
                      onChange={(next) => setField("monthlyCollections", next)}
                      suffix={calculatorCopy.perMonth}
                      footnote={collections.footnote}
                    />
                    <PercentField field="denialRate" rule={inputs.denialRate} value={values.denialRate} onChange={setField} />
                    <PercentField field="unworkedShare" rule={inputs.unworkedShare} value={values.unworkedShare} onChange={setField} />
                    <MoneyRangeField
                      label={aged.label}
                      hint={aged.hint}
                      noun={aged.noun}
                      rule={inputs.agedAR}
                      value={values.agedAR}
                      onChange={(next) => setField("agedAR", next)}
                      footnote={aged.footnote}
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal y={16} blur={false}>
                {/* Closed to start with, but plainly there: the panel states both
                    assumptions and their current values before it is opened.
                    A real button inside a heading, like the FAQ accordion, so
                    it is found by heading and says whether it is open. */}
                <div
                  className={cn(
                    "mt-5 rounded-[1.75rem] border-2",
                    assumptionsOpen ? "border-stone-300" : "border-dashed border-stone-400",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={assumptionsOpen}
                      aria-controls={assumptionsOpen ? assumptionsId : undefined}
                      onClick={() => setAssumptionsOpen((open) => !open)}
                      className="group flex w-full flex-wrap items-center gap-x-5 gap-y-3 rounded-[1.625rem] p-5 text-left sm:p-7"
                    >
                      <span className="min-w-0 flex-1 basis-64">
                        <span className="eyebrow block text-teal-700">{calculatorCopy.assumptions.title}</span>
                        <span className="mt-2 block font-display text-[1.125rem] font-semibold leading-snug tracking-[-0.015em]">
                          {unbroken(calculatorCopy.assumptions.summary(values.recoveryRate, values.agedCollectible))}
                        </span>
                      </span>
                      <span className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-stone px-4 font-display text-[0.9375rem] font-semibold tracking-normal transition-colors group-hover:bg-stone-200">
                        {assumptionsOpen ? calculatorCopy.assumptions.close : calculatorCopy.assumptions.open}
                        <Icon
                          name="chevronDown"
                          size={17}
                          strokeWidth={2.4}
                          className={cn("transition-transform duration-300", assumptionsOpen && "rotate-180")}
                        />
                      </span>
                    </button>
                  </h3>
                  {assumptionsOpen ? (
                    <div
                      id={assumptionsId}
                      className="grid grid-cols-[minmax(0,1fr)] gap-7 border-t-2 border-stone-200 p-5 sm:p-7 [&_label]:leading-snug"
                    >
                      <p className="max-w-xl text-ink-500">{calculatorCopy.assumptions.body}</p>
                      <PercentField field="recoveryRate" rule={assumptions.recoveryRate} value={values.recoveryRate} onChange={setField} />
                      <PercentField
                        field="agedCollectible"
                        rule={assumptions.agedCollectible}
                        value={values.agedCollectible}
                        onChange={setField}
                      />
                    </div>
                  ) : null}
                </div>

                <p className="mt-5 flex items-start gap-3 text-[0.9375rem] leading-snug text-ink-500">
                  <Icon name="shield" size={19} className="mt-px shrink-0 text-teal-700" />
                  {calculatorCopy.privacy}
                </p>
              </Reveal>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* The lead form (kept mounted once opened)                    */}
            {/* ---------------------------------------------------------- */}
            {formOpened ? (
              <div hidden={step === "build"} className="rounded-[2.5rem] bg-stone p-5 sm:p-9">
                {step === "form" ? (
                  <button
                    type="button"
                    onClick={editNumbers}
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

                    {/* The result again, for phones, where the card is out of view. */}
                    <div className="mt-6 lg:hidden">
                      <ResultRecap display={display} usingExamples={usingExamples} />
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
                  formName="Billing Calculator"
                  details={summary}
                  detailsField="billing_calculator_details"
                  submitLabel={leadCopy.submit}
                  success={<SentPanel onShown={markSent} />}
                  className={step === "sent" ? undefined : "mt-8"}
                />
              </div>
            ) : null}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* The result: a card on desktop, sticky only while it fits      */}
          {/* ------------------------------------------------------------ */}
          <aside aria-label={resultCopy.label} className="hidden lg:block">
            <StickyColumn>
              <div ref={cardRef}>
                <ResultCard display={display} usingExamples={usingExamples} step={step} onSend={openForm} onEdit={editNumbers} />
              </div>
            </StickyColumn>
            {/* Short screens only (see the effect above): the result again, in
                brief, once the card has scrolled away. It repeats the card, so
                it is kept from screen readers, who have the card and the
                announcement. */}
            {step === "build" ? (
              <div
                ref={recapRef}
                aria-hidden="true"
                // Fades in, but goes at once: if the card starts to stick
                // (it gets shorter when the example label clears) it lands
                // where the recap is, and the two must not cross-fade.
                className={cn(
                  "sticky top-32 mt-6",
                  recapShown ? "opacity-100 transition-opacity duration-300" : "invisible opacity-0",
                )}
              >
                <ResultRecap display={display} usingExamples={usingExamples} className="shadow-float" />
              </div>
            ) : null}
          </aside>
        </div>
      </Container>

      <ResultBar display={display} usingExamples={usingExamples} visible={barVisible && step === "build"} onSend={openForm} />
    </Section>
  );
}
