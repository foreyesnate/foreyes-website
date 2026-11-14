import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { FocusText } from "@/components/motion/FocusText";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

type Tone = "stone" | "navy" | "teal" | "ink";

const toneClass: Record<Tone, string> = {
  stone: "bg-stone text-ink",
  navy: "bg-navy text-white",
  teal: "bg-teal text-ink",
  ink: "bg-ink text-white",
};

/**
 * The opening block of every inner page. Text on the left; pass `visual` for
 * an illustration, photo or animated graphic on the right. Without a visual
 * the text runs wider and the hero is shorter.
 *
 * The header floats over the page, so this component owns the top padding
 * that clears it.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  lede,
  crumbs,
  visual,
  tone = "stone",
  primaryCta = { label: "Book a Discovery Call", href: site.bookingHref },
  secondaryCta,
  note,
  children,
}: {
  eyebrow?: string;
  /** Headline. Animated word by word. */
  title: string;
  /** Optional closing phrase of the headline, set in the accent colour. */
  highlight?: string;
  lede?: ReactNode;
  crumbs?: Crumb[];
  visual?: ReactNode;
  tone?: Tone;
  primaryCta?: { label: string; href: string } | null;
  secondaryCta?: { label: string; href: string };
  /** Small reassurance under the buttons. */
  note?: ReactNode;
  children?: ReactNode;
}) {
  const dark = tone === "navy" || tone === "ink";
  const light = tone === "stone";
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40", toneClass[tone])}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            "absolute -right-[20%] -top-[45%] h-[70rem] w-[70rem] rounded-full",
            light && "bg-[radial-gradient(closest-side,var(--color-teal-100),transparent)]",
            tone === "navy" && "bg-[radial-gradient(closest-side,rgb(81_160_173/0.45),transparent)]",
            tone === "ink" && "bg-[radial-gradient(closest-side,rgb(65_93_158/0.55),transparent)]",
            tone === "teal" && "bg-[radial-gradient(closest-side,rgb(255_255_255/0.3),transparent)]",
          )}
        />
        <div
          className={cn(
            "bg-dots absolute left-0 top-24 h-64 w-96 [mask-image:radial-gradient(closest-side,black,transparent)]",
            dark ? "text-white/10" : "text-ink/10",
          )}
        />
      </div>

      <Container size="wide" className="relative">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className={cn("flex flex-wrap items-center gap-1.5 font-display text-sm font-medium", dark ? "text-white/70" : "text-ink-500")}>
              <li>
                <Link href="/" className="transition-colors hover:text-current hover:underline">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <Icon name="chevronDown" size={13} className="-rotate-90 opacity-60" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className={dark ? "text-white" : "text-ink"}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className={cn("grid items-center gap-12", visual && "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14")}>
          <div className={cn(visual ? "max-w-2xl" : "max-w-4xl")}>
            {eyebrow ? (
              <Reveal blur={false} y={10}>
                <Eyebrow tone={dark ? "light" : "ink"} className={cn(tone === "teal" && "text-ink")}>
                  {eyebrow}
                </Eyebrow>
              </Reveal>
            ) : null}
            <FocusText
              className={cn("text-title mt-5", !visual && "sm:text-display")}
              delay={0.1}
              segments={[
                title,
                ...(highlight
                  ? [
                      {
                        text: highlight,
                        className: cn(
                          dark && "text-yellow",
                          light && "text-navy",
                          tone === "teal" && "underline decoration-yellow decoration-[0.09em] underline-offset-[0.14em]",
                        ),
                      },
                    ]
                  : []),
              ]}
            />
            {lede ? (
              <Reveal delay={0.5} className="mt-7 max-w-2xl">
                <div className={cn("text-lede", dark ? "text-white/80" : light ? "text-ink-500" : "text-ink/85")}>
                  {lede}
                </div>
              </Reveal>
            ) : null}
            {primaryCta || secondaryCta ? (
              <Reveal delay={0.65} className="mt-9 flex flex-wrap items-center gap-3">
                {primaryCta ? (
                  <Button href={primaryCta.href} size="lg" variant={tone === "teal" ? "ink" : "primary"}>
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    size="lg"
                    variant={dark ? "light" : "outline"}
                    className={cn(tone === "teal" && "border-ink/25 bg-transparent")}
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </Reveal>
            ) : null}
            {note ? (
              <Reveal delay={0.8} blur={false} y={8}>
                <p className={cn("mt-6 text-[0.95rem]", dark ? "text-white/65" : "text-ink-500")}>{note}</p>
              </Reveal>
            ) : null}
            {children}
          </div>
          {visual ? (
            <Reveal delay={0.3} y={36} blur={false} className="relative">
              {visual}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
