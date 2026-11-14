"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// Sample entries for an imaginary practice, for illustration only.
const pairs = [
  { entry: "Card deposit", date: "10/03", amount: "+ $3,412.60" },
  { entry: "Frame vendor", date: "10/07", amount: "− $2,140.00" },
  { entry: "Lab bill", date: "10/09", amount: "− $1,265.40" },
  { entry: "Vision plan EFT", date: "10/14", amount: "+ $1,947.25" },
];

const BALANCE = "$48,912.07";
const SETTLE = [0.34, 1.4, 0.64, 1] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Monthly reconciliation in miniature: each line in the books is linked to
 * the same line on the bank statement, then the two balances agree.
 */
export function BooksReconcile({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const at = (seconds: number) => (reduce ? 0 : seconds);
  const done = 0.5 + pairs.length * 0.5;

  return (
    <figure className={cn("mx-auto w-full max-w-[36rem]", className)}>
      <div
        role="img"
        aria-label="A sample reconciliation. Four entries in the books are each matched to the same entry on the bank statement, and the book balance equals the bank balance."
        className="rounded-[2.5rem] bg-white p-5 shadow-float sm:p-8"
      >
        <div aria-hidden="true">
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-sm font-semibold text-ink-500">Operating account, October</p>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: at(done + 0.5), duration: 0.5, ease: SETTLE }}
              className="rounded-full bg-yellow px-3 py-1 font-display text-xs font-bold text-ink"
            >
              Reconciled
            </motion.span>
          </div>

          <div className="mt-6 grid grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] font-display text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-400 sm:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)]">
            <span>Your books</span>
            <span />
            <span>Bank statement</span>
          </div>

          <ul className="mt-2.5 grid gap-2.5">
            {pairs.map((pair, i) => {
              const delay = at(0.5 + i * 0.5);
              return (
                <li key={pair.entry} className="grid grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] items-center sm:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)]">
                  <motion.div
                    className="rounded-2xl px-3.5 py-3"
                    initial={{ backgroundColor: "#f4f4f8" }}
                    whileInView={{ backgroundColor: "#edf6f7" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay, duration: 0.5 }}
                  >
                    <p className="truncate text-[0.8rem] text-ink-500">{pair.entry}</p>
                    <p className="tabular font-display text-[0.9rem] font-semibold sm:text-[0.95rem]">{pair.amount}</p>
                  </motion.div>

                  <div className="relative grid h-full place-items-center">
                    <motion.span
                      className="absolute inset-x-0 top-1/2 h-0.5 origin-left -translate-y-1/2 bg-teal"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ delay, duration: 0.45, ease: EASE }}
                    />
                    <motion.span
                      className="relative grid h-6 w-6 place-items-center rounded-full bg-teal text-ink"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ delay: delay + at(0.3), duration: 0.35, ease: SETTLE }}
                    >
                      <Icon name="check" size={13} strokeWidth={3.2} />
                    </motion.span>
                  </div>

                  <motion.div
                    className="rounded-2xl px-3.5 py-3"
                    initial={{ backgroundColor: "#f4f4f8" }}
                    whileInView={{ backgroundColor: "#edf6f7" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: delay + at(0.3), duration: 0.5 }}
                  >
                    <p className="truncate text-[0.8rem] text-ink-500">Cleared {pair.date}</p>
                    <p className="tabular font-display text-[0.9rem] font-semibold sm:text-[0.95rem]">{pair.amount}</p>
                  </motion.div>
                </li>
              );
            })}
          </ul>

          <motion.div
            className="mt-5 grid grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] items-center rounded-[1.5rem] bg-ink py-4 text-white sm:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)]"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: at(done + 0.15), duration: 0.6 }}
          >
            <div className="px-3.5">
              <p className="text-[0.75rem] text-white/70">Book balance</p>
              <p className="tabular font-display text-[1.05rem] font-bold sm:text-xl">{BALANCE}</p>
            </div>
            <motion.span
              className="grid h-9 w-9 place-items-center justify-self-center rounded-full bg-yellow font-display text-lg font-bold text-ink"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: at(done + 0.35), duration: 0.4, ease: SETTLE }}
            >
              =
            </motion.span>
            <div className="px-3.5">
              <p className="text-[0.75rem] text-white/70">Bank balance</p>
              <p className="tabular font-display text-[1.05rem] font-bold sm:text-xl">{BALANCE}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-ink-500">
        Sample entries for illustration.
      </figcaption>
    </figure>
  );
}
