import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/blog";

// Every public page. Blog posts are added from content/blog (drafts excluded).
const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services/bookkeeping", priority: 0.9 },
  { path: "/services/insurance-billing", priority: 0.9 },
  { path: "/services", priority: 0.8 },
  { path: "/services/accounts-payable", priority: 0.7 },
  { path: "/services/payroll", priority: 0.7 },
  { path: "/services/practice-consulting", priority: 0.7 },
  { path: "/who-we-serve", priority: 0.7 },
  { path: "/who-we-serve/optometrists", priority: 0.7 },
  { path: "/who-we-serve/startups", priority: 0.7 },
  { path: "/who-we-serve/multi-location-practices", priority: 0.7 },
  { path: "/pricing-calculator", priority: 0.8 },
  { path: "/about-us", priority: 0.6 },
  { path: "/about-us/our-team", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/resources", priority: 0.5 },
  { path: "/resources/blog", priority: 0.6 },
  { path: "/resources/faq", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${site.url}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...getAllPosts().map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
