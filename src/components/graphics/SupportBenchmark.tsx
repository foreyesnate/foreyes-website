"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// Sample positions for an imaginary practice. `band` is where the target
// range sits along the track and `at` is the practice's marker, both as
// percentages of the track. No real benchmark values are shown.
const rows = [
  { label: "Revenue per exam", band: [44, 78], at: 61, inRange: true },
  { label: "Optical capture rate", band: [50, 84], at: 58, inRange: true },
  { label: "Optical cost of goods", band: [26, 56], at: 76, inRange: false },
  { label: "Provider productivity", band: [40, 74], at: 66, inRange: true },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.34, 1.4, 0.64, 1] as const;

/**
 * The hero picture for the Practice Consulting page: four practice metrics,
 * each shown against a target band. The one outside its band goes first on
 * the plan.
 */
export function SupportBenchmark({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const first = rows.find((row) => !row.inRange);
  return (
    <figure className={cn("relative mx-auto w-full max-w-[34rem] lg:mr-0", className)}>
      <div
        role="img"
        aria-label="A sample benchmark review. Four metrics for a sample practice are shown against a target band: revenue per exam, optical capture rate, optical cost of goods, and provider productivity. Three sit inside the band. Optical cost of goods sits above it and goes first on the plan."
        className="relative pt-5"
      >
        <div aria-hidden="true">
          {/* A second sheet behind, for depth. */}
          <div className="absolute inset-x-5 bottom-10 top-0 rotate-[2.5deg] rounded-[2rem] bg-teal-100" />

          <div className="relative rounded-[2rem] bg-white p-6 text-ink shadow-float sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold leading-tight">Benchmark review</p>
                <p className="mt-1 text-[0.85rem] text-ink-500">Sample practice</p>
              </div>
              <span className="rounded-full bg-stone px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-500">
                Sample
              </span>
            </div>

            <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.8125rem] text-ink-500">
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-ink ring-2 ring-white" />
                Your practice
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-7 rounded-full bg-teal-200" />
                Target band
              </li>
            </ul>

            <ul className="mt-5 grid gap-5">
              {rows.map((row, i) => {
                const delay = 0.5 + i * 0.22;
                return (
                  <li key={row.label}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.925rem]">{row.label}</span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: reduce ? 0 : delay + 0.9, duration: 0.45, ease: SETTLE }}
                        className={cn(
                          "flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 font-display text-[0.7rem] font-bold",
                          row.inRange ? "bg-teal-100 text-teal-800" : "bg-yellow text-ink",
                        )}
                      >
                        {row.inRange ? <Icon name="check" size={11} strokeWidth={3.4} /> : null}
                        {row.inRange ? "In range" : "Above range"}
                      </motion.span>
                    </div>
                    <div className="relative mt-2.5 h-3 rounded-full bg-stone-200">
                      <span
                        className="absolute inset-y-0 rounded-full bg-teal-200"
                        style={{ left: `${row.band[0]}%`, width: `${row.band[1] - row.band[0]}%` }}
                      />
                      <motion.span
                        className="absolute top-1/2 -ml-2.5 -mt-2.5 grid h-5 w-5 place-items-center"
                        initial={{ left: reduce ? `${row.at}%` : "3%" }}
                        whileInView={{ left: `${row.at}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: reduce ? 0 : delay, duration: 1.1, ease: EASE }}
                      >
                        {!row.inRange && !reduce ? (
                          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-yellow" />
                        ) : null}
                        <span
                          className={cn(
                            "relative h-5 w-5 rounded-full shadow-soft ring-[3px] ring-white",
                            row.inRange ? "bg-ink" : "bg-yellow",
                          )}
                        />
                      </motion.span>
                    </div>
                  </li>
                );
              })}
            </ul>

            {first ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : 2.5, duration: 0.6, ease: EASE }}
                className="mt-6 flex items-center gap-3.5 rounded-2xl bg-ink px-4 py-3.5 text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-yellow font-display font-bold text-ink">
                  1
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.75rem] text-white/70">First on your plan</span>
                  <span className="block font-display font-semibold leading-tight">{first.label}</span>
                </span>
                <Icon name="arrowRight" size={18} className="shrink-0 text-white/70" />
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-right text-sm text-ink-500">
        Sample positions for illustration. Your targets depend on your practice.
      </figcaption>
    </figure>
  );
}
