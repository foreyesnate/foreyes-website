import type { IconName } from "@/components/ui/Icon";
import type { PostService } from "@/lib/blog";

// Copy and presentation data for the blog and the Resources hub. Kept here so
// wording can change without touching layout code.

export const blogCopy = {
  eyebrow: "The ForEyes blog",
  title: "Smart Reads for ODs",
  lede: "Our blog helps you simplify your numbers and grow smarter, one post at a time.",
  indexHref: "/blog",
} as const;

/** How each category is drawn: its icon and the tint of its generated cover. */
export type CategoryStyle = {
  icon: IconName;
  cover: "navy" | "teal" | "ink" | "yellow";
};

const categoryStyles: Record<string, CategoryStyle> = {
  Bookkeeping: { icon: "ledger", cover: "navy" },
  "Insurance Billing": { icon: "claim", cover: "teal" },
  "Financial Management": { icon: "chart", cover: "ink" },
  Payroll: { icon: "payroll", cover: "yellow" },
  "Accounts Payable": { icon: "bill", cover: "teal" },
  "Practice Consulting": { icon: "compass", cover: "navy" },
  Growth: { icon: "spark", cover: "yellow" },
};

export function categoryStyle(category: string): CategoryStyle {
  return categoryStyles[category] ?? { icon: "eye", cover: "ink" };
}

/**
 * The "talk to us" card inside each article. A post names its service in
 * frontmatter (`service:`); every claim below is one the service pages make.
 */
export type ServicePitch = {
  label: string;
  href: string;
  icon: IconName;
  title: string;
  body: string;
  points: string[];
  cta: string;
};

export const servicePitches: Record<PostService, ServicePitch> = {
  bookkeeping: {
    label: "Bookkeeping",
    href: "/services/bookkeeping",
    icon: "ledger",
    title: "Want these numbers ready by the 10th?",
    body: "We keep the books for eyecare practices and nobody else. Medical exam revenue is separated from optical sales, and optical cost of goods from overhead, so you can see which part of your practice carries its weight.",
    points: [
      "A Custom Chart of Accounts built for eyecare",
      "Every account reconciled every month",
      "Reviewed reports by the 10th business day",
    ],
    cta: "Get Your Books in Order",
  },
  "insurance-billing": {
    label: "Insurance Billing",
    href: "/services/insurance-billing",
    icon: "claim",
    title: "Rather hand the claims to someone who works them daily?",
    body: "We review claims before they go out, post the payments, appeal the denials, and follow up on unpaid A/R every day. Each month you get a report on how your claims performed.",
    points: [
      "Claims reviewed before submission",
      "Denials appealed, A/R followed up daily",
      "Monthly clean claim rate, denial rate, and days in A/R",
    ],
    cta: "Stop Chasing Payments",
  },
  payroll: {
    label: "Payroll",
    href: "/services/payroll",
    icon: "payroll",
    title: "Want payroll off your desk?",
    body: "We run payroll for eyecare practices on Gusto, alongside the books or the billing we already handle for you. Your part is to review time cards and click submit.",
    points: [
      "Paychecks out on schedule",
      "Payroll tax filings handled",
      "Year-end forms, such as W-2s",
    ],
    cta: "See How Payroll Works",
  },
  "accounts-payable": {
    label: "Accounts Payable",
    href: "/services/accounts-payable",
    icon: "bill",
    title: "Tired of chasing frame and lab bills?",
    body: "We run accounts payable for eyecare practices on Bill.com. We collect and enter the frame, lens, and lab invoices. You review and approve them, and we schedule the payments.",
    points: [
      "Runs on Bill.com",
      "Invoices collected, entered, and categorized",
      "You approve every payment before it goes out",
    ],
    cta: "See How Accounts Payable Works",
  },
  "practice-consulting": {
    label: "Practice Consulting",
    href: "/services/practice-consulting",
    icon: "compass",
    title: "Want a second opinion from an OD who has owned practices?",
    body: "Wade Weisz, OD, has 25+ years as a practicing OD and multi-location practice owner. Our team works alongside you to put changes in place, so the improvements stick.",
    points: [
      "OD-led advice",
      "Staffing, optical, and operations",
      "Help putting changes in place",
    ],
    cta: "Talk Through Your Practice",
  },
};

/** The three cards at the top of the Resources hub. */
export type ResourceCard = {
  key: "blog" | "faq" | "pricing";
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

export const resourceCards: ResourceCard[] = [
  {
    key: "blog",
    eyebrow: "Read",
    title: "Blog",
    body: "Articles for practice owners on reading a P&L, healthy expense ratios, aging A/R, payroll, and cash flow. Each one turns a business topic into something you can use this month.",
    cta: "Read Our Blog",
    href: "/blog",
  },
  {
    key: "faq",
    eyebrow: "Ask",
    title: "FAQs",
    body: "Straight answers to the questions eyecare practice owners ask most, from bookkeeping and billing to payroll and consulting, so you know what to expect before your Discovery Call.",
    cta: "Explore FAQs",
    href: "/faq",
  },
  {
    key: "pricing",
    eyebrow: "Estimate",
    title: "Pricing Calculator",
    body: "See what bookkeeping, insurance billing, accounts payable, and payroll would cost for a practice your size. Switch services on and off and the monthly estimate updates as you go.",
    cta: "Estimate Your Price",
    href: "/pricing-calculator",
  },
];
