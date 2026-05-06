import Item from "@/components/LandingPage/UpcomingEvents/Item";
import { pastEventsData } from "@/lib/data/upcoming-events";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PastEventsPage() {
  return (
    <main className="container mx-auto flex flex-col gap-y-8 px-4 pt-32 pb-24 lg:pt-40">
      <div className="flex flex-col gap-y-2">
        <h1 className="section-header">
          <span>Past</span>
          <span className="text-primary"> Events</span>
        </h1>
        <p className="text-base text-white/60">
          A look back at the programs and initiatives that have shaped AI Driven Sri Lanka&apos;s journey so far.
        </p>
      </div>

      <div className="flex flex-col gap-y-10">
        {pastEventsData.map((event, index) => (
          <Item key={index} {...event} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/events"
          className="group flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Events
        </Link>
      </div>
    </main>
  );
}
