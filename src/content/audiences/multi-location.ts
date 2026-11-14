import type { AudienceContent } from "./types";

// Copy for /who-we-serve/multi-location-practices. None of the four client
// testimonials speaks to running several offices, so this page carries the
// founder's own words instead (from the current About page).
export const multiLocation: AudienceContent = {
  slug: "multi-location-practices",
  path: "/who-we-serve/multi-location-practices",
  label: "Multi-Location Practices",
  meta: {
    title: "Bookkeeping & Billing for Multi-Location Eyecare Practices",
    description:
      "A separate P&L for every location, consistent reporting, and one centralized view, plus insurance billing and A/R handled by one team across all your offices.",
  },
  hero: {
    tone: "teal",
    eyebrow: "For multi-location practices",
    title: "Every location on its own P&L,",
    highlight: "all in one view.",
    lede: "Managing a single eyecare office is challenging. Running several multiplies the payroll, the bills, the claims, and the questions about which office is carrying its weight. ForEyes Books & Billing gives each practice its own P&L, with consistent reporting and a centralized view.",
    note: "The Discovery Call is complimentary. Bring your location count and your growth plans.",
    graphic: "rollup",
  },
  obstacles: {
    id: "common-challenges-for-growing-practices",
    eyebrow: "The obstacles",
    title: "What gets harder with every location.",
    lede: "As practices expand, new obstacles emerge. These are the five we help multi-location owners get past.",
    items: [
      {
        title: "Financials that live in separate places.",
        body: "Different processes, teams, or systems at each location make it difficult to see the whole group. Someone ends up consolidating spreadsheets by hand.",
        fix: "Each practice gets its own profit and loss statement, reported the same way, with a centralized view on top. No manual consolidation.",
        services: ["bookkeeping"],
      },
      {
        title: "Strong revenue, unclear profit.",
        body: "Revenue may look strong across locations, but that doesn’t always mean profit, or your own income, is where it should be. Expenses vary by clinic, and W-2 wages and owner draws blur the rest.",
        fix: "We break down profitability by location and clarify your take-home pay, so you know which clinic contributes to the bottom line and what reaches you.",
        services: ["bookkeeping"],
      },
      {
        title: "No fair way to compare offices.",
        body: "Without standardized numbers, it’s difficult to know which locations are thriving and which need attention.",
        fix: "Every office is reported in the same structure, so exam revenue, optical sales, and cost of goods line up side by side and trends are easy to spot.",
        services: ["bookkeeping"],
      },
      {
        title: "Billing handled differently at every front desk.",
        body: "The more practices you run, the more difficult billing gets, and the easier it is for revenue to slip through the cracks.",
        fix: "One billing team handles claims, denials, and patient billing across all of your locations. A/R is followed up daily, wherever the claim started.",
        services: ["insurance-billing"],
      },
      {
        title: "Admin that multiplies with each opening.",
        body: "Adding a location often multiplies the day-to-day tasks, from payroll and accounts payable to billing follow-ups. New offices also invite redundant workflows.",
        fix: "Payroll on Gusto and bills in Bill.com work the same way for every office, and each new practice is added to your existing structure.",
        services: ["payroll", "accounts-payable"],
      },
    ],
  },
  services: {
    id: "services",
    eyebrow: "How we help",
    title: "The same two jobs, done for every office.",
    lede: "Bookkeeping tells you how each location performed. Insurance Billing collects what each location is owed. The other three keep staff and vendors paid, and help when growth isn’t paying off.",
    flagships: [
      {
        service: "bookkeeping",
        headline: "A separate P&L for each practice.",
        body: "When you’re keeping books for multiple clinics, it’s easy to feel in the dark about performance. You get a reliable profit and loss statement for each location and a centralized view of the group, so you know where to put your resources.",
        points: [
          "A separate P&L for every location",
          "Consistent reporting, so offices compare fairly",
          "Reviewed reports by the 10th business day",
        ],
        cta: "Get Your Books in Order",
      },
      {
        service: "insurance-billing",
        headline: "Centralized billing and A/R.",
        body: "Our billing team handles claims, denials, and patient billing across all of your locations. One process replaces a different one at each front desk, and unpaid claims are followed up daily.",
        points: [
          "Claims reviewed for accuracy before they go out",
          "Denials appealed and A/R followed up daily",
          "A monthly report on clean claim rate, denial rate, and days in A/R",
        ],
        cta: "Stop Chasing Payments",
      },
    ],
    supporting: [
      {
        service: "payroll",
        headline: "Every location paid on time.",
        body: "Managing payroll across several locations can take hours each month. It runs on Gusto, with payroll tax filings handled, for the staff at every office.",
        cta: "Hand Off Payroll",
      },
      {
        service: "accounts-payable",
        headline: "One approval queue for every vendor.",
        body: "Bills from frame vendors, labs, and suppliers for all your offices are entered in Bill.com. You approve them in one place, and they’re paid on time.",
        cta: "Take Bills Off Your Plate",
      },
      {
        service: "practice-consulting",
        headline: "For when growing isn’t earning more.",
        body: "Expanding doesn’t always equal earning more. We look at systems, staffing, and operations across your locations, find what’s holding profit back, and work alongside you to implement the changes.",
        cta: "Get a Roadmap to Profitability",
      },
    ],
  },
  process: {
    id: "how-we-work-with-multi-location-eyecare-practices",
    eyebrow: "How we work",
    title: "One onboarding. Every office included.",
    lede: "The steps are the same as for a single practice. The difference is that your reporting is standardized across offices from the start.",
    tone: "ink",
    steps: [
      {
        meta: "Complimentary",
        title: "Discovery Call",
        body: "We learn about your locations, how each one runs today, and your growth plans.",
      },
      {
        title: "A Scope for Each Location",
        body: "You get a clear scope of services for each location, as well as an overall plan for the group.",
      },
      {
        title: "Onboarding",
        body: "Your dedicated point of contact connects your financial systems, organizes workflows, and standardizes reporting for all your offices.",
      },
      {
        meta: "Every month",
        title: "Monthly Services",
        body: "Expect a monthly P&L for each location and a centralized view of the group, in your client portal by the 10th business day. Billing and A/R are worked daily.",
      },
      {
        meta: "As you grow",
        title: "Adding a Location",
        body: "Each new practice you open is added to your existing structure, keeping your workflows consistent and your reporting accurate.",
      },
    ],
    aside:
      "After onboarding, you don’t need to be involved in the day-to-day accounting of your practices. You review, compare, and decide.",
  },
  proof: {
    kind: "founder",
    eyebrow: "From our founder",
    title: "Built by an OD who ran more than one office.",
    lede: "Wade Weisz, OD, spent 25+ years as a practicing OD and multi-location owner before he started ForEyes.",
    quote:
      "After more than 25 years as a practicing OD and managing multiple locations, I learned firsthand how critical it is to have accurate, timely financial data,",
    quoteHighlight: "and how often that’s missing in the eyecare profession.",
    followUp:
      "Too many practices operate with incomplete books, misclassified expenses, and reports that don’t tell the whole story.",
    name: "Wade Weisz, OD",
    role: "Founder, ForEyes Books & Billing",
  },
  faqs: {
    title: "What Owners of Several Offices Ask Us",
    lede: "Short answers on reporting, scale, and how much of your time this takes.",
    items: [
      {
        question: "Will I receive separate financial reports for each location?",
        answer:
          "Yes. You receive a separate profit and loss statement for each location, reported consistently, with a centralized view of the group. You know how each location is performing without spending hours reconciling numbers.",
      },
      {
        question: "How do you improve financial visibility across locations?",
        answer:
          "We standardize reporting and consolidate financial data across your practices while keeping location-specific numbers. You see revenue, expenses, and profitability for each office and for the group, without manual consolidation.",
      },
      {
        question: "Can you help identify underperforming locations?",
        answer:
          "Yes. Because every location is reported the same way, you can compare results across offices. That shows where a clinic has a profitability concern or an operational gap, and where there’s room to improve.",
      },
      {
        question: "Can your services scale as I open more locations?",
        answer:
          "Yes. Each new practice you open is added to your existing structure, keeping your workflows consistent, your reporting accurate, and your management time low.",
      },
      {
        question: "How involved do I need to be?",
        answer:
          "After onboarding, very little. You no longer need to be involved in the day-to-day accounting of your practices. You review the reports, ask questions, and meet with your account manager when a number needs explaining.",
      },
      {
        question: "Do you offer consulting for multi-location practices?",
        answer:
          "Yes. Practice Consulting covers staffing, operations, and financial management across locations, and our team works alongside you to implement the changes.",
      },
    ],
  },
  cta: {
    title: "See every location, side by side.",
    body: "Tell us how many offices you run. We’ll show you what per-location reporting and centralized billing would look like, and what it would cost.",
  },
};
