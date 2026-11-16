// Billing calculator: every number and all of the maths.
//
// A practice owner enters four numbers of their own and sees an estimate of
// insurance revenue lost to denied claims that nobody followed up, plus a
// separate, one-time figure for old A/R that may still be collectible.
//
// Change a default, a slider range or a step in `billingCalculatorConfig`
// below; nothing else needs to move. The words live in
// src/content/billing-calculator.ts and the layout in
// src/components/pages/billing-calculator/. Two pieces of wording are built
// here, at the bottom of this file, because they are assembled from the
// numbers: the sentence read out to screen reader users (`billingHeadline`)
// and the summary sent with the form (`buildBillingSummary`).
//
// The starting values are EXAMPLES so the page has something to show. They
// are not typical, average or benchmark figures, and the two assumptions are
// ForEyes' own starting points, not industry statistics.

import { formatMoney } from "@/lib/pricing";

/** A slider: where it starts, how far it travels, and its step. */
export type RangeRule = { default: number; min: number; max: number; step: number };

/** A dollar slider that also accepts a typed amount beyond the slider's ends. */
export type MoneyRule = RangeRule & { typedMin: number; typedMax: number };

export const billingCalculatorConfig = {
  /** The visitor's own numbers. Defaults are examples only. */
  inputs: {
    /** Insurance payments collected in a typical month, in dollars. */
    monthlyCollections: { default: 60_000, min: 5_000, max: 500_000, step: 1_000, typedMin: 0, typedMax: 2_000_000 },
    /** Share of claims denied or rejected the first time they are sent, in percent. */
    denialRate: { default: 8, min: 0, max: 40, step: 1 },
    /** Share of those denied claims that nobody follows up, in percent. */
    unworkedShare: { default: 50, min: 0, max: 100, step: 5 },
    /** Insurance A/R more than 90 days old, in dollars. */
    agedAR: { default: 25_000, min: 0, max: 500_000, step: 1_000, typedMin: 0, typedMax: 2_000_000 },
  },
  /** ForEyes' starting assumptions. The visitor can change both. */
  assumptions: {
    /** Share of followed-up denials that end up paid, in percent. */
    recoveryRate: { default: 55, min: 30, max: 90, step: 5 },
    /** Share of 90+ day A/R that can still be collected, in percent. */
    agedCollectible: { default: 30, min: 10, max: 80, step: 5 },
  },
  /** How the results are rounded for display ("about $16,800"). */
  rounding: { yearly: 100, monthly: 10, backlog: 100 },
} as const satisfies {
  inputs: { monthlyCollections: MoneyRule; denialRate: RangeRule; unworkedShare: RangeRule; agedAR: MoneyRule };
  assumptions: { recoveryRate: RangeRule; agedCollectible: RangeRule };
  rounding: { yearly: number; monthly: number; backlog: number };
};

export type BillingValues = {
  monthlyCollections: number;
  denialRate: number;
  unworkedShare: number;
  agedAR: number;
  recoveryRate: number;
  agedCollectible: number;
};

export type BillingField = keyof BillingValues;

/** The four numbers that are the visitor's own (the other two are assumptions). */
export const INPUT_FIELDS = ["monthlyCollections", "denialRate", "unworkedShare", "agedAR"] as const satisfies readonly BillingField[];

const { inputs, assumptions, rounding } = billingCalculatorConfig;

export const defaultBillingValues: BillingValues = {
  monthlyCollections: inputs.monthlyCollections.default,
  denialRate: inputs.denialRate.default,
  unworkedShare: inputs.unworkedShare.default,
  agedAR: inputs.agedAR.default,
  recoveryRate: assumptions.recoveryRate.default,
  agedCollectible: assumptions.agedCollectible.default,
};

