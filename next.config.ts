import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    minimumCacheTTL: 2678400,
  },
  // Repeat visitors load these ready-made files from their browser cache
  async headers() {
    return ["/event_photos/:path*", "/feedback_videos/:path*", "/partnerLogos/:path*"].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }],
    }));
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "embla-carousel-react",
      "embla-carousel-autoplay",
      "@radix-ui/react-dropdown-menu",
    ],
  },
};

export default nextConfig;
