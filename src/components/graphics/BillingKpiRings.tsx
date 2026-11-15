"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { Kpi } from "@/content/services/insurance-billing";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The four numbers on the monthly billing report, each drawn as a trial lens:
 * a thin rim with a handle tab, and a gauge ring inside it that sweeps in as
 * the panel scrolls into view. The rings carry no values on purpose. They show
 * which way an owner wants each number to move, not anybody's results.
 */
export function BillingKpiRings({ items, className }: { items: Kpi[]; className?: string }) {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2 xl:grid-cols-4", className)}>
      {items.map((kpi, index) => (
        <li
          key={kpi.name}
          className="row-span-4 grid grid-rows-subgrid gap-y-0 rounded-[1.75rem] bg-white/[0.07] p-6 ring-1 ring-inset ring-white/10 sm:p-7"
        >
          <div className="flex flex-wrap items-center gap-5 xl:flex-col xl:items-start">
            <LensGauge kpi={kpi} delay={0.15 + index * 0.18} />
            <p
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-display text-xs font-bold",
                kpi.better === "higher" ? "bg-teal text-ink" : "bg-white/12 text-white",
              )}
            >
              <Icon
                name="arrowRight"
                size={13}
                strokeWidth={2.8}
                className={kpi.better === "higher" ? "-rotate-90" : "rotate-90"}
              />
              {kpi.better === "higher" ? "Higher is better" : "Lower is better"}
            </p>
          </div>
          <h3 className="text-subheading mt-6">{kpi.name}</h3>
          <p className="mt-3 text-white/80">{kpi.definition}</p>
          <p className="mt-5 self-start border-t border-white/12 pt-5 text-[0.975rem] text-white/75">
            <span className="eyebrow mb-1.5 block text-[0.7rem] text-yellow">Why watch it</span>
            {kpi.why}
          </p>
        </li>
      ))}
    </ul>
  );
}

function LensGauge({ kpi, delay }: { kpi: Kpi; delay: number }) {
  const reduce = useReducedMotion();
  const viewport = { once: true, margin: "0px 0px -15% 0px" } as const;
  const transition = { duration: reduce ? 0 : 1.5, delay: reduce ? 0 : delay, ease: EASE };
  return (
    <div aria-hidden="true" className="relative h-[8.5rem] w-[8.5rem] shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full overflow-visible">
        {/* Handle tab of the trial lens. */}
        <rect
          x="54"
          y="-3"
          width="12"
          height="16"
          rx="5"
          transform="rotate(38 60 60)"
          fill="rgb(255 255 255 / 0.22)"
        />
        {/* Glass and rim. */}
        <circle cx="60" cy="60" r="54" fill="rgb(255 255 255 / 0.05)" stroke="rgb(255 255 255 / 0.3)" strokeWidth="2" />
        <path d="M27 44a36 36 0 0 1 20-17" fill="none" stroke="rgb(255 255 255 / 0.35)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Gauge track and sweep. */}
        <circle cx="60" cy="60" r="42" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="9" />
        <motion.circle
          cx="60"
          cy="60"
          r="42"
          fill="none"
          stroke="var(--color-teal)"
          strokeWidth="9"
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: kpi.sweep, opacity: 1 }}
          viewport={viewport}
          transition={transition}
        />
      </svg>
      {/* Yellow focus mark riding the end of the sweep. */}
      <motion.span
        className="absolute inset-0"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: kpi.sweep * 360, opacity: 1 }}
        viewport={viewport}
        transition={transition}
      >
        <span className="absolute left-1/2 top-[15%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow ring-[3px] ring-ink" />
      </motion.span>
      <span className="absolute inset-0 grid place-items-center font-display text-2xl font-bold tracking-[-0.03em] text-white">
        {kpi.unit}
      </span>
    </div>
  );
}
