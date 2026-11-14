"use client";

import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/cn";
import { useEyeTracking } from "@/components/motion/useEyeTracking";
import { EyeMark, LogoArt } from "./LogoArt";

/** The ForEyes Books & Billing logo. The eye follows the pointer. */
export function Logo({
  tone = "ink",
  variant = "full",
  className,
  href = "/",
}: {
  tone?: "ink" | "light";
  variant?: "full" | "wordmark";
  className?: string;
  href?: string | null;
}) {
  const irisRef = useRef<SVGGElement>(null);
  useEyeTracking(irisRef, { maxX: 7, maxY: 4 });
  const art = (
    <LogoArt
      tone={tone}
      variant={variant}
      irisRef={irisRef}
      className="h-full w-auto overflow-visible"
    />
  );
  if (href === null) return <span className={cn("block", className)}>{art}</span>;
  return (
    <Link
      href={href}
      aria-label="ForEyes Books & Billing, home"
      className={cn("block shrink-0", className)}
    >
      {art}
    </Link>
  );
}

/**
 * The eye from the logo at display size: follows the pointer and blinks now
 * and then. Purely decorative.
 */
export function WatchfulEye({
  tone = "ink",
  className,
  blink = true,
}: {
  tone?: "ink" | "light";
  className?: string;
  blink?: boolean;
}) {
  const irisRef = useRef<SVGGElement>(null);
  useEyeTracking(irisRef, { maxX: 11, maxY: 6 });
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block origin-center",
        blink && "animate-blink",
        className,
      )}
    >
      <EyeMark tone={tone} irisRef={irisRef} className="h-full w-full overflow-visible" />
    </span>
  );
}
