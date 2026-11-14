import type { AudienceProof } from "@/content/audiences/types";
import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";

type FounderProof = Extract<AudienceProof, { kind: "founder" }>;

/**
 * Proof for a page no client quote fits: the founder's own words, laid out
 * like the testimonial block so the two read as one family.
 */
export function AudienceFounderQuote({ proof }: { proof: FounderProof }) {
  const initials = proof.name
    .replace(/,.*$/, "")
    .split(" ")
    .map((part) => part[0])
    .join("");
  return (
    <Section tone="white" aria-labelledby="founder-proof-title">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="founder-proof-title" eyebrow={proof.eyebrow} title={proof.title} lede={proof.lede} />
            <TextLink href="/about-us" className="mt-8">
              More About Us
            </TextLink>
          </Reveal>
          <Reveal delay={0.1} y={36}>
            <figure className="relative flex h-full flex-col rounded-[2.5rem] bg-stone p-8 sm:p-12">
              <Icon name="quote" size={56} className="text-yellow" />
              <blockquote className="mt-6">
                <p className="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.025em]">
                  “{proof.quote}{" "}
                  <span className="underline decoration-yellow decoration-[0.09em] underline-offset-[0.16em]">
                    {proof.quoteHighlight}
                  </span>
                </p>
                <p className="mt-6 max-w-2xl text-ink-500">{proof.followUp}”</p>
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 pt-10">
                <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-teal font-display text-xl font-bold text-ink">
                  {initials}
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold">{proof.name}</span>
                  <span className="block text-ink-500">{proof.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
