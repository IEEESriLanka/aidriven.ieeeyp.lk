import type { TimelineItemProps } from "@/lib/type";
import { CalendarDays, Clock4 } from "lucide-react";

export default function Item(props: TimelineItemProps) {
  return (
    <article
      className="_min-h-[380px] flex max-w-[480px] flex-col justify-between gap-y-4 bg-[rgba(69,65,61,0.8)] px-4 py-8"
      style={{
        borderRadius: "20px 20px 0 20px",
      }}
    >
      <h3 className="text-2xl font-medium text-white">{props.title}</h3>
      <div className="flex flex-col items-center gap-y-4">
        <h3 className="text-center">{props.caption}</h3>
        <div className="flex flex-col items-center gap-y-1">
          <h3 className="text-xl">{props.speaker.name}</h3>
          <p>{props.speaker.bio}</p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-4 lg:flex-row lg:items-center">
        <div className="flex items-center gap-x-1">
          <CalendarDays className="text-primary" />
          <span>{props.data.date}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <Clock4 className="text-primary" />
          <span>{props.data.time}</span>
        </div>
        <span>{props.data.venue}</span>
      </div>
    </article>
  );
}
