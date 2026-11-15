// Copy for /services/insurance-billing. Plain strings only, so wording can be
// edited without touching layout code. Facts come from the current Billing
// Services and Accounts Receivable Management pages, the billing FAQs and the
// A/R blog post on foreyessolutions.com. The two rates in `pricing` were
// confirmed by the owner. No billing results or certification names are
// published, so none appear here.
import type { Faq } from "@/components/sections/FaqAccordion";
import type { Feature } from "@/components/sections/FeatureGrid";
import type { Step } from "@/components/sections/ProcessSteps";
import { site } from "@/content/site";

export const path = "/services/insurance-billing";

export const meta = {
  title: "Insurance Billing for Optometry Practices",
  description:
    "Insurance billing for independent eyecare practices. Claims reviewed before submission, denials appealed, A/R followed up daily, and a monthly KPI report.",
};

export const hero = {
  eyebrow: "Insurance Billing for eyecare practices",
  title: "Collect what your practice",
  highlight: "is owed.",
  lede: "ForEyes Books & Billing works your insurance claims from submission to posted payment. Eyecare billing specialists review claims for accuracy before they go out, appeal the denials, and follow up on unpaid A/R every day.",
  note: "Medical plans: 8% of net receipts. Vision plans: 5% of net receipts, plus applicable lab fees.",
};

/** Rows in the hero's sample worklist. Each claim steps through `flow`. */
export type WorklistRow = {
  plan: "Vision plan" | "Medical" | "Patient";
  item: string;
  flow: string[];
  /** Index into `flow` shown first. */
  start: number;
};

export const worklist: { title: string; rows: WorklistRow[]; facts: { label: string; value: string }[] } = {
  title: "Claim worklist",
  rows: [
    { plan: "Vision plan", item: "Routine exam", flow: ["Reviewed", "Submitted", "Paid", "Posted"], start: 3 },
    { plan: "Medical", item: "Medical office visit", flow: ["Reviewed", "Submitted", "Paid", "Posted"], start: 1 },
    { plan: "Vision plan", item: "Frames and lenses", flow: ["Reviewed", "Submitted", "Paid", "Posted"], start: 2 },
    { plan: "Medical", item: "Follow-up visit", flow: ["Denied", "Appeal filed", "Paid", "Posted"], start: 0 },
    { plan: "Patient", item: "Statement question", flow: ["Call received", "Answered"], start: 0 },
  ],
  facts: [
    { label: "Follow-up", value: "Daily" },
    { label: "Denials", value: "Appealed" },
    { label: "Your report", value: "Monthly" },
  ],
};

export const problem = {
  eyebrow: "Where the money waits",
  title: "Your front desk already has a full-time job.",
  lede: "Insurance billing is one of the biggest administrative burdens in a practice, and one of the easiest places to lose revenue. It rarely fails all at once. It slips a little each week, in three places.",
  rows: [
    {
      where: "At the front desk",
      title: "Staff stretched too thin",
      body: "The person checking patients in, verifying eligibility, and answering the phone is also the person meant to work claims. When the schedule is full, the claims wait.",
    },
    {
      where: "In the denial pile",
      title: "Denials saved for a quiet afternoon",
      body: "A denied or short-paid claim is money you already earned sitting just out of reach. Filed away instead of worked, it only gets older.",
    },
    {
      where: "On the aging report",
      title: "A/R growing behind a busy schedule",
      body: "You can run a full schedule, fill the optical, and submit every claim, and still end the month unsure how much of that work has turned into cash.",
    },
  ],
  closer:
    "None of this is bad luck. Unpaid claims in eyecare are almost always traceable to a process gap, and a process gap can be closed.",
};

