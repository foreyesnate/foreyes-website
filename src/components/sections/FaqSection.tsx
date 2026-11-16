import type { ReactNode } from "react";
import { TextLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion, type Faq } from "./FaqAccordion";

/** Structured data so answers can appear directly in search results. */
export function FaqJsonLd({ items }: { items: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** A page section: heading on the left, accordion on the right. */
export function FaqSection({
  id = "faqs",
  eyebrow = "FAQs",
  title,
  lede,
  items,
  tone = "stone",
  moreHref = "/faq",
  jsonLd = true,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  items: Faq[];
  tone?: "stone" | "white";
  moreHref?: string | null;
  jsonLd?: boolean;
}) {
  return (
    <Section tone={tone} aria-labelledby={`${id}-title`} id={id}>
      {jsonLd ? <FaqJsonLd items={items} /> : null}
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.3fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} lede={lede} />
            {moreHref ? (
              <TextLink href={moreHref} className="mt-8">
                More FAQs
              </TextLink>
            ) : null}
          </Reveal>
          <Reveal delay={0.1}>
            <FaqAccordion
              items={items}
              // On a white section the white rows would have no edge, so they
              // take the stone tint (as on the FAQ page) and open to white.
              className={
                tone === "white"
                  ? "[&>li]:bg-stone [&>li:has([aria-expanded=true])]:bg-white [&>li:not(:has([aria-expanded=true]))_button>span]:bg-white"
                  : undefined
              }
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
