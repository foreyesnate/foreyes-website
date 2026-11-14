import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type Feature = { icon?: IconName; title: string; body: ReactNode };

/**
 * A heading and a grid of cards. The workhorse for "what's included" and
 * "why us" blocks. Cards lift on hover and reveal one after another.
 */
export function FeatureGrid({
  id,
  eyebrow,
  title,
  lede,
  features,
  tone = "white",
  columns = 3,
  numbered = false,
  footer,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  features: Feature[];
  tone?: "white" | "stone" | "navy" | "ink";
  columns?: 2 | 3 | 4;
  numbered?: boolean;
  footer?: ReactNode;
}) {
  const dark = tone === "navy" || tone === "ink";
  return (
    <Section tone={tone} aria-labelledby={id}>
      <Container size="wide">
        <Reveal>
          <SectionHeading id={id} eyebrow={eyebrow} title={title} lede={lede} tone={dark ? "light" : "ink"} />
        </Reveal>
        <Stagger
          as="ul"
          className={cn(
            "mt-14 grid gap-5",
            columns === 2 && "md:grid-cols-2",
            columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
            columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {features.map((feature, i) => (
            <StaggerItem as="li" key={feature.title}>
              <div
                className={cn(
                  "group relative h-full rounded-[1.75rem] p-7 transition-[transform,box-shadow,background-color] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 sm:p-8",
                  tone === "white" && "bg-stone hover:bg-white hover:shadow-lift",
                  tone === "stone" && "bg-white shadow-soft hover:shadow-lift",
                  dark && "bg-white/[0.07] ring-1 ring-inset ring-white/10 hover:bg-white/[0.12]",
                )}
              >
                {numbered ? (
                  <span className={cn("tabular absolute right-7 top-7 font-display text-sm font-semibold", dark ? "text-white/50" : "text-ink-400")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ) : null}
                {feature.icon ? (
                  <span
                    className={cn(
                      "grid h-14 w-14 place-items-center rounded-2xl transition-colors duration-300",
                      tone === "white" && "bg-white text-navy shadow-soft group-hover:bg-yellow group-hover:text-ink",
                      tone === "stone" && "bg-navy-50 text-navy group-hover:bg-yellow group-hover:text-ink",
                      dark && "bg-white/10 text-yellow",
                    )}
                  >
                    <Icon name={feature.icon} size={26} />
                  </span>
                ) : null}
                <h3 className={cn("text-subheading", feature.icon && "mt-7", numbered && !feature.icon && "pr-10")}>
                  {feature.title}
                </h3>
                <div className={cn("mt-3", dark ? "text-white/75" : "text-ink-500")}>{feature.body}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        {footer ? <Reveal className="mt-12">{footer}</Reveal> : null}
      </Container>
    </Section>
  );
}
