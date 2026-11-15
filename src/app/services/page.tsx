import type { Metadata } from "next";
import { site } from "@/content/site";
import { cta, faqs, hero, meta, path, pricing } from "@/content/services/hub";
import { PageHero } from "@/components/sections/PageHero";
import { BetterTogether } from "@/components/sections/BetterTogether";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  HubFlagships,
  HubHeroVisual,
  HubSupporting,
} from "@/components/pages/services/ServicesHubSections";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tone="stone"
        eyebrow={hero.eyebrow}
        title={hero.title}
        highlight={hero.highlight}
        lede={hero.lede}
        note={hero.note}
        crumbs={[{ label: "Services" }]}
        secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
        visual={<HubHeroVisual />}
      />

      <HubFlagships />

      <BetterTogether />

      <HubSupporting />

      <PricingTeaser title={pricing.title} body={pricing.body} />

      <FaqSection title={faqs.title} lede={faqs.lede} items={faqs.items} />

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
