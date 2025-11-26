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
  OldTimelineItemProps,
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
    title: "Sri Lanka AI Forum",
    description: [
      "As a cornerstone event of the YPSL Summit 2024, the Sri Lanka AI Forum convened a panel of industry pioneers for an expert discussion on leveraging Generative AI to enhance work and learning efficiency.",
      "The AI Forum serves as a premier platform for industry leaders, academic experts, and technology innovators to converge and explore the dynamic landscape of Artificial Intelligence. This forward-thinking event facilitates a powerful dialogue on the latest trends, from machine learning and generative models to ethical considerations and real-world applications.",
    ],
    date: undefined,
    time: undefined,
    venue: undefined,
    link: undefined,
    img: {
      src: EventImg,
      alt: "IEEE YP Tech Talk",
    },
  },
];

//  testimonials data
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

//  blogs data
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

//  projects data -> landing page
export const projectsData: ProjectItemProps[] = [
  {
    title: "Sri Lanka AI Challenge 2025 (SLAIC 2025)",
    description: [
      "Sri Lanka AI Challenge was a key initiative under IEEE Challenge Sphere SL, designed to provide a structured pathway for participants to gain hands-on experience and strengthen their skills in AI technologies through a series of workshops and a competitive hackathon.",
      // "SLAIC 2025 marked the next phase of Sri Lanka’s leading AI initiative, offering an immersive learning and innovation platform for undergraduates and tech enthusiasts. The challenge focused on developing real-world AI Agent–based solutions, supported by practical workshops, expert mentoring sessions, and a final pitch that encouraged creativity and problem-solving.",
    ],
    image: Project1Image,
    data: undefined,
  },
  {
    title: "AI Com Talk 2025",
    description: [
      "The AI-Driven SL Community Talk Series was a flagship initiative by AI Driven SL, organized together with IEEE Student Branches from leading Sri Lankan universities to promote AI knowledge sharing and practical learning. ",
      // "The major series “AI Agent Mastery” ran for 3 months and included virtual sessions focused on designing, developing, and deploying AI agents using real-world use cases. This series collaborated with 3 university student branches, including",
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

// timeline data -> old structure :(
export const timelineData: OldTimelineItemProps[] = [
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
    month: "Jan 09",
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

// timeline data -> landing page
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

// timeline data -> event page
export const eventPageTimelineData: TimelineItemProps[] = [
  {
    events: [" SLAIC 2025 Workshops (Gen AI, RAGs, Agent Building)"],
    month: "May–June",
  },
  {
    events: [
      "SLAIC 2025 Finalist Announcement",
    ],
    month: "July 9",
  },
  {
    events: ["Final Challenge Prep, Mentoring, Code Reviews"],
    month: "July–August",
  },
  {
    events: [
      "Cost-Efficient Agentic Implementation Workshop",
    ],
    month: "July 19",
  },
  {
    events: ["Final Pitch & Hackathon"],
    month: "July 26",
  },
  {
    events: ["Awards + Highlight Reel"],
    month: "Sep",
  },
  {
    events: ["Monthly Com.Talk sessions "],
    month: "July–Sep",
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
    href: "/our-team",
    label: "Our Team",
  },
  {
    type: "link" as const,
    href: "/about-us",
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
    profileImg: memberPhoto,
    name: "Nisal Mihiranga",
    position: "Program Lead",
    socials: [
      { icon: instaIcon, url: "" },
      { icon: linkedinIcon, url: "" },
      { icon: whatsappIcon, url: "" },
    ],
  },
  {
    profileImg: memberPhoto,
    name: "Nisal Mihiranga",
    position: "Program Lead",
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
      "Master AI in Action",
  },
  {
    icon: factoryIcon,
    title: "Hands-On Experience with Cutting-Edge Tools",
  },
  {
    icon: ribbonIcon,
    title: "Build and Deploy Your Own AI Agent",
  },
  { icon: linkedinIconEvent, title: "Exclusive Access to Resources and Mentorship" },
  {
    icon: awardIcon,
    title:
      "Collaborate with Top Talent",
  },
  { icon: trophyIcon, title: "Network with Industry Experts" },
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

// team photos
import athsaraPhoto from "@/assets/team/athsara.png";
import bosiluPhoto from "@/assets/team/bosilu.png";
import himanPhoto from "@/assets/team/himan.png";
import kaveenPhoto from "@/assets/team/kaveen.png";
import malindaPhoto from "@/assets/team/malinda.png";
import manuraPhoto from "@/assets/team/manura.png";
import nabeelahPhoto from "@/assets/team/nabeelah.png";
import neeliaPhoto from "@/assets/team/neelia.png";
import nipuniHPhoto from "@/assets/team/nipuni_h.png";
import nipuniKPhoto from "@/assets/team/nipuni_k.png";
import sasankaPhoto from "@/assets/team/sasanka.png";
import shadurceyaPhoto from "@/assets/team/shadurceya.png";
import sisilaPhoto from "@/assets/team/sisila.png";
import subajananiPhoto from "@/assets/team/subajanani.png";
import yasiruPhoto from "@/assets/team/yasiru.png";

// export team photos as a single object so they are available and to avoid unused-import errors
export const teamPhotos = {
  athsaraPhoto,
  bosiluPhoto,
  himanPhoto,
  kaveenPhoto,
  malindaPhoto,
  manuraPhoto,
  nabeelahPhoto,
  neeliaPhoto,
  nipuniHPhoto,
  nipuniKPhoto,
  sasankaPhoto,
  shadurceyaPhoto,
  sisilaPhoto,
  subajananiPhoto,
  yasiruPhoto,
};

export const TeamDetails = {
  main: {
    members: [
      {
        profileImg: teamPhotos.sasankaPhoto,
        name: "Sasanka Premaratne",
        position: "Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.nipuniHPhoto,
        name: "Nipuni Herath",
        position: "Secretary",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
    ],
  },
  secondary: {
    members: [
      {
        profileImg: teamPhotos.malindaPhoto,
        name: "Malinda Kawshalya",
        position: "Vice-Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.nipuniKPhoto,
        name: "Nipuni Kulathunga",
        position: "Vice-Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.nabeelahPhoto,
        name: "Nabeelah Faumi",
        position: "Vice-Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
    ],
  },
  third: {
    members: [
      {
        profileImg: teamPhotos.himanPhoto,
        name: "Himan Withana",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.bosiluPhoto,
        name: "Bosilu Nisalitha",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.neeliaPhoto,
        name: "Neelia Makuloluwa",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.yasiruPhoto,
        name: "Yasiru Dharmathilaka",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.sisilaPhoto,
        name: "Sisila Dhevasiri",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.subajananiPhoto,
        name: "Subajanani Swaminathan",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.athsaraPhoto,
        name: "Athsara Fernando",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.shadurceyaPhoto,
        name: "Shadurceya Vasanthakumar",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.kaveenPhoto,
        name: "Kaveen Amarasekara",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.manuraPhoto,
        name: "Manura Anuhas",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
    ],
  },
  adhoc: [],
};
