import HansaProfile from "@/assets/testimonials/hansa.png";
import NisalProfile from "@/assets/testimonials/nisal.png";
import AkshikaProfile from "@/assets/testimonials/akshika.png";
import type { TestimonialProps } from "../type";

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
