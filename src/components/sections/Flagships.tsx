import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { CloseCalendar } from "@/components/graphics/CloseCalendar";
import { ClaimsPipeline } from "@/components/graphics/ClaimsPipeline";

const books = [
  "A Custom Chart of Accounts that separates exam revenue from optical sales",
  "Every account matched to its statement, every month",
  "Reports reviewed by a quality control manager before you see them",
];

const billing = [
  "Claims reviewed for accuracy before they go out",
  "Denials appealed and unpaid claims followed up daily",
  "A monthly report on clean claim rate, denial rate, and days in A/R",
];

/** The two flagship services, side by side and equal in weight. */
export function Flagships() {
  return (
    <Section tone="stone" aria-labelledby="flagships-title" className="overflow-hidden">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            id="flagships-title"
            eyebrow="What we do"
            title="Two jobs. Done properly."
            lede="Books tell you what your practice earned and kept. Billing collects what your practice is owed. We do both, only for eyecare, and we do them every day."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal y={40} blur={false}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-navy p-7 text-white sm:p-10">
              <div aria-hidden="true" className="bg-dots absolute -right-10 -top-10 h-64 w-64 text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
              <p className="eyebrow flex items-center gap-2.5 text-teal-200">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                  <Icon name="ledger" size={19} />
                </span>
                Bookkeeping
              </p>
              <h3 className="text-heading mt-6 max-w-md">
                Books that show what your practice actually earns.
              </h3>
              <ul className="mt-6 grid gap-3 text-[1.0625rem] text-white/85">
                {books.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" size={20} strokeWidth={2.6} className="mt-1 shrink-0 text-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
              <CloseCalendar className="mt-9" />
              <div className="mt-auto pt-9">
                <Link
                  href="/services/bookkeeping"
                  className="inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display font-semibold text-ink transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-yellow"
                >
                  Get Your Books in Order
                  <Icon name="arrowRight" size={18} />
                </Link>
              </div>
            </article>
          </Reveal>

          <Reveal y={40} blur={false} delay={0.12}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-teal p-7 text-ink sm:p-10">
              <div aria-hidden="true" className="bg-dots absolute -right-10 -top-10 h-64 w-64 text-ink/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
              <p className="eyebrow flex items-center gap-2.5 text-ink">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink/10">
                  <Icon name="claim" size={19} />
                </span>
                Insurance Billing
              </p>
              <h3 className="text-heading mt-6 max-w-md">
                Collect what your practice is owed.
              </h3>
              <ul className="mt-6 grid gap-3 text-[1.0625rem] text-ink/90">
                {billing.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" size={20} strokeWidth={2.6} className="mt-1 shrink-0 text-ink" />
                    {item}
                  </li>
                ))}
              </ul>
              <ClaimsPipeline className="mt-9" />
              <div className="mt-auto pt-9">
                <Link
                  href="/services/insurance-billing"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-display font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
                >
                  Stop Chasing Payments
                  <Icon name="arrowRight" size={18} />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
