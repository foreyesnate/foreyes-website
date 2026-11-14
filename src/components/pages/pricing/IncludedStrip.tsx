import Link from "next/link";
import { includedCopy } from "@/content/pricing";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

function Panel({
  icon,
  name,
  tag,
  items,
  link,
  tone,
}: {
  icon: IconName;
  name: string;
  tag: string;
  items: readonly string[];
  link: { label: string; href: string };
  tone: "navy" | "teal";
}) {
  const navy = tone === "navy";
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[2.5rem] p-7 sm:p-10",
        navy ? "bg-navy text-white" : "bg-teal text-ink",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "bg-dots absolute -right-10 -top-10 h-64 w-64 [mask-image:radial-gradient(closest-side,black,transparent)]",
          navy ? "text-white/10" : "text-ink/10",
        )}
      />
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-3 text-subheading">
          <span className={cn("grid h-11 w-11 place-items-center rounded-2xl", navy ? "bg-white/10" : "bg-ink/10")}>
            <Icon name={icon} size={22} />
          </span>
          {name}
        </h3>
        <span
          className={cn(
            "rounded-full px-3 py-1.5 font-display text-[0.8125rem] font-semibold",
            navy ? "bg-yellow text-ink" : "bg-ink text-white",
          )}
        >
          {tag}
        </span>
      </div>
      <Stagger as="ul" stagger={0.06} className="relative mt-7 grid gap-3.5">
        {items.map((item) => (
          <StaggerItem as="li" key={item} className={cn("flex gap-3 text-[1.0625rem] leading-snug", navy ? "text-white/90" : "text-ink/90")}>
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
                navy ? "bg-yellow text-ink" : "bg-ink text-white",
              )}
            >
              <Icon name="check" size={14} strokeWidth={3} />
            </span>
            {item}
          </StaggerItem>
        ))}
      </Stagger>
      <div className="relative mt-auto pt-9">
        <Link
          href={link.href}
          className={cn(
            "group/link inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold transition-[background-color,transform] duration-300 hover:-translate-y-0.5",
            navy ? "bg-white text-ink hover:bg-yellow" : "bg-ink text-white hover:bg-navy-800",
          )}
        >
          {link.label}
          <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

/** What the money buys: the confirmed monthly work behind each flagship. */
export function IncludedStrip() {
  const { bookkeeping, insuranceBilling } = includedCopy;
  return (
    <Section tone="stone" aria-labelledby="included-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="included-title"
            eyebrow={includedCopy.eyebrow}
            title={includedCopy.title}
            lede={includedCopy.lede}
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal y={40} blur={false}>
            <Panel icon="ledger" tone="navy" {...bookkeeping} />
          </Reveal>
          <Reveal y={40} blur={false} delay={0.12}>
            <Panel icon="claim" tone="teal" {...insuranceBilling} />
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 flex items-start gap-3 text-ink-500">
            <Icon name="shield" size={22} className="mt-0.5 shrink-0 text-teal-700" />
            {includedCopy.footnote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
