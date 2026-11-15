import type { Metadata } from "next";
import { teamPage } from "@/content/about";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamContacts, TeamExperience, TeamLeads, TeamOwners } from "@/components/pages/about/TeamSections";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the ForEyes Books & Billing team: an OD founder, a former practice manager, and the people who close your books and work your insurance claims.",
  alternates: { canonical: "/about-us/our-team" },
};

export default function TeamPage() {
  return (
    <>
      {/* Bios open with JavaScript. Without it, show them all. */}
      <noscript>
        <style>{`[data-bio-panel]{height:auto!important;opacity:1!important;visibility:visible!important;filter:none!important}`}</style>
      </noscript>
      <PageHero
        tone="navy"
        eyebrow={teamPage.eyebrow}
        title={teamPage.title}
        highlight={teamPage.highlight}
        lede={teamPage.lede}
        crumbs={[{ label: "About", href: "/about-us" }, { label: "Our Team" }]}
        visual={<TeamExperience />}
      />
      <TeamOwners />
      <TeamLeads />
      <TeamContacts />
      <CtaBand
        title="Put this team on your books and billing."
        body="Tell us about your practice. We’ll tell you what your books and billing could look like, and what it would cost."
      />
    </>
  );
}
