"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const phases = [
  { label: "Categorize", days: [1, 2, 3] },
  { label: "Reconcile", days: [4, 5, 6] },
  { label: "Review", days: [7, 8, 9] },
  { label: "Deliver", days: [10] },
];

/**
 * The monthly close as ten business days ticking by. Each day checks off in
 * turn and the tenth lands on "reviewed reports delivered".
 */
export function CloseCalendar({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      role="img"
      aria-label="The monthly close: transactions are categorized, accounts reconciled, and reports reviewed, with reviewed reports delivered by the tenth business day."
      className={cn("rounded-[1.75rem] bg-white/10 p-5 ring-1 ring-inset ring-white/15 sm:p-6", className)}
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-white/80">
            Monthly close, business days
          </p>
          <motion.span
            data-reveal=""
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : 2.3, duration: 0.5, ease: [0.34, 1.4, 0.64, 1] }}
            className="rounded-full bg-yellow px-3 py-1 font-display text-xs font-bold text-ink"
          >
            Delivered
          </motion.span>
        </div>
        <ol className="mt-5 grid grid-cols-5 gap-2 sm:gap-2.5">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((day) => {
            const last = day === 10;
            return (
              <motion.li
                key={day}
                data-reveal=""
                initial={{ opacity: 0.35, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduce ? 0 : 0.25 + day * 0.19,
                  duration: 0.45,
                  ease: [0.34, 1.4, 0.64, 1],
                }}
                className={cn(
                  "relative grid aspect-square place-items-center rounded-2xl font-display text-lg font-bold",
                  last ? "bg-yellow text-ink" : "bg-white text-navy",
                )}
              >
                <span className="tabular">{day}</span>
                <motion.span
                  data-reveal=""
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: reduce ? 0 : 0.45 + day * 0.19,
                    duration: 0.35,
                    ease: [0.34, 1.4, 0.64, 1],
                  }}
                  className={cn(
                    "absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full",
                    last ? "bg-ink text-yellow" : "bg-teal text-ink",
                  )}
                >
                  <Icon name="check" size={11} strokeWidth={3.4} />
                </motion.span>
              </motion.li>
            );
          })}
        </ol>
        <ul className="mt-4 grid grid-cols-4 gap-1 text-center font-display text-[0.6875rem] font-semibold text-white/65 sm:gap-2 sm:text-xs sm:uppercase sm:tracking-[0.08em]">
          {phases.map((phase) => (
            <li key={phase.label} className={cn(phase.label === "Deliver" && "text-white underline decoration-yellow decoration-2 underline-offset-4")}>
              {phase.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
