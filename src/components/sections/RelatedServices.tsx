import Link from "next/link";
import { flagshipServices, supportingServices } from "@/content/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const icons: Record<string, IconName> = {
  "/services/bookkeeping": "ledger",
  "/services/insurance-billing": "claim",
  "/services/accounts-payable": "bill",
  "/services/payroll": "payroll",
  "/services/practice-consulting": "compass",
};

/**
 * "More Ways We Can Support Your Practice". Lists every service except the
 * current one, flagships first and larger.
 */
export function RelatedServices({
  current,
  title = "More Ways We Can Support Your Practice",
  tone = "stone",
}: {
  /** href of the page this sits on, so it is left out. */
  current?: string;
  title?: string;
  tone?: "stone" | "white";
}) {
  const flagships = flagshipServices.filter((s) => s.href !== current);
  const others = supportingServices.filter((s) => s.href !== current);
  return (
    <Section tone={tone} aria-labelledby="related-title" spacing="tight">
      <Container size="wide">
        <Reveal>
          <SectionHeading id="related-title" size="heading" eyebrow="Services" title={title} />
        </Reveal>
        <Stagger as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {[...flagships, ...others].map((service) => {
            const flagship = flagships.includes(service);
            return (
              <StaggerItem
                as="li"
                key={service.href}
                className={cn(
                  flagship
                    ? flagships.length === 1
                      ? "sm:col-span-2 lg:col-span-12"
                      : "lg:col-span-6"
                    : others.length === 2
                      ? "lg:col-span-6"
                      : "lg:col-span-4",
                )}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "group flex h-full items-start gap-5 rounded-[1.75rem] p-6 transition-[transform,box-shadow,background-color] duration-500 ease-(--ease-focus) hover:-translate-y-1 sm:p-7",
                    flagship ? "bg-ink text-white hover:bg-navy" : tone === "stone" ? "bg-white shadow-soft hover:shadow-lift" : "bg-stone hover:shadow-lift",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors duration-300",
                      flagship ? "bg-yellow text-ink" : "bg-navy-50 text-navy group-hover:bg-yellow group-hover:text-ink",
                    )}
                  >
                    <Icon name={icons[service.href] ?? "spark"} size={24} />
                  </span>
                  <span className="flex-1">
                    <h3 className="text-subheading">{service.label}</h3>
                    <p className={cn("mt-1.5", flagship ? "text-white/75" : "text-ink-500")}>{service.description}</p>
                  </span>
                  <Icon name="arrowRight" size={20} className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
