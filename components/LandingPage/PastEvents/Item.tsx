import EventCardArrow from "@/components/Events/EventCardArrow";
import { type UpcomingEventItemProps } from "@/lib/type";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Item(props: UpcomingEventItemProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-transparent bg-[#111] text-white",
        props.photosLink && "event-card-clickable",
      )}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        <Image
          src={props.img.src}
          alt={props.img.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-cover object-center",
            props.photosLink && "transition-transform duration-500 group-hover:scale-105",
          )}
        />
        {props.photosLink && <EventCardArrow href={props.photosLink} />}
      </div>
      <div className="flex grow flex-col gap-3 p-6">
        <h3 className="event-item-header text-lg font-semibold uppercase">
          {props.photosLink ? (
            <Link href={props.photosLink} className="event-card-link">
              {props.title}
            </Link>
          ) : (
            props.title
          )}
        </h3>
        <p className="line-clamp-3 text-sm text-white/70">{props.description[0]}</p>
        {props.highlights && props.highlights.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {props.highlights.slice(0, 2).map((highlight) => (
              <li
                key={highlight}
                className="text-primary bg-[#191919] px-2 py-1 text-xs"
                style={{ borderRadius: "12px 4px" }}
              >
                {highlight}
              </li>
            ))}
          </ul>
        )}
        {props.link && (
          <Link href={props.link} className="text-primary relative z-20 mt-auto w-fit pt-2 text-sm">
            Learn More
          </Link>
        )}
      </div>
    </article>
  );
}
