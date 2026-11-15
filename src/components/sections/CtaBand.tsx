import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { WatchfulEye } from "@/components/site/Logo";

/** The closing call to action on every page. */
export function CtaBand({
  title = "See Further. Move Faster. Grow Smarter.",
  body = "Tell us about your practice. We’ll tell you what your books and billing could look like, and what it would cost.",
  showPricing = true,
}: {
  title?: string;
  body?: string;
  /** Set false on the pricing page, where the button would link to itself. */
  showPricing?: boolean;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-stone px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="on-yellow relative overflow-hidden rounded-[2.5rem] bg-yellow text-ink">
        <div aria-hidden="true" className="bg-dots absolute inset-0 text-ink/[0.07] [mask-image:linear-gradient(to_right,transparent,black_70%)]" />
        <Container size="wide" className="relative py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <h2 id="cta-title" className="text-title max-w-3xl">
                {title}
              </h2>
              <p className="text-lede mt-6 max-w-xl text-ink/80">{body}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href={site.bookingHref} size="lg" variant="ink">
                  Book a Discovery Call
                </Button>
                {showPricing ? (
                  <Button
                    href={site.pricingHref}
                    size="lg"
                    variant="outline"
                    className="border-ink/25 bg-transparent hover:bg-white"
                  >
                    Estimate Your Price
                  </Button>
                ) : null}
              </div>
            </Reveal>
            <Reveal delay={0.15} blur={false} className="hidden justify-self-end lg:block">
              <WatchfulEye className="w-[22rem] xl:w-[26rem]" />
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
