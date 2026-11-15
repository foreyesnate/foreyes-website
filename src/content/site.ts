// Company facts and navigation, in one place.
// Everything here was carried over from foreyessolutions.com unless marked.

export const site = {
  name: "ForEyes Books & Billing",
  shortName: "ForEyes",
  legacyName: "ForEyes Solutions",
  // The production domain is not decided yet; change it here and every
  // canonical URL, sitemap entry and social card follows.
  url: "https://foreyessolutions.com",
  tagline: "Bookkeeping and insurance billing, built only for eyecare.",
  description:
    "Bookkeeping and insurance billing for independent eyecare practices, from a team founded by an OD. Reviewed financials by the 10th business day.",
  phone: { display: "844-505-3937", href: "tel:+18445053937" },
  email: "hello@foreyessolutions.com",
  /** The team is fully remote; Nashville is home base. */
  headquarters: "Nashville, TN",
  /** The legal entity's mailing address. Not a walk-in office. */
  address: {
    street: "2429 Curbow Dr",
    city: "Murfreesboro",
    region: "TN",
    postalCode: "37127",
    mapUrl:
      "https://www.google.com/maps/search/2429+Curbow+Dr+Murfreesboro,+TN+37127",
  },
  hours: "Monday to Friday, 8 AM to 5 PM CT",
  founded: 2021,
  /** Where every "Book a Discovery Call" button goes. */
  bookingHref: "/contact#book",
  /**
   * The scheduling widget already used on foreyessolutions.com (shown after a
   * form is submitted there). Embedded on the contact page.
   */
  bookingWidgetUrl:
    "https://link.foreyesbookkeeping.com/widget/booking/Bs6Chzybusu2eycw8H5p",
  pricingHref: "/pricing-calculator",
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  /** Larger, illustrated entries shown first in the dropdown. */
  featured?: NavLink[];
  links?: NavLink[];
};

export const flagshipServices: NavLink[] = [
  {
    label: "Bookkeeping",
    href: "/services/bookkeeping",
    description: "Reviewed financials by the 10th business day, every month.",
  },
  {
    label: "Insurance Billing",
    href: "/services/insurance-billing",
    description: "Claims, denials and A/R worked daily by eyecare billers.",
  },
];

export const supportingServices: NavLink[] = [
  {
    label: "Accounts Payable",
    href: "/services/accounts-payable",
    description: "Bills approved and paid on time, without the paper chase.",
  },
  {
    label: "Payroll",
    href: "/services/payroll",
    description: "Paychecks, filings and year-end forms, handled.",
  },
  {
    label: "Practice Consulting",
    href: "/services/practice-consulting",
    description: "OD-led advice on staffing, optical and operations.",
  },
];

export const audiences: NavLink[] = [
  {
    label: "Optometrists",
    href: "/who-we-serve/optometrists",
    description: "Independent practices that want numbers they can trust.",
  },
  {
    label: "Startups",
    href: "/who-we-serve/startups",
    description: "Cold starts and new owners building it right from day one.",
  },
  {
    label: "Multi-Location Practices",
    href: "/who-we-serve/multi-location-practices",
    description: "One clear view across every office.",
  },
];

export const mainNav: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    featured: flagshipServices,
    links: supportingServices,
  },
  { label: "Who We Serve", href: "/who-we-serve", links: audiences },
  { label: "Pricing", href: "/pricing-calculator" },
  {
    label: "About",
    href: "/about-us",
    links: [
      {
        label: "Our Story",
        href: "/about-us",
        description: "Why an optometrist started a books and billing firm.",
      },
      {
        label: "Our Team",
        href: "/about-us/our-team",
        description: "The people who close your books and work your claims.",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    links: [
      {
        label: "Blog",
        href: "/resources/blog",
        description: "Smart reads for ODs.",
      },
      {
        label: "FAQs",
        href: "/resources/faq",
        description: "Straight answers before you book a call.",
      },
    ],
  },
];
