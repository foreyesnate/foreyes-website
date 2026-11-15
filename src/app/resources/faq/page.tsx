import type { Metadata } from "next";
import { allFaqs, faqGroups } from "@/content/faqs";
import { site } from "@/content/site";
import { Illustration } from "@/components/ui/Art";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqJsonLd } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { FaqExplorer } from "@/components/pages/faq/FaqExplorer";
import { FaqFocusCard, type QuickAnswer } from "@/components/pages/faq/FaqFocusCard";

export const metadata: Metadata = {
  title: "FAQs: Bookkeeping & Insurance Billing for Eyecare",
  description:
    "Straight answers for optometry practice owners about bookkeeping, insurance billing, accounts payable, payroll, consulting, pricing, and how we work with you.",
  alternates: { canonical: "/resources/faq" },
};

// Short forms of four answers from the list below, for the hero card.
const quickAnswers: QuickAnswer[] = [
  {
    question: "Do you prepare taxes?",
    answer: "No. Your books are closed and reviewed every month, so they’re tax-ready for your CPA.",
  },
  {
    question: "When will I see my numbers?",
    answer: "Reviewed reports are in your client portal by the 10th business day.",
  },
  {
    question: "What does Insurance Billing cost?",
    answer:
      "Medical plan billing is 8% of net receipts. Vision plan billing is 5% of net receipts, plus applicable lab fees.",
  },
  {
    question: "Where are you located?",
    answer: "We’re fully remote and headquartered in Nashville, serving practices nationwide.",
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={allFaqs} />

      <PageHero
        eyebrow="FAQs"
        title="Answers to the questions"
        highlight="practice owners ask."
        lede="How ForEyes Books & Billing works, what each service covers, what it costs, and what we need from you. Search for a word, or jump to a topic."
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "FAQs" }]}
        secondaryCta={{ label: "Estimate Your Price", href: site.pricingHref }}
        visual={<FaqFocusCard items={quickAnswers} total={allFaqs.length} topics={faqGroups.length} />}
      />

      <Section tone="white" id="questions" aria-label="Questions and answers">
        <Container size="wide">
          <FaqExplorer groups={faqGroups} />
        </Container>
      </Section>

      <Section tone="stone" spacing="tight" aria-labelledby="still-title" className="overflow-hidden">
        <Container size="wide">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy text-white">
              <div
                aria-hidden="true"
                className="bg-dots pointer-events-none absolute right-0 top-0 h-72 w-[28rem] text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
              />
              <div className="relative grid items-center gap-x-14 gap-y-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:p-14">
                <div>
                  <Eyebrow tone="light">Still have a question?</Eyebrow>
                  <h2 id="still-title" className="text-title mt-5">
                    Ask a person. We’ll answer.
                  </h2>
                  <p className="text-lede mt-6 max-w-xl text-white/80">
                    If your question isn’t on this page, send it to us or bring it to a Discovery Call. You can
                    reach the team {site.hours}.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Button href="/contact#message" size="lg">
                      Send a Message
                    </Button>
                    <Button href={site.bookingHref} size="lg" variant="light" arrow>
                      Book a Discovery Call
                    </Button>
                  </div>
                  <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 font-display font-semibold">
                    <li>
                      <a href={site.phone.href} className="tabular inline-flex min-h-11 items-center gap-2.5 hover:underline">
                        <Icon name="phone" size={19} className="text-yellow" />
                        {site.phone.display}
                      </a>
                    </li>
                    <li className="min-w-0">
                      <a
                        href={`mailto:${site.email}`}
                        className="inline-flex min-h-11 items-center gap-2.5 [overflow-wrap:anywhere] hover:underline"
                      >
                        <Icon name="mail" size={19} className="shrink-0 text-yellow" />
                        {site.email}
                      </a>
                    </li>
                  </ul>
                </div>
                <Illustration
                  name="team-desk"
                  panel="teal"
                  sizes="(min-width: 1024px) 34rem, 92vw"
                  className="rounded-[2rem] sm:p-8"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
