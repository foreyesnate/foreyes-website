"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { StickyColumn } from "@/components/ui/StickyColumn";
import { cn } from "@/lib/cn";

export type Step = { title: string; body: ReactNode; meta?: string };

/**
 * A numbered, vertical "how it works" timeline. The rail fills with yellow as
 * the visitor scrolls through the steps.
 */
export function ProcessSteps({
  id,
  eyebrow = "How it works",
  title,
  lede,
  steps,
  tone = "stone",
  aside,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  steps: Step[];
  tone?: "stone" | "white" | "ink" | "navy";
  /** Optional sticky content beside the steps (illustration, quote, CTA). */
  aside?: ReactNode;
}) {
  const ref = useRef<HTMLOListElement>(null);
  const dark = tone === "ink" || tone === "navy";
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <Section tone={tone} aria-labelledby={id}>
      <Container size="wide">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <StickyColumn>
            <Reveal>
              <SectionHeading id={id} eyebrow={eyebrow} title={title} lede={lede} tone={dark ? "light" : "ink"} />
            </Reveal>
            {aside ? <Reveal delay={0.15} className="mt-10">{aside}</Reveal> : null}
          </StickyColumn>

          <ol ref={ref} className="relative grid grid-cols-[minmax(0,1fr)] gap-5">
            <div aria-hidden="true" className={cn("absolute bottom-8 left-[1.6875rem] top-8 w-1 rounded-full", dark ? "bg-white/12" : "bg-stone-300")}>
              <motion.div className="h-full w-full origin-top rounded-full bg-yellow" style={{ scaleY: progress }} />
            </div>
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={0.04 * i} className="relative flex gap-4 min-[360px]:gap-6">
                <span
                  className={cn(
                    "tabular relative z-10 grid h-[3.625rem] w-[3.625rem] shrink-0 place-items-center rounded-2xl font-display text-xl font-bold shadow-soft",
                    dark ? "bg-white text-ink" : "bg-ink text-white",
                  )}
                >
                  {i + 1}
                </span>
                <div className={cn("min-w-0 flex-1 rounded-[1.75rem] p-6 sm:p-7", dark ? "bg-white/[0.07] ring-1 ring-inset ring-white/10" : tone === "stone" ? "bg-white shadow-soft" : "bg-stone")}>
                  {step.meta ? (
                    <p className={cn("eyebrow mb-2", dark ? "text-teal-200" : "text-teal-700")}>{step.meta}</p>
                  ) : null}
                  {/* A size down under 360px so a long first word ("Implementation") fits the card. */}
                  <h3 className="text-subheading hyphens-auto max-[359px]:text-[1.125rem]">{step.title}</h3>
                  <div className={cn("mt-2.5", dark ? "text-white/75" : "text-ink-500")}>{step.body}</div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
