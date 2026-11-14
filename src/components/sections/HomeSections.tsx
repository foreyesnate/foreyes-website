import Link from "next/link";
import { audiences, supportingServices } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";
import Image from "next/image";
import { illustrations, type IllustrationName } from "@/content/art";
import { site } from "@/content/site";
import { Illustration } from "@/components/ui/Art";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const serviceArt: Record<string, IllustrationName> = {
  "/services/accounts-payable": "spot-accounts-payable",
  "/services/payroll": "spot-payroll",
  "/services/practice-consulting": "spot-consulting",
};

function Spot({ name, className }: { name: IllustrationName; className?: string }) {
  const art = illustrations[name];
  return (
    <Image
      src={art.src}
      width={art.width}
      height={art.height}
      alt=""
      sizes="(min-width: 640px) 14rem, 60vw"
      className={className}
    />
  );
}

/** The three supporting services: present, but visibly smaller than the flagships. */
export function MoreServices({
  title = "Already on our books? We can also run your bills and your payroll.",
  lede = "Three services our bookkeeping and billing clients add when they want more off their plate.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <Section tone="stone" aria-labelledby="more-services-title" spacing="tight">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeading id="more-services-title" size="heading" eyebrow="Also from ForEyes" title={title} lede={lede} />
            <TextLink href="/services" className="mt-8">
              See All Services
            </TextLink>
          </Reveal>
          <Stagger as="ul" className="grid gap-4 sm:grid-cols-3">
            {supportingServices.map((service) => (
              <StaggerItem as="li" key={service.href}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-[1.75rem] bg-white p-3 shadow-soft transition-[transform,box-shadow] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className="grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.35rem] bg-navy-50 p-5 transition-colors duration-500 group-hover:bg-teal-100">
                    <Spot
                      name={serviceArt[service.href]}
                      className="max-h-full w-auto transition-transform duration-700 ease-(--ease-focus) group-hover:scale-[1.06]"
                    />
                  </span>
                  <h3 className="text-subheading mt-5 px-3">{service.label}</h3>
                  <p className="mt-2 px-3 text-ink-500">{service.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 px-3 pb-3 pt-6 font-display text-sm font-semibold text-navy">
                    Learn more
                    <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}

const reasons: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "eye",
    title: "Built for Eyecare",
    body: "We don’t “also work with eyecare professionals.” We only work with them, and that industry expertise shows.",
  },
  {
    icon: "users",
    title: "Backed by Your Peers",
    body: "Endorsed by ODs on Finance and trusted by TSO, ALLDocs, and Vision Source practices. Our reputation is hard-earned and referral-built.",
  },
  {
    icon: "spark",
    title: "Less Work, Smarter Spend",
    body: "We replace in-house work with systems that save you time, reduce overhead, and grow with your practice.",
  },
];

export function WhyForEyes() {
  return (
    <Section tone="white" aria-labelledby="why-title">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="why-title" eyebrow="Why ForEyes" title="An OD built this, for ODs." lede="Wade Weisz, OD, spent 25+ years in the owner’s seat. He started ForEyes because the financial help on offer didn’t understand how an eyecare practice makes money." />
            <TextLink href="/about-us" className="mt-8">
              More About Us
            </TextLink>
          </Reveal>
          <Reveal delay={0.12} y={36} blur={false}>
            <Illustration name="counter-ledger" panel="teal" />
          </Reveal>
        </div>
        <Stagger as="ul" className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <StaggerItem as="li" key={reason.title}>
              <div className="relative h-full rounded-[1.75rem] bg-stone p-7 sm:p-8">
                <span className="tabular absolute right-7 top-7 font-display text-sm font-semibold text-ink-400">
                  0{i + 1}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-navy shadow-soft">
                  <Icon name={reason.icon} size={26} />
                </span>
                <h3 className="text-subheading mt-7">{reason.title}</h3>
                <p className="mt-3 text-ink-500">{reason.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

const audienceArt: Record<string, { art: IllustrationName; tint: string }> = {
  "/who-we-serve/optometrists": { art: "optometrist-exam-lane", tint: "bg-navy-100" },
  "/who-we-serve/startups": { art: "startup-frames-board", tint: "bg-yellow-100" },
  "/who-we-serve/multi-location-practices": { art: "multi-location", tint: "bg-teal-100" },
};

export function Audiences() {
  return (
    <Section tone="stone" aria-labelledby="audiences-title">
      <Container size="wide">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeading
              id="audiences-title"
              eyebrow="Who we serve"
              title="For Eyecare Pros Like You"
              lede="We partner with independent optometry and eyecare practices at every stage, from first-time owners building a solid financial foundation to multi-location groups that need one clear view."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink href="/who-we-serve">Who We Serve</TextLink>
          </Reveal>
        </div>
        <Stagger as="ul" className="mt-14 grid gap-5 md:grid-cols-3">
          {audiences.map((audience) => {
            const look = audienceArt[audience.href];
            return (
              <StaggerItem as="li" key={audience.href}>
                <Link
                  href={audience.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft transition-[transform,box-shadow] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem] p-6 ${look.tint}`}>
                    <span aria-hidden="true" className="bg-dots absolute inset-0 text-ink/[0.07] [mask-image:radial-gradient(closest-side,transparent_45%,black)]" />
                    <Spot
                      name={look.art}
                      className="relative max-h-full w-auto transition-transform duration-700 ease-(--ease-focus) group-hover:scale-[1.05]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5 pt-6">
                    <h3 className="text-heading">{audience.label}</h3>
                    <p className="mt-3 text-ink-500">{audience.description}</p>
                    <span className="mt-auto flex items-center gap-2 pt-6 font-display font-semibold text-navy">
                      See how we help
                      <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}

/** A slow clip of a dispensary at opening time, carrying the remote/nationwide message. */
export function NationwideBand() {
  return (
    <section aria-labelledby="nationwide-title" className="bg-stone px-3 pb-20 sm:px-5 sm:pb-28">
      <Reveal blur={false} y={40}>
        <LoopVideo name="dispensary" ratio="auto" className="mx-auto min-h-[30rem] max-w-[88rem] sm:min-h-[34rem]">
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5 sm:bg-gradient-to-r sm:from-ink sm:via-ink/70 sm:to-transparent" />
          <div className="relative flex h-full min-h-[30rem] flex-col justify-end p-8 text-white sm:min-h-[34rem] sm:max-w-2xl sm:justify-center sm:p-14">
            <Eyebrow tone="light">Wherever you practice</Eyebrow>
            <h2 id="nationwide-title" className="text-title mt-5">
              Remote, Nationwide Assistance
            </h2>
            <p className="text-lede mt-5 text-white/85">
              Our fully remote team works with eyecare practices across the
              country. Location won’t limit the quality or speed of support
              you receive.
            </p>
            <div className="mt-8">
              <Button href={site.bookingHref} size="lg">
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </LoopVideo>
      </Reveal>
    </section>
  );
}

/** Wade's note, in his own words, beside his portrait. */
export function FounderNote() {
  return (
    <Section tone="navy" aria-labelledby="founder-title" className="overflow-hidden">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 text-white/[0.07] [mask-image:radial-gradient(60%_60%_at_80%_30%,black,transparent)]" />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal blur={false} y={32} className="mx-auto w-full max-w-[17rem] lg:mx-0 lg:max-w-[21rem]">
            <figure className="relative">
              <div className="overflow-hidden rounded-[2.5rem] bg-navy-800 shadow-float">
                <Image
                  src="/team/wade-weisz-portrait.jpg"
                  alt="Wade Weisz, OD, founder of ForEyes Books & Billing"
                  width={626}
                  height={840}
                  sizes="(min-width: 1024px) 21rem, 17rem"
                  className="aspect-[3/4] h-auto w-full scale-[1.04] object-cover"
                />
              </div>
              <figcaption className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full bg-yellow px-5 py-2.5 font-display text-sm font-semibold text-ink shadow-lift">
                Wade Weisz, OD · Founder
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow tone="light">A word from our founder</Eyebrow>
              <h2 id="founder-title" className="sr-only">
                A word from Wade Weisz, OD, founder
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-7 font-display text-[clamp(1.5rem,1.05rem+2vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.03em]">
                <p>
                  “After more than 25 years as a practicing OD and managing
                  multiple locations, I learned firsthand how critical it is to
                  have accurate, timely financial data,{" "}
                  <span className="text-yellow">and how often that’s missing in the eyecare profession.</span>”
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2} className="mt-9 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-lg text-white/75">
                “I’ve lived your challenges and built this company to solve
                them, with accuracy you can trust and support that feels like
                part of your team.”
              </p>
              <Button href="/about-us" variant="light">
                More About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

const tools = [
  {
    title: "Pricing Calculator",
    body: "Get a clear, upfront estimate of what working with us could cost. It takes a few minutes.",
    cta: "Calculate Your Price",
    href: "/pricing-calculator",
    art: "spot-dashboard" as IllustrationName,
  },
  {
    title: "Frequently Asked Questions",
    body: "From onboarding to ongoing support, straight answers before you book a call.",
    cta: "Get Answers",
    href: "/resources/faq",
    art: "all-caught-up" as IllustrationName,
  },
];

export function Tools() {
  return (
    <Section tone="white" aria-labelledby="tools-title" spacing="tight">
      <Container size="wide">
        <Reveal>
          <SectionHeading id="tools-title" size="heading" eyebrow="Before you call" title="Tools That Take the Guesswork Out" />
        </Reveal>
        <Stagger as="ul" className="mt-10 grid gap-5 md:grid-cols-2">
          {tools.map((tool) => (
            <StaggerItem as="li" key={tool.href}>
              <Link
                href={tool.href}
                className="group flex h-full items-start gap-6 rounded-[2.5rem] border-2 border-stone-200 bg-stone p-7 transition-[border-color,background-color,transform] duration-500 ease-(--ease-focus) hover:-translate-y-1 hover:border-navy hover:bg-white sm:p-9"
              >
                <span className="grid h-28 w-28 shrink-0 place-items-center rounded-3xl bg-white p-3 shadow-soft sm:h-36 sm:w-36">
                  <Spot
                    name={tool.art}
                    className="max-h-full w-auto transition-transform duration-700 ease-(--ease-focus) group-hover:scale-[1.07]"
                  />
                </span>
                <span>
                  <h3 className="text-subheading">{tool.title}</h3>
                  <p className="mt-2 text-ink-500">{tool.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display font-semibold text-navy">
                    {tool.cta}
                    <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
