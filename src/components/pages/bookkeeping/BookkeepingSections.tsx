import { Illustration } from "@/components/ui/Art";
import { Icon } from "@/components/ui/Icon";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { CloseCalendar } from "@/components/graphics/CloseCalendar";
import { annual, close, portal, problem, process } from "@/content/services/bookkeeping";

// Sample bank lines for an imaginary practice, for illustration only.
const feed = [
  { date: "10/03", text: "CARD BATCH 4471", amount: "3,412.60" },
  { date: "10/03", text: "DEPOSIT", amount: "860.00" },
  { date: "10/06", text: "VISION PLAN EFT", amount: "1,947.25" },
  { date: "10/07", text: "CARD BATCH 4472", amount: "2,705.10" },
  { date: "10/08", text: "INSURANCE PMT", amount: "1,288.40" },
];

/** What the bank shows: money in, with no hint of which part of the practice earned it. */
function BankFeedCard() {
  return (
    <figure className="mx-auto w-full max-w-[32rem]">
      <div
        role="img"
        aria-label="A sample bank feed. Five deposits arrive in one operating account, and none of them says whether it came from exams, optical sales, or contact lenses."
        className="rounded-[2.5rem] bg-stone p-5 sm:p-7"
      >
        <div aria-hidden="true">
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-[0.95rem] font-semibold">Operating account</p>
            <span className="rounded-full bg-stone-200 px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-ink-500">
              One account
            </span>
          </div>
          <ul className="mt-5 flex flex-col gap-2">
            {feed.map((line) => (
              <li
                key={line.text + line.amount}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[0.875rem] shadow-soft"
              >
                <span className="tabular hidden text-ink-400 sm:inline">{line.date}</span>
                <span className="min-w-0 flex-1 truncate font-medium tracking-[0.02em] text-ink-700">{line.text}</span>
                <span className="tabular font-display font-semibold">${line.amount}</span>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-stone-200 font-display text-[0.8rem] font-bold text-ink-500">
                  ?
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-2 px-1 text-[0.85rem] text-ink-500">
            <span>Earned by</span>
            {["Exams?", "Optical?", "Contact lenses?"].map((guess) => (
              <span key={guess} className="rounded-full border border-dashed border-ink-400 px-3 py-1 font-display font-semibold">
                {guess}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-ink-500">Sample entries for illustration.</figcaption>
    </figure>
  );
}

/** The owner's problem, in eyecare terms. */
export function BooksProblem() {
  return (
    <Section tone="white" aria-labelledby="problem-title" className="overflow-hidden">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal className="min-w-0">
            <Eyebrow className="mb-5">{problem.eyebrow}</Eyebrow>
            <h2 id="problem-title" className="text-title">
              {problem.title.map((sentence) => (
                <span key={sentence} className="block">
                  {sentence}{" "}
                </span>
              ))}
            </h2>
            <div className="text-lede mt-6 grid max-w-2xl gap-4 text-ink-500">
              {problem.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} y={36} blur={false} className="min-w-0">
            <BankFeedCard />
          </Reveal>
        </div>

        <Reveal className="mt-16 sm:mt-24">
          <h3 className="text-subheading">{problem.questionsTitle}</h3>
        </Reveal>
        <Stagger as="ol" className="mt-7 grid gap-5 md:grid-cols-3">
          {problem.questions.map((item, i) => (
            <StaggerItem as="li" key={item.question}>
              <div className="flex h-full flex-col rounded-[1.75rem] border-2 border-stone-200 p-7 sm:p-8">
                <span className="tabular font-display text-sm font-semibold text-ink-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-display text-[1.3125rem] font-semibold leading-snug tracking-[-0.02em]">
                  {item.question}
                </p>
                <p className="mt-auto pt-6 text-[0.95rem] text-ink-500">
                  <span className="mb-1 block font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-teal-700">
                    Hidden by
                  </span>
                  {item.hiddenBy}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

/** Right-hand visual of the monthly close section: the calendar, then who reviews. */
export function BooksCloseVisual() {
  return (
    <div className="grid gap-5">
      {/* The phase labels collide below 400px in the shared graphic; tighten them here. */}
      <CloseCalendar className="max-sm:[&_ul]:text-[0.6rem] max-sm:[&_ul]:tracking-[0.02em]" />
      <div className="flex gap-5 rounded-[1.75rem] bg-white p-6 text-ink shadow-lift sm:p-7">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-yellow">
          <Icon name="eye" size={28} />
        </span>
        <div>
          <h3 className="text-subheading">{close.review.title}</h3>
          <p className="mt-2 text-ink-500">{close.review.body}</p>
        </div>
      </div>
    </div>
  );
}

// Sample rows for the small portal card on the picture. Illustration only.
const reports = ["October P&L", "Balance sheet"];

/**
 * The end of the owner's day, with this month's reviewed reports waiting in
 * the portal. The card sits in the empty lower-left corner of the drawing.
 */
function PortalPicture() {
  return (
    <Illustration
      name="heading-home"
      panel="teal"
      className="mx-auto max-w-[36rem]"
      sizes="(min-width: 640px) 31rem, 78vw"
    >
      <div
        role="img"
        aria-label="A sample client portal card: the October P&L and balance sheet, both marked reviewed."
        className="relative mt-5 sm:absolute sm:bottom-8 sm:left-8 sm:mt-0 sm:w-[14.5rem]"
      >
        <div aria-hidden="true" className="rounded-[1.5rem] bg-white p-4 shadow-lift">
          <div className="flex items-center justify-between gap-2">
            <p className="font-display text-[0.875rem] font-semibold">Client portal</p>
            <span className="rounded-full bg-stone px-2 py-0.5 font-display text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-ink-500">
              Sample
            </span>
          </div>
          <ul className="mt-3 grid gap-1.5">
            {reports.map((report) => (
              <li key={report} className="flex items-center justify-between gap-2 rounded-xl bg-stone px-3 py-2">
                <span className="text-[0.8125rem] font-medium">{report}</span>
                <span className="flex items-center gap-1 font-display text-[0.6875rem] font-semibold text-teal-700">
                  <Icon name="check" size={12} strokeWidth={3} />
                  Reviewed
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Illustration>
  );
}

/** The client portal and the account manager: "Review, Ask, Decide". */
export function BooksPortal() {
  return (
    <Section tone="white" aria-labelledby="portal-title" className="overflow-hidden">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="min-w-0">
            <Eyebrow className="mb-5">{portal.eyebrow}</Eyebrow>
            <h2 id="portal-title" className="text-title">
              {portal.title}
            </h2>
            <p className="text-lede mt-6 max-w-2xl text-ink-500">{portal.lede}</p>
            <ol className="mt-9 grid gap-0 border-t-2 border-stone-200">
              {portal.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5 border-b-2 border-stone-200 py-5">
                  <span className="tabular grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-50 font-display text-[0.95rem] font-bold text-navy">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-subheading">{step.title}</h3>
                    <p className="mt-1.5 text-ink-500">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-7 max-w-xl font-display text-[1.125rem] font-medium leading-snug tracking-[-0.01em]">
              {portal.closer}
            </p>
          </Reveal>
          <Reveal delay={0.12} y={36} blur={false} className="min-w-0">
            <PortalPicture />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Sits beside the process steps: how long historical cleanup takes. */
export function BooksCleanupCard() {
  const { cleanup } = process;
  return (
    <div className="max-w-md rounded-[1.75rem] bg-white p-7 shadow-soft sm:p-8">
      <p className="eyebrow text-teal-700">{cleanup.label}</p>
      <p className="mt-3 font-display text-[clamp(2.25rem,1.6rem+2.4vw,3.25rem)] font-bold leading-none tracking-[-0.035em] text-navy">
        {cleanup.figure}
      </p>
      <h3 className="text-subheading mt-5">{cleanup.title}</h3>
      <p className="mt-2 text-ink-500">{cleanup.body}</p>
    </div>
  );
}

/** Annual Financial Review, with the tax-ready statement old tax URLs land on. */
export function BooksAnnualReview() {
  const { taxReady } = annual;
  return (
    <Section tone="ink" aria-labelledby="annual-title" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] top-0 h-[42rem] w-[60rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(65_93_158/0.5),transparent)]" />
        <div className="bg-dots absolute bottom-0 right-0 h-72 w-[30rem] text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>
      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="min-w-0">
            <Eyebrow tone="light" className="mb-5">
              {annual.eyebrow}
            </Eyebrow>
            <h2 id="annual-title" className="text-title">
              {annual.title}
            </h2>
            <div className="text-lede mt-6 grid max-w-2xl gap-4 text-white/80">
              {annual.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} y={36} blur={false} className="min-w-0">
            <div id="tax-ready" className="scroll-mt-28">
              <LoopVideo name="books" ratio="3/2" />
              {/* Overlaps the clip's lower left; the right margin keeps the pause button clear. */}
              <div className="relative z-10 mt-4 rounded-[2rem] bg-white p-7 text-ink shadow-float sm:-mt-24 sm:mr-20 sm:rounded-[2.5rem] sm:p-10">
                <h3 className="eyebrow flex items-center gap-3 text-teal-700">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-100 text-teal-800">
                    <Icon name="ledger" size={19} />
                  </span>
                  {taxReady.label}
                </h3>
                <p className="mt-6 text-balance font-display text-[clamp(1.625rem,1.3rem+1.4vw,2.375rem)] font-semibold leading-[1.12] tracking-[-0.025em]">
                  {taxReady.statement.map((sentence) => (
                    <span key={sentence} className="block">
                      {sentence}{" "}
                    </span>
                  ))}
                </p>
                <p className="mt-5 border-t-2 border-stone-200 pt-5 text-ink-500">{taxReady.body}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
