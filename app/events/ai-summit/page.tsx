import { aiSummit2026ProgramModel, communityTalkEditionsData } from "@/lib/data/events";
import EditionCard from "@/components/Events/EditionCard";

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

      {/* Slide 7 — Event Introduction */}
      <div className="flex w-full flex-col gap-6 rounded-[40px] bg-[#191919B8] p-7.5">
        <div className="font-elemental-end text-primary text-center text-[40px] uppercase md:text-left">
          AI Summit 2026
        </div>
        <p className="text-lg text-white/85 leading-relaxed">
          The AI Summit 2026 is the flagship national event of AI Driven Sri Lanka, bringing
          together top global and local AI experts, innovators, and policymakers for a high-impact
          one-day forum focused on advancing the country&apos;s AI landscape.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: "🌍", label: "Sri Lanka's Premier AI Gathering" },
            { icon: "🤝", label: "Cross-sector Collaboration" },
            { icon: "💡", label: "Global & Local Expert Insights" },
            { icon: "🚀", label: "Innovation & Startup Showcases" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#191919] border border-white/10 px-4 py-5 text-center"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs text-white/70">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          <div className="flex items-center gap-2">
            <span className="font-elemental-end text-primary text-3xl">200+</span>
            <span className="text-white/70 text-sm">Participants</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-elemental-end text-primary text-3xl">6+</span>
            <span className="text-white/70 text-sm">Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-elemental-end text-primary text-3xl">1</span>
            <span className="text-white/70 text-sm">High-impact Day</span>
          </div>
        </div>
      </div>

      {/* Slide 8 — Why AI Summit */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          why <span className="text-primary">AI Summit</span>?
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

      {/* Slide 9 — Target Audience */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          target <span className="text-primary">audience</span>
        </h2>
        <p className="text-white/70 -mt-2">
          The AI Summit will attract a diverse and high-impact audience, including:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🏢", label: "Industry Leaders & Professionals" },
            { icon: "🔬", label: "AI Researchers & Academics" },
            { icon: "🚀", label: "Startup Founders & Innovators" },
            { icon: "💰", label: "Investors & Venture Capitalists" },
            { icon: "🏛️", label: "Policymakers & Government Representatives" },
            { icon: "🎓", label: "Students & Early-career Professionals" },
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

      {/* Slide 10 — Program Model */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          program <span className="text-primary">model</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiSummit2026ProgramModel.map((item, i) => (
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

        <div className="rounded-3xl bg-[#1c1c1c] border border-primary/20 p-6 mt-2">
          <h3 className="mb-4 text-base font-semibold text-primary uppercase tracking-wide">
            Expected Outcomes
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Participants gain exposure to cutting-edge AI trends & global perspectives",
              "Cross-sector connections between industry, academia & government",
              "Actionable insights and collaborations that extend beyond the event",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80">
                <span className="mt-1 shrink-0 text-primary font-bold">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Slide 11 — Program Timeline */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          program <span className="text-primary">timeline</span>
        </h2>
        <div className="w-full rounded-[30px] bg-[#191919B8] p-7.5">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-black font-bold text-sm">
              📅
            </div>
            <div>
              <p className="font-elemental-end text-primary text-xl uppercase">September 2026</p>
              <p className="text-sm text-white/50">AI Driven Sri Lanka Summit 2026</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { phase: "Registration & Arrival", detail: "Participant check-in, badge collection & networking warm-up" },
              { phase: "Opening Ceremony", detail: "Welcome address & agenda overview by AIDSL leadership" },
              { phase: "Global Keynote Sessions", detail: "Thought leadership from globally recognized AI leaders" },
              { phase: "Panel Discussions", detail: "Experts from industry, academia & policy on critical AI challenges" },
              { phase: "Innovation Showcase & AI Forum", detail: "10 startup stalls, AI gallery & roundtable discussions" },
              { phase: "Fellowship Gathering", detail: "Exclusive premium networking for speakers, partners & investors" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4"
              >
                <span className="mt-0.5 text-primary font-bold text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.phase}</p>
                  <p className="text-xs text-white/50 mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 12 — Strategic Value for Partners */}
      <div className="flex w-full flex-col gap-6">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          strategic value for <span className="text-primary">partners</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "📣",
              title: "Brand Visibility",
              desc: "Position your brand at the forefront of Sri Lanka's AI movement, gaining visibility across a highly targeted and influential audience.",
            },
            {
              icon: "💬",
              title: "Thought Leadership",
              desc: "Contribute to high-level discussions and establish your organization as a thought leader in the AI space.",
            },
            {
              icon: "🤝",
              title: "Direct Access to Leaders",
              desc: "Get direct access to industry leaders, policymakers, investors, and the brightest emerging talent in Sri Lanka's AI ecosystem.",
            },
            {
              icon: "🔗",
              title: "Business Opportunities",
              desc: "Build meaningful partnerships and unlock new business opportunities with the most relevant players in the industry.",
            },
            {
              icon: "👀",
              title: "Talent Acquisition",
              desc: "Connect with high-potential professionals and identify the talent that will drive your organization forward.",
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

      {/* Past Events — Community Talk Series */}
      <div className="flex w-full flex-col justify-center gap-10">
        <h2 className="font-elemental-end text-center text-[32px] text-white uppercase md:text-left">
          past <span className="text-primary">events</span>
        </h2>
        {communityTalkEditionsData.map((edition, i) => (
          <EditionCard
            key={i}
            title={edition.title}
            desc={edition.desc}
            data={edition.data}
            imgs={edition.imgs}
          />
        ))}
      </div>

    </main>
  );
};

export default Page;
