import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Signals that a card opens a page. Always shown on touch screens, where there is no hover.
// The card's title is the link for keyboards and screen readers, so this one is skipped by them
export default function EventCardArrow({ href }: { href: string }) {
  return (
    <Link
      href={href}
      tabIndex={-1}
      aria-hidden="true"
      className="bg-primary absolute top-3 right-3 z-20 flex size-9 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 hover:bg-[#e34600] lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
    >
      <ArrowUpRight className="size-5" />
    </Link>
  );
}
