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
