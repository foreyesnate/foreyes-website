import { audiences, flagshipServices, supportingServices, type NavLink } from "@/content/site";
import type { AudienceSlug, ServiceKey } from "@/content/audiences/types";
import type { IconName } from "@/components/ui/Icon";

const serviceIcons: Record<ServiceKey, IconName> = {
  bookkeeping: "ledger",
  "insurance-billing": "claim",
  "accounts-payable": "bill",
  payroll: "payroll",
  "practice-consulting": "compass",
};

const audienceIcons: Record<AudienceSlug, IconName> = {
  optometrists: "eye",
  startups: "spark",
  "multi-location-practices": "building",
};

/** Each audience keeps one colour across the site (home tiles, hubs, heroes). */
export const audienceTone: Record<AudienceSlug, "navy" | "ink" | "teal"> = {
  optometrists: "navy",
  startups: "ink",
  "multi-location-practices": "teal",
};

function find(list: NavLink[], href: string): NavLink {
  const match = list.find((item) => item.href === href);
  if (!match) throw new Error(`No navigation entry for ${href}. Check src/content/site.ts.`);
  return match;
}

/** Name, link and icon for a service, read from the site's navigation data. */
export function serviceInfo(key: ServiceKey) {
  const link = find([...flagshipServices, ...supportingServices], `/services/${key}`);
  return { ...link, icon: serviceIcons[key] };
}

/** Name, link, description and icon for an audience page. */
export function audienceInfo(slug: AudienceSlug) {
  const link = find(audiences, `/who-we-serve/${slug}`);
  return { ...link, icon: audienceIcons[slug], tone: audienceTone[slug] };
}
