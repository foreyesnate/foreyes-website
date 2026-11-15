import type { Metadata } from "next";
import { practiceConsulting } from "@/content/services/practice-consulting";
import { SupportBenchmark } from "@/components/graphics/SupportBenchmark";
import { SupportingServicePage } from "@/components/pages/services/SupportingServicePage";

export const metadata: Metadata = {
  title: practiceConsulting.meta.title,
  description: practiceConsulting.meta.description,
  alternates: { canonical: practiceConsulting.path },
};

export default function PracticeConsultingPage() {
  return <SupportingServicePage content={practiceConsulting} graphic={<SupportBenchmark />} />;
}
