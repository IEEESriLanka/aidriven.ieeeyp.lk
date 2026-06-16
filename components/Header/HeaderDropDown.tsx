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
import { usePathname } from "next/navigation";

const eventLinks = [
  { href: "/events", label: "All Events" },
  { href: "/events/ai-challenge", label: "AI Challenge" },
  { href: "/events/inside-ai", label: "Inside AI" },
  { href: "/events/ai-summit", label: "AI Summit" },
  { href: "/events/past-events", label: "Past Events" },
];

export function HeaderDropDown({ active }: { active?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isLinkActive = (href: string) =>
    href === "/events" ? pathname === "/events" : pathname === href || pathname.startsWith(href + "/");

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex cursor-pointer items-center space-x-2", active && "text-primary")}>
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
          className={cn(
            "block rounded px-3 py-2 text-base font-semibold transition-colors hover:text-primary",
            isLinkActive("/events") ? "text-primary" : "text-white",
          )}
          aria-current={isLinkActive("/events") ? "page" : undefined}
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
              className={cn(
                "block rounded px-2 py-1.5 text-sm transition-colors hover:text-white",
                isLinkActive(item.href) ? "text-primary" : "text-white/60",
              )}
              aria-current={isLinkActive(item.href) ? "page" : undefined}
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
          className={cn(
            "block rounded px-3 py-2 text-base font-semibold transition-colors hover:text-primary",
            isLinkActive("/events/past-events") ? "text-primary" : "text-white",
          )}
          aria-current={isLinkActive("/events/past-events") ? "page" : undefined}
          onClick={() => setIsOpen(false)}
        >
          Past Events
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MobileHeaderDropDown({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  const inEvents = pathname.startsWith("/events");
  const [isOpen, setIsOpen] = useState(inEvents);
  const isLinkActive = (href: string) =>
    href === "/events" ? pathname === "/events" : pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="flex flex-col">
      <button
        className={cn("flex items-center justify-between", inEvents ? "text-primary" : "text-white")}
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
            className={cn(
              "text-xl font-semibold transition-colors hover:text-primary",
              isLinkActive("/events") ? "text-primary" : "text-white",
            )}
            aria-current={isLinkActive("/events") ? "page" : undefined}
            onClick={onNavigate}
          >
            All Events
          </Link>

          {/* Sub-events */}
          <div className="my-1 ml-2 flex flex-col gap-y-1 border-l border-white/10 pl-4">
            {[
              { href: "/events/ai-challenge", label: "AI Challenge" },
              { href: "/events/inside-ai", label: "Inside AI" },
              { href: "/events/ai-summit", label: "AI Summit" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg transition-colors hover:text-white",
                  isLinkActive(item.href) ? "text-primary" : "text-white/60",
                )}
                aria-current={isLinkActive(item.href) ? "page" : undefined}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-2 border-t border-white/10" />

          {/* Bottom-level: Past Events */}
          <Link
            href="/events/past-events"
            className={cn(
              "text-xl font-semibold transition-colors hover:text-primary",
              isLinkActive("/events/past-events") ? "text-primary" : "text-white",
            )}
            aria-current={isLinkActive("/events/past-events") ? "page" : undefined}
            onClick={onNavigate}
          >
            Past Events
          </Link>
        </div>
      )}
    </div>
  );
}
