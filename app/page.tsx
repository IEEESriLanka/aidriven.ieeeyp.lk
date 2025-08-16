import {
  Testimonials,
  Hero,
  UpcomingEvent,
  Blogs,
  Projects,
} from "@/components/LandingPage";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <UpcomingEvent />
      <Testimonials />
      <Blogs />
      <Projects />
    </main>
  );
}
