"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Wraps the article and draws a thin bar across the top of the window that
 * fills as the reader moves through it. The bar measures the wrapped element,
 * not the whole page, so it reaches 100% at the end of the article rather
 * than at the footer.
 */
export function ReadingProgress({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    // 0 when the article's top reaches the upper third of the window,
    // 1 when its end reaches the lower third.
    offset: ["start 0.3", "end 0.7"],
  });
  const eased = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-1.5 bg-ink/[0.06]">
        <motion.div
          className="h-full origin-left rounded-r-full bg-yellow"
          style={{ scaleX: reduce ? scrollYProgress : eased }}
        />
      </div>
      <div ref={ref} className={className}>
        {children}
      </div>
    </>
  );
}
