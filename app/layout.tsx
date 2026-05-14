import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SITE } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Volunteers collaborating with HopeRise Foundation programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE.name,
  url: SITE.url,
  slogan: SITE.tagline,
  email: SITE.email,
  telephone: SITE.telephone,
  description: SITE.description,
  sameAs: [
    "https://www.linkedin.com",
    "https://twitter.com",
    "https://www.instagram.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} min-h-[100svh] font-sans antialiased`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ScrollProgress />
        <Navbar />
        <div className="min-h-[60svh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
