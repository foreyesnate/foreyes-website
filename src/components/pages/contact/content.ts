// Copy for /contact. Plain strings only, so wording can be edited without
// touching layout code. Facts come from foreyessolutions.com: the "Let's Talk
// Eyecare" contact drawer, the FAQ ("a complimentary discovery call"), the
// process steps on the Bookkeeping and Billing pages, and the pricing
// calculator ("We'll provide a formal quote during your Discovery Call").
// The call's length is not stated here: "45 minutes" appears only on a
// campaign landing page and has not been confirmed.

import { flagshipServices, supportingServices } from "@/content/site";
import type { IconName } from "@/components/ui/Icon";

export const contactMeta = {
  title: "Contact Us and Book a Discovery Call",
  description:
    "Book a complimentary Discovery Call or send a message to ForEyes Books & Billing. Reach our eyecare-only team by phone or email, Monday to Friday, 8 AM to 5 PM CT.",
} as const;

export const contactHero = {
  eyebrow: "Contact",
  title: "Let’s talk",
  highlight: "eyecare.",
  lede: "Have a question, or ready to learn how we can help your practice? Book a Discovery Call or send a message. Either way, a person on our team answers.",
} as const;

export const bookPath = {
  label: "Talk it through",
  title: "Book a Discovery Call",
  body: "Pick a time that suits your schedule. The call is complimentary, and it’s the quickest way to a formal quote.",
} as const;

export const messagePath = {
  label: "Write to us",
  title: "Send a Message",
  body: "Not ready for a call? Ask your question here and we’ll reply by email or phone.",
} as const;

/** The "What can we help with?" choices on the form. */
export const interestOptions: string[] = [
  ...flagshipServices.map((service) => service.label),
  ...supportingServices.map((service) => service.label),
  "Not sure yet",
];

export const directLines = {
  title: "Or reach us directly",
  labels: {
    phone: "Call",
    email: "Email",
    hours: "Hours",
    address: "Mailing address",
  },
} as const;

export const callSteps = {
  eyebrow: "Before you book",
  title: "What happens on a Discovery Call.",
  lede: "It’s a complimentary conversation with one job: to work out whether ForEyes is the right fit for your practice.",
  steps: [
    {
      meta: "On the call",
      title: "We learn how your practice runs",
      body: "How it earns, spends, and reports today, and where the numbers have stopped making sense.",
    },
    {
      meta: "On the call",
      title: "We ask about your billing",
      body: "Your current billing workflows, what’s slowing payments down, and what you want from your revenue cycle.",
    },
    {
      meta: "On the call",
      title: "We work out the fit together",
      body: "You tell us your goals. We tell you which of our services match them, and whether ForEyes is right for your needs.",
    },
    {
      meta: "On the call",
      title: "You get a formal quote",
      body: "The pricing calculator gives you an estimate ahead of time. We confirm the details and provide a formal quote during your Discovery Call.",
    },
    {
      meta: "If you go ahead",
      title: "Onboarding begins",
      body: "You meet your onboarding specialist, tour your client portal, and receive an intake form covering your accounts, vendors, and software.",
    },
  ],
} as const;

export const reassurance: {
  eyebrow: string;
  title: string;
  points: { icon: IconName; title: string; body: string }[];
  trust: string;
  aside: string;
} = {
  eyebrow: "Good to know",
  title: "You’ll be talking to people who know optometry.",
  points: [
    {
      icon: "eye",
      title: "Eyecare only",
      body: "We work with optometry and eyecare practices, and nothing else.",
    },
    {
      icon: "users",
      title: "Founded by an OD",
      body: "Wade Weisz, OD, spent 25+ years as a practicing optometrist and multi-location practice owner.",
    },
    {
      icon: "pin",
      title: "Remote and nationwide",
      body: "A fully remote team headquartered in Nashville, serving eyecare practices nationwide.",
    },
  ],
  trust: "Endorsed by ODs on Finance. Trusted by TSO, ALLDocs, and Vision Source practices.",
  aside: "Want numbers before you talk to anyone?",
};
