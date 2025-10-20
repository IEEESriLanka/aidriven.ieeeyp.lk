import { MemberCard } from "@/components/AboutUs/Cards";
import { TeamDetails } from "@/lib/data";

export default function Page() {
  return (
    <main className="min-scre container mx-auto flex min-h-screen flex-col gap-[40px] py-[100px]">
      <h3 className="section-header px-4">
        our <span className="text-primary">team</span>
      </h3>
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
    </main>
  );
}
