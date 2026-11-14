"use client";

import { motion } from "motion/react";
import { useId, useState } from "react";
import type { PostSummary } from "@/lib/blog";
import { Icon } from "@/components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { categoryStyle } from "./content";
import { FeaturedPost, PostCard } from "./PostCard";

/**
 * The blog index below the hero: topic pills, the newest matching post as a
 * wide feature, and the rest in a grid. Filtering happens in the browser, so
 * the page stays static and every post is in the HTML for search engines.
 */
export function BlogIndex({
  posts,
  categories,
}: {
  posts: PostSummary[];
  categories: { name: string; count: number }[];
}) {
  const [category, setCategory] = useState<string | null>(null);
  const groupId = useId();
  const shown = category ? posts.filter((post) => post.category === category) : posts;
  const [featured, ...rest] = shown;
  const summary = `Showing ${shown.length} ${shown.length === 1 ? "post" : "posts"}${category ? ` in ${category}` : ""}`;

  const pills = [
    { name: null as string | null, label: "All Posts", count: posts.length },
    ...categories.map((c) => ({ name: c.name as string | null, label: c.name, count: c.count })),
  ];

  return (
    <div>
      <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div role="group" aria-labelledby={groupId} className="min-w-0">
          <p id={groupId} className="eyebrow mb-4 text-ink-500">
            Browse by topic
          </p>
          <ul className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {pills.map((pill) => {
              const selected = pill.name === category;
              return (
                <li key={pill.label} className="shrink-0">
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setCategory(pill.name)}
                    className={cn(
                      "relative inline-flex h-12 items-center gap-2.5 rounded-full pl-4 pr-2.5 font-display text-[0.9375rem] font-semibold transition-colors duration-300 active:scale-[0.97]",
                      selected ? "text-white" : "bg-stone text-ink hover:bg-navy-50",
                    )}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="blog-filter-pill"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    ) : null}
                    <span className="relative flex items-center gap-2">
                      <Icon name={selected ? "check" : pill.name ? categoryStyle(pill.name).icon : "eye"} size={17} strokeWidth={selected ? 2.6 : 1.9} />
                      {pill.label}
                    </span>
                    <span
                      className={cn(
                        "tabular relative grid h-7 min-w-7 place-items-center rounded-full px-2 text-[0.8125rem] transition-colors duration-300",
                        selected ? "bg-yellow text-ink" : "bg-white text-ink-500",
                      )}
                    >
                      {pill.count}
                      <span className="sr-only"> {pill.count === 1 ? "post" : "posts"}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <p role="status" aria-live="polite" className="text-[0.9375rem] text-ink-500 sm:pb-3">
          {summary}
        </p>
      </Reveal>

      <h2 className="sr-only">{category ? `${category} posts` : "All posts"}</h2>

      {featured ? (
        // Keyed so a new selection comes into focus like a fresh section.
        <Reveal key={`featured-${featured.slug}`} className="mt-10" y={28}>
          <FeaturedPost post={featured} as="h3" label={category ? `Latest in ${category}` : "Latest post"} />
        </Reveal>
      ) : null}

      {rest.length ? (
        <Stagger key={`grid-${category ?? "all"}`} as="ul" className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {rest.map((post, index) => {
            const alone = rest.length % 2 === 1 && index === rest.length - 1;
            return (
              <StaggerItem as="li" key={post.slug} className={alone ? "md:max-lg:col-span-2" : undefined}>
                <PostCard post={post} surface="stone" wideOnTablet={alone} />
              </StaggerItem>
            );
          })}
        </Stagger>
      ) : null}
    </div>
  );
}
