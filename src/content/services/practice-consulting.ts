// Copy for /services/practice-consulting. Plain strings only, so wording can
// be edited without touching layout code. Facts come from the current
// Practice Consulting and Financial Consulting pages and the consulting FAQs
// on foreyessolutions.com. The Financial Consulting page is folded in here.
// No price is published, and nothing on this page offers tax strategy.
import type { SupportingServiceContent } from "@/components/pages/services/types";

export const practiceConsulting: SupportingServiceContent = {
  slug: "practice-consulting",
  path: "/services/practice-consulting",
  label: "Practice Consulting",
  meta: {
    title: "Practice Consulting for Optometry Practices",
    description:
      "OD-led Practice Consulting for eyecare practices. Staffing, workflows, optical performance, and financial consulting, with help putting the plan to work.",
  },
  hero: {
    eyebrow: "Practice Consulting for eyecare practices",
    title: "Guidance from an OD",
    highlight: "who’s sat where you sit.",
    lede: "Your practice makes money. Do you know where it goes? Practice Consulting from ForEyes Books & Billing is led by Wade Weisz, OD. We review your operations, staffing, optical, and financials, hand you a prioritized plan, and help you put it to work.",
    note: "Scoped and quoted on your Discovery Call.",
  },
  intro: {
    eyebrow: "What it is, and who it’s for",
    title: "Hands-on experience, not theory.",
    body: [
      "Practice Consulting is a working review of how your practice runs and what it earns, followed by a prioritized plan and help carrying it out. It covers scheduling and patient flow, staffing, optical operations, fee schedules, and financial performance.",
      "It’s for owners who are working hard and not seeing it in the bottom line, for new practices that want the right systems from day one, and for multi-location groups that need to compare offices on equal footing.",
    ],
    bullets: [
      "A one-time assessment or ongoing guidance",
      "Startups, established practices, and multi-location groups",
      "Built on 25+ years in the owner’s seat",
    ],
    art: "spot-consulting",
    panel: "navy",
    chip: { icon: "compass", label: "Led by", value: "Wade Weisz, OD" },
  },
  handles: {
    eyebrow: "What we handle",
    title: "What we look at, and help you change.",
    lede: "When we talk about optical cost of goods, insurance mix, or the cost of an empty chair, we’re speaking from experience, not from a textbook.",
    columns: 3,
    features: [
      {
        icon: "users",
        title: "Staffing",
        body: "Schedules or roles that don’t fit your patient flow cost money and create stress. We analyze your staffing model and suggest how to rebalance responsibilities while keeping a positive team environment.",
      },
      {
        icon: "clock",
        title: "Workflows and Patient Flow",
        body: "We review scheduling, patient flow, and the systems behind them, then help you change what drains time and adds overhead.",
      },
      {
        icon: "eye",
        title: "Optical Performance",
        body: "Poorly managed inventory drains time and profit. We review optical operations, from inventory and vendor pricing to optical capture rate and cost of goods.",
      },
      {
        icon: "ledger",
        title: "Fee Schedules and Margins",
        body: "Not all revenue is equal. We separate optical margins from medical reimbursements and exam revenue, so you can see what carries the practice, and what to charge, keep, or cut.",
      },
      {
        icon: "chart",
        title: "Benchmarks and Forecasting",
        body: "We track the metrics that move your practice, such as revenue per exam and provider productivity. Then we map how cash moves across the year and flag the tight months before they arrive.",
      },
      {
        icon: "building",
        title: "Startups and Multi-Location Operations",
        body: "For a new practice, we help build efficient systems from day one. For groups, we build comparable benchmarks across sites, so you can see which locations lead and which lag.",
      },
    ],
  },
  roles: {
    eyebrow: "Two ways to work",
    title: "A one-time assessment, or an ongoing partner.",
    lede: "The level of support is yours to set. Either way, you get a prioritized plan and help putting it into practice.",
    joiner: "or",
    cards: [
      {
        label: "One time",
        title: "A practice assessment.",
        items: [
          "A review of your operations, staffing, financial performance, and systems",
          "A prioritized plan for the issues that matter most",
          "Help putting the first changes in place",
        ],
      },
      {
        label: "Ongoing",
        title: "Guidance as you grow.",
        items: [
          "Regular meetings to review results and refine the plan",
          "Support at the level of a de facto Director of Operations",
          "Growth decisions modeled before you commit: a second location, an associate, or a new lane",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "You need help now, not in six months.",
    lede: "Five steps, starting with a conversation. The plan you get is written in plain language and tied to your goals.",
    steps: [
      {
        title: "Discovery Call",
        body: "We start with a low-pressure conversation about your practice, your numbers, and your goals. No commitment.",
      },
      {
        title: "Assessment",
        body: "We review your operations and staffing, your statements, and your key metrics, then identify the handful of issues and opportunities that matter most.",
      },
      {
        title: "Recommendations",
        body: "You receive a prioritized plan: what to address first, what it should produce, and how we’ll measure it.",
      },
      {
        title: "Implementation Support",
        body: "Plans only pay off when they happen. We stay alongside you as changes roll out and adjust as your practice responds.",
      },
      {
        title: "Ongoing Guidance",
        meta: "Optional",
        body: "Practices change, and so should the plan. Many owners keep us on, meeting on a regular basis to review results and stay ahead of what’s next.",
      },
    ],
    aside: {
      kind: "lead",
      name: "Wade Weisz, OD",
      role: "Founder, ForEyes Books & Billing",
      photo: "/team/wade-weisz.jpg",
      quote:
        "I’ve lived your challenges and built this company to solve them, with accuracy you can trust and support that feels like part of your team.",
      link: { label: "Meet Our Team", href: "/about-us/our-team" },
    },
  },
  flagships: {
    eyebrow: "Already on our books?",
    title: "Clean books make the advice sharper.",
    body: [
      "Practice Consulting is an add-on to the two things we do every day: Bookkeeping and Insurance Billing. Bookkeeping records what happened and keeps your numbers accurate and current. Consulting turns those numbers into what to do next.",
      "When the pressure is coming from slow reimbursements rather than spending, we point you toward faster collections as the fix.",
    ],
    links: [
      { label: "Get Your Books in Order", href: "/services/bookkeeping" },
      { label: "Stop Chasing Payments", href: "/services/insurance-billing" },
    ],
    art: "tidy-desk",
  },
  faqs: {
    title: "Practice Consulting FAQs",
    items: [
      {
        question: "What does a practice assessment include?",
        answer:
          "A review of your operations, staffing, financial performance, and existing systems. On the financial side, we read your P&L, balance sheet, and chart of accounts, calculate your core metrics, and look at cash flow patterns. You come away with a plain-language read on the health of your practice and a prioritized list of where to focus.",
      },
      {
        question: "Do you handle implementation?",
        answer:
          "Yes. Our team works alongside you to put the changes in place, monitor progress, and adjust as needed, so the improvements stick.",
      },
      {
        question: "How quickly will I see improvements?",
        answer:
          "It depends on what we find. Some operational changes show results right away. Others, such as staffing or inventory changes, take longer to show in your numbers. Your plan says what each change should produce and how we’ll measure it.",
      },
      {
        question: "Can consulting improve my profitability?",
        answer:
          "We can’t promise a specific number, because every practice is different. What we can do is show you where profit is made and lost, protect your strongest margins, tighten the weak ones, and help you make growth decisions that pencil out before you commit.",
      },
      {
        question: "Do you work with startups and multi-location practices?",
        answer:
          "Yes. For new practices, we help build efficient systems and a financial foundation from day one. For multi-location groups, we build comparable benchmarks across sites and one plan for staffing, operations, and financial management.",
      },
      {
        question: "What does Practice Consulting cost?",
        answer:
          "Practice Consulting has no set price. We scope it around what your practice needs, whether that’s a one-time assessment or ongoing guidance, and quote it on your Discovery Call.",
      },
    ],
  },
  pricing: null,
  cta: {
    title: "Find out what’s holding your practice back.",
    body: "Tell us where the practice feels harder than it should. We’ll tell you what an assessment would cover and what it would cost.",
  },
};
