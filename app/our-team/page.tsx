import { MemberCard } from "@/components/AboutUs/Cards";
import { TeamDetails } from "@/lib/data";
import Icon from "@/assets/logo.png";
import Image from "next/image";

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
      <div className="mt-12 rounded-2xl border bg-[#2e2c2a] px-4 py-12">
        <h3 className="section-header flex items-center gap-2 px-4">
          <Image src={Icon} alt="Register Icon" width={52} />
          <span className="text-primary">adhoc Team</span>
        </h3>
        <div className="team-grid adhoc">
          {TeamDetails["adhoc"].members.map((team) => (
            <MemberCard key={team.name} member={team} />
          ))}
        </div>
      </div>
    </main>
  );
}
