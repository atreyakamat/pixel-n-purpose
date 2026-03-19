import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const minipax = localFont({
  src: "../public/fonts/Minipax-Medium-BF64ab72727a6bb.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel & Purpose — Social strategy for brands with presence",
  description: "Boutique social and ad partner for luxury houses. Quiet ideas. Measurable impact. Professional brand strategy and creative solutions.",
  metadataBase: new URL("https://pixelnpurpose.com"),
  keywords: ["social media strategy", "luxury brands", "digital marketing", "brand identity", "creative agency"],
  authors: [{ name: "Pixel & Purpose" }],
  creator: "Pixel & Purpose",
  publisher: "Pixel & Purpose",
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
    title: "Pixel ’N’ Purpose | Pixpur Design House",
    description: "We don’t just brand. We build meaning. Creativity with impact, clarity, and purpose.",
    url: "https://pixelnpurpose.com",
    siteName: "Pixel ’N’ Purpose | Pixpur Design House",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel & Purpose - Social strategy for luxury brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel & Purpose — Social strategy for brands with presence",
    description: "Boutique social and ad partner for luxury houses. Quiet ideas. Measurable impact.",
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
    <html lang="en" className={`${inter.variable} ${minipax.variable}`}>
      <head>
        {/* Critical performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#F6F5F2" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/Minipax-Medium-BF64ab72727a6bb.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/PNP-white.png" as="image" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Favicon and icons */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Security headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="bg-canvas text-ink antialiased font-sans">
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <noscript>
          <div style={{padding: '20px', textAlign: 'center', backgroundColor: '#F6F5F2', color: '#0B0B0B'}}>
            This website requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>
        {children}
        <CookieConsent />
        <WebVitals />
      </body>
    </html>
  );
}
