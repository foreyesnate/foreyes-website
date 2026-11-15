"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/**
 * Whether the visitor prefers reduced motion.
 *
 * Use this instead of Motion's hook of the same name. Motion's version knows
 * the answer on the very first client render, so a component that renders
 * different markup for reduced motion no longer matches the server's HTML and
 * React reports a hydration error. This one answers `false` during hydration
 * (matching the server) and updates immediately afterwards.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
