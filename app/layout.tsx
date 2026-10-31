import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import LenisWrapper from "@/components/LenisWrapper";
import { ConditionalHeader, ConditionalFooter } from "@/components/ConditionalElements";
import { ElementalEnd, FZY } from "@/fonts";
import BackgroundWrapper from "@/components/common/BgWrapper";
import JsonLd from "@/components/common/JsonLd";
import { SITE_URL } from "@/lib/constant";
import { SITE_KEYWORDS, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500"],
  subsets: ["latin"],
  // Only the About Us page uses this, so other pages should not download it up front
  preload: false,
})

const siteDescription =
  "An IEEE Young Professionals Sri Lanka initiative connecting students, graduates and industry through national AI events, challenges and workshops since 2020.";

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Driven Sri Lanka | IEEE Young Professionals Sri Lanka",
    template: "%s | AI Driven Sri Lanka",
  },
  description: siteDescription,
  keywords: SITE_KEYWORDS,
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "AI Driven Sri Lanka",
    title: "AI Driven Sri Lanka",
    description: siteDescription,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Driven Sri Lanka",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ElementalEnd.variable} ${FZY.variable} ${poppins.variable} relative antialiased`}
        suppressHydrationWarning
      >
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <ConditionalHeader />
        <LenisWrapper>
          <BackgroundWrapper>
            {children}
          </BackgroundWrapper>
          <ConditionalFooter />
        </LenisWrapper>
      </body>
    </html>
  );
}
