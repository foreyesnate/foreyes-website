// Billing calculator: every line of copy on /billing-calculator.
//
// Edit wording here. The numbers (defaults, slider ranges, steps) and the
// maths live in src/lib/billing-calculator.ts, and the layout in
// src/components/pages/billing-calculator/.
//
// Rules this copy was written to, and should keep to when edited:
// - The starting values are examples. Never call them typical, average or
//   benchmark figures, and never cite a study.
// - The two assumptions are "our starting assumptions". No source is claimed.
// - The result is an estimate. Nothing here promises that ForEyes will
//   recover it, and the fee is never compared with it.
// - What ForEyes does is described only in words already used in
//   src/content/services/insurance-billing.ts.

import type { Faq } from "@/components/sections/FaqAccordion";
import { pricing as billingPricing } from "@/content/services/insurance-billing";
import { site } from "@/content/site";
import { billingCalculatorConfig, type BillingField } from "@/lib/billing-calculator";

export const path = "/billing-calculator";

const { assumptions } = billingCalculatorConfig;

export const meta = {
  title: "Billing Calculator: What Unworked Denials Cost",
  description:
    "Free calculator for eyecare practices. Enter four numbers to estimate the insurance revenue you lose each year to denied claims nobody followed up.",
};

export const heroCopy = {
  eyebrow: "Free Billing Calculator",
  title: "Put a number on the claims",
  highlight: "nobody followed up.",
  lede: "Enter four numbers from your own reports. You’ll get an estimate of the insurance revenue your practice loses each year to denied claims that were never worked, and what your oldest unpaid claims may still be worth.",
  note: "Free to use. Your numbers stay in your browser unless you choose to send them.",
  cta: "Enter Your Numbers",
  /** The small card beside the headline. */
  card: {
    title: "Four numbers to have ready",
    items: ["Monthly insurance collections", "Denial rate", "Denials nobody follows up", "A/R over 90 days"],
  },
} as const;

export type FieldCopy = {
  label: string;
  /** One line: where to find this number. */
  hint: string;
  /** Short name for buttons and screen readers: "Decrease denial rate". */
  noun: string;
  /** Shown under a dollar slider whose box accepts more than the slider does. */
  footnote?: string;
};

export const fieldCopy: Record<BillingField, FieldCopy> = {
  monthlyCollections: {
    label: "Insurance payments your practice collects in a typical month",
    hint: "On the payments or collections report in your practice management system. Count insurance payments only.",
    noun: "monthly insurance collections",
    footnote: "Collect more than this? Type the amount in the box.",
  },
  denialRate: {
    label: "Share of claims denied or rejected the first time they are sent",
    hint: "On the denial or rejection report in your clearinghouse (the service that sends your claims to insurers).",
    noun: "denial rate",
  },
  unworkedShare: {
    label: "Share of those denied claims that nobody follows up",
    hint: "You may not have a report for this. Ask whoever works your denials, or count last month’s that are still untouched.",
    noun: "share of denials nobody follows up",
  },
  agedAR: {
    label: "Insurance A/R (money insurers still owe you) that is more than 90 days old",
    hint: "In the 90+ days column of the insurance aging report in your practice management system.",
    noun: "insurance A/R over 90 days",
    footnote: "Owed more than this? Type the amount in the box.",
  },
  recoveryRate: {
    label: "Share of followed-up denials that end up paid",
    hint: "If you track how many worked denials get paid, use your own figure.",
    noun: "share of followed-up denials paid",
  },
  agedCollectible: {
    label: "Share of 90+ day A/R that can still be collected",
    hint: "Lower this if most of your old claims are past the insurer’s deadline.",
    noun: "collectible share of old A/R",
  },
};

export const calculatorCopy = {
  eyebrow: "The calculator",
  heading: "Enter Your Four Numbers",
  lede: "The numbers below are examples, so you can see how the calculator works. They are not typical figures. Replace each one with your own.",
  inputsTitle: "Your practice’s numbers",
  exampleTag: "Examples",
  perMonth: "a month",
  privacy: "Your numbers stay in your browser unless you choose to send them.",
  assumptions: {
    title: "Our assumptions",
    /** Shown on the closed panel, with the two current values filled in. */
    summary: (recovery: number, collectible: number) =>
      `${recovery}% of followed-up denials get paid. ${collectible}% of 90+ day A/R can still be collected.`,
    open: "Change",
    close: "Close",
    body: "These two are our starting assumptions, not measurements of your practice. Change them if you know your own.",
  },
} as const;

