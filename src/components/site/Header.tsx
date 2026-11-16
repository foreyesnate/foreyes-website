"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { mainNav, site, type NavGroup } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "./Logo";

const featuredIcons: Record<string, IconName> = {
  "/services/bookkeeping": "ledger",
  "/services/insurance-billing": "claim",
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close menus whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      // Keyboard: tabbing past the last link of the open mobile menu closes it,
      // so focus never lands on page content hidden underneath.
      onBlur={(event) => {
        const next = event.relatedTarget as Node | null;
        if (mobileOpen && next && !event.currentTarget.contains(next)) setMobileOpen(false);
      }}
    >
      <a
        href="#main"
        className="pointer-events-auto absolute left-4 top-4 z-[60] -translate-y-24 rounded-full bg-ink px-5 py-3 font-display font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-[88rem] items-center gap-4 rounded-full border border-white/70 bg-white/85 pl-5 pr-2.5 lg:max-xl:gap-2 backdrop-blur-xl transition-[height,box-shadow,background-color] duration-500 ease-(--ease-focus) sm:pl-7",
          scrolled ? "h-16 shadow-lift" : "h-[4.5rem] shadow-soft",
        )}
      >
        <Logo
          className={cn(
            // The ::after pads the tap target to 44px+ without moving the art.
            "relative transition-[height] duration-500 ease-(--ease-focus) after:absolute after:-inset-y-2 after:inset-x-0 after:content-['']",
            scrolled ? "h-9" : "h-10 sm:h-11",
          )}
        />

        <nav
          ref={navRef}
          aria-label="Main"
          className="ml-auto hidden items-center lg:flex"
        >
          <ul className="flex items-center">
            {mainNav.map((group) => (
              <DesktopItem
                key={group.label}
                group={group}
                active={isActive(pathname, group)}
                open={open === group.label}
                onOpen={() => hoverOpen(group.label)}
                onClose={hoverClose}
                onToggle={() =>
                  setOpen((current) =>
                    current === group.label ? null : group.label,
                  )
                }
              />
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-1 xl:ml-3">
          <a
            href={site.phone.href}
            className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-full px-3 font-display text-[0.95rem] font-semibold text-ink transition-colors hover:text-navy xl:flex"
          >
            <Icon name="phone" size={17} className="text-teal-700" />
            {site.phone.display}
          </a>
          <div className="hidden sm:block">
            <Button href={site.bookingHref} arrow={false}>
              Book a Discovery Call
            </Button>
          </div>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-navy lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileOpen ? "mobile-menu" : undefined}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <MobileMenu pathname={pathname} onNavigate={() => setMobileOpen(false)} />
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function isActive(pathname: string, group: NavGroup) {
  if (pathname === group.href || pathname.startsWith(group.href + "/")) return true;
  return [...(group.featured ?? []), ...(group.links ?? [])].some(
    (link) => pathname === link.href,
  );
}

function DesktopItem({
  group,
  active,
  open,
  onOpen,
  onClose,
  onToggle,
}: {
  group: NavGroup;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const hasMenu = Boolean(group.links?.length || group.featured?.length);
  const itemClass = cn(
    // Tighter between 1024 and 1120 so the five items, the logo and the CTA
    // share one line without wrapping.
    "relative flex h-11 items-center gap-1 whitespace-nowrap rounded-full px-2 font-display text-[0.9rem] font-semibold transition-colors min-[1120px]:px-3.5 min-[1120px]:text-[0.95rem] 2xl:px-4",
    active ? "text-navy" : "text-ink hover:text-navy",
  );

  if (!hasMenu) {
    return (
      <li>
        <Link href={group.href} className={itemClass} aria-current={active ? "page" : undefined}>
          {group.label}
        </Link>
      </li>
    );
  }

  const panelId = `nav-${group.label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <li
      className="relative"
      onPointerEnter={onOpen}
      onPointerLeave={onClose}
      // Keyboard: tabbing out of the item or its panel closes the panel.
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        type="button"
        className={itemClass}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={onToggle}
      >
        {group.label}
        <Icon
          name="chevronDown"
          size={15}
          className={cn(
            "transition-transform duration-300 ease-(--ease-focus)",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 4, scale: 0.99, filter: "blur(4px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute top-full z-10 pt-4",
              // The wide Services panel hangs from the item's left edge so it
              // stays inside the viewport at 1024; the narrow ones centre.
              group.featured
                ? "left-0 w-[42rem] -translate-x-24"
                : "left-1/2 w-[22rem] -translate-x-1/2",
            )}
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white p-3 shadow-lift">
              {group.featured ? (
                <div className="grid grid-cols-2 gap-2">
                  {group.featured.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group/feat flex flex-col gap-3 rounded-[1.25rem] bg-stone p-5 transition-colors hover:bg-navy hover:text-white"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-navy transition-colors group-hover/feat:bg-yellow group-hover/feat:text-ink">
                        <Icon name={featuredIcons[link.href] ?? "spark"} size={22} />
                      </span>
                      <span>
                        <span className="block font-display text-lg font-semibold tracking-[-0.02em]">
                          {link.label}
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-ink-500 transition-colors group-hover/feat:text-white/80">
                          {link.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              ) : null}
              {group.links?.length ? (
                <ul className={cn(group.featured && "mt-2 grid grid-cols-3 gap-1")}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block h-full rounded-[1.1rem] px-4 py-3 transition-colors hover:bg-stone"
                      >
                        <span className="block font-display text-[0.975rem] font-semibold">
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="mt-0.5 block text-sm leading-snug text-ink-500">
                            {link.description}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link
                href={group.href}
                className="mt-2 flex items-center justify-between rounded-[1.1rem] bg-stone px-4 py-3 font-display text-sm font-semibold text-ink transition-colors hover:bg-yellow"
              >
                {group.label === "Services" ? "See all services" : `${group.label} overview`}
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

function MobileMenu({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto mx-auto mt-2 max-h-[calc(100dvh-6.5rem)] max-w-[88rem] overflow-y-auto rounded-[2rem] border border-white/70 bg-white p-4 shadow-lift lg:hidden"
    >
      <nav aria-label="Mobile">
        <ul className="divide-y divide-stone-200">
          {mainNav.map((group) => {
            const links = [...(group.featured ?? []), ...(group.links ?? [])];
            return (
              <li key={group.label} className="py-3">
                <Link
                  href={group.href}
                  onClick={onNavigate}
                  aria-current={pathname === group.href ? "page" : undefined}
                  className="flex min-h-11 items-center justify-between px-2 py-1.5 font-display text-xl font-semibold tracking-[-0.02em]"
                >
                  {group.label}
                  <Icon name="arrowRight" size={18} className="text-teal-700" />
                </Link>
                {links.length ? (
                  <ul className="mt-1 grid gap-0.5">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          aria-current={pathname === link.href ? "page" : undefined}
                          className={cn(
                            "flex min-h-11 items-center rounded-xl px-2 py-2 text-[1.0625rem] text-ink-500",
                            pathname === link.href && "bg-stone text-ink",
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-3 grid gap-2">
        <Button href={site.bookingHref} size="lg" className="w-full">
          Book a Discovery Call
        </Button>
        <a
          href={site.phone.href}
          className="flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink/15 font-display font-semibold"
        >
          <Icon name="phone" size={18} className="text-teal-700" />
          {site.phone.display}
        </a>
      </div>
    </motion.div>
  );
}
