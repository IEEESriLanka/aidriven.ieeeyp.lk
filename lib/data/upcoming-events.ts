
import inside_ai_img from "@/assets/events/explorerSeries.webp";
import ai_summit_img from "@/assets/events/ai-summit.webp";
import SLAIC25Image from "@/assets/events/SLAIC2025.webp";
import AIComTalk25Image from "@/assets/events/AIComTalk2025.webp";
import AIForum2024Image from "@/assets/events/AIFrorum2024.webp";
import AIChallenge2026GroupPhoto from "@/assets/events/AI Challenge sri lanka 2026 group photo.jpg";
import InsideAI1Photo from "@/assets/events/Inside AI 1.0 photo.jpg";
import InsideAI2Photo from "@/assets/events/Inside AI 2.0 photo.jpg";
import InsideAI3Photo from "@/assets/events/Inside AI 3.0 photo.jpg";
import type { UpcomingEventItemProps } from "../type";

export const upcomingEventsData: UpcomingEventItemProps[] = [
  {
    title: "AI Driven Sri Lanka 2026",
    description: [
      "AI Driven Sri Lanka 2026 is the flagship national gathering shaping the conversation around Sri Lanka's AI future. The summit brings together global and local AI pioneers, industry leaders, policymakers, researchers, startups, and emerging talent to exchange ideas, showcase breakthrough innovations, and unlock meaningful collaborations. Discussions will focus on the future of AI, real-world applications, emerging technologies, and entrepreneurial opportunities to accelerate innovation and strengthen Sri Lanka's position in the global AI landscape."
    ],
    highlights: [
      "200+ Total Delegates",
      "6+ Sessions",
      "12+ AI Leaders and Global Insights",
    ],
    date: "October 2026",
    time: undefined,
    venue: undefined,
    link: "/events/aidsl-summit",
    linkALT: "Learn More",
    img: {
      src: ai_summit_img,
      alt: "AIDSL Summit 2026",
    },
  },
  {
    title: "Inside AI 2026",
    description: [
      "Inside AI is a structured industry engagement initiative conducted throughout the year, designed to provide participants with direct exposure to real-world AI applications within leading organizations in Sri Lanka. Each session is conducted in collaboration with tech companies, where participants gain firsthand insight into how AI is built, deployed, and applied in practice.",
      "The series delivers industry-led technical sessions, hands-on workshops, and real AI knowledge sharing - enabling participants to experience what AI looks like inside actual working environments, while giving companies the opportunity to educate, inspire, and engage with future AI talent.",
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
    link: "/events/inside-ai",
    linkALT: "Learn More",
    img: {
      src: inside_ai_img,
      alt: "Inside AI 2026",
    },
  },

];

export const pastEventsData: UpcomingEventItemProps[] = [
  {
    title: "Inside AI 3.0 - AI That Actually Makes Money",
    description: [
      "In collaboration with Codimite, Inside AI 3.0 tackled the business side of artificial intelligence, focusing on 'AI that actually makes money'. The session provided actionable insights on building profitable AI products, monetization strategies, and delivering tangible ROI through AI-driven business models."
    ],
    highlights: [
      "AI ROI measurement",
      "Monetization strategies",
      "Profitable AI products",
      "Industry collaboration with Codimite"
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    img: {
      src: InsideAI3Photo,
      alt: "Inside AI 3.0",
    },
  },
  {
    title: "Inside AI 2.0 - AI Agents & Automated Systems",
    description: [
      "Inside AI 2.0 partnered with Virtusa to delve deep into the world of AI agents and automated systems. Participants learned how intelligent agentic workflows and advanced automation are revolutionizing enterprise efficiency and modern software architecture."
    ],
    highlights: [
      "Agentic workflows",
      "Advanced enterprise automation",
      "Modern software architecture",
      "Industry collaboration with Virtusa"
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    img: {
      src: InsideAI2Photo,
      alt: "Inside AI 2.0",
    },
  },
  {
    title: "Inside AI 1.0 - AI Research and Innovation",
    description: [
      "Hosted in collaboration with WSO2, Inside AI 1.0 explored the frontiers of AI research and innovation. The session highlighted breakthrough methodologies and how leading tech companies translate cutting-edge AI research into scalable industry solutions."
    ],
    highlights: [
      "Breakthrough AI methodologies",
      "Translating research to solutions",
      "Scalable industry applications",
      "Industry collaboration with WSO2"
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    img: {
      src: InsideAI1Photo,
      alt: "Inside AI 1.0",
    },
  },
  {
    title: "AI Challenge 2026",
    description: [
      "AI Challenge 2026 was a national-level AI innovation program designed to develop practical, measurable, real-world AI solutions. Unlike ordinary hackathons, this challenge followed a structured, multi-phase model with mentorship, adversarial testing, refinement cycles, and a physical final round. The event successfully focused on building industry-ready skills through real-world problem-solving and team-based innovation."
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
    link: "/events/ai-challenge",
    linkALT: "Learn More",
    img: {
      src: AIChallenge2026GroupPhoto,
      alt: "AI Challenge 2026 Group Photo",
    },
  },
  {
    title: "Sri Lanka AI Challenge 2025",
    description: [
      "Sri Lanka AI Challenge was a key initiative under IEEE Challenge Sphere SL, designed to provide a structured pathway for participants to gain hands-on experience and strengthen their skills in AI technologies through a series of workshops and a competitive hackathon.",
    ],
    highlights: [
      "Structured workshop series",
      "Competitive hackathon",
      "Hands-on AI experience",
      "IEEE-backed certification",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    img: {
      src: SLAIC25Image,
      alt: "Sri Lanka AI Challenge 2025",
    },
  },
  {
    title: "AI Com Talk 2025",
    description: [
      "The AI-Driven SL Community Talk Series was a flagship initiative by AI Driven SL, organized together with IEEE Student Branches from leading Sri Lankan universities to promote AI knowledge sharing and practical learning.",
    ],
    highlights: [
      "University collaborations",
      "Industry expert sessions",
      "Knowledge sharing",
      "Practical AI learning",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    img: {
      src: AIComTalk25Image,
      alt: "AI Com Talk 2025",
    },
  },
  {
    title: "AI Boot Camp 2024",
    description: [
      "As a cornerstone event of the YPSL Summit 2024, the Sri Lanka AI Forum convened a panel of industry pioneers for an expert discussion on leveraging Generative AI to enhance work and learning efficiency. Moderated by Heminda Jayaweera, the forum featured a distinguished lineup of innovators from leading tech companies including Nagarro, 99x, PickMe, Zone 24x7, IFS, Microsoft, and Sysco Labs SL.",
    ],
    highlights: [
      "Industry panel discussion",
      "Generative AI focus",
      "Leading tech companies",
      "Expert moderation",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    img: {
      src: AIForum2024Image,
      alt: "AI Boot Camp 2024",
    },
  },
];
