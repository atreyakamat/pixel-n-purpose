import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import WebVitals from "@/components/WebVitals";
import StructuredData from "@/components/StructuredData";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

// Primary sans-serif for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Editorial serif for headlines
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Monospace for labels
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const minipax = localFont({
  src: "../public/fonts/Minipax-Medium-BF64ab72727a6bb.ttf",
  variable: "--font-minipax",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel 'N' Purpose — Brand Identity & Digital Experience Studio",
  description: "We partner with founders and leaders to build brand identities that communicate clarity, command trust, and stand the test of time.",
  metadataBase: new URL("https://pixelnpurpose.com"),
  keywords: ["brand identity", "visual systems", "web design", "packaging design", "personal branding", "luxury brands", "creative agency"],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${minipax.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Critical performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#faf9f7" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/Minipax-Medium-BF64ab72727a6bb.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Favicon and icons */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Security headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="bg-background-light text-gray-900 dark:bg-background-dark dark:text-gray-100 antialiased font-sans">
        <div className="noise-bg" />
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <noscript>
          <div style={{padding: '20px', textAlign: 'center', backgroundColor: '#faf9f7', color: '#1a1a1a'}}>
            This website requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <WebVitals />
      </body>
    </html>
  );
}
