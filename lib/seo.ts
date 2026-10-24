import type { Metadata } from "next";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { EMAIL, PARENT_ORG, SITE_NAME, SITE_URL } from "./constant";
import { socialLinks } from "./data/social";

export const SITE_KEYWORDS = [
  "AI Driven Sri Lanka",
  "AIDSL",
  "IEEE Young Professionals Sri Lanka",
  "IEEE YP Sri Lanka",
  "artificial intelligence Sri Lanka",
  "AI events Sri Lanka",
  "AI community Sri Lanka",
  "AI Challenge Sri Lanka",
  "Inside AI",
];

// URL of a statically imported image, for use in meta tags
export function staticImageSrc(image: StaticImport | string): string {
  if (typeof image === "string") return image;
  return "default" in image ? image.default.src : image.src;
}

// Page metadata with the full Open Graph / Twitter set; Next.js replaces (not merges)
// the root openGraph object when a page defines its own
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  // Defaults to the site-wide card from app/opengraph-image.tsx, which a page's own openGraph would otherwise drop
  images = ["/opengraph-image"],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  images?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, ...SITE_KEYWORDS],
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "AIDSL",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: EMAIL,
  foundingDate: "2020",
  description:
    "An initiative of IEEE Young Professionals Sri Lanka connecting Sri Lanka's students, graduates and industry through national AI events, challenges and workshops.",
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  parentOrganization: { "@type": "Organization", name: PARENT_ORG },
  sameAs: socialLinks.map((link) => link.href.trim()),
};
