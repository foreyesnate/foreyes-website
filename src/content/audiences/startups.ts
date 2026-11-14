import { testimonials, type Testimonial } from "@/content/testimonials";
import type { AudienceContent } from "./types";

// Copy for /who-we-serve/startups. The old page sold entity setup and tax
// planning to new owners; neither is offered, so neither appears here.

// Cristine Areola, OD, wrote as a first-time practice owner. Nona Kalfayan,
// OD, speaks to starting out; her pull line below is word for word from her
// quote, chosen because it is the part a new owner needs to hear.
const cristine = testimonials.find((person) => person.name === "Cristine Areola, OD");
const nona = testimonials.find((person) => person.name === "Nona Kalfayan, OD");

const voices: Testimonial[] = [
  ...(cristine ? [cristine] : []),
  ...(nona
    ? [
        {
          ...nona,
          highlight:
            "They truly understand the industry and provide value whether you're just starting out or already established and looking to improve your systems.",
        },
      ]
    : []),
];

export const startups: AudienceContent = {
  slug: "startups",
  path: "/who-we-serve/startups",
  label: "Startups",
  meta: {
    title: "Bookkeeping & Billing Setup for New Optometry Practices",
    description:
      "Opening an optometry practice? Start with a Custom Chart of Accounts, payroll on Gusto, and insurance billing in place before your first claim goes out.",
  },
  hero: {
    tone: "ink",
    eyebrow: "For startups and first-time owners",
    title: "Open with the back office",
    highlight: "already built.",
    lede: "Between choosing a location, hiring staff, and attracting patients, the financial setup tends to come last. ForEyes Books & Billing builds your Custom Chart of Accounts, sets up payroll on Gusto, and has billing ready before your first claim goes out.",
    note: "The Discovery Call is complimentary, and we work with practices before they open.",
    graphic: "launch",
  },
  obstacles: {
    id: "the-obstacles-most-startup-practices-encounter",
    eyebrow: "The obstacles",
    title: "The obstacles most new practices run into.",
    lede: "Any of these five can stall growth before your practice even opens. Each is easier to set up right than to clean up later.",
    items: [
      {
        title: "Books that start out generic.",
        body: "Bookkeeping software ships with a few broad income lines. If exams, optical sales, and contact lenses all land in one of them, your first year of numbers can’t tell you which part of the practice is working.",
        fix: "We build your Custom Chart of Accounts before the first deposit. It separates medical exam revenue from optical sales, and optical cost of goods from overhead.",
        services: ["bookkeeping"],
      },
      {
        title: "Not knowing what you can pay yourself.",
        body: "As a new practice, it’s tough to know how much money you’re really making, or how much you can safely take out of it.",
        fix: "We break down revenue, expenses, and owner draws in reviewed monthly reports, delivered to your client portal by the 10th business day.",
        services: ["bookkeeping"],
      },
      {
        title: "Insurance and billing roadblocks.",
        body: "Insurance denials and patient billing delays put your revenue at risk, and early revenue is what a new practice runs on.",
        fix: "We set up billing before your first claim, then manage claims submission, payment posting, denial follow-up, and patient billing inquiries.",
        services: ["insurance-billing"],
      },
      {
        title: "Invoices and payroll on top of everything else.",
        body: "Frame and lab bills start arriving before patients do, and your first hire brings pay runs and payroll tax filings. It all lands on the person who’s also choosing equipment and training staff.",
        fix: "Payroll is set up on Gusto and bills run through Bill.com from the start. You approve payments and review time cards. We handle the rest.",
        services: ["payroll", "accounts-payable"],
      },
      {
        title: "Decisions you’ve never had to make before.",
        body: "Changing regulations, staffing issues, and vendor contracts can catch a new owner off guard.",
        fix: "Our consulting is led by an OD with 25+ years in the owner’s seat. You get guidance drawn from real practices, without the trial-and-error phase.",
        services: ["practice-consulting"],
      },
    ],
  },
  services: {
    id: "our-full-service-startup-support",
    eyebrow: "What we set up",
    title: "Set up right, before the first patient.",
    lede: "Bookkeeping and Insurance Billing come first, because both are easier to set up right than to clean up later. Payroll, Accounts Payable, and Practice Consulting are there when you need them.",
    flagships: [
      {
        service: "bookkeeping",
        headline: "Clean books from day one.",
        body: "Every transaction is recorded and coded to your Custom Chart of Accounts from the first deposit, so there’s no cleanup waiting for you in year two. You always know where the practice stands.",
        points: [
          "A Custom Chart of Accounts built before you open",
          "Every account matched to its statement, every month",
          "Reviewed P&L and balance sheet by the 10th business day",
        ],
        cta: "Be Confident in Your Numbers",
      },
      {
        service: "insurance-billing",
        headline: "Billing in place before the first claim.",
        body: "During onboarding we connect your practice management system, insurance portals, and patient billing workflow. From your first claim on, our team handles submission, payment posting, denial follow-up, and patient billing inquiries.",
        points: [
          "Claims reviewed for accuracy before they go out",
          "Unpaid claims followed up daily",
          "A monthly report on clean claim rate, denial rate, and days in A/R",
        ],
        cta: "Take Billing Off Your Plate",
      },
    ],
    supporting: [
      {
        service: "payroll",
        headline: "Payroll set up on Gusto.",
        body: "We set up your staff, pay schedules, and deductions before the first pay run. Paychecks, payroll tax filings, and W-2s are handled from there.",
        cta: "Set Up Payroll",
      },
      {
        service: "accounts-payable",
        headline: "Bills paid on time from the start.",
        body: "Invoices from frame vendors, labs, and equipment suppliers are entered in Bill.com and queued for your approval, so nothing goes missing in the opening rush.",
        cta: "Take Bills Off Your Plate",
      },
      {
        service: "practice-consulting",
        headline: "Guidance without the trial and error.",
        body: "Starting a practice comes with decisions that affect profitability for years. Our OD-led consulting helps with operations, inventory, and staffing, drawing on real-world experience.",
        cta: "Get Industry-Specific Guidance",
      },
    ],
  },
  process: {
    id: "how-we-work",
    eyebrow: "How we work",
    title: "From first call to first patient.",
    lede: "Start before you open if you can. The setup is the same either way, and it’s easier with no history to untangle.",
    tone: "navy",
    steps: [
      {
        meta: "Complimentary",
        title: "Discovery Call",
        body: "We learn where you’re starting from, when you plan to open, and your short- and long-term goals.",
      },
      {
        title: "Kickoff and Onboarding",
        body: "Meet your onboarding specialist and get set up in your client portal. An intake form covers your accounts, vendors, and software.",
      },
      {
        meta: "Before you open",
        title: "Foundation Setup",
        body: "We build your Custom Chart of Accounts, connect your financial institutions, set up payroll on Gusto, and get billing ready for the first claim.",
      },
      {
        meta: "Every month",
        title: "Monthly Services",
        body: "Your books close within the first 10 business days and reviewed reports land in your portal. Claims go out, payments are posted, and A/R is followed up daily.",
      },
      {
        meta: "Every year",
        title: "Annual Financial Review",
        body: "Each year ends with a review that confirms your books are tax-ready and still point toward your practice goals.",
      },
    ],
    aside:
      "Other than an initial connect and onboarding session, the setup doesn’t need you. You get a ready-to-go foundation while you work on opening the doors.",
  },
  proof: {
    kind: "testimonials",
    title: "Proof in Practice",
    lede: "From a first-time practice owner, and from a client of two years.",
    items: voices,
  },
  faqs: {
    title: "What New Owners Ask Us",
    lede: "Short answers for the months before opening day, and the first months after it.",
    items: [
      {
        question: "How involved do I need to be in setting up my practice’s finances?",
        answer:
          "Other than an initial connect and onboarding session, very little. We set up your bookkeeping structure, your reporting, and your payroll, so you have a ready-to-go foundation while you work on getting the practice open.",
      },
      {
        question: "Can you support me before my practice opens?",
        answer:
          "Yes. We work with pre-launch practices to put the books, payroll, and billing in place before opening day, so problems are dealt with before they have a chance to slow you down.",
      },
      {
        question: "How do I track whether my practice is truly profitable?",
        answer:
          "Your reports break down performance by revenue stream and expense. You see your actual take-home pay and the areas that are driving, or draining, the practice’s profitability.",
      },
      {
        question: "Can you help improve cash flow for a startup practice?",
        answer:
          "Yes. Accurate monthly reports show where cash is going. Our billing service covers claim submission, payment posting, and denial follow-up, which helps a new practice collect revenue more efficiently and manage expenses better.",
      },
      {
        question: "What financial reports will I receive?",
        answer:
          "With Bookkeeping, a reviewed profit and loss statement (P&L) and balance sheet each month, delivered to your client portal. With Insurance Billing, a monthly report on clean claim rate, denial rate, days in A/R, and overall collection percentage.",
      },
      {
        question: "What will this cost a new practice?",
        answer:
          "Use the pricing calculator to build an estimate for Bookkeeping, Payroll, and bill pay in a few minutes, then book a Discovery Call to confirm it. Every figure shown is an estimate only. Insurance Billing and Practice Consulting are scoped on the call.",
      },
    ],
  },
  cta: {
    title: "Start with books you won’t have to clean up.",
    body: "Tell us when you plan to open. We’ll map out what gets set up before your first patient, and what it would cost.",
  },
};
