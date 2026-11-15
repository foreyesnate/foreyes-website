import type { Metadata } from "next";
import { site } from "@/content/site";
import { bookkeepingTestimonials } from "@/content/testimonials";
import {
  chart,
  close,
  cta,
  faqs,
  hero,
  included,
  meta,
  path,
  pricing,
  process,
  proof,
  reconciliation,
} from "@/content/services/bookkeeping";
import { TextLink } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CtaBand } from "@/components/sections/CtaBand";
import { BooksHeroReport } from "@/components/graphics/BooksHeroReport";
import { BooksChartSplit } from "@/components/graphics/BooksChartSplit";
import { BooksReconcile } from "@/components/graphics/BooksReconcile";
import {
  BooksAnnualReview,
  BooksCleanupCard,
  BooksCloseVisual,
  BooksPortal,
  BooksProblem,
} from "@/components/pages/bookkeeping/BookkeepingSections";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

const paragraphs = (items: string[]) => items.map((text) => <p key={text}>{text}</p>);

export default function BookkeepingPage() {
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow={hero.eyebrow}
        title={hero.title}
        highlight={hero.highlight}
        lede={hero.lede}
        note={hero.note}
        crumbs={[{ label: "Services", href: "/services" }, { label: "Bookkeeping" }]}
        secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
        visual={<BooksHeroReport />}
      />

      <BooksProblem />

      <SplitFeature
        id="chart-title"
        tone="stone"
        flip
        eyebrow={chart.eyebrow}
        title={chart.title}
        body={paragraphs(chart.body)}
        bullets={chart.bullets}
        visual={<BooksChartSplit />}
      />

      <FeatureGrid
        id="included-title"
        tone="white"
        eyebrow={included.eyebrow}
        title={included.title}
        lede={included.lede}
        features={included.features.map((feature) => ({
          icon: feature.icon,
          title: feature.title,
          body: (
            <>
              <p>{feature.body}</p>
              {"link" in feature && feature.link ? (
                <TextLink href={feature.link.href} className="mt-4 text-[0.95rem]">
                  {feature.link.label}
                </TextLink>
              ) : null}
            </>
          ),
        }))}
      />

      <SplitFeature
        id="reconciliation-title"
        tone="stone"
        eyebrow={reconciliation.eyebrow}
        title={reconciliation.title}
        body={paragraphs(reconciliation.body)}
        bullets={reconciliation.bullets}
        visual={<BooksReconcile />}
      />

      <SplitFeature
        id="close-title"
        tone="navy"
        flip
        eyebrow={close.eyebrow}
        title={close.title}
        body={paragraphs(close.body)}
        visual={<BooksCloseVisual />}
      />

      <BooksPortal />

      <ProcessSteps
        id="process-title"
        tone="stone"
        eyebrow={process.eyebrow}
        title={process.title}
        lede={process.lede}
        steps={process.steps}
        aside={<BooksCleanupCard />}
      />

      <BooksAnnualReview />

      <Testimonials items={bookkeepingTestimonials} lede={proof.lede} />

      <FaqSection title="Eyecare Bookkeeping FAQs" items={faqs} />

      <PricingTeaser title={pricing.title} body={pricing.body} />

      <RelatedServices current={path} />

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}
