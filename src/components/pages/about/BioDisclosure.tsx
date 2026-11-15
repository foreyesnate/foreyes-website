"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { useId, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * A "read bio" button and the panel it opens. The bio stays in the page's
 * HTML while closed (so it can be found and indexed) but is inert and hidden
 * from assistive tech until opened. Opening eases the height and lets the
 * text come into focus.
 */
export function BioDisclosure({
  label,
  openLabel,
  srContext,
  children,
  className,
}: {
  /** Button text while closed, e.g. "Read bio". */
  label: string;
  /** Button text while open. */
  openLabel: string;
  /** Whose bio it is, appended for screen readers: "Read bio, Amanda Bennett". */
  srContext: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const id = useId();
  const panelId = `${id}-bio`;

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "group/bio inline-flex min-h-11 items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-5 font-display text-[0.95rem] font-semibold transition-colors duration-300",
          open ? "bg-ink text-white" : "bg-stone text-ink hover:bg-navy-100",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "grid h-8 w-8 place-items-center rounded-full transition-[background-color,transform] duration-300 ease-(--ease-focus)",
            open ? "rotate-180 bg-yellow text-ink" : "bg-white text-ink shadow-soft",
          )}
        >
          <Icon name={open ? "minus" : "plus"} size={16} strokeWidth={2.4} />
        </span>
        <span>
          {open ? openLabel : label}
          <span className="sr-only">, {srContext}</span>
        </span>
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-label={`${srContext}, bio`}
        inert={!open}
        initial={false}
        animate={
          open
            ? { height: "auto", opacity: 1, filter: "blur(0px)", visibility: "visible" }
            : {
                height: 0,
                opacity: 0,
                filter: reduce ? "blur(0px)" : "blur(8px)",
                transitionEnd: { visibility: "hidden" },
              }
        }
        transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        data-bio-panel=""
        className="overflow-hidden"
      >
        <div className="grid gap-4 pt-5 text-ink-500">{children}</div>
      </motion.div>
    </div>
  );
}
