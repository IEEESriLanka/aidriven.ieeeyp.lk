import EventCardArrow from "@/components/Events/EventCardArrow";
import { type UpcomingEventItemProps } from "@/lib/type";
import { cn } from "@/lib/utils";
import { CalendarDays, Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Item({
  headingLevel: Heading = "h3",
  ...props
}: UpcomingEventItemProps & { headingLevel?: "h2" | "h3" }) {
  return (
    <div
      className={cn(
        "group relative grid h-full w-full gap-x-16 gap-y-8 rounded-2xl border border-transparent bg-[#111] px-6 py-6 text-white lg:grid-cols-2",
        props.photosLink && "event-card-clickable",
      )}
    >
      <div className="flex flex-col justify-between gap-4 py-4">
        <div className="flex flex-col gap-4">
          <Heading className="event-item-header text-2xl font-semibold uppercase">
            {props.photosLink ? (
              <Link href={props.photosLink} className="event-card-link">
                {props.title}
              </Link>
            ) : (
              props.title
            )}
          </Heading>
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
                  <li key={index} className="flex items-start gap-2 text-base">
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
            <Link href={props.link} className="relative z-20 text-base text-primary">Learn More</Link>
          </div>
        )}
      </div>

      <div className="relative h-64 w-full overflow-hidden rounded-xl lg:h-full lg:min-h-64 lg:rounded-l-none lg:rounded-r-2xl">
        {props.img && typeof props.img.src === "string" ? (
          <img src={props.img.src} alt={props.img.alt} className="h-full w-full object-cover object-center" />
        ) : (
          <Image
            src={props.img.src}
            alt={props.img.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "object-cover object-center",
              props.photosLink && "transition-transform duration-500 group-hover:scale-105",
            )}
          />
        )}
        {props.photosLink && <EventCardArrow href={props.photosLink} />}
      </div>
    </div>
  );
}
