import type { Metadata } from "next";
import { optometrists } from "@/content/audiences";
import { AudiencePage } from "@/components/pages/audiences/AudiencePage";

export const metadata: Metadata = {
  title: optometrists.meta.title,
  description: optometrists.meta.description,
  alternates: { canonical: optometrists.path },
};

export default function OptometristsPage() {
  return <AudiencePage content={optometrists} />;
}
