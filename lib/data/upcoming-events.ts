import ai_challenge_2026_img from "@/assets/events/aidsl.jpg";
import inside_ai_img from "@/assets/events/explorerSeries.png";
import ai_summit_img from "@/assets/ai-challenge.png";
import type { UpcomingEventItemProps } from "../type";

export const upcomingEventsData: UpcomingEventItemProps[] = [
  {
    title: "AI Summit 2026",
    description: [
      "The AI Summit 2026 is the flagship national event of AI Driven Sri Lanka, bringing together top global and local AI experts, innovators, and policymakers for a high-impact one-day forum focused on advancing Sri Lanka's AI landscape.",
      "Featuring global keynote sessions, panel discussions, an innovation showcase, and exclusive networking — the Summit is Sri Lanka's premier platform for cross-sector AI collaboration between academia, industry, startups, and government.",
    ],
    highlights: [
      "Global keynote sessions",
      "Panel discussions & AI Forum",
      "Innovation showcase — 10 startup stalls",
      "Fellowship gathering for partners",
      "200+ participants",
      "6+ sessions",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    link: "/events/ai-summit",
    linkALT: "Learn More",
    img: {
      src: ai_summit_img,
      alt: "AI Summit 2026",
    },
  },
  {
    title: "Inside AI 2026",
    description: [
      "Inside AI is a structured industry engagement initiative conducted throughout the year, designed to provide participants with direct exposure to real-world AI applications within leading organizations in Sri Lanka. Each session is conducted in collaboration with tech companies, where participants gain firsthand insight into how AI is built, deployed, and applied in practice.",
      "The series delivers industry-led technical sessions, hands-on workshops, and real AI knowledge sharing — enabling participants to experience what AI looks like inside actual working environments, while giving companies the opportunity to educate, inspire, and engage with future AI talent.",
    ],
    highlights: [
      "Industry-led technical sessions",
      "Real-world AI challenges",
      "Hands-on workshops & case studies",
      "Direct interaction with professionals",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    link: undefined,
    img: {
      src: inside_ai_img,
      alt: "Inside AI 2026",
    },
  },
  {
    title: "AI Challenge 2026",
    description: [
      "AI Challenge 2026 is a national-level AI innovation program designed to develop practical, measurable, real-world AI solutions. Unlike ordinary hackathons, this challenge follows a structured, multi-phase model with mentorship, adversarial testing, refinement cycles, and a physical final round — focused on building industry-ready skills through real-world problem solving and team-based innovation.",
      "This is Sri Lanka's most comprehensive and impact-focused AI competition, bridging academia, industry, and innovation. Featuring a 3-week online and physical hybrid format, the finals are showcased at the AI Driven Sri Lanka Summit 2026.",
    ],
    highlights: [
      "Problem identification to final pitching",
      "Team collaboration & mentorship",
      "Prototype development & testing",
      "Real-world challenges with industry focus",
      "Hands-on AI development",
      "Final National Showcase",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    link: undefined,
    img: {
      src: ai_challenge_2026_img,
      alt: "AI Challenge 2026",
    },
  },
];
