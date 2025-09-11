import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface UpcomingEventItemProps {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  link: string;
  img: {
    src: StaticImport | string;
    alt: string;
  };
}

export interface TestimonialProps {
  profile: {
    imgSrc: StaticImport;
    imgAlt: string;
    name: string;
    title: string;
  };
  message: string;
}

export interface BlogItemProps {
  title: string;
  caption: string;
  image: StaticImport;
  link: string;
}

export interface ProjectItemProps {
  title: string;
  description: string;
  image: StaticImport;
  data: {
    participateCount: number;
    edition: string;
    date: string;
  };
}

export interface TimelineItemProps {
  title: string;
  caption: string;
  speaker: {
    name: string;
    bio: string;
  };
  data: {
    date: string;
    time: string;
    venue: string;
  };
  month?: string;
}
