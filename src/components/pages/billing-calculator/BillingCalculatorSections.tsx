import Link from "next/link";
import {
  fixesCopy,
  heroCopy,
  howCopy,
  quoteCopy,
  readNextCopy,
} from "@/content/billing-calculator";
import { billingTestimonials } from "@/content/testimonials";
import { TextLink } from "@/components/ui/Button";
import { Illustration } from "@/components/ui/Art";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { StickyColumn } from "@/components/ui/StickyColumn";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CategoryPill, PostCover, PostMeta } from "@/components/pages/blog/PostCard";
import { getPost, toSummary } from "@/lib/blog";
import {
  computeBillingEstimate,
  defaultBillingValues,
  billingCalculatorConfig,
  roundTo,
} from "@/lib/billing-calculator";
import { formatMoney } from "@/lib/pricing";
import { cn } from "@/lib/cn";
import { unbroken } from "./unbroken";

/**
 * The hero's picture: a checked claim going onto the outgoing stack, with the
 * four numbers a visitor needs listed on a small card. Desktop only: on a
 * phone the calculator itself should come first. It sits inside PageHero's
 * <Appear>, so it needs no script to show.
 */
export function HeroVisual() {
  const { card } = heroCopy;
  return (
    <div className="relative ml-auto hidden max-w-[29rem] lg:block">
      <Illustration
        name="step-bill"
        panel="teal"
        priority
        sizes="27rem"
        // The sleeve leaves the drawing at the top right corner, so the
        // picture sits flush with that corner of the panel.
        className="pr-0 pt-0 sm:pr-0 sm:pt-0"
      />
      {/* Over the empty top-left corner of the drawing, hanging off the panel's edge. */}
      <div className="absolute -left-20 -top-14 hidden w-[14.5rem] rounded-[1.5rem] bg-white p-5 shadow-lift xl:block">
        <p className="eyebrow text-[0.6875rem] text-teal-700">{card.title}</p>
        <ol className="mt-3.5 grid gap-2.5">
          {card.items.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="tabular grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy font-display text-[0.75rem] font-bold text-white"
              >
                {index + 1}
              </span>
              <span className="pt-0.5 font-display text-[0.9375rem] font-semibold leading-tight">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** One row of the worked example. */
function ExampleRow({
  label,
  detail,
  value,
  unit,
  strong = false,
}: {
  label: string;
  detail?: string;
  value: string;
  /** Shown small under the value ("a month"), so a long value never squeezes the label. */
  unit?: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
      <dt className="min-w-0">
        <span className={cn("block font-display leading-snug", strong ? "text-[1.0625rem] font-semibold" : "text-[0.9375rem] font-medium")}>
          {label}
        </span>
        {detail ? <span className="mt-0.5 block text-[0.8125rem] leading-snug text-white/65">{detail}</span> : null}
      </dt>
      {/* Never wider than 60% of the row: a larger figure wraps inside its
          own column instead of crushing the label beside it. */}
      <dd
        className={cn(
          "tabular max-w-[60%] shrink-0 text-right font-display font-semibold",
          strong ? "text-[1.125rem] text-yellow sm:text-[1.25rem]" : "text-[0.9375rem]",
        )}
      >
        <span className="block">{value}</span>
        {unit ? <span className="mt-0.5 block font-sans text-[0.8125rem] font-normal leading-snug text-white/65">{unit}</span> : null}
      </dd>
    </div>
  );
}

/**
 * The maths, worked through with the calculator's own example numbers. Every
 * figure is computed here from src/lib/billing-calculator.ts, so it can never
 * drift from what the calculator shows.
 */
function WorkedExample() {
  const { example } = howCopy;
  const v = defaultBillingValues;
  const result = computeBillingEstimate(v);
  const { rounding } = billingCalculatorConfig;
  const about = (amount: number, step: number) => `about ${formatMoney(roundTo(amount, step))}`;
  const unworkedPile = result.claimValue * (v.denialRate / 100) * (v.unworkedShare / 100);
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-7 text-white shadow-lift sm:p-9">
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute -right-6 -top-6 h-40 w-56 text-white/[0.08] [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <p className="eyebrow relative text-teal-200">{example.eyebrow}</p>
      <h3 className="text-subheading relative mt-3">{unbroken(example.title)}</h3>
      <dl className="relative mt-4">
        <ExampleRow label={example.rows.collected} value={formatMoney(v.monthlyCollections)} />
        <ExampleRow
          label={example.rows.paidShare}
          detail={example.details.paidShare}
          value={`${Number((result.paidShare * 100).toFixed(1))}%`}
        />
        <ExampleRow label={example.rows.claimValue} value={about(result.claimValue, 100)} />
        <ExampleRow
          label={example.rows.unworked}
          detail={example.details.unworked(v.denialRate, v.unworkedShare)}
          // A monthly figure, so it is rounded like one and the next line follows from it.
          value={about(unworkedPile, rounding.monthly)}
        />
        <ExampleRow
          label={example.rows.monthly}
          detail={example.details.monthly(v.recoveryRate)}
          value={about(result.unworkedMonthly, rounding.monthly)}
          unit={example.rows.monthlyUnit}
        />
        <ExampleRow
          strong
          label={example.rows.yearly}
          detail={example.yearlyTag}
          value={about(result.unworkedYearly, rounding.yearly)}
        />
        <ExampleRow
          label={example.rows.backlog}
          detail={`${example.backlogTag}. ${example.details.backlog(v.agedCollectible, formatMoney(v.agedAR))}`}
          value={about(result.backlog, rounding.backlog)}
        />
      </dl>
      <p className="relative mt-5 text-[0.8125rem] leading-snug text-white/65">{example.note}</p>
    </div>
  );
}

/** "How we worked this out": the maths in four plain steps, the two shortcuts, and a worked example. */
export function HowWeWorkedItOut() {
  return (
    <Section tone="stone" id="how-it-works" aria-labelledby="how-title">
      <Container size="wide">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          <div>
            <Reveal>
              <SectionHeading id="how-title" eyebrow={howCopy.eyebrow} title={howCopy.title} lede={howCopy.lede} />
            </Reveal>
            <ol className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-4">
              {howCopy.steps.map((step, index) => (
                <Reveal as="li" key={step.title} delay={0.04 * index} className="flex gap-4 min-[360px]:gap-5">
                  <span
                    aria-hidden="true"
                    className="tabular grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink font-display text-lg font-bold text-white shadow-soft"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1 rounded-[1.75rem] bg-white p-6 shadow-soft sm:p-7">
                    <h3 className="text-subheading">{unbroken(step.title)}</h3>
                    <p className="mt-2.5 text-ink-500">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-5">
              <div className="rounded-[1.75rem] border-2 border-dashed border-stone-400 p-6 sm:p-7">
                <h3 className="text-subheading">{unbroken(howCopy.shortcuts.title)}</h3>
                <p className="mt-2 text-ink-500">{howCopy.shortcuts.lede}</p>
                <ul className="mt-4 grid gap-3">
                  {howCopy.shortcuts.items.map((item) => (
                    <li key={item} className="flex gap-3.5">
                      <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-teal" />
                      <span className="text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <StickyColumn>
            <Reveal delay={0.1} y={36} blur={false}>
              <WorkedExample />
            </Reveal>
          </StickyColumn>
        </div>
      </Container>
    </Section>
  );
}

/** Three fixes, one for each number in the calculator, and what ForEyes does about each. */
export function BillingFixes() {
  return (
    <Section tone="white" id="fixes" aria-labelledby="fixes-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading id="fixes-title" eyebrow={fixesCopy.eyebrow} title={fixesCopy.title} lede={fixesCopy.lede} />
        </Reveal>
        <Stagger as="ol" className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-3">
          {fixesCopy.fixes.map((fix, index) => (
            <StaggerItem as="li" key={fix.title} className="flex flex-col rounded-[1.75rem] bg-stone p-3">
              <div className="flex-1 px-4 pb-6 pt-4 sm:px-5 sm:pt-5">
                <p className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="tabular grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-display text-[0.95rem] font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <span className="eyebrow text-[0.75rem] text-teal-700">{fix.moves}</span>
                </p>
                <h3 className="text-subheading mt-5">{unbroken(fix.title)}</h3>
                <p className="mt-3 text-ink-500">{fix.body}</p>
              </div>
              <div className="rounded-[1.25rem] bg-white p-5 shadow-soft">
                <p className="flex items-center gap-2.5 font-display text-[0.9375rem] font-semibold">
                  <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-ink">
                    <Icon name="check" size={14} strokeWidth={3} />
                  </span>
                  {fixesCopy.foreyesLabel}
                </p>
                <p className="mt-2.5 text-[0.9375rem] leading-snug text-ink-700">{fix.foreyes}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
          <TextLink href={fixesCopy.link.href}>{fixesCopy.link.label}</TextLink>
          <p className="text-ink-500">{fixesCopy.linkNote}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

/** One client, in her own words, on handing the billing over. */
export function BillingProofQuote() {
  const person = billingTestimonials.find((item) => item.name === quoteCopy.name) ?? billingTestimonials[0];
  if (!person) return null;
  const initials = person.name
    .replace(/,.*$/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  return (
    <Section tone="navy" aria-labelledby="proof-title" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute left-0 top-0 h-64 w-96 text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <Container className="relative">
        <Reveal>
          <figure>
            <div className="flex items-center gap-4">
              <Icon name="quote" size={48} className="shrink-0 text-yellow" />
              <h2 id="proof-title" className="eyebrow text-teal-200">
                {quoteCopy.eyebrow}
              </h2>
            </div>
            <blockquote className="mt-7">
              <p className="font-display text-[clamp(1.375rem,1.05rem+1.4vw,2.125rem)] font-semibold leading-[1.22] tracking-[-0.02em]">
                {person.quote}
              </p>
            </blockquote>
            <figcaption className="mt-9 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-teal font-display text-xl font-bold text-ink"
              >
                {initials}
              </span>
              <span>
                <span className="block font-display text-lg font-semibold">{person.name}</span>
                {person.role ? <span className="block text-white/80">{person.role}</span> : null}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}

/** One article to read next: why A/R grows in the first place. */
export function BillingReadNext() {
  const found = getPost(readNextCopy.slug);
  const post = found ? toSummary(found) : null;
  return (
    <Section tone="white" spacing="tight" aria-labelledby="read-next-title">
      <Container size="wide">
        <Reveal>
          <article className="group relative grid overflow-hidden rounded-[2.5rem] bg-stone transition-[transform,box-shadow,background-color] duration-500 ease-(--ease-focus) hover:-translate-y-1 hover:shadow-lift has-[a:focus-visible]:-translate-y-1 has-[a:focus-visible]:shadow-lift md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            {post ? (
              <PostCover post={post} className="aspect-[16/10] md:aspect-auto md:min-h-[17rem]" sizes="(min-width: 768px) 32rem, 100vw" />
            ) : null}
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="eyebrow text-teal-700">{readNextCopy.eyebrow}</span>
                {post ? <CategoryPill category={post.category} /> : null}
              </div>
              <h2 id="read-next-title" className="text-heading mt-4 text-balance">
                <Link
                  href={post?.href ?? readNextCopy.href}
                  className="rounded-sm after:absolute after:inset-0 after:rounded-[2.5rem] focus-visible:outline-none focus-visible:after:outline-[3px] focus-visible:after:outline-offset-[-3px] focus-visible:after:outline-ink focus-visible:after:outline-solid"
                >
                  {post?.title ?? readNextCopy.fallbackTitle}
                </Link>
              </h2>
              <p className="mt-4 max-w-xl text-ink-500">{readNextCopy.body}</p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center gap-2 font-display font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-[6px] group-hover:decoration-4"
                >
                  {readNextCopy.cta}
                  <Icon name="arrowRight" size={18} className="transition-transform duration-300 ease-(--ease-focus) group-hover:translate-x-1.5" />
                </span>
                {post ? <PostMeta post={post} className="text-ink-500" /> : null}
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </Section>
  );
}
