import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/lib/blog";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { categoryStyle } from "./content";

// Cards and covers shared by the blog index, related posts, the homepage
// teaser and the Resources hub. No hooks in here, so the same components work
// in Server Components and inside the client-side category filter.

const coverTone = {
  navy: { surface: "bg-navy text-white", dots: "text-white/15", ring: "border-white/25", tile: "bg-yellow text-ink" },
  teal: { surface: "bg-teal text-ink", dots: "text-ink/15", ring: "border-ink/20", tile: "bg-ink text-white" },
  ink: { surface: "bg-ink text-white", dots: "text-white/12", ring: "border-white/20", tile: "bg-yellow text-ink" },
  yellow: { surface: "bg-yellow-100 text-ink", dots: "text-ink/12", ring: "border-ink/15", tile: "bg-ink text-white" },
} as const;

/**
 * A post's picture. Uses the hero photo when the post has one; otherwise
 * draws a cover from the category: brand colour, dotted chart texture, a lens
 * and the category icon, so a post without a photo still looks finished.
 */
export function PostCover({
  post,
  className,
  sizes = "(min-width: 1280px) 28rem, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw",
  preload = false,
  describe = false,
  zoom = true,
}: {
  post: PostSummary;
  className?: string;
  sizes?: string;
  preload?: boolean;
  /** Give the photo its alt text. Off in cards, where the title sits beside it. */
  describe?: boolean;
  /** Ease the picture closer when the surrounding `group` is hovered. */
  zoom?: boolean;
}) {
  if (post.heroImage) {
    return (
      <div className={cn("relative overflow-hidden bg-navy-100", className)}>
        <Image
          src={post.heroImage}
          alt={describe ? post.heroAlt : ""}
          fill
          sizes={sizes}
          preload={preload}
          className={cn(
            "object-cover",
            zoom && "transition-transform duration-[900ms] ease-(--ease-focus) group-hover:scale-[1.045]",
          )}
        />
      </div>
    );
  }

  const style = categoryStyle(post.category);
  const tone = coverTone[style.cover];
  return (
    <div aria-hidden="true" className={cn("relative isolate overflow-hidden", tone.surface, className)}>
      <div
        className={cn(
          "bg-dots absolute inset-0 [mask-image:radial-gradient(120%_120%_at_0%_0%,black,transparent_70%)]",
          tone.dots,
        )}
      />
      {/* The lens: concentric rims, set off-centre like a trial lens on a chart. */}
      <div
        className={cn(
          "absolute -right-[12%] top-1/2 aspect-square h-[150%] -translate-y-1/2 rounded-full border-2 transition-transform duration-[900ms] ease-(--ease-focus)",
          tone.ring,
          zoom && "group-hover:scale-105",
        )}
      >
        <div className={cn("absolute inset-[11%] rounded-full border-2", tone.ring)} />
        <div className="absolute inset-[24%] rounded-full bg-white/10 backdrop-blur-[1px]" />
      </div>
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <span className={cn("grid h-14 w-14 place-items-center rounded-2xl shadow-soft", tone.tile)}>
          <Icon name={style.icon} size={28} />
        </span>
        <p className="max-w-[16ch] font-display text-[clamp(1.125rem,0.9rem+1vw,1.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {post.title}
        </p>
      </div>
    </div>
  );
}

export function CategoryPill({
  category,
  tone = "light",
  className,
}: {
  category: string;
  tone?: "light" | "dark" | "overlay";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-display text-[0.75rem] font-semibold uppercase leading-none tracking-[0.08em]",
        tone === "light" && "bg-teal-100 text-teal-800",
        tone === "dark" && "bg-white/12 text-white",
        tone === "overlay" && "bg-white/95 text-ink shadow-soft backdrop-blur",
        className,
      )}
    >
      <Icon name={categoryStyle(category).icon} size={14} strokeWidth={2.2} />
      {category}
    </span>
  );
}

export function PostMeta({ post, className }: { post: PostSummary; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.9375rem]", className)}>
      <time dateTime={post.date}>{post.dateLabel}</time>
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-50" />
      <span>{post.readingMinutes} min read</span>
    </p>
  );
}

