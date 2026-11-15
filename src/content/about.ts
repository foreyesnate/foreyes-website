// Copy for /about-us and the framing copy for /about-us/our-team.
// Facts come from foreyessolutions.com (About, Our Team, Bookkeeping, FAQ) and
// the INVISION landing page. Anything rewritten for the rebrand is marked.

import type { IconName } from "@/components/ui/Icon";

export const aboutHero = {
  eyebrow: "About ForEyes Books & Billing",
  title: "Books and billing from",
  highlight: "the owner’s seat.",
  lede: "We work only with eyecare: optometry, ophthalmology, and optical. Wade Weisz, OD, founded the firm in 2021, after 25+ years as a practicing OD and multi-location practice owner.",
  note: "Founded by an OD. A fully remote team headquartered in Nashville, serving eyecare practices nationwide.",
};

export const story = {
  eyebrow: "How it all started",
  title: "He couldn’t find it, so he built it.",
  paragraphs: [
    "For years, Wade struggled to find financial help that reflected the realities of running a practice. Exams, optical sales, and contact lenses all deposit into the same bank account, and a generalist’s reports rarely pull them apart.",
    "So in 2021 he founded the firm, with a clear mission: to help fellow eyecare professionals take control of their practice finances.",
    "What began as a small team led by an OD serving a handful of independent optometrists has grown into a firm trusted by practices across the country. Today that team does two things. We keep the books, and we work the insurance billing.",
  ],
};

export type TimelineStop = {
  /** A year from the source pages, or "Today". */
  when: string;
  title: string;
  body: string;
};

// Every dated stop is taken from the current site: the founding year from the
// INVISION page, the joining dates from each person's bio. The last stop is
// deliberately "Today" and carries no year.
export const timeline: TimelineStop[] = [
  {
    when: "2021",
    title: "An OD starts the firm",
    body: "Wade Weisz, OD, opens with a small team and a handful of independent optometrists. Esta Steenkamp joins that December.",
  },
  {
    when: "2022",
    title: "Operations and accounting leads join",
    body: "Richard Schisler joins in March. Nathan Taylor joins the same year and now leads operations as COO and co-owner.",
  },
  {
    when: "2025",
    title: "A practice manager joins",
    body: "Amanda Bennett arrives in January, after more than 16 years managing a cold start practice in Georgia.",
  },
  {
    when: "Today",
    title: "ForEyes Books & Billing",
    body: "Two jobs for eyecare practices across the country: Bookkeeping and Insurance Billing.",
  },
];

// Wade's words as published on the current About page. Only the punctuation
// was normalised (the en dash became a comma, as on the home page).
export const founderQuote = {
  heading: "A Word From Wade Weisz, OD",
  name: "Wade Weisz, OD",
  role: "CEO & Founder",
  opening: {
    lead: "After more than 25 years as a practicing OD and managing multiple locations, I learned firsthand how critical it is to have accurate, timely financial data,",
    accent: "and how often that’s missing in the eyecare profession.",
  },
  paragraphs: [
    "Too many practices operate with incomplete books, misclassified expenses, and reports that don’t tell the whole story. I’ve been there, and know how that uncertainty impacts not just your bottom line but your ability to lead, grow, and sleep at night.",
    "I’ve lived your challenges and built this company to solve them, with accuracy you can trust and support that feels like part of your team.",
  ],
};

// REWRITTEN for the rebrand and awaiting the owner's approval. The current
// site reads: "To become the leading accounting, advisory, and practice
// solutions partner for the eyecare industry, trusted for our expertise,
// integrity, and unwavering support."
export const vision = {
  heading: "Our Vision",
  statement:
    "To be the books and billing partner the eyecare industry trusts for our expertise, integrity, and steady support.",
  proofLabel: "What that looks like month to month",
  proof: [
    "Reviewed financials by the 10th business day",
    "Claims reviewed before they go out",
    "Eyecare practices only",
  ],
};

export type CoreValue = { icon: IconName; title: string; body: string };

// Names kept from the current site; bodies tightened.
export const values: CoreValue[] = [
  {
    icon: "eye",
    title: "Clarity Over Complexity",
    body: "Financial guidance should be clear and understandable. We remove the noise, so you can make confident, informed decisions.",
  },
  {
    icon: "users",
    title: "Partners in Practice",
    body: "We stand alongside the practices we serve. From solo startups to multi-location groups, we meet you where you are.",
  },
  {
    icon: "shield",
    title: "Integrity in Every Detail",
    body: "From our reports to our relationships, we operate with precision and honesty. A quality control manager reviews every report before it reaches you.",
  },
  {
    icon: "chart",
    title: "Committed to Growth",
    body: "We keep looking for better tools and better ways of working, for our clients and for our own team.",
  },
  {
    icon: "compass",
    title: "Rooted in Eyecare, Built for Impact",
    body: "Our niche is our strength. Our team has decades of combined experience in eyecare, and we know the work our clients do matters.",
  },
];

