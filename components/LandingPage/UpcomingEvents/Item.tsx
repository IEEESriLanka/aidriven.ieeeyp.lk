import { type UpcomingEventItemProps } from "@/lib/type";
import { CalendarDays, Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Item(props: UpcomingEventItemProps) {
  return (
    <div className="grid min-h-[360px] w-full gap-x-16 gap-y-8 rounded-2xl bg-[#111] px-6 py-6 text-white lg:grid-cols-2">
      <div className="flex flex-col justify-start gap-4 py-4">
        <div className="flex flex-col gap-4">
          <h3 className="event-item-header text-2xl font-semibold uppercase">
            {props.title}
          </h3>
          {props.description.map((desc, index) => (
            <p key={index} className="">
              {desc}
            </p>
          ))}
        </div>

        {props.date && (
          <div className="flex w-full flex-col justify-center gap-4 lg:flex-row lg:items-center">
            <div className="flex items-center gap-x-1">
              <CalendarDays className="text-primary" />
              <span>{props.date}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <Clock4 className="text-primary" />
              <span>{props.time}</span>
            </div>
            <span>{props.venue}</span>
          </div>
        )}

        {props.link && (
          <div className="flex w-full items-center justify-end uppercase">
            <Link href={props.link}>{props.linkALT || "Read more"}</Link>
          </div>
        )}
      </div>

      <div className="relative flex items-center justify-end">
        {props.img && typeof props.img.src === "string" ? (
          <img src={props.img.src} alt={props.img.alt} />
        ) : (
          <Image
            src={props.img.src}
            alt={props.img.alt}
            className="h-auto rounded-xl object-fill lg:rounded-l-none lg:rounded-r-2xl"
          />
        )}
      </div>
    </div>
  );
}
