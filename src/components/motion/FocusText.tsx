import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Segment = string | { text: string; className?: string };

/**
 * Headline that resolves word by word from a soft blur, the way a line on an
 * eye chart sharpens when the right lens drops in. Pass plain strings, or
 * objects to style a phrase (e.g. the highlighted words).
 *
 * The animation is plain CSS (`.focus-word` in globals.css), so the headline
 * starts sharpening on first paint instead of waiting for JavaScript, and it
 * is readable with JavaScript off. Reduced motion shows it at once.
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
}: {
  segments: Segment[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
  stagger?: number;
}) {
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
        words.push(
          <Fragment key={`${si}-${wi}`}>
            <span
              className={cn("focus-word inline-block", segClass)}
              style={{ "--focus-delay": `${(delay + i * stagger).toFixed(2)}s` } as CSSProperties}
            >
              {word}
            </span>{" "}
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
