import Image from "next/image";
import { Fragment } from "react";
import { site } from "@/content/site";
import {
  founderQuote,
  remote,
  story,
  teamTeaser,
  timeline,
  values,
  vision,
  why,
  whyForEyes,
} from "@/content/about";
import { team, type TeamMember } from "@/content/team";
import { Photo } from "@/components/ui/Art";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StickyColumn } from "@/components/ui/StickyColumn";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { AboutTimeline } from "@/components/graphics/AboutTimeline";
import { AboutTimeZones } from "@/components/graphics/AboutTimeZones";
import { cn } from "@/lib/cn";
import { TeamPortrait } from "./TeamPortrait";

const bySlug = (slug: string) => team.find((member) => member.slug === slug) as TeamMember;

type Tile =
  | { kind: "person"; slug: string; shape: "arch" | "circle" | "soft"; tall?: boolean }
  | { kind: "fact"; tone: "yellow" | "ink"; big: string; small: string };

// Three columns, read top to bottom. Leaders come first in each.
const mosaic: { offset: string; tiles: Tile[] }[] = [
  {
    offset: "",
    tiles: [
      { kind: "person", slug: "wade-weisz", shape: "arch", tall: true },
      { kind: "fact", tone: "yellow", big: String(site.founded), small: "Founded by an OD" },
      { kind: "person", slug: "laura-pittman", shape: "circle" },
    ],
  },
  {
    offset: "pt-10 sm:pt-14",
    tiles: [
      { kind: "person", slug: "nathan-taylor", shape: "circle" },
      { kind: "person", slug: "amanda-bennett", shape: "arch", tall: true },
      { kind: "person", slug: "mae-labongray", shape: "soft" },
    ],
  },
  {
    offset: "pt-4 sm:pt-6",
    tiles: [
      { kind: "person", slug: "richard-schisler", shape: "soft", tall: true },
      { kind: "person", slug: "esta-steenkamp", shape: "circle" },
      { kind: "fact", tone: "ink", big: "Only", small: "eyecare practices" },
    ],
  },
];

