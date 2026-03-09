import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import WebVitals from "@/components/WebVitals";
import StructuredData from "@/components/StructuredData";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const minipax = localFont({
  src: "../public/fonts/Minipax-Medium-BF64ab72727a6bb.ttf",
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel 'N' Purpose — Global Creative Studio",
  description: "A global creative studio crafting Websites, Portfolios, Packaging, and Photography that build lasting meaning. Design with clarity, structure, and intent.",
  metadataBase: new URL("https://pixelnpurpose.com"),
  keywords: ["website design", "portfolio design", "packaging design", "photography", "creative studio", "brand identity", "global design studio"],
  authors: [{ name: "Pixel 'N' Purpose" }],
  creator: "Pixel 'N' Purpose",
  publisher: "Pixel 'N' Purpose",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Pixel 'N' Purpose — Global Creative Studio",
    description: "Websites. Portfolios. Packaging. Photography. Design that means something.",
    url: "https://pixelnpurpose.com",
    siteName: "Pixel 'N' Purpose",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel 'N' Purpose — Global Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel 'N' Purpose — Global Creative Studio",
    description: "Websites. Portfolios. Packaging. Photography. Design that means something.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${minipax.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#080808" />
        <meta name="color-scheme" content="dark" />

        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/Minipax-Medium-BF64ab72727a6bb.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/PNP-white.png" as="image" />

        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/manifest.json" />

        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="bg-canvas text-ink antialiased font-sans">
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#080808', color: '#F5F5F3' }}>
            This website requires JavaScript to function properly.
          </div>
        </noscript>
        {children}
        <WebVitals />
      </body>
    </html>
  );
}
