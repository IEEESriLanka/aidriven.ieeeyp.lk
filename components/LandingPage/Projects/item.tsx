import type { ProjectItemProps } from "@/lib/type";
import { CalendarDays, Ticket, Users } from "lucide-react";
import Image from "next/image";

export default function Item(props: ProjectItemProps) {
  return (
    <article className="relative flex min-h-[320px] flex-col gap-y-4 overflow-clip rounded-xl bg-black px-8 py-12">
      <div className="absolute top-0 left-0 h-full w-full opacity-70">
        <Image src={props.image} alt={props.title} fill />
      </div>
      <div className="relative z-20 flex h-full grow flex-col justify-between gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-primary text-3xl font-medium">{props.title}</h3>
          <p className="text-lg text-balance text-white">{props.description}</p>
        </div>
        <div className="flex w-full flex-col justify-between gap-y-2 lg:flex-row lg:items-center">
          <div className="flex items-center gap-x-2">
            <Users className="text-primary" />
            <div className="flex flex-col">
              <span className="font-elemental-end text-xl font-semibold text-white">
                {props.data.participateCount}+
              </span>
              <span className="text-white/60 uppercase">participants</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Ticket className="text-primary" />
            <span className="font-elemental-end text-xl font-semibold text-white">
              {props.data.edition}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <CalendarDays className="text-primary" />
            <span className="font-elemental-end text-xl font-semibold text-white uppercase">
              {props.data.date}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
