import { type UpcomingEventItemProps } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

export default function Item(props: UpcomingEventItemProps) {
  return (
    <article className="group hover:border-primary/40 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-transparent bg-[#111] text-white transition-colors duration-300">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        <Image
          src={props.img.src}
          alt={props.img.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex grow flex-col gap-3 p-6">
        <h3 className="event-item-header text-lg font-semibold uppercase">
          {props.title}
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
          <Link href={props.link} className="text-primary mt-auto pt-2 text-sm">
            Learn More
          </Link>
        )}
      </div>
    </article>
  );
}
