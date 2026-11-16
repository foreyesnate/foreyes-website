"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Tells the chat bubble to move out of the way while a pinned bar is on
 * screen: lifted above the bar, hidden while the bar's breakdown is open.
 * ChatWidget.tsx and the --chat-* variables at the end of globals.css read
 * the attribute this sets on <html>.
 */
export function usePinnedBarFlag(visible: boolean, expanded: boolean) {
  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    root.setAttribute("data-estimate-bar", expanded ? "open" : "bar");
    return () => root.removeAttribute("data-estimate-bar");
  }, [visible, expanded]);
}

/**
 * Phones and tablets: a compact bar pinned to the bottom of the screen that
 * shows a calculator's result and expands into its breakdown. Both
 * calculators use it (pricing and billing).
 *
 * - `summary` fills the toggle button (a label and the figure).
 * - `panel` is the breakdown shown when the bar is opened.
 * - `action` is the one button that sits beside the toggle.
 */
export function PinnedBar({
  visible,
  label,
  summary,
  panel,
  action,
  chevronClassName,
}: {
  visible: boolean;
  /** Accessible name of the bar, e.g. "Your estimate". */
  label: string;
  summary: (expanded: boolean) => ReactNode;
  panel: ReactNode;
  action: ReactNode;
  /** Extra classes for the round chevron, e.g. to drop it on the narrowest phones. */
  chevronClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const expanded = open && visible;

  useEffect(() => {
    if (!expanded) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      // The breakdown is about to be removed. If keyboard focus is inside
      // it, hand focus back to the toggle instead of letting it drop.
      if (document.getElementById(panelId)?.contains(document.activeElement)) toggleRef.current?.focus();
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, panelId]);

  usePinnedBarFlag(visible, expanded);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="bar"
          initial={{ y: "130%" }}
          animate={{ y: 0 }}
          exit={{ y: "130%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
        >
          <section
            aria-label={label}
            className="overflow-hidden rounded-[1.75rem] bg-ink text-white shadow-float ring-1 ring-white/10"
          >
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-h-[58dvh] overflow-y-auto px-5 pb-2 pt-5">{panel}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className={cn("flex items-center gap-2 p-2 pl-2.5", expanded && "border-t border-white/10")}>
              <button
                ref={toggleRef}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
                className="flex min-h-14 min-w-0 flex-1 items-center gap-3 rounded-[1.25rem] px-2.5 py-1.5 text-left transition-colors hover:bg-white/5"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition-transform duration-300",
                    expanded ? "rotate-0" : "rotate-180",
                    chevronClassName,
                  )}
                >
                  <Icon name="chevronDown" size={18} strokeWidth={2.4} />
                </span>
                <span className="min-w-0">{summary(expanded)}</span>
              </button>
              {action}
            </div>
          </section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
