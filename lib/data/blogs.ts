import Blog1Image from "@/assets/blogs/blog1.png";
import Blog2Image from "@/assets/blogs/blog2.png";
import type { BlogItemProps } from "../type";

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
