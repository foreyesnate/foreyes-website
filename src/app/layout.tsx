import type { Metadata, Viewport } from "next";
import "./globals.css";
import { figtree, parkinsans } from "@/lib/fonts";
import { site } from "@/content/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Providers } from "@/components/motion/Providers";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Bookkeeping & Insurance Billing for Optometrists`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

// Tells search engines who runs the site and how to reach them.
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.legacyName,
  url: site.url,
  description: site.description,
  telephone: "+1-844-505-3937",
  email: site.email,
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: "Wade Weisz", honorificSuffix: "OD" },
  areaServed: { "@type": "Country", name: "United States" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-17:00",
};

export const viewport: Viewport = {
  themeColor: "#110f2b",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${parkinsans.variable} ${figtree.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        {/* Without JavaScript nothing would ever "come into focus", so show it. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
