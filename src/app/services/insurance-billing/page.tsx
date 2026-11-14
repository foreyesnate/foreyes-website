import type { Metadata } from "next";
import { site } from "@/content/site";
import {
  aging,
  comparison,
  cta,
  faqs,
  handles,
  hero,
  meta,
  path,
  process,
  worklist,
} from "@/content/services/insurance-billing";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { OneOrTwo } from "@/components/sections/OneOrTwo";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CtaBand } from "@/components/sections/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { ClaimsPipeline } from "@/components/graphics/ClaimsPipeline";
import { BillingClaimQueue } from "@/components/graphics/BillingClaimQueue";
import { BillingAgingChart } from "@/components/graphics/BillingAgingChart";
import {
  BillingBooks,
  BillingEyecare,
  BillingKpis,
  BillingPricing,
  BillingProblem,
} from "@/components/pages/billing/BillingSections";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

export default function InsuranceBillingPage() {
  return (
    <>
      {/* PageHero's small text is tuned for stone. On teal, the eyebrow,
          breadcrumb and note need ink to stay readable, so they are set here. */}
      <div className="[&_.eyebrow]:text-ink [&_.eyebrow>span]:bg-ink [&_.eyebrow>span]:ring-ink/20 [&_nav_ol]:text-ink/80">
        <PageHero
          tone="teal"
          eyebrow={hero.eyebrow}
          title={hero.title}
          highlight={hero.highlight}
          lede={hero.lede}
          crumbs={[{ label: "Services", href: "/services" }, { label: "Insurance Billing" }]}
          secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
          visual={<BillingClaimQueue {...worklist} />}
        >
          <Reveal delay={0.8} blur={false} y={8}>
            <p className="mt-6 flex items-start gap-2.5 text-[0.975rem] font-medium text-ink/85">
              <Icon name="calendar" size={18} className="mt-[0.2rem] shrink-0" />
              {hero.note}
            </p>
          </Reveal>
        </PageHero>
      </div>

      <BillingProblem />

      <FeatureGrid
        id="billing-handles"
        tone="white"
        columns={2}
        eyebrow={handles.eyebrow}
        title={handles.title}
        lede={handles.lede}
        features={handles.features}
      />

      <SplitFeature
        id="billing-aging"
        tone="navy"
        flip
        eyebrow={aging.eyebrow}
        title={aging.title}
        body={aging.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        bullets={aging.bullets}
        visual={<BillingAgingChart {...aging.chart} />}
      />

      <BillingEyecare />

      <ProcessSteps
        id="billing-process"
        tone="white"
        eyebrow={process.eyebrow}
        title={process.title}
        lede={process.lede}
        steps={process.steps}
        aside={
          <div className="hidden rounded-[2.5rem] bg-teal p-4 lg:block">
            <ClaimsPipeline />
          </div>
        }
      />

      <BillingKpis />

      <OneOrTwo rows={comparison.rows} labels={comparison.labels} lede={comparison.lede} />

      <BillingBooks />

      <FaqSection title={faqs.title} lede={faqs.lede} items={faqs.items} tone="stone" />

      <BillingPricing />

      <RelatedServices current={path} />

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
