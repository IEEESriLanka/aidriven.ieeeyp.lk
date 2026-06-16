import dynamic from "next/dynamic";
import { Hero } from "@/components/LandingPage";

const UpcomingEvent = dynamic(() => import("@/components/LandingPage/UpcomingEvents"));
const Timeline = dynamic(() => import("@/components/LandingPage/Timeline"));
const Partners = dynamic(() => import("@/components/LandingPage/Partners"));
const Testimonials = dynamic(() => import("@/components/LandingPage/Testimonials"));
const Blogs = dynamic(() => import("@/components/LandingPage/Blog"));
const Projects = dynamic(() => import("@/components/LandingPage/Projects"));

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <UpcomingEvent />
      <Timeline />
      <Partners />
      <Testimonials />
      <Blogs />
      <Projects />
    </main>
  );
}
