import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Illustration } from "@/components/ui/Art";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { cn } from "@/lib/cn";
import type {
  SupportingAside,
  SupportingRoleCard,
  SupportingServiceContent,
} from "./types";

/**
 * The page template shared by the three supporting services. Deliberately
 * lighter than the flagship pages: one animated graphic, two pictures, and a
 * band that points back to Bookkeeping and Insurance Billing.
 *
 * `graphic` is the page's own animated picture, shown in the hero.
 */
export function SupportingServicePage({
  content,
  graphic,
}: {
  content: SupportingServiceContent;
  graphic: ReactNode;
}) {
  const { hero, intro, handles, roles, process, flagships, faqs, pricing, cta } = content;
  return (
    <>
      <PageHero
        tone="stone"
        eyebrow={hero.eyebrow}
        title={hero.title}
        highlight={hero.highlight}
        lede={hero.lede}
        note={hero.note}
        crumbs={[{ label: "Services", href: "/services" }, { label: content.label }]}
        // Only where the pricing calculator can price the service.
        secondaryCta={pricing ? { label: "Estimate Your Price", href: site.pricingHref } : undefined}
        visual={graphic}
      />

      <SplitFeature
        id="intro-title"
        tone="white"
        flip
        eyebrow={intro.eyebrow}
        title={intro.title}
        body={intro.body.map((text) => (
          <p key={text}>{text}</p>
        ))}
        bullets={intro.bullets}
        visual={
          <div className="relative mx-auto max-w-[34rem] pb-6">
            <Illustration name={intro.art} panel={intro.panel} />
            <div className="absolute bottom-0 right-4 flex items-center gap-3 rounded-2xl bg-ink py-3 pl-3 pr-5 text-white shadow-lift ring-1 ring-white/15 sm:right-8">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-yellow text-ink">
                <Icon name={intro.chip.icon} size={20} />
              </span>
              <span>
                <span className="block text-[0.75rem] text-white/70">{intro.chip.label}</span>
                <span className="block font-display text-[0.95rem] font-semibold leading-tight">
                  {intro.chip.value}
                </span>
              </span>
            </div>
          </div>
        }
      />

      <FeatureGrid
        id="handles-title"
        tone="stone"
        eyebrow={handles.eyebrow}
        title={handles.title}
        lede={handles.lede}
        columns={handles.columns}
        features={handles.features.map((feature) => ({
          icon: feature.icon,
          title: feature.title,
          body: <p>{feature.body}</p>,
        }))}
      />

      <Section tone="navy" aria-labelledby="roles-title" className="overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-dots pointer-events-none absolute inset-0 text-white/[0.07] [mask-image:radial-gradient(60%_70%_at_85%_15%,black,transparent)]"
        />
        <Container size="wide" className="relative">
          <Reveal>
            <SectionHeading
              id="roles-title"
              tone="light"
              eyebrow={roles.eyebrow}
              title={roles.title}
              lede={roles.lede}
            />
          </Reveal>
          <div className="relative mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
            <Reveal y={36} blur={false}>
              <RoleCard card={roles.cards[0]} lead />
            </Reveal>
            <span
              aria-hidden="true"
              className="relative z-10 -my-9 mx-auto grid h-14 w-14 place-items-center rounded-full bg-yellow font-display text-[0.95rem] font-bold text-ink shadow-lift ring-[6px] ring-navy md:absolute md:left-1/2 md:top-1/2 md:my-0 md:-translate-x-1/2 md:-translate-y-1/2"
            >
              {roles.joiner}
            </span>
            <Reveal y={36} blur={false} delay={0.12}>
              <RoleCard card={roles.cards[1]} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <ProcessSteps
        id="process-title"
        tone="white"
        eyebrow={process.eyebrow}
        title={process.title}
        lede={process.lede}
        steps={process.steps}
        aside={<AsideCard aside={process.aside} />}
      />

      <Section tone="teal" spacing="tight" aria-labelledby="flagships-tie-title" className="overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-dots pointer-events-none absolute inset-y-0 right-0 w-1/2 text-ink/10 [mask-image:linear-gradient(to_left,black,transparent)]"
        />
        <Container size="wide" className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-5 flex items-center gap-2.5 text-ink">
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-ink ring-[3px] ring-ink/20" />
                {flagships.eyebrow}
              </p>
              <h2 id="flagships-tie-title" className="text-title">
                {flagships.title}
              </h2>
              <div className="mt-6 grid max-w-2xl gap-4 text-[1.0625rem] leading-relaxed text-ink/90 sm:text-lg">
                {flagships.body.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {flagships.links.map((link) => (
                  <Button key={link.href} href={link.href} variant="ink">
                    {link.label}
                  </Button>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Illustration
                name={flagships.art}
                panel="white"
                sizes="(min-width: 640px) 21rem, 19rem"
                // The process drawings have a hand reaching in from the right:
                // no right padding, so the sleeve meets the edge of the card.
                className={cn(
                  "mx-auto w-full max-w-[26rem] shadow-lift lg:mr-0",
                  flagships.art.startsWith("step-") && "pr-0 sm:pr-0",
                )}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <FaqSection
        title={faqs.title}
        items={faqs.items.map((item) => ({
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

      {pricing ? <PricingTeaser title={pricing.title} body={pricing.body} /> : null}

      <RelatedServices current={content.path} tone={pricing ? "stone" : "white"} />

      <CtaBand title={cta.title} body={cta.body} />
    </>
  );
}

/** One side of the "who does what" band. The lead card is the reader's side. */
function RoleCard({ card, lead = false }: { card: SupportingRoleCard; lead?: boolean }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[2rem] p-7 sm:p-10",
        lead ? "bg-white text-ink shadow-float" : "bg-white/[0.08] text-white ring-1 ring-inset ring-white/15",
      )}
    >
      <p
        className={cn(
          "eyebrow inline-flex self-start rounded-full px-3.5 py-1.5",
          lead ? "bg-yellow text-ink" : "bg-ink/30 text-white",
        )}
      >
        {card.label}
      </p>
      <h3 className="text-heading mt-6">{card.title}</h3>
      <ul className="mt-6 grid gap-3.5 text-[1.0625rem]">
        {card.items.map((item) => (
          <li key={item} className="flex gap-3.5">
            <span
              className={cn(
                "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
                lead ? "bg-teal text-ink" : "bg-yellow text-ink",
              )}
            >
              <Icon name="check" size={14} strokeWidth={3} />
            </span>
            <span className={lead ? "text-ink-700" : "text-white/90"}>{item}</span>
          </li>
        ))}
      </ul>
      {card.note ? (
        <p
          className={cn(
            "mt-auto flex items-center gap-3 pt-8 font-display text-[0.975rem] font-semibold",
            lead ? "text-navy" : "text-white",
          )}
        >
          <Icon name="shield" size={20} className="shrink-0" />
          {card.note}
        </p>
      ) : null}
    </article>
  );
}

/** The card beside the process steps: the named platform, or the person who leads the work. */
function AsideCard({ aside }: { aside: SupportingAside }) {
  if (aside.kind === "lead") {
    return (
      <figure className="max-w-md rounded-[1.75rem] bg-stone p-7 sm:p-8">
        <blockquote className="font-display text-[1.1875rem] font-medium leading-snug tracking-[-0.015em]">
          <p>“{aside.quote}”</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4 border-t-2 border-stone-300 pt-6">
          <Image
            src={aside.photo}
            alt=""
            width={128}
            height={128}
            sizes="4rem"
            className="h-16 w-16 rounded-2xl object-cover object-[50%_20%]"
          />
          <span>
            <span className="block font-display font-semibold">{aside.name}</span>
            <span className="block text-[0.925rem] text-ink-500">{aside.role}</span>
          </span>
        </figcaption>
        <TextLink href={aside.link.href} className="mt-3 py-3 text-[0.95rem]">
          {aside.link.label}
        </TextLink>
      </figure>
    );
  }
  return (
    <div className="relative max-w-md overflow-hidden rounded-[1.75rem] bg-ink p-7 text-white sm:p-8">
      <div
        aria-hidden="true"
        className="bg-dots absolute -right-8 -top-8 h-40 w-40 text-white/15 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <p className="eyebrow text-teal-200">Runs on</p>
      <p className="mt-2 font-display text-[clamp(2.25rem,1.6rem+2.4vw,3rem)] font-bold leading-none tracking-[-0.035em]">
        {aside.name}
      </p>
      <p className="mt-5 font-display text-[1.1875rem] font-medium leading-snug tracking-[-0.015em] text-yellow">
        {aside.quote}
      </p>
      <p className="mt-3 text-white/75">{aside.body}</p>
      <ul className="mt-6 grid gap-2.5 border-t border-white/15 pt-6 text-[0.975rem] text-white/90">
        {aside.points.map((point) => (
          <li key={point} className="flex gap-3">
            <Icon name="check" size={18} strokeWidth={2.6} className="mt-0.5 shrink-0 text-yellow" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
