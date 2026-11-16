"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type JourneyStep = {
  icon: IconName;
  title: string;
  body: string;
  /** Which half of the business owns the step. */
  owner: "billing" | "books";
};

/**
 * One dollar's trip from the exam chair to the P&L. The connecting line draws
 * itself as the visitor scrolls, and each stop lights up as the line reaches it.
 */
export function JourneyLine({ steps }: { steps: JourneyStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Every stop is lit by the time the row sits in the middle of the screen.
    offset: ["start 78%", "end 75%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const scale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <ol ref={ref} className="relative grid gap-9 lg:grid-cols-5 lg:gap-5">
      {/* Track: vertical on small screens, horizontal on large. */}
      <div aria-hidden="true" className="absolute left-7 top-7 bottom-7 w-1 rounded-full bg-white/12 lg:left-[10%] lg:right-[10%] lg:top-7 lg:bottom-auto lg:h-1 lg:w-auto">
        <motion.div
          className="h-full w-full origin-top rounded-full bg-yellow lg:hidden"
          style={{ scaleY: scale }}
        />
        <motion.div
          className="absolute inset-0 hidden origin-left rounded-full bg-yellow lg:block"
          style={{ scaleX: scale }}
        />
      </div>

      {steps.map((step, index) => (
        <Stop key={step.title} step={step} index={index} total={steps.length} progress={progress} />
      ))}
    </ol>
  );
}

function Stop({
  step,
  index,
  total,
  progress,
}: {
  step: JourneyStep;
  index: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const at = total === 1 ? 0 : index / (total - 1);
  const lit = useTransform(progress, [Math.max(0, at - 0.12), at], [0, 1]);
  const scale = useTransform(lit, [0, 1], [0.86, 1]);
  // Not dimmer than 0.68: below that the body text of a stop that is waiting
  // its turn drops under 4.5:1 on the ink background.
  const opacity = useTransform(lit, [0, 1], [0.68, 1]);
  return (
    <motion.li
      // data-reveal: shown at full strength when JavaScript is off (see layout).
      data-reveal=""
      className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
      style={{ opacity }}
    >
      <motion.span
        style={{ scale }}
        className={cn(
          "relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-ink shadow-lift",
          step.owner === "billing" ? "bg-teal" : "bg-white",
        )}
      >
        <Icon name={step.icon} size={24} />
      </motion.span>
      <div>
        <p className={cn("eyebrow", step.owner === "billing" ? "text-teal-200" : "text-navy-200")}>
          {step.owner === "billing" ? "Billing" : "Books"}
        </p>
        <h3 className="text-subheading mt-2">{step.title}</h3>
        <p className="mt-2 text-[0.975rem] leading-relaxed text-white/70 lg:mx-auto lg:max-w-[15rem]">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}
