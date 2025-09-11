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

//events images
import brainCircuitIcon from "@/assets/icons/Brain Circuit.png";
import factoryIcon from "@/assets/icons/factory.png";
import ribbonIcon from "@/assets/icons/Person Ribbon.png";
import awardIcon from "@/assets/icons/Award 2.png";
import trophyIcon from "@/assets/icons/Trophy.png";
import globeIcon from "@/assets/icons/Globe Person.png";
import linkedinIconEvent from "@/assets/icons/Vector.png";

import type {
  TestimonialProps,
  UpcomingEventItemProps,
  BlogItemProps,
  ProjectItemProps,
  TimelineItemProps,
  ValProps,
  ContactDetailProps,
  MemberDetailProps,
  NavLinkItem,
  NavDropdownItem,
  eventsEditionDataProps,
  eventsFAQDataProps,
} from "./type";

// header
import { HeaderDropDown } from "@/components/Header/HeaderDropDown";

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

// timeline data
export const timelineData: TimelineItemProps[] = [
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Jan",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Feb",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Mar",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Apr",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "May",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Jun",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Jul",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Aug",
  },
  {
    title: "The AI Community Talk",
    caption: "A STEP BEYOND THE HYPE: A JOURNEY THROUGH MODERN AI",
    speaker: {
      name: "MR. SACHITH GUNASEKARA",
      bio: "Machine Learning Engineer ~Surge Global",
    },
    data: {
      date: "30th April 2025",
      time: "6.30 P.M.",
      venue: "Via ZOOM",
    },
    month: "Sep",
  },
];

type NavItem = NavLinkItem | NavDropdownItem;

export const navItems: NavItem[] = [
  {
    type: "link" as const,
    href: "/",
    label: "Home",
  },
  {
    type: "dropdown" as const,
    component: HeaderDropDown,
  },
  {
    type: "link" as const,
    href: "/ourTeam",
    label: "Our Team",
  },
  {
    type: "link" as const,
    href: "/aboutUs",
    label: "About Us",
  },
];

// about us
import handshakeImg from "@/assets/aboutUs/Handshake.png";
import personLight from "@/assets/aboutUs/Person Lightning.png";
import tipImg from "@/assets/aboutUs/tips_and_updates.png";
import awardImg from "@/assets/aboutUs/Award 2.png";
import phoneIcon from "@/assets/aboutUs/phone.png";
import locationIcon from "@/assets/aboutUs/place.png";
import commentIcon from "@/assets/aboutUs/chat.png";
import memberPhoto from "@/assets/aboutUs/mem1.png";
import instaIcon from "@/assets/icons/fb.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import whatsappIcon from "@/assets/icons/whatsapp.png";

export const coreValuesData: ValProps[] = [
  {
    img: handshakeImg,
    title: "collaboration",
    text: "Connect with AI enthusiasts and industry professionals to amplify your learning experience.",
  },
  {
    img: tipImg,
    title: "innovation",
    text: "Embrace a culture that fuels innovative thinking and explores cutting-edge AI technologies.",
  },
  {
    img: awardImg,
    title: "excellence",
    text: "Experience AI education and training at its finest, where excellence is not just a goal but a standard.",
  },
  {
    img: personLight,
    title: "empowerment",
    text: "Gain the skills and knowledge needed to thrive in the dynamic landscape of the AI industry.",
  },
];

export const contactDetailsData: ContactDetailProps[] = [
  { icon: phoneIcon, title: "phone number", val: "+94717190257" },
  { icon: locationIcon, title: "location", val: "Colombo, Sri Lanka" },
  {
    icon: commentIcon,
    title: "drop us a line",
    val: "aidrivensrilanka@gmail.com",
  },
];

export const memberDetailsData: MemberDetailProps[] = [
  {
    icon: memberPhoto,
    title: "Nisal Mihiranga",
    val: "Program Lead",
    socials: [
      { icon: instaIcon, url: "" },
      { icon: linkedinIcon, url: "" },
      { icon: whatsappIcon, url: "" },
    ],
  },
  {
    icon: memberPhoto,
    title: "Nisal Mihiranga",
    val: "Program Lead",
    socials: [
      { icon: instaIcon, url: "" },
      { icon: linkedinIcon, url: "" },
      { icon: whatsappIcon, url: "" },
    ],
  },
];

//events talk page data
export const eventsFeatsData: ContactDetailProps[] = [
  {
    icon: brainCircuitIcon,
    title:
      "Learn how to leverage LLM and Prompting to solve real-world problems.",
  },
  {
    icon: factoryIcon,
    title: "Opportunity to experience an engaging industrial visit.",
  },
  {
    icon: ribbonIcon,
    title: "Gain hands on exposure to training and deployment.",
  },
  { icon: linkedinIconEvent, title: "Enhance your LinkedIn profile." },
  {
    icon: awardIcon,
    title:
      "Upon completion receive a valuable certificate acknowledged by giants in IT industry.",
  },
  { icon: trophyIcon, title: "Exciting cash prizes to the winners." },
  {
    icon: globeIcon,
    title: "Connect with industry experts in Artificial Intelligence .",
  },
];

//events faq data

