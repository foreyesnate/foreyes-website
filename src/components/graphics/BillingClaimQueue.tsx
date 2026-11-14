"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { WorklistRow } from "@/content/services/insurance-billing";

// How each status reads. Labels carry the meaning; colour only supports it.
const statusStyle: Record<string, string> = {
  Reviewed: "bg-stone-200 text-ink-700",
  Submitted: "bg-navy-50 text-navy-700",
  Paid: "bg-teal-100 text-teal-800",
  Posted: "bg-yellow text-ink",
  Denied: "bg-ink text-white",
  "Appeal filed": "bg-navy text-white",
  "Call received": "bg-stone-200 text-ink-700",
  Answered: "bg-teal-100 text-teal-800",
};

const planStyle: Record<WorklistRow["plan"], string> = {
  "Vision plan": "bg-teal",
  Medical: "bg-navy",
  Patient: "bg-ink-400",
};

/**
 * A sample billing worklist for the Insurance Billing hero. One claim moves
 * forward every couple of seconds: reviewed, submitted, paid, posted. The
 * denied claim is appealed and paid. Everything shown is sample data.
 */
export function BillingClaimQueue({
  title,
  rows,
  facts,
  className,
}: {
  title: string;
  rows: WorklistRow[];
  facts: { label: string; value: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.4 });
  const [steps, setSteps] = useState(() => rows.map((row) => row.start));
  const turn = useRef(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = window.setInterval(() => {
      const i = turn.current % rows.length;
      turn.current += 1;
      setSteps((current) =>
        current.map((step, index) => (index === i ? (step + 1) % rows[index].flow.length : step)),
      );
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduce, inView, rows]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="A sample claim worklist. Vision plan and medical claims move from reviewed to submitted, paid, and posted. A denied claim is appealed and paid, and a patient's statement question is answered."
      className={cn("relative", className)}
    >
      <div aria-hidden="true" className="relative rounded-[2.25rem] border border-white/70 bg-white/40 p-2 shadow-float backdrop-blur-sm sm:rounded-[2.5rem] sm:p-5">
        <div className="rounded-[1.75rem] bg-white p-4 text-ink shadow-soft sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-2.5 font-display text-[0.95rem] font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-teal-100 text-teal-800">
                <Icon name="claim" size={17} />
              </span>
              {title}
            </p>
            <span className="rounded-full bg-yellow-100 px-2.5 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-yellow-800">
              Sample
            </span>
          </div>

          <ul className="mt-5 grid gap-2">
            {rows.map((row, index) => {
              const status = row.flow[steps[index]];
              return (
                <li
                  key={row.item}
                  className="flex items-center gap-2.5 rounded-2xl bg-stone px-3 py-3 sm:gap-3 sm:px-4"
                >
                  <span className={cn("h-8 w-1.5 shrink-0 rounded-full", planStyle[row.plan])} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[0.875rem] font-semibold leading-tight sm:text-[0.95rem]">
                      {row.item}
                    </span>
                    <span className="mt-0.5 block text-xs text-ink-500">{row.plan}</span>
                  </span>
                  <span className="relative flex h-7 w-[5.9rem] shrink-0 justify-end sm:w-[6.75rem]">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={status}
                        initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                          "inline-flex h-7 items-center gap-1 whitespace-nowrap rounded-full px-2 font-display text-[0.68rem] font-bold sm:px-2.5 sm:text-[0.72rem]",
                          statusStyle[status] ?? "bg-stone-200 text-ink-700",
                        )}
                      >
                        {status === "Posted" || status === "Answered" ? (
                          <Icon name="check" size={12} strokeWidth={3.2} />
                        ) : null}
                        {status}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </li>
              );
            })}
          </ul>

          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-stone-200 pt-5">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-navy-50 px-2 py-3 text-center">
                <dt className="font-display text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.06em] text-ink-500 sm:text-[0.7rem] sm:tracking-[0.08em]">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-[0.95rem] font-bold tracking-[-0.02em] text-navy-700 sm:text-lg">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* The one accent: the queue is being worked right now. */}
      <div
        aria-hidden="true"
        className="absolute right-3 -top-4 flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-display text-xs font-bold text-white shadow-lift sm:-right-3"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-yellow" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-yellow" />
        </span>
        Worked every day
      </div>
    </div>
  );
}
