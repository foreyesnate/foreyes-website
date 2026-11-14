import Link from "next/link";
import type { AudienceContent, AudienceServiceCard } from "@/content/audiences/types";
import { taxLine } from "@/content/audiences";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { serviceInfo } from "./lookup";

function Flagship({ card, tone }: { card: AudienceServiceCard; tone: "navy" | "teal" }) {
  const service = serviceInfo(card.service);
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
          <Icon name={service.icon} size={19} />
        </span>
        {service.label}
      </p>
      <h3 className="text-heading relative mt-6 max-w-md">{card.headline}</h3>
      <p className={cn("relative mt-4 max-w-xl text-[1.0625rem]", navy ? "text-white/80" : "text-ink/85")}>{card.body}</p>
      {card.points?.length ? (
        <ul className={cn("relative mt-6 grid gap-3", navy ? "text-white/90" : "text-ink")}>
          {card.points.map((point) => (
            <li key={point} className="flex gap-3">
              <Icon name="check" size={20} strokeWidth={2.6} className={cn("mt-1 shrink-0", navy ? "text-yellow" : "text-ink")} />
              {point}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="relative mt-auto pt-9">
        <Link
          href={service.href}
          className={cn(
            "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold transition-[background-color,transform] duration-300 hover:-translate-y-0.5",
            navy ? "bg-white text-ink hover:bg-yellow" : "bg-ink text-white hover:bg-navy-800",
          )}
        >
          {card.cta}
          <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

/**
 * How ForEyes helps this audience, service by service: the two flagships
 * large and first, the three supporting services smaller beneath them.
 */
export function AudienceServices({ services }: { services: AudienceContent["services"] }) {
  const [books, billing] = services.flagships;
  return (
    <Section tone="stone" aria-labelledby={services.id} className="overflow-hidden">
      <Container size="wide">
        <Reveal>
          <SectionHeading id={services.id} eyebrow={services.eyebrow} title={services.title} lede={services.lede} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal y={40} blur={false}>
            <Flagship card={books} tone="navy" />
          </Reveal>
          <Reveal y={40} blur={false} delay={0.12}>
            <Flagship card={billing} tone="teal" />
          </Reveal>
        </div>

        <Stagger as="ul" className="mt-6 grid gap-5 md:grid-cols-3">
          {services.supporting.map((card) => {
            const service = serviceInfo(card.service);
            return (
              <StaggerItem as="li" key={card.service}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-soft transition-[transform,box-shadow] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 hover:shadow-lift sm:p-7"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-yellow group-hover:text-ink">
                      <Icon name={service.icon} size={24} />
                    </span>
                    <span className="eyebrow text-teal-700">{service.label}</span>
                  </span>
                  <h3 className="text-subheading mt-6">{card.headline}</h3>
                  <p className="mt-3 text-ink-500">{card.body}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 font-display text-[0.95rem] font-semibold text-navy">
                    {card.cta}
                    <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-8">
          <p className="flex items-start gap-3 text-ink-500 sm:items-center">
            <span aria-hidden="true" className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-navy shadow-soft sm:mt-0">
              <Icon name="ledger" size={15} />
            </span>
            {taxLine}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
