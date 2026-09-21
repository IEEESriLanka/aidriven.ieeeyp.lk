"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import geenothPhoto from "@/assets/team-2026/Geenoth Viksura.png";
import hirushiPhoto from "@/assets/team-2026/Hirushi Gamage.png";
import kaushikaPhoto from "@/assets/team-2026/Kaushika Dissanayake.png";
import lohansaPhoto from "@/assets/team-2026/Lohansa Munasinghe.png";
import linukPhoto from "@/assets/team-2026/Linuk Perera.png";
import webElement from "@/assets/web-element.png";
const UpcomingEvent = dynamic(() => import("@/components/LandingPage/UpcomingEvents"));
const Timeline = dynamic(() => import("@/components/LandingPage/Timeline"));
const Partners = dynamic(() => import("@/components/LandingPage/Partners"));
const Testimonials = dynamic(() => import("@/components/LandingPage/Testimonials"));
const Blogs = dynamic(() => import("@/components/LandingPage/Blog"));
const Projects = dynamic(() => import("@/components/LandingPage/Projects"));

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("milestones");
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", mins: "00", secs: "00" });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-10-30T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? "0" + days : days.toString(),
          hours: hours < 10 ? "0" + hours : hours.toString(),
          mins: minutes < 10 ? "0" + minutes : minutes.toString(),
          secs: seconds < 10 ? "0" + seconds : seconds.toString()
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const lenis = (window as any).lenis;
      const scrollPosition = lenis ? lenis.actualScroll : window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-[#0A0103] text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-white overflow-x-hidden flex flex-col min-h-screen">




      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-outline-variant/60 shadow-sm w-screen transition-colors duration-300 ${isScrolled ? "bg-[#1C0309]/30" : "bg-[#1C0309]/95"}`}>
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin h-20">

          <a className="flex items-center gap-3 group" href="#!">
            <span className="inline-block w-3 h-10 bg-primary-container shadow-[0_0_15px_#FF1E56] group-hover:shadow-[0_0_25px_#FF1E56] transition-shadow duration-300"></span>
            <span className="flex flex-col font-headline-xl font-black uppercase tracking-[0.15em] leading-[1.1]">
              <span className="text-white text-base md:text-lg">AI DRIVEN</span>
              <span className="text-primary text-[10px] md:text-xs tracking-[0.2em]">SRI LANKA 2026</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-xs">
            <a className="text-on-surface-variant uppercase font-label-mono-sm tracking-widest hover:text-primary transition-colors duration-200" href="#about">About</a>
            <a className="text-on-surface-variant uppercase font-label-mono-sm tracking-widest hover:text-primary transition-colors duration-200" href="#experience">Experience</a>
            <a className="text-on-surface-variant uppercase font-label-mono-sm tracking-widest hover:text-primary transition-colors duration-200" href="#programme">Programme</a>
            <a className="text-on-surface-variant uppercase font-label-mono-sm tracking-widest hover:text-primary transition-colors duration-200" href="#partners">Partners</a>
            <a className="text-on-surface-variant uppercase font-label-mono-sm tracking-widest hover:text-primary transition-colors duration-200" href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">

            <div className="relative group hidden lg:block">
              <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary font-label-mono-sm text-xs uppercase tracking-wider py-2 transition-colors">
                AIDSL <span className="text-xs">▾</span>
              </button>
              <div className="absolute right-0 top-full pt-4 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-[#1C0309] border border-outline-variant/60 shadow-2xl p-2 flex flex-col space-y-1">
                  <a className="px-3 py-2 text-xs font-label-mono-sm text-on-surface-variant hover:text-white hover:bg-[#30040E] transition-colors" href="/events/past-events">Our Past Events</a>
                  <a className="px-3 py-2 text-xs font-label-mono-sm text-on-surface-variant hover:text-white hover:bg-[#30040E] transition-colors" href="/blogs">Blogs</a>
                  <a className="px-3 py-2 text-xs font-label-mono-sm text-on-surface-variant hover:text-white hover:bg-[#30040E] transition-colors" href="/our-team">Our Team</a>
                  <a className="px-3 py-2 text-xs font-label-mono-sm text-on-surface-variant hover:text-white hover:bg-[#30040E] transition-colors" href="/about-us">About Us</a>
                  <a className="px-3 py-2 text-xs font-label-mono-sm text-on-surface-variant hover:text-white hover:bg-[#30040E] transition-colors" href="#contact">Contact Us</a>
                </div>
              </div>
            </div>
            <a className="bg-primary-container text-white font-headline-md text-xs font-bold tracking-widest uppercase px-5 py-2.5 border border-[#FF3366] hover:bg-[#FF2A55] crimson-btn-glow transition-all duration-150 active:opacity-80" href="#register">
              REGISTER NOW
            </a>
            <button aria-label="Toggle Menu" className="md:hidden text-on-surface hover:text-primary p-2 focus:outline-none" id="mobile-menu-btn" onClick={handleMobileMenuToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`md:hidden bg-[#1C0309] border-b border-outline-variant/40 px-6 py-6 space-y-4 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <a className="block font-label-mono-sm uppercase tracking-widest text-on-surface hover:text-primary" href="#about">About</a>
          <a className="block font-label-mono-sm uppercase tracking-widest text-on-surface hover:text-primary" href="#experience">Experience</a>
          <a className="block font-label-mono-sm uppercase tracking-widest text-on-surface hover:text-primary" href="#programme">Programme</a>
          <a className="block font-label-mono-sm uppercase tracking-widest text-on-surface hover:text-primary" href="#partners">Partners</a>
          <a className="block font-label-mono-sm uppercase tracking-widest text-on-surface hover:text-primary" href="#faq">FAQ</a>
          <hr className="border-outline-variant/40 my-2" />
          <span className="block text-xs uppercase tracking-widest text-primary font-bold">AIDSL Ecosystem</span>
          <a className="block pl-3 text-xs text-on-surface-variant hover:text-primary" href="/events/past-events">Our Past Events</a>
          <a className="block pl-3 text-xs text-on-surface-variant hover:text-primary" href="/blogs">Blogs</a>
          <a className="block pl-3 text-xs text-on-surface-variant hover:text-primary" href="/our-team">Our Team</a>
          <a className="block pl-3 text-xs text-on-surface-variant hover:text-primary" href="/about-us">About Us</a>
          <a className="block pl-3 text-xs text-on-surface-variant hover:text-primary" href="#contact">Contact Us</a>
        </div>
      </header>

      <section className="relative min-h-[942px] flex items-start justify-center custom-radial-glow hero-grid-pattern overflow-hidden pt-24 pb-32 border-b border-outline-variant/30">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-gradient-to-tr from-[#FF1E56]/20 via-[#940023]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0 opacity-75"></div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-margin-mobile md:px-margin w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-16 md:pt-28">

          <div className="lg:col-span-7 flex flex-col items-start xl:-mt-16 lg:-mt-8">

            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#24040B] border border-primary-container/60 text-primary uppercase font-label-mono-xs tracking-widest mb-4 shadow-[0_0_15px_rgba(255,30,86,0.25)] text-[10px]">
              <span className="w-1 h-1 bg-primary animate-ping inline-block"></span>
              <span>AN INITIATIVE BY IEEE YOUNG PROFESSIONALS SRI LANKA</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[82px] lg:tracking-tighter font-headline-xl font-bold tracking-tight text-white uppercase leading-[1.05] mb-5">
              <span className="whitespace-nowrap">AI DRIVEN SRI LANKA</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FFA8BA] to-white inline-block pr-1">2026</span>
            </h1>

            <h2 className="text-lg md:text-xl font-headline-md text-primary font-medium tracking-wide mb-4">
              Sri Lanka's Premier AI Gathering
            </h2>
            <p className="max-w-xl text-sm md:text-base text-on-surface-variant font-body-md mb-8 leading-relaxed">
              One high-impact day bringing together global and local AI experts, innovators, startups and policymakers to shape the country's AI future.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1C0309] border border-outline-variant/60 text-on-surface font-label-mono-sm text-label-mono-sm tracking-wide shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                <span>Date to be announced soon</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1C0309] border border-outline-variant/60 text-on-surface font-label-mono-sm text-label-mono-sm tracking-wide shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Venue to be announced soon · Colombo</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 mb-10">
              <a className="px-8 py-4 bg-primary-container text-white font-headline-md text-label-mono-sm font-bold uppercase tracking-widest hover:bg-[#FF2A55] crimson-btn-glow transition-all" href="#register">
                Register Now
              </a>
              <a className="px-8 py-4 bg-transparent text-[#FFEBF0] border border-primary-container/60 font-headline-md text-label-mono-sm font-bold uppercase tracking-widest hover:border-primary hover:bg-primary/10 transition-all" href="#programme">
                Explore Programme
              </a>
            </div>



            <a aria-label="Scroll Down" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-mono-xs text-[10px] uppercase tracking-widest transition-colors animate-bounce" href="#quick-facts">
              <span>Scroll to Explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
            </a>
          </div>

          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative group perspective pb-10">
            <div className="relative w-[90%] h-[280px] xl:h-[360px] z-10 transition-all duration-[600ms] ease-out hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(255,30,86,0.45)] animate-float mt-16">
              <Image src={webElement} alt="AI Driven Web Element" fill className="object-contain" priority />
            </div>

            <div className="w-[380px] px-4 py-3 bg-[#1C0309]/95 border border-outline-variant/50 backdrop-blur-sm shadow-[0_0_20px_rgba(255,30,86,0.12)] mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] uppercase font-label-mono-xs tracking-widest text-primary font-bold">Event Countdown</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="py-1 bg-[#24040B] border border-outline-variant/40">
                  <span className="text-lg font-headline-md font-bold text-white block">{timeLeft.days}</span>
                  <span className="text-[8px] uppercase font-label-mono-xs text-on-surface-variant tracking-widest">Days</span>
                </div>
                <div className="py-1 bg-[#24040B] border border-outline-variant/40">
                  <span className="text-lg font-headline-md font-bold text-white block">{timeLeft.hours}</span>
                  <span className="text-[8px] uppercase font-label-mono-xs text-on-surface-variant tracking-widest">Hrs</span>
                </div>
                <div className="py-1 bg-[#24040B] border border-outline-variant/40">
                  <span className="text-lg font-headline-md font-bold text-white block">{timeLeft.mins}</span>
                  <span className="text-[8px] uppercase font-label-mono-xs text-on-surface-variant tracking-widest">Min</span>
                </div>
                <div className="py-1 bg-[#24040B] border border-outline-variant/40">
                  <span className="text-lg font-headline-md font-bold text-white block">{timeLeft.secs}</span>
                  <span className="text-[8px] uppercase font-label-mono-xs text-on-surface-variant tracking-widest">Sec</span>
                </div>
              </div>
              <div className="text-center mt-2 pt-1 border-t border-outline-variant/30/50">
                <span className="text-[8px] uppercase font-label-mono-xs tracking-widest text-primary font-bold">Registrations Open Soon</span>
              </div>
            </div>
          </div>

        </div></section>

      <section className="w-full bg-[#050001] border-b border-outline-variant/30 py-8" id="quick-facts">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
            <div className="p-4 md:px-6 md:py-2 text-center">
              <div className="text-3xl lg:text-4xl font-headline-xl font-bold text-primary mb-1">200+</div>
              <div className="text-xs font-label-mono-sm uppercase tracking-widest text-on-surface-variant">Participants</div>
            </div>
            <div className="p-4 md:px-6 md:py-2 text-center">
              <div className="text-3xl lg:text-4xl font-headline-xl font-bold text-primary mb-1">6+</div>
              <div className="text-xs font-label-mono-sm uppercase tracking-widest text-on-surface-variant">Sessions</div>
            </div>
            <div className="p-4 md:px-6 md:py-2 text-center">
              <div className="text-3xl lg:text-4xl font-headline-xl font-bold text-primary mb-1">10</div>
              <div className="text-xs font-label-mono-sm uppercase tracking-widest text-on-surface-variant">Startup Stalls</div>
            </div>
            <div className="p-4 md:px-6 md:py-2 text-center">
              <div className="text-3xl lg:text-4xl font-headline-xl font-bold text-primary mb-1">1</div>
              <div className="text-xs font-label-mono-sm uppercase tracking-widest text-on-surface-variant">High-impact Day</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-outline-variant/30 bg-[#0A0103] relative" id="about">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-3 font-bold">01 // ECOSYSTEM GATHERING</span>
              <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white mb-6 leading-tight">
                WHERE SRI LANKA'S AI ECOSYSTEM COMES TOGETHER
              </h2>
              <div className="space-y-4 text-on-surface-variant text-sm md:text-base font-body-md leading-relaxed"><p className="">AIDSL 2026 is the flagship national event of AI DRIVEN SRI LANKA, bringing together top global and local AI experts, innovators, and policymakers for a high-impact one-day forum focused on advancing Sri Lanka's AI landscape.</p><p className="">Featuring global keynote sessions, panel discussions, an innovation showcase, and exclusive networking - AIDSL 2026 is Sri Lanka's premier platform for cross-sector AI collaboration between academia, industry, startups, and government.</p></div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-center hidden md:flex">
              <div className="relative w-full max-w-[280px] aspect-square">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-[80px] animate-pulse"></div>

                {/* Rotating Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 border border-outline-variant/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                  <div className="absolute w-[85%] h-[85%] border border-primary/20 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
                </div>

                {/* Static Central NodeGraphic */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-[60%] h-[60%] bg-[#1A0207] border border-primary/40 rounded-full shadow-[0_0_30px_rgba(255,30,86,0.3)] backdrop-blur-sm flex flex-col items-center justify-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-1.5 opacity-90"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                    <span className="text-white font-headline-md font-bold uppercase tracking-widest text-xs">GLOBAL</span>
                    <span className="text-primary text-[8px] font-label-mono-xs uppercase tracking-[0.2em] mt-0.5">NETWORK</span>
                  </div>
                </div>

                {/* Floating Orbiting Dots */}
                <div className="absolute top-[12%] right-[18%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white] animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-[22%] left-[12%] w-2 h-2 bg-primary rounded-full shadow-[0_0_12px_rgba(255,30,86,1)] animate-pulse" style={{ animationDuration: '2s' }}></div>
                <div className="absolute top-[45%] left-[-4%] w-3 h-3 bg-outline-variant border border-primary rounded-sm rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>

                {/* Data Glass cards */}
                <div className="absolute -right-16 md:-right-24 top-1/4 bg-[#1C0309]/90 backdrop-blur-md border border-outline-variant/50 px-4 py-3 rounded-lg shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-xl font-headline-xl font-bold text-white leading-none tracking-wider">KEY</div>
                  <div className="text-[9px] text-on-surface-variant font-label-mono-xs uppercase tracking-widest mt-1.5 font-bold">INNOVATORS</div>
                </div>

                <div className="absolute -left-16 md:-left-24 bottom-1/4 bg-[#1C0309]/90 backdrop-blur-md border border-outline-variant/50 px-4 py-3 rounded-lg shadow-2xl animate-float">
                  <div className="text-xl font-headline-xl font-bold text-primary leading-none tracking-wider">CROSS</div>
                  <div className="text-[9px] text-on-surface-variant font-label-mono-xs uppercase tracking-widest mt-1.5 font-bold">INDUSTRY</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all">
              <div className="w-8 h-1 bg-primary-container shadow-[0_0_8px_#FF1E56] mb-6"></div>
              <span className="text-primary font-label-mono-xs uppercase tracking-widest block mb-2 font-bold">PILLAR 01</span>
              <h3 className="text-lg font-headline-md font-bold text-white mb-3 tracking-wide uppercase">LEARN</h3>
              <p className="text-xs text-on-surface-variant font-body-sm leading-normal">
                Global AI insight delivered directly by international thought leaders and top AI researchers.
              </p>
            </div>
            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all">
              <div className="w-8 h-1 bg-primary-container shadow-[0_0_8px_#FF1E56] mb-6"></div>
              <span className="text-primary font-label-mono-xs uppercase tracking-widest block mb-2 font-bold">PILLAR 02</span>
              <h3 className="text-lg font-headline-md font-bold text-white mb-3 tracking-wide uppercase">CONNECT</h3>
              <p className="text-xs text-on-surface-variant font-body-sm leading-normal">
                Academia, industry &amp; government bridging functional divides in high-caliber curated roundtables.
              </p>
            </div>
            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all">
              <div className="w-8 h-1 bg-primary-container shadow-[0_0_8px_#FF1E56] mb-6"></div>
              <span className="text-primary font-label-mono-xs uppercase tracking-widest block mb-2 font-bold">PILLAR 03</span>
              <h3 className="text-lg font-headline-md font-bold text-white mb-3 tracking-wide uppercase">INNOVATE</h3>
              <p className="text-xs text-on-surface-variant font-body-sm leading-normal">
                Startup and AI showcase providing tangible product viability and direct commercial acceleration.
              </p>
            </div>
            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all">
              <div className="w-8 h-1 bg-primary-container shadow-[0_0_8px_#FF1E56] mb-6"></div>
              <span className="text-primary font-label-mono-xs uppercase tracking-widest block mb-2 font-bold">PILLAR 04</span>
              <h3 className="text-lg font-headline-md font-bold text-white mb-3 tracking-wide uppercase">TRANSFORM</h3>
              <p className="text-xs text-on-surface-variant font-body-sm leading-normal">
                Turn insight into national impact through sovereign policy alignments and targeted capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-outline-variant/30 bg-[#0A0103]">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="mb-12">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">02 // STRATEGIC IMPERATIVE</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white">WHY AIDSL 2026?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="p-8 md:p-10 bg-[#1C0309] border border-outline-variant/50 relative">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase tracking-wider text-primary">THE PROBLEM</h3>
              </div>
              <ul className="space-y-6 text-on-surface-variant text-sm font-body-md">
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-base">•</span>
                  <span className="">Sri Lanka's AI talent lacks direct exposure to real industry environments</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-base">•</span>
                  <span className="">No single platform connecting academia, industry, startups &amp; policymakers</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-base">•</span>
                  <span className="">Limited access to global networks, investors &amp; cross-sector collaborators</span>
                </li>
              </ul>
            </div>

            <div className="p-8 md:p-10 bg-[#24040B] border border-primary-container/60 shadow-[0_0_30px_-4px_rgba(255,30,86,0.3)] relative">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary-container/40">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase tracking-wider text-white">OUR SOLUTION</h3>
              </div>
              <ul className="space-y-6 text-white text-sm font-body-md">
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-base">✓</span>
                  <span className="">Brings together academia, industry, startups, and policymakers in one high-impact event</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-base">✓</span>
                  <span className="">Bridges the gap and builds the connections Sri Lanka needs to lead in AI</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-base">✓</span>
                  <span className="">Creates a platform for global network access and cross-sector collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-outline-variant/30 bg-[#0A0103]" id="experience">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="mb-16">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">03 // IMMERSIVE FORMAT</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white">THE AIDSL EXPERIENCE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col justify-between h-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase text-white mb-3">GLOBAL KEYNOTE SESSIONS</h3>
                <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                  Insights and thought leadership from globally recognised AI leaders.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20 text-[10px] font-label-mono-xs text-primary uppercase tracking-widest font-bold">
                Keynote Stage
              </div>
            </div>

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col justify-between h-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase text-white mb-3">PANEL DISCUSSIONS</h3>
                <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                  Experts from industry, academia and policy tackling critical AI challenges.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20 text-[10px] font-label-mono-xs text-primary uppercase tracking-widest font-bold">
                Debate &amp; Consensus
              </div>
            </div>

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col justify-between h-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-5.224 4.668A3.999 3.999 0 0 0 2.25 15.5a4 4 0 0 0 4.213 3.491.5.5 0 0 1 .494.61A4.001 4.001 0 0 0 12 24h.01a4.001 4.001 0 0 0 5.043-4.398.5.5 0 0 1 .494-.61A4 4 0 0 0 21.75 15.5a3.999 3.999 0 0 0 1.471-5.707 4 4 0 0 0-5.224-4.668A3 3 0 1 0 12 5Z" /><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase text-white mb-3">AI FORUM</h3>
                <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                  Roundtables and thematic discussions generating actionable insights.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20 text-[10px] font-label-mono-xs text-primary uppercase tracking-widest font-bold">
                Actionable Outcomes
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col justify-between h-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase text-white mb-3">INNOVATION SHOWCASE</h3>
                <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                  10 exclusive bid-and-buy stalls for AI startups and innovators.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20 text-[10px] font-label-mono-xs text-primary uppercase tracking-widest font-bold">
                Commercial Stalls
              </div>
            </div>

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col justify-between h-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M18 22H4a2 2 0 0 1-2-2V6" /><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" /><circle cx="12" cy="8" r="2" /><rect width="16" height="16" x="6" y="2" rx="2" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase text-white mb-3">AI IMAGE GALLERY</h3>
                <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                  Curated AI-generated visuals running alongside the showcase.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20 text-[10px] font-label-mono-xs text-primary uppercase tracking-widest font-bold">
                Generative Art
              </div>
            </div>

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col justify-between h-full">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <h3 className="text-base font-headline-md font-bold uppercase text-white mb-3">NETWORKING SESSIONS</h3>
                <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                  Curated connections designed to spark partnerships and talent engagement.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/20 text-[10px] font-label-mono-xs text-primary uppercase tracking-widest font-bold">
                Ecosystem Exchange
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="p-8 bg-[#24040B] border border-primary-container/60 crimson-glow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start md:items-center gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-7.38 7.38a6 6 0 1 0 8.5 8.5l1.5-1.5" /><path d="M3 21l3-3" /><path d="m3 3 7.37 7.38a3 3 0 0 0 4.24 0L19 5.5a2 2 0 0 0 0-2.82l-.4-.4a2 2 0 0 0-2.8 0l-5.3 5.3" /></svg>
                <div>
                  <h3 className="text-base md:text-lg font-headline-md font-bold uppercase text-white mb-1">FELLOWSHIP GATHERING</h3>
                  <p className="text-xs text-on-surface-variant font-body-sm">
                    Exclusive premium networking for speakers, partners and investors.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-4 py-1.5 bg-[#1C0309] border border-outline-variant/60 text-xs font-label-mono-xs uppercase tracking-widest text-primary font-bold">
                  Private Lounge Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-outline-variant/30 bg-[#0A0103]">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="mb-12">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">04 // ATTENDANCE PROFILE</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white">
              WHO SHOULD ATTEND
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="px-6 py-5 bg-[#1C0309] border border-outline-variant/50 hover:border-primary transition-colors flex items-center gap-4">
              <span className="w-2 h-2 bg-primary shadow-[0_0_6px_#FF2A55]"></span>
              <span className="font-headline-md font-medium text-white text-sm tracking-wide">Industry Leaders &amp; Professionals</span>
            </div>
            <div className="px-6 py-5 bg-[#1C0309] border border-outline-variant/50 hover:border-primary transition-colors flex items-center gap-4">
              <span className="w-2 h-2 bg-primary shadow-[0_0_6px_#FF2A55]"></span>
              <span className="font-headline-md font-medium text-white text-sm tracking-wide">AI Researchers &amp; Academics</span>
            </div>
            <div className="px-6 py-5 bg-[#1C0309] border border-outline-variant/50 hover:border-primary transition-colors flex items-center gap-4">
              <span className="w-2 h-2 bg-primary shadow-[0_0_6px_#FF2A55]"></span>
              <span className="font-headline-md font-medium text-white text-sm tracking-wide">Startup Founders &amp; Innovators</span>
            </div>
            <div className="px-6 py-5 bg-[#1C0309] border border-outline-variant/50 hover:border-primary transition-colors flex items-center gap-4">
              <span className="w-2 h-2 bg-primary shadow-[0_0_6px_#FF2A55]"></span>
              <span className="font-headline-md font-medium text-white text-sm tracking-wide">Investors &amp; Venture Capitalists</span>
            </div>
            <div className="px-6 py-5 bg-[#1C0309] border border-outline-variant/50 hover:border-primary transition-colors flex items-center gap-4">
              <span className="w-2 h-2 bg-primary shadow-[0_0_6px_#FF2A55]"></span>
              <span className="font-headline-md font-medium text-white text-sm tracking-wide">Policymakers &amp; Government Representatives</span>
            </div>
            <div className="px-6 py-5 bg-[#1C0309] border border-outline-variant/50 hover:border-primary transition-colors flex items-center gap-4">
              <span className="w-2 h-2 bg-primary shadow-[0_0_6px_#FF2A55]"></span>
              <span className="font-headline-md font-medium text-white text-sm tracking-wide">Students &amp; Early-career Professionals</span>
            </div>
          </div>
          <p className="text-on-surface-variant font-body-sm text-xs italic">Not sure if it's for you? It probably is - the event is built for everyone touching AI in Sri Lanka.</p>
        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-outline-variant/30 bg-[#0A0103]" id="programme">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">05 // AGENDA</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white mb-2">
              PROGRAMME
            </h2>
            <p className="text-on-surface-variant font-label-mono-sm text-xs">A single high-impact day - Date to be announced soon</p>
          </div>

          <div className="border-t border-outline-variant/40 divide-y divide-outline-variant/20 w-fit mx-auto">

            <div className="py-8 flex justify-start hover:bg-[#1C0309] px-4 transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <span className="font-label-mono-sm text-primary font-bold tracking-widest md:min-w-[200px] text-left">2:00 PM – 2:45 PM</span>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-headline-md font-bold text-white tracking-wide">01 - Registration &amp; Arrival</h3>
                  <p className="text-xs text-on-surface-variant font-body-sm mt-1">Participant check-in, badge collection &amp; networking warm-up</p>
                </div>
              </div>
            </div>

            <div className="py-8 flex justify-start hover:bg-[#1C0309] px-4 transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <span className="font-label-mono-sm text-primary font-bold tracking-widest md:min-w-[200px] text-left">2:45 PM – 3:00 PM</span>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-headline-md font-bold text-white tracking-wide">02 - Opening Ceremony</h3>
                  <p className="text-xs text-on-surface-variant font-body-sm mt-1">Welcome address &amp; agenda overview by AIDSL leadership</p>
                </div>
              </div>
            </div>

            <div className="py-8 flex justify-start hover:bg-[#1C0309] px-4 transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <span className="font-label-mono-sm text-primary font-bold tracking-widest md:min-w-[200px] text-left">3:00 PM – 4:45 PM</span>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-headline-md font-bold text-white tracking-wide">03 - Global Keynote Sessions</h3>
                  <p className="text-xs text-on-surface-variant font-body-sm mt-1">Thought leadership from globally recognised AI leaders</p>
                </div>
              </div>
            </div>

            <div className="py-8 flex justify-start hover:bg-[#1C0309] px-4 transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <span className="font-label-mono-sm text-primary font-bold tracking-widest md:min-w-[200px] text-left">5:00 PM – 6:10 PM</span>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-headline-md font-bold text-white tracking-wide">04 - Panel Discussions</h3>
                  <p className="text-xs text-on-surface-variant font-body-sm mt-1">Experts from industry, academia &amp; policy on critical AI challenges</p>
                </div>
              </div>
            </div>

            <div className="py-8 flex justify-start hover:bg-[#1C0309] px-4 transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <span className="font-label-mono-sm text-primary font-bold tracking-widest md:min-w-[200px] text-left">6:10 PM – 6:40 PM</span>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-headline-md font-bold text-white tracking-wide">05 - Innovation Showcase &amp; AI Forum</h3>
                  <p className="text-xs text-on-surface-variant font-body-sm mt-1">10 startup stalls, AI gallery &amp; roundtable discussions</p>
                  <div className="mt-2 text-xs font-label-mono-xs text-primary font-bold">
                    ↳ includes the AI Challenge 2026 National Final Showcase
                  </div>
                </div>
              </div>
            </div>

            <div className="py-8 flex justify-start hover:bg-[#1C0309] px-4 transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <span className="font-label-mono-sm text-primary font-bold tracking-widest md:min-w-[200px] text-left">6:40 PM – 9:00 PM</span>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-headline-md font-bold text-white tracking-wide">06 - Fellowship Gathering</h3>
                  <p className="text-xs text-on-surface-variant font-body-sm mt-1">Exclusive premium networking for speakers, partners &amp; investors</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-b border-outline-variant/30 bg-[#0A0103]">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="mb-14">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">06 // KEYNOTE VOICES</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white mb-4">
              MEET THE MINDS SHAPING AI
            </h2>
            <p className="text-on-surface-variant font-label-mono-sm text-xs uppercase tracking-widest">
              Speaker line-up announced soon.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Keynote / Global</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Keynote / Frontier</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Panelist / Industry</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Panelist / Academia</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Panelist / Policy</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Forum Moderator</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Startup Judge</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 flex flex-col items-center text-center group crimson-glow-card">
              <div className="w-24 h-24 bg-[#24040B] rounded-none border border-outline-variant/60 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent"></div>
                <span className="material-symbols-outlined text-outline text-3xl opacity-50 group-hover:text-primary transition-colors">person</span>
              </div>
              <span className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-1 font-bold">Keynote / Global</span>
              <span className="text-xs font-headline-md text-white font-medium">Speaker to be announced soon</span>
            </div>
          </div>


        </div>
      </section>

      <section className="py-24 md:py-32 border-b border-outline-variant/30 bg-[#0A0103] custom-radial-glow relative" id="register">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">07 // PASS SELECTION</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white mb-4">
              SECURE YOUR SEAT
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Strictly limited capacity for maximum depth and high-caliber interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto gap-8 items-stretch mb-12">

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 flex flex-col justify-between crimson-glow-card">
              <div>
                <div className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-2 font-bold">Member Privilege</div>
                <h3 className="text-lg font-headline-md font-bold uppercase text-white mb-4">IEEE MEMBER PASS</h3>
                <div className="text-2xl font-headline-xl font-bold text-white mb-6"><span className="text-base md:text-lg font-headline-md text-primary font-bold">Pricing to be announced soon</span></div>
                <ul className="space-y-4 text-xs text-on-surface-variant font-body-sm pb-8 border-b border-outline-variant/30 mb-8">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">Full-day access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">Keynotes &amp; panel discussions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">Innovation Showcase</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">Certificate of participation</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-4 bg-transparent border border-outline-variant/50 hover:border-primary text-white font-headline-md text-label-mono-sm uppercase tracking-widest transition-colors">
                Register
              </button>
            </div>

            <div className="p-8 bg-[#1C0309] border border-outline-variant/50 flex flex-col justify-between crimson-glow-card">
              <div>
                <div className="text-xs font-label-mono-xs uppercase tracking-widest text-primary mb-2 font-bold">General Admission</div>
                <h3 className="text-lg font-headline-md font-bold uppercase text-white mb-4">STANDARD DELEGATE PASS</h3>
                <div className="text-2xl font-headline-xl font-bold text-white mb-6"><span className="text-base md:text-lg font-headline-md text-white font-bold">Pricing to be announced soon</span></div>
                <ul className="space-y-4 text-xs text-white font-body-sm pb-8 border-b border-primary-container/40 mb-8">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">Everything in IEEE Member Pass</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">Networking sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">AI Forum roundtables</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="">Certificate of participation</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-4 bg-transparent border border-outline-variant/50 hover:border-primary text-white font-headline-md text-label-mono-sm uppercase tracking-widest transition-colors">
                Register
              </button>
            </div>

          </div>
          <div className="text-center">
            <span className="text-xs uppercase font-label-mono-xs tracking-widest text-on-surface-variant">Seats are limited · Registration dates to be announced soon</span>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-outline-variant/30 bg-[#0A0103]" id="partners">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
          <div className="mb-14">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">08 // ECOSYSTEM ALLIANCES</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white mb-4">
              OUR PARTNERS
            </h2>
          </div>

          <div className="space-y-12 mb-16">

            <div>
              <span className="text-[11px] font-label-mono-xs text-primary uppercase tracking-widest block mb-4 font-bold">STRATEGIC PARTNERS</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="h-24 bg-[#1C0309] border border-outline-variant/60 flex items-center justify-center font-headline-md text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary transition-colors">
                  <div className="flex items-center gap-2 opacity-50"><div className="w-5 h-5 bg-current rounded-sm"></div><span>LOGO</span></div>
                </div>
                <div className="h-24 bg-[#1C0309] border border-outline-variant/60 flex items-center justify-center font-headline-md text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary transition-colors">
                  <div className="flex items-center gap-2 opacity-50"><div className="w-5 h-5 bg-current rounded-sm"></div><span>LOGO</span></div>
                </div>
                <div className="h-24 bg-[#1C0309] border border-outline-variant/60 flex items-center justify-center font-headline-md text-xs uppercase tracking-widest text-on-surface-variant col-span-2 md:col-span-1 hover:border-primary transition-colors">
                  <div className="flex items-center gap-2 opacity-50"><div className="w-5 h-5 bg-current rounded-sm"></div><span>LOGO</span></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="text-[11px] font-label-mono-xs text-primary uppercase tracking-widest block mb-4 font-bold">GOLD PARTNERS</span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-[#1C0309] border border-outline-variant/50 flex items-center justify-center text-xs font-label-mono-sm text-on-surface-variant hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 opacity-40"><div className="w-4 h-4 bg-current rounded-sm"></div><span>LOGO</span></div>
                  </div>
                  <div className="h-16 bg-[#1C0309] border border-outline-variant/50 flex items-center justify-center text-xs font-label-mono-sm text-on-surface-variant hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 opacity-40"><div className="w-4 h-4 bg-current rounded-sm"></div><span>LOGO</span></div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[11px] font-label-mono-xs text-primary uppercase tracking-widest block mb-4 font-bold">TECHNOLOGY PARTNERS</span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-[#1C0309] border border-outline-variant/50 flex items-center justify-center text-xs font-label-mono-sm text-on-surface-variant hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 opacity-40"><div className="w-4 h-4 bg-current rounded-sm"></div><span>LOGO</span></div>
                  </div>
                  <div className="h-16 bg-[#1C0309] border border-outline-variant/50 flex items-center justify-center text-xs font-label-mono-sm text-on-surface-variant hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 opacity-40"><div className="w-4 h-4 bg-current rounded-sm"></div><span>LOGO</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="text-[11px] font-label-mono-xs text-primary uppercase tracking-widest block mb-4 font-bold">MEDIA PARTNERS</span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-14 bg-[#1C0309] border border-outline-variant/40 flex items-center justify-center text-[11px] font-label-mono-xs text-outline hover:border-primary transition-colors">
                    <div className="flex items-center gap-1.5 opacity-30"><div className="w-3 h-3 bg-current rounded-[2px]"></div><span>LOGO</span></div>
                  </div>
                  <div className="h-14 bg-[#1C0309] border border-outline-variant/40 flex items-center justify-center text-[11px] font-label-mono-xs text-outline hover:border-primary transition-colors">
                    <div className="flex items-center gap-1.5 opacity-30"><div className="w-3 h-3 bg-current rounded-[2px]"></div><span>LOGO</span></div>
                  </div>
                  <div className="h-14 bg-[#1C0309] border border-outline-variant/40 flex items-center justify-center text-[11px] font-label-mono-xs text-outline hover:border-primary transition-colors">
                    <div className="flex items-center gap-1.5 opacity-30"><div className="w-3 h-3 bg-current rounded-[2px]"></div><span>LOGO</span></div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[11px] font-label-mono-xs text-primary uppercase tracking-widest block mb-4 font-bold">COMMUNITY PARTNERS</span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-14 bg-[#1C0309] border border-outline-variant/40 flex items-center justify-center text-[11px] font-label-mono-xs text-outline hover:border-primary transition-colors">
                    <div className="flex items-center gap-1.5 opacity-30"><div className="w-3 h-3 bg-current rounded-[2px]"></div><span>LOGO</span></div>
                  </div>
                  <div className="h-14 bg-[#1C0309] border border-outline-variant/40 flex items-center justify-center text-[11px] font-label-mono-xs text-outline hover:border-primary transition-colors">
                    <div className="flex items-center gap-1.5 opacity-30"><div className="w-3 h-3 bg-current rounded-[2px]"></div><span>LOGO</span></div>
                  </div>
                  <div className="h-14 bg-[#1C0309] border border-outline-variant/40 flex items-center justify-center text-[11px] font-label-mono-xs text-outline hover:border-primary transition-colors">
                    <div className="flex items-center gap-1.5 opacity-30"><div className="w-3 h-3 bg-current rounded-[2px]"></div><span>LOGO</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#1C0309] border border-outline-variant/50 shadow-[0_0_24px_rgba(255,30,86,0.12)]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <h3 className="text-lg font-headline-md font-bold uppercase text-white mb-2">BECOME A PARTNER</h3>
                <p className="text-xs text-on-surface-variant mb-4">Elevate your brand at Sri Lanka's benchmark machine intelligence forum.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#24040B] text-[11px] font-label-mono-xs uppercase text-primary border border-primary-container/30">Brand Visibility</span>
                  <span className="px-3 py-1 bg-[#24040B] text-[11px] font-label-mono-xs uppercase text-primary border border-primary-container/30">Thought Leadership</span>
                  <span className="px-3 py-1 bg-[#24040B] text-[11px] font-label-mono-xs uppercase text-primary border border-primary-container/30">Direct Access to Leaders</span>
                  <span className="px-3 py-1 bg-[#24040B] text-[11px] font-label-mono-xs uppercase text-primary border border-primary-container/30">Business Opportunities</span>
                  <span className="px-3 py-1 bg-[#24040B] text-[11px] font-label-mono-xs uppercase text-primary border border-primary-container/30">Talent Acquisition</span>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <button className="px-6 py-3 bg-[#24040B] hover:bg-[#3F0615] border border-primary-container/60 text-white font-label-mono-sm text-label-mono-sm uppercase tracking-widest transition-colors">
                  Download Sponsorship Deck
                </button>
                <a className="px-6 py-3 bg-primary-container text-white font-label-mono-sm text-label-mono-sm uppercase tracking-widest font-bold hover:bg-[#FF2A55] crimson-btn-glow transition-colors" href="#contact">
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <section className="py-24 border-b border-outline-variant/30 bg-[#0A0103]" id="faq">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin">
          <div className="mb-14 text-center">
            <span className="text-primary font-label-mono-xs text-label-mono-xs uppercase tracking-widest block mb-2 font-bold">09 // CLARIFICATIONS</span>
            <h2 className="text-2xl md:text-4xl font-headline-xl font-bold uppercase tracking-tight text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>


          <div className="space-y-3" id="faq-container">
            {[
              { "q": "What is AIDSL 2026?", "a": "AIDSL 2026 is the flagship national gathering convened by AI DRIVEN SRI LANKA and IEEE YPSL, connecting global and local machine intelligence pioneers, researchers, founders, and policy leaders for one transformative day in Colombo." },
              { "q": "When and where is it happening?", "a": "AIDSL 2026 will take place in Colombo, Sri Lanka. Exact dates and venue will be announced soon. Detailed hall directions and delegate briefings will be dispatched to confirmed ticket holders." },
              { "q": "Who can attend?", "a": "The event is structured for industry professionals, researchers, startup founders, institutional allocators, policymakers, and motivated students actively pursuing AI development." },
              { "q": "How much does it cost / is registration free?", "a": "Pass pricing is structured across two tiers: IEEE Member Pass and Standard Delegate Pass. Official pricing and registration deadlines will be announced soon. Selected fellowship opportunities exist for demonstrated research excellence." },
              { "q": "What's included in my pass?", "a": "All passes cover stage access, innovation showcase access, curated catering, official delegate kits, and institutional certificates. Higher tier passes include exclusive roundtable sessions and private fellowship lounges." }
            ].map((faq, i) => (
              <div key={i} className="border border-outline-variant/50 bg-[#1C0309]">
                <button onClick={() => toggleFaq(i)} className="faq-toggle w-full p-5 text-left flex justify-between items-center text-white font-headline-md font-medium text-sm">
                  <span>{faq.q}</span>
                  <span className="text-primary text-xl transition-transform duration-200">
                    {openFaqIndex === i ? '-' : '+'}
                  </span>
                </button>
                <div className={`faq-content px-5 pb-5 text-sm text-on-surface-variant font-body-sm leading-relaxed border-t border-outline-variant/30 pt-3 ${openFaqIndex === i ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-28 md:py-36 bg-[#060002] border-b border-outline-variant/30 relative hero-grid-pattern text-center overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline-xl font-bold uppercase tracking-tight text-white mb-6 leading-tight">
            THE FUTURE OF <span className="text-primary drop-shadow-[0_0_20px_rgba(255,30,86,0.6)]">AI</span> IN <span className="text-primary drop-shadow-[0_0_20px_rgba(255,30,86,0.6)]">SRI LANKA</span> STARTS HERE.
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto mb-10 font-body-md leading-relaxed">
            Join the innovators, researchers, founders and leaders building the country's AI future - in one room, for one day.
          </p>
          <a className="inline-block px-10 py-5 bg-primary-container text-white font-headline-md text-label-mono-sm font-bold uppercase tracking-widest hover:bg-[#FF2A55] crimson-btn-glow transition-all" href="#register">
            Register Now
          </a>
        </div>

      </section>

      <div className="bg-[#0A0103] text-[#FFEBF0] border-t border-outline-variant/30 py-16">
        <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-outline-variant/30 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#24040B] border border-primary-container/40 text-primary uppercase font-label-mono-xs text-label-mono-xs tracking-widest mb-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="">ORGANISATION &amp; ECOSYSTEM</span>
              </div>
              <h2 className="text-xl md:text-3xl font-headline-xl font-bold text-white uppercase tracking-tight">
                OUR LEADERSHIP
              </h2>
            </div>
            <p className="text-xs text-on-surface-variant max-w-md font-body-sm leading-relaxed">
              Meet the individuals driving the AI-Driven Sri Lanka 2026 initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Chairperson */}
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col items-center text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mb-4 bg-[#24040B] rounded-none border border-outline-variant/60 relative overflow-hidden">
                <Image src={geenothPhoto} alt="Geenoth Viksura" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-headline-md font-bold text-white mb-2 uppercase">Geenoth Viksura</h3>
              <p className="text-xs font-label-mono-sm uppercase text-primary font-bold mb-4 leading-relaxed">
                Chairperson <br /> AIDSL’26
              </p>
              <div className="w-full pt-4 border-t border-outline-variant/30 text-xs text-on-surface-variant font-body-sm flex flex-col gap-2 mt-auto">
                <a href="tel:0704448484" className="hover:text-primary transition-colors block">070 444 8484</a>
                <a href="mailto:gvwgeenoth365@gmail.com" className="hover:text-primary transition-colors block break-all">gvwgeenoth365@gmail.com</a>
              </div>
            </div>

            {/* Secretary */}
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col items-center text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mb-4 bg-[#24040B] rounded-none border border-outline-variant/60 relative overflow-hidden">
                <Image src={hirushiPhoto} alt="Hirushi Gamage" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-headline-md font-bold text-white mb-2 uppercase">Hirushi Gamage</h3>
              <p className="text-xs font-label-mono-sm uppercase text-primary font-bold mb-4 leading-relaxed">
                Secretary | AIDSL’26
              </p>
              <div className="w-full pt-4 border-t border-outline-variant/30 text-xs text-on-surface-variant font-body-sm flex flex-col gap-2 mt-auto">
                <a href="tel:60464199" className="hover:text-primary transition-colors block">60464199</a>
                <a href="mailto:hirushigamagect@gmail.com" className="hover:text-primary transition-colors block break-all">hirushigamagect@gmail.com</a>
              </div>
            </div>

            {/* Vice-Chairperson Finance */}
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col items-center text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mb-4 bg-[#24040B] rounded-none border border-outline-variant/60 relative overflow-hidden">
                <Image src={lohansaPhoto} alt="Lohansa Munasinghe" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-headline-md font-bold text-white mb-2 uppercase">Lohansa Munasinghe</h3>
              <p className="text-xs font-label-mono-sm uppercase text-primary font-bold mb-4 leading-relaxed">
                Vice-Chairperson <br /> Finance & Partnerships | AIDSL’26
              </p>
              <div className="w-full pt-4 border-t border-outline-variant/30 text-xs text-on-surface-variant font-body-sm flex flex-col gap-2 mt-auto">
                <a href="tel:0712007683" className="hover:text-primary transition-colors block">071 200 7683</a>
                <a href="mailto:lohansamunasinghe3@gmail.com" className="hover:text-primary transition-colors block break-all">lohansamunasinghe3@gmail.com</a>
              </div>
            </div>

            {/* Vice-Chairperson Program */}
            <div className="p-6 bg-[#1C0309] border border-outline-variant/50 crimson-glow-card transition-all flex flex-col items-center text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mb-4 bg-[#24040B] rounded-none border border-outline-variant/60 relative overflow-hidden">
                <Image src={linukPhoto} alt="Linuk Perera" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-headline-md font-bold text-white mb-2 uppercase">Linuk Perera</h3>
              <p className="text-xs font-label-mono-sm uppercase text-primary font-bold mb-4 leading-relaxed">
                Vice-Chairperson <br /> Program & Delivery | AIDSL’26
              </p>
              <div className="w-full pt-4 border-t border-outline-variant/30 text-xs text-on-surface-variant font-body-sm flex flex-col gap-2 mt-auto">
                <a href="tel:0773744055" className="hover:text-primary transition-colors block">077 374 4055</a>
                <a href="mailto:linukperera402@gmail.com" className="hover:text-primary transition-colors block break-all">linukperera402@gmail.com</a>
              </div>
            </div>

          </div>


          <div className="p-8 bg-[#140206] border border-outline-variant/50 mt-16 mb-8 md:mt-24 md:mb-12" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase font-label-mono-xs tracking-widest text-primary block mb-2 font-bold">INQUIRIES &amp; ENGAGEMENT</span>
                <h3 className="text-xl font-headline-xl font-bold text-white uppercase mb-3">GET IN TOUCH</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                  Have inquiries regarding the AIDSL 2026 summit, sponsorship deck, or community initiatives? Reach our coordination desk directly.
                </p>
                <div className="space-y-2 text-xs font-label-mono-sm">
                  <p className="text-white"><span className="text-primary font-bold">EMAIL:</span> aidrivensrilanka@gmail.com</p>
                  <p className="text-white"><span className="text-primary font-bold">PHONE:</span> +94 70 444 8484</p>
                  <p className="text-on-surface-variant"><span className="text-primary font-bold">LOCATION:</span> Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={(e) => { e.preventDefault(); }}>
                  <div>
                    <input className="w-full bg-[#1C0309] border border-outline-variant/60 focus:border-primary text-white px-3 py-2.5 text-xs rounded-none focus:outline-none placeholder:text-on-surface-variant/50" placeholder="First &amp; Last Name *" required={true} type="text" />
                  </div>
                  <div>
                    <input className="w-full bg-[#1C0309] border border-outline-variant/60 focus:border-primary text-white px-3 py-2.5 text-xs rounded-none focus:outline-none placeholder:text-on-surface-variant/50" placeholder="Email Address *" required={true} type="email" />
                  </div>
                  <div className="sm:col-span-2">
                    <input className="w-full bg-[#1C0309] border border-outline-variant/60 focus:border-primary text-white px-3 py-2.5 text-xs rounded-none focus:outline-none placeholder:text-on-surface-variant/50" placeholder="Organisation / Company" type="text" />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea className="w-full bg-[#1C0309] border border-outline-variant/60 focus:border-primary text-white p-3 text-xs rounded-none focus:outline-none placeholder:text-on-surface-variant/50" placeholder="Message or Partnership Query..." rows={3}></textarea>
                  </div>
                  <div className="sm:col-span-2 flex items-center justify-between">
                    <span className="text-[10px] text-on-surface-variant/70">For AIDSL 2026 delegate &amp; partner alignments.</span>
                    <button className="px-6 py-2.5 bg-primary-container text-white font-label-mono-sm text-xs uppercase tracking-widest font-bold hover:bg-[#FF2A55] crimson-btn-glow transition-all" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full bg-[#050001] border-t border-outline-variant/40 text-on-surface-variant font-body-sm relative z-10 pt-16 pb-12 mt-auto">
          <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-outline-variant/30">
              <div className="lg:col-span-4 space-y-4">
                <a className="text-headline-md font-headline-md tracking-wider uppercase text-white flex items-center gap-2" href="#!">
                  <span className="inline-block w-2.5 h-6 bg-primary-container shadow-[0_0_12px_#FF1E56]"></span>
                  <span className="text-base font-bold">AI DRIVEN SRI LANKA 2026</span>
                </a>
                <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm">
                  AIDSL 2026 · Date to be announced soon · Colombo, Sri Lanka - An initiative by IEEE Young Professionals Sri Lanka.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C0309] border border-outline-variant/50 text-[11px] font-label-mono-xs uppercase tracking-widest text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping inline-block"></span>
                    Empowering Sri Lanka's AI Future
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2 sm:col-span-1">
                <h4 className="text-xs font-label-mono-xs uppercase tracking-widest text-white font-bold mb-4">AIDSL 2026</h4>
                <ul className="space-y-2.5 text-xs font-label-mono-sm">
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#about">About</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#programme">Programme</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#experience">Experience</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#register">Register</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#partners">Partners</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className="lg:col-span-2 sm:col-span-1">
                <h4 className="text-xs font-label-mono-xs uppercase tracking-widest text-white font-bold mb-4">ORGANISATION</h4>
                <ul className="space-y-2.5 text-xs font-label-mono-sm">
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="/events/past-events">Our Past Events</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="/about-us">Milestones</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="/events">2026 Programs</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="/blogs">Latest Insights</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="/our-team">Leadership &amp; Team</a></li>
                  <li className=""><a className="text-on-surface-variant hover:text-primary transition-colors block" href="#contact">Contact Desk</a></li>
                </ul>
              </div>
              <div className="lg:col-span-4 space-y-4">
                <h4 className="text-xs font-label-mono-xs uppercase tracking-widest text-white font-bold mb-4">CONNECT &amp; COMMUNITY</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Follow AI-Driven Sri Lanka for official speaker releases, ticket alerts, and national hackathon announcements.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a className="px-3 py-2 bg-[#1C0309] border border-outline-variant/50 hover:border-primary text-xs font-label-mono-xs uppercase tracking-wider text-on-surface hover:text-primary transition-colors flex items-center gap-1.5" href="https://www.linkedin.com/company/ai-driven-sri-lanka/" target="_blank">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>LinkedIn
                  </a>
                  <a className="px-3 py-2 bg-[#1C0309] border border-outline-variant/50 hover:border-primary text-xs font-label-mono-xs uppercase tracking-wider text-on-surface hover:text-primary transition-colors flex items-center gap-1.5" href="https://www.instagram.com/aidrivensrilanka/" target="_blank">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Instagram
                  </a>
                  <a className="px-3 py-2 bg-[#1C0309] border border-outline-variant/50 hover:border-primary text-xs font-label-mono-xs uppercase tracking-wider text-on-surface hover:text-primary transition-colors flex items-center gap-1.5" href="https://www.facebook.com/aidrivensrilanka" target="_blank">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Facebook
                  </a>
                  <a className="px-3 py-2 bg-[#1C0309] border border-outline-variant/50 hover:border-primary text-xs font-label-mono-xs uppercase tracking-wider text-on-surface hover:text-primary transition-colors flex items-center gap-1.5" href="#contact">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-label-mono-xs w-full">
              <div className="text-on-surface-variant/70 text-center w-full">© 2026 AI DRIVEN SRI LANKA. All rights reserved. Co-organized with IEEE Young Professionals Sri Lanka.</div>
            </div>
          </div>
        </footer>
      </div>
    </div >
  );
}
