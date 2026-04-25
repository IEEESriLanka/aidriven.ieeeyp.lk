import Item from "@/components/LandingPage/UpcomingEvents/Item";
import { pastEventsData } from "@/lib/data/upcoming-events";
import Link from "next/link";

export default function PastEventsPage() {
  return (
    <main className="section-gap-y container mx-auto flex flex-col gap-y-16 px-4">
      <div className="flex flex-col gap-y-4">
        <h1 className="section-header">
          <span>Past</span>
          <span className="text-primary"> Events</span>
        </h1>
        <p className="text-white/60 max-w-2xl">
          A look back at the programs and initiatives that have shaped AI Driven
          Sri Lanka&apos;s journey so far.
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
          className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          ← Back to Events
        </Link>
      </div>
    </main>
  );
}
