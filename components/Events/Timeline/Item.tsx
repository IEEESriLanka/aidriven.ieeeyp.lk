import type { TimelineItemProps } from "@/lib/type";

type Props = TimelineItemProps & {
  isActive?: boolean;
};

export default function Item({ isActive, ...props }: Props) {
  return (
    <article
      className={`flex flex-col gap-y-4 px-4 py-8 text-white transition-colors duration-300 ${
        isActive ? "bg-primary!" : "timeline-card"
      }`}
      style={{ borderRadius: "20px 20px 0 20px" }}
    >
      <ul className="flex w-full flex-col gap-3">
        {props.events.map((ev, i) => (
          <li
            key={i}
            className={`flex items-center text-2xl font-medium lg:text-3xl ${isActive ? "text-white" : "text-primary"} transition-colors duration-300`}
          >
            <span className="mr-2 text-5xl leading-none">&#8226;</span>
            {ev}
          </li>
        ))}
      </ul>
    </article>
  );
}
