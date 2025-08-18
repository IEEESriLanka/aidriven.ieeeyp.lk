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

import type { StaticImageData } from "next/image";

type ImgSrc = StaticImageData | string;

export interface ValProps {
  img: ImgSrc;
  title: string;
  text: string;
}

export interface ContactDetailProps {
  icon: ImgSrc;
  title: string;
  val: string;
}

export interface MemberDetailProps {
  icon: ImgSrc;
  title: string;
  val: string;
  socials: { icon: ImgSrc; url: string }[];
}
