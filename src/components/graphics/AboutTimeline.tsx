"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { useRef } from "react";
import type { TimelineStop } from "@/content/about";
import { cn } from "@/lib/cn";

/**
 * The company story as a short vertical timeline. The rail fills as the
 * visitor scrolls and each stop sharpens as the line reaches it. The last
 * stop ("Today") carries the yellow accent.
 */
export function AboutTimeline({ stops, className }: { stops: TimelineStop[]; className?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 94%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <div className={cn("relative overflow-hidden rounded-[2.5rem] bg-stone p-6 sm:p-10", className)}>
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.06] [mask-image:radial-gradient(70%_60%_at_100%_0%,black,transparent)]"
      />
      <p className="eyebrow relative text-ink-500">The short version</p>
      <ol ref={ref} className="relative mt-8 grid gap-8">
        <div aria-hidden="true" className="absolute bottom-6 left-[2.0625rem] top-6 w-1 rounded-full bg-stone-300">
          <motion.div
            className="h-full w-full origin-top rounded-full bg-teal"
            style={reduce ? undefined : { scaleY: progress }}
          />
        </div>
        {stops.map((stop, index) => (
          <Stop
            key={stop.when}
            stop={stop}
            at={stops.length === 1 ? 0 : index / (stops.length - 1)}
            last={index === stops.length - 1}
            progress={progress}
            reduce={Boolean(reduce)}
          />
        ))}
      </ol>
    </div>
  );
}

function Stop({
  stop,
  at,
  last,
  progress,
  reduce,
}: {
  stop: TimelineStop;
  at: number;
  last: boolean;
  progress: ReturnType<typeof useSpring>;
  reduce: boolean;
}) {
  const lit = useTransform(progress, [Math.max(0, at - 0.18), Math.max(0.02, at)], [0, 1]);
  const opacity = useTransform(lit, [0, 1], [0.4, 1]);
  const scale = useTransform(lit, [0, 1], [0.88, 1]);
  const filter = useTransform(lit, [0, 1], ["blur(3px)", "blur(0px)"]);

  return (
    <li className="relative flex gap-5 sm:gap-6">
      <motion.span
        style={reduce ? undefined : { scale }}
        className={cn(
          "tabular relative z-10 grid h-[4.375rem] w-[4.375rem] shrink-0 place-items-center rounded-[1.35rem] font-display font-bold shadow-soft",
          last ? "bg-yellow text-[0.95rem] text-ink" : "bg-ink text-[1.0625rem] text-white",
        )}
      >
        {stop.when}
      </motion.span>
      <motion.div style={reduce ? undefined : { opacity, filter }} className="pt-1.5">
        <h3 className="text-subheading">{stop.title}</h3>
        <p className="mt-2 text-ink-500">{stop.body}</p>
      </motion.div>
    </li>
  );
}
