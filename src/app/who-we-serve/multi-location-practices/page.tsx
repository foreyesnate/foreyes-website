import type { Metadata } from "next";
import { multiLocation } from "@/content/audiences";
import { AudiencePage } from "@/components/pages/audiences/AudiencePage";

export const metadata: Metadata = {
  title: multiLocation.meta.title,
  description: multiLocation.meta.description,
  alternates: { canonical: multiLocation.path },
};

export default function MultiLocationPage() {
  return <AudiencePage content={multiLocation} />;
}
