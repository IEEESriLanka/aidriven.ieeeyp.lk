import type { Metadata } from "next";

// Internal template page: keep it out of search results
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function SummitTemplateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
