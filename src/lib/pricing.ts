// Pricing calculator maths. Pure functions and one reducer: no React, no DOM.
// Prices and wording come from src/content/pricing.ts.
//
// Two rules fix bugs in the calculator this replaces:
//  1. A service that is switched off contributes nothing: not its price and
//     not its custom-quote trigger. Its answers are kept, so switching it
//     back on restores exactly what the controls show.
//  2. Everything shown (total, breakdown, summary) is derived from one state
//     object, so a control can never display one value while the estimate
//     uses another.

import {
  CUSTOM_QUOTE,
  pricing,
  serviceCopy,
  type AccountsOptionId,
  type SteppedRule,
} from "@/content/pricing";

export type ServiceId =
  | "bookkeeping"
  | "insuranceBilling"
  | "accountsPayable"
  | "payroll"
  | "practiceConsulting";

export const SERVICE_ORDER: ServiceId[] = [
  "bookkeeping",
  "insuranceBilling",
  "accountsPayable",
  "payroll",
  "practiceConsulting",
];

export type PricingState = {
  bookkeeping: {
    on: boolean;
    /** Index into `pricing.bookkeeping.revenueTiers`. */
    revenueTier: number;
    locations: number;
    accounts: AccountsOptionId;
    holdingCompany: boolean;
    salesTaxFiling: boolean;
  };
  insuranceBilling: {
    on: boolean;
    /** Estimated monthly net receipts in whole dollars. `null` = not entered. */
    medicalReceipts: number | null;
    visionReceipts: number | null;
  };
  accountsPayable: { on: boolean; count: number };
  payroll: { on: boolean; count: number };
  practiceConsulting: { on: boolean };
};

export const initialPricingState: PricingState = {
  bookkeeping: {
    on: false,
    revenueTier: 0,
    locations: pricing.bookkeeping.locations.min,
    accounts: pricing.bookkeeping.accounts[0].id,
    holdingCompany: false,
    salesTaxFiling: false,
  },
  insuranceBilling: { on: false, medicalReceipts: null, visionReceipts: null },
  accountsPayable: { on: false, count: pricing.accountsPayable.min },
  payroll: { on: false, count: pricing.payroll.min },
  practiceConsulting: { on: false },
};

export type PricingAction =
  | { type: "toggle"; service: ServiceId; on?: boolean }
  | { type: "setRevenueTier"; index: number }
  | { type: "setLocations"; value: number }
  | { type: "setAccounts"; id: AccountsOptionId }
  | { type: "setHoldingCompany"; value: boolean }
  | { type: "setSalesTaxFiling"; value: boolean }
  | { type: "setMedicalReceipts"; value: number | null }
  | { type: "setVisionReceipts"; value: number | null }
  | { type: "setAccountsPayableCount"; value: number }
  | { type: "setPayrollCount"; value: number }
  | { type: "reset" };

