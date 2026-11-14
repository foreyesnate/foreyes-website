// Copy for /services/bookkeeping. Plain strings only, so wording can be edited
// without touching layout code. Facts come from the current Bookkeeping page,
// the bookkeeping FAQs and two blog posts on foreyessolutions.com.
import type { Faq } from "@/components/sections/FaqAccordion";
import type { Step } from "@/components/sections/ProcessSteps";
import type { IconName } from "@/components/ui/Icon";

export const path = "/services/bookkeeping";

export const meta = {
  title: "Bookkeeping for Optometry Practices",
  description:
    "Bookkeeping built only for eyecare practices: a Custom Chart of Accounts, every account reconciled monthly, and reviewed reports by the 10th business day.",
};

export const hero = {
  eyebrow: "Bookkeeping for eyecare practices",
  title: "Books that show what your practice",
  highlight: "actually earns.",
  lede: "ForEyes Books & Billing keeps the books for independent eyecare practices, and only eyecare practices. We code every transaction to a structure built for eyecare, reconcile every account, and deliver reviewed reports by the 10th business day.",
  note: "Founded by an OD. Eyecare practices only. Your Discovery Call is complimentary.",
};

export const problem = {
  eyebrow: "Where the numbers get lost",
  title: "One bank account. Three kinds of revenue.",
  body: [
    "Exams, optical sales, and contact lenses all deposit into the same bank account, which makes it hard to see which part of your practice carries its weight.",
    "Most bookkeeping software makes it worse. It lumps income into a few broad lines and costs into a handful of buckets. The P&L becomes something you glance at, not something you use.",
  ],
  questionsTitle: "Three questions a lumped P&L can’t answer",
  questions: [
    {
      question: "Is the optical paying its way, or are exams carrying it?",
      hiddenBy: "One revenue line for everything",
    },
    {
      question: "Are frames, lenses, and lab fees taking more of each optical sale?",
      hiddenBy: "Cost of goods mixed into overhead",
    },
    {
      question: "Your schedule is fuller. Is your take-home income?",
      hiddenBy: "Expenses that creep up a little each month",
    },
  ],
};

export const chart = {
  eyebrow: "Custom Chart of Accounts",
  title: "A ledger built around eyecare.",
  body: [
    "A chart of accounts is the list of categories every transaction is sorted into. Ours separates medical exam revenue from optical sales, and optical cost of goods from overhead, so you can see which services earn their keep.",
    "It comes from Wade Weisz, OD, and his 25+ years in the owner’s seat.",
  ],
  bullets: [
    "Exam, optical, and contact lens activity tracked separately",
    "Frames, lenses, and lab fees held apart from rent, payroll, and the rest of your overhead",
    "Fitted to your practice by your account manager, from your staffing model to your services and goals",
  ],
};

export type IncludedFeature = {
  icon: IconName;
  title: string;
  body: string;
  link?: { label: string; href: string };
};

export const included = {
  eyebrow: "What’s included",
  title: "Full-Service Eyecare Bookkeeping",
  lede: "Good books explain your practice instead of merely recording it. We manage your daily transactions, keep your general ledger current, and deliver reviewed reports on a fixed schedule.",
  features: [
    {
      icon: "ledger",
      title: "Every Transaction, Coded Once",
      body: "Every deposit, vendor payment, and card swipe is coded to the right account the first time, whether it arrives through a bank feed or a manual import.",
    },
    {
      icon: "shield",
      title: "A Clean General Ledger, Every Month",
      body: "Your general ledger is the foundation every report sits on, and small slips compound quickly. Each month we review adjustments, accruals, and uncategorized items so it closes clean.",
    },
    {
      icon: "chart",
      title: "P&L and Balance Sheet, Monthly",
      body: "Your profit and loss statement (P&L) shows how your practice is performing month to month. Your balance sheet shows what you own and what you owe. You get both, reviewed.",
    },
    {
      icon: "spark",
      title: "EBITDA, Calculated for You",
      body: "Earnings Before Interest, Tax, Depreciation, and Amortization (EBITDA) is the valuation metric buyers and lenders ask about first. Your chart of accounts calculates it automatically.",
    },
    {
      icon: "bill",
      title: "Equipment Recorded as Assets",
      body: "Equipment purchases go on the books as assets, with the details needed to calculate depreciation. A new piece of exam equipment doesn’t get buried in one month’s expenses.",
    },
    {
      icon: "building",
      title: "A P&L for Each Location",
      body: "Run more than one office? Each location gets its own P&L, with consistent reporting across all of them and one centralized view.",
      link: { label: "Multi-location bookkeeping", href: "/who-we-serve/multi-location-practices" },
    },
  ] satisfies IncludedFeature[],
};

