import type { Metadata } from "next";
import { closingCopy, heroCopy, pricingFaqs } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { HeroSteps } from "@/components/pages/pricing/HeroSteps";
import { IncludedStrip } from "@/components/pages/pricing/IncludedStrip";
import { PricingCalculator } from "@/components/pages/pricing/PricingCalculator";

export const metadata: Metadata = {
  title: "Pricing Calculator: Estimate Your Monthly Cost",
  description:
    "Estimate what bookkeeping, insurance billing, accounts payable, and payroll cost each month for your eyecare practice. Formal quote on a Discovery Call.",
  alternates: { canonical: "/pricing-calculator" },
};

export default function PricingCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow={heroCopy.eyebrow}
        title={heroCopy.title}
        highlight={heroCopy.highlight}
        lede={heroCopy.lede}
        note={heroCopy.note}
        crumbs={[{ label: "Pricing Calculator" }]}
        secondaryCta={{ label: "Start Your Estimate", href: "#calculator" }}
        visual={<HeroSteps />}
      />
      <PricingCalculator />
      <IncludedStrip />
      <FaqSection
        id="pricing-faqs"
        tone="white"
        eyebrow="Pricing FAQs"
        title="Straight Answers About What You’ll Pay"
        lede="What the estimate covers, what it leaves out, and what happens next."
        items={pricingFaqs}
      />
      <CtaBand title={closingCopy.title} body={closingCopy.body} />
    </>
  );
}
