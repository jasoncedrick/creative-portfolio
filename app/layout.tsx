import type { Metadata, Viewport } from "next";
import { Manrope, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/content";
import "./globals.css";

// Single source of truth for the site URL. Set NEXT_PUBLIC_SITE_URL in
// .env.local (and in Vercel) once you know your final domain. Until then it
// falls back to the value below — change this one line if your domain differs.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://creative-portfolio-ecru.vercel.app";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const body = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  keywords: [
    "short-form video editor",
    "eCommerce ad creative",
    "DTC ad editor",
    "performance ad editor",
    "video editor Philippines",
    "AI video editor",
    "short-form content creator",
    "founder personal branding editor",
    "social media manager",
    "localized ad creative",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${site.name} — Short-Form Video Creative That Drives Revenue`,
    description:
      "I produce short-form video for DTC brands and founders. €105K in attributable client profit. 300+ ads across 5 markets. Receipts on every line.",
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Short-Form Video Creative`,
    description: site.metaDescription,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Short-Form Video Creative",
    email: `mailto:${site.email}`,
    url: SITE_URL,
    sameAs: [site.linkedin, site.instagram],
    address: { "@type": "PostalAddress", addressCountry: "PH", addressLocality: "Davao" },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
