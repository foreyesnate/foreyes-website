"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type Faq = {
  question: string;
  /** Plain-text answer. Used for the visible answer and for search engines. */
  answer: string;
  /** Optional richer answer to display instead of the plain text. */
  rich?: ReactNode;
};

/**
 * Accessible accordion. One answer open at a time by default; answers ease
 * open and come into focus. Pair it with <FaqJsonLd> for rich results.
 */
export function FaqAccordion({
  items,
  defaultOpen = 0,
  className,
}: {
  items: Faq[];
  /** Index open on load, or -1 for none. */
  defaultOpen?: number;
  className?: string;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);
  const base = useId();
  return (
    <ul className={cn("grid gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${base}-q-${i}`;
        const panelId = `${base}-a-${i}`;
        return (
          <li
            key={item.question}
            className={cn(
              "overflow-hidden rounded-[1.5rem] border-2 transition-colors duration-300",
              isOpen ? "border-navy bg-white" : "border-transparent bg-white hover:border-stone-300",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-[1.125rem] font-semibold leading-snug tracking-[-0.015em] sm:px-7 sm:text-[1.1875rem]"
              >
                {item.question}
                <span
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-[background-color,transform] duration-300 ease-(--ease-focus)",
                    isOpen ? "rotate-180 bg-yellow text-ink" : "bg-stone text-ink",
                  )}
                >
                  <Icon name={isOpen ? "minus" : "plus"} size={18} strokeWidth={2.4} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0, filter: "blur(6px)" }}
                  animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                  exit={{ height: 0, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="max-w-3xl px-6 pb-6 text-ink-500 sm:px-7 sm:pb-7">
                    {item.rich ?? <p>{item.answer}</p>}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
