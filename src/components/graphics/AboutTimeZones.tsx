"use client";

import { motion, useReducedMotion } from "motion/react";
import { officeHoursByZone } from "@/content/about";
import { cn } from "@/lib/cn";

// The local-clock window drawn on each track: 5 AM to 7 PM.
const START = 5;
const END = 19;
const SPAN = END - START;
const ticks = [
  { hour: 6, label: "6 AM" },
  { hour: 9, label: "9 AM" },
  { hour: 12, label: "Noon" },
  { hour: 15, label: "3 PM" },
  { hour: 18, label: "6 PM" },
];

/**
 * Our published office hours (8 AM to 5 PM Central) laid over each US time
 * zone's own clock, so an owner on either coast can see when we overlap with
 * their day. Real hours, not sample data.
 */
export function AboutTimeZones({
  hours,
  tools,
  className,
}: {
  /** The office hours sentence from site.ts, shown under the chart. */
  hours: string;
  tools: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("relative rounded-[2.5rem] bg-stone p-6 sm:p-9", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-lg font-semibold tracking-[-0.015em]">
          Our office hours, on your clock
        </p>
        <span className="rounded-full bg-white px-3.5 py-1.5 font-display text-xs font-semibold text-ink-500 shadow-soft">
          Monday to Friday
        </span>
      </div>

      <ul className="mt-7 grid gap-3">
        {officeHoursByZone.map((zone, i) => {
          const left = ((zone.opens - START) / SPAN) * 100;
          const width = ((zone.closes - zone.opens) / SPAN) * 100;
          return (
            <li key={zone.short} className="rounded-[1.35rem] bg-white p-4 shadow-soft sm:p-5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-display font-semibold">
                  {zone.zone}
                  {zone.home ? (
                    <span className="ml-2.5 inline-flex items-center gap-1.5 rounded-full bg-yellow px-2.5 py-0.5 align-middle text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink">
                      Our clock
                    </span>
                  ) : null}
                </p>
                <p className="tabular shrink-0 whitespace-nowrap font-display text-[0.95rem] font-semibold text-ink-500">
                  {zone.label} <span className="text-ink-400">{zone.short}</span>
                </p>
              </div>
              <div aria-hidden="true" className="relative mt-3.5 h-3 rounded-full bg-stone">
                {ticks.map((tick) => (
                  <span
                    key={tick.hour}
                    className="absolute top-0 h-full w-px bg-stone-300"
                    style={{ left: `${((tick.hour - START) / SPAN) * 100}%` }}
                  />
                ))}
                <motion.span
                  className={cn(
                    "absolute top-0 h-full origin-left rounded-full",
                    zone.home ? "bg-yellow" : "bg-teal",
                  )}
                  style={{ left: `${left}%`, width: `${width}%` }}
                  initial={reduce ? false : { scaleX: 0, opacity: 0.4 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div aria-hidden="true" className="relative mt-2.5 h-5 px-4 sm:px-5">
        <div className="relative h-full">
          {ticks.map((tick) => (
            <span
              key={tick.hour}
              className="tabular absolute -translate-x-1/2 whitespace-nowrap font-display text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-ink-400"
              style={{ left: `${((tick.hour - START) / SPAN) * 100}%` }}
            >
              {tick.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-stone-300 pt-6">
        <p className="text-[0.95rem] text-ink-500">
          <span className="font-semibold text-ink">Office hours:</span> {hours}.
        </p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Works the same from any state">
        {tools.map((tool) => (
          <li
            key={tool}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 font-display text-sm font-semibold shadow-soft"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal" />
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
