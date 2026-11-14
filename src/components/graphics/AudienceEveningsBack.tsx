"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// A sample week of the after-hours jobs an owner ends up doing. Illustrative
// only: it is not a ForEyes result or a promise of hours saved.
const week = [
  { day: "Mon", task: "Reconcile bank" },
  { day: "Tue", task: "Chase claims" },
  { day: "Wed", task: "Pay lab bills" },
  { day: "Thu", task: "Run payroll" },
  { day: "Fri", task: "Post payments" },
];

const SETTLE = [0.22, 1, 0.36, 1] as const;
const START = 1.1;
const GAP = 0.8;

// The tally rolls up one digit each time a task lands with our team.
const TALLY_END = START + (week.length - 1) * GAP + 0.9;
const tally = week.reduce(
  (acc, _, i) => {
    const landed = START + i * GAP + 0.6;
    acc.y.push(`-${(i / (week.length + 1)) * 100}%`, `-${((i + 1) / (week.length + 1)) * 100}%`);
    acc.times.push(landed / TALLY_END, (landed + 0.3) / TALLY_END);
    return acc;
  },
  { y: ["0%"], times: [0] },
);

function Moon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.5 14.2A8.6 8.6 0 0 1 9.8 3.5a8.6 8.6 0 1 0 10.7 10.7Z" />
    </svg>
  );
}

/**
 * A week of an owner's evenings. One by one, each after-hours task slides off
 * the owner's plate to the ForEyes team, and the evening is handed back.
 */
export function AudienceEveningsBack({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const go = inView || Boolean(reduce);
  const at = (i: number, offset = 0) => (reduce ? 0 : START + i * GAP + offset);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="A sample week. Five after-hours tasks, bank reconciliation, claim follow-up, lab bills, payroll, and payment posting, move from the owner's evenings to the ForEyes team, and all five evenings are handed back."
      className={cn("rounded-[2rem] bg-white p-5 text-ink shadow-float sm:p-7", className)}
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-[0.95rem] font-semibold sm:text-base">After-hours work, one week</p>
          <span className="shrink-0 rounded-full bg-stone-200 px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-ink-500">
            Sample week
          </span>
        </div>

        <div className="mt-6 grid grid-cols-[2.25rem_1fr] items-center gap-x-2 sm:grid-cols-[2.75rem_1fr] sm:gap-x-3">
          <span />
          <div className="grid grid-cols-2 px-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-ink-400 sm:text-xs">
            <span>Your evening</span>
            <span className="pl-2 text-teal-700">Our team</span>
          </div>
        </div>

        <ol className="mt-2.5 grid gap-2">
          {week.map((slot, i) => (
            <li key={slot.day} className="grid grid-cols-[2.25rem_1fr] items-center gap-x-2 sm:grid-cols-[2.75rem_1fr] sm:gap-x-3">
              <span className="font-display text-sm font-semibold text-ink-500">{slot.day}</span>
              <div className="relative grid h-11 grid-cols-2 sm:h-12">
                {/* What is left in the owner's column once the task has gone. */}
                <div className="px-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={go ? { opacity: 1 } : undefined}
                    transition={{ delay: at(i, 0.45), duration: 0.5 }}
                    className="flex h-full items-center gap-1.5 rounded-xl bg-teal-50 px-2 font-display text-[0.75rem] font-semibold leading-[1.15] text-teal-800 sm:px-3 sm:text-[0.8125rem]"
                  >
                    <Moon className="shrink-0" />
                    <span>Evening back</span>
                  </motion.div>
                </div>
                {/* Where the task is heading. */}
                <div className="px-1">
                  <div className="h-full rounded-xl border-2 border-dashed border-stone-300" />
                </div>
                {/* The task itself. */}
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/2 px-1"
                  initial={{ x: "0%" }}
                  animate={go ? { x: "100%" } : undefined}
                  transition={{ delay: at(i), duration: 0.85, ease: SETTLE }}
                >
                  <motion.div
                    initial={{ backgroundColor: "#e9e9f1", color: "#2d2b4e" }}
                    animate={go ? { backgroundColor: "#415d9e", color: "#ffffff" } : undefined}
                    transition={{ delay: at(i, 0.35), duration: 0.45 }}
                    className="flex h-full items-center gap-1.5 rounded-xl px-2 font-display text-[0.75rem] font-semibold leading-[1.15] shadow-soft sm:gap-2 sm:px-3 sm:text-[0.8125rem]"
                  >
                    <motion.span
                      initial={{ scale: 0, width: 0 }}
                      animate={go ? { scale: 1, width: "1rem" } : undefined}
                      transition={{ delay: at(i, 0.6), duration: 0.35, ease: [0.34, 1.4, 0.64, 1] }}
                      className="grid h-4 shrink-0 place-items-center overflow-hidden rounded-full bg-teal text-ink"
                    >
                      <Icon name="check" size={10} strokeWidth={3.6} />
                    </motion.span>
                    <span>{slot.task}</span>
                  </motion.div>
                </motion.div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-yellow px-4 py-3.5 sm:px-5">
          <p className="font-display text-sm font-semibold leading-tight sm:text-[0.95rem]">Evenings handed back</p>
          <p className="tabular font-display text-2xl font-bold leading-none tracking-[-0.03em]">
            <span className="inline-block h-[1em] overflow-hidden align-bottom">
              <motion.span
                className="flex flex-col"
                initial={{ y: "0%" }}
                animate={go ? { y: tally.y } : undefined}
                transition={{ duration: reduce ? 0 : TALLY_END, times: tally.times, ease: "easeInOut" }}
              >
                {Array.from({ length: week.length + 1 }, (_, n) => (
                  <span key={n} className="block h-[1em]">
                    {n}
                  </span>
                ))}
              </motion.span>
            </span>
            <span className="text-base font-semibold opacity-70"> of {week.length}</span>
          </p>
        </div>
        <p className="mt-3 text-center text-xs text-ink-500">Sample tasks for illustration. Your list will differ.</p>
      </div>
    </div>
  );
}
