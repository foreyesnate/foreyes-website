import Link from "next/link";
import { flagships, hero, supporting, type HubFlagship } from "@/content/services/hub";
import { Illustration } from "@/components/ui/Art";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/** The hub's hero picture, with one small card per flagship floated over it. */
export function HubHeroVisual() {
  const [books, billing] = hero.chips;
  return (
    <div className="relative mx-auto max-w-[36rem] pb-6 pt-14 lg:mr-0">
      <Illustration name="handshake" panel="teal" priority />
      <HeroChip chip={books} className="left-3 top-0 sm:-left-5" tone="navy" />
      <HeroChip chip={billing} className="bottom-0 right-3 animate-float-slow sm:-right-4" tone="ink" />
    </div>
  );
}

function HeroChip({
  chip,
  className,
  tone,
}: {
  chip: (typeof hero.chips)[number];
  className?: string;
  tone: "navy" | "ink";
}) {
  return (
    <div
      className={cn(
        "absolute flex max-w-[17rem] items-center gap-3 rounded-2xl py-3 pl-3 pr-5 text-white shadow-lift ring-1 ring-white/15",
        tone === "navy" ? "bg-navy" : "bg-ink",
        className,
      )}
    >
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
          tone === "navy" ? "bg-white/15 text-white" : "bg-teal text-ink",
        )}
      >
        <Icon name={chip.icon} size={20} />
      </span>
      <span>
        <span className="block text-[0.75rem] text-white/75">{chip.label}</span>
        <span className="block font-display text-[0.9rem] font-semibold leading-tight">{chip.value}</span>
      </span>
    </div>
  );
}

/** Bookkeeping and Insurance Billing: first, together, large and equal. */
export function HubFlagships() {
  return (
    <Section tone="white" aria-labelledby="hub-flagships-title" className="overflow-hidden">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="hub-flagships-title"
            eyebrow={flagships.eyebrow}
            title={flagships.title}
            lede={flagships.lede}
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {flagships.items.map((item, i) => (
            <Reveal key={item.href} y={40} blur={false} delay={i * 0.12}>
              <FlagshipCard item={item} tone={i === 0 ? "navy" : "teal"} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FlagshipCard({ item, tone }: { item: HubFlagship; tone: "navy" | "teal" }) {
  const navy = tone === "navy";
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[2.5rem] p-7 sm:p-10",
        navy ? "bg-navy text-white" : "bg-teal text-ink",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "bg-dots absolute -right-10 -top-10 h-64 w-64 [mask-image:radial-gradient(closest-side,black,transparent)]",
          navy ? "text-white/10" : "text-ink/10",
        )}
      />
      <p className={cn("eyebrow relative flex items-center gap-2.5", navy ? "text-teal-200" : "text-ink")}>
        <span className={cn("grid h-9 w-9 place-items-center rounded-xl", navy ? "bg-white/10" : "bg-ink/10")}>
          <Icon name={item.icon} size={19} />
        </span>
        {item.label}
      </p>
      <h3 className="text-heading relative mt-6 max-w-md">{item.title}</h3>
      <p className={cn("relative mt-4 max-w-xl text-[1.0625rem] leading-relaxed", navy ? "text-white/85" : "text-ink/90")}>
        {item.body}
      </p>

      <ul className="relative mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {item.included.map((line) => (
          <li key={line} className={cn("flex gap-3", navy ? "text-white/90" : "text-ink/90")}>
            <Icon
              name="check"
              size={19}
              strokeWidth={2.6}
              className={cn("mt-1 shrink-0", navy ? "text-yellow" : "text-ink")}
            />
            {line}
          </li>
        ))}
      </ul>

      <dl className="relative mt-8 grid grid-cols-2 gap-3">
        {item.facts.map((fact) => (
          <div
            key={fact.value}
            className={cn(
              "flex flex-col-reverse justify-end rounded-2xl p-4 ring-1 ring-inset sm:p-5",
              navy ? "bg-white/10 ring-white/15" : "bg-white/35 ring-ink/10",
            )}
          >
            <dt className={cn("mt-1.5 text-[0.875rem] leading-snug", navy ? "text-white/75" : "text-ink/80")}>
              {fact.label}
            </dt>
            <dd className="font-display text-[clamp(1.5rem,1.2rem+1.2vw,2rem)] font-bold leading-none tracking-[-0.03em]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      <div
        className={cn(
          "relative mt-3 rounded-2xl p-4 ring-1 ring-inset sm:p-5",
          navy ? "bg-white/10 ring-white/15" : "bg-white/35 ring-ink/10",
        )}
      >
        <p className={cn("eyebrow", navy ? "text-teal-200" : "text-ink/75")}>{item.price.label}</p>
        {item.price.lines.map((line) => (
          <p key={line} className="mt-1.5 font-display font-semibold leading-snug">
            {line}
          </p>
        ))}
      </div>

      <div className="relative mt-auto pt-8">
        <Link
          href={item.href}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold transition-[background-color,transform] duration-300 hover:-translate-y-0.5",
            navy ? "bg-white text-ink hover:bg-yellow" : "bg-ink text-white hover:bg-navy-800",
          )}
        >
          {item.cta}
          <Icon name="arrowRight" size={18} />
        </Link>
      </div>
    </article>
  );
}

/** The three supporting services: after the flagships, grouped, visibly smaller. */
export function HubSupporting() {
  return (
    <Section tone="stone" aria-labelledby="hub-supporting-title">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="hub-supporting-title"
              size="heading"
              eyebrow={supporting.eyebrow}
              title={supporting.title}
              lede={supporting.lede}
            />
          </Reveal>
          <div>
            <Stagger as="ul" className="grid gap-4">
              {supporting.items.map((service) => (
                <StaggerItem as="li" key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex flex-col items-start gap-4 rounded-[1.75rem] bg-white p-6 shadow-soft transition-[transform,box-shadow] duration-500 ease-(--ease-focus) hover:-translate-y-1 hover:shadow-lift sm:flex-row sm:gap-5 sm:p-7"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-yellow group-hover:text-ink">
                      <Icon name={service.icon} size={24} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <h3 className="text-subheading">{service.label}</h3>
                      <p className="mt-1.5 text-ink-500">{service.body}</p>
                      <span className="mt-4 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-stone px-3 py-1 font-display text-[0.8125rem] font-semibold text-ink-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </span>
                    </span>
                    <Icon
                      name="arrowRight"
                      size={20}
                      className="mt-1 hidden shrink-0 text-navy transition-transform duration-300 group-hover:translate-x-1.5 sm:block"
                    />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <p className="mt-7 flex items-center gap-3 px-1 text-[0.975rem] text-ink-500">
                <span aria-hidden="true" className="h-px w-8 shrink-0 bg-stone-400" />
                {supporting.taxLine}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
