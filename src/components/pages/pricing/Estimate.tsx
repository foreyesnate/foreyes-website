"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import { CUSTOM_QUOTE, QUOTED_ON_CALL, calculatorCopy, implementationCopy, serviceCopy } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { estimateExtras, estimateMode, formatMoney, type Estimate } from "@/lib/pricing";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A dollar figure whose digits roll to their new values, like a counter on a
 * fuel pump. Each place keeps its own column, so only the digits that change
 * move. The global reduced-motion rule turns the roll into an instant swap.
 */
export function RollingNumber({ value, className }: { value: number; className?: string }) {
  const text = formatMoney(value);
  const chars = text.split("");
  return (
    <span className={cn("inline-flex", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex leading-[1.1]">
        {chars.map((char, i) => {
          // Keyed from the right: the ones column stays the ones column.
          const place = chars.length - i;
          if (!/\d/.test(char)) return <span key={`s${place}`}>{char}</span>;
          return (
            <span key={`d${place}`} className="relative inline-block h-[1.1em] overflow-hidden">
              {/* The current digit, unseen, gives the column its natural width. */}
              <span className="invisible">{char}</span>
              <span
                className="absolute left-0 top-0 block transition-transform duration-500 ease-(--ease-focus) will-change-transform"
                style={{ transform: `translateY(${-Number(char) * 10}%)` }}
              >
                {DIGITS.map((digit) => (
                  <span key={digit} className="block h-[1.1em]">
                    {digit}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}

/** Insurance Billing with no amounts entered: the two rates stand in for a number. */
function RatesFigure({ lg }: { lg: boolean }) {
  const ib = serviceCopy.insuranceBilling;
  if (!lg) {
    return (
      <span className="block font-display text-[0.9375rem] font-bold leading-tight tracking-[-0.02em] text-yellow min-[420px]:text-[1.0625rem]">
        {ib.ratesShort}
      </span>
    );
  }
  const rows = [
    { rate: ib.medical.rate, name: "Medical plans", note: null },
    { rate: ib.vision.rate, name: "Vision plans", note: ib.labFees },
  ];
  return (
    <span className="grid gap-3">
      {rows.map((row) => {
        const [figure, ...basis] = row.rate.split(" ");
        return (
          <span key={row.name} className="flex items-center gap-3.5">
            <span className="tabular w-[4.25rem] shrink-0 font-display text-[2.75rem] font-bold leading-none tracking-[-0.04em] text-yellow">
              {figure}
            </span>
            <span className="min-w-0 leading-snug">
              <span className="block font-display text-[1.0625rem] font-semibold">
                {basis.join(" ")}
                <span className="font-normal text-white/65">, {row.name.toLowerCase()}</span>
              </span>
              {row.note ? <span className="block text-[0.875rem] text-white/75">{row.note}</span> : null}
            </span>
          </span>
        );
      })}
    </span>
  );
}

/** The headline of the estimate: a rolling figure, a custom-quote line, rates, or "quoted". */
export function EstimateFigure({
  estimate,
  size = "lg",
  suffix = true,
}: {
  estimate: Estimate;
  size?: "lg" | "sm";
  /** Show "per month" beside the figure. The mobile bar puts it in its label instead. */
  suffix?: boolean;
}) {
  const lg = size === "lg";
  const mode = estimateMode(estimate);
  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* Spans throughout: this also renders inside the mobile bar's button. */}
      <motion.span
        key={mode}
        className="block"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {mode === "figure" ? (
          <span className="flex flex-wrap items-baseline gap-x-2.5">
            <RollingNumber
              value={estimate.monthly}
              className={cn(
                "font-display font-bold tracking-[-0.04em] text-yellow",
                lg ? "text-[4rem] leading-none xl:text-[4.5rem]" : "text-[1.75rem] leading-none",
              )}
            />
            {suffix ? (
              <span className={cn("font-display font-semibold text-white/80", lg ? "text-lg" : "text-[0.8125rem]")}>
                {calculatorCopy.perMonth}
              </span>
            ) : null}
          </span>
        ) : mode === "rates" ? (
          <RatesFigure lg={lg} />
        ) : (
          <span
            className={cn(
              "block font-display font-bold tracking-[-0.025em] text-yellow",
              lg ? "text-[2rem] leading-[1.08]" : "text-[1.0625rem] leading-tight",
            )}
          >
            {mode === "custom" ? CUSTOM_QUOTE : QUOTED_ON_CALL}
          </span>
        )}
      </motion.span>
    </AnimatePresence>
  );
}

/** The itemised monthly breakdown. */
export function EstimateLines({ estimate }: { estimate: Estimate }) {
  return (
    <div>
      {estimate.lines.length ? (
        <ul className="grid">
          <AnimatePresence initial={false}>
            {estimate.lines.map((line) => (
              <motion.li
                key={line.id}
                layout="position"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-2">
                  <span className="min-w-0">
                    <span className="block font-display text-[0.9375rem] font-semibold leading-snug">{line.label}</span>
                    {line.detail ? (
                      <span className="block text-[0.8125rem] leading-snug text-white/65">{line.detail}</span>
                    ) : null}
                  </span>
                  {line.kind === "priced" ? (
                    <span className="tabular shrink-0 font-display text-[0.9375rem] font-semibold">
                      {formatMoney(line.amount)}
                    </span>
                  ) : (
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-1 font-display text-[0.75rem] font-semibold",
                        line.kind === "custom" ? "bg-yellow text-ink" : "bg-teal-200 text-ink",
                      )}
                    >
                      {line.kind === "custom" ? "Custom quote" : line.kind === "rate" ? line.note : "Quoted on your call"}
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <p className="border-b border-white/10 py-3 text-[0.9375rem] text-white/70">{calculatorCopy.empty}</p>
      )}
    </div>
  );
}

/** The one-time fee, kept visibly apart from the monthly lines. */
export function ImplementationLine({ estimate, className }: { estimate: Estimate; className?: string }) {
  return (
    <div className={cn("flex items-baseline justify-between gap-4", className)}>
      <span>
        <span className="block font-display text-[0.9375rem] font-semibold leading-snug">{implementationCopy.short}</span>
        <span className="block text-[0.8125rem] leading-snug text-white/65">{implementationCopy.notIncluded}</span>
      </span>
      <span className="tabular shrink-0 font-display text-[0.9375rem] font-semibold">
        {formatMoney(estimate.oneTime)}
      </span>
    </div>
  );
}

/** What belongs with the figure but is not in it: "+ Applicable lab fees (vision plan billing)". */
export function EstimateExtras({ estimate, className }: { estimate: Estimate; className?: string }) {
  const extras = estimateExtras(estimate);
  if (!extras.length) return null;
  return (
    <ul className={cn("grid gap-1", className)}>
      {extras.map((extra) => (
        <li key={extra.name} className="flex items-baseline gap-2 font-display font-semibold text-white">
          <span aria-hidden="true" className="text-yellow">
            +
          </span>
          <span>
            {extra.name} <span className="font-sans font-normal text-white/70">({extra.note})</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

const getStartedClass =
  "group/btn inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-yellow px-8 font-display text-[1.0625rem] font-semibold text-ink transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-yellow-200 active:scale-[0.97]";

/** Desktop: the sticky card beside the controls. */
export function EstimateCard({
  estimate,
  step,
  onGetStarted,
  onEdit,
}: {
  estimate: Estimate;
  step: "build" | "contact" | "sent";
  onGetStarted: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="relative flex max-h-[calc(100dvh-8rem)] flex-col overflow-hidden rounded-[2.5rem] bg-ink p-7 text-white shadow-float xl:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgb(65_93_158/0.7),transparent)]"
      />
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute -left-6 bottom-0 h-40 w-56 text-white/[0.07] [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div className="relative">
        <p className="eyebrow flex items-center gap-2.5 text-teal-200">
          <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-yellow ring-[3px] ring-yellow/25" />
          {calculatorCopy.estimateLabel}
        </p>
        <div className="mt-4">
          <EstimateFigure estimate={estimate} />
        </div>
        <EstimateExtras estimate={estimate} className="mt-3 text-[0.9375rem]" />
        {estimate.customQuote ? (
          <p className="mt-3 text-[0.9375rem] leading-snug text-white/75">{calculatorCopy.customQuoteBody}</p>
        ) : null}
      </div>

      {/* Long breakdowns scroll inside the card so the button stays in view. */}
      <div
        tabIndex={0}
        role="group"
        aria-label="Estimate breakdown"
        className="relative -mr-3 mt-5 min-h-0 flex-1 overflow-y-auto border-t border-white/10 pr-3 focus-visible:outline-offset-[-3px] [mask-image:linear-gradient(to_bottom,black_calc(100%-1rem),transparent)] [scrollbar-color:rgb(255_255_255/0.3)_transparent] [scrollbar-width:thin]"
      >
        <div className="pb-3">
          <EstimateLines estimate={estimate} />
        </div>
      </div>
      <ImplementationLine estimate={estimate} className="relative" />

      <div className="relative mt-5">
        {step === "build" ? (
          <button type="button" onClick={onGetStarted} className={getStartedClass}>
            {calculatorCopy.getStarted}
            <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        ) : step === "contact" ? (
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 font-display text-[1.0625rem] font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
          >
            Edit My Selections
          </button>
        ) : (
          <p className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-display font-semibold">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow text-ink">
              <Icon name="check" size={16} strokeWidth={3} />
            </span>
            Estimate sent
          </p>
        )}
        <p className="mt-4 text-[0.8125rem] leading-snug text-white/65">{calculatorCopy.disclaimer}</p>
      </div>
    </div>
  );
}

/** Mobile: a compact bar pinned to the bottom that expands into the breakdown. */
export function MobileEstimateBar({
  estimate,
  visible,
  onGetStarted,
}: {
  estimate: Estimate;
  visible: boolean;
  onGetStarted: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const expanded = open && visible;

  useEffect(() => {
    if (!expanded) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  // Tell the chat bubble to move out of the way while this bar is on screen
  // (see ChatWidget.tsx and the --chat-* variables in globals.css).
  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    root.setAttribute("data-estimate-bar", expanded ? "open" : "bar");
    return () => root.removeAttribute("data-estimate-bar");
  }, [visible, expanded]);

  const mode = estimateMode(estimate);
  const extras = estimateExtras(estimate);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="bar"
          initial={{ y: "130%" }}
          animate={{ y: 0 }}
          exit={{ y: "130%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
        >
          <section
            aria-label="Your estimate"
            className="overflow-hidden rounded-[1.75rem] bg-ink text-white shadow-float ring-1 ring-white/10"
          >
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-h-[58dvh] overflow-y-auto px-5 pb-2 pt-5">
                    <p className="eyebrow text-teal-200">Your selections</p>
                    <div className="mt-2">
                      <EstimateLines estimate={estimate} />
                      <ImplementationLine estimate={estimate} className="pt-3" />
                    </div>
                    <EstimateExtras estimate={estimate} className="mt-4 text-[0.875rem]" />
                    {estimate.customQuote ? (
                      <p className="mt-4 text-[0.875rem] leading-snug text-white/75">{calculatorCopy.customQuoteBody}</p>
                    ) : null}
                    <p className="mt-4 text-[0.8125rem] leading-snug text-white/65">{calculatorCopy.disclaimer}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className={cn("flex items-center gap-2 p-2 pl-2.5", expanded && "border-t border-white/10")}>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
                className="flex min-h-14 min-w-0 flex-1 items-center gap-3 rounded-[1.25rem] px-2.5 py-1.5 text-left transition-colors hover:bg-white/5"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition-transform duration-300",
                    expanded ? "rotate-0" : "rotate-180",
                  )}
                >
                  <Icon name="chevronDown" size={18} strokeWidth={2.4} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-teal-200">
                    {mode === "figure" ? "Monthly estimate" : mode === "rates" ? serviceCopy.insuranceBilling.name : calculatorCopy.estimateLabel}
                    <span className="sr-only">. {expanded ? "Hide" : "Show"} the breakdown.</span>
                  </span>
                  <span className="mt-1 block">
                    <EstimateFigure estimate={estimate} size="sm" suffix={false} />
                  </span>
                  {mode === "rates" ? (
                    <span className="mt-1 block text-[0.75rem] leading-tight text-white/75">
                      {serviceCopy.insuranceBilling.ratesBasis}
                      {extras.length ? `, + ${extras.length} more` : ""}
                    </span>
                  ) : extras.length ? (
                    <span className="mt-1 block text-[0.75rem] leading-tight text-white/75">
                      {extras.length === 1
                        ? `+ ${extras[0].name} (${extras[0].note})`
                        : `+ ${extras.length} items outside this number`}
                    </span>
                  ) : null}
                </span>
              </button>
              <button
                type="button"
                onClick={onGetStarted}
                className="inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-yellow px-5 font-display text-[0.9375rem] font-semibold text-ink active:scale-[0.97]"
              >
                {calculatorCopy.getStarted}
              </button>
            </div>
          </section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
