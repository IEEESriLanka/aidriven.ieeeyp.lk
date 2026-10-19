import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroStats } from "@/lib/data";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    // The background's horizontal line sits at ~86vh, so the content is anchored 20px above it
    <div className="relative flex min-h-[calc(100vh-100px)] w-full items-end overflow-hidden pt-4 pb-[calc(14vh+20px)] lg:pt-8 lg:min-h-[calc(100vh-122px)]">
      <div className="relative z-10 mx-auto flex w-[95%] max-w-7xl flex-col gap-y-5 px-6 lg:gap-y-8 lg:[@media(max-height:820px)]:gap-y-5">
        <div className="border-primary/50 bg-primary/10 flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-wider text-[#ffb48a] uppercase">
          <span className="bg-primary size-1.5 rounded-full" />
          <span>
            An initiative of <span className="font-semibold text-white">IEEE Young Professionals Sri Lanka</span>
          </span>
        </div>
        <div className="font-elemental-end flex flex-col gap-y-2 text-2xl text-white lg:gap-y-6 lg:text-5xl lg:[@media(max-height:820px)]:gap-y-3">
          <span>ONE TEAM. </span>
          <span className="text-primary">Igniting minds.</span>
          <span>LIMITLESS POSSIBILITIES.</span>
        </div>
        <p className="w-full text-base text-balance text-white/85 lg:max-w-[55ch] lg:text-lg">
          Since 2020, bridging the gap between Sri Lanka&apos;s undergraduates,
          graduates and the AI industry.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/about-us#contact-us"
            className="bg-primary group flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e34600]"
          >
            Partner with us
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/events/past-events"
            className="hover:border-primary hover:text-primary rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors"
          >
            Explore past events
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-2 sm:flex sm:flex-wrap sm:gap-x-12">
          {heroStats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
