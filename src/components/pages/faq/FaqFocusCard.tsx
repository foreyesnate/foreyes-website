"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type QuickAnswer = { question: string; answer: string };

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The hero picture for the FAQ page: a short list of questions where one at a
 * time comes into focus and shows its answer, the way a line on an eye chart
 * sharpens. Decorative: the same questions are answered in full below.
 */
export function FaqFocusCard({
  items,
  total,
  topics,
  className,
}: {
  items: QuickAnswer[];
  /** Number of questions answered on the page. */
  total: number;
  topics: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % items.length), 4200);
    return () => window.clearInterval(timer);
  }, [reduce, inView, items.length]);

  return (
    <figure ref={ref} className={cn("relative mx-auto w-full max-w-[33rem] lg:mr-0", className)}>
      <div
        role="img"
        aria-label={`Four common questions, each coming into focus in turn with a short answer: ${items
          .map((item) => `${item.question} ${item.answer}`)
          .join(" ")}`}
        className="relative pb-6 pt-5"
      >
        <div aria-hidden="true">
          {/* A second sheet behind, for depth. */}
          <div className="absolute inset-x-5 bottom-10 top-0 rotate-[3deg] rounded-[2rem] bg-teal-100 ring-1 ring-inset ring-teal-200/70" />

          <div className="relative rounded-[2rem] bg-white p-5 text-ink shadow-float sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-lg font-semibold leading-tight">Quick answers</p>
              <span className="tabular rounded-full bg-stone px-3 py-1.5 font-display text-[0.75rem] font-bold uppercase tracking-[0.08em] text-ink-500">
                {active + 1} of {items.length}
              </span>
            </div>

            <ul className="mt-5 grid min-h-[20.5rem] content-start gap-2.5">
              {items.map((item, i) => {
                const on = i === active;
                return (
                  <motion.li
                    key={item.question}
                    // With reduced motion nothing cycles, so every row stays sharp.
                    animate={{
                      opacity: on || reduce ? 1 : 0.5,
                      filter: on || reduce ? "blur(0px)" : "blur(1.6px)",
                    }}
                    transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
                    className={cn(
                      "rounded-[1.25rem] border-2 px-4 py-3.5 transition-colors duration-500 sm:px-5",
                      on ? "border-navy bg-white" : "border-transparent bg-stone",
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-display text-[1rem] font-semibold leading-snug tracking-[-0.01em] sm:text-[1.0625rem]">
                        {item.question}
                      </p>
                      <span
                        className={cn(
                          "grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-500",
                          on ? "bg-yellow text-ink" : "bg-white text-ink-400",
                        )}
                      >
                        <Icon name={on ? "minus" : "plus"} size={14} strokeWidth={2.6} />
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {on ? (
                        <motion.p
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.55, ease: EASE }}
                          className="overflow-hidden text-[0.9375rem] leading-relaxed text-ink-500"
                        >
                          <span className="block pt-2">{item.answer}</span>
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* How much more there is below. */}
          <div className="relative -mt-3 ml-auto mr-5 flex w-fit items-center gap-2.5 rounded-full bg-ink py-2 pl-2 pr-4 text-white shadow-lift">
            <span className="tabular grid h-8 min-w-8 place-items-center rounded-full bg-yellow px-1.5 font-display text-sm font-bold text-ink">
              {total}
            </span>
            <span className="font-display text-[0.8125rem] font-semibold">
              questions answered, in {topics} topics
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
}
