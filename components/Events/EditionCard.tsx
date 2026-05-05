import type { eventsEditionDataProps } from "@/lib/type";
import { CalendarDays, Ticket, Users } from "lucide-react";
import Image from "next/image";

const EditionCard = ({ title, desc, data, imgs }: eventsEditionDataProps) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-[40px] border border-white/10 bg-[#191919B8] p-7.5 text-white">
      <div className="font-elemental-end text-primary text-[32px] uppercase md:text-[40px]">{title}</div>

      {Array.isArray(desc) ? (
        <div className="flex flex-col gap-3">
          {desc.map((paragraph, index) => (
            <p key={index} className="text-lg text-white/85 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className="text-lg text-white/85 leading-relaxed">{desc}</p>
      )}

      <div className="flex flex-wrap gap-6 pt-2">
        <div className="flex items-center gap-2">
          <Users className="text-primary h-5 w-5" />
          <span className="font-elemental-end text-primary text-3xl">{data.participateCount}+</span>
          <span className="text-white/70 text-base">Participants</span>
        </div>
        <div className="flex items-center gap-2">
          <Ticket className="text-primary h-5 w-5" />
          <span className="font-elemental-end text-primary text-3xl">{data.edition}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="text-primary h-5 w-5" />
          <span className="font-elemental-end text-primary text-3xl uppercase">{data.date}</span>
        </div>
      </div>

      {imgs && imgs.length > 0 && (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {imgs.map((img, i) => (
            <div key={i} className="relative h-40 overflow-hidden rounded-2xl border border-white/10">
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditionCard;
