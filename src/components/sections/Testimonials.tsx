"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { testimonials as allTestimonials, type Testimonial } from "@/content/testimonials";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function Avatar({ person, size = 56 }: { person: Testimonial; size?: number }) {
  return person.photo ? (
    <Image
      src={person.photo}
      alt=""
      width={size}
      height={size}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  ) : (
    <span
      aria-hidden="true"
      className="grid shrink-0 place-items-center rounded-full bg-teal font-display font-bold text-ink"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials(person.name)}
    </span>
  );
}

/**
 * "Proof in Practice": one quote at a time, large, with the rest a tap away.
 * Advances on its own until the visitor interacts or hovers.
 */
export function Testimonials({
  items = allTestimonials,
  title = "Proof in Practice",
  lede = "Practice owners and managers on what changes when the books and the billing are handled.",
  tone = "white",
}: {
  items?: Testimonial[];
  title?: string;
  lede?: string;
  tone?: "white" | "stone";
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = items[index];

  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % items.length), 9000);
    return () => clearTimeout(timer);
  }, [index, paused, items.length]);

  return (
    <Section tone={tone} aria-labelledby="proof-title">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="proof-title" eyebrow="Client voices" title={title} lede={lede} />
            <ul className="mt-10 grid gap-2" aria-label="Choose a testimonial">
              {items.map((person, i) => (
                <li key={person.name}>
                  <button
                    type="button"
                    aria-pressed={i === index}
                    onClick={() => {
                      setIndex(i);
                      setPaused(true);
                    }}
                    className={cn(
                      "flex w-full items-center gap-4 rounded-full p-2 pr-6 text-left transition-colors duration-300",
                      i === index ? "bg-ink text-white" : "hover:bg-ink/5",
                    )}
                  >
                    <Avatar person={person} size={44} />
                    <span className="font-display font-semibold">{person.name}</span>
                    {i === index && !paused ? (
                      <motion.span
                        key={`bar-${index}`}
                        aria-hidden="true"
                        className="ml-auto h-1 w-12 origin-left rounded-full bg-yellow"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 9, ease: "linear" }}
                      />
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} y={36}>
            <div
              onPointerEnter={() => setPaused(true)}
              className="relative flex min-h-[26rem] flex-col rounded-[2.5rem] bg-stone p-8 sm:p-12"
              aria-live="polite"
            >
              <Icon name="quote" size={56} className="text-yellow" />
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.name}
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 flex flex-1 flex-col"
                >
                  <blockquote>
                    <p className="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.025em]">
                      {current.highlight}
                    </p>
                    {current.quote !== current.highlight ? (
                      <p className="mt-6 max-w-2xl text-ink-500">{current.quote}</p>
                    ) : null}
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-4 pt-10">
                    <Avatar person={current} />
                    <span>
                      <span className="block font-display text-lg font-semibold">{current.name}</span>
                      {current.role ? <span className="block text-ink-500">{current.role}</span> : null}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
