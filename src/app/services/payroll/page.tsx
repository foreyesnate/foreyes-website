import type { Metadata } from "next";
import { payroll } from "@/content/services/payroll";
import { SupportPayRun } from "@/components/graphics/SupportPayRun";
import { SupportingServicePage } from "@/components/pages/services/SupportingServicePage";

export const metadata: Metadata = {
  title: payroll.meta.title,
  description: payroll.meta.description,
  alternates: { canonical: payroll.path },
};

export default function PayrollPage() {
  return <SupportingServicePage content={payroll} graphic={<SupportPayRun />} />;
}
