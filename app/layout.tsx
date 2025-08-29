import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  description: "Boutique social and ad partner for luxury houses. Quiet ideas. Measurable impact.",
  metadataBase: new URL("https://pixelnpurpose.com"),
  openGraph: {
    title: "Pixel & Purpose — Social strategy for brands with presence",
    description: "Boutique social and ad partner for luxury houses. Quiet ideas. Measurable impact.",
    url: "https://pixelnpurpose.com",
    siteName: "Pixel & Purpose",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel & Purpose — Social strategy for brands with presence",
    description: "Boutique social and ad partner for luxury houses. Quiet ideas. Measurable impact.",
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/Minipax-Medium-BF64ab72727a6bb.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/hero-poster.jpg" as="image" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Viewport meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
