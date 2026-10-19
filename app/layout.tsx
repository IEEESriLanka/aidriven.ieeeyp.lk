import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import LenisWrapper from "@/components/LenisWrapper";
import { ConditionalHeader, ConditionalFooter } from "@/components/ConditionalElements";
import { ElementalEnd, FZY } from "@/fonts";
import BackgroundWrapper from "@/components/common/BgWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500"],
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "An initiative of IEEE Young Professionals Sri Lanka, connecting the country's students, graduates and industry through national AI events, challenges and workshops since 2020.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aidriven.ieeeyp.lk"),
  title: {
    default: "AI Driven Sri Lanka | IEEE Young Professionals Sri Lanka",
    template: "%s | AI Driven Sri Lanka",
  },
  description: siteDescription,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "AI Driven Sri Lanka",
    title: "AI Driven Sri Lanka",
    description: siteDescription,
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
        className={`${geistSans.variable} ${geistMono.variable} ${ElementalEnd.variable} ${FZY.variable} ${poppins.variable} relative antialiased`}
        suppressHydrationWarning
      >
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
