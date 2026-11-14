"use client";

import { motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// Sample figures for an imaginary practice (the same month used in
// BooksChartSplit). They are not ForEyes results.
const groups = [
  {
    heading: "Revenue",
    first: 0,
    rows: [
      { label: "Exam revenue", amount: "$48,210", share: 0.78, bar: "bg-navy" },
      { label: "Optical sales", amount: "$61,940", share: 1, bar: "bg-teal" },
      { label: "Contact lenses", amount: "$17,325", share: 0.28, bar: "bg-teal-200" },
    ],
  },
  {
    heading: "Costs",
    first: 3,
    rows: [
      { label: "Optical cost of goods", amount: "($29,480)", share: 0.48, bar: "bg-navy-300" },
      { label: "Overhead", amount: "($54,870)", share: 0.89, bar: "bg-ink-700" },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.34, 1.4, 0.64, 1] as const;

/**
 * The hero picture for the Bookkeeping page: the monthly P&L a client opens
 * in their portal, with revenue split the eyecare way and the quality control
 * review stamped on it.
 */
export function BooksHeroReport({ className }: { className?: string }) {
  return (
    <figure className={cn("relative mx-auto w-full max-w-[34rem] lg:mr-0", className)}>
      <div
        role="img"
        aria-label="A sample monthly profit and loss statement. Revenue is split into exam revenue, optical sales, and contact lenses. Costs are split into optical cost of goods and overhead. The report is marked as reviewed by quality control and due in the client portal by business day 10."
        className="relative pb-9 pt-5"
      >
        <div aria-hidden="true">
          {/* A second sheet behind, for depth. */}
          <div className="absolute inset-x-5 bottom-14 top-0 rotate-[3deg] rounded-[2rem] bg-white/15 ring-1 ring-inset ring-white/20" />

          <div className="relative rounded-[2rem] bg-white p-6 text-ink shadow-float sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold leading-tight">October profit &amp; loss</p>
                <p className="mt-1 text-[0.85rem] text-ink-500">Sample practice</p>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.7, rotate: -14 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ delay: 1.7, duration: 0.55, ease: SETTLE }}
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-yellow px-3 py-1.5 font-display text-[0.75rem] font-bold uppercase tracking-[0.08em] text-ink"
              >
                <Icon name="check" size={13} strokeWidth={3.2} />
                Reviewed
              </motion.span>
            </div>

            {groups.map((group) => (
              <div key={group.heading} className="mt-5">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  {group.heading}
                </p>
                <ul className="mt-2.5 grid gap-3">
                  {group.rows.map((item, i) => {
                    const delay = 0.55 + (group.first + i) * 0.13;
                    return (
                      <li key={item.label}>
                        <div className="flex items-baseline justify-between gap-3 text-[0.925rem]">
                          <span className="truncate">{item.label}</span>
                          <span className="tabular font-display font-semibold">{item.amount}</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-stone-200">
                          <motion.div
                            className={cn("h-full origin-left rounded-full", item.bar)}
                            style={{ width: `${item.share * 100}%` }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay, duration: 0.9, ease: EASE }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-stone px-4 py-3.5">
              <span className="text-[0.925rem] text-ink-500">Net income</span>
              <span className="tabular font-display text-xl font-bold">$43,125</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.6, ease: EASE }}
            className="absolute -bottom-0 left-3 sm:-left-5"
          >
            <div className="flex animate-float-slow items-center gap-3 rounded-2xl bg-ink py-3 pl-3 pr-5 text-white shadow-lift ring-1 ring-white/15">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-ink">
                <Icon name="calendar" size={20} />
              </span>
              <span>
                <span className="block text-[0.75rem] text-white/70">In your portal</span>
                <span className="block font-display text-[0.95rem] font-semibold leading-tight">By business day 10</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <figcaption className="mt-3 text-right text-sm text-white/65">
        Sample figures for illustration.
      </figcaption>
    </figure>
  );
}
