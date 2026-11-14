import type { Metadata } from "next";
import { site } from "@/content/site";
import { hub } from "@/content/audiences";
import { AudienceStageLine } from "@/components/graphics/AudienceStageLine";
import { AudienceHubCards } from "@/components/pages/audiences/AudienceHubCards";
import { AudienceRemote } from "@/components/pages/audiences/AudienceRemote";
import { audienceInfo } from "@/components/pages/audiences/lookup";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedServices } from "@/components/sections/RelatedServices";

export const metadata: Metadata = {
  title: hub.meta.title,
  description: hub.meta.description,
  alternates: { canonical: "/who-we-serve" },
};

export default function WhoWeServePage() {
  const stages = hub.stages.items.map((item) => {
    const audience = audienceInfo(item.slug);
    return {
      href: audience.href,
      label: audience.label,
      icon: audience.icon,
      tone: audience.tone,
      stage: item.stage,
      line: item.line,
    };
  });

  return (
    <>
      <PageHero
        eyebrow={hub.hero.eyebrow}
        title={hub.hero.title}
        highlight={hub.hero.highlight}
        lede={hub.hero.lede}
        note={hub.hero.note}
        crumbs={[{ label: "Who We Serve" }]}
        secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
        visual={
          <AudienceStageLine
            title={hub.stages.title}
            caption={hub.stages.caption}
            stages={stages}
            className="mx-auto w-full max-w-[34rem] lg:ml-auto lg:mr-0"
          />
        }
      />
      <AudienceHubCards
        id={hub.cards.id}
        eyebrow={hub.cards.eyebrow}
        title={hub.cards.title}
        lede={hub.cards.lede}
        cards={hub.cards.items}
      />
      <AudienceRemote />
      <RelatedServices title={hub.related.title} />
      <CtaBand title={hub.cta.title} body={hub.cta.body} />
    </>
  );
}
