import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Endless horizontal ticker. Content is rendered twice so the loop is
 * seamless; the copy is hidden from assistive tech. Pauses on hover and for
 * anyone who prefers reduced motion (handled globally in globals.css).
 */
export function Marquee({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
