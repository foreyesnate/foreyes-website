import type { Metadata } from "next";
import { privacyPolicy, type PrivacyBlock } from "@/content/privacy";
import { Container, Section } from "@/components/ui/Layout";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The ForEyes Books & Billing privacy policy: what personal information this website collects, how it is used and shared, cookies, and your right to deletion.",
  alternates: { canonical: "/privacy-policy" },
};

function Block({ block }: { block: PrivacyBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "email":
      return (
        <p>
          {block.label} <a href={`mailto:${block.address}`}>{block.address}</a>
        </p>
      );
  }
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={privacyPolicy.title}
        crumbs={[{ label: privacyPolicy.title }]}
        primaryCta={null}
        note={privacyPolicy.updated}
      />

      <Section tone="white" aria-label={privacyPolicy.title}>
        <Container size="narrow">
          <article className="prose-foreyes">
            {privacyPolicy.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={section.heading ? `${section.id}-title` : undefined}
                className="[&>*+*]:mt-[1.25em]"
              >
                {section.heading ? <h2 id={`${section.id}-title`}>{section.heading}</h2> : null}
                {section.blocks.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </section>
            ))}
            <p className="border-t border-stone-300 pt-6 text-[1rem] text-ink-500">{privacyPolicy.updated}</p>
          </article>
        </Container>
      </Section>
    </>
  );
}