/** Hero visual: the team's faces in the site's lens and arch shapes. */
export function AboutHeroMosaic() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto lg:mr-0">
      <div
        aria-hidden="true"
        className="absolute -inset-x-2 bottom-8 top-12 rounded-[2.5rem] bg-white/70 shadow-soft sm:-inset-x-6 sm:bottom-10 sm:top-16 sm:rounded-[3rem]"
      />
      <Stagger className="relative grid grid-cols-3 gap-3 sm:gap-4" stagger={0.12}>
        {mosaic.map((column, c) => (
          <StaggerItem key={c} className={cn("grid content-start gap-3 sm:gap-4", column.offset)}>
            {column.tiles.map((tile, t) =>
              tile.kind === "person" ? (
                <div
                  key={tile.slug}
                  className="group transition-transform duration-500 ease-(--ease-focus) hover:-translate-y-1"
                >
                  <TeamPortrait
                    member={bySlug(tile.slug)}
                    shape={tile.shape}
                    zoomOnHover
                    preload={c === 0 && t === 0}
                    sizes="(min-width: 640px) 11rem, 30vw"
                    className={cn("shadow-soft", tile.tall ? "aspect-[4/5]" : "aspect-square")}
                  />
                </div>
              ) : (
                <div
                  key={tile.small}
                  className={cn(
                    "grid aspect-square place-content-center rounded-[2rem] p-3 text-center",
                    tile.tone === "yellow" ? "bg-yellow text-ink" : "bg-ink text-white",
                  )}
                >
                  <p className="tabular font-display text-[clamp(1.5rem,1rem+2.4vw,2.5rem)] font-bold leading-none tracking-[-0.04em]">
                    {tile.big}
                  </p>
                  <p
                    className={cn(
                      "mx-auto mt-1.5 max-w-[7.5rem] font-display text-[0.7rem] font-semibold leading-tight sm:text-sm",
                      tile.tone === "yellow" ? "text-ink/80" : "text-white/75",
                    )}
                  >
                    {tile.small}
                  </p>
                </div>
              ),
            )}
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

/** The founding story beside a short, scroll-drawn timeline. */
export function AboutStory() {
  return (
    <Section tone="white" aria-labelledby="story-title">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <StickyColumn>
            <Reveal>
              <SectionHeading id="story-title" eyebrow={story.eyebrow} title={story.title} />
              <div className="text-lede mt-7 grid max-w-xl gap-5 text-ink-500">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </StickyColumn>
          <Reveal delay={0.1} y={36} blur={false}>
            <AboutTimeline stops={timeline} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Wade's note in full, with his portrait and signature. */
export function AboutFounderQuote() {
  return (
    <Section tone="navy" aria-labelledby="founder-title" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute inset-0 text-white/[0.07] [mask-image:radial-gradient(60%_60%_at_85%_20%,black,transparent)]"
      />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal y={36} blur={false} className="relative mx-auto w-full max-w-[22rem] lg:max-w-none">
            <span
              aria-hidden="true"
              className="absolute -left-5 -top-5 h-36 w-36 rounded-full bg-yellow sm:-left-8 sm:-top-8 sm:h-44 sm:w-44"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full border-[10px] border-teal/60"
            />
            <Image
              src="/team/wade-weisz-portrait.jpg"
              alt="Wade Weisz, OD, founder of ForEyes Books & Billing"
              width={626}
              height={840}
              sizes="(min-width: 1024px) 28rem, 22rem"
              className="relative aspect-[3/4] w-full [border-radius:50%_50%_2.5rem_2.5rem/37.5%_37.5%_2.5rem_2.5rem] object-cover object-[50%_15%] shadow-float"
            />
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow tone="light">From the founder</Eyebrow>
              <h2 id="founder-title" className="text-heading mt-5">
                {founderQuote.heading}
              </h2>
            </Reveal>
            <figure className="mt-8">
              <blockquote>
                <Reveal delay={0.08}>
                  <p className="max-w-3xl font-display text-[clamp(1.5rem,1.1rem+1.7vw,2.375rem)] font-medium leading-[1.16] tracking-[-0.03em]">
                    “{founderQuote.opening.lead}{" "}
                    <span className="text-yellow">{founderQuote.opening.accent}</span>
                  </p>
                </Reveal>
                <Reveal delay={0.16} className="mt-8 grid max-w-2xl gap-5 text-lg text-white/80">
                  {founderQuote.paragraphs.map((paragraph, i) => (
                    <p key={paragraph}>
                      {paragraph}
                      {i === founderQuote.paragraphs.length - 1 ? "”" : null}
                    </p>
                  ))}
                </Reveal>
              </blockquote>
              <Reveal delay={0.22}>
                <figcaption className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/15 pt-7">
                  <Image
                    src="/team/wade-weisz-signature.png"
                    alt=""
                    width={294}
                    height={61}
                    className="h-11 w-auto brightness-0 invert"
                  />
                  <span>
                    <span className="block font-display text-lg font-semibold">{founderQuote.name}</span>
                    <span className="block text-white/70">{founderQuote.role}</span>
                  </span>
                </figcaption>
              </Reveal>
            </figure>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** The vision statement on a teal panel, with the five values as a list. */
export function AboutVisionValues() {
  return (
    <Section tone="stone" aria-labelledby="values-title">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <StickyColumn>
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-teal p-8 text-ink sm:p-11">
                <div
                  aria-hidden="true"
                  className="bg-dots absolute inset-0 text-ink/[0.08] [mask-image:radial-gradient(80%_70%_at_100%_0%,black,transparent)]"
                />
                <div className="relative">
                  <h2 id="vision-title" className="eyebrow inline-flex items-center gap-2.5 !leading-normal">
                    <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-yellow ring-[3px] ring-yellow/30" />
                    {vision.heading}
                  </h2>
                  <p className="mt-6 font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
                    {vision.statement}
                  </p>
                  <p className="mt-9 font-display text-sm font-semibold text-ink">{vision.proofLabel}</p>
                  <ul className="mt-4 grid gap-3">
                    {vision.proof.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-medium">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-white">
                          <Icon name="check" size={14} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </StickyColumn>

          <div>
            <Reveal>
              <SectionHeading id="values-title" eyebrow="What guides us" title="Guided by 5 Core Values" />
            </Reveal>
            <Stagger as="ol" className="mt-10 border-t border-stone-300">
              {values.map((value, i) => (
                <StaggerItem as="li" key={value.title}>
                  <div className="group grid grid-cols-[auto_1fr] gap-x-5 border-b border-stone-300 py-7 sm:grid-cols-[auto_auto_1fr] sm:gap-x-7">
                    <span className="tabular hidden pt-3.5 font-display text-sm font-semibold text-ink-400 sm:block">
                      0{i + 1}
                    </span>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-navy shadow-soft transition-colors duration-300 group-hover:bg-yellow group-hover:text-ink">
                      <Icon name={value.icon} size={26} />
                    </span>
                    <div>
                      <h3 className="text-subheading">{value.title}</h3>
                      <p className="mt-2 max-w-xl text-ink-500">{value.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** Remote and nationwide, with our hours laid over each time zone. */
export function AboutRemote() {
  return (
    <SplitFeature
      id="remote-title"
      tone="white"
      eyebrow={remote.eyebrow}
      title={remote.title}
      body={remote.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      visual={
        <AboutTimeZones hours={site.hours} tools={["Client portal", "Bill.com", "Gusto"]} />
      }
    />
  );
}

/** A short pointer to the team page, with everyone's face in a row. */
export function AboutTeamTeaser() {
  return (
    <Section tone="teal" aria-labelledby="team-teaser-title" spacing="tight" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.07] [mask-image:linear-gradient(to_left,black,transparent_60%)]"
      />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2.5 text-ink">
              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-yellow ring-[3px] ring-yellow/30" />
              {teamTeaser.eyebrow}
            </p>
            <h2 id="team-teaser-title" className="text-title mt-5 max-w-2xl">
              {teamTeaser.title}
            </h2>
            <p className="text-lede mt-6 max-w-xl text-ink/85">{teamTeaser.body}</p>
            <Button href="/about-us/our-team" variant="ink" size="lg" className="mt-9">
              {teamTeaser.cta}
            </Button>
          </Reveal>
          <Reveal delay={0.12} blur={false}>
            <ul
              className="mx-auto grid max-w-[30rem] grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-5 lg:mr-0"
              aria-label="The ForEyes team"
            >
              {team.map((member) => (
                <li key={member.slug} className="group text-center">
                  <TeamPortrait
                    member={member}
                    shape="circle"
                    decorative
                    zoomOnHover
                    sizes="7rem"
                    className="aspect-square w-full ring-4 ring-white/35 transition-transform duration-500 ease-(--ease-focus) group-hover:-translate-y-1.5"
                  />
                  <p className="mt-2.5 font-display text-sm font-semibold">{member.firstName}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Why an eyecare-only firm, beside the room our clients work in. */
export function AboutWhy() {
  return (
    <SplitFeature
      id="why-title"
      tone="white"
      flip
      eyebrow={why.eyebrow}
      title={why.title}
      body={<p>{why.lede}</p>}
      bullets={whyForEyes.map((reason) => (
        <Fragment key={reason.title}>
          <strong className="font-display font-semibold text-ink">{reason.title}.</strong>{" "}
          {reason.body}
        </Fragment>
      ))}
      visual={<Photo name="exam-lane" ratio="4/3" />}
    />
  );
}
