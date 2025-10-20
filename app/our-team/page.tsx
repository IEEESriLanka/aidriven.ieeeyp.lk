import { MemberCard } from "@/components/AboutUs/Cards";
import { TeamDetails } from "@/lib/data";

export default function Page() {
  return (
    <main className="container mx-auto py-[100px] flex min-h-screen flex-col gap-[40px] min-scre">
      <h3 className="section-header">
        our <span className="text-primary">team</span>
      </h3>
      <div className="flex items-center gap-x-6 lg:gap-x-16">
        {TeamDetails["main"].members.map((team) => (
          <MemberCard key={team.name} member={team} />
        ))}
      </div>
    </main>
  );
}