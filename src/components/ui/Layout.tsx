import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-[76rem]",
        size === "wide" && "max-w-[88rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

type Tone = "stone" | "white" | "ink" | "navy" | "teal" | "yellow";

const tones: Record<Tone, string> = {
  stone: "bg-stone text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-white",
  navy: "bg-navy text-white",
  // White fails contrast on brand teal, so teal surfaces carry ink text.
  teal: "bg-teal text-ink",
  yellow: "bg-yellow text-ink on-yellow",
};

export function Section({
  children,
  className,
  tone = "stone",
  id,
  as: Tag = "section",
  spacing = "default",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
  as?: ElementType;
  spacing?: "none" | "tight" | "default" | "loose";
  "aria-labelledby"?: string;
  "aria-label"?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        tones[tone],
        spacing === "tight" && "py-14 sm:py-20",
        spacing === "default" && "py-20 sm:py-28",
        spacing === "loose" && "py-24 sm:py-36",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Small uppercase label above a heading, with the brand's eye as a bullet. */
export function Eyebrow({
  children,
  className,
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "light";
}) {
  return (
    <p
      className={cn(
        "eyebrow inline-flex items-center gap-2.5",
        tone === "ink" ? "text-teal-700" : "text-teal-200",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-2 w-2 rounded-full ring-[3px]",
          tone === "ink"
            ? "bg-teal ring-teal/25"
            : "bg-yellow ring-yellow/25",
        )}
      />
      {children}
    </p>
  );
}

/** Eyebrow + heading + optional lede, the standard section opener. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "ink",
  as: Tag = "h2",
  id,
  className,
  size = "title",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "light";
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  size?: "title" | "heading";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className="mb-5">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Tag id={id} className={size === "title" ? "text-title" : "text-heading"}>
        {title}
      </Tag>
      {lede ? (
        <p
          className={cn(
            "text-lede mt-6",
            tone === "ink" ? "text-ink-500" : "text-white/75",
            align === "center" && "mx-auto",
            "max-w-2xl",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
