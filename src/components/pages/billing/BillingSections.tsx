import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { BillingKpiRings } from "@/components/graphics/BillingKpiRings";
import { BillingTwoPlans } from "@/components/graphics/BillingTwoPlans";
import { cn } from "@/lib/cn";
import { books, eyecare, kpis, pricing, problem } from "@/content/services/insurance-billing";

/** The owner's problem: three places billing slips in a busy practice. */
export function BillingProblem() {
  return (
    <Section tone="stone" aria-labelledby="billing-problem">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="billing-problem"
              eyebrow={problem.eyebrow}
              title={problem.title}
              lede={problem.lede}
            />
          </Reveal>

          <Reveal delay={0.1} y={36} blur={false}>
            <div className="rounded-[2.5rem] bg-white p-3 shadow-soft sm:p-4">
              <Stagger as="ol" className="px-4 sm:px-7">
                {problem.rows.map((row, index) => (
                  <StaggerItem
                    as="li"
                    key={row.title}
                    className={cn(
                      "grid gap-x-7 gap-y-3 py-7 sm:grid-cols-[auto_1fr] sm:py-8",
                      index > 0 && "border-t border-stone-200",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="tabular grid h-12 w-12 place-items-center rounded-2xl bg-navy-50 font-display text-lg font-bold text-navy"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="eyebrow text-teal-700">{row.where}</p>
                      <h3 className="text-subheading mt-2">{row.title}</h3>
                      <p className="mt-2.5 text-ink-500">{row.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <p className="flex gap-4 rounded-[1.75rem] bg-ink p-6 font-display text-[1.125rem] font-medium leading-snug tracking-[-0.015em] text-white sm:p-7 sm:text-[1.1875rem]">
                <span aria-hidden="true" className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow text-ink">
                  <Icon name="check" size={15} strokeWidth={3} />
                </span>
                {problem.closer}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Why billers who only work eyecare claims matter. */
export function BillingEyecare() {
  return (
    <Section tone="stone" aria-labelledby="billing-eyecare" className="overflow-hidden">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              id="billing-eyecare"
              eyebrow={eyecare.eyebrow}
              title={eyecare.title}
              lede={eyecare.lede}
            />
            <ol className="mt-10 grid gap-7">
              {eyecare.reasons.map((reason, index) => (
                <li key={reason.title} className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="tabular mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal font-display text-[0.95rem] font-bold text-ink"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-subheading">{reason.title}</h3>
                    <p className="mt-2 text-ink-500">{reason.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.12} y={36} blur={false}>
            <BillingTwoPlans {...eyecare.graphic} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** The four numbers on the monthly report, defined in plain words. */
export function BillingKpis() {
  return (
    <Section tone="ink" aria-labelledby="billing-kpis" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10%] top-0 h-[44rem] w-[64rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(65_93_158/0.55),transparent)]" />
        <div className="bg-dots absolute bottom-10 left-0 h-56 w-96 text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>
      <Container size="wide" className="relative">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <Reveal>
            <SectionHeading
              id="billing-kpis"
              tone="light"
              eyebrow={kpis.eyebrow}
              title={kpis.title}
              lede={kpis.lede}
            />
          </Reveal>
          <Reveal delay={0.1} blur={false} y={10}>
            <p className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 font-display text-sm font-semibold text-white ring-1 ring-inset ring-white/15">
              <Icon name="calendar" size={17} className="text-yellow" />
              In your report, every month
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={36} blur={false} className="mt-14">
          <BillingKpiRings items={kpis.items} />
        </Reveal>
        <Reveal delay={0.15} blur={false} y={10}>
          <p className="mt-8 text-[0.95rem] text-white/65">{kpis.footnote}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

/** How billing connects to the books. Said once, as a fact. */
export function BillingBooks() {
  return (
    <Section tone="teal" aria-labelledby="billing-books" spacing="tight" className="overflow-hidden">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute right-0 top-0 h-72 w-[28rem] text-ink/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            {/* Ink, not teal, so the label reads on a teal surface. */}
            <Eyebrow className="mb-5 text-ink! [&>span]:bg-ink [&>span]:ring-ink/20">{books.eyebrow}</Eyebrow>
            <h2 id="billing-books" className="text-title max-w-2xl">
              {books.title}
            </h2>
            <div className="text-lede mt-6 grid max-w-2xl gap-4 text-ink/85">
              {books.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9">
              <Button href={books.link.href} variant="ink">
                {books.link.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={36} blur={false}>
            <ol
              aria-label="One payment, followed from billing into the books"
              className="grid gap-2.5 rounded-[2.5rem] bg-ink/10 p-4 ring-1 ring-inset ring-ink/10 sm:p-6"
            >
              {books.chain.map((link, index) => {
                const last = index === books.chain.length - 1;
                return (
                  <li key={link.label} className="relative">
                    <div
                      className={cn(
                        "flex items-center gap-4 rounded-[1.5rem] px-5 py-4 shadow-soft",
                        last ? "bg-ink text-white" : "bg-white text-ink",
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-11 w-11 shrink-0 place-items-center rounded-2xl",
                          link.owner === "Billing" && "bg-teal-100 text-teal-800",
                          link.owner === "Books" && !last && "bg-navy-50 text-navy",
                          last && "bg-yellow text-ink",
                        )}
                      >
                        <Icon name={index === 0 ? "claim" : last ? "chart" : "ledger"} size={21} />
                      </span>
                      <span className="flex-1 font-display text-[1.125rem] font-semibold tracking-[-0.015em]">
                        {link.label}
                      </span>
                      <span
                        className={cn(
                          "eyebrow rounded-full px-3 py-1 text-[0.6875rem]",
                          last ? "bg-white/15 text-white" : "bg-stone text-ink-500",
                        )}
                      >
                        {link.owner}
                      </span>
                    </div>
                    {!last ? (
                      <span aria-hidden="true" className="mx-auto -mb-1 mt-1.5 block w-fit text-ink/60">
                        <Icon name="arrowRight" size={18} strokeWidth={2.4} className="rotate-90" />
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Billing has no published price list, so the Discovery Call comes first. */
export function BillingPricing() {
  return (
    <section aria-labelledby="billing-pricing" className="bg-white py-14 sm:py-20">
      <Container size="wide">
        <Reveal>
          <div className="relative grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-14">
            <div aria-hidden="true" className="bg-dots absolute inset-y-0 right-0 w-1/2 text-white/10 [mask-image:linear-gradient(to_left,black,transparent)]" />
            <div className="relative">
              <Eyebrow tone="light" className="mb-4">
                Pricing
              </Eyebrow>
              <h2 id="billing-pricing" className="text-heading max-w-2xl">
                {pricing.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/80">{pricing.body}</p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
              <Button href={site.bookingHref} size="lg">
                Book a Discovery Call
              </Button>
              <Button href={site.pricingHref} size="lg" variant="light">
                {pricing.secondary}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
