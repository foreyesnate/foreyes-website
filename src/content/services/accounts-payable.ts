// Copy for /services/accounts-payable. Plain strings only, so wording can be
// edited without touching layout code. Facts come from the current Accounts
// Payable and Accounting pages and the FAQ on foreyessolutions.com. The
// starting price is the "Bill Pay" figure from the live pricing calculator.
import { pricing as prices } from "@/content/pricing";
import type { SupportingServiceContent } from "@/components/pages/services/types";

export const accountsPayable: SupportingServiceContent = {
  slug: "accounts-payable",
  path: "/services/accounts-payable",
  label: "Accounts Payable",
  meta: {
    title: "Accounts Payable for Optometry Practices",
    description:
      "Accounts Payable for eyecare practices, run through Bill.com. We enter, code, and schedule every vendor bill, and you approve what gets paid. From $99 a month.",
  },
  fromPrice: prices.accountsPayable.base,
  hero: {
    eyebrow: "Accounts Payable for eyecare practices",
    title: "Bills paid on time.",
    highlight: "Approved by you.",
    lede: "Your practice pays frame vendors, lab partners, contact lens suppliers, a landlord, and more. ForEyes Books & Billing runs every one of those bills through Bill.com: entered, coded, approved by you, and paid on the date that protects your cash and your supplier relationships.",
  },
  intro: {
    eyebrow: "What it is, and who it’s for",
    title: "Control over every dollar going out.",
    body: [
      "Accounts payable (AP) is the work of getting every bill your practice owes entered, approved, and paid. When those payments run through inboxes and memory, bills slip and cash timing suffers.",
      "This service is for owners and practice managers who want that work off their desk without giving up the say. You maintain full approval authority. We manage the process and prepare the payments.",
    ],
    bullets: [
      "Frame, lab, and contact lens vendors, each on their own payment terms",
      "Rent, equipment suppliers, and service providers",
      "One place to see what was paid, and when",
    ],
    art: "spot-accounts-payable",
    panel: "teal",
    chip: { label: "Starts at", value: "$99 a month" },
  },
  handles: {
    eyebrow: "What we handle",
    title: "From the invoice to the audit trail.",
    lede: "We know which payments recur weekly, which arrive quarterly, and which swing with frame and lens orders. Here is what our team does with each one.",
    columns: 4,
    features: [
      {
        icon: "bill",
        title: "Invoice Entry and Coding",
        body: "We collect, organize, and enter your invoices in Bill.com, so each bill is recorded, categorized, and ready for your review. That reduces the risk of missed or duplicate payments.",
      },
      {
        icon: "calendar",
        title: "Scheduling and Vendor Terms",
        body: "We track due dates and payment terms with frame, lab, and supply vendors so bills are paid on time and cash is not tied up early.",
      },
      {
        icon: "chart",
        title: "A View of What’s Coming Due",
        body: "You get clear reporting on upcoming obligations, so a large lab bill or a quarterly payment doesn’t catch your bank balance off guard.",
      },
      {
        icon: "shield",
        title: "A Clear Audit Trail",
        body: "Each approval and payment is recorded in one place, so questions about what was paid, and when, have answers.",
      },
    ],
  },
  roles: {
    eyebrow: "Who does what",
    title: "You approve. We do the rest.",
    lede: "On payables you review and approve. You keep visibility and control over every outgoing payment, without the data entry.",
    joiner: "and",
    cards: [
      {
        label: "Your part",
        title: "Review it. Approve it.",
        items: [
          "Review each bill in Bill.com",
          "Approve it, or hold it",
          "Ask your account manager about anything that looks off",
        ],
      },
      {
        label: "Our part",
        title: "Everything before and after.",
        items: [
          "Collect and enter every invoice",
          "Code each bill to the right category",
          "Schedule payment around the due date and the vendor’s terms",
          "Keep vendor records current",
          "Record every approval and payment in one place",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "Set up once. Then it runs.",
    lede: "Four steps take you from a pile of invoices to a workflow where your only job is the approval.",
    steps: [
      {
        title: "Discovery Call",
        body: "We learn about your practice, your current AP process, and your vendor relationships, and show you how the workflow would run.",
      },
      {
        title: "Onboarding",
        body: "You meet your onboarding specialist, complete a short intake form, and get a tour of your client portal and your Bill.com workflow.",
      },
      {
        title: "Setup",
        body: "We organize your vendor records and configure approvals, schedules, and permissions around your practice instead of accepting defaults. If past vendor data needs cleaning up, we do that first.",
      },
      {
        title: "Bills In, Bills Paid",
        meta: "Every week after",
        body: "The path is the same every time. We enter and code each bill, you approve it, and it’s paid on schedule. As your practice grows, we keep refining the workflow.",
      },
    ],
    aside: {
      kind: "tool",
      name: "Bill.com",
      quote: "Nothing depends on a paper trail or a forwarded email.",
      body: "Every vendor bill follows the same path through Bill.com, and each approval and payment is recorded there.",
      points: [
        "You review and approve from wherever you are",
        "It runs in the cloud, so approvals work the same from any state",
        "We handle entry, coding, and scheduling",
      ],
    },
  },
  flagships: {
    eyebrow: "Already on our books?",
    title: "Every bill you approve lands in your books.",
    body: [
      "Accounts Payable is an add-on to the two things we do every day: Bookkeeping and Insurance Billing. When the same team keeps your books, the bill you approved is the expense on your P&L, coded to frames, lab fees, or overhead.",
      "Under the accrual method, an expense counts when you become liable for it rather than when you pay it. That is why payable timing matters to your reports.",
    ],
    links: [
      { label: "Get Your Books in Order", href: "/services/bookkeeping" },
      { label: "Stop Chasing Payments", href: "/services/insurance-billing" },
    ],
  },
  faqs: {
    title: "Accounts Payable FAQs",
    items: [
      {
        question: "What is included in Accounts Payable?",
        answer:
          "Invoice management, bill entry, vendor management, payment scheduling, approval workflows, and ongoing support through Bill.com. We keep your payment process organized, and you step in to approve.",
      },
      {
        question: "Do I still control which bills get paid?",
        answer:
          "Yes. You maintain full approval authority. Our team manages the process and prepares payments, but you retain visibility and control over payment approvals.",
      },
      {
        question: "Why outsource accounts payable?",
        answer:
          "It takes invoice entry, due dates, and payment scheduling off your desk and your staff’s. Bills are handled on a set workflow, each approval and payment is recorded in one place, and you get those hours back for patients and the practice.",
      },
      {
        question: "Can’t I handle AP in-house?",
        answer:
          "Yes, you could, but it often comes at the cost of your time and accuracy. In-house AP pulls you or your staff away from patients and the front desk. We bring a set workflow and a team trained in the platform.",
      },
      {
        question: "What does Accounts Payable cost?",
        answer:
          "Accounts Payable starts at $99 a month. The pricing calculator builds an estimate in a few minutes, and we confirm it on your Discovery Call. Every figure shown is an estimate only.",
        link: { label: "Estimate Your Price", href: "/pricing-calculator" },
      },
      {
        question: "Do you work with practices outside Tennessee?",
        answer:
          "Yes. Our remote team works with eyecare practices nationwide. Bill.com runs in the cloud, so your approvals work the same from any state.",
      },
    ],
  },
  pricing: {
    title: "Accounts Payable Starts at $99 a Month",
    body: "Add it to your estimate in the pricing calculator, then book a Discovery Call to confirm it. No hidden fees, no surprise invoices. Every figure shown is an estimate only.",
  },
  cta: {
    title: "Put your bills on a schedule.",
    body: "Tell us who you pay and how it gets done today. We’ll show you what the approval workflow would look like for your practice.",
  },
};