export const reconciliation = {
  eyebrow: "Monthly reconciliation",
  title: "The balance in your books is the balance in your bank.",
  body: [
    "Bank feeds make bookkeeping feel finished. Transactions flow in on their own, and that’s where many errors begin. A feed doesn’t know a lab bill from a frame order.",
    "Each month we match every account to its statement, so the balance in your books is the balance in your bank.",
  ],
  bullets: [
    "Every bank and credit card account you connect, every month",
    "Misclassified and missing transactions caught before they reach a report",
    "Uncategorized items reviewed each month, so the ledger closes clean",
  ],
};

export const close = {
  eyebrow: "The monthly close",
  title: "Reviewed reports by the 10th business day.",
  body: [
    "Speed matters only when the numbers are right. Before any P&L or balance sheet reaches your client portal, a dedicated quality control manager reviews it.",
    "By the 10th business day each month, you’ll have complete, reviewed, and accurate financials for the month prior. Early enough to guide staffing, purchasing, and growth decisions while they still matter.",
  ],
  review: {
    title: "A Second Set of Eyes",
    body: "Your account manager closes the month. Then a quality control manager reviews every report before delivery, so you can rely on what you read.",
  },
};

export const portal = {
  eyebrow: "Client portal and account manager",
  title: "Your job: review, ask, decide.",
  lede: "Your job is to review reports and ask questions. Your account manager handles the rest and will meet whenever a number needs explaining.",
  steps: [
    {
      title: "Review",
      body: "Your monthly reports are delivered to your client portal. Open them when it suits you.",
    },
    {
      title: "Ask",
      body: "One dedicated account manager knows your practice. Schedule a meeting whenever you want a number explained.",
    },
    {
      title: "Decide",
      body: "Hire, buy equipment, or open another location with real margins in front of you.",
    },
  ],
  closer: "Daily bookkeeping tasks leave your desk entirely, so evenings go to family and growth instead of receipts.",
};

export const process = {
  eyebrow: "How it works",
  title: "A clear path from first call to monthly close.",
  lede: "Seven steps. You’re needed for the conversations. We do the rest.",
  steps: [
    {
      title: "Discovery Call",
      body: "We learn how your practice earns, spends, and reports today, and where the numbers have stopped making sense.",
    },
    {
      title: "Onboarding",
      body: "Meet your onboarding specialist, tour your client portal, and receive an intake form covering your accounts, vendors, and software.",
    },
    {
      title: "Intake Form Review",
      body: "We walk through your answers together, connect your financial institutions, and agree on what happens next.",
    },
    {
      meta: "Typically 6 to 8 weeks",
      title: "Cleanup",
      body: "An account manager works through your historical transactions and codes each one to your Custom Chart of Accounts.",
    },
    {
      title: "Cleanup Review",
      body: "We walk through the cleaned-up books with you, explain what changed, and set expectations for monthly service.",
    },
    {
      meta: "Every month",
      title: "Monthly Services",
      body: "Your books close within the first 10 business days, reviewed reports land in your portal, and your account manager is one meeting away.",
    },
    {
      meta: "Every year",
      title: "Annual Financial Review",
      body: "Each year ends with a review of your books and where your practice is headed.",
    },
  ] satisfies Step[],
  cleanup: {
    label: "Historical cleanup",
    figure: "6 to 8 weeks",
    title: "Behind on your books? Start there.",
    body: "Months of uncategorized transactions are a normal place to start. How long cleanup takes depends on the scope of your history. It typically takes 6 to 8 weeks.",
  },
};

