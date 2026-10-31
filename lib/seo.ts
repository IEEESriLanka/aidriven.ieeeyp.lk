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

const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 160;

// Search results cut off long descriptions, so end at a sentence or word instead
function clampDescription(text: string): string {
  if (text.length <= MAX_DESCRIPTION_LENGTH) return text;
  const clipped = text.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  const sentenceEnd = clipped.lastIndexOf(". ");
  if (sentenceEnd > 80) return clipped.slice(0, sentenceEnd + 1);
  return `${clipped.slice(0, clipped.lastIndexOf(" "))}…`;
}

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
  // The site name is dropped from long titles so the page's own words are not cut off
  const fullTitle = `${title} | ${SITE_NAME}`;
  const pageTitle = fullTitle.length > MAX_TITLE_LENGTH ? title : fullTitle;
  const pageDescription = clampDescription(description);

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: [...keywords, ...SITE_KEYWORDS],
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
      url: path,
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
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

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// Shows the page's place in the site as a trail in search results
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
