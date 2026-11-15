import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { FocusText } from "@/components/motion/FocusText";
import { Reveal } from "@/components/motion/Reveal";
import { FocusLens } from "@/components/graphics/FocusLens";
import { LedgerPanel } from "@/components/graphics/LedgerPanel";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pt-44">
      {/* Two soft arcs: the upper and lower lids of the eye in the logo. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[18%] -top-[30%] h-[78rem] w-[78rem] rounded-full bg-[radial-gradient(closest-side,var(--color-teal-100),transparent)]" />
        <div className="absolute -left-[25%] top-[35%] h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,var(--color-navy-50),transparent)]" />
        <div className="bg-dots absolute right-0 top-28 h-72 w-[28rem] text-navy/15 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <Container size="wide">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-16">
          <div className="max-w-2xl">
            <Reveal blur={false} y={10}>
              <Eyebrow>Bookkeeping &amp; insurance billing for eyecare</Eyebrow>
            </Reveal>
            <FocusText
              className="text-display mt-6"
              delay={0.15}
              segments={[
                "Bring your books and billing",
                {
                  text: "into focus.",
                  className:
                    "text-navy underline decoration-yellow decoration-[0.09em] underline-offset-[0.14em]",
                },
              ]}
            />
            <Reveal delay={0.75} className="mt-7 max-w-xl">
              <p className="text-lede text-ink-500">
                You became an optometrist to care for patients, not to spend
                late nights reconciling receipts and chasing claims. We keep
                the books and work the insurance billing for independent
                eyecare practices, and nothing else.
              </p>
            </Reveal>
            <Reveal delay={0.9} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={site.bookingHref} size="lg">
                Book a Discovery Call
              </Button>
              <Button href={site.pricingHref} size="lg" variant="outline">
                Estimate Your Price
              </Button>
            </Reveal>
            <Reveal delay={1.05} blur={false} y={8}>
              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[0.975rem] text-ink-700">
                {[
                  "Founded by an OD",
                  "Eyecare practices only",
                  "Reviewed financials by the 10th business day",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-teal text-ink">
                      <Icon name="check" size={12} strokeWidth={3.2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.35} y={36} blur={false} className="relative">
            <div className="relative rounded-[2.5rem] border border-white/80 bg-white/45 p-3 shadow-float backdrop-blur-sm sm:p-5">
              <FocusLens
                label="A sample month for an eyecare practice. Under the lens, an unsorted bank feed and a list of open claims become a reviewed profit and loss statement and claims that are paid, appealed, and followed up."
                blurred={<LedgerPanel state="before" />}
                sharp={<LedgerPanel state="after" />}
              />
            </div>
            <p className="mt-4 text-center text-sm text-ink-400 lg:text-right">
              Sample figures for illustration. Move the lens.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
