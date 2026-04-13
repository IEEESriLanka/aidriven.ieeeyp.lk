import Image from "next/image";
import insideAILogo from "@/assets/Inside-ai-logo.png";
import {
  insideAIFaqData,
  insideAIProgramTimelineData,
} from "@/lib/data/events";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/Accordion/Accordion";

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl bg-[#191919] border border-white/10 px-6 py-5 text-center">
    <span className="font-elemental-end text-primary text-3xl md:text-4xl">{value}</span>
    <span className="mt-1 text-sm text-white/70">{label}</span>
  </div>
);

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

const Page = () => {
  return (
    <main className="customer-border container mx-auto flex flex-col items-center justify-center gap-20 px-[10px] py-30 md:px-[40px]">

      {/* Slide 6 — Introduction */}
      <div className="flex w-full flex-col gap-6 rounded-[40px] bg-[#191919B8] p-7.5">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image
            src={insideAILogo}
            alt="Inside AI"
            className="w-56 drop-shadow-[0_0_20px_rgba(255,91,60,0.3)] md:w-72"
          />
          <p className="font-elemental-end text-xl uppercase tracking-widest text-white/50 md:pl-1">
            2026 Edition
          </p>
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
          <StatCard value="10+" label="Sessions Across the Year" />
          <StatCard value="50–70" label="Participants per Session" />
          <StatCard value="500+" label="Total Participants" />
          <StatCard value="100%" label="Hands-on Workshops" />
        </div>
      </div>

      {/* Slide 8 — Why Inside AI */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          why <span className="text-primary">Inside AI</span>?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#1c1c1c] border border-red-500/20 p-6">
            <h3 className="mb-4 text-lg font-semibold text-red-400 uppercase tracking-wide">
              The Problem
            </h3>
            <ul className="flex flex-col gap-3">
              <ProblemItem text="Students learn AI in theory but lack real industry exposure" />
              <ProblemItem text="Limited access to workflows, tools, and industry infrastructure" />
              <ProblemItem text="Companies struggle to meet and assess emerging talent" />
            </ul>
          </div>
          <div className="rounded-3xl bg-[#1c1c1c] border border-primary/20 p-6">
            <h3 className="mb-4 text-lg font-semibold text-primary uppercase tracking-wide">
              Our Solution
            </h3>
            <ul className="flex flex-col gap-3">
              <SolutionItem text="Inside AI brings participants into the company, bridging academia ↔ industry" />
              <SolutionItem text="Real-world AI workflows, tools, and environments — not just theory" />
              <SolutionItem text="Direct engagement with company professionals and live projects" />
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 13 — Program Timeline */}
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
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-black font-bold text-xs">
                    {i + 1}
                  </div>
                  {i < insideAIProgramTimelineData.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/40 my-1" />
                  )}
                </div>
                <div className="pb-6 pt-1">
                  <span className="text-xs text-white/50 uppercase tracking-wide">{item.month}</span>
                  <p className="text-sm font-semibold text-white mt-0.5">{item.sessions}</p>
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-black font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className={`h-0.5 flex-1 ${i === insideAIProgramTimelineData.length - 1 ? "invisible" : "bg-primary/40"}`} />
                </div>
                <div className="mt-4 flex flex-col items-center text-center px-1 w-full">
                  <span className="text-xs text-white/50 uppercase tracking-wide">{item.month}</span>
                  <span className="text-xs font-semibold text-white mt-1 leading-tight">{item.sessions}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 14 — Impact for Participants */}
      <div className="flex w-full flex-col gap-4 p-5">
        <div className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          impact for <span className="text-primary">participants</span>
        </div>
        <p className="text-white/70 text-center md:text-left mb-2">
          Inside AI is designed to create real transformation, not just awareness.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🔬", text: "Gain hands-on experience with real AI tools and workflows" },
            { icon: "🏭", text: "Understand how AI is applied in industry environments" },
            { icon: "💡", text: "Work on practical challenges and case studies" },
            { icon: "🤝", text: "Interact directly with industry professionals" },
            { icon: "📁", text: "Build portfolio-ready projects" },
            { icon: "🚀", text: "Access career and internship opportunities" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-[#191919B8] border border-white/10 p-5"
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <p className="text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 15 — Target Audience */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          target <span className="text-primary">audience</span>
        </h2>
        <p className="text-white/70 text-center md:text-left -mt-2">
          This audience represents a highly engaged, future-ready talent pool.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "🎓", label: "Undergraduates", sub: "CS, IT, Engineering, Data Science" },
            { icon: "📚", label: "Postgraduates", sub: "Advanced study & research" },
            { icon: "💼", label: "Early-career professionals", sub: "First steps in AI industry" },
            { icon: "⚡", label: "AI & tech enthusiasts", sub: "Passionate self-learners" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-2xl bg-[#191919B8] border border-white/10 p-6 gap-3 hover:border-primary/40 transition-colors"
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="font-semibold text-white">{item.label}</span>
              <span className="text-sm text-white/50">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="flex flex-col gap-10 w-full">
        <p className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          fREquEntly <span className="text-primary">AsKED</span> QuEstioNs
        </p>
        <AccordionRoot
          allowMultiple={true}
          className="mx-auto grid gap-x-2 gap-y-0 lg:grid-cols-2 w-full"
          variant="splitted"
        >
          {insideAIFaqData.map((item) => (
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
    </main>
  );
};

export default Page;
