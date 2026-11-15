"use client";

import { animate, motion, useInView } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

// Sample figures for an imaginary three-office group. They show the shape of
// per-location reporting; they are not ForEyes results.
const locations = [
  { name: "Downtown", revenue: 142_300, net: 31_900, mix: [0.52, 0.78, 0.3] },
  { name: "Northside", revenue: 98_700, net: 12_400, mix: [0.4, 0.5, 0.2] },
  { name: "Westgate", revenue: 76_450, net: 15_150, mix: [0.34, 0.36, 0.16] },
];
const mixLabels = ["Exams", "Optical", "Contacts"];

const totalRevenue = locations.reduce((sum, l) => sum + l.revenue, 0);
const totalNet = locations.reduce((sum, l) => sum + l.net, 0);
const topRevenue = Math.max(...locations.map((l) => l.revenue));

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const short = (n: number) => `$${(n / 1000).toFixed(1)}k`;
const margin = (net: number, revenue: number) => `${Math.round((net / revenue) * 100)}%`;

const SETTLE = [0.22, 1, 0.36, 1] as const;
const POP = [0.34, 1.4, 0.64, 1] as const;

/**
 * Three location P&Ls rolling up into one consolidated view: the cards land,
 * lines draw down from each, and the group table fills in row by row.
 */
export function AudienceLocationRollup({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const totalRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const go = inView || Boolean(reduce);
  const t = (seconds: number) => (reduce ? 0 : seconds);

  // Count the group total up once the consolidated card has arrived.
  useEffect(() => {
    const node = totalRef.current;
    if (!node || !inView || reduce) return;
    node.textContent = usd(0);
    const controls = animate(0, totalNet, {
      delay: 3.1,
      duration: 1.4,
      ease: SETTLE,
      onUpdate: (value) => {
        node.textContent = usd(value);
      },
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`Sample figures. Three location profit and loss statements, ${locations
        .map((l) => l.name)
        .join(", ")}, roll up into one consolidated view that shows revenue, net income, and margin for each office and for the group.`}
      className={cn("rounded-[2rem] bg-white p-5 text-ink shadow-float sm:p-7", className)}
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-[0.95rem] font-semibold sm:text-base">October P&L, by location</p>
          <span className="shrink-0 rounded-full bg-stone-200 px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-ink-500">
            Sample figures
          </span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.75rem] text-ink-500">
          <li className="font-display font-semibold text-ink-700">Revenue by line:</li>
          {mixLabels.map((label, i) => (
            <li key={label} className="flex items-center gap-1.5">
              <span className={cn("h-2 w-2 rounded-sm", i === 0 && "bg-navy", i === 1 && "bg-teal", i === 2 && "bg-navy-200")} />
              {label}
            </li>
          ))}
        </ul>

        {/* One P&L per office. */}
        <ul className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
          {locations.map((location, i) => (
            <motion.li
              key={location.name}
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={go ? { opacity: 1, y: 0, scale: 1 } : undefined}
              transition={{ delay: t(0.7 + i * 0.18), duration: 0.55, ease: POP }}
              className="rounded-2xl bg-stone p-2.5 sm:p-3.5"
            >
              <p className="truncate font-display text-[0.8125rem] font-semibold sm:text-[0.9375rem]">{location.name}</p>
              <div className="mt-2.5 flex h-12 items-end gap-1 sm:h-14 sm:gap-1.5">
                {location.mix.map((share, bar) => (
                  <motion.span
                    key={mixLabels[bar]}
                    initial={{ scaleY: 0 }}
                    animate={go ? { scaleY: 1 } : undefined}
                    transition={{ delay: t(0.95 + i * 0.18 + bar * 0.08), duration: 0.6, ease: SETTLE }}
                    style={{ height: `${share * 100}%` }}
                    className={cn(
                      "flex-1 origin-bottom rounded-t-md",
                      bar === 0 && "bg-navy",
                      bar === 1 && "bg-teal",
                      bar === 2 && "bg-navy-200",
                    )}
                  />
                ))}
              </div>
              <p className="mt-2 text-[0.6875rem] leading-tight text-ink-500">Net income</p>
              <p className="tabular font-display text-[0.9375rem] font-bold leading-tight sm:text-lg">{short(location.net)}</p>
            </motion.li>
          ))}
        </ul>

        {/* The three statements flowing into one. */}
        <div className="relative h-9">
          {["16.667%", "50%", "83.333%"].map((left, i) => (
            <motion.span
              key={left}
              style={{ left }}
              className="absolute top-1 -ml-[1.5px] h-3.5 w-[3px] origin-top rounded-full bg-teal"
              initial={{ scaleY: 0 }}
              animate={go ? { scaleY: 1 } : undefined}
              transition={{ delay: t(1.6 + i * 0.1), duration: 0.35, ease: "easeOut" }}
            />
          ))}
          <motion.span
            className="absolute inset-x-[16.667%] top-[1.125rem] -mx-[1.5px] h-[3px] rounded-full bg-teal"
            initial={{ scaleX: 0 }}
            animate={go ? { scaleX: 1 } : undefined}
            transition={{ delay: t(1.9), duration: 0.4, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute bottom-0 left-1/2 top-[1.125rem] -ml-[1.5px] w-[3px] origin-top rounded-full bg-teal"
            initial={{ scaleY: 0 }}
            animate={go ? { scaleY: 1 } : undefined}
            transition={{ delay: t(2.15), duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* The consolidated view. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={go ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: t(2.3), duration: 0.6, ease: SETTLE }}
          className="rounded-2xl bg-ink p-4 text-white sm:p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-sm font-semibold">All locations, one view</p>
            <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-white/60">Net · Margin</p>
          </div>
          <ul className="mt-3.5 grid gap-2.5">
            {locations.map((location, i) => (
              <li key={location.name} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-2.5 text-[0.8125rem] sm:grid-cols-[5.5rem_1fr_auto] sm:gap-3 sm:text-sm">
                <span className="truncate text-white/80">{location.name}</span>
                <span className="h-2.5 overflow-hidden rounded-full bg-white/12">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={go ? { scaleX: 1 } : undefined}
                    transition={{ delay: t(2.7 + i * 0.16), duration: 0.8, ease: SETTLE }}
                    style={{ width: `${(location.revenue / topRevenue) * 100}%` }}
                    className="block h-full origin-left rounded-full bg-teal"
                  />
                </span>
                <span className="tabular whitespace-nowrap text-right font-display font-semibold">
                  {short(location.net)}
                  <span className="ml-1.5 inline-block w-8 text-right font-medium text-white/60">{margin(location.net, location.revenue)}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/15 pt-3.5">
            <div>
              <p className="text-[0.75rem] leading-tight text-white/65">Group net income</p>
              <p className="tabular mt-1 text-[0.75rem] leading-tight text-white/65">
                on {usd(totalRevenue)} revenue
              </p>
            </div>
            <p className="tabular font-display text-[1.625rem] font-bold leading-none tracking-[-0.03em] text-yellow sm:text-3xl">
              <span ref={totalRef}>{usd(totalNet)}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
