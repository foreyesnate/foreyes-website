import { Container } from "@/components/ui/Layout";

/** "On this page" links to the page's main sections. */
export function AudienceJumpNav({ links }: { links: { label: string; href: string }[] }) {
  return (
    <nav aria-label="On this page" className="border-b border-stone-200 bg-white">
      <Container size="wide" className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4">
        <p className="eyebrow w-full text-[0.75rem] text-ink-500 sm:w-auto">On this page</p>
        <ul className="flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex h-11 items-center rounded-full bg-stone px-4 font-display text-sm font-semibold text-ink transition-colors duration-300 hover:bg-navy-50 hover:text-navy-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
