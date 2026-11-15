"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// One sample vendor bill and the four stops it makes. The second stop is the
// only one that belongs to the practice owner, so it carries the yellow.
const stages = [
  { name: "Received", who: "Us", note: "We collect the invoice, enter it, and code it.", pill: "bg-navy-50 text-navy" },
  { name: "Approved", who: "You", note: "You review it and approve it. That’s your part.", pill: "bg-yellow text-ink" },
  { name: "Scheduled", who: "Us", note: "We schedule payment around the due date and the vendor’s terms.", pill: "bg-teal-100 text-teal-800" },
  { name: "Paid", who: "Us", note: "Paid on time. The approval and the payment are on record.", pill: "bg-ink text-white" },
];

const LAST = stages.length - 1;
const EASE = [0.22, 1, 0.36, 1] as const;

/** Where stage `i` sits along the track, as a percentage of its width. */
const at = (i: number) => 12.5 + i * 25;

/**
 * The hero picture for the Accounts Payable page: a vendor bill moving
 * through received, approved, scheduled, and paid.
 */
export function SupportBillFlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = setTimeout(() => setStep((s) => (s + 1) % stages.length), step === LAST ? 3400 : 2100);
    return () => clearTimeout(timer);
  }, [step, inView, reduce]);

  // Visitors who prefer reduced motion see the finished journey.
  const stage = reduce ? LAST : step;
  const current = stages[stage];

  return (
    <figure className={cn("relative mx-auto w-full max-w-[34rem] lg:mr-0", className)}>
      <div
        ref={ref}
        role="img"
        aria-label="A sample vendor bill moves through four stages: received, approved, scheduled, and paid. We enter and code the bill, you approve it, and we schedule and record the payment."
        className="relative pt-5"
      >
        <div aria-hidden="true">
          {/* A second sheet behind, for depth. */}
          <div className="absolute inset-x-5 bottom-10 top-0 rotate-[2.5deg] rounded-[2rem] bg-navy-100" />

          <div className="relative rounded-[2rem] bg-white p-6 text-ink shadow-float sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-lg font-semibold leading-tight">One bill, start to finish</p>
              <span className="rounded-full bg-stone px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-500">
                Sample
              </span>
            </div>

            {/* The bill itself */}
            <div className="mt-5 flex items-center gap-3.5 rounded-2xl bg-stone p-3.5 sm:p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-navy shadow-soft">
                <Icon name="bill" size={22} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display font-semibold leading-tight">Lens lab invoice</span>
                <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-500">Coded to lab fees</span>
              </span>
              <span className="text-right">
                <span className="tabular block font-display font-semibold leading-tight">$1,284.60</span>
                <span className="mt-1 block h-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={current.name}
                      initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
                      transition={{ duration: 0.28, ease: EASE }}
                      className={cn(
                        "inline-flex h-6 items-center rounded-full px-2.5 font-display text-[0.7rem] font-bold",
                        current.pill,
                      )}
                    >
                      {current.name}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </div>

            {/* The track */}
            <div className="relative mt-6 h-[4.5rem]">
              <div className="absolute inset-x-[12.5%] top-[3.25rem] h-1 rounded-full bg-stone-200" />
              <motion.div
                className="absolute left-[12.5%] top-[3.25rem] h-1 rounded-full bg-teal"
                initial={false}
                animate={{ width: `${stage * 25}%` }}
                transition={{ duration: 0.8, ease: EASE }}
              />
              {stages.map((item, i) => {
                const done = i < stage;
                const here = i === stage;
                return (
                  <span
                    key={item.name}
                    style={{ left: `${at(i)}%` }}
                    className={cn(
                      "absolute top-[3.375rem] grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-colors duration-500",
                      done && "bg-teal text-ink",
                      here && (item.who === "You" ? "bg-yellow text-ink" : "bg-ink text-white"),
                      !done && !here && "border-[3px] border-stone-300 bg-white",
                    )}
                  >
                    {done || here ? <Icon name="check" size={12} strokeWidth={3.4} /> : null}
                  </span>
                );
              })}
              {/* The bill, travelling */}
              <motion.span
                className="absolute top-0 -ml-[1.0625rem] grid h-[2.125rem] w-[2.125rem] place-items-center rounded-xl bg-ink text-white shadow-lift"
                initial={false}
                animate={{ left: `${at(stage)}%` }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <Icon name="bill" size={17} />
              </motion.span>
            </div>

            <ol className="mt-2 grid grid-cols-4 text-center">
              {stages.map((item, i) => (
                <li key={item.name}>
                  <span
                    className={cn(
                      "block font-display text-[0.75rem] font-semibold transition-colors duration-500 sm:text-[0.8125rem]",
                      i <= stage ? "text-ink" : "text-ink-500",
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "mt-1 inline-block rounded-full px-2 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.08em]",
                      item.who === "You" ? "bg-yellow-100 text-ink" : "text-ink-500",
                    )}
                  >
                    {item.who}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-5 flex min-h-[4.25rem] items-center rounded-2xl border-2 border-stone-200 px-4 py-3 sm:min-h-[3.75rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={current.name}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="text-[0.925rem] leading-snug text-ink-700"
                >
                  {current.note}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-right text-sm text-ink-500">Sample bill for illustration.</figcaption>
    </figure>
  );
}
