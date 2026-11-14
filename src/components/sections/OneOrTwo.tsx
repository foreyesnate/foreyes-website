"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Row = { topic: string; one: string; two: string };

const defaultRows: Row[] = [
  {
    topic: "Month-end",
    one: "Books get caught up when someone finds a free weekend.",
    two: "Books close in the first ten business days. Reviewed reports land in your portal.",
  },
  {
    topic: "Your P&L",
    one: "One revenue line. Exams, optical, and contact lenses all in the same bucket.",
    two: "A Custom Chart of Accounts shows which part of the practice carries its weight.",
  },
  {
    topic: "Denied claims",
    one: "They wait until the front desk has a quiet afternoon.",
    two: "Appealed and followed up daily by billers who only work eyecare claims.",
  },
  {
    topic: "Who you call",
    one: "A generalist who also does restaurants and dentists.",
    two: "A team founded by an OD, with a dedicated account manager.",
  },
];

/**
 * "Which is better, one or two?" The question every optometrist asks all day,
 * turned on their own back office. A phoropter-style flip between lenses.
 */
export function OneOrTwo({
  rows = defaultRows,
  title = "Which is better, one or two?",
  lede = "You ask patients this all day. Here is the same test for your back office.",
  labels = { one: "Doing it in-house", two: "With ForEyes" },
}: {
  rows?: Row[];
  title?: string;
  lede?: string;
  labels?: { one: string; two: string };
}) {
  const [lens, setLens] = useState<"one" | "two">("one");
  const isTwo = lens === "two";

  return (
    <Section tone="white" aria-labelledby="oneortwo-title" className="overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading id="oneortwo-title" align="center" eyebrow="A quick exam" title={title} lede={lede} />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div
            role="group"
            aria-label="Choose a lens"
            className="mx-auto flex w-fit items-center gap-1 rounded-full bg-stone p-1.5"
          >
            {(["one", "two"] as const).map((option) => {
              const selected = lens === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setLens(option)}
                  className={cn(
                    "relative flex h-14 items-center gap-2.5 whitespace-nowrap rounded-full pl-2 pr-4 font-display text-[0.9rem] font-semibold transition-colors duration-300 sm:gap-3 sm:pr-6 sm:text-base",
                    selected ? "text-white" : "text-ink-500 hover:text-ink",
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="lens-pill"
                      className={cn("absolute inset-0 rounded-full", option === "two" ? "bg-navy" : "bg-ink")}
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  ) : null}
                  <span
                    className={cn(
                      "relative grid h-10 w-10 place-items-center rounded-full border-2 text-lg font-bold transition-colors",
                      selected ? "border-white/40 bg-white/10" : "border-ink/15 bg-white",
                    )}
                  >
                    {option === "one" ? "1" : "2"}
                  </span>
                  <span className="relative">{labels[option]}</span>
                </button>
              );
            })}
          </div>

          <div
            className={cn(
              "relative mt-8 overflow-hidden rounded-[2.5rem] border-2 p-3 transition-colors duration-500 sm:p-4",
              isTwo ? "border-navy/20 bg-navy-50" : "border-stone-300 bg-stone",
            )}
            aria-live="polite"
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {rows.map((row, i) => (
                <li
                  key={row.topic}
                  className="relative min-h-[9.5rem] overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-soft sm:p-7"
                >
                  <p className="eyebrow text-ink-400">{row.topic}</p>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={lens}
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: isTwo ? "blur(0px)" : "blur(0.6px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.38, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "mt-3 flex gap-3 font-display text-[1.1875rem] font-medium leading-snug tracking-[-0.015em]",
                        isTwo ? "text-ink" : "text-ink-500",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
                          isTwo ? "bg-teal text-ink" : "bg-stone-200 text-ink-400",
                        )}
                      >
                        <Icon name={isTwo ? "check" : "minus"} size={14} strokeWidth={3} />
                      </span>
                      {isTwo ? row.two : row.one}
                    </motion.p>
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
