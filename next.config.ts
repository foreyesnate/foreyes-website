import type { NextConfig } from "next";
import path from "path";

// Every URL that exists on foreyessolutions.com today keeps working.
// Pages for services that were renamed or folded together point at their new
// home; the tax pages land on the part of the Bookkeeping page that explains
// what a client's CPA receives.
const legacyRedirects = [
  ["/services/billing-services", "/services/insurance-billing"],
  ["/services/accounts-receivable-management", "/services/insurance-billing"],
  ["/services/accounting", "/services/bookkeeping"],
  ["/services/accounting/accounts-payable", "/services/accounts-payable"],
  [
    "/services/practice-consulting/financial-consulting",
    "/services/practice-consulting",
  ],
  ["/services/tax-services", "/services/bookkeeping#tax-ready"],
  ["/services/tax-services/:path*", "/services/bookkeeping#tax-ready"],
  ["/blog/quarterly-taxes-optometrists", "/resources/blog"],
  ["/blog/privacy-policy", "/privacy-policy"],
  ["/blog", "/resources/blog"],
  ["/book-a-call", "/contact#book"],
  ["/about", "/about-us"],
] as const;

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