export const remote = {
  eyebrow: "Fully remote, nationwide",
  title: "Nationwide Reach, Personal Support",
  paragraphs: [
    "We’re a fully remote team headquartered in Nashville, serving eyecare practices nationwide. Whether you’re in a rural town or a major metropolis, we work with you the same way.",
    "Reviewed reports land in your client portal. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state.",
    "Accurate books and clean claims shouldn’t be tied to a zip code.",
  ],
};

// Derived from the published office hours (8 AM to 5 PM CT), shifted by zone.
export const officeHoursByZone = [
  { zone: "Eastern", short: "ET", opens: 9, closes: 18, label: "9 AM to 6 PM" },
  { zone: "Central", short: "CT", opens: 8, closes: 17, label: "8 AM to 5 PM", home: true },
  { zone: "Mountain", short: "MT", opens: 7, closes: 16, label: "7 AM to 4 PM" },
  { zone: "Pacific", short: "PT", opens: 6, closes: 15, label: "6 AM to 3 PM" },
];

export const teamTeaser = {
  eyebrow: "Meet the team",
  title: "The people who close your books and work your claims.",
  body: "Our team brings experience from both finance and the frontlines of optometry. One of us owned practices for 25+ years. Another managed one for more than 16.",
  cta: "Meet Our Team",
};

export const why = {
  eyebrow: "Why ForEyes",
  title: "Eyecare is all we do.",
  lede: "Our clients are optometry, ophthalmology, and optical practices. Nobody else.",
};

// The three reasons as they stand on the current site, with "headaches" and
// "and more" removed. Shown as a list beside the exam lane photo.
export const whyForEyes: { title: string; body: string }[] = [
  {
    title: "Built for Eyecare",
    body: "We don’t “also work with eyecare professionals.” We only work with them, and that industry expertise shows.",
  },
  {
    title: "Backed by Your Peers",
    body: "Endorsed by ODs on Finance and trusted by TSO, ALLDocs, and Vision Source practices. Our reputation is hard-earned and referral-built.",
  },
  {
    title: "Less Work, Smarter Spend",
    body: "We replace in-house bookkeeping and billing work with systems that save you time, reduce overhead, and grow with your practice.",
  },
];

export const teamPage = {
  eyebrow: "Our team",
  title: "The people behind your",
  highlight: "books and billing.",
  lede: "The ForEyes Books & Billing team comes from both eyecare and finance. One of us owned practices for 25+ years. Another managed one for more than 16. All of us work only with eyecare.",
  // Hero visual. Each figure is taken from that person's bio on the current site.
  experience: [
    {
      slug: "wade-weisz",
      value: 25,
      suffix: "+",
      unit: "years",
      line: "Wade, as a practicing OD and multi-location practice owner",
    },
    {
      slug: "amanda-bennett",
      value: 16,
      suffix: "+",
      unit: "years",
      line: "Amanda, as the practice manager of a cold start practice",
    },
    {
      slug: "esta-steenkamp",
      value: 2021,
      prefix: "Since ",
      unit: "",
      line: "Esta, overseeing the accuracy of client financial records",
    },
  ],
  owners: {
    eyebrow: "Leadership",
    title: "Meet the Owners",
    lede: "Wade founded the firm. Nathan leads operations, from your first conversation through onboarding.",
  },
  leads: {
    eyebrow: "The team",
    title: "Who Leads the Work",
    lede: "Client accounting, quality control, insurance billing, and client support each have a named lead.",
  },
  contacts: {
    eyebrow: "Working with us",
    title: "Who you’ll actually hear from.",
    lede: "You get named people, and each one has a defined job on your account.",
    roles: [
      {
        title: "Your account manager",
        body: "A dedicated account manager knows your books and will meet whenever a number needs explaining.",
      },
      {
        title: "A quality control manager",
        body: "Before any P&L or balance sheet reaches your client portal, a quality control manager reviews it.",
      },
      {
        title: "Your billing team",
        body: "Claims are reviewed before submission, denials are appealed, and A/R is followed up daily.",
      },
    ],
  },
};