/**
 * The standard post card. The whole card is the link (the title's link is
 * stretched over it), so there is one tab stop and one name per card.
 */
export function PostCard({
  post,
  as: Heading = "h3",
  surface = "white",
  wideOnTablet = false,
  className,
}: {
  post: PostSummary;
  as?: "h2" | "h3";
  /** `white` on stone sections, `stone` on white sections. */
  surface?: "white" | "stone";
  /**
   * For the odd card out in a two-column tablet grid: when it spans the row,
   * lay it out sideways (picture left, text right) instead of very tall.
   */
  wideOnTablet?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-[transform,box-shadow,background-color] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 hover:shadow-lift has-[a:focus-visible]:-translate-y-1.5 has-[a:focus-visible]:shadow-lift",
        surface === "white" ? "bg-white shadow-soft" : "bg-stone hover:bg-white",
        wideOnTablet && "md:max-lg:flex-row",
        className,
      )}
    >
      <div className={cn("relative", wideOnTablet && "md:max-lg:w-[46%] md:max-lg:shrink-0")}>
        <PostCover post={post} className={cn("aspect-[16/10]", wideOnTablet && "md:max-lg:aspect-auto md:max-lg:h-full")} />
        <CategoryPill category={post.category} tone="overlay" className="absolute left-4 top-4" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Heading className="text-subheading text-balance">
          <Link
            href={post.href}
            className="rounded-sm after:absolute after:inset-0 after:rounded-[1.75rem] focus-visible:outline-none focus-visible:after:outline-[3px] focus-visible:after:outline-offset-[-3px] focus-visible:after:outline-ink focus-visible:after:outline-solid"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 line-clamp-3 text-ink-500">{post.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <PostMeta post={post} className="text-ink-500" />
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-50 text-navy transition-[background-color,color,transform] duration-300 ease-(--ease-focus) group-hover:bg-yellow group-hover:text-ink"
          >
            <Icon name="arrowRight" size={18} className="transition-transform duration-300 ease-(--ease-focus) group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}

/** The wide card for the newest post at the top of the index. */
export function FeaturedPost({
  post,
  label = "Latest post",
  as: Heading = "h2",
}: {
  post: PostSummary;
  label?: string;
  as?: "h2" | "h3";
}) {
  return (
    <article className="group relative grid overflow-hidden rounded-[2.5rem] bg-ink text-white shadow-lift transition-[transform,box-shadow] duration-500 ease-(--ease-focus) hover:-translate-y-1 hover:shadow-float has-[a:focus-visible]:-translate-y-1 lg:grid-cols-[1.12fr_1fr]">
      <PostCover
        post={post}
        className="aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]"
        sizes="(min-width: 1024px) 44rem, 100vw"
        preload
      />
      <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <div
          aria-hidden="true"
          className="bg-dots pointer-events-none absolute right-0 top-0 h-48 w-56 text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
        />
        <div className="relative flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow px-3 py-1.5 font-display text-[0.75rem] font-semibold uppercase leading-none tracking-[0.08em] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            {label}
          </span>
          <CategoryPill category={post.category} tone="dark" />
        </div>
        <Heading className="text-heading relative mt-6 text-balance">
          <Link
            href={post.href}
            className="rounded-sm after:absolute after:inset-0 after:rounded-[2.5rem] focus-visible:outline-none focus-visible:after:outline-[3px] focus-visible:after:outline-offset-[-3px] focus-visible:after:outline-yellow focus-visible:after:outline-solid"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="relative mt-5 max-w-xl text-[1.0625rem] text-white/75">{post.description}</p>
        <div className="relative mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <PostMeta post={post} className="text-white/65" />
          <span
            aria-hidden="true"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-yellow px-6 font-display text-[0.975rem] font-semibold text-ink transition-colors duration-300 group-hover:bg-yellow-200"
          >
            Read the Post
            <Icon name="arrowRight" size={18} className="transition-transform duration-300 ease-(--ease-focus) group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
