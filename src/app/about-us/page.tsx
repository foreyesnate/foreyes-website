import type { Metadata } from "next";
import { aboutHero, whyForEyes } from "@/content/about";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  AboutFounderQuote,
  AboutHeroMosaic,
  AboutRemote,
  AboutStory,
  AboutTeamTeaser,
  AboutVisionValues,
} from "@/components/pages/about/AboutSections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ForEyes Books & Billing was founded in 2021 by Wade Weisz, OD, after 25+ years in the owner’s seat. Bookkeeping and insurance billing, only for eyecare.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        highlight={aboutHero.highlight}
        lede={aboutHero.lede}
        crumbs={[{ label: "About" }]}
        secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
        note={aboutHero.note}
        visual={<AboutHeroMosaic />}
      />
      <AboutStory />
      <AboutFounderQuote />
      <AboutVisionValues />
      <AboutRemote />
      <AboutTeamTeaser />
      <FeatureGrid
        id="why-title"
        tone="white"
        eyebrow="Why ForEyes"
        title="Eyecare is all we do."
        lede="Our clients are optometry, ophthalmology, and optical practices. Nobody else."
        features={whyForEyes}
        numbered
      />
      <Testimonials tone="stone" />
      <CtaBand title="Let’s talk eyecare." />
    </>
  );
}
