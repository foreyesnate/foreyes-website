import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The "come into focus" entrance for content that is on screen when the page
 * opens (the hero). Same look as <Reveal>, but driven by CSS (`.appear` in
 * globals.css): it starts on first paint rather than after JavaScript loads,
 * works with JavaScript off, and is skipped for reduced motion.
 *
 * Use <Reveal> for anything further down the page, which should wait until it
 * scrolls into view.
 */
export function Appear({
  children,
  className,
  delay = 0,
  y = 24,
  blur = true,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds after first paint. */
  delay?: number;
  /** Distance travelled, in px. */
  y?: number;
  /** Skip the blur for large or image-heavy blocks. */
  blur?: boolean;
}) {
  return (
    <div
      className={cn("appear", className)}
      style={
        {
          "--appear-delay": `${delay}s`,
          "--appear-y": `${y}px`,
          "--appear-blur": blur ? "10px" : "0px",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
