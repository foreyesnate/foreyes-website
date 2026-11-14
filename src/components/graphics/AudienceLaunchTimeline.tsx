"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// A sample pre-opening checklist. The tasks are things ForEyes sets up; the
// order and wording are illustrative, not a fixed schedule.
const tasks = [
  { task: "Custom Chart of Accounts built", service: "Bookkeeping" },
  { task: "Bank and card accounts connected", service: "Bookkeeping" },
  { task: "Payroll set up on Gusto", service: "Payroll" },
  { task: "Vendor bills routed to Bill.com", service: "Accounts Payable" },
  { task: "Insurance billing connected", service: "Insurance Billing" },
];

const POP = [0.34, 1.4, 0.64, 1] as const;
const START = 1;
const GAP = 0.75;

/**
 * The run-up to opening day. Setup tasks check off one after another down a
 * rail, and the last stop, "First patient", lights up once all are done.
 */
export function AudienceLaunchTimeline({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const go = inView || Boolean(reduce);
  const at = (i: number, offset = 0) => (reduce ? 0 : START + i * GAP + offset);
  const end = at(tasks.length);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="A sample launch plan. Five setup tasks are checked off before the first patient: Custom Chart of Accounts built, bank and card accounts connected, payroll set up on Gusto, vendor bills routed to Bill.com, and insurance billing connected."
      className={cn("rounded-[2rem] bg-white p-5 text-ink shadow-float sm:p-7", className)}
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-[0.95rem] font-semibold sm:text-base">Before your first patient</p>
          <span className="shrink-0 rounded-full bg-stone-200 px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-ink-500">
            Sample plan
          </span>
        </div>

        <div className="relative mt-6">
          {/* The rail, filling as tasks are completed. */}
          <div className="absolute bottom-9 left-[0.8125rem] top-3 w-1 rounded-full bg-stone-200">
            <motion.div
              className="h-full w-full origin-top rounded-full bg-teal"
              initial={{ scaleY: 0 }}
              animate={go ? { scaleY: 1 } : undefined}
              transition={{ delay: at(0, -0.2), duration: reduce ? 0 : tasks.length * GAP + 0.2, ease: "linear" }}
            />
          </div>

          <ol className="relative grid gap-2.5">
            {tasks.map((item, i) => (
              <li key={item.task} className="flex items-center gap-3 sm:gap-4">
                <span className="relative grid h-[1.875rem] w-[1.875rem] shrink-0 place-items-center rounded-full border-[3px] border-stone-300 bg-white">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={go ? { scale: 1 } : undefined}
                    transition={{ delay: at(i), duration: 0.4, ease: POP }}
                    className="absolute -inset-[3px] grid place-items-center rounded-full bg-teal text-ink"
                  >
                    <Icon name="check" size={14} strokeWidth={3.2} />
                  </motion.span>
                </span>
                <motion.div
                  initial={{ opacity: 0.45 }}
                  animate={go ? { opacity: 1 } : undefined}
                  transition={{ delay: at(i), duration: 0.4 }}
                  className="flex min-h-12 flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-0.5 rounded-xl bg-stone px-3.5 py-2"
                >
                  <span className="font-display text-[0.875rem] font-semibold leading-snug sm:text-[0.9375rem]">
                    {item.task}
                  </span>
                  <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-teal-700">
                    {item.service}
                  </span>
                </motion.div>
              </li>
            ))}

            {/* Opening day. */}
            <li className="mt-1 flex items-center gap-3 sm:gap-4">
              <span className="relative grid h-[1.875rem] w-[1.875rem] shrink-0 place-items-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={go ? { opacity: 1 } : undefined}
                  transition={{ delay: end + 0.3, duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-yellow" />
                </motion.span>
                <motion.span
                  initial={{ backgroundColor: "#d8d8e6", scale: 0.8 }}
                  animate={go ? { backgroundColor: "#fcba02", scale: 1 } : undefined}
                  transition={{ delay: end, duration: 0.45, ease: POP }}
                  className="relative grid h-[1.875rem] w-[1.875rem] place-items-center rounded-full text-ink"
                >
                  <Icon name="eye" size={16} strokeWidth={2.4} />
                </motion.span>
              </span>
              <motion.div
                initial={{ backgroundColor: "#f4f4f8" }}
                animate={go ? { backgroundColor: "#fcba02" } : undefined}
                transition={{ delay: end, duration: 0.5 }}
                className="flex min-h-[3.75rem] flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-0.5 rounded-xl px-3.5 py-2.5"
              >
                <span className="font-display text-base font-bold leading-snug sm:text-lg">First patient</span>
                <span className="text-[0.8125rem] font-medium leading-snug text-ink/80">
                  Books open. Claims ready to go.
                </span>
              </motion.div>
            </li>
          </ol>
        </div>
        <p className="mt-4 text-center text-xs text-ink-500">Sample plan for illustration. Your setup list is agreed at onboarding.</p>
      </div>
    </div>
  );
}
