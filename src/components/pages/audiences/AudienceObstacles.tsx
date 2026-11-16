import Link from "next/link";
import type { AudienceContent } from "@/content/audiences/types";
import { Illustration } from "@/components/ui/Art";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { serviceInfo } from "./lookup";

/**
 * "The obstacles": each row sets the problem, in the owner's terms, beside
 * what ForEyes does about it and the service that does it.
 */
export function AudienceObstacles({ obstacles }: { obstacles: AudienceContent["obstacles"] }) {
  return (
    <Section tone="white" aria-labelledby={obstacles.id}>
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end lg:gap-16">
          <Reveal>
            <SectionHeading id={obstacles.id} eyebrow={obstacles.eyebrow} title={obstacles.title} lede={obstacles.lede} />
          </Reveal>
          <Reveal delay={0.1} y={36}>
            <Illustration
              name={obstacles.picture.name}
              panel={obstacles.picture.panel}
              sizes="(min-width: 640px) 21rem, 19rem"
              className="mx-auto w-full max-w-[26rem] lg:mx-0"
            />
          </Reveal>
        </div>

        <Stagger as="ol" className="mt-14 grid gap-4">
          {obstacles.items.map((item, i) => (
            <StaggerItem
              as="li"
              key={item.title}
              className="grid gap-6 rounded-[1.75rem] bg-stone p-6 sm:p-8 lg:grid-cols-[3rem_minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-8"
            >
              <span aria-hidden="true" className="tabular font-display text-2xl font-bold tracking-[-0.03em] text-navy-400 lg:pt-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:py-5">
                <h3 className="text-subheading">{item.title}</h3>
                <p className="mt-3 text-ink-500">{item.body}</p>
              </div>
              <div className="relative rounded-[1.5rem] bg-white p-5 shadow-soft sm:p-6">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.375rem] top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-yellow text-ink shadow-soft lg:grid"
                >
                  <Icon name="arrowRight" size={16} strokeWidth={2.6} />
                </span>
                <p className="eyebrow flex items-center gap-2 text-teal-700">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-teal text-ink">
                    <Icon name="check" size={12} strokeWidth={3.2} />
                  </span>
                  What we do
                </p>
                <p className="mt-3 text-ink-700">{item.fix}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.services.map((key) => {
                    const service = serviceInfo(key);
                    return (
                      <li key={key}>
                        <Link
                          href={service.href}
                          className="group inline-flex h-11 items-center gap-2 rounded-full bg-navy-50 pl-3 pr-4 font-display text-sm font-semibold text-navy-700 transition-colors duration-300 hover:bg-yellow hover:text-ink"
                        >
                          <Icon name={service.icon} size={17} />
                          {service.label}
                          <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
