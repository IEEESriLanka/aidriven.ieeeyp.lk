import React from "react";
import Hero from "@/components/LandingPage/Hero";
import Reveal from "@/components/common/Reveal";
import dynamic from "next/dynamic";

const UpcomingEvent = dynamic(() => import("@/components/LandingPage/UpcomingEvents"));
const Timeline = dynamic(() => import("@/components/LandingPage/Timeline"));
const PastEvents = dynamic(() => import("@/components/LandingPage/PastEvents"));
const Partners = dynamic(() => import("@/components/LandingPage/Partners"));
const Testimonials = dynamic(() => import("@/components/LandingPage/Testimonials"));
const Blogs = dynamic(() => import("@/components/LandingPage/Blog"));
const PartnerCTA = dynamic(() => import("@/components/LandingPage/PartnerCTA"));

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-12 pt-[100px] lg:pt-[122px]">
            <Hero />
            <Reveal><Partners /></Reveal>
            <Reveal><UpcomingEvent /></Reveal>
            <Reveal><Timeline /></Reveal>
            <Reveal><PastEvents /></Reveal>
            <Reveal><Testimonials /></Reveal>
            <Reveal><Blogs /></Reveal>
            <Reveal><PartnerCTA /></Reveal>
        </main>
    );
}
