"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type Stage = {
  href: string;
  /** Where the practice is: "Opening soon", "One practice"… */
  stage: string;
  /** The audience page this stage leads to. */
  label: string;
  line: string;
  icon: IconName;
  tone: "navy" | "ink" | "teal";
};

const POP = [0.34, 1.4, 0.64, 1] as const;

const toneClass: Record<Stage["tone"], string> = {
  navy: "bg-navy text-white",
  ink: "bg-ink text-white",
  teal: "bg-teal text-ink",
};

/**
 * A practice's path from opening day to several offices. The rail draws
 * itself, each stage lands in turn, and a marker drifts slowly along the
 * line: wherever a practice sits on it, there is a page for it.
 */
export function AudienceStageLine({
  title,
  caption,
  stages,
  className,
}: {
  title: string;
  caption: string;
  stages: Stage[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const go = inView || Boolean(reduce);

  return (
    <div ref={ref} className={cn("rounded-[2.5rem] bg-white p-6 shadow-float sm:p-8", className)}>
      <p className="font-display text-lg font-semibold tracking-[-0.015em] sm:text-xl">{title}</p>

      <div className="relative mt-6">
        <div aria-hidden="true" className="absolute bottom-10 left-[1.625rem] top-10 w-1 rounded-full bg-stone-200 sm:left-[1.875rem]">
          <motion.div
            className="h-full w-full origin-top rounded-full bg-teal-200"
            initial={{ scaleY: 0 }}
            animate={go ? { scaleY: 1 } : undefined}
            transition={{ delay: reduce ? 0 : 0.9, duration: reduce ? 0 : 1.5, ease: "easeInOut" }}
          />
          {!reduce ? (
            <motion.span
              className="absolute left-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full bg-yellow shadow-[0_0_0_4px_rgb(252_186_2/0.3)]"
              initial={{ top: "0%", opacity: 0 }}
              animate={go ? { top: ["0%", "100%", "0%"], opacity: 1 } : undefined}
              transition={{
                top: { delay: 2.6, duration: 14, ease: "easeInOut", repeat: Infinity },
                opacity: { delay: 2.4, duration: 0.4 },
              }}
            />
          ) : null}
        </div>

        <ol className="relative grid gap-3">
          {stages.map((stage, i) => (
            <motion.li
              key={stage.href}
              initial={{ opacity: 0, y: 16 }}
              animate={go ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: reduce ? 0 : 0.8 + i * 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={stage.href}
                className="group flex items-center gap-4 rounded-[1.5rem] p-2 pr-3 transition-colors duration-300 hover:bg-stone sm:gap-5 sm:pr-4"
              >
                <motion.span
                  initial={{ scale: 0.7 }}
                  animate={go ? { scale: 1 } : undefined}
                  transition={{ delay: reduce ? 0 : 0.9 + i * 0.4, duration: 0.5, ease: POP }}
                  className={cn(
                    "relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-soft sm:h-14 sm:w-14",
                    toneClass[stage.tone],
                  )}
                >
                  <Icon name={stage.icon} size={24} />
                </motion.span>
                <span className="min-w-0 flex-1">
                  <span className="eyebrow block text-[0.6875rem] text-teal-700">{stage.stage}</span>
                  <span className="mt-1 block font-display text-[1.0625rem] font-semibold leading-tight tracking-[-0.015em] sm:text-lg">
                    {stage.label}
                  </span>
                  <span className="mt-1 block text-[0.9rem] leading-snug text-ink-500">{stage.line}</span>
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-stone text-ink transition-[background-color,transform] duration-300 group-hover:translate-x-1 group-hover:bg-yellow">
                  <Icon name="arrowRight" size={18} />
                </span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>

      <p className="mt-5 border-t border-stone-200 pt-4 text-[0.9rem] text-ink-500">{caption}</p>
    </div>
  );
}