export const handles: { eyebrow: string; title: string; lede: string; features: Feature[] } = {
  eyebrow: "What we handle",
  title: "From clean claim to posted payment.",
  lede: "Revenue cycle management (RCM) is the full path a claim travels: patient intake and coding, submission, payment posting, denial appeals, and patient collections. We run that path for you.",
  features: [
    {
      icon: "claim",
      title: "Claims Submission & Payment Posting",
      body: "Every rejected claim slows your cash flow. We review each claim for accuracy before it goes out and post payments promptly, so your team isn’t spending hours reworking claims.",
    },
    {
      icon: "clock",
      title: "Denial Management & A/R Follow-Up",
      body: "Left unresolved, denials and old receivables quietly drain revenue. Our eyecare billing specialists stay on top of insurance companies, appealing denials and following up on unpaid claims.",
    },
    {
      icon: "phone",
      title: "Patient Billing Support",
      body: "Billing questions slow down your front desk. We handle patient billing inquiries directly, so patients get clear, professional answers about their statements and your team gets its time back.",
    },
    {
      icon: "shield",
      title: "Coding Audits & Compliance",
      body: "Our coders run regular coding audits and stay current on eyecare-specific rules, so claims are coded for the correct reimbursement and compliance problems are caught early.",
    },
  ],
};

/** One aging bucket. Shares are percentages of open A/R and sum to 100. */
export type AgingBucket = { label: string; waiting: number; worked: number };

export const aging = {
  eyebrow: "A/R follow-up",
  title: "Know what you’re owed, and how old it is.",
  body: [
    "Your accounts receivable (A/R) aging report tells you exactly how long money has been sitting uncollected. If your 90+ bucket is growing, that’s where the loss becomes real.",
    "So we work the report instead of filing it. Every open balance is sorted by age, payer, and patient, and unpaid claims are followed up daily.",
  ],
  bullets: [
    "Open insurance and vision plan claims sorted by age and payer",
    "Balances ranked by age, size, and likelihood of collection",
    "Denials and underpayments flagged as they appear, then appealed",
    "Days in A/R at the top of your monthly report",
  ],
  chart: {
    title: "A/R aging report",
    subtitle: "Share of open balances, by days outstanding",
    states: {
      waiting: {
        label: "Left to wait",
        caption: "Claims drift past their follow-up window, and the oldest bucket keeps growing.",
      },
      worked: {
        label: "Worked daily",
        caption: "Old claims are appealed and followed up, so most of what’s open is current.",
      },
    },
    buckets: [
      { label: "0–30", waiting: 41, worked: 66 },
      { label: "31–60", waiting: 24, worked: 19 },
      { label: "61–90", waiting: 16, worked: 9 },
      { label: "90+", waiting: 19, worked: 6 },
    ] satisfies AgingBucket[],
    flag: "Watch this bucket",
    footnote:
      "Sample figures for an imaginary practice, to show how an aging report reads. They are not ForEyes results.",
  },
};

export const eyecare = {
  eyebrow: "Why eyecare-only billers",
  title: "One patient, two plans, two sets of rules.",
  lede: "Optical, vision plan, and medical claims each behave differently, and they rarely pay the way you expect. Our billing specialists work eyecare claims and nothing else.",
  reasons: [
    {
      title: "Vision plan or medical?",
      body: "A routine exam and a pair of glasses go to the vision plan. A medical visit goes to medical insurance. Send a claim to the wrong one and it comes back unpaid.",
    },
    {
      title: "Optometry coding is its own skill",
      body: "General billers often miss the nuances of optometry and ophthalmology coding, which leads to underpayments or compliance risks. Ours know the codes, the modifiers, and the common pitfalls.",
    },
    {
      title: "We know where eyecare dollars get stuck",
      body: "ForEyes was founded by Wade Weisz, OD, after 25+ years as a practicing OD and multi-location practice owner. He’s seen the vision plan that pays late, the medical claim that comes back short, and the frames sale that never got posted.",
    },
  ],
  graphic: {
    title: "One visit, billed two ways",
    visit: "Same patient, same afternoon",
    lanes: [
      {
        plan: "Vision plan",
        items: ["Routine eye exam", "Frames and lenses", "Contact lenses"],
        rules: "Its own eligibility check, copay, and patient portion",
      },
      {
        plan: "Medical insurance",
        items: ["Medical office visit", "Testing", "Follow-up visits"],
        rules: "Its own codes, modifiers, and prior authorization",
      },
    ],
    footer: "Two payers and two rulebooks, with one patient balance to get right.",
  },
};

