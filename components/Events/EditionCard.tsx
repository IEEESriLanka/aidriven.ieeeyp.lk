import type { eventsEditionDataProps } from "@/lib/type";
import { CalendarDays, Ticket, Users } from "lucide-react";
import Image from "next/image";

const EditionCard = ({ year, desc, data, imgs }: eventsEditionDataProps) => {
  return (
    <div className="edition-card container flex flex-col items-center gap-10 p-8">
      <div className="container flex flex-col items-center justify-center gap-10 p-[10px] text-white md:p-[70px]">
        <h3 className="text-primary text-4xl font-bold">
          Community Talk Sries <span>{year}</span>
        </h3>
        <p>{desc}</p>
      </div>
      <div className="flex w-fit flex-col justify-between gap-x-16 gap-y-2 lg:flex-row lg:items-center">
        <div className="flex items-center gap-x-2">
          <Users className="text-primary" />
          <div className="flex flex-col">
            <span className="font-elemental-end text-xl font-semibold text-white">
              {data.participateCount}+
            </span>
            <span className="text-white/60 uppercase">participants</span>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Ticket className="text-primary" />
          <span className="font-elemental-end text-xl font-semibold text-white">
            {data.edition}
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <CalendarDays className="text-primary" />
          <span className="font-elemental-end text-xl font-semibold text-white uppercase">
            {data.date}
          </span>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center md:flex-row">
        {imgs.map((img, i) => (
          <Image
            key={i}
            className="container h-[250px] object-contain"
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default EditionCard;
