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
      <body className="bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
