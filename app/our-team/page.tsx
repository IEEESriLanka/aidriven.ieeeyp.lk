import { MemberCard } from "@/components/AboutUs/Cards";
import JsonLd from "@/components/common/JsonLd";
import { TeamDetails, Team2026Details } from "@/lib/data";
import { SITE_URL } from "@/lib/constant";
import { pageMetadata, staticImageSrc } from "@/lib/seo";
import { ChevronDown } from "lucide-react";

const team2026 = [
  ...Team2026Details.main.members,
  ...Team2026Details.secondary.members,
  ...Team2026Details.third.members,
];

const namesWithRole = (role: string) =>
  team2026.filter((m) => m.position === role).map((m) => m.name);

const listNames = (names: string[]) =>
  names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names.at(-1)}` : names.join("");

export const metadata = pageMetadata({
  title: "Our Team 2026",
  description:
    `Meet the 2026 organizing committee of AI Driven Sri Lanka, an IEEE Young Professionals Sri Lanka initiative: ` +
    `Chairperson ${listNames(namesWithRole("Chairperson"))}, Secretary ${listNames(namesWithRole("Secretary"))}, ` +
    `Vice-Chairpersons ${listNames(namesWithRole("Vice-Chairperson"))}, and ${namesWithRole("Coordinator").length} coordinators.`,
  path: "/our-team",
  keywords: [
    "AI Driven Sri Lanka team",
    "AIDSL 2026 committee",
    "AI Driven Sri Lanka organizing committee",
    ...team2026.map((m) => m.name),
  ],
});

// Lists each 2026 member and their role as part of the organization
const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "AI Driven Sri Lanka",
  url: SITE_URL,
  member: team2026.map((m) => {
    const linkedin = m.socials.map((s) => s.url).filter(Boolean);
    const image = staticImageSrc(m.profileImg);
    return {
      "@type": "OrganizationRole",
      roleName: m.position,
      startDate: "2026",
      member: {
        "@type": "Person",
        name: m.name,
        jobTitle: `${m.position}, AI Driven Sri Lanka 2026`,
        image: new URL(image, SITE_URL).href,
        ...(linkedin.length > 0 && { sameAs: linkedin }),
      },
    };
  }),
};

export default function Page() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col gap-10 px-4 pt-32 pb-24 lg:px-16 lg:pt-40">
      <JsonLd data={teamJsonLd} />
      <div className="flex items-center gap-4 px-4">
        <h3 className="section-header">
          our <span className="text-primary">team</span>
        </h3>
        <span className="font-elemental-end rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-sm text-primary">
          2026
        </span>
      </div>

      <section className="border-primary/30 rounded-2xl border bg-[#252320] px-4 py-10">
        <div className="mt-8 flex flex-col gap-8 pb-6">
          <div className="team-grid main">
            {Team2026Details["main"].members.map((team) => (
              <MemberCard key={team.name} member={team} />
            ))}
          </div>
          <div className="team-grid secondary">
            {Team2026Details["secondary"].members.map((team) => (
              <MemberCard key={team.name} member={team} />
            ))}
          </div>
          <div className="team-grid third">
            {Team2026Details["third"].members.map((team) => (
              <MemberCard key={team.name} member={team} />
            ))}
          </div>
        </div>
      </section>

      <details className="group border-primary/30 rounded-2xl border bg-[#2e2c2a] px-4 py-6">
        <summary className="section-header flex cursor-pointer list-none items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-3">
            <span className="text-primary">past team</span>
            <span className="font-elemental-end rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-sm text-primary">2025</span>
          </div>
          <ChevronDown className="text-primary h-6 w-6 shrink-0 transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <p className="mt-3 px-4 text-sm text-white/70 lg:text-base">
          Previous committee members are listed below.
        </p>

        <div className="my-6 h-px bg-white/10" />

        <div className="mt-8 flex flex-col gap-8 pb-6">
          <div className="team-grid main">
            {TeamDetails["main"].members.map((team) => (
              <MemberCard key={team.name} member={team} />
            ))}
          </div>
          <div className="team-grid secondary">
            {TeamDetails["secondary"].members.map((team) => (
              <MemberCard key={team.name} member={team} />
            ))}
          </div>
          <div className="team-grid third">
            {TeamDetails["third"].members.map((team) => (
              <MemberCard key={team.name} member={team} />
            ))}
          </div>
        </div>
      </details>

      <details className="group border-primary/20 rounded-2xl border bg-[#2e2c2a] px-4 py-6">
        <summary className="section-header flex cursor-pointer list-none items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-3">
            <span className="text-primary">past team - adhoc</span>
            <span className="font-elemental-end rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-sm text-primary">2025</span>
          </div>
          <ChevronDown className="text-primary h-6 w-6 shrink-0 transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="team-grid adhoc mt-8 pb-6">
          {TeamDetails["adhoc"].members.map((team) => (
            <MemberCard key={team.name} member={team} />
          ))}
        </div>
      </details>
    </main>
  );
}
