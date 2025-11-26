import type { TimelineItemProps } from "@/lib/type";
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
      className={`flex flex-col items-center justify-between gap-y-4 px-4 py-8 text-white transition-colors duration-300 ${
        isActive ? "bg-primary!" : "timeline-card"
      }`}
      style={{
        borderRadius: "20px 20px 0 20px",
      }}
    >
      <ul className="flex w-full flex-col gap-4">
        {props.events.map((ev, i) => (
          <li
            key={i}
            className={`text-2xl font-medium lg:text-3xl ${isActive ? "text-white" : "text-primary"} transition-colors duration-300 p-4`}
          >
            {ev}
          </li>
        ))}
      </ul>
    </article>
  );
}
