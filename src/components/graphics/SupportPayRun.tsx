"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// A sample month of weekdays. Payday is every other Friday here; a practice's
// real schedule is whatever it sets.
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const weeks = [
  [3, 4, 5, 6, 7],
  [10, 11, 12, 13, 14],
  [17, 18, 19, 20, 21],
  [24, 25, 26, 27, 28],
];
const PAYDAY = 14;
const NEXT_PAYDAY = 28;

// The days leading up to payday, one beat each.
const beats = [
  { day: 11, who: "Your team", note: "Time cards are in." },
  { day: 12, who: "You", note: "You review time cards and click submit." },
  { day: 13, who: "ForEyes", note: "We run payroll in Gusto." },
  { day: PAYDAY, who: "Payday", note: "Direct deposits land in your team’s accounts." },
];

const outcomes = ["Direct deposit sent", "Deductions applied", "Payroll taxes calculated"];

const LAST = beats.length - 1;
const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.34, 1.4, 0.64, 1] as const;

/**
 * The hero picture for the Payroll page: a pay-run calendar. The run moves
 * through the week and lands on payday.
 */
export function SupportPayRun({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = setTimeout(() => setStep((s) => (s + 1) % beats.length), step === LAST ? 3600 : 1900);
    return () => clearTimeout(timer);
  }, [step, inView, reduce]);

  // Visitors who prefer reduced motion see payday, landed.
  const beat = reduce ? LAST : step;
  const current = beats[beat];
  const landed = beat === LAST;

  return (
    <figure className={cn("relative mx-auto w-full max-w-[34rem] lg:mr-0", className)}>
      <div
        ref={ref}
        role="img"
        aria-label="A sample pay-run calendar with payday every other Friday. In the days before payday, time cards come in, you review them and click submit, and we run payroll in Gusto. On payday, direct deposits land."
        className="relative pt-5"
      >
        <div aria-hidden="true">
          {/* A second sheet behind, for depth. */}
          <div className="absolute inset-x-5 bottom-10 top-0 -rotate-[2.5deg] rounded-[2rem] bg-yellow-100" />

          <div className="relative rounded-[2rem] bg-white p-6 text-ink shadow-float sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold leading-tight">Pay run calendar</p>
                <p className="mt-1 text-[0.85rem] text-ink-500">Paid every other Friday</p>
              </div>
              <span className="rounded-full bg-stone px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-500">
                Sample
              </span>
            </div>

            <ol className="mt-5 grid grid-cols-5 gap-1.5 text-center font-display text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-400 sm:gap-2">
              {weekdays.map((day) => (
                <li key={day}>{day}</li>
              ))}
            </ol>
            <ol className="mt-2 grid grid-cols-5 gap-1.5 sm:gap-2">
              {weeks.flat().map((day) => {
                const beatIndex = beats.findIndex((b) => b.day === day);
                const done = beatIndex !== -1 && beatIndex < beat;
                const here = beatIndex === beat;
                const payday = day === PAYDAY;
                const paid = payday && landed;
                return (
                  <motion.li
                    key={day}
                    initial={false}
                    animate={{ scale: paid ? 1.08 : 1 }}
                    transition={{ duration: 0.5, ease: SETTLE }}
                    className={cn(
                      "tabular relative grid h-10 place-items-center rounded-xl font-display text-[0.95rem] font-semibold transition-colors duration-300 sm:h-11",
                      paid && "z-10 bg-yellow text-ink shadow-lift",
                      !paid && here && "bg-ink text-white",
                      !paid && !here && done && "bg-teal-100 text-teal-800",
                      !paid && !here && !done && (payday || day === NEXT_PAYDAY) && "border-2 border-dashed border-yellow-600 bg-yellow-50 text-ink",
                      !paid && !here && !done && !payday && day !== NEXT_PAYDAY && "bg-stone text-ink-500",
                    )}
                  >
                    {day}
                    {done || paid ? (
                      <span
                        className={cn(
                          "absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full",
                          paid ? "bg-ink text-yellow" : "bg-teal text-ink",
                        )}
                      >
                        <Icon name="check" size={9} strokeWidth={3.6} />
                      </span>
                    ) : null}
                  </motion.li>
                );
              })}
            </ol>

            <div className="mt-5 flex min-h-[4.5rem] items-center gap-3 rounded-2xl border-2 border-stone-200 px-4 py-3 sm:min-h-[3.75rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={current.day}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.925rem] leading-snug text-ink-700"
                >
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.08em]",
                      landed ? "bg-yellow text-ink" : current.who === "You" ? "bg-ink text-white" : "bg-stone text-ink-700",
                    )}
                  >
                    {current.who}
                  </span>
                  {current.note}
                </motion.p>
              </AnimatePresence>
            </div>

            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {outcomes.map((outcome, i) => (
                <li
                  key={outcome}
                  style={{ transitionDelay: landed ? `${i * 140}ms` : "0ms" }}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-3 py-2 font-display text-[0.75rem] font-semibold leading-tight transition-colors duration-500",
                    landed ? "bg-teal-100 text-teal-800" : "bg-stone text-ink-400",
                  )}
                >
                  <Icon name="check" size={13} strokeWidth={3.2} className="shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-right text-sm text-ink-500">Sample schedule for illustration.</figcaption>
    </figure>
  );
}
