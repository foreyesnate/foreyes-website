// Pricing calculator: every price, rule, label and line of copy.
//
// The Bookkeeping, Accounts Payable and Payroll numbers were carried over
// from the calculator on foreyessolutions.com (all verified against the live
// page; see pricing-logic.md in the project notes). The two Insurance Billing
// rates were confirmed by the owner. Practice Consulting has no published
// price: the calculator says "Quoted on your Discovery Call" for it and adds
// nothing to the number.
//
// Edit prices and wording here. The maths lives in src/lib/pricing.ts and the
// layout in src/components/pages/pricing/.

import type { Faq } from "@/components/sections/FaqAccordion";

/** What a visitor sees in place of a price for services with no published one. */
export const QUOTED_ON_CALL = "Quoted on your Discovery Call";

/** Shown instead of a number when any custom-quote condition is active. */
export const CUSTOM_QUOTE = "Contact us for a Custom Quote";

export type RevenueTier = {
  /** Inclusive upper bound of the band in dollars. `null` = no upper bound. */
  upTo: number | null;
  /** Monthly base price. `null` = custom quote. */
  monthly: number | null;
  /** The band in words, as shown beside the slider and in the summary. */
  label: string;
};

export type AccountsOption = {
  id: string;
  label: string;
  /** Monthly add-on. `null` = custom quote. */
  monthly: number | null;
};

/** "$X flat for the first N, then $Y for each one above N". */
export type SteppedRule = {
  base: number;
  included: number;
  perAdditional: number;
  min: number;
  max: number;
};

export const pricing = {
  bookkeeping: {
    // Annual revenue bands. A practice at exactly $400,000 pays the first
    // tier; the next dollar moves it up (bounds are inclusive).
    revenueTiers: [
      { upTo: 400_000, monthly: 399, label: "Up to $400K" },
      { upTo: 1_200_000, monthly: 599, label: "$400K to $1.2M" },
      { upTo: 2_000_000, monthly: 799, label: "$1.2M to $2M" },
      { upTo: 3_000_000, monthly: 999, label: "$2M to $3M" },
      { upTo: 5_000_000, monthly: 1199, label: "$3M to $5M" },
      { upTo: 7_500_000, monthly: 1399, label: "$5M to $7.5M" },
      { upTo: 10_000_000, monthly: 1599, label: "$7.5M to $10M" },
      { upTo: null, monthly: null, label: "Over $10M" },
    ],
    // The first location is in the base price; each further one adds this.
    // The current site prices up to 10 and labels the top stop "10+".
    locations: { min: 1, max: 10, perAdditional: 150 },
    // Banks, credit cards and similar feeds connected to the books.
    accounts: [
      { id: "8-or-fewer", label: "8 or fewer", monthly: 0 },
      { id: "9-to-14", label: "9 to 14", monthly: 50 },
      { id: "15-to-20", label: "15 to 20", monthly: 100 },
      { id: "21-or-more", label: "21 or more", monthly: null },
    ] satisfies AccountsOption[],
    // Sales tax filing on what the practice sells (optical), $100 a month on
    // the current site. Switched off: the new site sells no tax filing other
    // than payroll tax filings inside Payroll. Set `offered` to true to bring
    // the checkbox, its estimate line and its summary line back.
    salesTaxFiling: { monthly: 100, offered: false as boolean },
  },
  // A percentage of net receipts (the owner's wording; do not define it
  // further). Vision plan billing also carries "applicable lab fees", which
  // have no published amount and are never added to the number: the words
  // appear beside it instead.
  insuranceBilling: {
    medicalRate: 0.08,
    visionRate: 0.05,
    /** Largest monthly figure the two inputs accept (a typing guard, not a price rule). */
    maxMonthlyReceipts: 9_999_999,
  },
  // Priced per bill paid per month. 75 is priced; nothing above is.
  accountsPayable: { base: 99, included: 10, perAdditional: 6, min: 1, max: 75 } satisfies SteppedRule,
  // Priced per employee paid. 50 is priced; nothing above is.
  payroll: { base: 149, included: 10, perAdditional: 19, min: 1, max: 50 } satisfies SteppedRule,
  // One-time, shown separately, never added to the monthly figure.
  implementation: { oneTime: 500 },
} as const;

// Checked here rather than inline so each tier keeps its literal type (other
// modules read the first tier's price as a number, not `number | null`).
pricing.bookkeeping.revenueTiers satisfies readonly RevenueTier[];

export type AccountsOptionId = (typeof pricing.bookkeeping.accounts)[number]["id"];

// ---------------------------------------------------------------------------
// Labels and copy
// ---------------------------------------------------------------------------

