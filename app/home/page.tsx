import React from "react";
import Hero from "@/components/LandingPage/Hero";
import dynamic from "next/dynamic";

const UpcomingEvent = dynamic(() => import("@/components/LandingPage/UpcomingEvents"));
const Timeline = dynamic(() => import("@/components/LandingPage/Timeline"));
const Partners = dynamic(() => import("@/components/LandingPage/Partners"));
const Testimonials = dynamic(() => import("@/components/LandingPage/Testimonials"));
const Blogs = dynamic(() => import("@/components/LandingPage/Blog"));
const Projects = dynamic(() => import("@/components/LandingPage/Projects"));

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-12 pt-[100px] lg:pt-[122px]">
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