export const process: { eyebrow: string; title: string; lede: string; steps: Step[] } = {
  eyebrow: "How it works",
  title: "From first call to monthly report.",
  lede: "Five steps. Your account manager runs the switch, and you stay informed about your revenue the whole way.",
  steps: [
    {
      meta: "Start here",
      title: "Discovery Call",
      body: "We start by asking questions about your current billing workflows, so we understand your practice, your pain points, and your goals for the revenue cycle.",
    },
    {
      meta: "Setup",
      title: "Onboarding & Setup",
      body: "Your dedicated account manager connects your practice management system, insurance portals, and patient billing workflows to our platform.",
    },
    {
      meta: "Cleanup",
      title: "Claims Review & Cleanup",
      body: "Our coders go through your historical denials, unpaid claims, and coding problems to find the quick wins and set a clean foundation for your billing.",
    },
    {
      meta: "Every day",
      title: "Ongoing Revenue Cycle Management",
      body: "Your claims are submitted, payments posted, denials managed, and A/R followed up daily. Coding audits and compliance checks happen regularly.",
    },
    {
      meta: "Every month",
      title: "Transparent Reporting",
      body: "Each month you receive a report with your key metrics, such as clean claim rate and overall collections, so you can track performance without lifting a finger.",
    },
  ],
};

export type Kpi = {
  name: string;
  /** Shown inside the ring. */
  unit: string;
  /** Which way an owner wants it to move. */
  better: "higher" | "lower";
  /** How far the illustrative ring sweeps, 0 to 1. Not a result. */
  sweep: number;
  definition: string;
  why: string;
};

export const kpis: { eyebrow: string; title: string; lede: string; items: Kpi[]; footnote: string } = {
  eyebrow: "What you see every month",
  title: "Four numbers that tell you how billing is going.",
  lede: "Your monthly report covers four key performance indicators (KPIs). Here’s what each one means, and why it’s worth a minute of your attention.",
  items: [
    {
      name: "Clean claim rate",
      unit: "%",
      better: "higher",
      sweep: 0.86,
      definition: "The share of your claims a payer accepts the first time, with nothing sent back for rework.",
      why: "It’s your earliest warning. When it drops, something upstream has changed: intake, eligibility, or coding.",
    },
    {
      name: "Denial rate",
      unit: "%",
      better: "lower",
      sweep: 0.16,
      definition: "The share of submitted claims a payer refuses to pay.",
      why: "Every denial is work you’ve done and haven’t been paid for. A rising rate usually traces back to one fixable cause.",
    },
    {
      name: "Days in A/R",
      unit: "days",
      better: "lower",
      sweep: 0.3,
      definition: "The average number of days between providing a service and being paid for it.",
      why: "It shows how long your cash is tied up. Profit on paper doesn’t always mean money in the account.",
    },
    {
      name: "Overall collection percentage",
      unit: "%",
      better: "higher",
      sweep: 0.9,
      definition: "What you actually collected, as a share of what payers and patients owed you.",
      why: "It’s the bottom line of billing. It tells you whether the care you delivered turned into cash.",
    },
  ],
  footnote: "The rings show direction only. Your report shows your own numbers, every month.",
};

export const comparison = {
  lede: "You ask patients this all day. Here’s the same test for your insurance billing.",
  labels: { one: "In-house biller", two: "With ForEyes" },
  rows: [
    {
      topic: "Attention",
      one: "One person juggling claims with the phones, check-in, and check-out.",
      two: "A team that works only on your revenue cycle, and only for eyecare practices.",
    },
    {
      topic: "Denied claims",
      one: "They wait in a folder until there’s a quiet afternoon.",
      two: "Appealed, resubmitted, and followed up daily.",
    },
    {
      topic: "When someone’s out",
      one: "Your biller takes a vacation or gives notice, and claims stop moving.",
      two: "A team, so your claims keep moving when one person is away.",
    },
    {
      topic: "Coding",
      one: "Rules change, and nobody has time to keep up with them.",
      two: "Regular coding audits by coders who stay current on eyecare-specific rules.",
    },
    {
      topic: "What you see",
      one: "You find out how billing is going when the bank balance looks light.",
      two: "A monthly report: clean claim rate, denial rate, days in A/R, and collection percentage.",
    },
    {
      topic: "Overhead",
      one: "Another in-house staff member to hire, train, and cover.",
      two: "Consistent collections work without adding to your payroll.",
    },
  ],
};

