import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import { site } from "@/content/site";

/**
 * The blog reads Markdown files from /content/blog at build time. One file is
 * one post; the frontmatter is the post's metadata. A post with `draft: true`
 * does not exist as far as the site is concerned: it is left out of the index,
 * related posts, static params and anything else built on `getAllPosts`.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** The service page a post's "talk to us" card points to. */
export type PostService =
  | "bookkeeping"
  | "insurance-billing"
  | "accounts-payable"
  | "payroll"
  | "practice-consulting";

const services: PostService[] = [
  "bookkeeping",
  "insurance-billing",
  "accounts-payable",
  "payroll",
  "practice-consulting",
];

export type PostHeading = { id: string; text: string };

/** Everything about a post except its body. Safe to pass to Client Components. */
export type PostSummary = {
  slug: string;
  /** Path of the post page. */
  href: string;
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** The date as readers see it, e.g. "July 2, 2026". */
  dateLabel: string;
  author: string;
  description: string;
  category: string;
  readingMinutes: number;
  heroImage?: string;
  heroAlt: string;
  service: PostService;
};

export type Post = PostSummary & {
  /** Markdown body. */
  content: string;
  /** The H2s, in order, for the table of contents. */
  headings: PostHeading[];
};

/** Turn heading text into an anchor id. Shared with the Markdown renderer. */
export function headingId(text: string) {
  return (
    text
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

/**
 * Hands out unique ids for a run of headings. The table of contents and the
 * rendered article each walk the H2s in order with their own instance, so the
 * two always agree, even when a post repeats a heading.
 */
export function createHeadingIds() {
  const used = new Map<string, number>();
  return (text: string) => {
    const base = headingId(text);
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    return count ? `${base}-${count + 1}` : base;
  };
}

/** Strip inline Markdown so a heading reads as plain text. */
function plain(markdown: string) {
  return markdown
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__|\*|_|`)/g, "")
    .replace(/\\([\\*_`[\]<>|])/g, "$1")
    .trim();
}

function extractHeadings(markdown: string): PostHeading[] {
  const nextId = createHeadingIds();
  const headings: PostHeading[] = [];
  let fenced = false;
  for (const line of markdown.split("\n")) {
    if (/^(```|~~~)/.test(line)) fenced = !fenced;
    const match = !fenced && /^##\s+(.+?)\s*#*$/.exec(line);
    if (match) {
      const text = plain(match[1]);
      headings.push({ id: nextId(text), text });
    }
  }
  return headings;
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

function readPost(file: string): { post: Post; draft: boolean } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = String(data.slug ?? file.replace(/\.md$/, ""));
  for (const key of ["title", "date", "description", "category"] as const) {
    if (!data[key]) throw new Error(`content/blog/${file}: missing "${key}" in frontmatter`);
  }
  // gray-matter parses unquoted dates into Date objects.
  const date =
    data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date).slice(0, 10);
  const body = content.trim();
  const words = body.split(/\s+/).length;
  // Posts were published under the old company name. The file keeps the
  // author as published; readers see the current name.
  const author = !data.author || data.author === site.legacyName ? site.name : String(data.author);
  const post: Post = {
    slug,
    href: `/blog/${slug}`,
    title: String(data.title),
    date,
    dateLabel: formatDate(date),
    author,
    description: String(data.description),
    category: String(data.category),
    readingMinutes: Number(data.readingMinutes) || Math.max(1, Math.ceil(words / 200)),
    heroImage: data.heroImage ? String(data.heroImage) : undefined,
    heroAlt: data.heroAlt ? String(data.heroAlt) : "",
    service: services.includes(data.service) ? data.service : "bookkeeping",
    content: body,
    headings: extractHeadings(body),
  };
  return { post, draft: data.draft === true };
}

const loadPosts = cache((): Post[] => {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(readPost)
    .filter((entry) => !entry.draft)
    .map((entry) => entry.post)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
});

/** Every published post, newest first. Drafts are never returned. */
export function getAllPosts(): Post[] {
  return loadPosts();
}

/** One published post, or undefined when the slug is unknown or a draft. */
export function getPost(slug: string): Post | undefined {
  return loadPosts().find((post) => post.slug === slug);
}

/** The newest posts, for teasers. */
export function getLatestPosts(count = 3): Post[] {
  return loadPosts().slice(0, count);
}

/** Categories that have at least one published post, most posts first. */
export function getCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of loadPosts()) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/**
 * Posts to read next: same category first, then posts that point at the same
 * service, then the newest of the rest.
 */
export function getRelated(slug: string, count = 3): Post[] {
  const posts = loadPosts();
  const current = posts.find((post) => post.slug === slug);
  const others = posts.filter((post) => post.slug !== slug);
  if (!current) return others.slice(0, count);
  const score = (post: Post) =>
    (post.category === current.category ? 2 : 0) + (post.service === current.service ? 1 : 0);
  return others
    .map((post, index) => ({ post, index }))
    .sort((a, b) => score(b.post) - score(a.post) || a.index - b.index)
    .slice(0, count)
    .map(({ post }) => post);
}

/** Drop the body before handing a post to a Client Component or a card. */
export function toSummary(post: Post): PostSummary {
  const summary: Partial<Post> = { ...post };
  delete summary.content;
  delete summary.headings;
  return summary as PostSummary;
}
