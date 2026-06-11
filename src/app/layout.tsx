import type { Metadata, Viewport } from "next";
import { EB_Garamond, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE, SEO_KEYWORDS, SOCIAL_LINKS } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import Navbar from "@/components/layout/navbar";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const ebGaramond = EB_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Sterling Experiences" }],
  creator: "Sterling Experiences",
  publisher: "Sterling Experiences",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: `${SITE.url}/sterling_experiences.jpg`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [`${SITE.url}/sterling_experiences.jpg`],
  },
  icons: {
    icon: [
      { url: "/sterling_experiences.jpg", type: "image/jpeg" },
    ],
    shortcut: "/sterling_experiences.jpg",
  },
  alternates: {
    canonical: SITE.url,
  },
  other: {
    "theme-color": SITE.themeColor,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", ebGaramond.variable, openSans.variable)} suppressHydrationWarning>
      <head>
        <link rel="me" href={SOCIAL_LINKS.facebook} />
        <link rel="me" href={SOCIAL_LINKS.instagram} />
        <link rel="me" href={SOCIAL_LINKS.linkedin} />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <StackedCircularFooter />
        <Analytics />
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
