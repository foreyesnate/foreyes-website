"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { resultCopy } from "@/content/billing-calculator";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { PinnedBar } from "@/components/ui/PinnedBar";
import { RollingNumber } from "@/components/pages/pricing/Estimate";
import { cn } from "@/lib/cn";
import { amountText, type BillingDisplay, type DisplayAmount } from "@/lib/billing-calculator";
import { formatMoney } from "@/lib/pricing";

export type Step = "build" | "form" | "sent";

/** "Every year" and "One time": the two results are never allowed to look like one. */
function Tag({ children, tone }: { children: ReactNode; tone: "yearly" | "once" }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-2 rounded-full px-3 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em]",
        tone === "yearly" ? "bg-white/10 text-white" : "bg-teal-200 text-ink",
      )}
    >
      {tone === "yearly" ? <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-yellow" /> : null}
      {children}
    </span>
  );
}

/** Long figures ("$1,250,000") step down a size so they never leave the card. */
function figureSize(amount: DisplayAmount, lg: boolean): string {
  const length = amount.kind === "amount" ? formatMoney(amount.value).length : 4;
  if (!lg) {
    return length > 9
      ? "text-[1.125rem] max-[359px]:text-[1rem]"
      : length > 7
        ? "text-[1.3125rem] max-[359px]:text-[1.125rem]"
        : "text-[1.5rem] max-[359px]:text-[1.25rem]";
  }
  return length > 9 ? "text-[2.375rem]" : length > 7 ? "text-[2.875rem]" : "text-[3.25rem] xl:text-[3.75rem]";
}

/** "about $16,800" as a rolling figure, or "less than $100" when it rounds to nothing. */
function Figure({ amount, className }: { amount: Exclude<DisplayAmount, { kind: "zero" }>; className?: string }) {
  return <RollingNumber value={amount.kind === "small" ? amount.under : amount.value} className={className} />;
}

function qualifier(amount: Exclude<DisplayAmount, { kind: "zero" }>) {
  return amount.kind === "small" ? resultCopy.lessThan : resultCopy.about;
}

/**
 * The result in full: the yearly loss, what that is per month and as a share
 * of collections, then the one-time backlog in its own panel. Used large in
 * the desktop card and small inside the phone bar and the form.
 */