export const resultCopy = {
  label: "Your estimate",
  exampleLabel: "Example numbers",
  exampleBody: "Enter your own numbers to see your estimate.",
  about: "about",
  lessThan: "less than",
  yearly: {
    tag: "Every year",
    unit: "a year",
    caption: "lost to denied claims nobody followed up",
    perMonth: "a month",
    share: "of your insurance collections",
    zeroTitle: "Nothing is being lost to unworked denials on these numbers.",
    zeroBody: "No denied claim is going unworked. That is where you want to be.",
    noCollections: "Add your monthly insurance collections to see an estimate.",
  },
  backlog: {
    tag: "One time",
    caption: "in aged claims still worth chasing",
    note: "Not part of the yearly figure.",
    zeroTitle: "No aged claims to chase on these numbers.",
  },
  disclaimer:
    "An estimate from the numbers entered. It is not a quote, an audit, or a promise of what can be recovered.",
  primary: "Book a Discovery Call",
  secondary: "Send these numbers to our billing team",
  edit: "Edit My Numbers",
  sent: "Numbers sent",
  /** The pinned bar on phones and tablets. */
  bar: {
    label: "Lost each year",
    exampleLabel: "Example numbers",
    panelTitle: "The breakdown",
    zero: "Nothing lost to unworked denials",
    noCollections: "Add your monthly collections",
  },
} as const;

export const leadCopy = {
  heading: "Send your numbers to our billing team",
  body: "This form sends the numbers below and your contact details to ForEyes, so our billing team can follow up with you. It does not email you a copy, so note your figures if you want to keep them.",
  back: "Back to my numbers",
  summaryToggle: "What we’ll receive",
  submit: "Send My Numbers",
  thanksTitle: "Got it. Thank you.",
  thanksBody:
    "We have your numbers and will be in touch soon. You can also book your Discovery Call now, using the calendar below.",
} as const;

export const howCopy = {
  eyebrow: "The maths, in plain words",
  title: "How We Worked This Out",
  lede: "Four steps. Nothing is hidden, and you can change both of our assumptions in the calculator.",
  steps: [
    {
      title: "Work out what a month of claims was worth",
      body: "You tell us what you collect from insurers in a typical month. Some claims were denied and never paid, so the claims you sent were worth more than that. We count what gets paid today: claims that were never denied, plus denials that were followed up and paid. Then we work backwards from your collections to the full value.",
    },
    {
      title: "Find the denials nobody followed up",
      body: "We take your denial rate, then the share of those denials that nobody follows up. That is the pile this estimate is about.",
    },
    {
      title: "Count what follow-up would likely bring in",
      body: `Not every denial gets paid, even when someone works it. Our starting assumption is that ${assumptions.recoveryRate.default}% of followed-up denials end up paid. We apply that to the pile for the monthly figure, then multiply by 12 for the year. Step 1 uses the same ${assumptions.recoveryRate.default}% for the denials that already get followed up.`,
    },
    {
      title: "Look at old A/R on its own",
      body: `Claims more than 90 days old are harder to collect. Our starting assumption is that ${assumptions.agedCollectible.default}% can still be collected. This is a one-time amount, so we never add it to the yearly figure.`,
    },
  ],
  shortcuts: {
    title: "Two shortcuts we took",
    lede: "They keep the calculator to four numbers. They are also why the result is an estimate.",
    items: [
      "Denied claims are treated as average-sized. Yours may run larger or smaller than your usual claim.",
      "Claims that are not denied are treated as paid. Underpayments are left out.",
    ],
  },
  example: {
    title: "The example numbers, step by step",
    note: "This uses the calculator’s example numbers. They are not figures from a real or typical practice. Each line is rounded on its own, so the steps may not multiply out exactly.",
    eyebrow: "Worked example",
    rows: {
      collected: "Collected from insurers in a month",
      paidShare: "Share of claim value that gets paid today",
      claimValue: "What that month of claims was worth",
      unworked: "Denied and never followed up",
      monthly: "Likely paid if someone followed up",
      monthlyUnit: "a month",
      yearly: "Over 12 months",
      backlog: "Old A/R that can still be collected",
    },
    /** The small print under each row, filled in from the example numbers. */
    details: {
      paidShare: "Never denied, or denied, followed up, and paid",
      unworked: (denied: number, unworked: number) => `${denied}% denied, and ${unworked}% of those not followed up`,
      monthly: (recovery: number) => `${recovery}% of the line above`,
      backlog: (share: number, amount: string) => `${share}% of ${amount} over 90 days old`,
    },
    yearlyTag: "Every year",
    backlogTag: "One time",
  },
} as const;

export type Fix = {
  /** Which number in the calculator this moves. */
  moves: string;
  title: string;
  /** What any practice can do. */
  body: string;
  /** What ForEyes does, in the Insurance Billing page's own words. */
  foreyes: string;
};

