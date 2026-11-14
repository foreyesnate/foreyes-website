import type { Metadata } from "next";
import Link from "next/link";
import { flagshipServices } from "@/content/site";
import { getAllPosts, getCategories, toSummary } from "@/lib/blog";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { BlogIndex } from "@/components/pages/blog/BlogIndex";
import { blogCopy } from "@/components/pages/blog/content";
import { ReadingChart } from "@/components/pages/blog/ReadingChart";

export const metadata: Metadata = {
  title: "Blog: Smart Reads for ODs",
  description:
    "Practical articles for independent eyecare practice owners on bookkeeping, insurance billing, A/R, payroll, expense ratios, and cash flow, from ForEyes.",
  alternates: { canonical: "/resources/blog" },
};

const flagshipIcons: Record<string, IconName> = {
  "/services/bookkeeping": "ledger",
  "/services/insurance-billing": "claim",
};

const flagshipCta: Record<string, string> = {
  "/services/bookkeeping": "Get Your Books in Order",
  "/services/insurance-billing": "Stop Chasing Payments",
};

export default function BlogIndexPage() {
  const posts = getAllPosts().map(toSummary);
  const categories = getCategories();

  return (
    <>
      <PageHero
        eyebrow={blogCopy.eyebrow}
        title="Smart Reads"
        highlight="for ODs"
        lede={blogCopy.lede}
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Blog" }]}
        primaryCta={null}
        note={
          <>
            {posts.length} posts on {categories.map((c) => c.name.toLowerCase()).join(", ").replace(/, ([^,]*)$/, ", and $1")}.
          </>
        }
        visual={<ReadingChart className="mx-auto max-w-[34rem] lg:mr-0" />}
      />

      <Section tone="white" spacing="tight" aria-label="Blog posts">
        <Container size="wide">
          <BlogIndex posts={posts} categories={categories} />
        </Container>
      </Section>

      {/* An inset panel, like the closing band beneath it, so the two stack as a pair. */}
      <section aria-labelledby="blog-services-title" className="bg-stone px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy py-16 text-white sm:py-24">
          <div
            aria-hidden="true"
            className="bg-dots pointer-events-none absolute right-0 top-0 h-72 w-[28rem] text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
          />
          <Container size="wide" className="relative">
            <div className="grid items-end gap-x-14 gap-y-10 lg:grid-cols-[1fr_1.25fr]">
              <Reveal>
                <SectionHeading
                  id="blog-services-title"
                  tone="light"
                  eyebrow="Rather hand it off?"
                  title="We do this work every day."
                  lede="These posts come out of the two jobs we do for eyecare practices every month: keeping the books and working the insurance billing."
                />
              </Reveal>
              <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
                {flagshipServices.map((service) => (
                  <StaggerItem as="li" key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex h-full flex-col rounded-[1.75rem] bg-white p-7 text-ink shadow-lift transition-transform duration-500 ease-(--ease-focus) hover:-translate-y-1.5"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-yellow group-hover:text-ink">
                        <Icon name={flagshipIcons[service.href] ?? "spark"} size={24} />
                      </span>
                      <h3 className="text-subheading mt-6">{service.label}</h3>
                      <p className="mt-2 text-ink-500">{service.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 font-display font-semibold text-navy">
                        {flagshipCta[service.href] ?? "Learn More"}
                        <Icon name="arrowRight" size={18} className="transition-transform duration-300 ease-(--ease-focus) group-hover:translate-x-1.5" />
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Container>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
