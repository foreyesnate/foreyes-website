// Copy for /services, the services hub. Plain strings only, so wording can be
// edited without touching layout code. Facts come from the current Services,
// Bookkeeping, Billing Services, and FAQ pages on foreyessolutions.com.
// Prices match src/content/pricing.ts; the Insurance Billing rates were
// confirmed by the owner. Change them in both places.
import type { Faq } from "@/components/sections/FaqAccordion";
import type { IconName } from "@/components/ui/Icon";
import { site } from "@/content/site";

export const path = "/services";

export const meta = {
  title: "Bookkeeping & Insurance Billing Services for Eyecare",
  description:
    "Bookkeeping and Insurance Billing for independent eyecare practices, plus Accounts Payable, Payroll, and Practice Consulting. See what each service covers.",
};

export const hero = {
  eyebrow: "Services",
  title: "Your books and your billing,",
  highlight: "handled by one team.",
  lede: "ForEyes Books & Billing does two things for independent eyecare practices: we keep the books and we work the insurance billing. Clients can add Accounts Payable, Payroll, or Practice Consulting on top.",
  note: "Founded by an OD. Eyecare practices only. Your Discovery Call is complimentary.",
  /** Two small cards floated over the hero picture, one per flagship. */
  chips: [
    { icon: "ledger" as IconName, label: "Bookkeeping", value: "Reviewed reports by the 10th business day" },
    { icon: "claim" as IconName, label: "Insurance Billing", value: "A/R followed up daily" },
  ],
};

export type HubFlagship = {
  href: string;
  icon: IconName;
  label: string;
  title: string;
  body: string;
  included: string[];
  /** Two short commitments, shown as tiles. */
  facts: { value: string; label: string }[];
  price: { label: string; lines: string[] };
  cta: string;
};

export const flagships: {
  eyebrow: string;
  title: string;
  lede: string;
  items: [HubFlagship, HubFlagship];
} = {
  eyebrow: "Books and billing",
  title: "The two things we do every day.",
  lede: "Books tell you what your practice earned and kept. Billing collects what your practice is owed. Hire us for one, or for both.",
  items: [
    {
      href: "/services/bookkeeping",
      icon: "ledger",
      label: "Bookkeeping",
      title: "Books that show what your practice actually earns.",
      body: "Exams, optical sales, and contact lenses all deposit into the same bank account. We code every transaction to a Custom Chart of Accounts built for eyecare, so you can see which part of your practice carries its weight.",
      included: [
        "Exam revenue kept apart from optical sales",
        "Every account reconciled monthly",
        "A quality control manager reviews every report",
        "Reports in your client portal",
        "A dedicated account manager",
        "An annual review confirming your books are tax-ready",
      ],
      facts: [
        { value: "10th", label: "business day, reviewed reports delivered" },
        { value: "6 to 8", label: "weeks, a typical historical cleanup" },
      ],
      price: { label: "Pricing", lines: ["From $399 a month."] },
      cta: "Get Your Books in Order",
    },
    {
      href: "/services/insurance-billing",
      icon: "claim",
      label: "Insurance Billing",
      title: "Collect what your practice is owed.",
      body: "Every rejected claim slows your cash. Our eyecare billing specialists review claims before they go out, post payments, appeal denials, and follow up on unpaid A/R, so your front desk doesn’t have to.",
      included: [
        "Claims reviewed before submission",
        "Payments posted",
        "Denials appealed",
        "Patient billing inquiries handled",
        "Coding audits",
        "A monthly report on your key billing numbers",
      ],
      facts: [
        { value: "Daily", label: "follow-up on unpaid A/R" },
        { value: "Monthly", label: "report: clean claim rate, denial rate, days in A/R" },
      ],
      price: {
        label: "Pricing",
        lines: ["Medical plans: 8% of net receipts.", "Vision plans: 5% of net receipts, plus applicable lab fees."],
      },
      cta: "Stop Chasing Payments",
    },
  ],
};

export type HubSupportingService = {
  href: string;
  icon: IconName;
  label: string;
  body: string;
  /** Short facts shown as pills: the tool it runs on, and the starting price. */
  tags: string[];
};

export const supporting: {
  eyebrow: string;
  title: string;
  lede: string;
  items: HubSupportingService[];
  /** The one approved line about tax. Said once, quietly. */
  taxLine: string;
} = {
  eyebrow: "Add-ons",
  title: "Already on our books? We can also run your bills and your payroll.",
  lede: "Three services our bookkeeping and billing clients add when they want more off their plate.",
  items: [
    {
      href: "/services/accounts-payable",
      icon: "bill",
      label: "Accounts Payable",
      body: "Every vendor bill entered, coded, approved by you, and paid on time. Frames, lab, and rent included.",
      tags: ["Runs on Bill.com", "From $99 a month"],
    },
    {
      href: "/services/payroll",
      icon: "payroll",
      label: "Payroll",
      body: "Pay runs, direct deposit, and payroll tax filings. In most cases, all you need to do is review time cards and click submit.",
      tags: ["Runs on Gusto", "From $149 a month"],
    },
    {
      href: "/services/practice-consulting",
      icon: "compass",
      label: "Practice Consulting",
      body: "OD-led advice on staffing, workflows, optical performance, and growth, with help putting the plan to work.",
      tags: ["Led by Wade Weisz, OD", "Quoted on your Discovery Call"],
    },
  ],
  taxLine: "We don’t prepare tax returns. We hand your CPA clean, reviewed books.",
};

export const pricing = {
  title: "See What It Costs for a Practice Like Yours",
  body: "The pricing calculator builds an estimate for Bookkeeping, Insurance Billing, Accounts Payable, and Payroll in a few minutes. Then book a Discovery Call to confirm it. Every figure shown is an estimate only.",
};

export const faqs: { title: string; lede: string; items: Faq[] } = {
  title: "Questions About Our Services",
  lede: "Short answers on how the services fit together and what they cost.",
  items: [
    {
      question: "Do I need both Bookkeeping and Insurance Billing?",
      answer:
        "No. Each one stands on its own, so you can hire us for the books, the billing, or both. When the same team does both, the revenue on your P&L and the money in your bank account agree.",
    },
    {
      question: "Can I add Accounts Payable, Payroll, or Practice Consulting later?",
      answer:
        "Yes. These are add-ons, and bookkeeping and billing clients can take one on at any point. Tell your account manager, or bring it up on your Discovery Call.",
    },
    {
      question: "What do your services cost?",
      answer:
        "Bookkeeping starts at $399 a month, Accounts Payable at $99 a month, and Payroll at $149 a month. Insurance Billing is 8% of net receipts for medical plans and 5% of net receipts for vision plans, plus applicable lab fees. Practice Consulting is quoted on your Discovery Call.",
    },
    {
      question: "Do you only work with eyecare practices?",
      answer:
        "Yes. We don’t “also work with eyecare professionals.” We only work with them. That covers optometry, ophthalmology, and optical.",
    },
    {
      question: "Where is your team?",
      answer: `We’re a fully remote team headquartered in Nashville, serving eyecare practices nationwide. You can reach us ${site.hours}.`,
    },
    {
      question: "How do I get started?",
      answer:
        "Book a Discovery Call. It’s complimentary. We learn about your practice, understand your goals, and determine whether ForEyes is the right fit for your needs.",
    },
  ],
};

export const cta = {
  title: "Tell us what you’d like off your plate.",
  body: "Book a Discovery Call and tell us about your practice. We’ll tell you what your books and billing could look like, and what it would cost.",
};
