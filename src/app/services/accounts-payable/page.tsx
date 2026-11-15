import type { Metadata } from "next";
import { accountsPayable } from "@/content/services/accounts-payable";
import { SupportBillFlow } from "@/components/graphics/SupportBillFlow";
import { SupportingServicePage } from "@/components/pages/services/SupportingServicePage";

export const metadata: Metadata = {
  title: accountsPayable.meta.title,
  description: accountsPayable.meta.description,
  alternates: { canonical: accountsPayable.path },
};

export default function AccountsPayablePage() {
  return <SupportingServicePage content={accountsPayable} graphic={<SupportBillFlow />} />;
}
