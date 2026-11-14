"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

// Sample figures for an imaginary practice. They show what the Custom Chart of
// Accounts does to one month of activity; they are not ForEyes results.
const revenue = [
  { label: "Exam revenue", amount: 48210, color: "#415d9e" },
  { label: "Optical sales", amount: 61940, color: "#51a0ad" },
  { label: "Contact lenses", amount: 17325, color: "#b0d7dd" },
];

const costs = [
  { label: "Optical cost of goods", note: "Frames, lenses, and lab fees", amount: 29480, color: "#8fa3d0" },
  { label: "Overhead", note: "Payroll, rent, and the rest", amount: 54870, color: "#2d2b4e" },
];

const UNSORTED = "#b9b9cf";
const EASE = [0.22, 1, 0.36, 1] as const;

const opticalSales = revenue[1].amount;
const opticalCogs = costs[0].amount;
const opticalKept = opticalSales - opticalCogs;
const keptShare = opticalKept / opticalSales;

type Mode = "generic" | "custom";
type Part = { label: string; note?: string; amount: number; color: string };

const dollars = (n: number) => `$${n.toLocaleString("en-US")}`;
const sum = (parts: Part[]) => parts.reduce((total, part) => total + part.amount, 0);

function Ledger({
  heading,
  parts,
  custom,
}: {
  heading: string;
  parts: Part[];
  custom: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-[0.95rem] font-semibold">{heading}</p>
        <p className="tabular font-display text-lg font-bold">{dollars(sum(parts))}</p>
      </div>
      {/* One bar. Generic books leave it whole; ours opens it into its parts. */}
      <motion.div
        className="mt-2.5 flex h-11 overflow-hidden rounded-2xl"
        initial={false}
        animate={{ gap: custom ? "5px" : "0px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {parts.map((part, i) => (
          <motion.div
            key={part.label}
            style={{ flexGrow: part.amount, flexBasis: 0 }}
            initial={false}
            animate={{
              backgroundColor: custom ? part.color : UNSORTED,
              borderRadius: custom ? 12 : 0,
            }}
            transition={{ duration: 0.7, delay: custom ? 0.1 + i * 0.12 : 0, ease: EASE }}
          />
        ))}
      </motion.div>
      <ul className="mt-3 grid gap-1.5">
        {parts.map((part, i) => (
          <motion.li
            key={part.label}
            className="flex items-baseline gap-2.5 text-[0.9rem]"
            initial={false}
            animate={{
              opacity: custom ? 1 : 0.45,
              filter: custom ? "blur(0px)" : "blur(5px)",
            }}
            transition={{ duration: 0.6, delay: custom ? 0.25 + i * 0.12 : 0, ease: EASE }}
          >
            <span
              className="h-2.5 w-2.5 shrink-0 translate-y-[1px] rounded-full"
              style={{ backgroundColor: part.color }}
            />
            <span className="min-w-0 flex-1">
              <span className="font-medium">{part.label}</span>
              {part.note ? <span className="hidden text-ink-500 sm:inline"> · {part.note}</span> : null}
            </span>
            <span className="tabular font-display font-semibold">{dollars(part.amount)}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/**
 * What the Custom Chart of Accounts does. The same month of deposits and
 * bills, first as generic books show it (one revenue line, one expense line),
 * then split into exam, optical and contact lens revenue, with optical cost of
 * goods lifted out of overhead. Plays once when scrolled into view; the toggle
 * lets the visitor flip back and forth.
 */
export function BooksChartSplit({ className }: { className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("generic");
  const touched = useRef(false);
  const custom = mode === "custom";

  useEffect(() => {
    if (!inView || touched.current) return;
    const timer = setTimeout(() => {
      if (!touched.current) setMode("custom");
    }, reduce ? 0 : 1300);
    return () => clearTimeout(timer);
  }, [inView, reduce]);

  return (
    <figure ref={ref} className={cn("mx-auto w-full max-w-[36rem]", className)}>
      <div className="rounded-[2.5rem] bg-white p-5 shadow-float sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <p className="font-display text-sm font-semibold text-ink-500">Sample practice, October</p>
          <div role="group" aria-label="Choose how the month is sorted" className="flex items-center gap-1 rounded-full bg-stone p-1">
            {(
              [
                ["generic", "Generic books"],
                ["custom", "ForEyes books"],
              ] as const
            ).map(([value, label]) => {
              const selected = mode === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    touched.current = true;
                    setMode(value);
                  }}
                  className={cn(
                    "relative h-11 rounded-full px-4 font-display text-[0.875rem] font-semibold transition-colors duration-300",
                    selected ? "text-white" : "text-ink-500 hover:text-ink",
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="books-chart-pill"
                      className={cn("absolute inset-0 rounded-full", value === "custom" ? "bg-navy" : "bg-ink")}
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {custom
            ? `With the Custom Chart of Accounts, revenue of ${dollars(sum(revenue))} is split into exam revenue ${dollars(revenue[0].amount)}, optical sales ${dollars(revenue[1].amount)}, and contact lenses ${dollars(revenue[2].amount)}. Expenses are split into optical cost of goods ${dollars(costs[0].amount)} and overhead ${dollars(costs[1].amount)}. The optical keeps ${dollars(opticalKept)} after cost of goods.`
            : `With generic books, the month shows one revenue line of ${dollars(sum(revenue))} and one expense line of ${dollars(sum(costs))}. You cannot tell what the optical keeps after cost of goods.`}
        </p>

        <div aria-hidden="true" className="mt-7 grid gap-7">
          <Ledger heading="Revenue" parts={revenue} custom={custom} />
          <Ledger heading="Expenses" parts={costs} custom={custom} />

          <motion.div
            className="rounded-[1.5rem] p-5 sm:p-6"
            initial={false}
            animate={{
              backgroundColor: custom ? "#110f2b" : "#f4f4f8",
              color: custom ? "#ffffff" : "#55536f",
            }}
            transition={{ duration: 0.6, delay: custom ? 0.55 : 0, ease: EASE }}
          >
            <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.1em] opacity-75">
              What the optical keeps
            </p>
            <div className="mt-2 min-h-[5.75rem]">
              <AnimatePresence mode="wait" initial={false}>
                {custom ? (
                  <motion.div
                    key="custom"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.45, delay: 0.5, ease: EASE }}
                  >
                    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="tabular font-display text-[2rem] font-bold leading-none tracking-[-0.03em] text-yellow">
                        {dollars(opticalKept)}
                      </span>
                      <span className="text-[0.9rem] text-white/80">
                        after frames, lenses, and lab fees
                      </span>
                    </p>
                    <div className="mt-4 flex h-2.5 gap-1 overflow-hidden rounded-full">
                      <motion.span
                        className="origin-left rounded-full bg-navy-300"
                        style={{ flexGrow: 1 - keptShare, flexBasis: 0 }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
                      />
                      <motion.span
                        className="origin-left rounded-full bg-yellow"
                        style={{ flexGrow: keptShare, flexBasis: 0 }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
                      />
                    </div>
                    <p className="mt-2 flex justify-between text-[0.75rem] text-white/70">
                      <span>{100 - Math.round(keptShare * 100)}¢ cost of goods</span>
                      <span>{Math.round(keptShare * 100)}¢ kept per optical dollar</span>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="generic"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p className="font-display text-[2rem] font-bold leading-none tracking-[-0.03em] text-ink-400">
                      Can’t tell
                    </p>
                    <p className="mt-3 text-[0.9rem]">
                      Optical sales sit inside one revenue line. Frames, lenses, and lab fees sit
                      somewhere inside expenses.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-ink-500">
        Sample figures for illustration. Same month, same deposits, sorted two ways.
      </figcaption>
    </figure>
  );
}
