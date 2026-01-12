import EventImg from "@/assets/events/event.png";
import HansaProfile from "@/assets/testimonials/hansa.png";
import NisalProfile from "@/assets/testimonials/nisal.png";
import AkshikaProfile from "@/assets/testimonials/akshika.png";
import Project1Image from "@/assets/projects/project1.png";
import Project2Image from "@/assets/projects/project2.png";
import Project3Image from "@/assets/projects/project3.png";
import Blog1Image from "@/assets/blogs/blog1.png";
import Blog2Image from "@/assets/blogs/blog2.png";
import type {
  UpcomingEventItemProps,
  TestimonialProps,
  BlogItemProps,
  ProjectItemProps,
  TimelineItemProps,
} from "../type";

// upcoming event imgs
import ai_challenge_img from "@/assets/events/ai-challenge.png";
import com_talk_img from "@/assets/events/com_talk.jpg";

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

export const testimonialsData: TestimonialProps[] = [
  {
    profile: {
      imgSrc: HansaProfile,
      imgAlt: "Hansa Perera",
      name: "Hansa Perera",
      title: "Data and AI Technopreneur",
    },
    message:
      "Being a part of AI-Driven Sri Lanka's events has been nothing short of inspiring. It's clear that AI-Driven Sri Lanka is creating a platform for meaningful conversations and learning.",
  },
  {
    profile: {
      imgSrc: NisalProfile,
      imgAlt: "Nisal Mihiranga",
      name: "Nisal Mihiranga",
      title: "AI & Data Science Architect at Zone24x7",
    },
    message:
      "AI-Driven  Sri Lanka's  commitment  to fostering a vibrant AI community is truly commendable. The events go beyond just knowledge transfer; simply everyone feels inspired.",
  },
  {
    profile: {
      imgSrc: AkshikaProfile,
      imgAlt: "Dr. Akshika Wijesundara",
      name: "Dr. Akshika Wijesundara",
      title: "King’s College, London",
    },
    message:
      "This initiative is commendable, fostering knowledge and skills in AI for the Sri Lanka talent pool. Thanks to the organizers for ensuring a seamless and timely experience for all participants.",
  },
];

export const blogsData: BlogItemProps[] = [
  {
    title: "AI Meets Quantum Computing: A New Era of Acceleration",
    caption: " ",
    image: Blog1Image,
    link: "/blogs/ai-meets-quantum-computing",
    content: [
      "Quantum computing is no longer just theoretical; it's starting to complement AI by solving problems classical computers can’t. From drug discovery to advanced encryption, this fusion is unlocking possibilities once thought impossible. While still in early stages, AI + Quantum could redefine how fast and deep machines can think.",
    ],
  },
  {
    title: "Defending with Data: AI in Cybersecurity",
    caption: " ",
    image: Blog2Image,
    link: "/blogs/defending-with-data",
    content: [
      "As cyber threats become more sophisticated, AI-driven defense systems are stepping in. These systems detect anomalies, predict breaches, and even autonomously respond to attacks. In 2025, more organizations are trusting AI to guard their digital assets, and students are learning to build the defenses of tomorrow.",
    ],
  },
];

export const projectsData: ProjectItemProps[] = [
  {
    title: "Sri Lanka AI Challenge 2025 (SLAIC 2025)",
    description: [
      "Sri Lanka AI Challenge was a key initiative under IEEE Challenge Sphere SL, designed to provide a structured pathway for participants to gain hands-on experience and strengthen their skills in AI technologies through a series of workshops and a competitive hackathon.",
    ],
    image: Project1Image,
    data: undefined,
  },
  {
    title: "AI Com Talk 2025",
    description: [
      "The AI-Driven SL Community Talk Series was a flagship initiative by AI Driven SL, organized together with IEEE Student Branches from leading Sri Lankan universities to promote AI knowledge sharing and practical learning. ",
    ],
    image: Project2Image,
    data: undefined,
  },
  {
    title: "AI Boot Camp 2024",
    description: [
      "As a cornerstone event of the YPSL Summit 2024, the Sri Lanka AI Forum convened a panel of industry pioneers for an expert discussion on leveraging Generative AI to enhance work and learning efficiency. Moderated by Heminda Jayaweera, the forum featured a distinguished lineup of innovators from leading tech companies including Nagarro, 99x, PickMe, Zone 24x7, IFS, Microsoft, and Sysco Labs SL. ",
    ],
    image: Project3Image,
    data: undefined,
  },
  {
    title: "AI Boot Camp 2023",
    description: [
      "The bootcamp spanned two months, during which our AI vision partner conducted a series of sessions and facilitated the practical implementation of a mini-project focused on AutoGPT. Ultimately, we obtained case studies from the partnered companies and evaluated the implemented solutions based on specific criteria. The top three teams were selected and awarded prizes.",
    ],
    image: Project3Image,
    data: undefined,
  },
  {
    title: "Episode 7 of the Explorer Series ",
    description: [
      "Intelligent Engineering on Generative AI - Episode 7 of the Explorer Series: Intelligent Engineering on Generative AI - Organised by Gapstars in collaboration with AI Driven SL, this session showcased a strong commitment to fostering innovation and excellence in AI. Held at Hatch, the event featured insightful talks, engaging discussions, and collaborative networking, making it a resounding success.",
    ],
    image: Project3Image,
    data: undefined,
  },
];

export const landingTimelineData: TimelineItemProps[] = [
  {
    events: [
      "Finalist Announcement (SLAIC 2025)",
      "Com. Talk: “The Role of AI in Cybersecurity",
    ],
    month: "July",
  },
  {
    events: [
      "AI Challenge 2025 – Final Hackathon & Pitch",
      "Com. Talk: “Healthcare Meets AI: From Diagnosis to Robotics”",
    ],
    month: "August",
  },
  {
    events: ["Com.Talk: “Ethical AI – Mitigating Bias in Models”"],
    month: "Sepetember",
  },
  {
    events: [
      "AI Agent Mastery: “𝗗𝗲𝘀𝗶𝗴𝗻𝗶𝗻𝗴 𝘁𝗵𝗲 𝗔𝗜 𝗔𝗴𝗲𝗻𝘁: 𝗙𝗿𝗼𝗺 𝗣𝗿𝗼𝗯𝗹𝗲𝗺 𝘁𝗼 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲”",
    ],
    month: "October",
  },
  {
    events: ["Com.Talk: “Ethical AI – Mitigating Bias in Models”"],
    month: "November",
  },
  {
    events: ["AI Challenge Awards Ceremony", "AI Forum"],
    month: "December",
  },
];
