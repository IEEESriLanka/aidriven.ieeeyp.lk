import Item from "@/components/LandingPage/UpcomingEvents/Item";
import { upcomingEventsData } from "@/lib/data";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto flex flex-col gap-y-8 px-4 pt-32 pb-24 lg:pt-40">
      <div className="flex flex-col gap-y-4">
        <h1 className="section-header">
          <span>Our</span>
          <span className="text-primary"> Events</span>
        </h1>
        <p className="text-base text-white/60 max-w-2xl">
          Explore AI Driven Sri Lanka's signature programs - from national
          competitions to industry engagement sessions and flagship summits.
        </p>
      </div>

      <div className="flex flex-col gap-y-10">
        {upcomingEventsData.map((event, index) => (
          <Item key={index} {...event} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/events/past-events"
          className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          View Past Events →
        </Link>
      </div>
    </main>
  );
}
