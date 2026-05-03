import { type UpcomingEventItemProps } from "@/lib/type";
import { CalendarDays, Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Item(props: UpcomingEventItemProps) {
  return (
    <div className="grid w-full gap-x-16 gap-y-8 rounded-2xl bg-[#111] px-6 py-6 text-white lg:grid-cols-2">
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
          {props.highlights && props.highlights.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-primary">Experience Includes</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {props.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          <div className="flex w-full items-center justify-start">
            <Link href={props.link} className="text-sm text-primary">Learn More</Link>
          </div>
        )}
      </div>

      <div className="relative h-64 w-full overflow-hidden rounded-xl lg:h-full lg:min-h-64 lg:rounded-l-none lg:rounded-r-2xl">
        {props.img && typeof props.img.src === "string" ? (
          <img src={props.img.src} alt={props.img.alt} className="h-full w-full object-cover" />
        ) : (
          <Image
            src={props.img.src}
            alt={props.img.alt}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}
