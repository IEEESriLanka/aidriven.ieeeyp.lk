import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
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
