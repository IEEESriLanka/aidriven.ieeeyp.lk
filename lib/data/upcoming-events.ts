import ai_challenge_img from "@/assets/events/AIComTalk2025.png";
import com_talk_img from "@/assets/events/com-talk-upcoming.png";
import type { UpcomingEventItemProps } from "../type";

export const upcomingEventsData: UpcomingEventItemProps[] = [
  {
    title: "Sri Lanka AI Challenge 2026 (SLAIC 2026)",
    description: [
      "Building on the success of previous editions, the Sri Lanka AI Challenge 2026 returns as a flagship initiative under IEEE Challenge Sphere SL, aimed at empowering undergraduates and tech enthusiasts with hands-on AI expertise. SLAIC 2026 offers a structured and immersive pathway into artificial intelligence through a series of practical workshops, expert-led mentoring sessions, and a high-impact competitive hackathon.",
      "The challenge focuses on developing real-world solutions that address practical problems, encouraging innovation, critical thinking, and teamwork. Participants will gain exposure to industry-relevant tools, problem-solving methodologies, and pitching skills, making SLAIC 2026 a premier platform for nurturing the next generation of AI innovators in Sri Lanka.",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    link: undefined,
    img: {
      src: ai_challenge_img,
      alt: "Sri Lanka AI Challenge 2026 (SLAIC 2026)",
    },
  },
  {
    title: "AI Com Talk 2026",
    description: [
      "AI Com Talk 2026 is an upcoming edition of the AI-Driven SL Community Talk Series, a collaborative initiative organized together with IEEE Student Branches from leading universities across Sri Lanka. The series is designed to promote AI knowledge sharing, practical learning, and community-driven innovation.",
      "Continuing its mission to bridge theory and practice, AI Com Talk 2026 will feature focused sessions on emerging AI trends, real-world use cases, and applied AI development, with strong emphasis on interactive learning and expert guidance. The series also fosters cross-campus collaboration and peer learning among students passionate about AI.",
      "For the latest updates, session announcements, and participation details, interested students are encouraged to join the official WhatsApp channel for AI Com Talk 2026 updates.",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    link: "https://whatsapp.com/channel/0029Vabpf3sFXUuYtZFnAe0V",
    linkALT: "Join Channel",
    img: {
      src: com_talk_img,
      alt: "AI Com Talk 2026",
    },
  },
];
