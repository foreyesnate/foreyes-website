import { testimonials } from "@/content/testimonials";
import type { AudienceContent } from "./types";

// Copy for /who-we-serve/optometrists. Facts come from the current
// foreyessolutions.com pages; nothing here sells or promises tax work.
// Three clients on the books and one on billing (Patty Haley, Family Eyecare),
// so the proof covers both halves of the headline.
const voices = ["Ryan Corte, OD", "Patty Haley", "Nona Kalfayan, OD", "Brandon Luu, OD"];

export const optometrists: AudienceContent = {
  slug: "optometrists",
  path: "/who-we-serve/optometrists",
  label: "Optometrists",
  meta: {
    title: "Bookkeeping & Insurance Billing for Optometrists",
    description:
      "Bookkeeping and insurance billing for independent optometrists. Reviewed financials by the 10th business day and A/R followed up daily, from an OD-founded team.",
  },
  hero: {
    tone: "navy",
    eyebrow: "For independent optometrists",
    title: "Books you can trust.",
    highlight: "A/R that gets worked.",
    lede: "Somewhere along the way, the business side of your practice began to take over. ForEyes Books & Billing closes your books by the 10th business day and follows up on your A/R every day, so those hours come back to you.",
    note: "The Discovery Call is complimentary. We learn about your practice, and you decide if we’re the right fit.",
    graphic: "evenings",
  },
  obstacles: {
    id: "whats-holding-your-practice-back",
    eyebrow: "The obstacles",
    title: "A few side tasks became a second job.",
    lede: "These are the five we fix most often for optometrists. Our founder, Wade Weisz, OD, spent 25+ years in the owner’s seat, so none of them is new to us.",
    picture: { name: "optometrist-exam-lane", panel: "navy" },
    items: [
      {
        title: "You’re not sure the books are right.",
        body: "Exams, optical sales, and contact lenses all deposit into the same bank account, and vision plan payments arrive in batches well after the visit. A generic set of categories can’t tell them apart.",
        fix: "We clean up your history, typically in 6 to 8 weeks, then match every account to its statement each month. A quality control manager reviews every report before you see it.",
        services: ["bookkeeping"],
      },
      {
        title: "You can’t tell which part of the practice is profitable.",
        body: "Revenue is up, but your P&L has a few broad income lines. It can’t say whether the exam lane or the optical is carrying its weight.",
        fix: "Our Custom Chart of Accounts separates medical exam revenue from optical sales, and optical cost of goods from overhead. Reviewed reports reach your client portal by the 10th business day.",
        services: ["bookkeeping"],
      },
      {
        title: "You don’t know what you actually take home.",
        body: "Between W-2 wages and owner draws, it’s easy to confuse what the books show with what actually lands in your bank account.",
        fix: "Your reports break out owner wages and draws, so you can see your true take-home pay next to what the practice earned.",
        services: ["bookkeeping"],
      },
      {
        title: "Claims age while everyone is busy.",
        body: "Your front desk is checking in patients and verifying eligibility. Denied and unanswered claims slide into the 90+ bucket because nobody has an hour to call the payer.",
        fix: "We review claims before submission, post payments, appeal denials, and follow up on A/R daily. Each month you see your clean claim rate, denial rate, and days in A/R.",
        services: ["insurance-billing"],
      },
      {
        title: "Bills and payroll fill your evenings.",
        body: "Frame, lens, and lab invoices need approving. Time cards need checking. Both usually get done after the last patient has gone home.",
        fix: "Bills are entered in Bill.com and queued for your approval, and payroll runs on Gusto. In most cases you review time cards and click submit.",
        services: ["accounts-payable", "payroll"],
      },
    ],
  },
  services: {
    id: "services",
    eyebrow: "How we help",
    title: "Start with your books and your billing.",
    lede: "Bookkeeping and Insurance Billing are the two jobs we do for every kind of eyecare practice. Accounts Payable, Payroll, and Practice Consulting are there when you want more off your plate.",
    flagships: [
      {
        service: "bookkeeping",
        headline: "Books built around an optometry practice.",
        body: "Bookkeeping for an eyecare practice is about more than categorizing expenses. We code every transaction to a chart of accounts made for optometry, keep your general ledger current, and deliver reviewed reports on a fixed schedule.",
        points: [
          "Exam, optical, and contact lens revenue tracked separately",
          "Every account matched to its statement, every month",
          "Reviewed P&L and balance sheet by the 10th business day",
        ],
        cta: "Get Your Books in Order",
      },
      {
        service: "insurance-billing",
        headline: "Insurance claims, worked every day.",
        body: "Insurance claims are complicated, but they don’t have to derail your day. Our billing team manages your claim submissions, tracks aging A/R, follows up with payers, and answers patient billing questions directly.",
        points: [
          "Claims reviewed for accuracy before they go out",
          "Denials appealed and unpaid claims followed up daily",
          "A monthly report on clean claim rate, denial rate, and days in A/R",
        ],
        cta: "Stop Chasing Payments",
      },
    ],
    supporting: [
      {
        service: "accounts-payable",
        headline: "Vendor bills, approved and paid on time.",
        body: "Invoices from frame vendors, labs, and equipment suppliers are entered in Bill.com and sent to you for approval. You keep control of every outgoing payment.",
        cta: "Take Bills Off Your Plate",
      },
      {
        service: "payroll",
        headline: "Payroll without the evening it used to take.",
        body: "Payroll runs on Gusto, with payroll tax filings and W-2s handled. In most cases, all you need to do is review time cards and click submit.",
        cta: "Hand Off Payroll",
      },
      {
        service: "practice-consulting",
        headline: "For when revenue is up and profit isn’t.",
        body: "Maybe your staffing feels off, but you’re not sure how to fix it. Our OD-led consulting looks at how the practice operates, finds what’s holding it back, and helps you put the changes in place.",
        cta: "Get Industry-Specific Guidance",
      },
    ],
  },
  process: {
    id: "what-to-expect",
    eyebrow: "What to expect",
    title: "A clear path from first call to monthly close.",
    lede: "You’ll know what happens at each step, who you’re working with, and what we need from you.",
    tone: "ink",
    steps: [
      {
        meta: "Complimentary",
        title: "Discovery Call",
        body: "We learn about your goals, what’s working, and what’s not. You learn how we’d handle your books and your billing.",
      },
      {
        title: "A Clear Scope",
        body: "You receive a scope of services based on your needs and priorities. Start with one service or with several.",
      },
      {
        title: "Onboarding",
        body: "Meet your onboarding specialist, tour your client portal, and complete an intake form covering your accounts, vendors, and software. We connect your financial institutions from there.",
      },
      {
        meta: "Where it’s needed",
        title: "Cleanup",
        body: "An account manager works through your historical transactions and codes each one to your Custom Chart of Accounts, typically in 6 to 8 weeks. For billing, we review old denials and unpaid claims to set a clean foundation.",
      },
      {
        meta: "Every month",
        title: "Monthly Services",
        body: "Your books close within the first 10 business days, reviewed reports land in your portal, and A/R is followed up daily. Your account manager is one meeting away.",
      },
    ],
    aside:
      "Your job is to review reports and ask questions. Your account manager handles the rest and will meet whenever a number needs explaining.",
    picture: { name: "step-see-clearly", panel: "teal", fit: "bleed" },
  },
  proof: {
    kind: "testimonials",
    title: "Proof in Practice",
    lede: "Eyecare practices on books they can rely on and billing that gets worked.",
    items: testimonials.filter((person) => voices.includes(person.name)),
  },
  faqs: {
    title: "The Questions Optometrists Ask Us",
    lede: "Short answers to what comes up on most Discovery Calls.",
    items: [
      {
        question: "Why should I choose a specialized bookkeeper?",
        answer:
          "Anyone can categorize expenses. A team that only works with eyecare knows how those categories affect your practice’s profitability. Our Custom Chart of Accounts separates medical exam revenue from optical sales, and optical cost of goods from overhead, so you can see which services earn their keep.",
      },
      {
        question: "My practice is different. How can a standardized system work for me?",
        answer:
          "Our core chart of accounts is built on optometry-specific practices, and your account manager takes time to understand your staffing model, your services, and your goals. You get the consistency of a proven system, set up around how your practice actually runs.",
      },
      {
        question: "How involved do I need to be in the day-to-day financials?",
        answer:
          "After onboarding, you don’t have to be involved in the day-to-day at all. Your job is to review reports and ask questions. Your account manager handles the rest and will meet whenever a number needs explaining.",
      },
      {
        question: "How can I tell if my practice is profitable?",
        answer:
          "Profitability is more than revenue. Your reports break down performance by revenue stream and expense, including payroll costs and owner compensation, so you can see your actual take-home pay and which areas are driving or draining profit.",
      },
      {
        question: "How is this different from having a billing person on staff?",
        answer:
          "An in-house biller often juggles several responsibilities. Our billing team works only on your revenue cycle: claims, payment posting, denials, and A/R follow-up, every day.",
      },
      {
        question: "What will I see from Insurance Billing each month?",
        answer:
          "A monthly report with your clean claim rate, denial rate, days in A/R, and overall collection percentage, so you can track how billing is performing without asking.",
      },
      {
        question: "Do other optometrists trust ForEyes?",
        answer:
          "Yes. We’re endorsed by ODs on Finance and trusted by TSO, ALLDocs, and Vision Source practices. Our reputation is hard-earned and referral-built.",
      },
    ],
  },
  cta: {
    title: "Take back your evenings.",
    body: "Tell us about your practice. We’ll tell you what your books and billing could look like, and what it would cost.",
  },
};
