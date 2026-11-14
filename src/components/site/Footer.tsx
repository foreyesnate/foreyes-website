import Link from "next/link";
import {
  audiences,
  flagshipServices,
  site,
  supportingServices,
} from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Layout";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Services",
    links: [...flagshipServices, ...supportingServices],
  },
  { title: "Who We Serve", links: audiences },
  {
    title: "Get to Know Us",
    links: [
      { label: "About", href: "/about-us" },
      { label: "Our Team", href: "/about-us/our-team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing Calculator", href: "/pricing-calculator" },
      { label: "Blog", href: "/resources/blog" },
      { label: "FAQs", href: "/resources/faq" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* A quiet eye-chart of dots, fading out toward the bottom. */}
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute inset-0 text-white/[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />
      <Container size="wide" className="relative pb-10 pt-20 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_2fr] lg:gap-20">
          <div>
            <Logo tone="light" className="h-14 w-fit" />
            <p className="mt-7 max-w-sm text-lg leading-relaxed text-white/70">
              {site.tagline} Founded by an OD.
            </p>
            <ul className="mt-8 grid gap-3.5 text-[1.0625rem]">
              <li>
                <a
                  href={site.phone.href}
                  className="group inline-flex items-center gap-3 font-display font-semibold transition-colors hover:text-yellow"
                >
                  <Icon name="phone" className="text-teal" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 font-display font-semibold transition-colors hover:text-yellow"
                >
                  <Icon name="mail" className="text-teal" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-white/75">
                <Icon name="pin" className="mt-0.5 shrink-0 text-teal" />
                <span>
                  Fully remote, headquartered in {site.headquarters}.
                  <br />
                  Serving eyecare practices nationwide.
                </span>
              </li>
              <li className="inline-flex items-center gap-3 text-white/75">
                <Icon name="clock" className="text-teal" />
                {site.hours}
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="eyebrow text-teal-200">{column.title}</h2>
                <ul className="mt-5 grid gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/80 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-yellow"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Formerly {site.legacyName}.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
