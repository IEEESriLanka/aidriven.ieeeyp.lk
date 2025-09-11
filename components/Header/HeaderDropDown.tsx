"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeaderDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
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
        className="bg-gradient z-[99999] w-64 translate-y-2 border-0 text-white"
        style={{ "--_angle": "180deg" } as React.CSSProperties}
      >
        <div className="px-1 py-1">
          <DropdownMenuCheckboxItem>
            <Link href="/events" className="block w-full">
              All Events
            </Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>
            <Link href={"/events/ai-challenge"}> AI Challenge</Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Link href={"/events/talk"}>Community Talk Series</Link>
          </DropdownMenuCheckboxItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
