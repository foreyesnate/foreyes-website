import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Text on one side, a visual on the other. Use for the two or three ideas on
 * a page that deserve room. Alternate `flip` down the page.
 */
export function SplitFeature({
  id,
  eyebrow,
  title,
  body,
  bullets,
  visual,
  flip = false,
  tone = "white",
  footer,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  bullets?: ReactNode[];
  visual: ReactNode;
  flip?: boolean;
  tone?: "white" | "stone" | "navy" | "ink" | "teal";
  footer?: ReactNode;
}) {
  const dark = tone === "navy" || tone === "ink";
  return (
    <Section tone={tone} aria-labelledby={id} className="overflow-hidden">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className={cn(flip && "lg:order-2")}>
            {eyebrow ? (
              <Eyebrow tone={dark ? "light" : tone === "teal" ? "dark" : "ink"} className="mb-5">
                {eyebrow}
              </Eyebrow>
            ) : null}
            <h2 id={id} className="text-title">
              {title}
            </h2>
            {body ? (
              <div className={cn("text-lede mt-6 grid gap-4", dark ? "text-white/80" : tone === "teal" ? "text-ink/85" : "text-ink-500")}>
                {body}
              </div>
            ) : null}
            {bullets?.length ? (
              <ul className="mt-8 grid gap-3.5">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3.5 text-[1.0625rem]">
                    <span
                      className={cn(
                        "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
                        dark ? "bg-yellow text-ink" : tone === "teal" ? "bg-ink text-white" : "bg-teal text-ink",
                      )}
                    >
                      <Icon name="check" size={14} strokeWidth={3} />
                    </span>
                    <span className={cn(dark ? "text-white/90" : "text-ink-700")}>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {footer ? <div className="mt-9">{footer}</div> : null}
          </Reveal>
          <Reveal delay={0.12} y={36} blur={false} className={cn(flip && "lg:order-1")}>
            {visual}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