export const annual = {
  eyebrow: "Annual Financial Review",
  title: "A year-end check on your books and your goals.",
  body: [
    "Each year ends with a review that confirms your books are tax-ready and still point toward your practice goals.",
    "Clinical skill brings patients through the door. Books you trust let you hire well, invest wisely, and plan an exit on your own terms.",
  ],
  taxReady: {
    label: "Tax-ready books",
    // Approved wording, one sentence per line. Check the voice guide before editing.
    statement: ["We don’t prepare tax returns.", "We hand your CPA clean, reviewed books."],
    body: "Your CPA gets a full year of closed, reconciled months, with the P&L and balance sheet to match. Equipment purchases are already recorded as assets, with the details needed to calculate depreciation.",
  },
};

export const faqs: Faq[] = [
  {
    question: "What are my responsibilities?",
    answer:
      "Review your reports and ask questions. During onboarding you complete an intake form and connect your financial institutions. After that, your account manager handles the day-to-day and will meet whenever a number needs explaining.",
  },
  {
    question: "What does monthly bookkeeping include?",
    answer:
      "We code your daily transactions to your Custom Chart of Accounts, match every account to its statement, keep your general ledger current, and deliver a reviewed P&L and balance sheet to your client portal by the 10th business day.",
  },
  {
    question: "What is a custom chart of accounts?",
    answer:
      "A chart of accounts is the list of categories your transactions are sorted into. Most bookkeeping software lumps income into a few broad lines and costs into a handful of buckets. Ours separates medical exam revenue from optical sales, and optical cost of goods from overhead, so you can see which services earn their keep.",
  },
  {
    question: "My practice is different. How can a standard system work for me?",
    answer:
      "The core chart of accounts is built on what works for optometry. Your account manager then fits it to your practice, from your staffing model to your services and goals. You get the consistency of a proven structure, aligned with how your practice actually runs.",
  },
  {
    question: "How will I get my financial reports?",
    answer:
      "Your standard monthly reports are delivered to your client portal. For custom questions, schedule a meeting with your account manager.",
  },
  {
    question: "How long does it take to clean up old books?",
    answer:
      "Cleanup typically takes 6 to 8 weeks, depending on the scope of your needs. An account manager works through your historical transactions, codes each one to your Custom Chart of Accounts, and then walks you through what changed.",
  },
  {
    question: "Do you support multi-location practices?",
    answer:
      "Yes. We create a separate profit and loss statement for each location, with consistent reporting across all of them and a centralized view. You’ll know how each office is performing without reconciling the numbers yourself.",
  },
  {
    question: "Why choose a bookkeeper that only works with eyecare?",
    answer:
      "Anyone can categorize expenses. A team that knows eyecare knows how those categories affect your profitability: exam revenue against optical sales, frames and lab bills against overhead. ForEyes was founded by an optometrist, and our systems are built for eyecare practices only.",
  },
];

export const pricing = {
  title: "See What Bookkeeping Costs for a Practice Like Yours",
  body: "Bookkeeping starts at $399 a month. Your fee depends on your annual revenue, your number of locations, and how many bank and card accounts you connect. Build an estimate in a few minutes, then book a Discovery Call to confirm it. Every figure shown is an estimate only.",
};

export const cta = {
  title: "Trust your numbers. Reclaim your time.",
  body: "Tell us how your practice earns, spends, and reports today. We’ll show you what your books could look like, and what it would cost.",
};
