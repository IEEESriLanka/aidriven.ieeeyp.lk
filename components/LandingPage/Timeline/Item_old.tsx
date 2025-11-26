import type { OldTimelineItemProps as TimelineItemProps } from "@/lib/type";
import { CalendarDays, Clock4 } from "lucide-react";
import { useEffect } from "react";

type Props = TimelineItemProps & {
  isActive?: boolean;
};

export default function Item({ isActive, ...props }: Props) {
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  return (
    <article
      className={`_max-w-[480px] flex min-h-[300px] flex-col justify-between gap-y-4 px-4 py-8 text-white transition-colors duration-300 ${
        isActive ? "bg-primary!" : "timeline-card"
      }`}
      style={{
        borderRadius: "20px 20px 0 20px",
      }}
    >
      <h3
        className={`text-2xl font-medium lg:text-4xl ${isActive ? "text-white" : "text-primary"} transition-colors duration-300`}
      >
        {props.title}
      </h3>
      <div className="flex flex-col items-center gap-y-4">
        <h3 className="text-center">{props.caption}</h3>
        <div className="flex flex-col items-center gap-y-1">
          <h3 className="text-xl">{props.speaker.name}</h3>
          <p>{props.speaker.bio}</p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-4 lg:flex-row lg:items-center">
        <div className="flex items-center gap-x-1">
          <CalendarDays
            className={` ${isActive ? "text-white" : "text-primary"}`}
          />
          <span>{props.data.date}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <Clock4 className={` ${isActive ? "text-white" : "text-primary"}`} />
          <span>{props.data.time}</span>
        </div>
        <span>{props.data.venue}</span>
      </div>
    </article>
  );
}
