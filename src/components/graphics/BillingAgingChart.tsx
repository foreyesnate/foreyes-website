"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { AgingBucket } from "@/content/services/insurance-billing";

type Mode = "waiting" | "worked";

// Tallest bar the chart has to fit, so both states share one scale.
const SCALE = 70;

const barStyle = ["bg-teal", "bg-teal-300", "bg-navy-300", "bg-yellow"];

/**
 * A sample A/R aging report. It opens on a practice where nobody has time to
 * chase claims, then shows the same report once claims are followed up daily:
 * the old buckets shrink and the current one grows. The visitor can flip
 * between the two. Sample data, and labelled as such.
 */
export function BillingAgingChart({
  title,
  subtitle,
  buckets,
  states,
  flag,
  footnote,
  className,
}: {
  title: string;
  subtitle: string;
  buckets: AgingBucket[];
  states: Record<Mode, { label: string; caption: string }>;
  /** Short note pinned to the oldest bucket. */
  flag: string;
  footnote: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const [mode, setMode] = useState<Mode>("waiting");
  const touched = useRef(false);

  // Play the story once when the chart scrolls into view.
  useEffect(() => {
    if (!inView || touched.current) return;
    const timer = window.setTimeout(
      () => {
        if (!touched.current) setMode("worked");
      },
      reduce ? 0 : 1400,
    );
    return () => window.clearTimeout(timer);
  }, [inView, reduce]);

  const choose = (next: Mode) => {
    touched.current = true;
    setMode(next);
  };

  return (
    <div
      ref={ref}
      className={cn("rounded-[2.5rem] bg-white p-5 text-ink shadow-float sm:p-8", className)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg font-semibold tracking-[-0.015em]">{title}</p>
          <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
        </div>
        <span className="shrink-0 rounded-full bg-yellow-100 px-2.5 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-yellow-800">
          Sample
        </span>
      </div>

      <div
        role="group"
        aria-label="Compare the aging report"
        className="mt-6 grid grid-cols-2 gap-1 rounded-full bg-stone p-1.5"
      >
        {(Object.keys(states) as Mode[]).map((option) => {
          const selected = mode === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => choose(option)}
              className={cn(
                "relative h-11 rounded-full px-3 font-display text-[0.9rem] font-semibold transition-colors duration-300 sm:text-[0.95rem]",
                selected ? "text-white" : "text-ink-500 hover:text-ink",
              )}
            >
              {selected ? (
                <motion.span
                  layoutId="aging-pill"
                  className={cn("absolute inset-0 rounded-full", option === "worked" ? "bg-navy" : "bg-ink")}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              ) : null}
              <span className="relative">{states[option].label}</span>
            </button>
          );
        })}
      </div>

      <ol className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-4" aria-label={`${title}, ${states[mode].label.toLowerCase()}`}>
        {buckets.map((bucket, index) => {
          const last = index === buckets.length - 1;
          return (
            <li key={bucket.label} className="flex flex-col items-center">
              <div className="relative flex h-44 w-full items-end justify-center rounded-2xl bg-stone sm:h-52">
                {last ? (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -top-3 right-0 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 font-display text-[0.65rem] font-bold text-white transition-opacity duration-500",
                      mode === "waiting" ? "opacity-100" : "opacity-0",
                    )}
                  >
                    {flag}
                  </span>
                ) : null}
                <Bar value={bucket[mode]} className={barStyle[index % barStyle.length]} />
              </div>
              <p className="mt-3 font-display text-[1.35rem] font-bold leading-none tracking-[-0.03em] sm:text-2xl">
                <Percent value={bucket[mode]} />
              </p>
              <p className="mt-1.5 text-center font-display text-[0.8rem] font-semibold text-ink-500 sm:text-sm">
                {bucket.label}
                <span className="font-sans font-normal"> days</span>
              </p>
            </li>
          );
        })}
      </ol>

      <p aria-live="polite" className="mt-6 min-h-[3.25rem] rounded-2xl bg-stone px-4 py-3 text-[0.95rem] text-ink-700 sm:min-h-0">
        <span className="font-display font-semibold text-ink">{states[mode].label}.</span>{" "}
        {states[mode].caption}
      </p>
      <p className="mt-4 text-xs leading-relaxed text-ink-500">{footnote}</p>
    </div>
  );
}

function Bar({ value, className }: { value: number; className: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={cn("block w-full rounded-2xl", className)}
      initial={false}
      animate={{ height: `${(value / SCALE) * 100}%` }}
      transition={{ type: "spring", stiffness: 60, damping: 16 }}
    />
  );
}

/** The bucket's share, counting to its new value when the state flips. */
function Percent({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 60, damping: 16 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}%`);
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  return <motion.span className="tabular">{rounded}</motion.span>;
}
