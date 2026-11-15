// Every question on /resources/faq, grouped by topic.
//
// Source: the FAQ page on foreyessolutions.com plus the FAQ blocks at the
// bottom of each service and audience page. Good answers are kept close to
// the original wording. Three kinds of edit were made:
//   - the company name (ForEyes Books & Billing, then "ForEyes" or "we");
//   - location (a fully remote team headquartered in Nashville);
//   - anything that sold tax work or "accounting" as a service.
// Questions that only made sense for tax services were dropped, and the one
// approved tax entry ("Do you prepare taxes?") was added. Prices come from
// src/content/pricing.ts so they cannot drift from the calculator.
//
// Plain strings only, so wording can be edited without touching layout code.
// Questions must be unique across the whole file.

import { pricing } from "@/content/pricing";
import { site } from "@/content/site";

export type FaqEntry = {
  question: string;
  /** Plain text. Shown on the page and sent to search engines. */
  answer: string;
  /** Optional follow-on link shown under the answer. */
  link?: { label: string; href: string };
};

export type FaqGroup = {
  /** Anchor on the page: /resources/faq#bookkeeping */
  id: string;
  title: string;
  /** Short label for the topic pills. */
  navLabel: string;
  /** One line under the group heading. */
  blurb: string;
  items: FaqEntry[];
};

const usd = (amount: number) => `$${amount.toLocaleString("en-US")}`;
const percent = (rate: number) => `${Math.round(rate * 100)}%`;