export const calculatorCopy = {
  heading: "Start Your Estimate",
  lede: "Switch on the services you want and set the size of your practice. Bookkeeping, Insurance Billing, Accounts Payable, and Payroll are priced here. Practice Consulting is quoted on your Discovery Call.",
  supportingHeading: "Already on our books? We can also run your bills and your payroll.",
  estimateLabel: "Your estimate",
  perMonth: "per month",
  empty: "Switch on a service to see your estimate.",
  getStarted: "Get Started",
  disclaimer:
    "This figure is an estimate. We’ll give you a formal quote on your Discovery Call.",
  customQuoteBody:
    "Your practice is past what this calculator can price. Send us your selections and we’ll put a quote together.",
} as const;

export const serviceCopy = {
  bookkeeping: {
    name: "Bookkeeping",
    blurb:
      "Every account reconciled monthly, and reviewed reports in your portal by the 10th business day.",
    from: "From $399 a month",
    revenue: {
      label: "Annual revenue",
      hint: "Exams, optical sales, and contact lenses together.",
    },
    locations: {
      label: "Locations",
      hint: "Your first location is included. Each additional one adds $150 a month.",
      unit: ["location", "locations"],
      overMax: "More than 10 locations? We’ll quote it on your Discovery Call.",
    },
    accounts: {
      label: "Connected accounts",
      hint: "The bank accounts, credit cards, and similar accounts your practice uses.",
    },
    holdingCompany: {
      label: "I have an MSO or a real estate holding company",
      hint: "This doesn’t change the estimate. It helps us prepare for your call.",
    },
    salesTaxFiling: {
      label: "Sales tax filing",
      hint: "Filing the sales tax your practice collects, such as on optical sales. This isn’t income tax preparation.",
    },
  },
  insuranceBilling: {
    name: "Insurance Billing",
    blurb:
      "Claims reviewed before they go out, payments posted, denials appealed, and A/R followed up daily.",
    /** The pill on the card before any amount is entered. */
    rates: "Medical 8%, vision 5% of net receipts",
    /** The same two rates, short enough for the estimate card and the mobile bar. */
    ratesShort: "8% medical, 5% vision",
    ratesBasis: "of net receipts",
    intro:
      "Enter your estimated monthly net receipts from medical plans and from vision plans, and both join your estimate. Leave them blank and you’ll see the two rates.",
    medical: {
      name: "Medical plan billing",
      rate: "8% of net receipts",
      label: "Monthly net receipts from medical plans",
      hint: "Medical plan billing is 8% of net receipts.",
    },
    vision: {
      name: "Vision plan billing",
      rate: "5% of net receipts",
      label: "Monthly net receipts from vision plans",
      hint: "Vision plan billing is 5% of net receipts, plus applicable lab fees.",
    },
    labFees: "plus applicable lab fees",
  },
  accountsPayable: {
    name: "Accounts Payable",
    blurb: "Frames, lab, and rent bills approved and paid on time through Bill.com.",
    from: "From $99 a month",
    count: {
      label: "Bills paid per month",
      hint: "$99 a month covers the first 10 bills. Each bill above 10 adds $6.",
      unit: ["bill a month", "bills a month"],
      overMax: "More than 75 bills a month? We’ll quote it on your Discovery Call.",
    },
  },
  payroll: {
    name: "Payroll",
    blurb: "Pay runs, payroll tax filings, and year-end forms through Gusto.",
    from: "From $149 a month",
    count: {
      label: "Employees paid",
      hint: "$149 a month covers the first 10 employees. Each employee above 10 adds $19.",
      unit: ["employee", "employees"],
      overMax: "More than 50 employees? We’ll quote it on your Discovery Call.",
    },
  },
  practiceConsulting: {
    name: "Practice Consulting",
    blurb: "OD-led advice on staffing, optical, and operations.",
    note: "Scoped and quoted on your Discovery Call. It adds nothing to the number here.",
  },
} as const;

export const implementationCopy = {
  eyebrow: "One-time fee",
  title: "Implementation",
  body: "Setting a practice up properly takes time, usually 4 to 6 weeks. This one-time fee covers onboarding your practice and checking your financials for accuracy and completeness, so every report after it rests on numbers you can rely on. Additional onboarding and cleanup fees may apply for bookkeeping clients, depending on your start date.",
  short: "One-time implementation",
  notIncluded: "Not part of the monthly figure",
} as const;

export const leadCopy = {
  heading: "Where can we reach you?",
  body: "Your selections travel with this form, so your Discovery Call starts from your numbers.",
  back: "Back to my selections",
  summaryToggle: "What we’ll receive",
  submit: "Send My Estimate",
  thanksTitle: "Got it. Thank you.",
  thanksBody:
    "We have your estimate and will be in touch soon. You can also book your Discovery Call now, using the calendar below.",
} as const;

