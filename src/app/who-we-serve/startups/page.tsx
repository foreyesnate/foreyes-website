import type { Metadata } from "next";
import { startups } from "@/content/audiences";
import { AudiencePage } from "@/components/pages/audiences/AudiencePage";

export const metadata: Metadata = {
  title: startups.meta.title,
  description: startups.meta.description,
  alternates: { canonical: startups.path },
};

export default function StartupsPage() {
  return <AudiencePage content={startups} />;
}
