import { aiSummit2026ProgramModel } from "@/lib/data/events";
import {
  Globe, Handshake, Lightbulb, Rocket, Building2, FlaskConical,
  DollarSign, Landmark, GraduationCap, Mic2, MessageSquare, Link2,
  Eye, Megaphone, CalendarDays,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const programModelIcons: LucideIcon[] = [Mic2, MessageSquare, Globe, Lightbulb, Eye, Handshake, DollarSign];

const ProblemItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-white/80">
    <span className="mt-1 shrink-0 text-white/50">•</span>
    <span>{text}</span>
  </li>
);

const SolutionItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-white/80">
    <span className="mt-1 shrink-0 text-primary">✓</span>
    <span>{text}</span>
  </li>
);

const Page = () => {
  const introCards: { Icon: LucideIcon; label: string }[] = [
    { Icon: Globe, label: "Sri Lanka's Premier AI Gathering" },
    { Icon: Handshake, label: "Cross-sector Collaboration" },
    { Icon: Lightbulb, label: "Global & Local Expert Insights" },
    { Icon: Rocket, label: "Innovation & Startup Showcases" },
  ];

  const audienceCards: { Icon: LucideIcon; label: string }[] = [
    { Icon: Building2, label: "Industry Leaders & Professionals" },
    { Icon: FlaskConical, label: "AI Researchers & Academics" },
    { Icon: Rocket, label: "Startup Founders & Innovators" },
    { Icon: DollarSign, label: "Investors & Venture Capitalists" },
    { Icon: Landmark, label: "Policymakers & Government Representatives" },
    { Icon: GraduationCap, label: "Students & Early-career Professionals" },
  ];

  const partnerCards: { Icon: LucideIcon; title: string; desc: string }[] = [
    { Icon: Megaphone, title: "Brand Visibility", desc: "Position your brand at the forefront of Sri Lanka's AI movement, gaining visibility across a highly targeted and influential audience." },
    { Icon: MessageSquare, title: "Thought Leadership", desc: "Contribute to high-level discussions and establish your organization as a thought leader in the AI space." },
    { Icon: Handshake, title: "Direct Access to Leaders", desc: "Get direct access to industry leaders, policymakers, investors, and the brightest emerging talent in Sri Lanka's AI ecosystem." },
    { Icon: Link2, title: "Business Opportunities", desc: "Build meaningful partnerships and unlock new business opportunities with the most relevant players in the industry." },
    { Icon: Eye, title: "Talent Acquisition", desc: "Connect with high-potential professionals and identify the talent that will drive your organization forward." },
  ];

  return (
    <main className="customer-border container mx-auto flex flex-col items-center justify-center gap-20 px-2.5 pt-32 pb-24 md:px-10 lg:pt-40">

      {/* Slide 7 - Event Introduction */}
      <div className="flex w-full flex-col gap-6 rounded-[40px] bg-[#191919B8] p-7.5">
        <div className="font-elemental-end text-primary text-center text-[40px] uppercase md:text-left">
          AI Driven Sri Lanka 2026
        </div>
        <p className="text-lg text-white/85 leading-relaxed">
          AI Driven Sri Lanka 2026 is the flagship national gathering shaping the conversation around Sri Lanka's AI future. The summit brings together global and local AI pioneers, industry leaders, policymakers, researchers, startups, and emerging talent to exchange ideas, showcase breakthrough innovations, and unlock meaningful collaborations.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {introCards.map(({ Icon, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#191919] border border-white/10 px-4 py-5 text-center"
            >
              <Icon className="h-7 w-7 text-primary" />
              <span className="text-sm text-white/70">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          <div className="flex items-center gap-2">
            <span className="font-elemental-end text-primary text-3xl">200+</span>
            <span className="text-white/70 text-base">Delegates</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-elemental-end text-primary text-3xl">6+</span>
            <span className="text-white/70 text-base">Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-elemental-end text-primary text-3xl">12+</span>
            <span className="text-white/70 text-base">AI Leaders</span>
          </div>
        </div>
      </div>

      {/* Slide 8 - Why AI Driven Sri Lanka */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          why <span className="text-primary">AI DRIVEN SRI LANKA</span>?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#1c1c1c] border border-red-500/20 p-6">
            <h3 className="mb-4 text-lg font-semibold text-red-400 uppercase tracking-wide">
              The Problem
            </h3>
            <ul className="flex flex-col gap-3">
              <ProblemItem text="Sri Lanka's AI talent lacks direct exposure to real industry environments" />
              <ProblemItem text="No single platform connecting academia, industry, startups & policymakers" />
              <ProblemItem text="Limited access to global networks, investors & cross-sector collaborators" />
            </ul>
          </div>
          <div className="rounded-3xl bg-[#1c1c1c] border border-primary/20 p-6">
            <h3 className="mb-4 text-lg font-semibold text-primary uppercase tracking-wide">
              Our Solution
            </h3>
            <ul className="flex flex-col gap-3">
              <SolutionItem text="Brings together academia, industry, startups, and policymakers in one high-impact event" />
              <SolutionItem text="Bridges the gap and builds the connections Sri Lanka needs to lead in AI" />
              <SolutionItem text="Creates a platform for global network access and cross-sector collaboration" />
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 9 - Target Audience */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          target <span className="text-primary">audience</span>
        </h2>
        <p className="text-white/70 -mt-2">
          AI Driven Sri Lanka 2026 will attract a diverse and high-impact audience, including:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audienceCards.map(({ Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl bg-[#191919B8] border border-white/10 px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <Icon className="h-6 w-6 shrink-0 text-primary" />
              <span className="text-white/85 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 10 - Program Model */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          program <span className="text-primary">model</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiSummit2026ProgramModel.map((item, i) => {
            const Icon = programModelIcons[i] ?? Lightbulb;
            return (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-2xl bg-[#191919B8] border border-white/10 p-6 hover:border-primary/40 transition-colors"
              >
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-semibold text-white">{item.title}</span>
                <p className="text-base text-white/65">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-[#1c1c1c] border border-primary/20 p-6 mt-2">
          <h3 className="mb-4 text-base font-semibold text-primary uppercase tracking-wide">
            Participant Benefits
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Gain strategic insights from global AI pioneers and industry visionaries",
              "Experience breakthrough AI innovations and discover tomorrow's leading startups",
              "Get exclusive access to the Fellowship Gathering for informal time with speakers and investors",
              "Influence tomorrow through high-impact discussions with policymakers",
              "Build real connections with industry leaders and peers",
              "Gain career and talent visibility with companies actively looking for AI talent",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80">
                <span className="mt-1 shrink-0 text-primary font-bold">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Slide 11 - Program Timeline */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          program <span className="text-primary">timeline</span>
        </h2>
        <div className="w-full rounded-[30px] bg-[#191919B8] p-7.5 shadow-xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <p className="font-elemental-end text-primary text-xl uppercase tracking-wider">October 2026</p>
              <p className="text-base text-white/60">AI Driven Sri Lanka 2026</p>
            </div>
          </div>

          <div className="relative flex flex-col gap-5 pl-4 md:pl-0">
            {/* The vertical separator line */}
            <div className="absolute left-[8px] md:left-[219px] top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-primary/80 via-primary/40 to-transparent"></div>

            {[
              { time: "2:00 PM – 2:45 PM", phase: "Registration & Networking", detail: "Welcome, registration, startup showcase" },
              { time: "2:45 PM – 3:00 PM", phase: "Opening Ceremony", detail: "Welcome addresses & ceremonial opening" },
              { time: "3:00 PM – 4:45 PM", phase: "Global Keynotes & Expert Sessions", detail: "Visionary AI leaders unveiling the technologies shaping tomorrow." },
              { time: "5:00 PM – 6:10 PM", phase: "Executive Panel Discussion", detail: "High-impact conversations driving the future of AI policy, industry, and innovation." },
              { time: "6:10 PM – 6:40 PM", phase: "Recognition & Closing", detail: "Partner appreciation, event highlights & official closing" },
              { time: "6:40 PM – 9:00 PM", phase: "Networking Session", detail: "Networking among speakers, partners & delegates" },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center w-full">
                {/* Time Block */}
                <div className="ml-6 md:ml-0 md:w-[200px] shrink-0">
                  <div className="flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 py-4 font-semibold text-white/80 shadow-md">
                    {item.time}
                  </div>
                </div>

                {/* Responsive Dot on the line */}
                <div className="hidden md:block absolute left-[214px] top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_10px_rgba(239,68,68,0.8)] z-10"></div>
                <div className="md:hidden absolute left-[3px] top-8 h-3.5 w-3.5 rounded-full bg-primary z-10"></div>

                {/* Content Block */}
                <div className="ml-6 md:ml-0 flex-1 w-[calc(100%-1.5rem)] md:w-auto">
                  <div className="group flex flex-col justify-center rounded-xl bg-white/5 border border-white/5 px-6 py-5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                    <p className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.phase}</p>
                    <p className="text-[15px] text-white/60 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 12 - Strategic Value for Partners */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          strategic value for <span className="text-primary">partners</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partnerCards.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-2xl bg-[#191919B8] border border-white/10 p-6 hover:border-primary/40 transition-colors"
            >
              <Icon className="h-6 w-6 text-primary" />
              <span className="font-semibold text-white">{title}</span>
              <p className="text-base text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </div>


    </main>
  );
};

export default Page;
