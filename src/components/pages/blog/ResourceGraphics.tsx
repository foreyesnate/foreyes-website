"use client";

import { motion, useAnimationControls, useReducedMotion } from "motion/react";
import { useEffect } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { ResourceCard } from "./content";

// Small coded pictures for the three cards on the Resources hub. Each is a
// miniature of the thing the card leads to. They are decorative (the card's
// heading and text say everything), so the whole graphic is aria-hidden.
// Only the pricing slider moves on its own; the others respond to hover.

function Line({ className }: { className?: string }) {
  return <span className={cn("block h-2 rounded-full bg-stone-300", className)} />;
}

/** Two article cards, the front one with a cover and a lens. */
function BlogMini() {
  return (
    <div className="relative mx-auto h-[9.75rem] w-full max-w-[17rem]">
      <div className="absolute right-0 top-2 w-[62%] rotate-[5deg] rounded-2xl bg-white p-3 shadow-soft transition-transform duration-500 ease-(--ease-focus) group-hover:translate-x-2 group-hover:rotate-[8deg]">
        <div className="h-14 rounded-xl bg-teal-200" />
        <Line className="mt-3 w-4/5" />
        <Line className="mt-2 w-3/5" />
      </div>
      <div className="absolute bottom-0 left-0 w-[68%] -rotate-[4deg] rounded-2xl bg-white p-3 shadow-lift transition-transform duration-500 ease-(--ease-focus) group-hover:-translate-y-1.5 group-hover:-rotate-[2deg]">
        <div className="relative h-16 overflow-hidden rounded-xl bg-navy">
          <div className="bg-dots absolute inset-0 text-white/20" />
          <div className="absolute -right-3 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border-2 border-white/40">
            <div className="absolute inset-3 rounded-full bg-white/15" />
          </div>
          <span className="absolute left-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-lg bg-yellow text-ink">
            <Icon name="chart" size={15} />
          </span>
        </div>
        <span className="mt-3 block h-2.5 w-11/12 rounded-full bg-ink" />
        <span className="mt-1.5 block h-2.5 w-2/3 rounded-full bg-ink" />
        <Line className="mt-3 w-full" />
      </div>
    </div>
  );
}

/** A short accordion with the first answer open. */
function FaqMini() {
  return (
    <div className="mx-auto grid w-full max-w-[17rem] gap-2.5">
      <div className="rounded-2xl bg-white p-3.5 shadow-lift transition-transform duration-500 ease-(--ease-focus) group-hover:-translate-y-1">
        <div className="flex items-center justify-between gap-3">
          <span className="block h-2.5 w-3/5 rounded-full bg-ink" />
          <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow text-ink">
            <Icon name="minus" size={14} strokeWidth={2.6} />
          </span>
        </div>
        <Line className="mt-3.5 w-full bg-teal-200" />
        <Line className="mt-2 w-5/6 bg-teal-200" />
        <Line className="mt-2 w-2/5 bg-teal-200" />
      </div>
      {["w-1/2"].map((width) => (
        <div key={width} className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3.5 shadow-soft">
          <span className={cn("block h-2.5 rounded-full bg-ink/70", width)} />
          <span className="grid h-6 w-6 place-items-center rounded-full bg-navy-50 text-navy transition-transform duration-500 ease-(--ease-focus) group-hover:rotate-90">
            <Icon name="plus" size={14} strokeWidth={2.6} />
          </span>
        </div>
      ))}
    </div>
  );
}

const switches = [
  { label: "Bookkeeping", on: true },
  { label: "Payroll", on: true },
  { label: "Bill pay", on: false },
] as const;

/** The calculator in miniature: service switches, a slider and the estimate. */
function PricingMini() {
  const reduce = useReducedMotion();
  const fill = useAnimationControls();
  const knob = useAnimationControls();
  // The slider drifts between three positions and back, slowly. The loop is
  // started after mount, so the server and the first client render agree and
  // visitors who ask for reduced motion simply keep the resting position.
  useEffect(() => {
    if (reduce) return;
    const travel = ["18%", "64%", "42%", "18%"];
    const transition = { duration: 11, ease: "easeInOut", repeat: Infinity, times: [0, 0.4, 0.7, 1] } as const;
    void fill.start({ width: travel, transition: { ...transition, times: [...transition.times] } });
    void knob.start({ left: travel, transition: { ...transition, times: [...transition.times] } });
    return () => {
      fill.stop();
      knob.stop();
    };
  }, [reduce, fill, knob]);
  return (
    <div className="mx-auto grid w-full max-w-[17rem] grid-cols-[1.25fr_1fr] gap-2.5">
      <div className="rounded-2xl bg-white p-3.5 shadow-soft">
        <ul className="grid gap-2.5">
          {switches.map((item) => (
            <li key={item.label} className="flex items-center justify-between gap-2 font-display text-[0.75rem] font-semibold text-ink">
              {item.label}
              <span className={cn("flex h-4 w-7 items-center rounded-full p-0.5", item.on ? "justify-end bg-teal" : "bg-stone-300")}>
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
            </li>
          ))}
        </ul>
        <div className="relative mt-4 h-1.5 rounded-full bg-stone-200">
          <motion.span
            className="absolute inset-y-0 left-0 rounded-full bg-navy"
            style={{ width: "18%" }}
            animate={fill}
          />
          <motion.span
            className="absolute top-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full border-[3px] border-navy bg-white shadow-soft"
            style={{ left: "18%" }}
            animate={knob}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-2xl bg-yellow p-3.5 text-ink shadow-lift transition-transform duration-500 ease-(--ease-focus) group-hover:-translate-y-1">
        <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.1em]">Your estimate</span>
        <span className="mt-3 flex items-center gap-1 font-display text-xl font-bold leading-none">
          $
          <span className="block h-3 w-3 rounded-full bg-ink" />
          <span className="block h-3 w-3 rounded-full bg-ink" />
          <span className="block h-3 w-3 rounded-full bg-ink" />
        </span>
        <span className="mt-2 text-[0.75rem] text-ink/75">Per month</span>
      </div>
    </div>
  );
}

export function ResourceGraphic({ kind }: { kind: ResourceCard["key"] }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        // Contained so the miniature can never set the card's minimum width.
        "relative grid h-52 place-items-center overflow-hidden rounded-[2rem] px-6 py-4 [contain:inline-size]",
        kind === "blog" && "bg-navy-100",
        kind === "faq" && "bg-teal-100",
        kind === "pricing" && "bg-yellow-100",
      )}
    >
      <div className="bg-dots absolute inset-0 text-ink/[0.07] [mask-image:radial-gradient(closest-side,transparent_35%,black)]" />
      <div className="relative grid h-full w-full items-center">
        {kind === "blog" ? <BlogMini /> : kind === "faq" ? <FaqMini /> : <PricingMini />}
      </div>
    </div>
  );
}
