import type { HeroStatProps } from "../type";

export * from "./upcoming-events";
export * from "./testimonials";
export * from "./blogs";
export * from "./previous-projects";
export * from "./timeline";

export const heroStats: HeroStatProps[] = [
  { value: 2000, suffix: "+", label: "Participants" },
  { value: 15, suffix: "+", label: "AI Events" },
  { value: 15, suffix: "+", label: "Universities" },
  { value: 20, suffix: "+", label: "Industry Partners" },
];