/** The widest value each field accepts (typed amounts may pass the slider's ends). */
const limits: Record<BillingField, { min: number; max: number }> = {
  monthlyCollections: { min: inputs.monthlyCollections.typedMin, max: inputs.monthlyCollections.typedMax },
  denialRate: inputs.denialRate,
  unworkedShare: inputs.unworkedShare,
  agedAR: { min: inputs.agedAR.typedMin, max: inputs.agedAR.typedMax },
  recoveryRate: assumptions.recoveryRate,
  agedCollectible: assumptions.agedCollectible,
};

/** Keep a value inside its field's range. Anything that is not a number becomes the minimum. */
export function clampField(field: BillingField, value: number): number {
  const { min, max } = limits[field];
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function clampBillingValues(values: BillingValues): BillingValues {
  return {
    monthlyCollections: clampField("monthlyCollections", values.monthlyCollections),
    denialRate: clampField("denialRate", values.denialRate),
    unworkedShare: clampField("unworkedShare", values.unworkedShare),
    agedAR: clampField("agedAR", values.agedAR),
    recoveryRate: clampField("recoveryRate", values.recoveryRate),
    agedCollectible: clampField("agedCollectible", values.agedCollectible),
  };
}

export type BillingEstimate = {
  /** Share of claim value that ends up paid today (0 to 1). */
  paidShare: number;
  /** What a month of claims was worth, in dollars. */
  claimValue: number;
  /** Lost each month to denials nobody followed up. */
  unworkedMonthly: number;
  /** The headline: the same loss over a year. */
  unworkedYearly: number;
  /** Aged A/R that may still be collectible. One time; never part of the yearly figure. */
  backlog: number;
  /** The yearly loss as a share of a year's collections (0 to 1). */
  shareOfCollections: number;
};

/** A result is only ever a real, non-negative number. */
function safe(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

/**
 * The whole calculation, as a pure function.
 *
 * Two simplifications, both stated on the page: denied claims are treated as
 * average-sized, and claims that are not denied are treated as paid.
 */
export function computeBillingEstimate(values: BillingValues): BillingEstimate {
  const v = clampBillingValues(values);
  const d = v.denialRate / 100;
  const u = v.unworkedShare / 100;
  const r = v.recoveryRate / 100;
  const c = v.agedCollectible / 100;

  // Paid today: everything not denied, plus the denials that were followed up and paid.
  const paidShare = 1 - d + d * (1 - u) * r;
  const claimValue = paidShare > 0 ? v.monthlyCollections / paidShare : 0;
  const unworkedMonthly = claimValue * d * u * r;
  const unworkedYearly = unworkedMonthly * 12;
  const backlog = v.agedAR * c;
  const shareOfCollections = v.monthlyCollections > 0 ? unworkedYearly / (v.monthlyCollections * 12) : 0;

  return {
    paidShare: safe(paidShare),
    claimValue: safe(claimValue),
    unworkedMonthly: safe(unworkedMonthly),
    unworkedYearly: safe(unworkedYearly),
    backlog: safe(backlog),
    shareOfCollections: safe(shareOfCollections),
  };
}

// ---------------------------------------------------------------------------
// Display
// ---------------------------------------------------------------------------

export function roundTo(value: number, step: number): number {
  return step > 0 ? Math.round(value / step) * step : Math.round(value);
}

/**
 * A dollar figure as the page shows it.
 * - "zero": nothing at all, so the page says something true instead of "$0".
 * - "small": more than nothing, but it rounds to $0, so the page says "less than".
 * - "amount": the rounded figure, always introduced with "about".
 */
export type DisplayAmount =
  | { kind: "zero" }
  | { kind: "small"; under: number }
  | { kind: "amount"; value: number };

function displayAmount(value: number, step: number): DisplayAmount {
  if (value <= 0) return { kind: "zero" };
  const rounded = roundTo(value, step);
  return rounded > 0 ? { kind: "amount", value: rounded } : { kind: "small", under: step };
}

export type BillingDisplay = {
  yearly: DisplayAmount;
  monthly: DisplayAmount;
  backlog: DisplayAmount;
  /** "3.2%": the yearly loss as a share of a year's insurance collections. */
  share: string;
  /** False when no collections were entered, so there is nothing to estimate from. */
  hasCollections: boolean;
};

export function formatShare(share: number): string {
  return `${(safe(share) * 100).toFixed(1)}%`;
}

export function displayBillingEstimate(values: BillingValues, estimate: BillingEstimate): BillingDisplay {
  return {
    yearly: displayAmount(estimate.unworkedYearly, rounding.yearly),
    monthly: displayAmount(estimate.unworkedMonthly, rounding.monthly),
    backlog: displayAmount(estimate.backlog, rounding.backlog),
    // A real but tiny share would otherwise read as "0.0%".
    share:
      estimate.shareOfCollections > 0 && estimate.shareOfCollections < 0.0005
        ? "less than 0.1%"
        : formatShare(estimate.shareOfCollections),
    hasCollections: clampField("monthlyCollections", values.monthlyCollections) > 0,
  };
}

/** "about $16,800", "less than $100" or "$0", for sentences and the summary. */
export function amountText(amount: DisplayAmount): string {
  if (amount.kind === "zero") return formatMoney(0);
  if (amount.kind === "small") return `less than ${formatMoney(amount.under)}`;
  return `about ${formatMoney(amount.value)}`;
}

/**
 * One line read out to screen reader users when the result changes. It says
 * the same thing as the result card, including when there is nothing to
 * estimate from (keep these sentences in step with `resultCopy` in
 * src/content/billing-calculator.ts).
 */
export function billingHeadline(display: BillingDisplay): string {
  const yearly = !display.hasCollections
    ? "Add your monthly insurance collections to see an estimate."
    : display.yearly.kind === "zero"
      ? "Nothing is being lost to unworked denials on these numbers."
      : `${capitalise(amountText(display.yearly))} a year lost to denied claims nobody followed up, ${display.share} of your insurance collections.`;
  const backlog =
    display.backlog.kind === "zero"
      ? "No aged claims to chase on these numbers."
      : `One time: ${amountText(display.backlog)} in aged claims still worth chasing.`;
  return `${yearly} ${backlog}`;
}

function capitalise(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * The plain-text summary sent with the lead form (the
 * `billing_calculator_details` field) and shown to the visitor before sending.
 */
export function buildBillingSummary(values: BillingValues, usingExamples: boolean): string {
  const v = clampBillingValues(values);
  const estimate = computeBillingEstimate(v);
  const display = displayBillingEstimate(v, estimate);
  const out: string[] = [];

  out.push("Billing Calculator");
  if (usingExamples) out.push("Note: the four practice numbers below are the calculator's example values, unchanged.");
  out.push("");
  out.push("Practice numbers");
  out.push(`  Insurance payments collected in a typical month: ${formatMoney(v.monthlyCollections)}`);
  out.push(`  Claims denied or rejected the first time: ${v.denialRate}%`);
  out.push(`  Denied claims nobody follows up: ${v.unworkedShare}%`);
  out.push(`  Insurance A/R over 90 days old: ${formatMoney(v.agedAR)}`);
  out.push("");
  out.push("Assumptions");
  out.push(`  Followed-up denials that end up paid: ${v.recoveryRate}%`);
  out.push(`  90+ day A/R that can still be collected: ${v.agedCollectible}%`);
  out.push("");
  out.push("Estimate (not a quote, an audit, or a promise)");
  if (display.hasCollections) {
    out.push(`  Lost each year to denials nobody followed up: ${amountText(display.yearly)}`);
    out.push(`  Each month: ${amountText(display.monthly)}`);
    out.push(`  Share of insurance collections: ${display.share}`);
  } else {
    // The screen shows no yearly figure without collections, so neither does this.
    out.push("  Lost each year to denials nobody followed up: not estimated (no monthly insurance collections entered)");
  }
  out.push(`  One time, aged claims still worth chasing: ${amountText(display.backlog)} (not part of the yearly figure)`);

  return out.join("\n");
}
