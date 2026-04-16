import Image from "next/image";
import aiChallengeLogo from "@/assets/AI-challenge-logo.png";
import {
  NewChallengeEventsEditionsData as challengeEventsEditionsData,
  eventsFaqData,
  aiChallenge2026Phases,
  aiChallenge2026Timeline,
} from "@/lib/data";
import EditionCard from "@/components/Events/EditionCard";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/Accordion/Accordion";

const ProblemItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-white/80">
    <span className="mt-1 shrink-0 text-red-400">✕</span>
    <span>{text}</span>
  </li>
);

const SolutionItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-white/80">
    <span className="mt-1 shrink-0 text-primary">✓</span>
    <span>{text}</span>
  </li>
);

const phaseModeColor: Record<string, string> = {
  Online: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Hybrid / Physical Preferred": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Physical: "bg-primary/20 text-primary border-primary/30",
};

const Page = () => {
  return (
    <main className="customer-border container mx-auto flex flex-col items-center justify-center gap-20 px-[10px] py-30 md:px-[40px]">

      {/* Slide 7 — AI Challenge 2026 Introduction */}
      <div className="flex w-full flex-col gap-6 rounded-[40px] bg-[#191919B8] p-7.5">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="font-elemental-end text-primary text-[36px] uppercase leading-none md:text-[44px]">
              AI Challenge 2026
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-white/40">
              Sri Lanka Artificial Intelligence Challenge
            </p>
            <div className="flex flex-col gap-3 text-lg text-white/85 leading-relaxed">
              <p>
                AI Challenge 2026 is a national-level AI innovation program designed to develop
                practical, measurable, real-world AI solutions. Unlike ordinary hackathons, this
                challenge follows a structured, multi-phase model with mentorship, adversarial
                testing, refinement cycles, and a physical final round.
              </p>
              <p className="font-medium text-white">
                This is Sri Lanka&apos;s most comprehensive and impact-focused AI competition,
                bridging academia, industry, and innovation.
              </p>
            </div>
          </div>
          <Image
            src={aiChallengeLogo}
            alt="Sri Lanka AI Challenge"
            className="hidden shrink-0 drop-shadow-[0_0_24px_rgba(255,91,60,0.35)] md:block md:w-44"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "3-Week", label: "National AI Innovation Challenge" },
            { value: "Hybrid", label: "Online + Physical Model" },
            { value: "Summit", label: "Finalists Showcased at AIDSL Summit 2026" },
            { value: "Real", label: "Deployable AI Solutions" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-2xl bg-[#191919] border border-white/10 px-4 py-5 text-center"
            >
              <span className="font-elemental-end text-primary text-2xl md:text-3xl">{stat.value}</span>
              <span className="mt-1 text-xs text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 8 — The Challenge & Our Solution */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          the <span className="text-primary">challenge</span> &amp; our solution
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#1c1c1c] border border-red-500/20 p-6">
            <h3 className="mb-4 text-lg font-semibold text-red-400 uppercase tracking-wide">
              The Problem
            </h3>
            <ul className="flex flex-col gap-3">
              <ProblemItem text="Hackathons create one-off, incomplete ideas with no real-world usability" />
              <ProblemItem text="Students lack real-world product-building experience" />
              <ProblemItem text="Companies struggle to find practical AI problem-solving skills beyond theory" />
              <ProblemItem text="Need for structured, measurable innovation" />
            </ul>
          </div>
          <div className="rounded-3xl bg-[#1c1c1c] border border-primary/20 p-6">
            <h3 className="mb-3 text-lg font-semibold text-primary uppercase tracking-wide">
              Our Solution
            </h3>
            <p className="mb-4 text-sm text-white/60">
              AI Challenge introduces a research-backed 4-phase innovation framework that trains
              participants to:
            </p>
            <ul className="flex flex-col gap-3">
              <SolutionItem text="Frame problems clearly" />
              <SolutionItem text="Build real prototypes" />
              <SolutionItem text="Defend ideas under challenge" />
              <SolutionItem text="Patch, refine, and test" />
              <SolutionItem text="Demonstrate measurable real-world impact" />
            </ul>
            <p className="mt-4 text-sm text-white/60 italic">
              This method produces industry-ready solutions and industry-ready talent.
            </p>
          </div>
        </div>
      </div>

      {/* Slide 9 — Target Audience */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          target <span className="text-primary">audience</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🧠", label: "AI/ML Undergraduates & Postgraduates" },
            { icon: "💻", label: "Engineering, Computer Science & ICT Students" },
            { icon: "🚀", label: "Early-career AI Practitioners" },
            { icon: "⚙️", label: "Tech Enthusiasts Capable of Prototyping" },
            { icon: "🔬", label: "University Research Teams & Innovation Clubs" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl bg-[#191919B8] border border-white/10 px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <span className="text-3xl shrink-0">{item.icon}</span>
              <span className="text-white/85 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 10 — Program Model (4-Phase) */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          program <span className="text-primary">model</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {aiChallenge2026Phases.map((phase, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-3xl bg-[#191919B8] border border-white/10 p-6"
            >
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <span className="font-semibold text-white leading-snug flex-1">
                  {phase.phase}
                </span>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${phaseModeColor[phase.mode] ?? "bg-white/10 text-white/60 border-white/20"}`}
                >
                  {phase.mode}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {phase.activities.map((act, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1 shrink-0 text-primary text-xs">●</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 11 — Programme Timeline */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          programme <span className="text-primary">timeline</span>
        </h2>
        <div className="w-full rounded-[30px] bg-[#191919B8] p-7.5">
          {/* Mobile: vertical */}
          <ol className="flex flex-col gap-0 lg:hidden">
            {aiChallenge2026Timeline.map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-black font-bold text-xs">
                    {i + 1}
                  </div>
                  {i < aiChallenge2026Timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/40 my-1" />
                  )}
                </div>
                <div className="pb-6 pt-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.period}</span>
                  <ul className="mt-1 flex flex-col gap-1">
                    {item.items.map((txt, j) => (
                      <li key={j} className="text-xs text-white/60 leading-snug">{txt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          {/* Desktop: horizontal */}
          <div className="hidden lg:flex w-full items-start">
            {aiChallenge2026Timeline.map((item, i) => (
              <div key={i} className="flex flex-1 min-w-0 flex-col items-center">
                <div className="flex w-full items-center">
                  <div className={`h-0.5 flex-1 ${i === 0 ? "invisible" : "bg-primary/40"}`} />
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-black font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className={`h-0.5 flex-1 ${i === aiChallenge2026Timeline.length - 1 ? "invisible" : "bg-primary/40"}`} />
                </div>
                <div className="mt-4 flex flex-col items-center text-center px-1 w-full">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {item.period}
                  </span>
                  <ul className="mt-2 flex flex-col gap-1">
                    {item.items.map((txt, j) => (
                      <li key={j} className="text-xs text-white/60 leading-snug">{txt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 12 — Impact for Participants */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          impact for <span className="text-primary">participants</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "🛠", text: "Practical end-to-end AI product development skills" },
            { icon: "🔬", text: "Experience in model robustness, testing, and refinement" },
            { icon: "🛡", text: "Ability to defend solutions under pressure" },
            { icon: "🤝", text: "Mentorship from industry and domain experts" },
            { icon: "📊", text: "Real-world validation & measurable outcomes" },
            { icon: "🏅", text: "National recognition and certification from IEEE" },
            { icon: "🎯", text: "Direct recruitment visibility to partner companies" },
            { icon: "📁", text: "High-value portfolio-ready project" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl bg-[#191919B8] border border-white/10 p-5"
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <p className="text-sm text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 13 — Value Proposition for Partners */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          value for <span className="text-primary">partners</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🎯",
              title: "Access Top AI Talent",
              desc: "Gain unmatched access to Sri Lanka's top AI talent through a highly competitive, multi-phase innovation challenge.",
            },
            {
              icon: "🏆",
              title: "Strengthen Employer Brand",
              desc: "Align with a national-level, IEEE-backed AI competition recognized across universities.",
            },
            {
              icon: "💡",
              title: "Position as Innovation Leader",
              desc: "Showcase your commitment to building real, measurable AI solutions and Sri Lanka's AI growth.",
            },
            {
              icon: "📣",
              title: "Wide Network Exposure",
              desc: "Gain visibility across IEEE and AIDSL's student and tech networks.",
            },
            {
              icon: "🌱",
              title: "Build Long-term Goodwill",
              desc: "Support a program that directly uplifts AI education and empowers future innovators.",
            },
            {
              icon: "🌍",
              title: "Drive CSR Impact",
              desc: "Measurable CSR aligned with SDG 17 through education, youth development, and national AI capacity building.",
            },
            {
              icon: "🔗",
              title: "Strengthen Tech-Community Influence",
              desc: "Mentor teams, judge final rounds, and demonstrate your organization's AI expertise.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-2xl bg-[#191919B8] border border-white/10 p-6 hover:border-primary/40 transition-colors"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="font-semibold text-white">{item.title}</span>
              <p className="text-sm text-white/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="flex w-full flex-col gap-10">
        <p className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          fREquEntly <span className="text-primary">AsKED</span> QuEstioNs
        </p>
        <AccordionRoot
          allowMultiple={true}
          className="mx-auto grid gap-x-2 gap-y-0 xl:grid-cols-2 w-full"
          variant="splitted"
        >
          {eventsFaqData.map((item) => (
            <AccordionItem
              key={item.value}
              className="h-fit self-start rounded-none bg-[#1c1c1c]"
            >
              <AccordionItemTrigger value={item.value}>
                <AccordionItemHeader value={item.value}>
                  <span className="flex-1 text-white">{item.title}</span>
                </AccordionItemHeader>
              </AccordionItemTrigger>
              <AccordionItemContent value={item.value}>
                <p className="text-slate-200">{item.content}</p>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>

      {/* Previous Editions */}
      <div className="flex w-full flex-col justify-center gap-10">
        <h3 className="section-header">
          our <span className="text-primary">previous editions</span>
        </h3>
        {challengeEventsEditionsData.map((editions, i) => (
          <EditionCard
            key={i}
            title={editions.title}
            desc={editions.desc}
            data={editions.data}
            imgs={editions.imgs}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;
