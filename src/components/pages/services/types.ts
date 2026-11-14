// The shape of one supporting-service page (Accounts Payable, Payroll,
// Practice Consulting). The copy lives in src/content/services/<slug>.ts; the
// layout lives in SupportingServicePage.tsx. Plain strings only, so wording
// can be edited without touching layout code.
import type { IllustrationName } from "@/content/art";
import type { IconName } from "@/components/ui/Icon";

export type SupportingSlug = "accounts-payable" | "payroll" | "practice-consulting";

/** A plain-text answer, with an optional link shown under it. */
export type SupportingFaq = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export type SupportingStep = { title: string; body: string; meta?: string };

export type SupportingFeature = { icon: IconName; title: string; body: string };

/** One of the two cards in the "who does what" / "two ways" band. */
export type SupportingRoleCard = {
  /** Short pill above the card title, e.g. "Your part". */
  label: string;
  title: string;
  items: string[];
};

/** The card beside the process steps: the named tool, or who leads the work. */
export type SupportingAside =
  | {
      kind: "tool";
      /** The platform, spelled as the vendor spells it. */
      name: string;
      /** One sentence on why it matters to the owner. */
      quote: string;
      body: string;
      points: string[];
    }
  | {
      kind: "lead";
      name: string;
      role: string;
      /** Path under /public. */
      photo: string;
      quote: string;
      link: { label: string; href: string };
    };

export type SupportingServiceContent = {
  slug: SupportingSlug;
  path: string;
  /** Service name, exactly as it appears in the navigation. */
  label: string;
  meta: { title: string; description: string };
  /**
   * Starting monthly price from the pricing calculator, or `null` when the
   * service has no published price and is quoted on the Discovery Call.
   */
  fromPrice: number | null;
  hero: {
    eyebrow: string;
    title: string;
    /** Closing phrase of the headline, set in the accent colour. */
    highlight: string;
    lede: string;
    /** Shown under the buttons when there is no published price. */
    note?: string;
  };
  /** What it is and who it is for. */
  intro: {
    eyebrow: string;
    title: string;
    body: string[];
    bullets: string[];
    art: IllustrationName;
    panel: "teal" | "navy" | "yellow";
    /** Small card floated on the corner of the picture. */
    chip: { label: string; value: string };
  };
  handles: {
    eyebrow: string;
    title: string;
    lede: string;
    columns: 2 | 3 | 4;
    features: SupportingFeature[];
  };
  /** Two cards side by side: who does what, or two ways to work. */
  roles: {
    eyebrow: string;
    title: string;
    lede: string;
    /** What joins the two cards: "and" for a split of work, "or" for a choice. */
    joiner: "and" | "or";
    cards: [SupportingRoleCard, SupportingRoleCard];
  };
  process: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: SupportingStep[];
    aside: SupportingAside;
  };
  /** The line that ties this service back to Bookkeeping and Insurance Billing. */
  flagships: {
    eyebrow: string;
    title: string;
    body: string[];
    links: { label: string; href: string }[];
  };
  faqs: { title: string; items: SupportingFaq[] };
  pricing: { title: string; body: string };
  cta: { title: string; body: string };
};