export const fixesCopy: {
  eyebrow: string;
  title: string;
  lede: string;
  foreyesLabel: string;
  fixes: Fix[];
  link: { label: string; href: string };
  linkNote: string;
} = {
  eyebrow: "What moves the number",
  title: "Three Fixes for Three of Your Numbers",
  lede: "Three of the numbers you entered are things a practice can change. Here is where to start with each one, and what we do about it for our Insurance Billing clients.",
  foreyesLabel: "What ForEyes does",
  fixes: [
    {
      moves: "Lowers your denial rate",
      title: "Stop denials before they start",
      body: "A denial can start before the claim is sent: a benefit nobody checked, or a code that was off. Verify benefits at check-in, and review every claim before it goes out.",
      foreyes:
        "We start with a review of your most common denial reasons. Then we review each claim for accuracy before it goes out.",
    },
    {
      moves: "Lowers the share nobody follows up",
      title: "Follow up every denial",
      body: "A denied claim is money you already earned. Filed away instead of worked, it only gets older. Give every denial an owner and a next step.",
      foreyes: "Our eyecare billing specialists appeal denials and follow up on unpaid claims every day.",
    },
    {
      moves: "Shrinks your A/R over 90 days",
      title: "Work old A/R before deadlines pass",
      body: "Insurers set deadlines for filing and appealing claims. Once a deadline passes, that claim may never be paid. Start with the oldest claims that can still be collected.",
      foreyes:
        "We sort every open balance by age, payer, and patient. Balances are ranked by age, size, and likelihood of collection, then followed up daily.",
    },
  ],
  link: { label: "Stop Chasing Payments", href: "/services/insurance-billing" },
  linkNote: "See everything Insurance Billing covers, and what it costs.",
};

export const quoteCopy = {
  eyebrow: "Proof in Practice",
  /** Must match a name in src/content/testimonials.ts (billingTestimonials). */
  name: "Patty Haley",
} as const;

export const readNextCopy = {
  eyebrow: "Keep reading",
  /** Used only if the post cannot be found; the post's own title is shown otherwise. */
  fallbackTitle: "Why Your Accounts Receivable Is Growing and How to Bring It Under Control",
  body: "Why A/R creeps up in the first place, the warning signs to watch for, and how to stop the cycle.",
  cta: "Read the Article",
  slug: "why-accounts-receivable-is-growing",
  href: "/blog/why-accounts-receivable-is-growing",
} as const;

export const closingCopy = {
  title: "Bring your numbers to a Discovery Call.",
  body: "Tell us how your practice bills today and where claims get stuck. We’ll show you what Insurance Billing with ForEyes would look like.",
} as const;

export type CalculatorFaq = Faq & { link?: { label: string; href: string } };

const [medicalRate, visionRate] = billingPricing.rates;

export const billingCalculatorFaqs: CalculatorFaq[] = [
  {
    question: "Is this a quote or a guarantee?",
    answer:
      "No. It’s an estimate built from the numbers you enter and two starting assumptions. It isn’t a quote, an audit of your claims, or a promise of what can be recovered. What a practice can actually collect depends on its payers, its claims, and how old those claims are.",
  },
  {
    question: "Where do I find these numbers?",
    answer:
      "Start with your practice management system. Monthly insurance collections are on the payments or collections report. A/R over 90 days is on the insurance aging report. Your denial rate is on the denial or rejection report in your clearinghouse, the service that sends your claims to insurers. Your biller can usually pull all three.",
  },
  {
    question: "What if I don’t know my denial rate?",
    answer:
      "Start with your best guess, then move the slider to see how much it changes the result. For a real figure, ask your biller or clearinghouse for last month’s count of claims sent and claims denied or rejected. Divide the second by the first, then multiply by 100 to get the percentage. The number the calculator starts with is only an example.",
  },
  {
    question: "Does it include patient balances, or split vision from medical?",
    answer:
      "No. The calculator covers insurance claims only, so patient balances are left out. Vision plan and medical claims are combined into one estimate. It does not show them separately.",
  },
  {
    question: "What does ForEyes charge for Insurance Billing?",
    answer: `${medicalRate.plan} is ${medicalRate.rate} ${medicalRate.basis}. ${visionRate.plan} is ${visionRate.rate} ${visionRate.basis}. The pricing calculator turns those rates into a monthly estimate for your practice.`,
    link: { label: "Estimate Your Price", href: site.pricingHref },
  },
  {
    question: "What happens to my numbers?",
    answer:
      "They stay in your browser. Nothing you enter is sent to us or saved unless you choose “Send these numbers to our billing team”. If you do, we receive your numbers, the estimate, and the contact details you add, so our team can follow up. The form does not email you a copy.",
  },
];

export const faqCopy = {
  eyebrow: "Calculator FAQs",
  title: "Straight Answers About the Estimate",
  lede: "What the number means, what it leaves out, and what happens to what you type.",
} as const;

/** The compact callout on the Insurance Billing page. */
export const calloutCopy = {
  eyebrow: "Free Billing Calculator",
  title: "How much is slipping at your practice?",
  body: "Enter four numbers and see an estimate of what unworked denials cost you each year. Your numbers stay in your browser unless you choose to send them.",
  cta: "Run Your Numbers",
} as const;
