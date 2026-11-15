import type { AudienceHubCard, AudienceSlug } from "./types";

type Stage = { slug: AudienceSlug; stage: string; line: string };
type RemoteRow = { key: "reports" | "claims" | "bills" | "people"; title: string; body: string };

// Copy for the /who-we-serve hub.
export const hub = {
  meta: {
    title: "Who We Serve",
    description:
      "ForEyes Books & Billing works only with eyecare practices: independent optometrists, new practices, and multi-location groups. See how we help each one.",
  },
  hero: {
    eyebrow: "Who we serve",
    title: "Eyecare practices only,",
    highlight: "at every stage.",
    lede: "Running an eyecare practice means running a business behind the exam lane. ForEyes Books & Billing works with first-time owners, independent optometrists, and multi-location groups. We do the same two jobs for each: keep the books and work the insurance billing.",
    note: "Not sure which one you are? Book a Discovery Call and we’ll work it out together.",
  },
  /** The hero graphic: one practice growing through three stages. */
  stages: {
    title: "Where is your practice today?",
    caption: "As your practice grows, the setup grows with it.",
    items: [
      {
        slug: "startups",
        stage: "Opening soon",
        line: "Books, payroll, and billing set up before the first patient.",
      },
      {
        slug: "optometrists",
        stage: "One practice",
        line: "Books closed by the 10th business day. A/R followed up daily.",
      },
      {
        slug: "multi-location-practices",
        stage: "Several locations",
        line: "A P&L for each office, and one view of the group.",
      },
    ] satisfies Stage[],
  },
  cards: {
    id: "audiences",
    eyebrow: "Here for your practice",
    title: "Pick the practice that sounds like yours.",
    lede: "We don’t “also work with eyecare professionals.” We only work with them, and that industry expertise shows.",
    items: [
      {
        slug: "optometrists",
        href: "/who-we-serve/optometrists",
        label: "Optometrists",
        fit: "One practice. You own it, and you still see patients.",
        headline: "Books you can trust, and A/R that gets worked.",
        body: "Running an optometry practice means juggling patient care, staff management, and day-to-day operations. We take the bank feed, the claim queue, the bills, and payroll, so the evenings you spend on them come back.",
        points: [
          "Exam, optical, and contact lens revenue on separate lines",
          "Reviewed reports by the 10th business day",
          "Denials appealed and A/R followed up daily",
        ],
        services: ["bookkeeping", "insurance-billing", "accounts-payable", "payroll", "practice-consulting"],
        cta: "See How We Help",
      },
      {
        slug: "startups",
        href: "/who-we-serve/startups",
        label: "Startups",
        fit: "Opening soon, or in your first year.",
        headline: "The back office built before your first patient.",
        body: "Getting your first practice up and running? We build your Custom Chart of Accounts, set up payroll on Gusto, and get billing in place before the first claim, so there’s nothing to clean up later.",
        points: [
          "A Custom Chart of Accounts built before you open",
          "Payroll set up on Gusto before the first pay run",
          "Billing connected before the first claim goes out",
        ],
        services: ["bookkeeping", "insurance-billing", "payroll", "accounts-payable", "practice-consulting"],
        cta: "Build on Solid Ground",
      },
      {
        slug: "multi-location-practices",
        href: "/who-we-serve/multi-location-practices",
        label: "Multi-Location Practices",
        fit: "Two or more offices, or about to open the second.",
        headline: "A P&L for each office, and one view of the group.",
        body: "Growth brings opportunity and new complexity. When you’re managing multiple clinics, keeping tabs on performance, staffing, and billing takes more of your week with every opening. We report each location separately, and one team handles billing for all of them.",
        points: [
          "A separate P&L for every location",
          "Consistent reporting and a centralized view",
          "One billing team across all your offices",
        ],
        services: ["bookkeeping", "insurance-billing", "payroll", "accounts-payable", "practice-consulting"],
        cta: "Compare Your Locations",
      },
    ] satisfies AudienceHubCard[],
  },
  remote: {
    id: "wherever-you-are",
    eyebrow: "Wherever you are",
    title: "Wherever you practice, the work gets done the same way.",
    body: [
      "We’re a fully remote team headquartered in Nashville, serving eyecare practices nationwide. Location won’t limit the quality or speed of support you receive.",
      "Payments and paychecks don’t wait on geography.",
    ],
    rows: [
      {
        key: "reports",
        title: "Your reports",
        body: "Reviewed P&L and balance sheet, delivered to your client portal each month.",
      },
      {
        key: "claims",
        title: "Your claims",
        body: "We connect to your practice management system and insurance portals during onboarding.",
      },
      {
        key: "bills",
        title: "Your bills and payroll",
        body: "Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state.",
      },
      {
        key: "people",
        title: "Your people",
        body: "A dedicated account manager who is one meeting away.",
      },
    ] satisfies RemoteRow[],
  },
  related: {
    title: "Two Flagship Services, and Three You Can Add",
  },
  cta: {
    title: "Tell us where your practice is today.",
    body: "We’ll tell you what your books and billing could look like from here, and what it would cost.",
  },
};

export type HubRowKey = RemoteRow["key"];
