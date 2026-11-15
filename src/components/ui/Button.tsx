import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Variant = "primary" | "ink" | "outline" | "light" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-(--ease-focus) active:scale-[0.97] focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  // Yellow is the accent: one primary action per view.
  primary:
    "bg-yellow text-ink shadow-[0_1px_0_rgb(255_255_255/0.5)_inset,0_10px_24px_-10px_rgb(252_186_2/0.9)] hover:bg-yellow-200 hover:-translate-y-0.5 focus-visible:outline-ink",
  ink: "bg-ink text-white hover:bg-navy hover:-translate-y-0.5",
  outline:
    "border-2 border-ink/15 bg-white/60 text-ink hover:border-ink hover:bg-white",
  light:
    "border-2 border-white/25 text-white hover:border-white hover:bg-white hover:text-ink",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.975rem]",
  lg: "h-14 px-8 text-[1.0625rem]",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  /** Show the arrow that slides on hover. On by default for primary. */
  arrow?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow,
  children,
  className,
  ...props
}: ButtonProps) {
  const showArrow = arrow ?? (variant === "primary" || variant === "ink");
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const classes = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <Icon
          name="arrowRight"
          size={18}
          className="-mr-1 transition-transform duration-300 ease-(--ease-focus) group-hover/btn:translate-x-1"
        />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {inner}
    </Link>
  );
}

/** Inline text link with an arrow, for "learn more" style actions. */
export function TextLink({
  href,
  children,
  className,
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "light";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link -my-2 inline-flex min-h-11 items-center gap-1.5 font-display font-semibold underline decoration-yellow decoration-2 underline-offset-[6px] transition-[text-decoration-thickness] hover:decoration-4",
        tone === "ink" ? "text-ink" : "text-white",
        className,
      )}
    >
      {children}
      <Icon
        name="arrowRight"
        size={17}
        className="transition-transform duration-300 ease-(--ease-focus) group-hover/link:translate-x-1"
      />
    </Link>
  );
}
