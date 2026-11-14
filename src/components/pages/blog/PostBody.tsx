import Link from "next/link";
import { isValidElement, type ReactNode } from "react";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { createHeadingIds, type Post } from "@/lib/blog";
import { cn } from "@/lib/cn";
import { ServiceCard } from "./ServiceCard";

/** Plain text of whatever React rendered inside a heading. */
function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

/**
 * Split the article in two at an H2 a little past half way, so the "talk to
 * us" card can sit between sections. Short posts are not split; the card
 * then follows the article.
 */
function splitForCard(markdown: string): [string, string | null] {
  const lines = markdown.split("\n");
  const starts: { line: number; offset: number }[] = [];
  let fenced = false;
  let offset = 0;
  lines.forEach((line, index) => {
    if (/^(```|~~~)/.test(line)) fenced = !fenced;
    if (!fenced && /^##\s/.test(line)) starts.push({ line: index, offset });
    offset += line.length + 1;
  });
  // Never before the third section, never in front of the last one.
  const candidates = starts.slice(2, -1);
  if (!candidates.length) return [markdown, null];
  const target = offset * 0.55;
  const pick = candidates.reduce((best, c) =>
    Math.abs(c.offset - target) < Math.abs(best.offset - target) ? c : best,
  );
  return [lines.slice(0, pick.line).join("\n"), lines.slice(pick.line).join("\n")];
}

function components(nextId: (text: string) => string): Components {
  return {
    h2: ({ children }) => <h2 id={nextId(textOf(children))}>{children}</h2>,
    a: ({ href = "", children }) => {
      // Internal links go through the router; everything else leaves the site.
      if (href.startsWith("/") || href.startsWith("#")) {
        return <Link href={href}>{children}</Link>;
      }
      const web = /^https?:\/\//.test(href);
      return (
        <a href={href} {...(web ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
          {web ? <span className="sr-only"> (opens in a new tab)</span> : null}
        </a>
      );
    },
    p: ({ children, node }) => {
      // "**Key Takeaway:** …" paragraphs are pulled out as a callout.
      const first = node?.children[0];
      const lead =
        first?.type === "element" && first.tagName === "strong" && first.children[0]?.type === "text"
          ? first.children[0].value
          : "";
      if (/^key takeaway/i.test(lead)) {
        return (
          <p className="rounded-[1.25rem] border-l-4 border-teal bg-teal-50 px-5 py-4 text-[1.0625rem] leading-[1.6] text-ink-700 sm:px-6 [&>strong:first-child]:mb-1 [&>strong:first-child]:block [&>strong:first-child]:font-display [&>strong:first-child]:text-[0.8125rem] [&>strong:first-child]:font-semibold [&>strong:first-child]:uppercase [&>strong:first-child]:tracking-[0.12em] [&>strong:first-child]:text-teal-800">
            {children}
          </p>
        );
      }
      return <p>{children}</p>;
    },
    table: ({ children }) => (
      // Wide tables scroll inside their own frame instead of the page.
      <div
        role="region"
        aria-label="Table"
        tabIndex={0}
        className="overflow-x-auto rounded-[1.25rem] bg-white shadow-soft ring-1 ring-stone-300 [&_tbody_tr:last-child>td]:border-b-0 [&_td:last-child]:font-semibold [&_td:last-child]:text-navy [&_td]:align-top [&_th]:align-bottom max-sm:[&_td]:px-3 max-sm:[&_th]:px-3 max-sm:text-[0.9375rem]"
      >
        <table>{children}</table>
      </div>
    ),
  };
}

const prose = "prose-foreyes [&>h2:first-child]:mt-0 [&>h2]:text-balance";

/**
 * The article itself: Markdown rendered into the site's long-form styles,
 * with the service card set between two sections.
 */
export function PostBody({ post, className }: { post: Post; className?: string }) {
  const [before, after] = splitForCard(post.content);
  // One id generator for both halves, walking the H2s in the same order the
  // table of contents did.
  const map = components(createHeadingIds());
  return (
    <div className={cn("min-w-0", className)}>
      <div className={prose}>
        <Markdown remarkPlugins={[remarkGfm]} components={map}>
          {before}
        </Markdown>
      </div>
      <ServiceCard service={post.service} className="my-12 sm:my-14" />
      {after ? (
        <div className={prose}>
          <Markdown remarkPlugins={[remarkGfm]} components={map}>
            {after}
          </Markdown>
        </div>
      ) : null}
    </div>
  );
}
