"use client";

import { motion, useReducedMotion } from "motion/react";
import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Segment = string | { text: string; className?: string };

/**
 * Headline that resolves word by word from a soft blur, the way a line on an
 * eye chart sharpens when the right lens drops in. Pass plain strings, or
 * objects to style a phrase (e.g. the highlighted words).
 *
 * The full sentence is exposed to assistive tech once via aria-label; the
 * animated words are hidden from it.
 */
export function FocusText({
  segments,
  className,
  delay = 0,
  as: Tag = "h1",
  stagger = 0.07,
  onView = false,
}: {
  segments: Segment[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
  stagger?: number;
  /** Animate when scrolled into view instead of on mount. */
  onView?: boolean;
}) {
  const reduce = useReducedMotion();
  const label = segments
    .map((s) => (typeof s === "string" ? s : s.text))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  let index = 0;
  const words: ReactNode[] = [];
  segments.forEach((segment, si) => {
    const text = typeof segment === "string" ? segment : segment.text;
    const segClass = typeof segment === "string" ? undefined : segment.className;
    text
      .split(/\s+/)
      .filter(Boolean)
      .forEach((word, wi) => {
        const i = index++;
        const animate = { opacity: 1, y: 0, filter: "blur(0px)" };
        words.push(
          <Fragment key={`${si}-${wi}`}>
            <motion.span
              className={cn("inline-block will-change-[filter,transform]", segClass)}
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, y: "0.25em", filter: "blur(14px)" }
              }
              {...(onView
                ? { whileInView: animate, viewport: { once: true } }
                : { animate })}
              transition={{
                duration: 1,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>{" "}
          </Fragment>,
        );
      });
  });

  return (
    <Tag className={className} aria-label={label}>
      <span aria-hidden="true">{words}</span>
    </Tag>
  );
}
