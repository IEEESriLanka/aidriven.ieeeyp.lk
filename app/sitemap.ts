import type { MetadataRoute } from "next";
import { blogsData, pastEventsData } from "@/lib/data";
import { SITE_URL } from "@/lib/constant";

const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/our-team", priority: 0.9 },
  { path: "/events", priority: 0.9 },
  { path: "/events/ai-challenge", priority: 0.8 },
  { path: "/events/inside-ai", priority: 0.8 },
  { path: "/events/community-talk", priority: 0.7 },
  { path: "/events/past-events", priority: 0.7 },
  { path: "/about-us", priority: 0.7 },
  { path: "/blogs", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map(({ path, priority }) => ({ url: `${SITE_URL}${path}`, lastModified, priority })),
    ...pastEventsData.flatMap(({ photosLink }) =>
      photosLink ? [{ url: `${SITE_URL}${photosLink}`, lastModified, priority: 0.6 }] : [],
    ),
    ...blogsData.map((blog) => ({ url: `${SITE_URL}${blog.link}`, lastModified, priority: 0.5 })),
  ];
}
