import type { IllustrationName } from "@/content/art";
import type { Testimonial } from "@/content/testimonials";

/** The five services, keyed by the last segment of their URL. */
export type ServiceKey =
  | "bookkeeping"
  | "insurance-billing"
  | "accounts-payable"
  | "payroll"
  | "practice-consulting";

export type AudienceSlug = "optometrists" | "startups" | "multi-location-practices";

/** One row of "the obstacles": the problem in eyecare terms, then the fix. */
export type AudienceObstacle = {
  title: string;
  body: string;
  /** What ForEyes does about it. One or two sentences. */
  fix: string;
  /** The service or services that do the fixing. Linked from the row. */
  services: ServiceKey[];
};

/** How one service looks for this audience. */
export type AudienceServiceCard = {
  service: ServiceKey;
  headline: string;
  body: string;
  /** Flagship cards only: three short proof points. */
  points?: string[];
  /** Link label. Names the outcome in the owner's words. */
  cta: string;
};

/** A picture from the library (src/content/art.ts) and the tint it sits on. */
export type AudiencePicture = {
  name: IllustrationName;
  panel: "teal" | "navy" | "yellow";
};

export type AudienceStep = { title: string; body: string; meta?: string };

export type AudienceFaq = { question: string; answer: string };

export type AudienceProof =
  | {
      kind: "testimonials";
      title: string;
      lede: string;
      items: Testimonial[];
    }
  | {
      kind: "founder";
      eyebrow: string;
      title: string;
      lede: string;
      /** The quote, split so the closing clause can be highlighted. */
      quote: string;
      quoteHighlight: string;
      followUp: string;
      name: string;
      role: string;
    };

export type AudienceContent = {
  slug: AudienceSlug;
  path: string;
  /** Short name used in breadcrumbs and cross-links. */
  label: string;
  meta: { title: string; description: string };
  hero: {
    tone: "navy" | "ink" | "teal";
    eyebrow: string;
    title: string;
    /** Closing phrase of the headline, set in the accent colour. */
    highlight: string;
    lede: string;
    note: string;
    /** Which animated graphic sits in the hero. */
    graphic: "evenings" | "launch" | "rollup";
  };
  obstacles: {
    /** Anchor id, carried over from the old page where it still made sense. */
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    /** The scene beside the heading: who this page is for. */
    picture: AudiencePicture;
    items: AudienceObstacle[];
  };
  services: {
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    flagships: [AudienceServiceCard, AudienceServiceCard];
    supporting: AudienceServiceCard[];
  };
  process: {
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    tone: "ink" | "navy";
    steps: AudienceStep[];
    /** A short reassurance shown beside the steps. */
    aside: string;
    /**
     * The picture that goes with the reassurance. `bleed` is for the process
     * drawings whose hand enters from the edge; `pad` for free-standing spots.
     */
    picture: AudiencePicture & { fit: "bleed" | "pad" };
  };
  proof: AudienceProof;
  faqs: { title: string; lede: string; items: AudienceFaq[] };
  cta: { title: string; body: string };
};

/** A large card on the Who We Serve hub. */
export type AudienceHubCard = {
  slug: AudienceSlug;
  href: string;
  label: string;
  /** One line that lets an owner recognise themselves. */
  fit: string;
  headline: string;
  body: string;
  /** What changes once we are working together. */
  points: string[];
  /** Services in the order this audience tends to need them. */
  services: ServiceKey[];
  cta: string;
};
