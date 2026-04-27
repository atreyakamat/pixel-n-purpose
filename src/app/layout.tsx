import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelnpurpose.com"),
  title: {
    default: "Pixel & Purpose — Global Creative Studio",
    template: "%s | Pixel & Purpose",
  },
  description: "A global creative studio crafting Websites, Portfolios, and Packaging that build lasting meaning. Design with clarity, structure, and intent.",
  keywords: ["website design", "portfolio design", "packaging design", "creative studio", "brand identity", "global design studio"],
  authors: [{ name: "Pixel & Purpose" }],
  creator: "Pixel & Purpose",
  publisher: "Pixel & Purpose",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/pnp-manifest.png",
    shortcut: "/pnp-manifest.png",
    apple: "/pnp-manifest.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixelnpurpose.com",
    siteName: "Pixel & Purpose",
    title: "Pixel & Purpose — Global Creative Studio",
    description: "Websites. Portfolios. Packaging. Design that means something.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixel & Purpose — Global Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel & Purpose — Global Creative Studio",
    description: "Websites. Portfolios. Packaging. Design that means something.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pixel & Purpose",
              "url": "https://pixelnpurpose.com",
              "logo": "https://pixelnpurpose.com/logo.png",
              "sameAs": [
                "https://instagram.com/pixelnpurpose",
                "https://linkedin.com/company/pixelnpurpose"
              ],
              "description": "Architects of Visual Prestige. Engineering digital monopolies for global visionaries."
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-primary selection:text-white hide-cursor bg-background relative min-h-screen noise-bg`}
      >
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
