"use client";

import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import type { FaqGroup } from "@/content/faqs";
import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion, type Faq } from "@/components/sections/FaqAccordion";
import { cn } from "@/lib/cn";

/** Lower-case, strip accents and punctuation, so "A/R" finds "A/R" and "ar". */
function normalise(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9%$]+/g, " ")
    .trim();
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

/**
 * The body of the FAQ page: a search box that filters questions as you type,
 * topic pills that jump to each group (a sticky rail on desktop, a sticky
 * horizontal scroller on phones), and one accordion per group.
 */
export function FaqExplorer({ groups }: { groups: FaqGroup[] }) {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [active, setActive] = useState(groups[0]?.id ?? "");
  const scrollerRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Search text for every question, built once.
  const haystacks = useMemo(
    () =>
      new Map(
        groups.flatMap((group) =>
          group.items.map((item) => [
            item.question,
            normalise(`${item.question} ${item.answer}`),
          ]),
        ),
      ),
    [groups],
  );

  const total = useMemo(() => groups.reduce((sum, group) => sum + group.items.length, 0), [groups]);
  const terms = useMemo(() => normalise(deferredQuery).split(" ").filter(Boolean), [deferredQuery]);
  const filtering = terms.length > 0;

  const visible = useMemo(
    () =>
      groups.map((group) => ({
        group,
        items: filtering
          ? group.items.filter((item) => {
              const haystack = haystacks.get(item.question) ?? "";
              return terms.every((term) => haystack.includes(term));
            })
          : group.items,
      })),
    [groups, haystacks, terms, filtering],
  );
  const matches = visible.reduce((sum, entry) => sum + entry.items.length, 0);
  const shownQuery = deferredQuery.trim();

  // Highlight the topic being read.
  useEffect(() => {
    const sections = groups
      .map((group) => document.getElementById(group.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups, matches]);

  // Keep the active pill in view inside the phone scroller, without moving the page.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    const pill = scroller.querySelector<HTMLElement>(`[data-topic="${active}"]`);
    if (!pill) return;
    const left = pill.offsetLeft - (scroller.clientWidth - pill.offsetWidth) / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  const status = !filtering
    ? `Showing all ${total} questions.`
    : matches === 0
      ? `No questions match “${shownQuery}”.`
      : `${matches} ${matches === 1 ? "question matches" : "questions match"} “${shownQuery}”.`;

  function clear() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div className="lg:grid lg:grid-cols-[18.5rem_minmax(0,1fr)] lg:gap-x-16">
      {/* `contents` on phones lets the topic pills stick for the whole list. */}
      <div className="contents lg:sticky lg:top-28 lg:block lg:self-start">
        <div>
          <form role="search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor={inputId} className="mb-2.5 block font-display text-sm font-semibold text-ink">
              Search the FAQs
            </label>
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500" />
              <input
                ref={inputRef}
                id={inputId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape" && query) {
                    event.preventDefault();
                    setQuery("");
                  }
                }}
                placeholder="Try “payroll” or “denials”"
                autoComplete="off"
                enterKeyHint="search"
                aria-describedby={`${inputId}-status`}
                className="h-14 w-full rounded-full border-2 border-stone-300 bg-white pl-12 pr-14 text-[1.0625rem] text-ink transition-colors placeholder:text-ink-400 focus:border-navy [&::-webkit-search-cancel-button]:appearance-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={clear}
                  className="absolute right-1.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-ink-500 transition-colors hover:bg-stone hover:text-ink"
                >
                  <Icon name="close" size={18} strokeWidth={2.3} />
                  <span className="sr-only">Clear search</span>
                </button>
              ) : null}
            </div>
          </form>
          <p
            id={`${inputId}-status`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="mt-3 text-sm text-ink-500"
          >
            {status}
          </p>
        </div>

        <nav
          aria-label="FAQ topics"
          className="sticky top-[5.25rem] z-30 -mx-5 mt-6 border-y border-stone-200 bg-white/90 backdrop-blur-xl sm:-mx-8 lg:static lg:mx-0 lg:mt-7 lg:border-0 lg:bg-transparent lg:backdrop-blur-none"
        >
          <p className="eyebrow mb-3 hidden text-[0.75rem] text-ink-500 lg:block">Topics</p>
          <ul
            ref={scrollerRef}
            className="relative flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:p-0 [&::-webkit-scrollbar]:hidden"
          >
            {visible.map(({ group, items }) => {
              const empty = items.length === 0;
              const current = !empty && active === group.id;
              const pill = cn(
                "flex h-11 shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-full pl-4 pr-2 font-display text-[0.9375rem] font-semibold transition-colors duration-300 lg:h-12 lg:pl-5 lg:pr-2.5",
                empty
                  ? "bg-stone/60 text-ink-400"
                  : current
                    ? "bg-ink text-white"
                    : "bg-stone text-ink hover:bg-navy-50 hover:text-navy-700",
              );
              const count = (
                <span
                  className={cn(
                    "tabular grid h-7 min-w-7 place-items-center rounded-full px-1.5 text-[0.8125rem] font-bold",
                    empty ? "bg-white/70 text-ink-400" : current ? "bg-yellow text-ink" : "bg-white text-ink-500",
                  )}
                >
                  {items.length}
                  <span className="sr-only">{items.length === 1 ? " question" : " questions"}</span>
                </span>
              );
              return (
                <li key={group.id} data-topic={group.id} className="shrink-0">
                  {empty ? (
                    <span className={pill}>
                      {group.navLabel}
                      {count}
                    </span>
                  ) : (
                    <a href={`#${group.id}`} aria-current={current ? "true" : undefined} className={pill}>
                      {group.navLabel}
                      {count}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 grid gap-14 sm:gap-20 lg:mt-0">
        {matches === 0 ? (
          <div className="rounded-[2.5rem] bg-stone px-6 py-14 text-center sm:px-12 sm:py-20">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-ink shadow-soft">
              <SearchIcon />
            </span>
            <h2 className="text-heading mt-6">Nothing matches “{shownQuery}”.</h2>
            <p className="mx-auto mt-4 max-w-md text-ink-500">
              Try a shorter word, such as “claims”, “reports”, or “cost”. Or ask us directly and a person will answer.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <button
                type="button"
                onClick={clear}
                className="inline-flex h-12 items-center rounded-full bg-ink px-6 font-display text-[0.975rem] font-semibold text-white transition-colors duration-300 hover:bg-navy"
              >
                Clear Search
              </button>
              <TextLink href="/contact#message">Send a Message</TextLink>
            </div>
          </div>
        ) : (
          visible.map(({ group, items }, index) => {
            if (!items.length) return null;
            const faqs: Faq[] = items.map((item) => ({
              question: item.question,
              answer: item.answer,
              rich: item.link ? (
                <>
                  <p>{item.answer}</p>
                  <TextLink href={item.link.href} className="mt-2.5 min-h-11 text-[0.975rem]">
                    {item.link.label}
                  </TextLink>
                </>
              ) : undefined,
            }));
            return (
              <section
                key={group.id}
                id={group.id}
                aria-labelledby={`${group.id}-title`}
                className="scroll-mt-20 lg:scroll-mt-2"
              >
                <Reveal y={16}>
                  <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
                    <h2 id={`${group.id}-title`} className="text-heading">
                      {group.title}
                    </h2>
                    <p className="tabular font-display text-sm font-semibold text-ink-500">
                      {filtering
                        ? `${items.length} of ${group.items.length} ${group.items.length === 1 ? "question" : "questions"}`
                        : `${items.length} ${items.length === 1 ? "question" : "questions"}`}
                    </p>
                  </div>
                  <p className="mt-3 max-w-2xl text-ink-500">{group.blurb}</p>
                </Reveal>
                <FaqAccordion
                  // Remount when the search changes so the open row never points at a different question.
                  key={`${group.id}:${terms.join(" ")}`}
                  items={faqs}
                  defaultOpen={filtering ? (matches <= 3 ? 0 : -1) : index === 0 ? 0 : -1}
                  className="mt-7 [&>li]:bg-stone [&>li:has([aria-expanded=true])]:bg-white"
                />
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}
