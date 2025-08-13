import InstaLogo from "@/assets/icons/instapng.png";
import FBLogo from "@/assets/icons/fb.png";
import LinkedinLogo from "@/assets/icons/linkedin.png";
import WhatsappLogo from "@/assets/icons/whatsapp.png";

import EventImg from "@/assets/events/event.png";

import type { UpcomingEventItemProps } from "./type";

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