export const eventsFaqData: eventsFAQDataProps[] = [
  {
    value: "item-1",
    title: "What is the AI Bootcamp 2023?",
    content:
      "The AI Bootcamp 2023 is an immersive learning program designed to enhance AI skills and creativity, with virtual sessions and a hands-on hackathon.",
  },
  {
    value: "item-2",
    title: "What is AI-Driven Sri Lanka?",
    content:
      "AI-Driven Sri Lanka is an initiative focused on providing accessible AI education and fostering a community of AI enthusiasts in Sri Lanka.",
  },
  {
    value: "item-3",
    title: "What topics are covered in the virtual sessions?",
    content:
      "The virtual sessions cover OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG), Fine-tuning LLMs, Training and Deployment strategies, and frontend Implementation of OpenAI Models in Practice.",
  },
  {
    value: "item-4",
    title: "How are the top teams selected for the final presentation?",
    content:
      "Top teams are selected based on their performance during the hackathon and their innovative solutions to real-world case studies presented during the bootcamp.",
  },
  {
    value: "item-5",
    title: "Who can participate in the AI Bootcamp?",
    content:
      "The AI Bootcamp is open to aspiring AI enthusiasts, students, professionals, and anyone interested in upskilling in the field of Artificial Intelligence.",
  },
  {
    value: "item-6",
    title: "What are the benefits of participation?",
    content:
      "Participants gain hands-on experience with AI technologies, access to valuable resources and mentorship, networking opportunities with industry experts, certificates acknowledged by IT industry giants, and the chance to win exciting cash prizes.",
  },
];

//events editions data

import img1 from "@/assets/events/image 1.png";
import img2 from "@/assets/events/image 2.png";
import img3 from "@/assets/events/Team Member Section 1.png";
import img4 from "@/assets/events/image.png";
import img5 from "@/assets/events/image 25.png";
import img6 from "@/assets/events/image 26.png";
import img7 from "@/assets/events/image 27.png";

export const eventsEditionsData: eventsEditionDataProps[] = [
  {
    title: "Community Talk Series 2023",
    desc: "AI Bootcamp 2023 by AI DRIVEN SRI LANKA is an immersive and cutting-edge learning experience designed to propel participants to the forefront of AI innovation.Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four  covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, virtual sessions Training and Deployment strategies and frontend Implementation and Implementing OpenAI Models in Practice. The climax is a thrilling physical hackathon, challenging participants to apply their knowledge to craft innovative solutions to a real-world case study. With a minimal fee for subsequent sessions, the bootcamp ensures access to invaluable resources, mentorship, and the opportunity to showcase solutions",
    data: {
      participateCount: 100,
      edition: "1st Edition",
      date: "oct 2023",
    },
    imgs: [img1, img3, img2],
  },
  {
    title: "Community Talk Series 2024",
    desc: "AI Bootcamp 2023 by AI DRIVEN SRI LANKA is an immersive and cutting-edge learning experience designed to propel participants to the forefront of AI innovation. Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four  covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, virtual sessions Training and Deployment strategies and frontend Implementation and Implementing OpenAI Models in Practice. The climax is a thrilling physical hackathon, challenging participants to apply their knowledge to craft innovative solutions to a real-world case study. With a minimal fee for subsequent sessions, the bootcamp ensures access to invaluable resources, mentorship, and the opportunity to showcase solutions",
    data: {
      participateCount: 150,
      edition: "2nd Edition",
      date: "oct 2024",
    },
    imgs: [img4, img5, img6, img7],
  },
];

export const challengeEventsEditionsData: eventsEditionDataProps[] = [
  {
    title: "AI Bootcamp 2024",
    desc: "AI Bootcamp 2023 by AI DRIVEN SRI LANKA is an immersive and cutting-edge learning experience designed to propel participants to the forefront of AI innovation.Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four  covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, virtual sessions Training and Deployment strategies and frontend Implementation and Implementing OpenAI Models in Practice. The climax is a thrilling physical hackathon, challenging participants to apply their knowledge to craft innovative solutions to a real-world case study. With a minimal fee for subsequent sessions, the bootcamp ensures access to invaluable resources, mentorship, and the opportunity to showcase solutions",
    data: {
      participateCount: 350,
      edition: "3rd Edition",
      date: "NOV 2024",
    },
    imgs: [img1, img3, img2],
  },
  {
    title: "AI Bootcamp 2023",
    desc: "AI Bootcamp 2023 by AI DRIVEN SRI LANKA is an immersive and cutting-edge learning experience designed to propel participants to the forefront of AI innovation. Aspiring AI enthusiasts are invited to register for this exceptional journey, delving into four  covering OpenAI APIs/Prompt engineering, Retrieval Augmented Generation (RAG) and Fine-tuning LLMs, virtual sessions Training and Deployment strategies and frontend Implementation and Implementing OpenAI Models in Practice. The climax is a thrilling physical hackathon, challenging participants to apply their knowledge to craft innovative solutions to a real-world case study. With a minimal fee for subsequent sessions, the bootcamp ensures access to invaluable resources, mentorship, and the opportunity to showcase solutions",
    data: {
      participateCount: 100,
      edition: "2nd Edition",
      date: "oct 2023",
    },
    imgs: [img4, img5, img6, img7],
  },
];
