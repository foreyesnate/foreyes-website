"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { cn } from "@/lib/cn";

// A Snellen-style chart whose lines spell the message. Each line is one word
// group, set in shrinking sizes like the real thing, with the acuity fraction
// on the left and the line number on the right.
const rows = [
  { acuity: "20/200", text: "404", size: "text-[4.25rem] sm:text-[5.5rem]", gap: 0.22, blur: 16 },
  { acuity: "20/100", text: "PAGE", size: "text-[2.75rem] sm:text-[3.5rem]", gap: 0.3, blur: 14 },
  { acuity: "20/70", text: "NOT", size: "text-[2.125rem] sm:text-[2.625rem]", gap: 0.36, blur: 12 },
  { acuity: "20/50", text: "FOUND", size: "text-[1.625rem] sm:text-[2rem]", gap: 0.42, blur: 10, bar: "bg-teal" },
  { acuity: "20/40", text: "LETS GET", size: "text-[1.1875rem] sm:text-[1.4375rem]", gap: 0.46, blur: 8 },
  { acuity: "20/30", text: "YOU BACK", size: "text-[0.9375rem] sm:text-[1.125rem]", gap: 0.5, blur: 7 },
  { acuity: "20/20", text: "IN FOCUS", size: "text-[0.75rem] sm:text-[0.875rem]", gap: 0.56, blur: 6, bar: "bg-yellow" },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The 404 page's picture: an eye chart that starts out of focus and sharpens
 * line by line, largest first, the way a chart does as the right lens drops
 * in. With reduced motion it is sharp at once.
 */
export function EyeChart404({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <figure className={cn("relative mx-auto w-full max-w-[27rem] lg:mr-6", className)}>
      {/* A second sheet behind, for depth. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-4 -bottom-3 top-6 rotate-[4deg] rounded-[2.25rem] bg-teal-100 ring-1 ring-inset ring-teal-200/70"
      />
      <div
        role="img"
        aria-label="An eye chart that comes into focus. Its lines read: 404. Page not found. Let’s get you back in focus."
        className="relative rounded-[2.25rem] bg-white px-5 pb-8 pt-9 shadow-float ring-1 ring-inset ring-stone-200 sm:px-8 sm:pb-10 sm:pt-11"
      >
        {/* The hole a wall chart hangs from. */}
        <span aria-hidden="true" className="absolute left-1/2 top-3.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-stone-300" />
        <ol aria-hidden="true" className="grid gap-y-4 sm:gap-y-5">
          {rows.map((row, i) => (
            <li key={row.acuity}>
              <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center">
                <span className="tabular font-display text-[0.6875rem] font-semibold text-ink-400">{row.acuity}</span>
                <motion.span
                  data-reveal=""
                  initial={{ filter: `blur(${row.blur}px)`, opacity: 0.55 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={reduce ? { duration: 0 } : { duration: 1.5, delay: 0.5 + i * 0.32, ease: EASE }}
                  className={cn(
                    "block whitespace-nowrap text-center font-display font-bold leading-none text-ink will-change-[filter]",
                    row.size,
                  )}
                >
                  {/* Letter-spacing adds a trailing gap; the negative margin re-centres the line. */}
                  <span className="inline-block" style={{ letterSpacing: `${row.gap}em`, marginRight: `-${row.gap}em` }}>
                    {row.text}
                  </span>
                </motion.span>
                <span className="tabular text-right font-display text-[0.6875rem] font-semibold text-ink-400">{i + 1}</span>
              </div>
              {"bar" in row ? (
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={reduce ? { duration: 0 } : { duration: 0.9, delay: 0.9 + i * 0.32, ease: EASE }}
                  className={cn("mx-auto mt-4 block h-1.5 w-[72%] origin-left rounded-full sm:mt-5", row.bar)}
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