export const books = {
  eyebrow: "Books and billing",
  title: "Billing collects it. Your books show where it went.",
  body: [
    "When the same team keeps your books and works your claims, the revenue on your P&L and the money in your bank account finally agree.",
    "Insurance Billing stands on its own. If you want both, they’re built to work hand in hand.",
  ],
  link: { label: "Get Your Books in Order", href: "/services/bookkeeping" },
  chain: [
    { owner: "Billing", label: "Payment posted" },
    { owner: "Books", label: "Deposit matched" },
    { owner: "Books", label: "On your P&L" },
  ],
};

export const faqs: { title: string; lede: string; items: Faq[] } = {
  title: "Insurance Billing FAQs",
  lede: "Straight answers to what owners ask before they hand over their claims.",
  items: [
    {
      question: "My claim denial rate seems high. How can you help?",
      answer:
        "We start with a review of your most common denial reasons. Then we check claims for those errors before they’re submitted, and we appeal the denials that still come back. Our team works with eyecare-specific coding and billing rules every day, so the usual causes are familiar ones.",
    },
    {
      question: "How is this different from having a billing person on staff?",
      answer:
        "An in-house biller often juggles multiple responsibilities. Our team focuses solely on your revenue cycle, which brings more specialization and consistency than a single employee can typically offer. Your claims also keep moving when one person is out.",
    },
    {
      question: "What kind of reporting will I receive?",
      answer:
        "You’ll get a clear monthly report on your key performance indicators (KPIs): clean claim rate, denial rate, days in A/R, and overall collection percentage.",
    },
    {
      question: "What is revenue cycle management?",
      answer:
        "Revenue cycle management (RCM) is everything between seeing a patient and being paid for the visit: patient intake, coding, claim submission, payment posting, denial appeals, and patient collections. Insurance Billing is our name for running that cycle for you.",
    },
    {
      question: "Do you provide coding audits?",
      answer:
        "Yes. Our coders audit your coding regularly and stay current on eyecare-specific rules, so claims are coded for the correct reimbursement and compliance problems are caught early.",
    },
    {
      question: "Do you handle patient billing questions?",
      answer:
        "Yes. We answer patient questions about statements and balances directly, which takes those calls off your front desk.",
    },
    {
      question: "How is Insurance Billing different from Bookkeeping?",
      answer:
        "Insurance Billing is the hands-on work of submitting claims, appealing denials, and following up on unpaid balances. Bookkeeping records what was collected and reconciles it to your bank. They’re separate services, and they’re built to work hand in hand.",
    },
    {
      question: "What does Insurance Billing cost?",
      answer:
        "Medical plan billing is 8% of net receipts. Vision plan billing is 5% of net receipts, plus applicable lab fees. Enter your estimated monthly net receipts in the pricing calculator to see a monthly figure. Every figure it shows is an estimate only.",
    },
    {
      question: "Is your team local or remote?",
      answer: `We’re a fully remote team headquartered in Nashville, serving eyecare practices nationwide. You can reach us ${site.hours}.`,
    },
  ],
};

export const proof = {
  title: "Proof in Practice",
  lede: "Two eyecare practices on handing their insurance billing to a team that does nothing else.",
};

/** Confirmed by the owner. Keep the basis wording exactly: "of net receipts". */
export const pricing = {
  title: "What Insurance Billing costs.",
  rates: [
    { plan: "Medical plan billing", rate: "8%", basis: "of net receipts" },
    { plan: "Vision plan billing", rate: "5%", basis: "of net receipts, plus applicable lab fees" },
  ],
  body: "Enter your estimated monthly net receipts in the pricing calculator to see a monthly figure, then confirm it on your Discovery Call. Every figure the calculator shows is an estimate only.",
  secondary: "Estimate Your Price",
};

export const cta = {
  title: "Your numbers already know what you’re owed.",
  body: "Let us help you collect it. Tell us how your practice bills today, and we’ll show you what Insurance Billing with ForEyes would look like.",
};