export function ResultBreakdown({ display, size = "lg" }: { display: BillingDisplay; size?: "lg" | "sm" }) {
  const lg = size === "lg";
  const { yearly, monthly, backlog } = display;
  const copy = resultCopy;
  return (
    <div>
      <Tag tone="yearly">{copy.yearly.tag}</Tag>
      {!display.hasCollections ? (
        <p className={cn("mt-3 font-display font-semibold leading-snug", lg ? "text-[1.375rem]" : "text-[1.0625rem]")}>
          {copy.yearly.noCollections}
        </p>
      ) : yearly.kind === "zero" ? (
        <>
          <p className={cn("mt-3 font-display font-semibold leading-[1.2] tracking-[-0.015em]", lg ? "text-[1.5rem]" : "text-[1.125rem]")}>
            {copy.yearly.zeroTitle}
          </p>
          <p className={cn("mt-2 leading-snug text-white/75", lg ? "text-[0.9375rem]" : "text-[0.875rem]")}>{copy.yearly.zeroBody}</p>
        </>
      ) : (
        <>
          <p className={cn("flex flex-wrap items-baseline gap-x-2.5", lg ? "mt-3" : "mt-2.5")}>
            <span className={cn("font-display font-semibold text-white/80", lg ? "text-[1.0625rem]" : "text-[0.875rem]")}>
              {qualifier(yearly)}
            </span>
            <Figure
              amount={yearly}
              className={cn("font-display font-bold leading-none tracking-[-0.04em] text-yellow", figureSize(yearly, lg))}
            />
            <span className={cn("font-display font-semibold text-white/80", lg ? "text-[1.0625rem]" : "text-[0.875rem]")}>
              {copy.yearly.unit}
            </span>
          </p>
          <p className={cn("leading-snug text-white", lg ? "mt-2 text-[0.9375rem]" : "mt-1.5 text-[0.875rem]")}>{copy.yearly.caption}</p>
          <ul className={cn("grid gap-1 border-t border-white/10 leading-snug text-white/75", lg ? "mt-3.5 pt-3.5 text-[0.9375rem]" : "mt-3 pt-3 text-[0.875rem]")}>
            {monthly.kind !== "zero" ? (
              <li>
                <span className="tabular font-display font-semibold text-white">{amountText(monthly)}</span> {copy.yearly.perMonth}
              </li>
            ) : null}
            <li>
              <span className="tabular font-display font-semibold text-white">{display.share}</span> {copy.yearly.share}
            </li>
          </ul>
        </>
      )}

      {/* The one-time backlog sits in its own panel, apart from the yearly loss. */}
      <div className={cn("rounded-2xl bg-white/[0.07] ring-1 ring-inset ring-white/10", lg ? "mt-4 p-4" : "mt-4 p-3.5")}>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <Tag tone="once">{copy.backlog.tag}</Tag>
          {backlog.kind === "zero" ? null : (
            <span className="text-[0.8125rem] leading-snug text-white/65">{copy.backlog.note}</span>
          )}
        </p>
        {backlog.kind === "zero" ? (
          <p className={cn("mt-2.5 font-display font-semibold leading-snug", lg ? "text-[1.0625rem]" : "text-[0.9375rem]")}>
            {copy.backlog.zeroTitle}
          </p>
        ) : (
          <>
            <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-[0.875rem] font-semibold text-white/80">{qualifier(backlog)}</span>
              <Figure
                amount={backlog}
                className={cn("font-display font-bold leading-none tracking-[-0.03em] text-white", lg ? "text-[1.75rem]" : "text-[1.375rem]")}
              />
            </p>
            <p className={cn("mt-1.5 leading-snug text-white", lg ? "text-[0.9375rem]" : "text-[0.875rem]")}>{copy.backlog.caption}</p>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * The heading of every result view. Until the visitor changes one of the four
 * numbers it carries a clear "Example numbers" label and an invitation to
 * enter their own.
 */
function ResultHeader({ title, usingExamples, dot = false }: { title: string; usingExamples: boolean; dot?: boolean }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <p className="eyebrow flex items-center gap-2.5 text-teal-200">
          {dot ? <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-yellow ring-[3px] ring-yellow/25" /> : null}
          {title}
        </p>
        {/* White, not yellow: the figure and the button already carry the accent. */}
        {usingExamples ? (
          <p className="-my-1 inline-flex h-7 items-center rounded-full bg-white px-3 font-display text-[0.75rem] font-semibold text-ink">
            {resultCopy.exampleLabel}
          </p>
        ) : null}
      </div>
      {usingExamples ? <p className="mt-2.5 text-[0.875rem] leading-snug text-white/80">{resultCopy.exampleBody}</p> : null}
    </>
  );
}

const primaryClass =
  "group/btn inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-yellow px-6 font-display text-[1.0625rem] font-semibold text-ink transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-yellow-200 active:scale-[0.97]";

const secondaryClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-white/25 px-5 py-2 text-center font-display text-[0.9375rem] font-semibold leading-tight text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink";

/** Desktop: the result card beside the inputs. */
export function ResultCard({
  display,
  usingExamples,
  step,
  onSend,
  onEdit,
}: {
  display: BillingDisplay;
  usingExamples: boolean;
  step: Step;
  onSend: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-7 text-white shadow-float">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgb(65_93_158/0.7),transparent)]"
      />
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute -left-6 bottom-0 h-40 w-56 text-white/[0.07] [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div className="relative">
        <ResultHeader title={resultCopy.label} usingExamples={usingExamples} dot />
        <div className="mt-4">
          <ResultBreakdown display={display} />
        </div>
      </div>

      <div className="relative mt-4 grid gap-2.5">
        <Link href={site.bookingHref} className={primaryClass}>
          {resultCopy.primary}
          <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
        {step === "build" ? (
          <button type="button" onClick={onSend} className={secondaryClass}>
            {resultCopy.secondary}
          </button>
        ) : step === "form" ? (
          <button type="button" onClick={onEdit} className={secondaryClass}>
            {resultCopy.edit}
          </button>
        ) : (
          <p className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-display font-semibold">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow text-ink">
              <Icon name="check" size={16} strokeWidth={3} />
            </span>
            {resultCopy.sent}
          </p>
        )}
      </div>
      <p className="relative mt-4 text-[0.8125rem] leading-snug text-white/65">{resultCopy.disclaimer}</p>
    </div>
  );
}

/**
 * The result again, in brief. Phones see it on the form step, where the bar
 * is out of the way. Short desktop screens see it once the card has scrolled
 * out of view.
 */
export function ResultRecap({
  display,
  usingExamples,
  className,
}: {
  display: BillingDisplay;
  usingExamples: boolean;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[1.5rem] bg-ink p-5 text-white", className)}>
      <ResultHeader title={resultCopy.label} usingExamples={usingExamples} />
      <div className="mt-4">
        <ResultBreakdown display={display} size="sm" />
      </div>
    </div>
  );
}

/** Phones and tablets: the yearly figure pinned to the bottom, opening into the breakdown. */
export function ResultBar({
  display,
  usingExamples,
  visible,
  onSend,
}: {
  display: BillingDisplay;
  usingExamples: boolean;
  visible: boolean;
  onSend: () => void;
}) {
  const { yearly } = display;
  return (
    <PinnedBar
      visible={visible}
      label={resultCopy.label}
      // On the narrowest phones the figure needs the chevron's room.
      chevronClassName="max-[379px]:hidden"
      panel={
        <>
          <ResultHeader title={resultCopy.bar.panelTitle} usingExamples={usingExamples} />
          <div className="mt-4">
            <ResultBreakdown display={display} size="sm" />
          </div>
          <button type="button" onClick={onSend} className={cn(secondaryClass, "mt-4")}>
            {resultCopy.secondary}
          </button>
          <p className="mt-4 text-[0.8125rem] leading-snug text-white/65">{resultCopy.disclaimer}</p>
        </>
      }
      summary={(expanded) => (
        <>
          <span className="block font-display text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-teal-200 max-[359px]:text-[0.625rem]">
            {usingExamples ? resultCopy.bar.exampleLabel : resultCopy.bar.label}
          </span>
          {!display.hasCollections || yearly.kind === "zero" ? (
            <span className="mt-1 block font-display text-[0.9375rem] font-semibold leading-tight text-white">
              {display.hasCollections ? resultCopy.bar.zero : resultCopy.bar.noCollections}
            </span>
          ) : (
            <span className="mt-1 flex flex-wrap items-baseline gap-x-1.5">
              <span className="font-display text-[0.75rem] font-semibold text-white/80">{qualifier(yearly)}</span>
              <Figure
                amount={yearly}
                className={cn("font-display font-bold leading-none tracking-[-0.04em] text-yellow", figureSize(yearly, false))}
              />
            </span>
          )}
          {/* Read after the figure: "Lost each year, about $16,800. Show the breakdown." */}
          <span className="sr-only">. {expanded ? "Hide" : "Show"} the breakdown.</span>
        </>
      )}
      action={
        <Link
          href={site.bookingHref}
          className="inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-yellow px-3.5 text-center font-display text-[0.8125rem] font-semibold leading-[1.15] text-ink active:scale-[0.97] max-[359px]:px-3 max-[359px]:text-[0.75rem] sm:px-6 sm:text-[0.9375rem]"
        >
          <span className="text-balance max-sm:max-w-[6.5rem]">{resultCopy.primary}</span>
        </Link>
      }
    />
  );
}
