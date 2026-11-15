import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Illustration } from "@/components/ui/Art";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { BlogTeaser } from "@/components/pages/blog/BlogTeaser";
import { resourceCards } from "@/components/pages/blog/content";
import { ResourceGraphic } from "@/components/pages/blog/ResourceGraphics";

export const metadata: Metadata = {
  title: "Resources for Optometry Practice Owners",
  description:
    "Articles for eyecare practice owners, straight answers to common questions, and a pricing calculator for bookkeeping, insurance billing, payroll, and bill pay.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Get answers"
        highlight="before you call."
        lede="Three places to start, all open to anyone. Read articles written for practice owners, get straight answers to the questions ODs ask most, or price our services for a practice your size."
        crumbs={[{ label: "Resources" }]}
        secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
        visual={
          <Illustration
            name="tidy-desk"
            panel="white"
            priority
            className="mx-auto max-w-[36rem] shadow-float lg:mr-0"
          />
        }
      />

      <Section tone="white" aria-labelledby="resources-title">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              id="resources-title"
              eyebrow="What you'll find here"
              title="Read, ask, or run the numbers."
              lede="Pick the one that fits the question you have today."
            />
          </Reveal>
          <Stagger as="ul" className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((card, index) => (
              <StaggerItem
                as="li"
                key={card.key}
                className={index === resourceCards.length - 1 ? "md:max-lg:col-span-2" : undefined}
              >
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-[2.5rem] bg-stone p-3 transition-[transform,box-shadow,background-color] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 hover:bg-white hover:shadow-lift"
                >
                  <ResourceGraphic kind={card.key} />
                  <span className="flex flex-1 flex-col px-5 pb-6 pt-7 sm:px-6">
                    <span className="eyebrow text-teal-700">{card.eyebrow}</span>
                    <h3 className="text-heading mt-3">{card.title}</h3>
                    <p className="mt-4 text-ink-500">{card.body}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-7 font-display font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-[6px] group-hover:decoration-4">
                      {card.cta}
                      <Icon
                        name="arrowRight"
                        size={18}
                        className="transition-transform duration-300 ease-(--ease-focus) group-hover:translate-x-1.5"
                      />
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="navy" spacing="tight" aria-labelledby="resources-ask-title" className="overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-dots pointer-events-none absolute left-0 top-0 h-64 w-96 text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
        />
        <Container size="wide" className="relative">
          <div className="grid grid-cols-1 items-center gap-x-14 gap-y-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <SectionHeading
                id="resources-ask-title"
                size="heading"
                tone="light"
                eyebrow="Still looking?"
                title="Some questions are quicker to ask a person."
                lede={`Call or email us. We answer ${site.hours}.`}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_minmax(0,1fr)]">
                <li>
                  <a
                    href={site.phone.href}
                    className="group flex h-full items-center gap-4 rounded-[1.75rem] bg-white/[0.08] p-5 ring-1 ring-inset ring-white/15 transition-colors duration-300 hover:bg-white/[0.14]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow text-ink">
                      <Icon name="phone" size={22} />
                    </span>
                    <span>
                      <span className="block text-[0.875rem] text-white/70">Call</span>
                      <span className="tabular block whitespace-nowrap font-display text-lg font-semibold">{site.phone.display}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex h-full items-center gap-4 rounded-[1.75rem] bg-white/[0.08] p-5 ring-1 ring-inset ring-white/15 transition-colors duration-300 hover:bg-white/[0.14]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-200 text-ink">
                      <Icon name="mail" size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.875rem] text-white/70">Email</span>
                      <span className="block font-display text-[1rem] font-semibold leading-snug [overflow-wrap:anywhere]">{site.email}</span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <Button href="/contact#message" variant="light" arrow>
                  Send a Message
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <BlogTeaser eyebrow="Latest from the blog" />

      <CtaBand />
    </>
  );
}
