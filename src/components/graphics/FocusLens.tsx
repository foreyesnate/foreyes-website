"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A lens that passes over a blurry picture and brings whatever is under it
 * into focus. Two copies of the scene are stacked: `blurred` underneath and
 * `sharp` on top, clipped to a circle. The circle drifts on its own until the
 * visitor moves a pointer over the scene, then it follows them.
 *
 * Both layers are decorative; describe the scene with `label`.
 */
export function FocusLens({
  blurred,
  sharp,
  label,
  className,
  radius = 132,
}: {
  blurred: ReactNode;
  sharp: ReactNode;
  label: string;
  className?: string;
  /** Lens radius in px at full size. */
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0.62);
  const y = useMotionValue(0.4);
  const sx = useSpring(x, { stiffness: 90, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 18, mass: 0.6 });
  const px = useMotionTemplate`calc(${sx} * 100%)`;
  const py = useMotionTemplate`calc(${sy} * 100%)`;
  const clip = useMotionTemplate`circle(var(--lens-r) at calc(${sx} * 100%) calc(${sy} * 100%))`;
  const pointerInside = useRef(false);

  // Idle drift: a slow figure of eight across the scene.
  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (!pointerInside.current) {
        const t = (now - start) / 1000;
        x.set(0.5 + 0.28 * Math.sin(t * 0.42));
        y.set(0.5 + 0.2 * Math.sin(t * 0.84 + 0.6));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduce, x, y]);

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType === "touch") return;
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    pointerInside.current = true;
    x.set(Math.max(0.08, Math.min(0.92, (event.clientX - box.left) / box.width)));
    y.set(Math.max(0.08, Math.min(0.92, (event.clientY - box.top) / box.height)));
  };

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      onPointerMove={onMove}
      onPointerLeave={() => {
        pointerInside.current = false;
      }}
      className={cn("relative isolate select-none", className)}
      style={{ ["--lens-r" as string]: `clamp(84px, 21vw, ${radius}px)` }}
    >
      <div aria-hidden="true" className="blur-[4px] saturate-[0.6] opacity-90">
        {blurred}
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 will-change-[clip-path]"
        style={{ clipPath: clip }}
      >
        {sharp}
      </motion.div>
      {/* The lens rim and its glass highlight. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: px,
          top: py,
          width: "calc(var(--lens-r) * 2)",
          height: "calc(var(--lens-r) * 2)",
        }}
      >
        <span className="absolute inset-0 rounded-full border-[5px] border-ink shadow-[0_24px_60px_-18px_rgb(17_15_43/0.55)]" />
        <span className="absolute inset-[5px] rounded-full ring-1 ring-inset ring-white/70 [background:radial-gradient(120%_120%_at_28%_18%,rgb(255_255_255/0.5),transparent_42%)]" />
        <span className="absolute -right-1 top-1/2 h-6 w-3 -translate-y-1/2 translate-x-full rounded-r-md bg-ink" />
        <span className="absolute -left-1 top-1/2 h-6 w-3 -translate-x-full -translate-y-1/2 rounded-l-md bg-ink" />
      </motion.div>
    </div>
  );
}