function clampInt(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

/** A typed dollar amount: whole, positive and within the input's limit, or nothing. */
function receiptsOrNull(value: number | null): number | null {
  if (value === null || !Number.isFinite(value) || value <= 0) return null;
  return clampInt(value, 1, pricing.insuranceBilling.maxMonthlyReceipts);
}

export function pricingReducer(state: PricingState, action: PricingAction): PricingState {
  switch (action.type) {
    case "toggle": {
      const current = state[action.service];
      return { ...state, [action.service]: { ...current, on: action.on ?? !current.on } };
    }
    case "setRevenueTier":
      return {
        ...state,
        bookkeeping: {
          ...state.bookkeeping,
          revenueTier: clampInt(action.index, 0, pricing.bookkeeping.revenueTiers.length - 1),
        },
      };
    case "setLocations": {
      const { min, max } = pricing.bookkeeping.locations;
      return { ...state, bookkeeping: { ...state.bookkeeping, locations: clampInt(action.value, min, max) } };
    }
    case "setAccounts":
      return pricing.bookkeeping.accounts.some((option) => option.id === action.id)
        ? { ...state, bookkeeping: { ...state.bookkeeping, accounts: action.id } }
        : state;
    case "setHoldingCompany":
      return { ...state, bookkeeping: { ...state.bookkeeping, holdingCompany: action.value } };
    case "setSalesTaxFiling":
      return { ...state, bookkeeping: { ...state.bookkeeping, salesTaxFiling: action.value } };
    case "setMedicalReceipts":
      return { ...state, insuranceBilling: { ...state.insuranceBilling, medicalReceipts: receiptsOrNull(action.value) } };
    case "setVisionReceipts":
      return { ...state, insuranceBilling: { ...state.insuranceBilling, visionReceipts: receiptsOrNull(action.value) } };
    case "setAccountsPayableCount": {
      const { min, max } = pricing.accountsPayable;
      return { ...state, accountsPayable: { ...state.accountsPayable, count: clampInt(action.value, min, max) } };
    }
    case "setPayrollCount": {
      const { min, max } = pricing.payroll;
      return { ...state, payroll: { ...state.payroll, count: clampInt(action.value, min, max) } };
    }
    case "reset":
      return initialPricingState;
    default:
      return state;
  }
}

// ---------------------------------------------------------------------------
// Price rules
// ---------------------------------------------------------------------------

/** Which revenue band a dollar figure falls in (upper bounds are inclusive). */
export function revenueTierIndexFor(annualRevenue: number): number {
  const tiers = pricing.bookkeeping.revenueTiers;
  const index = tiers.findIndex((tier) => tier.upTo !== null && annualRevenue <= tier.upTo);
  return index === -1 ? tiers.length - 1 : index;
}

/** Monthly Bookkeeping base for a band. `null` means custom quote. */
export function bookkeepingBase(tierIndex: number): number | null {
  const tiers = pricing.bookkeeping.revenueTiers;
  return tiers[clampInt(tierIndex, 0, tiers.length - 1)].monthly;
}

/** The first location is in the base price; each further one adds a flat fee. */
export function locationsAddOn(locations: number): number {
  const { min, max, perAdditional } = pricing.bookkeeping.locations;
  return (clampInt(locations, min, max) - 1) * perAdditional;
}

/** Monthly add-on for connected accounts. `null` means custom quote. */
export function accountsAddOn(id: AccountsOptionId): number | null {
  const option = pricing.bookkeeping.accounts.find((entry) => entry.id === id);
  return option ? option.monthly : 0;
}

/** A flat price for the first N, then a fixed amount for each one above N. */
export function steppedMonthly(count: number, rule: SteppedRule): number {
  const units = clampInt(count, rule.min, rule.max);
  return rule.base + Math.max(0, units - rule.included) * rule.perAdditional;
}

export function accountsPayableMonthly(count: number): number {
  return steppedMonthly(count, pricing.accountsPayable);
}

export function payrollMonthly(count: number): number {
  return steppedMonthly(count, pricing.payroll);
}

/** 0.08 -> "8%". */
export function percent(rate: number): string {
  return `${Math.round(rate * 100)}%`;
}

/** Medical plan billing: a percentage of monthly net receipts, in whole dollars. */
export function medicalBillingMonthly(receipts: number): number {
  return Math.round(Math.max(0, receipts) * pricing.insuranceBilling.medicalRate);
}

/** Vision plan billing: a percentage of monthly net receipts. Lab fees are not in this. */
export function visionBillingMonthly(receipts: number): number {
  return Math.round(Math.max(0, receipts) * pricing.insuranceBilling.visionRate);
}

// ---------------------------------------------------------------------------
// The estimate
// ---------------------------------------------------------------------------

export type EstimateLine = {
  id: string;
  service: ServiceId;
  label: string;
  detail?: string;
  /**
   * `priced` adds `amount` to the total. `rate` has a published rate but no
   * amount to apply it to yet (its `note` states the rate). `quoted` has no
   * published price. `custom` is a selection the calculator cannot price.
   */
  kind: "priced" | "rate" | "quoted" | "custom";
  amount: number;
  /** Shown in place of an amount on a `rate` line. */
  note?: string;
};

export type Estimate = {
  lines: EstimateLine[];
  /** Sum of the priced lines. Not meaningful to show when `customQuote`. */
  monthly: number;
  /** True when any active selection needs an individual quote. */
  customQuote: boolean;
  customReasons: string[];
  /** Names of switched-on services that have no published price. */
  quotedOnCall: string[];
  /** Insurance Billing is on with no amounts entered: show its rates, not a number. */
  billingRatesOnly: boolean;
  /** A vision amount is in the total, so "plus applicable lab fees" must sit beside it. */
  labFees: boolean;
  /** Number of services switched on. */
  selected: number;
  /** True when at least one switched-on service has a published price. */
  hasPriced: boolean;
  oneTime: number;
};

function plural(count: number, [one, many]: readonly [string, string]): string {
  return `${count} ${count === 1 ? one : many}`;
}

export function computeEstimate(state: PricingState): Estimate {
  const lines: EstimateLine[] = [];
  const customReasons: string[] = [];
  const quotedOnCall: string[] = [];
  let hasPriced = false;
  let billingRatesOnly = false;
  let labFees = false;

  const { bookkeeping, insuranceBilling, accountsPayable, payroll, practiceConsulting } = state;

  if (bookkeeping.on) {
    hasPriced = true;
    const tier = pricing.bookkeeping.revenueTiers[bookkeeping.revenueTier];
    const base = bookkeepingBase(bookkeeping.revenueTier);
    if (base === null) {
      customReasons.push("Annual revenue over $10M");
      lines.push({
        id: "bookkeeping",
        service: "bookkeeping",
        label: serviceCopy.bookkeeping.name,
        detail: `${tier.label} in annual revenue`,
        kind: "custom",
        amount: 0,
      });
    } else {
      lines.push({
        id: "bookkeeping",
        service: "bookkeeping",
        label: serviceCopy.bookkeeping.name,
        detail: `${tier.label} in annual revenue`,
        kind: "priced",
        amount: base,
      });
    }

    const extraLocations = bookkeeping.locations - 1;
    if (extraLocations > 0) {
      lines.push({
        id: "locations",
        service: "bookkeeping",
        label: plural(extraLocations, ["additional location", "additional locations"]),
        kind: "priced",
        amount: locationsAddOn(bookkeeping.locations),
      });
    }

    const accounts = pricing.bookkeeping.accounts.find((option) => option.id === bookkeeping.accounts);
    const accountsFee = accountsAddOn(bookkeeping.accounts);
    if (accounts && accountsFee === null) {
      customReasons.push(`${accounts.label} connected accounts`);
      lines.push({
        id: "accounts",
        service: "bookkeeping",
        label: `${accounts.label} connected accounts`,
        kind: "custom",
        amount: 0,
      });
    } else if (accounts && accountsFee) {
      lines.push({
        id: "accounts",
        service: "bookkeeping",
        label: `${accounts.label} connected accounts`,
        kind: "priced",
        amount: accountsFee,
      });
    }

    if (pricing.bookkeeping.salesTaxFiling.offered && bookkeeping.salesTaxFiling) {
      lines.push({
        id: "salesTaxFiling",
        service: "bookkeeping",
        label: serviceCopy.bookkeeping.salesTaxFiling.label,
        kind: "priced",
        amount: pricing.bookkeeping.salesTaxFiling.monthly,
      });
    }
  }

  if (insuranceBilling.on) {
    const { medical, vision, labFees: labFeesNote } = serviceCopy.insuranceBilling;
    const { medicalReceipts, visionReceipts } = insuranceBilling;
    if (medicalReceipts) {
      hasPriced = true;
      lines.push({
        id: "billingMedical",
        service: "insuranceBilling",
        label: medical.name,
        detail: `${percent(pricing.insuranceBilling.medicalRate)} of ${formatMoney(medicalReceipts)} in net receipts`,
        kind: "priced",
        amount: medicalBillingMonthly(medicalReceipts),
      });
    } else {
      lines.push({
        id: "billingMedical",
        service: "insuranceBilling",
        label: medical.name,
        kind: "rate",
        amount: 0,
        note: medical.rate,
      });
    }
    if (visionReceipts) {
      hasPriced = true;
      labFees = true;
      lines.push({
        id: "billingVision",
        service: "insuranceBilling",
        label: vision.name,
        detail: `${percent(pricing.insuranceBilling.visionRate)} of ${formatMoney(visionReceipts)} in net receipts, ${labFeesNote}`,
        kind: "priced",
        amount: visionBillingMonthly(visionReceipts),
      });
    } else {
      lines.push({
        id: "billingVision",
        service: "insuranceBilling",
        label: vision.name,
        detail: labFeesNote.charAt(0).toUpperCase() + labFeesNote.slice(1),
        kind: "rate",
        amount: 0,
        note: vision.rate,
      });
    }
    billingRatesOnly = !medicalReceipts && !visionReceipts;
  }

  if (accountsPayable.on) {
    hasPriced = true;
    lines.push({
      id: "accountsPayable",
      service: "accountsPayable",
      label: serviceCopy.accountsPayable.name,
      detail: plural(accountsPayable.count, serviceCopy.accountsPayable.count.unit),
      kind: "priced",
      amount: accountsPayableMonthly(accountsPayable.count),
    });
  }

  if (payroll.on) {
    hasPriced = true;
    lines.push({
      id: "payroll",
      service: "payroll",
      label: serviceCopy.payroll.name,
      detail: plural(payroll.count, serviceCopy.payroll.count.unit),
      kind: "priced",
      amount: payrollMonthly(payroll.count),
    });
  }

  if (practiceConsulting.on) {
    quotedOnCall.push(serviceCopy.practiceConsulting.name);
    lines.push({
      id: "practiceConsulting",
      service: "practiceConsulting",
      label: serviceCopy.practiceConsulting.name,
      kind: "quoted",
      amount: 0,
    });
  }

  const monthly = lines.reduce((sum, line) => (line.kind === "priced" ? sum + line.amount : sum), 0);

  return {
    lines,
    monthly,
    customQuote: customReasons.length > 0,
    customReasons,
    quotedOnCall,
    billingRatesOnly,
    labFees,
    selected: SERVICE_ORDER.filter((id) => state[id].on).length,
    hasPriced,
    oneTime: pricing.implementation.oneTime,
  };
}

// ---------------------------------------------------------------------------
// Words
// ---------------------------------------------------------------------------

/** Whole dollars with thousands separators: 3734 -> "$3,734". */
export function formatMoney(amount: number): string {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

/** What the headline shows: a dollar figure, the custom-quote line, rates, or "quoted". */
export type EstimateMode = "figure" | "custom" | "rates" | "quoted";

export function estimateMode(estimate: Estimate): EstimateMode {
  if (estimate.customQuote) return "custom";
  if (estimate.hasPriced) return "figure";
  if (estimate.billingRatesOnly) return "rates";
  return estimate.quotedOnCall.length ? "quoted" : "figure";
}

/** Something that belongs with the estimate but is not in its number. */
export type EstimateExtra = { name: string; note: string };

/** What sits beside the headline: rates with no amount, lab fees, services quoted on the call. */
export function estimateExtras(estimate: Estimate): EstimateExtra[] {
  const mode = estimateMode(estimate);
  if (mode === "custom" || mode === "quoted") return [];
  const ib = serviceCopy.insuranceBilling;
  const extras: EstimateExtra[] = [];
  if (mode === "figure" && estimate.billingRatesOnly) {
    extras.push({ name: ib.name, note: `${ib.ratesShort} ${ib.ratesBasis}` });
  }
  if (estimate.labFees) extras.push({ name: "Applicable lab fees", note: "vision plan billing" });
  for (const name of estimate.quotedOnCall) extras.push({ name, note: "quoted on your call" });
  return extras;
}

/**
 * The estimate in one line, e.g.
 * "$1,074 per month + Applicable lab fees (vision plan billing)".
 */
export function estimateHeadline(estimate: Estimate): string {
  const mode = estimateMode(estimate);
  if (mode === "custom") return CUSTOM_QUOTE;
  const ib = serviceCopy.insuranceBilling;
  const extras = estimateExtras(estimate).map((extra) => `${extra.name} (${extra.note})`);
  if (mode === "quoted") return estimate.quotedOnCall.map((name) => `${name} (quoted on your call)`).join(" + ");
  if (mode === "rates") {
    return [`${ib.name}: ${ib.medical.rate} for medical plans, ${ib.vision.rate} for vision plans, ${ib.labFees}`, ...extras].join(
      " + ",
    );
  }
  return [`${formatMoney(estimate.monthly)} per month`, ...extras].join(" + ");
}

const yesNo = (value: boolean) => (value ? "Yes" : "No");

/** Plain-text summary of every selection, sent with the lead. */
export function buildSummary(state: PricingState): string {
  const estimate = computeEstimate(state);
  const { bookkeeping, insuranceBilling, accountsPayable, payroll, practiceConsulting } = state;
  const out: string[] = [];

  out.push(`Estimate: ${estimateHeadline(estimate)}`);
  if (estimate.customQuote) out.push(`Custom quote because: ${estimate.customReasons.join("; ")}`);
  out.push(`One-time implementation: ${formatMoney(estimate.oneTime)} (not included in the monthly figure)`);
  out.push("");

  if (bookkeeping.on) {
    const tier = pricing.bookkeeping.revenueTiers[bookkeeping.revenueTier];
    const base = bookkeepingBase(bookkeeping.revenueTier);
    const accounts = pricing.bookkeeping.accounts.find((option) => option.id === bookkeeping.accounts);
    const accountsFee = accountsAddOn(bookkeeping.accounts);
    out.push("Bookkeeping: Yes");
    out.push(`  Annual revenue: ${tier.label} (${base === null ? "custom quote" : `${formatMoney(base)}/mo`})`);
    out.push(`  Locations: ${bookkeeping.locations} (+${formatMoney(locationsAddOn(bookkeeping.locations))}/mo)`);
    out.push(
      `  Connected accounts: ${accounts?.label ?? "-"} (${accountsFee === null ? "custom quote" : `+${formatMoney(accountsFee)}/mo`})`,
    );
    out.push(`  MSO or real estate holding company: ${yesNo(bookkeeping.holdingCompany)}`);
    if (pricing.bookkeeping.salesTaxFiling.offered) {
      out.push(
        `  Sales tax filing: ${bookkeeping.salesTaxFiling ? `Yes (+${formatMoney(pricing.bookkeeping.salesTaxFiling.monthly)}/mo)` : "No"}`,
      );
    }
  } else {
    out.push("Bookkeeping: No");
  }

  if (insuranceBilling.on) {
    const ib = serviceCopy.insuranceBilling;
    const { medicalReceipts, visionReceipts } = insuranceBilling;
    out.push("Insurance Billing: Yes");
    out.push(
      `  ${ib.medical.label}: ${
        medicalReceipts
          ? `${formatMoney(medicalReceipts)} (${percent(pricing.insuranceBilling.medicalRate)} = ${formatMoney(medicalBillingMonthly(medicalReceipts))}/mo)`
          : `Not entered (${ib.medical.rate})`
      }`,
    );
    out.push(
      `  ${ib.vision.label}: ${
        visionReceipts
          ? `${formatMoney(visionReceipts)} (${percent(pricing.insuranceBilling.visionRate)} = ${formatMoney(visionBillingMonthly(visionReceipts))}/mo, ${ib.labFees})`
          : `Not entered (${ib.vision.rate}, ${ib.labFees})`
      }`,
    );
  } else {
    out.push("Insurance Billing: No");
  }

  out.push(
    accountsPayable.on
      ? `Accounts Payable: Yes (${formatMoney(accountsPayableMonthly(accountsPayable.count))}/mo)\n  ${serviceCopy.accountsPayable.count.label}: ${accountsPayable.count}`
      : "Accounts Payable: No",
  );
  out.push(
    payroll.on
      ? `Payroll: Yes (${formatMoney(payrollMonthly(payroll.count))}/mo)\n  ${serviceCopy.payroll.count.label}: ${payroll.count}`
      : "Payroll: No",
  );
  out.push(`Practice Consulting: ${practiceConsulting.on ? "Yes (quoted on Discovery Call)" : "No"}`);

  return out.join("\n");
}
