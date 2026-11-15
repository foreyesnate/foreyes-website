"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// The site's signature move: things come *into focus* instead of just fading
// in. A little blur clears as the element settles, like a lens being dialled.
const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait once the element is in view. */
  delay?: number;
  /** Distance travelled, in px. */
  y?: number;
  /** Skip the blur for large or image-heavy blocks. */
  blur?: boolean;
  as?: "div" | "li" | "section" | "article" | "span" | "p";
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  blur = true,
  as = "div",
  once = true,
}: RevealProps) {
  // The starting state must be the same on the server and in the browser, so
  // it never depends on the visitor's motion setting. <Providers> tells Motion
  // to skip the movement for anyone who asks for reduced motion.
  const Tag = motion[as];
  return (
    <Tag
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

const groupVariants: Variants = {
  hidden: {},
  shown: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  shown: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

/** Parent that reveals its <StaggerItem> children one after another. */
export function Stagger({
  children,
  className,
  stagger = 0.09,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={groupVariants}
      custom={stagger}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Tag = motion[as];
  return (
    <Tag data-reveal="" className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