const bookkeepingFrom = usd(pricing.bookkeeping.revenueTiers[0].monthly);
const perLocation = usd(pricing.bookkeeping.locations.perAdditional);
const medicalRate = percent(pricing.insuranceBilling.medicalRate);
const visionRate = percent(pricing.insuranceBilling.visionRate);
const payrollFrom = usd(pricing.payroll.base);
const payableFrom = usd(pricing.accountsPayable.base);
const implementationFee = usd(pricing.implementation.oneTime);

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    navLabel: "Getting started",
    blurb: "What we do, what we don’t, and how a practice begins with us.",
    items: [
      {
        question: "Do you offer a free consultation?",
        answer:
          "Yes. We offer a complimentary Discovery Call, where we learn more about your practice, understand your goals, and determine if ForEyes is the right fit for your needs.",
        link: { label: "Book a Discovery Call", href: site.bookingHref },
      },
      {
        question: "How is ForEyes different from other bookkeeping and billing firms?",
        answer:
          "ForEyes was founded by Wade Weisz, OD, and we work only with eyecare practices. That firsthand experience shapes the work: books that separate medical exam revenue from optical sales, and a billing team that works with eyecare-specific coding and billing rules every day.",
        link: { label: "More About Us", href: "/about-us" },
      },
      {
        question: "Do you prepare taxes?",
        answer:
          "No. We do two things for eyecare practices: we keep the books and we work the insurance billing. Your books are closed and reviewed every month, so they are tax-ready when your CPA asks for them.",
      },
      {
        question: "Do you work with startup practices?",
        answer:
          "Yes. We work with both established practices and startups. For a new owner, that means bookkeeping, payroll, and billing set up properly from day one, with consulting on systems and operational planning if you want it.",
        link: { label: "ForEyes for Startups", href: "/who-we-serve/startups" },
      },
      {
        question: "Can you support me before my practice opens?",
        answer:
          "Yes. We help pre-launch practices set up their books, organize operations, plan cash flow, and anticipate bottlenecks before they have a chance to slow you down. Your practice starts on solid ground.",
      },
      {
        question: "How involved do I need to be in setting up my practice’s finances?",
        answer:
          "Other than an initial connect and onboarding session, very little. We handle the setup of your bookkeeping structure and reporting, so you have a ready-to-go foundation while you work on getting the practice open.",
      },
      {
        question: "Can you help improve cash flow for a new practice?",
        answer:
          "Yes. Accurate monthly reports show where your cash is going, and our Insurance Billing service covers claim submission, payment posting, and denial follow-up. Together they help a new practice collect revenue more efficiently and manage expenses better.",
      },
    ],
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    navLabel: "Bookkeeping",
    blurb: "How your books are kept, closed, reviewed, and delivered each month.",
    items: [
      {
        question: "Why should I choose a specialized bookkeeper?",
        answer:
          "Anyone can categorize expenses. A team that works only with eyecare knows how those categories affect your practice’s profitability. ForEyes was founded by an optometrist, and our systems are built specifically for eyecare practices, down to a chart of accounts that separates medical exam revenue from optical sales.",
        link: { label: "Get Your Books in Order", href: "/services/bookkeeping" },
      },
      {
        question: "What does monthly bookkeeping include?",
        answer:
          "Transaction categorization, account reconciliation, general ledger upkeep, financial reporting, and ongoing account management. Every account is reconciled monthly, and a quality control manager reviews every report before it reaches your client portal.",
      },
      {
        question: "What is a Custom Chart of Accounts?",
        answer:
          "A chart of accounts is the list of categories your revenue and expenses are sorted into. Ours is designed for eyecare: it separates medical exam revenue from optical sales, and optical cost of goods from overhead. It’s also structured to calculate EBITDA automatically, which helps with growth planning and practice valuation.",
      },
      {
        question: "My practice is different. How can a standardized system work for me?",
        answer:
          "Our Custom Chart of Accounts is built on optometry-specific practices, but nothing we do is one-size-fits-all. Your account manager takes time to understand your practice, from your staffing model to your services and goals. You get the consistency of one system, aligned with how your practice actually runs.",
      },
      {
        question: "How involved do I need to be in the day-to-day financials?",
        answer:
          "After onboarding, you don’t have to be involved in the day-to-day at all. Your job is to review reports and ask questions. Your account manager handles the rest and will meet whenever a number needs explaining.",
      },
      {
        question: "What are my responsibilities?",
        answer:
          "During onboarding, you complete an intake form and connect your financial institutions. After that, your only bookkeeping responsibility is to ask any questions you have, and answer ours, through your client portal.",
      },
      {
        question: "How will I get my financial reports?",
        answer:
          "Your standard monthly management reports are delivered to your client portal. For custom insights or questions, schedule a meeting with your account manager.",
      },
      {
        question: "When will I see my numbers each month?",
        answer:
          "We close your books by the 10th business day of every month. Your reviewed profit and loss statement (P&L) and balance sheet are in your client portal by then, so the numbers you’re reading are current.",
      },
      {
        question: "How long does it take to clean up old books?",
        answer:
          "Cleanup typically takes 6 to 8 weeks, depending on the scope of your needs. An account manager works through your historical transactions and codes each one to your Custom Chart of Accounts. Then we walk through the cleaned-up books with you and explain what changed.",
      },
      {
        question: "How do I track whether my practice is truly profitable?",
        answer:
          "Our reporting breaks down performance by revenue stream and by expense. You see your actual take-home pay and the areas that are driving, or draining, your practice’s profitability.",
      },
      {
        question: "How will ForEyes help me run my practice better?",
        answer:
          "By taking bookkeeping off your plate, we free up hours each month that you can put back into your practice, whether that’s building your team, refining operations, or seeing patients. Timely, accurate financials also give you what you need to decide on growth, from adding new equipment to opening another location.",
      },
    ],
  },
  {
    id: "insurance-billing",
    title: "Insurance Billing",
    navLabel: "Insurance Billing",
    blurb: "Claims, denials, A/R follow-up, and the report you get each month.",
    items: [
      {
        question: "What is revenue cycle management?",
        answer:
          "Revenue cycle management (RCM) is the financial side of patient care, from patient intake and coding to claim submission, payment posting, denial management, and collections. Insurance Billing is our name for running that cycle for your practice.",
        link: { label: "Stop Chasing Payments", href: "/services/insurance-billing" },
      },
      {
        question: "What is accounts receivable in an eyecare practice?",
        answer:
          "Accounts receivable (A/R) is the money your practice has earned but not yet collected: outstanding insurance and vision plan claims plus unpaid patient balances. Managing it well means you always know what is owed, how old it is, and when to expect it.",
      },
      {
        question: "How is Insurance Billing different from having a billing person on staff?",
        answer:
          "An in-house biller often juggles multiple responsibilities. Our billing team focuses solely on your revenue cycle, which brings more specialization and consistency than a single employee can typically offer.",
      },
      {
        question: "My claim denial rate seems high. How can you help?",
        answer:
          "Our team specializes in eyecare-specific coding and billing rules. We review your most common denial reasons, then check claims for those errors before they’re submitted. Denials that still come back are appealed.",
      },
      {
        question: "What kind of billing reports will I receive?",
        answer:
          "A clear monthly report on your key performance indicators (KPIs): clean claim rate, denial rate, days in A/R, and overall collection percentage.",
      },
      {
        question: "Do you provide coding audits?",
        answer:
          "Yes. Coding audits and compliance reviews are part of Insurance Billing. Our coders check coding accuracy and stay current on eyecare-specific requirements, which supports proper reimbursement and reduces compliance risk.",
      },
      {
        question: "Do you handle patient billing questions?",
        answer:
          "Yes. Our team answers patient billing inquiries and helps patients understand their statements. That takes those calls off your front desk.",
      },
      {
        question: "How is Insurance Billing different from Bookkeeping?",
        answer:
          "Insurance Billing is the hands-on work: claim submission, appeals, and A/R follow-up. Bookkeeping records what was collected and keeps your books accurate, so they tell the truth about what you’re owed. They’re separate services, and they work hand in hand.",
      },
    ],
  },
  {
    id: "accounts-payable-payroll",
    title: "Accounts Payable & Payroll",
    navLabel: "AP & Payroll",
    blurb: "Bills and paychecks, run through Bill.com and Gusto with your approval.",
    items: [
      {
        question: "What is included in Accounts Payable?",
        answer:
          "Invoice management, bill entry, vendor management, payment scheduling, and approval workflows, with ongoing support through Bill.com. We keep the payment process organized, and you approve what gets paid.",
        link: { label: "See Accounts Payable", href: "/services/accounts-payable" },
      },
      {
        question: "Do I still control which bills get paid?",
        answer:
          "Yes. You keep full approval authority. Our team manages the process and prepares payments, and you retain visibility and control over every approval.",
      },
      {
        question: "Why outsource accounts payable?",
        answer:
          "It reduces your administrative workload, improves payment accuracy, and helps prevent missed due dates. A structured AP process also gives you a better view of what you spend with each vendor, from frames and lenses to lab fees.",
      },
      {
        question: "What do you need from me to move my payroll to ForEyes?",
        answer:
          "Basic employee information, past payroll records, and bank account details, plus a short intake form during onboarding. Our team handles the setup in Gusto, the transfers, and the data cleanup.",
        link: { label: "See Payroll", href: "/services/payroll" },
      },
      {
        question: "What do you need from me for payroll on an ongoing basis?",
        answer:
          "In most cases, all you need to do is review time cards and click submit. If you’d like that off your plate too, we offer full-service payroll management for a flat monthly fee. Paycheck processing, payroll tax filings, and reporting are handled by our team either way.",
      },
      {
        question: "Do you handle payroll tax filings?",
        answer:
          "Yes. Payroll tax compliance is part of our Payroll service. Federal, state, and local payroll taxes are calculated, required forms are filed on time, and year-end reporting is provided.",
      },
      {
        question: "Can you manage employee benefits and deductions?",
        answer:
          "Yes. Payroll includes managing employee benefits, deductions, and payroll adjustments, so contributions for things like healthcare and retirement plans are processed accurately and show correctly in your payroll records.",
      },
      {
        question: "Can’t I handle AP and payroll in-house?",
        answer:
          "Yes, you could, but it often comes at the cost of your time and accuracy. In-house AP and payroll pull you or your staff away from patients, and without dedicated training in tools like Bill.com and Gusto, errors can pile up. Our team is trained in both platforms and runs them on a set workflow.",
      },
    ],
  },
  {
    id: "practice-consulting",
    title: "Practice Consulting",
    navLabel: "Consulting",
    blurb: "OD-led advice on staffing, operations, and what your numbers mean.",
    items: [
      {
        question: "What does a practice assessment include?",
        answer:
          "A review of your operations, staffing, financial performance, and existing systems. The goal is to find inefficiencies, spot opportunities, and give you a prioritized plan for improving profitability and day-to-day performance.",
        link: { label: "See Practice Consulting", href: "/services/practice-consulting" },
      },
      {
        question: "What does a financial deep dive include?",
        answer:
          "We review your P&L, balance sheet, and chart of accounts, calculate your core metrics and EBITDA, examine cash flow patterns, and clarify owner compensation. You come away with a plain-language read on the health of your practice and a prioritized list of where to focus.",
      },
      {
        question: "How is Practice Consulting different from Bookkeeping?",
        answer:
          "Bookkeeping records what happened and keeps your books accurate and current. Practice Consulting takes those books and works out what the numbers mean, what to do about them, and how to plan your next move. The two work best together, and clean books make our consulting sharper.",
      },
      {
        question: "Do I need Practice Consulting if I already have an accountant?",
        answer:
          "Often, yes. Your accountant looks back at the year that has closed, and that work is essential. Practice Consulting looks forward, helping you make better staffing, operating, and growth decisions all year long. We complement your existing support rather than replace it.",
      },
      {
        question: "Can consulting help increase profitability?",
        answer:
          "We can’t promise a specific number, because every practice is different. What we can do is show you where profit is made and lost, protect your strongest margins, tighten the weak ones, and help you make growth decisions that pencil out before you commit.",
      },
      {
        question: "How quickly will I see improvements?",
        answer:
          "It depends on the change. Some operational adjustments show results right away. Others take a few months to show up in your numbers.",
      },
      {
        question: "Do you handle implementation?",
        answer:
          "Yes. Our team works alongside you to implement changes and make sure the improvements stick.",
      },
      {
        question: "Do you offer consulting for multi-location practices?",
        answer:
          "Yes. We design strategies that scale across locations, giving you one plan for staffing, operations, and financial management.",
      },
    ],
  },
  {
    id: "working-with-us",
    title: "Working With Us",
    navLabel: "Working with us",
    blurb: "Where we are, who we work with, and how we handle more than one office.",
    items: [
      {
        question: "Where are you located?",
        answer:
          "We’re a fully remote team headquartered in Nashville, serving eyecare practices nationwide. Location won’t limit the quality or speed of support you receive.",
      },
      {
        question: "Do you work with practices outside Tennessee?",
        answer:
          "Yes. We work remotely with optometry and eyecare practices nationwide. Bill.com and Gusto run in the cloud and your reports arrive in a client portal, so the work is the same from any state.",
      },
      {
        question: "Can you help me manage multiple locations?",
        answer:
          "Yes. We create a separate profit and loss statement for each of your practices, with consistent reporting for each and a centralized view of the group. You’ll always know how each location is performing, without spending hours reconciling numbers.",
        link: {
          label: "ForEyes for Multi-Location Practices",
          href: "/who-we-serve/multi-location-practices",
        },
      },
      {
        question: "Can you help identify underperforming locations?",
        answer:
          "Yes. Because every location is reported the same way, you can compare results across offices. That shows which locations lead, which lag, and where there’s room to improve.",
      },
      {
        question: "Can your services scale as I open more locations?",
        answer:
          "Yes. Each new practice you open is added to your existing structure, which keeps your workflows consistent, your reporting accurate, and your management time low.",
      },
      {
        question: "Do other eyecare professionals trust ForEyes?",
        answer:
          "Yes. We’re endorsed by ODs on Finance and trusted by TSO, ALLDocs, and Vision Source practices. Our reputation is hard-earned and referral-built.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    navLabel: "Pricing",
    blurb: "What each service costs, and what the calculator does and doesn’t include.",
    items: [
      {
        question: "How much does Bookkeeping cost?",
        answer: `Bookkeeping starts at ${bookkeepingFrom} a month. The price depends on your annual revenue, your number of locations, and how many bank and credit card accounts we reconcile. Each additional location adds ${perLocation} a month.`,
        link: { label: "Estimate Your Price", href: site.pricingHref },
      },
      {
        question: "How much does Insurance Billing cost?",
        answer: `Insurance Billing is priced as a percentage of net receipts. Medical plan billing is ${medicalRate} of net receipts. Vision plan billing is ${visionRate} of net receipts, plus applicable lab fees.`,
      },
      {
        question: "What do Payroll and Accounts Payable cost?",
        answer: `Payroll is from ${payrollFrom} a month for up to ${pricing.payroll.included} employees. Accounts Payable is from ${payableFrom} a month for up to ${pricing.accountsPayable.included} bills a month. The pricing calculator shows the figure for a practice your size.`,
        link: { label: "Estimate Your Price", href: site.pricingHref },
      },
      {
        question: "How is Practice Consulting priced?",
        answer:
          "Practice Consulting doesn’t have a published price. We scope the work around your practice and quote it on your Discovery Call.",
      },
      {
        question: "Is there a setup fee?",
        answer: `Yes. There’s a one-time ${implementationFee} implementation fee, separate from the monthly figure. Setup usually takes 4 to 6 weeks. In that time we onboard your practice and check your financials for accuracy and completeness. Additional onboarding and cleanup fees may apply for bookkeeping clients, depending on your start date.`,
      },
      {
        question: "Is the pricing calculator’s number my final price?",
        answer:
          "No. The figure shown is an estimate. We provide a formal quote during your Discovery Call.",
      },
      {
        question: "Are there hidden fees?",
        answer:
          "No hidden fees and no surprise invoices. You see a monthly estimate and the one-time implementation fee up front, and your formal quote comes on your Discovery Call.",
      },
    ],
  },
];

/** Every question in page order, for structured data and counts. */
export const allFaqs: FaqEntry[] = faqGroups.flatMap((group) => group.items);
