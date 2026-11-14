import type { ComponentType } from "react";
import { site } from "@/content/site";
import type { AudienceContent } from "@/content/audiences/types";
import { AudienceEveningsBack } from "@/components/graphics/AudienceEveningsBack";
import { AudienceLaunchTimeline } from "@/components/graphics/AudienceLaunchTimeline";
import { AudienceLocationRollup } from "@/components/graphics/AudienceLocationRollup";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { Icon } from "@/components/ui/Icon";
import { AudienceFounderQuote } from "./AudienceFounderQuote";
import { AudienceJumpNav } from "./AudienceJumpNav";
import { AudienceObstacles } from "./AudienceObstacles";
import { AudienceOthers } from "./AudienceOthers";
import { AudienceServices } from "./AudienceServices";

const graphics: Record<AudienceContent["hero"]["graphic"], ComponentType<{ className?: string }>> = {
  evenings: AudienceEveningsBack,
  launch: AudienceLaunchTimeline,
  rollup: AudienceLocationRollup,
};

/**
 * The one template behind every "Who We Serve" audience page. All copy comes
 * from a typed module in src/content/audiences; this file only decides the
 * order and the look.
 */
export function AudiencePage({ content }: { content: AudienceContent }) {
  const { hero, obstacles, services, process, proof, faqs, cta } = content;
  const Graphic = graphics[hero.graphic];
  const dark = process.tone === "ink" || process.tone === "navy";

  return (
    <>
      <PageHero
        tone={hero.tone}
        eyebrow={hero.eyebrow}
        title={hero.title}
        highlight={hero.highlight}
        lede={hero.lede}
        // PageHero sets the note in a grey that is too faint on teal.
        note={hero.tone === "teal" ? <span className="text-ink/85">{hero.note}</span> : hero.note}
        crumbs={[{ label: "Who We Serve", href: "/who-we-serve" }, { label: content.label }]}
        secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
        visual={<Graphic className="mx-auto w-full max-w-[34rem] lg:ml-auto lg:mr-0" />}
      />

      <AudienceJumpNav
        links={[
          { label: "The obstacles", href: `#${obstacles.id}` },
          { label: "How we help", href: `#${services.id}` },
          { label: "How we work", href: `#${process.id}` },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <AudienceObstacles obstacles={obstacles} />
      <AudienceServices services={services} />

      <ProcessSteps
        id={process.id}
        eyebrow={process.eyebrow}
        title={process.title}
        lede={process.lede}
        steps={process.steps}
        tone={process.tone}
        aside={
          <p className={dark ? "flex max-w-md gap-4 rounded-[1.75rem] bg-white/[0.07] p-6 text-white/85 ring-1 ring-inset ring-white/10" : "flex max-w-md gap-4 rounded-[1.75rem] bg-white p-6 text-ink-700 shadow-soft"}>
            <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow text-ink">
              <Icon name="users" size={20} />
            </span>
            <span>{process.aside}</span>
          </p>
        }
      />

      {proof.kind === "testimonials" ? (
        <Testimonials items={proof.items} title={proof.title} lede={proof.lede} />
      ) : (
        <AudienceFounderQuote proof={proof} />
      )}

      <FaqSection title={faqs.title} lede={faqs.lede} items={faqs.items} />
      <AudienceOthers current={content.slug} />
      <RelatedServices />
      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