// ---------------------------------------------------------------------------
// Page sections
// ---------------------------------------------------------------------------

export const heroCopy = {
  eyebrow: "Pricing Calculator",
  title: "See what it costs for",
  highlight: "a practice like yours.",
  lede: "Get a clear, upfront estimate of what working with ForEyes Books & Billing could cost. Pick your services, set the size of your practice, and the number updates as you go.",
  note: "No hidden fees. No surprise invoices. Your formal quote comes on a Discovery Call.",
} as const;

export const includedCopy = {
  eyebrow: "What you’re paying for",
  title: "What’s Included at Every Level",
  lede: "Your revenue band sets the Bookkeeping price, and your net receipts set the Insurance Billing price. Neither changes the work we do each month.",
  bookkeeping: {
    name: "Bookkeeping",
    tag: "From $399 a month",
    pricing:
      "Set by your annual revenue, your number of locations, and how many accounts we reconcile.",
    items: [
      "A Custom Chart of Accounts that separates medical exam revenue from optical sales, and optical cost of goods from overhead",
      "Every account reconciled to its statement, every month",
      "A quality control manager’s review of every report before you see it",
      "Reviewed reports in your client portal by the 10th business day",
      "A dedicated account manager, one meeting away when a number needs explaining",
      "An annual review that confirms your books are tax-ready",
    ],
    link: { label: "Get Your Books in Order", href: "/services/bookkeeping" },
  },
  insuranceBilling: {
    name: "Insurance Billing",
    tag: "8% medical, 5% vision",
    pricing:
      "Medical plan billing is 8% of net receipts. Vision plan billing is 5% of net receipts, plus applicable lab fees.",
    items: [
      "Claims reviewed before submission",
      "Payments posted and denials appealed",
      "A/R followed up daily",
      "Patient billing inquiries handled for you",
      "Regular coding audits",
      "A monthly report with clean claim rate, denial rate, days in A/R, and overall collection percentage",
    ],
    link: { label: "Stop Chasing Payments", href: "/services/insurance-billing" },
  },
  footnote: "We don’t prepare tax returns. We hand your CPA clean, reviewed books.",
} as const;

export const pricingFaqs: Faq[] = [
  {
    question: "Is the number on the calculator my final price?",
    answer:
      "No. The figure is an estimate built from your selections. We confirm the details and give you a formal quote on your Discovery Call.",
  },
  {
    question: "What sets the Bookkeeping price?",
    answer:
      "Three things: your annual revenue, your number of locations, and how many bank and credit card accounts we reconcile. The first location and up to eight connected accounts are in the base price. Each additional location adds $150 a month.",
  },
  {
    question: "How is Insurance Billing priced?",
    answer:
      "As a percentage of net receipts. Medical plan billing is 8% of net receipts. Vision plan billing is 5% of net receipts, plus applicable lab fees. Enter your estimated monthly net receipts from each in the calculator and both are added to your estimate. Leave them blank and it shows the two rates.",
  },
  {
    question: "What is the $500 implementation fee?",
    answer:
      "It’s a one-time fee, separate from the monthly figure. Setup usually takes 4 to 6 weeks. In that time we onboard your practice and check your financials for accuracy and completeness. Additional onboarding and cleanup fees may apply for bookkeeping clients, depending on your start date.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No hidden fees and no surprise invoices. The calculator shows your monthly estimate and the one-time $500 implementation fee. Two things sit outside the number: applicable lab fees on vision plan billing, and any additional onboarding and cleanup fees for bookkeeping clients, which depend on your start date. We’ll give you a formal quote on your Discovery Call.",
  },
  {
    question: "What does “Contact us for a Custom Quote” mean?",
    answer:
      "The calculator prices Bookkeeping up to $10 million in annual revenue and up to 20 connected accounts. Past either line we quote the work individually. Send us your selections and we’ll take it from there.",
  },
  {
    question: "Does the Discovery Call cost anything?",
    answer:
      "No. The Discovery Call is complimentary. We learn about your practice, understand your goals, and work out whether ForEyes is the right fit.",
  },
];

export const closingCopy = {
  title: "See Further. Move Faster. Grow Smarter.",
  body: "Bring your estimate to a Discovery Call. We’ll walk through your practice, confirm the numbers, and give you a formal quote.",
} as const;

/** The small "how it works" card beside the hero headline. */
export const heroSteps = [
  {
    title: "Switch on what you need",
    body: "Bookkeeping and Insurance Billing first, then Accounts Payable, Payroll, and Practice Consulting.",
  },
  {
    title: "Set the size of your practice",
    body: "Annual revenue, locations, and your monthly net receipts from medical and vision plans.",
  },
  {
    title: "Send it and book your Discovery Call",
    body: "We confirm the details and give you a formal quote.",
  },
] as const;
