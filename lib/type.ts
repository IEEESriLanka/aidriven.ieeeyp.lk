import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface NavLinkItem {
  type: "link";
  href: string;
  label: string;
  component?: never;
}

export interface NavDropdownItem {
  type: "dropdown";
  component: () => JSX.Element;
  href?: string;
  label?: string;
}

export type NavItem = NavLinkItem | NavDropdownItem;

export interface UpcomingEventItemProps {
  title: string;
  description: string[];
  date?: string;
  time?: string;
  venue?: string;
  link?: string;
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
  content: string[];
}

export interface ProjectItemProps {
  title: string;
  description: string[];
  image: StaticImport;
  data?: {
    participateCount: number;
    edition: string;
    date: string;
  };
}

export interface OldTimelineItemProps {
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

// new timeline props
export interface TimelineItemProps {
  events: string[];
  month?: string;
}

import type { StaticImageData } from "next/image";
import { JSX } from "react";

type ImgSrc = StaticImageData | string;

export interface ValProps {
  img: ImgSrc;
  title: string;
  text: string;
}

export interface ContactDetailProps {
  icon: ImgSrc;
  title: string;
  val?: string;
}

export interface FeatureItemProps {
  icon: ImgSrc;
  title: string;
}

export interface MemberDetailProps {
  profileImg: ImgSrc;
  name: string;
  team?: string;
  position: string;
  socials: { icon: ImgSrc; url: string }[];
}

export interface eventsEditionDataProps {
  title: string;
  desc: string | string[];
  data: {
    participateCount: number;
    edition: string;
    date: string;
  };
  imgs?: StaticImageData[];
}

export interface eventsFAQDataProps {
  value: string;
  title: string;
  content: string;
}
