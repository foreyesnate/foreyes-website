import Link from "next/link";
import type { AudienceHubCard } from "@/content/audiences/types";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { audienceInfo, serviceInfo } from "./lookup";

const toneClass = {
  navy: "bg-navy text-white",
  ink: "bg-ink text-white",
  teal: "bg-teal text-ink",
} as const;

/**
 * The hub's three audience cards. Each is a full-width panel: who it is for
 * and what we do on the left, what changes and which services on the right.
 */
export function AudienceHubCards({
  id,
  eyebrow,
  title,
  lede,
  cards,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  cards: AudienceHubCard[];
}) {
  return (
    <Section tone="white" aria-labelledby={`${id}-title`} id={id}>
      <Container size="wide">
        <Reveal>
          <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} lede={lede} />
        </Reveal>

        <ul className="mt-14 grid gap-6">
          {cards.map((card, i) => {
            const audience = audienceInfo(card.slug);
            const teal = audience.tone === "teal";
            return (
              <Reveal as="li" key={card.slug} y={40} blur={false} delay={0.04 * i}>
                <article
                  id={card.slug}
                  className={cn(
                    "relative scroll-mt-28 overflow-hidden rounded-[2.5rem] p-7 sm:p-10 lg:p-12",
                    toneClass[audience.tone],
                  )}
                >
                  <div
                    aria-hidden="true"
                    className={cn(
                      "bg-dots absolute -left-10 -top-10 h-72 w-72 [mask-image:radial-gradient(closest-side,black,transparent)]",
                      teal ? "text-ink/10" : "text-white/10",
                    )}
                  />
                  <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
                    <div>
                      <p className={cn("flex items-center gap-3 font-display text-[0.95rem] font-semibold", teal ? "text-ink" : "text-teal-200")}>
                        <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-2xl", teal ? "bg-ink/10 text-ink" : "bg-white/10 text-white")}>
                          <Icon name={audience.icon} size={22} />
                        </span>
                        {card.fit}
                      </p>
                      <h3 className="text-title mt-6">{card.label}</h3>
                      <p className="text-subheading mt-4 max-w-xl font-display font-medium">{card.headline}</p>
                      <p className={cn("mt-4 max-w-xl text-[1.0625rem]", teal ? "text-ink/85" : "text-white/80")}>{card.body}</p>
                      <Link
                        href={card.href}
                        className={cn(
                          "group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold transition-[background-color,transform] duration-300 hover:-translate-y-0.5",
                          teal ? "bg-ink text-white hover:bg-navy-800" : "bg-white text-ink hover:bg-yellow",
                        )}
                      >
                        {card.cta}
                        <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <div className={cn("rounded-[1.75rem] p-6 ring-1 ring-inset sm:p-7", teal ? "bg-ink/10 ring-ink/10" : "bg-white/[0.08] ring-white/12")}>
                      <p className={cn("eyebrow", teal ? "text-ink" : "text-teal-200")}>What changes</p>
                      <ul className="mt-4 grid gap-3 text-[1.0625rem]">
                        {card.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <Icon name="check" size={20} strokeWidth={2.6} className={cn("mt-1 shrink-0", teal ? "text-ink" : "text-yellow")} />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <p className={cn("eyebrow mt-7 border-t pt-6", teal ? "border-ink/15 text-ink" : "border-white/15 text-teal-200")}>
                        Services
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {card.services.map((key, index) => {
                          const service = serviceInfo(key);
                          const flagship = index < 2;
                          return (
                            <li key={key}>
                              <Link
                                href={service.href}
                                className={cn(
                                  "inline-flex h-11 items-center gap-2 rounded-full px-4 font-display text-sm font-semibold transition-colors duration-300",
                                  flagship && (teal ? "bg-ink text-white hover:bg-navy-800" : "bg-white text-ink hover:bg-yellow"),
                                  !flagship && (teal ? "bg-ink/10 text-ink hover:bg-ink/20" : "bg-white/10 text-white hover:bg-white/20"),
                                )}
                              >
                                <Icon name={service.icon} size={17} />
                                {service.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
