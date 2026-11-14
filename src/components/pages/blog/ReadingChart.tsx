"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

// An eye chart whose lines are the subjects the blog covers. Like the real
// thing it is read one line at a time: each line sharpens in turn while the
// rest stay soft, which is the blog's promise ("one post at a time") drawn
// as a picture. Hovering a line holds the focus there.

// Type is sized in container-query units so the chart keeps its proportions
// at any width, and so the nowrap lines can never push the page wider.
const lines = [
  { text: "P & L", size: "text-[length:18cqw]", spacing: "tracking-[0.12em]" },
  { text: "A / R", size: "text-[length:13.4cqw]", spacing: "tracking-[0.16em]" },
  { text: "CASH FLOW", size: "text-[length:9cqw]", spacing: "tracking-[0.18em]" },
  { text: "PAYROLL", size: "text-[length:6.5cqw]", spacing: "tracking-[0.24em]" },
  { text: "EXPENSE RATIOS", size: "text-[length:4.7cqw]", spacing: "tracking-[0.26em]" },
  { text: "LABOR COSTS · KPIS", size: "text-[length:3.6cqw]", spacing: "tracking-[0.3em]" },
  { text: "FORECASTING · BOOKKEEPING", size: "text-[length:2.8cqw]", spacing: "tracking-[0.34em]" },
] as const;

export function ReadingChart({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (reduce || !inView || held) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % lines.length), 2400);
    return () => window.clearInterval(timer);
  }, [reduce, inView, held]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="An eye chart whose lines are blog topics: P&L, A/R, cash flow, payroll, expense ratios, labor costs, KPIs, forecasting, and bookkeeping. One line at a time comes into focus."
      className={cn("relative", className)}
      onPointerLeave={() => setHeld(false)}
    >
      <div aria-hidden="true" className="absolute -bottom-6 -left-6 h-44 w-44 rounded-[2rem] bg-teal-200/70 sm:-bottom-8 sm:-left-8" />
      <div aria-hidden="true" className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-yellow sm:-right-6 sm:-top-7 sm:h-28 sm:w-28" />

      <div aria-hidden="true" className="relative overflow-hidden rounded-[2.5rem] bg-white px-6 pb-7 pt-8 shadow-float sm:px-10 sm:pb-9 sm:pt-10">
        <div className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.05] [mask-image:radial-gradient(90%_70%_at_50%_0%,black,transparent)]" />
        <div className="relative flex items-center justify-between font-display text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink-400">
          <span>Reading chart</span>
          <span className="rounded-full bg-teal-100 px-2.5 py-1 text-teal-800">
            <span className="motion-reduce:hidden">
              Line {active + 1} of {lines.length}
            </span>
            <span className="hidden motion-reduce:inline">{lines.length} lines</span>
          </span>
        </div>

        <ol className="@container relative mt-6 grid gap-[clamp(0.5rem,0.2rem+1.1vw,1.125rem)]">
          {lines.map((line, index) => {
            // Reduced motion is handled in CSS (motion-reduce:) rather than
            // here, so the server and client render the same markup.
            const focused = index === active;
            return (
              <li
                key={line.text}
                className="grid grid-cols-[1.5rem_1fr_1.5rem] items-center gap-2"
                onPointerEnter={(event) => {
                  if (event.pointerType === "touch") return;
                  setHeld(true);
                  setActive(index);
                }}
              >
                <span
                  className={cn(
                    "tabular font-display text-[0.75rem] font-semibold transition-colors duration-500 motion-reduce:text-ink-400!",
                    focused ? "text-navy" : "text-stone-400",
                  )}
                >
                  {index + 1}
                </span>
                <motion.span
                  className={cn(
                    "block whitespace-nowrap text-center font-display font-bold leading-none text-ink motion-reduce:opacity-100! motion-reduce:[filter:none]!",
                    line.size,
                    line.spacing,
                  )}
                  // Letter-spacing adds a trailing gap; pull the text back to centre.
                  style={{ textIndent: "0.2em" }}
                  initial={false}
                  animate={{
                    filter: focused ? "blur(0px)" : `blur(${index < 3 ? 5 : 3}px)`,
                    opacity: focused ? 1 : 0.42,
                  }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line.text}
                </motion.span>
                <span
                  className={cn(
                    "h-2.5 w-2.5 justify-self-end rounded-full transition-[background-color,transform] duration-500 ease-(--ease-focus) motion-reduce:scale-50! motion-reduce:bg-stone-300!",
                    focused ? "scale-100 bg-yellow" : "scale-50 bg-stone-300",
                  )}
                />
              </li>
            );
          })}
        </ol>

        <div className="relative mt-7 flex items-center gap-3">
          <span className="h-1.5 flex-1 rounded-full bg-teal" />
          <span className="h-1.5 w-10 rounded-full bg-navy-300" />
        </div>
        <p className="relative mt-4 text-center text-[0.9375rem] text-ink-500">
          Your numbers, one line at a time.
        </p>
      </div>
    </div>
  );
}
