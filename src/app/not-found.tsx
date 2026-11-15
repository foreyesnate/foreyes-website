import type { Metadata } from "next";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { EyeChart404 } from "@/components/graphics/EyeChart404";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "That page isn’t here. Head to the homepage, see our services, or contact ForEyes Books & Billing.",
  robots: { index: false, follow: true },
};

const moreLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Pricing Calculator", href: site.pricingHref },
  { label: "FAQs", href: "/resources/faq" },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 error"
        title="We can’t find"
        highlight="that page."
        lede="The link may be out of date, or the address may have a typo. These will get you where you were going."
        primaryCta={{ label: "Go to the Homepage", href: "/" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
        visual={<EyeChart404 />}
      >
        <Reveal delay={0.8} blur={false} y={8}>
          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            {moreLinks.map((link) => (
              <li key={link.href}>
                <TextLink href={link.href} className="min-h-11">
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHero>

      <CtaBand />
    </>
  );
}
