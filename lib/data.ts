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

// blog images. import correct images!!!!
import Blog1Image from "@/assets/blogs/blog1.png";
import Blog2Image from "@/assets/blogs/blog2.png";

//  blogs data
export const blogsData: BlogItemProps[] = [
  {
    title: "AI Meets Quantum Computing: A New Era of Acceleration",
    caption: " ",
    image: Blog1Image,
    link: "/blogs/ai-meets-quantum-computing",
    content: [
      "Quantum computing is no longer just theoretical; it's starting to complement AI by solving problems classical computers can’t. From drug discovery to advanced encryption, this fusion is unlocking possibilities once thought impossible. While still in early stages, AI + Quantum could redefine how fast and deep machines can think.",
      // can add more paragrams
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
    events: ["SLAIC 2025 Finalist Announcement"],
    month: "July 9",
  },
  {
    events: ["Final Challenge Prep, Mentoring, Code Reviews"],
    month: "July–August",
  },
  {
    events: ["Cost-Efficient Agentic Implementation Workshop"],
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
    title: "Master AI in Action",
  },
  {
    icon: factoryIcon,
    title: "Hands-On Experience with Cutting-Edge Tools",
  },
  {
    icon: ribbonIcon,
    title: "Build and Deploy Your Own AI Agent",
  },
  {
    icon: linkedinIconEvent,
    title: "Exclusive Access to Resources and Mentorship",
  },
  {
    icon: awardIcon,
    title: "Collaborate with Top Talent",
  },
  { icon: trophyIcon, title: "Network with Industry Experts" },
];

// community talk page data
export const communityFeatsData: ContactDetailProps[] = [
  {
    icon: brainCircuitIcon,
    title: "Learn how AI agents work and apply them to real-world problems",
  },
  {
    icon: factoryIcon,
    title: "Get hands-on experience with OpenAI APIs, LangChain, and more",
  },
  {
    icon: ribbonIcon,
    title: "Build and deploy your own functional AI agent",
  },
  {
    icon: linkedinIconEvent,
    title: "Access exclusive starter code, tools, and expert guidance",
  },
  {
    icon: awardIcon,
    title: "Collaborate with top university peers across Sri Lanka",
  },
  {
    icon: trophyIcon,
    title: "Interact directly with experienced AI professionals",
  },
];

//events faq data
export const eventsFaqData: eventsFAQDataProps[] = [
  {
    value: "item-1",
    title: "What is the Sri Lanka AI Challenge (SLAIC)?",
    content:
      "SLAIC is a national-level AI innovation program that includes technical workshops, challenge rounds, and mentorship, designed to help participants build real-world AI solutions.",
  },
  {
    value: "item-2",
    title: "Who can take part in SLAIC?",
    content:
      "SLAIC is open to university students and recent A/L graduates across Sri Lanka with an interest in artificial intelligence and emerging technologies.",
  },
  {
    value: "item-3",
    title: "What topics are covered in the SLAIC workshops?",
    content:
      "The workshops focus on cutting-edge topics like Generative AI, Prompt Engineering, Retrieval-Augmented Generation (RAG), and AI Agent Implementation and emerging AI technologies.",
  },
  {
    value: "item-4",
    title: "Is this a team-based competition?",
    content:
      "Yes. Participants form teams to work on AI-driven solutions during the challenge rounds.",
  },
  {
    value: "item-5",
    title: "Will I receive a certificate for participating?",
    content:
      "All participants who actively engage in the program and complete the required milestones will receive a certificate of participation.",
  },
  {
    value: "item-6",
    title: "Are there any prizes or awards?",
    content:
      "Yes, top-performing teams are recognised during the final pitch and award ceremony with prizes, opportunities, and certificates of excellence.",
  },
  {
    value: "item-7",
    title: "How do I pre-order the delegate package?",
    content:
      "Registered delegates will receive a link via email and community channels to pre-order their exclusive SLAIC merchandise and materials.",
  },
];

// community talk page faq data
export const communityFaqData: eventsFAQDataProps[] = [
  {
    value: "item-1",
    title: "What is the AI-Driven SL Community Talk Series?",
    content:
      "The AI-Driven SL Community Talk Series is a flagship initiative by AI Driven Sri Lanka, organized in collaboration with IEEE Student Branches to promote AI knowledge sharing, peer-driven learning, and real-world problem-solving through a series of virtual and physical sessions.",
  },
  {
    value: "item-2",
    title: "Who can participate in the Community Talk Series?",
    content:
      "Participation is open to university students with a keen interest in AI. Each hosting university can nominate up to 50 students, with a total of 200 students selected across all sessions to ensure quality interaction and hands-on learning.",
  },
  {
    value: "item-3",
    title: "What topics will be covered during the sessions?",
    content:
      "The series will walk participants through the full lifecycle of building AI agents covering agent design, tool integration, prompt engineering, coding with OpenAI API and LangChain, and final testing and evaluation using real-world use cases.",
  },
  {
    value: "item-4",
    title: "How is this different from other AI programs?",
    content:
      "This program is highly practical and community-driven. Each session includes live demos, hands-on coding, and access to resources like starter code and repositories. It also promotes university collaboration and knowledge sharing, making it a unique peer-learning opportunity.",
  },
  {
    value: "item-5",
    title: "What are the benefits of joining the Community Talk Series?",
    content:
      "You’ll gain hands-on experience with real-world AI tools, learn from industry experts, access practical resources, and collaborate with peers from leading universities.",
  },
  {
    value: "item-6",
    title: "How can my university get involved?",
    content:
      "The series is hosted in partnership with selected IEEE Student Branches. If your university is not currently a host, reach out to AI Driven SL to explore future collaboration opportunities.",
  },
  {
    value: "item-7",
    title: "Are the sessions conducted online or in-person?",
    content:
      "The main talk sessions are conducted online to ensure wider accessibility. However, certain sessions may be held in person depending on the hosting university and schedule.",
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

// challenge events editions data -> old one
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

// new previous event data -> /ai-challenge page
export const NewChallengeEventsEditionsData: eventsEditionDataProps[] = [
  {
    title: "Sri Lanka AI Challenge 2024",
    desc: [
      "Sri Lanka AI Challenge 2024, held as part of ChallengeSphere SL in collaboration with IEEE Sri Lanka Section, brought together aspiring innovators from across 18 universities. With a focus on Conditional UI and AI Agents, the program delivered a complete learning experience through expert-led technical workshops, interactive mentoring, and a nationwide innovation challenge.",
      "Participants had the unique opportunity to explore real-world AI use cases, gaining practical exposure to tools like LangChain and OpenAI APIs. Through hands-on sessions and industry insights, they designed and implemented AI-driven solutions while collaborating with professionals from leading tech firms. The challenge concluded with a curated industry visit to IFS, allowing finalists to connect with top-tier AI experts, engage in discussions, and receive recognition for their efforts.",
    ],
    data: {
      participateCount: 300,
      edition: "1st Edition",
      date: "October 2024",
    },
  },
];

// community talk editions data
export const communityTalkEditionsData: eventsEditionDataProps[] = [
  {
    title: "Community Talk Series 2024",
    desc: [
      "AI Community Talk Series 2024 by AI Driven Sri Lanka was a dynamic and inspiring knowledge-sharing initiative that brought together aspiring AI enthusiasts, professionals, and academics through a series of engaging virtual sessions. Spanning across multiple months and hosted in collaboration with leading IEEE Student Branches and industry partners, the 2024 edition explored real-world AI applications, from foundational concepts to advanced practices. Participants gained invaluable insights from expert-led sessions including LLM Career Strategies, Automated Testing with CI for LLMs, Face Tracking under Challenging Illumination, and NLP Fundamentals.",
      'Special highlights included the "Empowering Tomorrow: Future-Ready AI & Innovation" session with iVedha Inc., and a deep-dive into Large Language Models (LLMs). With real-world case studies, hands-on learning, and opportunities to engage with top minds in AI, the 2024 Community Talk Series continued to fulfill its mission of bridging the gap between theory and application equipping participants to lead the future of AI in Sri Lanka and beyond.',
    ],
    data: {
      participateCount: 150,
      edition: "2nd Edition",
      date: "oct 2024",
    },
  },
  {
    title: "AI Summit",
    desc: "The AI Summit is a premier event showcasing AI talks, networking opportunities and company product showcase driving innovation and collaboration",
    data: {
      participateCount: 200,
      edition: "1st Edition",
      date: "Dec 2024",
    },
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
