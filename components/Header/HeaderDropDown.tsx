"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeaderDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center space-x-2">
          <span>Events</span>
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-200", {
              "rotate-180": isOpen,
            })}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-gradient z-[99999] w-64 translate-y-2 border-0 text-white"
        style={{ "--_angle": "180deg" } as React.CSSProperties}
      >
        <DropdownMenuCheckboxItem>
          <Link href={"/events/ai-challenge"}> AI Challenge</Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href={"/events/talk"}>Community Talk Series</Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
