import type { UpcomingEventItemProps } from "@/lib/type";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventNavCardProps {
  event: UpcomingEventItemProps;
  direction: "previous" | "next";
}

export default function EventNavCard({ event, direction }: EventNavCardProps) {
  const isNext = direction === "next";
  const Arrow = isNext ? ArrowRight : ArrowLeft;

  return (
    <Link
      href={event.photosLink as string}
      className={cn(
        "group event-card-clickable flex items-center gap-4 rounded-2xl border border-transparent bg-[#111] p-3",
        // Keeps "next" on the right even when there is no previous event
        isNext && "flex-row-reverse text-right sm:col-start-2",
      )}
    >
      <div className="relative aspect-[3/2] w-28 shrink-0 overflow-hidden rounded-xl sm:w-36">
        <Image
          src={event.img.src}
          alt=""
          fill
          sizes="144px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 grow flex-col gap-1">
        <span className={cn("text-primary flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider", isNext && "justify-end")}>
          {!isNext && <Arrow className="size-4" />}
          {isNext ? "Next event" : "Previous event"}
          {isNext && <Arrow className="size-4" />}
        </span>
        <span className="text-sm font-medium text-white sm:text-base">{event.title}</span>
      </div>
    </Link>
  );
}
