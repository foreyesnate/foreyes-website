import Link from "next/link";
import { audiencePages } from "@/content/audiences";
import type { AudienceSlug } from "@/content/audiences/types";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { audienceInfo } from "./lookup";

const toneClass = {
  navy: "bg-navy text-white",
  ink: "bg-ink text-white",
  teal: "bg-teal text-ink",
} as const;

/** "Other Practices We Support": the two audience pages this one is not. */
export function AudienceOthers({ current }: { current: AudienceSlug }) {
  const others = audiencePages.filter((page) => page.slug !== current).map((page) => audienceInfo(page.slug));
  return (
    <Section tone="white" spacing="tight" aria-labelledby="other-audiences-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading id="other-audiences-title" size="heading" eyebrow="Who we serve" title="Other Practices We Support" />
        </Reveal>
        <Stagger as="ul" className="mt-10 grid gap-5 md:grid-cols-2">
          {others.map((audience) => (
            <StaggerItem as="li" key={audience.href}>
              <Link
                href={audience.href}
                className={cn(
                  "group relative flex h-full items-center gap-5 overflow-hidden rounded-[2rem] p-6 transition-transform duration-500 ease-(--ease-focus) hover:-translate-y-1 sm:gap-6 sm:p-8",
                  toneClass[audience.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-10 -top-14 h-44 w-44 rounded-full transition-transform duration-700 ease-(--ease-focus) group-hover:scale-125",
                    audience.tone === "teal" ? "bg-white/15" : "bg-white/10",
                  )}
                />
                <span className={cn("relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl", audience.tone === "teal" ? "bg-ink/10" : "bg-white/10")}>
                  <Icon name={audience.icon} size={28} strokeWidth={1.6} />
                </span>
                <div className="relative flex-1">
                  <h3 className="text-subheading">{audience.label}</h3>
                  <p className="mt-1.5 opacity-80">{audience.description}</p>
                </div>
                <Icon name="arrowRight" size={22} className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
