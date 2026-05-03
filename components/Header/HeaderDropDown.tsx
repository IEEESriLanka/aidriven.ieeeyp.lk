"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const eventLinks = [
  { href: "/events", label: "All Events" },
  { href: "/events/ai-challenge", label: "AI Challenge" },
  { href: "/events/inside-ai", label: "Inside AI" },
  { href: "/events/ai-summit", label: "AI Summit" },
  { href: "/events/past-events", label: "Past Events" },
];

export function HeaderDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="flex cursor-pointer items-center space-x-2">
          <span>Events</span>
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-200", {
              "rotate-180": isOpen,
            })}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-gradient z-99999 w-56 translate-y-2 border-0 p-3 text-white"
        style={{ "--_angle": "180deg" } as React.CSSProperties}
      >
        {/* Top-level */}
        <Link
          href="/events"
          className="block rounded px-3 py-2 text-base font-semibold text-white transition-colors hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          All Events
        </Link>

        {/* Sub-events */}
        <div className="my-1 ml-3 flex flex-col border-l border-white/15 pl-3">
          {[
            { href: "/events/ai-challenge", label: "AI Challenge" },
            { href: "/events/inside-ai", label: "Inside AI" },
            { href: "/events/ai-summit", label: "AI Summit" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded px-2 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="my-2 border-t border-white/10" />

        {/* Bottom-level */}
        <Link
          href="/events/past-events"
          className="block rounded px-3 py-2 text-base font-semibold text-white transition-colors hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          Past Events
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MobileHeaderDropDown({ onNavigate }: { onNavigate: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex items-center justify-between text-white"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span>Events</span>
        <ChevronDown
          className={cn("h-5 w-5 transition-transform duration-200", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-y-1 border-l-2 border-white/15 pl-5">
          {/* Top-level: All Events */}
          <Link
            href="/events"
            className="text-xl font-semibold text-white transition-colors hover:text-primary"
            onClick={onNavigate}
          >
            All Events
          </Link>

          {/* Sub-events */}
          <div className="my-1 ml-2 flex flex-col gap-y-1 border-l border-white/10 pl-4">
            <Link href="/events/ai-challenge" className="text-lg text-white/60 transition-colors hover:text-white" onClick={onNavigate}>
              AI Challenge
            </Link>
            <Link href="/events/inside-ai" className="text-lg text-white/60 transition-colors hover:text-white" onClick={onNavigate}>
              Inside AI
            </Link>
            <Link href="/events/ai-summit" className="text-lg text-white/60 transition-colors hover:text-white" onClick={onNavigate}>
              AI Summit
            </Link>
          </div>

          {/* Divider */}
          <div className="my-2 border-t border-white/10" />

          {/* Bottom-level: Past Events */}
          <Link
            href="/events/past-events"
            className="text-xl font-semibold text-white transition-colors hover:text-primary"
            onClick={onNavigate}
          >
            Past Events
          </Link>
        </div>
      )}
    </div>
  );
}
