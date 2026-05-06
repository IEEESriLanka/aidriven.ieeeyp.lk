import Project3Image from "@/assets/projects/project3.png";

import SLAIC25Image from "@/assets/events/SLAIC2025.webp";
import AIComTalk25Image from "@/assets/events/AIComTalk2025.webp";
import ExplorerSeriesImage from "@/assets/events/explorerSeries.webp";
import type { ProjectItemProps } from "../type";

export const projectsData: ProjectItemProps[] = [
  {
    title: "Sri Lanka AI Challenge 2025 (SLAIC 2025)",
    description: [
      "Sri Lanka AI Challenge was a key initiative under IEEE Challenge Sphere SL, designed to provide a structured pathway for participants to gain hands-on experience and strengthen their skills in AI technologies through a series of workshops and a competitive hackathon.",
    ],
    image: SLAIC25Image,
    data: undefined,
  },
  {
    title: "AI Com Talk 2025",
    description: [
      "The AI-Driven SL Community Talk Series was a flagship initiative by AI Driven SL, organized together with IEEE Student Branches from leading Sri Lankan universities to promote AI knowledge sharing and practical learning. ",
    ],
    image: AIComTalk25Image,
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
    image: ExplorerSeriesImage,
    data: undefined,
  },
];
