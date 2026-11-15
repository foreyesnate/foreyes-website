// Copy for /services/payroll. Plain strings only, so wording can be edited
// without touching layout code. Facts come from the current Payroll and
// Accounting pages, the payroll FAQs, and the payroll blog post on
// foreyessolutions.com. Prices are the "Payroll" figures from the pricing
// calculator, per employee paid. "Tax" on this page always means payroll tax.
import type { SupportingServiceContent } from "@/components/pages/services/types";

export const payroll: SupportingServiceContent = {
  slug: "payroll",
  path: "/services/payroll",
  label: "Payroll",
  meta: {
    title: "Payroll for Optometry Practices",
    description:
      "Payroll for eyecare practices, run through Gusto. We handle setup, pay runs, direct deposit, and payroll tax filings. You review time cards. From $149 a month.",
  },
  hero: {
    eyebrow: "Payroll for eyecare practices",
    title: "Your team paid right,",
    highlight: "every pay run.",
    lede: "Managing payroll for your eyecare practice doesn’t have to be complicated. ForEyes Books & Billing runs it through Gusto, from employee setup to paychecks and payroll tax filings. In most cases, all you need to do is review time cards and click submit.",
    note: "From $149 a month for up to 10 employees.",
  },
  intro: {
    eyebrow: "What it is, and who it’s for",
    title: "Payroll you don’t have to chase.",
    body: [
      "Payroll is the work of paying your team accurately and on time: wages, withholdings, deductions, direct deposit, and the payroll tax filings that go with them. We set it up in Gusto and run it each pay period.",
      "It’s for owners and practice managers who didn’t get into eyecare to chase payroll or troubleshoot software. Your opticians, technicians, and front desk staff are paid on schedule, and you stay as involved as you want to be.",
    ],
    bullets: [
      "Your staff set up on your pay schedule",
      "Benefits and deductions applied with each run",
      "The same process for one office or several",
    ],
    art: "spot-payroll",
    panel: "yellow",
    chip: { icon: "payroll", label: "Runs on", value: "Gusto" },
  },
  handles: {
    eyebrow: "What we handle",
    title: "Setup, pay runs, and payroll forms, handled.",
    lede: "Our Payroll service covers employee pay, payroll tax filings, and reporting. Here’s what our team takes on.",
    columns: 4,
    features: [
      {
        icon: "users",
        title: "Setup and Employee Records",
        body: "We set up your staff with pay schedules, benefits, and employment records, then keep employee data current as people join, leave, or change roles.",
      },
      {
        icon: "payroll",
        title: "Paychecks and Direct Deposit",
        body: "We run payroll through Gusto each pay period. Your team is paid by direct deposit, on the schedule you set.",
      },
      {
        icon: "shield",
        title: "Payroll Tax Filings",
        body: "Federal, state, and local payroll taxes are calculated with each run. Required payroll forms, such as W-2s, are filed on time, with year-end reporting.",
      },
      {
        icon: "chart",
        title: "Benefits and Deductions",
        body: "We manage deductions and adjustments, so contributions for healthcare and retirement plans are processed correctly and show in your payroll records.",
      },
    ],
  },
  roles: {
    eyebrow: "Two ways to work",
    title: "Stay hands-on, or hand it all over.",
    lede: "On payroll you choose how involved to be. Either way, you keep visibility and control without the data entry.",
    joiner: "or",
    cards: [
      {
        label: "You review",
        title: "Review time cards. Click submit.",
        items: [
          "We handle the setup and the management behind it",
          "You review time cards each pay period",
          "You click submit, and the run goes out",
        ],
      },
      {
        label: "We run it",
        title: "Full-service payroll.",
        items: [
          "We take the time card review off your plate too",
          "You send employee changes as they happen",
          "A flat monthly fee",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "Switch over once. Then it runs on schedule.",
    lede: "To move your payroll to us, we need basic employee information, past payroll records, and bank account details. Our team handles the setup, transfers, and platform configuration.",
    steps: [
      {
        title: "Discovery Call",
        body: "We learn about your practice, your current payroll system, and your goals, then recommend how to run it.",
      },
      {
        title: "Onboarding",
        body: "You meet your onboarding specialist, complete a short intake form, and get a tour of your client portal.",
      },
      {
        title: "Cleanup",
        meta: "If needed",
        body: "We organize past payroll records and employee data, so your first run with us starts clean.",
      },
      {
        title: "Every Pay Period",
        meta: "Ongoing",
        body: "Your account manager runs payroll, manages employee changes, and handles payroll tax filings each cycle.",
      },
      {
        title: "Annual Payroll Review",
        meta: "Year-end",
        body: "We wrap up the year with a review, so payroll keeps fitting your practice as it grows.",
      },
    ],
    aside: {
      kind: "tool",
      name: "Gusto",
      quote: "All you need to do is review time cards and click submit.",
      body: "We run every pay period through Gusto, and our team works inside the platform, so you don’t have to train staff on new software.",
      points: [
        "Direct deposit for your team",
        "Payroll taxes calculated with each run",
        "It runs in the cloud, so pay runs work the same from any state",
      ],
    },
  },
  flagships: {
    eyebrow: "Already on our books?",
    title: "See what your team really costs.",
    body: [
      "Payroll is an add-on to the two things we do every day: Bookkeeping and Insurance Billing. When the same team keeps your books, each pay run, deposit, and deduction lands in the right account.",
      "Wages, employer taxes, and benefits post to separate categories, so you can see payroll as a share of revenue. W-2 wages and owner draws stay separate, so your own take-home pay is never a guess.",
    ],
    links: [
      { label: "Get Your Books in Order", href: "/services/bookkeeping" },
      { label: "Stop Chasing Payments", href: "/services/insurance-billing" },
    ],
    art: "spot-dashboard",
  },
  faqs: {
    title: "Payroll FAQs",
    items: [
      {
        question: "What would you need from me to switch my payroll to ForEyes?",
        answer:
          "Basic employee information, past payroll records, and bank account details. You also complete a short intake form and connect your financial institutions during onboarding. Our team handles the system setup, the transfers, and the data cleanup.",
      },
      {
        question: "What would you need from me on an ongoing basis?",
        answer:
          "In most cases, all you need to do is review time cards and click submit. You also send us employee changes as they happen. If you’d like us to take the time card review too, we offer full-service payroll for a flat monthly fee.",
      },
      {
        question: "Do you handle payroll tax filings?",
        answer:
          "Yes. Payroll tax filings are part of the Payroll service. Federal, state, and local payroll taxes are calculated, required forms are filed on time, and year-end reporting is provided. That covers payroll taxes. Your income tax return stays with your CPA.",
      },
      {
        question: "Can you manage employee benefits and deductions?",
        answer:
          "Yes. Payroll includes managing benefits, deductions, and payroll adjustments, so contributions for items such as healthcare and retirement plans are processed accurately and reflected correctly in payroll records.",
      },
      {
        question: "Can’t I handle payroll in-house?",
        answer:
          "Yes, you can, but it takes time and comes with risk. In-house payroll pulls you or your staff away from patients, and without dedicated training in a tool like Gusto, errors can pile up. We bring a set process and a team that works inside the platform.",
      },
      {
        question: "What does Payroll cost?",
        answer:
          "Payroll starts at $149 a month, which covers up to 10 employees. Each employee above 10 adds $19. The pricing calculator builds an estimate in a few minutes, and we confirm it on your Discovery Call.",
        link: { label: "Estimate Your Price", href: "/pricing-calculator" },
      },
    ],
  },
  pricing: {
    title: "Payroll Starts at $149 a Month",
    body: "That covers up to 10 employees. Add it to your estimate in the pricing calculator, then book a Discovery Call to confirm it. No hidden fees, no surprise invoices. Every figure shown is an estimate only.",
  },
  cta: {
    title: "Hand off the pay run.",
    body: "Tell us how many people you pay and how it gets done today. We’ll show you what payroll through Gusto would look like for your practice.",
  },
};
