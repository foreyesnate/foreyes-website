"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { PostHeading } from "@/lib/blog";
import { cn } from "@/lib/cn";

/**
 * The desktop table of contents. It follows the reader: the section on
 * screen is marked, and a yellow bead slides down the rail to it.
 */
export function PostToc({ headings, className }: { headings: PostHeading[]; className?: string }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    // The current section is the last heading that has passed the line a
    // third of the way down the window.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.33;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="In this article" className={className}>
      <p className="eyebrow text-ink-500">In this article</p>
      <ol className="relative mt-5 border-l-2 border-stone-300">
        {headings.map((heading) => {
          const current = heading.id === active;
          return (
            <li key={heading.id} className="relative">
              {current ? (
                <motion.span
                  layoutId="toc-bead"
                  aria-hidden="true"
                  className="absolute -left-[2px] top-0 h-full w-[2px] bg-navy"
                  transition={{ type: "spring", stiffness: 420, damping: 38 }}
                >
                  <span className="absolute -left-[4px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-yellow ring-2 ring-white" />
                </motion.span>
              ) : null}
              <a
                href={`#${heading.id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "block py-2 pl-5 pr-1 text-[0.9375rem] leading-snug transition-colors duration-300",
                  current ? "font-semibold text-ink" : "text-ink-500 hover:text-ink",
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
