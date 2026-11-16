"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Distance from the top of the screen at which the column sticks (top-32). */
const STICKY_TOP = 128;
const BOTTOM_MARGIN = 24;

/**
 * A column that stays in view beside longer content on desktop, but only
 * while it fits the screen. A column taller than the viewport would stick
 * with its lower part cut off, so on short screens it scrolls normally.
 */
export function StickyColumn({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [fits, setFits] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const measure = () => setFits(node.offsetHeight + STICKY_TOP + BOTTOM_MARGIN <= window.innerHeight);
    // The observer reports once on observe(), then whenever the column resizes.
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={ref} className={cn("lg:self-start", fits && "lg:sticky lg:top-32", className)}>
      {children}
    </div>
  );
}
