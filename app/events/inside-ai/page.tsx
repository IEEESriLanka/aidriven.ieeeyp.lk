import Image from "next/image";
import insideAILogo from "@/assets/Inside-ai-logo.png";
import { insideAIFaqData, insideAIProgramTimelineData } from "@/lib/data/events";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/Accordion/Accordion";
import {
  FlaskConical, Factory, Lightbulb, Handshake, FolderOpen, Rocket,
  GraduationCap, BookOpen, Briefcase, Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl bg-[#191919] border border-white/10 px-6 py-5 text-center">
    <span className="font-elemental-end text-primary text-3xl md:text-4xl">{value}</span>
    <span className="mt-1 text-base text-white/70">{label}</span>
  </div>
);

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
  const impactCards: { Icon: LucideIcon; text: string }[] = [
    { Icon: FlaskConical, text: "Gain hands-on experience with real AI tools and workflows" },
    { Icon: Factory, text: "Understand how AI is applied in industry environments" },
    { Icon: Lightbulb, text: "Work on practical challenges and case studies" },
    { Icon: Handshake, text: "Interact directly with industry professionals" },
    { Icon: FolderOpen, text: "Build portfolio-ready projects" },
    { Icon: Rocket, text: "Access career and internship opportunities" },
  ];

  const audienceCards: { Icon: LucideIcon; label: string; sub: string }[] = [
    { Icon: GraduationCap, label: "Final Year Undergraduates", sub: "CS, IT, Engineering, Data Science" },
    { Icon: BookOpen, label: "Postgraduates", sub: "Advanced study & research" },
    { Icon: Briefcase, label: "Early-career professionals", sub: "First steps in AI industry" },
    { Icon: Zap, label: "AI & tech enthusiasts", sub: "Passionate self-learners" },
  ];

  return (
    <main className="customer-border container mx-auto flex flex-col items-center justify-center gap-20 px-2.5 pt-32 pb-24 md:px-10 lg:pt-40">

      {/* Introduction */}
      <div className="flex w-full flex-col gap-6 rounded-[40px] bg-[#191919B8] p-7.5">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="font-elemental-end text-primary text-[36px] uppercase leading-none md:text-[44px]">
              Inside AI 2026
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-white/40">
              Industry Exposure Series
            </p>
          </div>
          <Image
            src={insideAILogo}
            alt="Inside AI"
            className="hidden shrink-0 drop-shadow-[0_0_24px_rgba(255,91,60,0.35)] md:block md:w-56"
          />
        </div>
        <div className="flex flex-col gap-4 text-lg text-white/85 leading-relaxed">
          <p>
            Inside AI Series is a year-long engagement program designed to bridge the gap between
            academic learning and real-world AI practice by taking students and AI enthusiasts
            directly inside Sri Lanka&apos;s leading technology companies.
          </p>
          <p>
            The series delivers industry-led sessions, hands-on workshops, and real AI knowledge
            sharing. Inside AI enables participants to experience what AI looks like inside actual
            working environments, while giving companies the opportunity to educate, inspire, and
            engage with future AI talent.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard value="8" label="Sessions Across the Year" />
          <StatCard value="30–50" label="Participants per Session" />
          <StatCard value="500+" label="Total Participants" />
          <StatCard value="100%" label="Hands-on Workshops" />
        </div>
      </div>

      {/* Why Inside AI */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          why <span className="text-primary">Inside AI</span>?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#1c1c1c] border border-red-500/20 p-6">
            <h3 className="mb-4 text-lg font-semibold text-red-400 uppercase tracking-wide">The Problem</h3>
            <ul className="flex flex-col gap-3">
              <ProblemItem text="Students learn AI in theory but lack real industry exposure" />
              <ProblemItem text="Limited access to workflows, tools, and industry infrastructure" />
              <ProblemItem text="Companies struggle to meet and assess emerging talent" />
            </ul>
          </div>
          <div className="rounded-3xl bg-[#1c1c1c] border border-primary/20 p-6">
            <h3 className="mb-4 text-lg font-semibold text-primary uppercase tracking-wide">Our Solution</h3>
            <ul className="flex flex-col gap-3">
              <SolutionItem text="Inside AI brings participants into the company, bridging academia ↔ industry" />
              <SolutionItem text="Real-world AI workflows, tools, and environments - not just theory" />
              <SolutionItem text="Direct engagement with company professionals and live projects" />
            </ul>
          </div>
        </div>
      </div>

      {/* Program Timeline */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          program <span className="text-primary">timeline</span>
        </h2>
        <p className="text-white/70 text-center md:text-left">
          Inside AI will be conducted as a multi-session series throughout the year.
        </p>
        <div className="w-full rounded-[30px] bg-[#191919B8] p-7.5">
          {/* Mobile: vertical */}
          <ol className="flex flex-col gap-0 lg:hidden">
            {insideAIProgramTimelineData.map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-black font-bold text-xs">{i + 1}</div>
                  {i < insideAIProgramTimelineData.length - 1 && <div className="w-0.5 flex-1 bg-primary/40 my-1" />}
                </div>
                <div className="pb-6 pt-1">
                  <span className="text-sm text-white/50 uppercase tracking-wide">{item.month}</span>
                  <p className={`text-base font-semibold mt-0.5 ${item.highlight ? "text-primary" : "text-white"}`}>{item.sessions}</p>
                </div>
              </li>
            ))}
          </ol>
          {/* Desktop: horizontal */}
          <div className="hidden lg:flex w-full items-start">
            {insideAIProgramTimelineData.map((item, i) => (
              <div key={i} className="flex flex-1 min-w-0 flex-col items-center">
                <div className="flex w-full items-center">
                  <div className={`h-0.5 flex-1 ${i === 0 ? "invisible" : "bg-primary/40"}`} />
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-black font-bold text-sm">{i + 1}</div>
                  <div className={`h-0.5 flex-1 ${i === insideAIProgramTimelineData.length - 1 ? "invisible" : "bg-primary/40"}`} />
                </div>
                <div className="mt-4 flex flex-col items-center text-center px-1 w-full">
                  <span className="text-sm text-white/50 uppercase tracking-wide">{item.month}</span>
                  <span className={`text-sm font-semibold mt-1 leading-tight ${item.highlight ? "text-primary" : "text-white"}`}>{item.sessions}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact for Participants */}
      <div className="flex w-full flex-col gap-4 p-5">
        <div className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          impact for <span className="text-primary">participants</span>
        </div>
        <p className="text-white/70 text-center md:text-left mb-2">
          Inside AI is designed to create real transformation, not just awareness.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {impactCards.map(({ Icon, text }, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl bg-[#191919B8] border border-white/10 p-5">
              <Icon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          target <span className="text-primary">audience</span>
        </h2>
        <p className="text-white/70 text-center md:text-left -mt-2">
          This audience represents a highly engaged, future-ready talent pool.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map(({ Icon, label, sub }, i) => (
            <div key={i} className="flex flex-col items-center text-center rounded-2xl bg-[#191919B8] border border-white/10 p-6 gap-3 hover:border-primary/40 transition-colors">
              <Icon className="h-8 w-8 text-primary" />
              <span className="font-semibold text-white">{label}</span>
              <span className="text-base text-white/50">{sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="flex flex-col gap-10 w-full">
        <p className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          fREquEntly <span className="text-primary">AsKED</span> QuEstioNs
        </p>
        <AccordionRoot allowMultiple={true} className="mx-auto grid gap-x-2 gap-y-0 lg:grid-cols-2 w-full" variant="splitted">
          {insideAIFaqData.map((item) => (
            <AccordionItem key={item.value} className="h-fit self-start rounded-none bg-[#1c1c1c]">
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

    </main>
  );
};

export default Page;
