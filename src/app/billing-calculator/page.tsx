import type { Metadata } from "next";
import {
  billingCalculatorFaqs,
  closingCopy,
  faqCopy,
  heroCopy,
  meta,
  path,
} from "@/content/billing-calculator";
import { TextLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { BillingCalculator } from "@/components/pages/billing-calculator/BillingCalculator";
import {
  BillingFixes,
  BillingProofQuote,
  BillingReadNext,
  HeroVisual,
  HowWeWorkedItOut,
} from "@/components/pages/billing-calculator/BillingCalculatorSections";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

export default function BillingCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow={heroCopy.eyebrow}
        title={heroCopy.title}
        highlight={heroCopy.highlight}
        lede={heroCopy.lede}
        note={heroCopy.note}
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Billing Calculator" }]}
        secondaryCta={{ label: heroCopy.cta, href: "#calculator" }}
        visual={<HeroVisual />}
      />
      <BillingCalculator />
      <HowWeWorkedItOut />
      <BillingFixes />
      <BillingProofQuote />
      <FaqSection
        id="calculator-faqs"
        tone="stone"
        eyebrow={faqCopy.eyebrow}
        title={faqCopy.title}
        lede={faqCopy.lede}
        items={billingCalculatorFaqs.map((item) => ({
          question: item.question,
          answer: item.answer,
          rich: item.link ? (
            <>
              <p>{item.answer}</p>
              <TextLink href={item.link.href} className="mt-1 py-3 text-[0.95rem]">
                {item.link.label}
              </TextLink>
            </>
          ) : undefined,
        }))}
      />
      <BillingReadNext />
      <CtaBand title={closingCopy.title} body={closingCopy.body} />
    </>
  );
}
