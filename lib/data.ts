// social icons
import InstaLogo from "@/assets/icons/instapng.png";
import FBLogo from "@/assets/icons/fb.png";
import LinkedinLogo from "@/assets/icons/linkedin.png";
import WhatsappLogo from "@/assets/icons/whatsapp.png";

import EventImg from "@/assets/events/event.png";

// testimonial images
import HansaProfile from "@/assets/testimonials/hansa.png";
import NisalProfile from "@/assets/testimonials/nisal.png";
import AkshikaProfile from "@/assets/testimonials/akshika.png";

// blog images
import Blog1Image from "@/assets/blogs/blog1.png";
import Blog2Image from "@/assets/blogs/blog2.png";

// project images
import Project1Image from "@/assets/projects/project1.png";
import Project2Image from "@/assets/projects/project2.png";
import Project3Image from "@/assets/projects/project3.png";

import type {
  TestimonialProps,
  UpcomingEventItemProps,
  BlogItemProps,
  ProjectItemProps,
} from "./type";

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ieeeyp.lk/",
    icon: InstaLogo,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ieeeyp.lk",
    icon: FBLogo,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ieeeyp-lk/",
    icon: LinkedinLogo,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/94777777777", // Replace with actual WhatsApp number
    icon: WhatsappLogo,
  },
];

// upcoming events data

export const upcomingEventsData: UpcomingEventItemProps[] = [
  {
    title: "April Community Talk",
    description:
      "Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four virtual sessions covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, Training and Deployment...",
    date: "30th April 2025",
    time: "6.30 P.M.",
    venue: "Via ZOOM",
    link: "https://example.com/event1",
    img: {
      src: EventImg,
      alt: "IEEE YP Tech Talk",
    },
  },
  {
    title: "April Community Talk",
    description:
      "Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four virtual sessions covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, Training and Deployment...",
    date: "30th April 2025",
    time: "6.30 P.M.",
    venue: "Via ZOOM",
    link: "https://example.com/event1",
    img: {
      src: EventImg,
      alt: "IEEE YP Tech Talk",
    },
  },
];

export const testimonialsData: TestimonialProps[] = [
  {
    profile: {
      imgSrc: HansaProfile,
      imgAlt: "Hansa Perera",
      name: "Hansa Perera",
      title: "Data and AI Technopreneur",
    },
    message:
      "Being a part of AI-Driven Sri Lanka's events has been nothing short of inspiring. It's clear that AI-Driven Sri Lanka is creating a platform for meaningful conversations and learning.",
  },
  {
    profile: {
      imgSrc: NisalProfile,
      imgAlt: "Nisal Mihiranga",
      name: "Nisal Mihiranga",
      title: "AI & Data Science Architect at Zone24x7",
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
    title: "What is AI, and how do programmes like ChatGPT and DeepSeek work?",
    caption: "By Pasindu Dissanayake",
    image: Blog1Image,
    link: "/blogs/ai-ethics",
  },
  {
    title:
      "AI integration in financial services: a systematic review of trends and regulatory challenges",
    caption: "By Vinoli De Silva",
    image: Blog2Image,
    link: "/blogs/future-of-work",
  },
  {
    title: "What is AI, and how do programmes like ChatGPT and DeepSeek work?",
    caption: "By Pasindu Dissanayake",
    image: Blog1Image,
    link: "/blogs/ai-ethics",
  },
];

export const projectsData: ProjectItemProps[] = [
  {
    title: "AI Bootcamp",
    description:
      "Focuses on educating and training individuals who seek to embark on their journey into Artificial Intelligence and for anyone interested in upskilling in the field",
    image: Project1Image,
    data: {
      participateCount: 300,
      edition: "3rd Edition ",
      date: "oct 2023",
    },
  },
  {
    title: "AI Summit",
    description:
      "The AI Summit is a premier event showcasing AI talks, networking opportunities and company product showcase driving innovation and collaboration",
    image: Project2Image,
    data: {
      participateCount: 160,
      edition: "1st Edition ",
      date: "jun 2023",
    },
  },
  {
    title: "Community Talks",
    description:
      "Focus on spreading the word of possibilities of the Machine Learning and the impact of the AI Adoption",
    image: Project3Image,
    data: {
      participateCount: 100,
      edition: "80+ EVENTS",
      date: "SINCE 2023",
    },
  },
];
