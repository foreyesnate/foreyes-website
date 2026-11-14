import { getLatestPosts, toSummary } from "@/lib/blog";
import { TextLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { blogCopy } from "./content";
import { PostCard } from "./PostCard";

/**
 * "Smart Reads for ODs": the three newest posts and a link to the blog.
 * A Server Component with no required props, so any page can drop it in:
 *
 *   import { BlogTeaser } from "@/components/pages/blog/BlogTeaser";
 *   <BlogTeaser />            // on a stone background
 *   <BlogTeaser tone="white" />
 */
export function BlogTeaser({
  tone = "stone",
  id = "blog-teaser-title",
  eyebrow = "From the blog",
  title = blogCopy.title,
  lede = blogCopy.lede,
  count = 3,
  spacing = "default",
}: {
  tone?: "stone" | "white";
  /** id of the heading; change it if the teaser appears twice on a page. */
  id?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
  count?: number;
  spacing?: "tight" | "default";
}) {
  const posts = getLatestPosts(count).map(toSummary);
  if (!posts.length) return null;
  return (
    <Section tone={tone} aria-labelledby={id} spacing={spacing}>
      <Container size="wide">
        <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <SectionHeading id={id} eyebrow={eyebrow} title={title} lede={lede} />
          <TextLink href={blogCopy.indexHref} className="mb-1.5">
            Read Our Blog
          </TextLink>
        </Reveal>
        <Stagger as="ul" className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            // Two tablet columns leave an odd last card alone on its row.
            const alone = posts.length % 2 === 1 && index === posts.length - 1;
            return (
              <StaggerItem as="li" key={post.slug} className={alone ? "md:max-lg:col-span-2" : undefined}>
                <PostCard post={post} surface={tone === "stone" ? "white" : "stone"} wideOnTablet={alone} />
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
