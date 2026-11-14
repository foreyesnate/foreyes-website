import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { getAllPosts, getPost, getRelated, toSummary } from "@/lib/blog";
import { TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { blogCopy } from "@/components/pages/blog/content";
import { PostBody } from "@/components/pages/blog/PostBody";
import { PostCard, PostCover } from "@/components/pages/blog/PostCard";
import { PostToc } from "@/components/pages/blog/PostToc";
import { ReadingProgress } from "@/components/pages/blog/ReadingProgress";

type Props = { params: Promise<{ slug: string }> };

// Every post is prerendered at build time. A slug that is not a published
// post (including drafts) is a 404, never rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: post.href,
      publishedTime: `${post.date}T00:00:00.000Z`,
      authors: [post.author],
      section: post.category,
      ...(post.heroImage ? { images: [{ url: post.heroImage, alt: post.heroAlt }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelated(post.slug, 3).map(toSummary);
  const url = `${site.url}${post.href}`;
  const organization = { "@type": "Organization", name: site.name, url: site.url };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        inLanguage: "en-US",
        mainEntityOfPage: url,
        author: organization,
        publisher: organization,
        ...(post.heroImage ? { image: [`${site.url}${post.heroImage}`] } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Home", item: site.url },
          { name: "Resources", item: `${site.url}/resources` },
          { name: "Blog", item: `${site.url}${blogCopy.indexHref}` },
          { name: post.title, item: url },
        ].map((crumb, index) => ({ "@type": "ListItem", position: index + 1, ...crumb })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        lede={post.description}
        crumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Blog", href: blogCopy.indexHref },
        ]}
        primaryCta={null}
        visual={
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 h-40 w-40 rounded-[2rem] bg-teal-200/70 sm:-bottom-7 sm:-left-7"
            />
            <PostCover
              post={post}
              describe
              preload
              zoom={false}
              sizes="(min-width: 1024px) 42rem, 100vw"
              className="aspect-[16/11] rounded-[2.5rem] shadow-float"
            />
            <p className="absolute -bottom-4 right-6 flex items-center gap-2.5 rounded-full bg-white py-2.5 pl-3 pr-5 font-display text-[0.9375rem] font-semibold shadow-lift sm:right-10">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-yellow">
                <Icon name="clock" size={17} />
              </span>
              {post.readingMinutes} min read
            </p>
          </div>
        }
      >
        <Reveal delay={0.65} blur={false} y={10}>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.9375rem] text-ink-500">
            <p className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-white">
                <Icon name="eye" size={18} />
              </span>
              <span>
                By <span className="font-semibold text-ink">{post.author}</span>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="calendar" size={17} className="text-teal-700" />
              <span className="sr-only">Published </span>
              <time dateTime={post.date}>{post.dateLabel}</time>
            </p>
          </div>
        </Reveal>
      </PageHero>

      <Section tone="white" spacing="tight" aria-label="Article">
        <Container>
          <ReadingProgress className="grid gap-x-14 lg:grid-cols-[minmax(0,1fr)_16rem] xl:grid-cols-[minmax(0,46rem)_18rem] xl:justify-between">
            <article className="min-w-0">
              {post.headings.length > 1 ? (
                <details className="group mb-10 rounded-[1.25rem] bg-stone lg:hidden">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[1.25rem] px-5 font-display font-semibold [&::-webkit-details-marker]:hidden">
                    In this article
                    <Icon
                      name="chevronDown"
                      size={20}
                      className="transition-transform duration-300 ease-(--ease-focus) group-open:rotate-180"
                    />
                  </summary>
                  <nav aria-label="In this article">
                    <ol className="px-5 pb-4">
                      {post.headings.map((heading) => (
                        <li key={heading.id} className="border-t border-stone-300">
                          <a href={`#${heading.id}`} className="block py-3 text-[1rem] leading-snug text-ink-700">
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </details>
              ) : null}

              <PostBody post={post} />

              <footer className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-stone-300 pt-8">
                <p className="text-[0.9375rem] text-ink-500">
                  Published <time dateTime={post.date}>{post.dateLabel}</time> by {post.author}
                </p>
                <TextLink href={blogCopy.indexHref}>All Posts</TextLink>
              </footer>
            </article>

            <aside className="hidden lg:block">
              <PostToc headings={post.headings} className="sticky top-32" />
            </aside>
          </ReadingProgress>
        </Container>
      </Section>

      {related.length ? (
        <Section tone="stone" aria-labelledby="related-posts-title">
          <Container size="wide">
            <Reveal className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
              <SectionHeading id="related-posts-title" size="heading" eyebrow="Keep reading" title="More Smart Reads for ODs" />
              <TextLink href={blogCopy.indexHref} className="mb-1">
                Read Our Blog
              </TextLink>
            </Reveal>
            <Stagger as="ul" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => {
                const alone = related.length % 2 === 1 && index === related.length - 1;
                return (
                  <StaggerItem as="li" key={item.slug} className={alone ? "md:max-lg:col-span-2" : undefined}>
                    <PostCard post={item} wideOnTablet={alone} />
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
