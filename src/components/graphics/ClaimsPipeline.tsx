"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const stages = ["Reviewed", "Submitted", "Paid", "Posted"];

// Each claim chip travels the track on its own schedule. The third is denied
// at the payer, drops back to be appealed, then goes through.
const chips = [
  { id: "A", delay: 0, denied: false },
  { id: "B", delay: 2.1, denied: false },
  { id: "C", delay: 4.2, denied: true },
];

/** Claims moving from reviewed to posted, with one denial being appealed. */
export function ClaimsPipeline({
  className,
  tone = "light",
}: {
  className?: string;
  /** "light" sits on a dark panel, "dark" on a pale one. */
  tone?: "light" | "dark";
}) {
  const light = tone === "light";
  return (
    <div
      role="img"
      aria-label="Claims moving through four stages: reviewed, submitted, paid, and posted. A denied claim is appealed and paid."
      className={cn(
        "rounded-[1.75rem] p-5 ring-1 ring-inset sm:p-6",
        light ? "bg-ink/10 ring-ink/10" : "bg-white ring-stone-200",
        className,
      )}
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between">
          <p className={cn("font-display text-sm font-semibold", light ? "text-ink/75" : "text-ink-500")}>
            Claims, worked daily
          </p>
          <span className="flex items-center gap-2 font-display text-xs font-bold text-ink">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-ink" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-ink" />
            </span>
            Example queue
          </span>
        </div>

        <div className="relative mt-9 h-16">
          {/* Track */}
          <div className="absolute inset-x-[12.5%] top-1/2 h-1 -translate-y-1/2 rounded-full bg-ink/15" />
          <svg
            className="absolute inset-x-[12.5%] top-1/2 h-1 w-[75%] -translate-y-1/2 overflow-visible"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="2"
              x2="100%"
              y2="2"
              stroke="var(--color-ink)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="animate-dash"
              opacity="0.5"
            />
          </svg>
          {/* Stage nodes */}
          <ol className="absolute inset-x-[12.5%] top-1/2 flex -translate-y-1/2 justify-between">
            {stages.map((stage) => (
              <li key={stage} className="relative grid h-4 w-4 place-items-center">
                <span className="h-4 w-4 rounded-full border-[3px] border-ink bg-white" />
              </li>
            ))}
          </ol>
          {/* Travelling claims */}
          {chips.map((chip) => (
              <motion.span
                key={chip.id}
                className={cn(
                  "absolute top-1/2 -ml-5 -mt-[1.05rem] grid h-[2.1rem] w-10 place-items-center rounded-lg font-display text-[0.65rem] font-bold shadow-soft motion-reduce:hidden",
                  chip.denied ? "bg-ink text-white" : "bg-yellow text-ink",
                )}
                initial={{ left: "12.5%", opacity: 0 }}
                animate={
                  chip.denied
                    ? {
                        left: ["12.5%", "37.5%", "50%", "37.5%", "37.5%", "62.5%", "87.5%", "87.5%"],
                        // The denied claim lifts off the track (into the clear
                        // band above it) so it never covers the stage labels.
                        top: ["50%", "50%", "50%", "-14%", "-14%", "50%", "50%", "50%"],
                        opacity: [0, 1, 1, 1, 1, 1, 1, 0],
                        backgroundColor: [
                          "#fcba02",
                          "#fcba02",
                          "#110f2b",
                          "#110f2b",
                          "#110f2b",
                          "#fcba02",
                          "#fcba02",
                          "#fcba02",
                        ],
                        color: ["#110f2b", "#110f2b", "#ffffff", "#ffffff", "#ffffff", "#110f2b", "#110f2b", "#110f2b"],
                      }
                    : {
                        left: ["12.5%", "37.5%", "62.5%", "87.5%", "87.5%"],
                        opacity: [0, 1, 1, 1, 0],
                      }
                }
                transition={{
                  duration: 6.3,
                  delay: chip.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: chip.denied
                    ? [0, 0.16, 0.3, 0.42, 0.56, 0.72, 0.9, 1]
                    : [0, 0.3, 0.6, 0.9, 1],
                }}
              >
                {chip.denied ? "CO-16" : "$"}
            </motion.span>
          ))}
        </div>

        <ol className="mt-1 grid grid-cols-4 text-center font-display text-[0.6875rem] font-semibold text-ink/75 sm:text-xs sm:uppercase sm:tracking-[0.08em]">
          {stages.map((stage) => (
            <li key={stage}>{stage}</li>
          ))}
        </ol>
        <p className="mt-7 text-center font-display text-xs font-semibold text-ink/70">
          Denied at the payer? Appealed and resubmitted.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-ink/10 pt-5 sm:grid-cols-4">
          {["Clean claim rate", "Denial rate", "Days in A/R", "Collection %"].map((kpi) => (
            <li
              key={kpi}
              className="rounded-xl bg-white/55 px-2 py-2.5 text-center font-display text-[0.7rem] font-semibold leading-tight text-ink sm:text-xs"
            >
              {kpi}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-xs text-ink/70">Reported to you every month.</p>
      </div>
    </div>
  );
}
