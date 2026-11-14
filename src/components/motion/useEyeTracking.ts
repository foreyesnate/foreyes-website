"use client";

import { useEffect, type RefObject } from "react";

/**
 * Nudges an SVG group (the iris of the ForEyes eye) toward the pointer, so the
 * mark quietly watches what the visitor is doing. Movement is clamped to a
 * small ellipse so the iris always stays inside the eyelids.
 *
 * Does nothing for touch-only devices or when reduced motion is requested.
 */
export function useEyeTracking(
  irisRef: RefObject<SVGGElement | null>,
  { maxX = 9, maxY = 5 }: { maxX?: number; maxY?: number } = {},
) {
  useEffect(() => {
    const iris = irisRef.current;
    const svg = iris?.ownerSVGElement;
    if (!iris || !svg) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    iris.style.transition = "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)";
    let frame = 0;
    let px = 0;
    let py = 0;

    const update = () => {
      frame = 0;
      const box = svg.getBoundingClientRect();
      if (box.width === 0) return;
      const cx = box.left + box.width * 0.5;
      const cy = box.top + box.height * 0.5;
      const dx = px - cx;
      const dy = py - cy;
      // Ease out with distance: nearby pointers move the iris the most.
      const reach = Math.max(window.innerWidth, window.innerHeight) * 0.45;
      const nx = Math.max(-1, Math.min(1, dx / reach));
      const ny = Math.max(-1, Math.min(1, dy / reach));
      iris.style.transform = `translate(${(nx * maxX).toFixed(2)}px, ${(ny * maxY).toFixed(2)}px)`;
    };

    const onMove = (event: PointerEvent) => {
      px = event.clientX;
      py = event.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onLeave = () => {
      iris.style.transform = "translate(0px, 0px)";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [irisRef, maxX, maxY]);
}
