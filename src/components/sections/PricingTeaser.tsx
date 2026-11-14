import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";

/** A compact nudge toward the pricing calculator. */
export function PricingTeaser({
  title = "See What It Costs for a Practice Like Yours",
  body = "Build an estimate in a few minutes with the pricing calculator, then book a Discovery Call to confirm it. Every figure shown is an estimate only.",
  cta = "Estimate Your Price",
}: {
  title?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section aria-labelledby="pricing-teaser-title" className="bg-white py-14 sm:py-20">
      <Container size="wide">
        <Reveal>
          <div className="relative grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[auto_1fr_auto]">
            <div aria-hidden="true" className="bg-dots absolute inset-y-0 right-0 w-1/2 text-white/10 [mask-image:linear-gradient(to_left,black,transparent)]" />
            <span className="relative grid h-20 w-20 place-items-center rounded-3xl bg-yellow text-ink">
              <Icon name="chart" size={38} />
            </span>
            <div className="relative">
              <h2 id="pricing-teaser-title" className="text-heading">
                {title}
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-white/80">{body}</p>
            </div>
            <div className="relative">
              <Button href={site.pricingHref} size="lg">
                {cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
