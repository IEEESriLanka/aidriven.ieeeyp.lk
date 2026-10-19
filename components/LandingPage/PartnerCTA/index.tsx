import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const reasons = [
  "Backed by IEEE Young Professionals Sri Lanka",
  "A national network of students across 15+ universities",
  "A proven record of AI events with 20+ industry partners",
];

export default function PartnerCTA() {
  return (
    <section className="section-gap-y container mx-auto px-4">
      <div className="border-primary/30 relative overflow-hidden rounded-2xl border bg-[#111] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        {/* Soft orange glow behind the content */}
        <div className="bg-primary/20 pointer-events-none absolute -top-32 -right-32 size-96 rounded-full blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Partner with AIDSL
            </span>
            <h2 className="font-elemental-end text-2xl leading-snug text-white lg:text-4xl">
              Let&apos;s build Sri Lanka&apos;s <span className="text-primary">AI future</span> together
            </h2>
            <p className="max-w-[60ch] text-base text-white/75">
              From national AI challenges to industry-led workshops, we bring
              together the country&apos;s brightest students, researchers and
              companies. Partner with us to reach emerging AI talent, showcase
              your technology and shape the next generation of innovators.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/about-us#contact-us"
                className="bg-primary group flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e34600]"
              >
                Partner with us
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/events/past-events"
                className="hover:border-primary hover:text-primary rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                See our track record
              </Link>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/85"
              >
                <span className="bg-primary/15 text-primary flex size-7 shrink-0 items-center justify-center rounded-full">
                  <Check className="size-4" />
                </span>
                <span className="pt-0.5">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
