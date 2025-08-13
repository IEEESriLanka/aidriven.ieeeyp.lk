"use client";

import Logo from "@/assets/AIDSL_FullLOGOpng.png";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import Link from "next/link";
import { HeaderDropDown } from "./HeaderDropDown";
import MobileNavigation from "./Mobile";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";
import { useIsClient, useMediaQuery } from "usehooks-ts";

// Define navigation items array
export const navItems = [
  {
    type: "link" as const,
    href: "/",
    label: "Home",
  },
  {
    type: "dropdown" as const,
    component: HeaderDropDown,
  },
  {
    type: "link" as const,
    href: "/ourTeam",
    label: "Our Team",
  },
  {
    type: "link" as const,
    href: "/aboutUs",
    label: "About Us",
  },
];

export default function Header() {
  const [isOpen, open] = useLockingBodyScroll();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <header className="fixed inset-0 top-4 z-[999] mx-auto flex h-[70px] w-full max-w-7xl items-center justify-between overflow-x-clip rounded-2xl px-4 py-3 text-white backdrop-blur-lg">
      <div className="bg-gradient absolute top-0 left-0 hidden h-full w-full rounded-xl opacity-95 lg:block" />
      <div className="relative">
        <Image src={Logo} alt="AIDSL Logo" width={150} height={50} />
      </div>
      <div className="relative hidden items-center justify-between space-x-8 lg:flex">
        <nav>
          <ul className="flex space-x-6 text-xl font-semibold">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.type === "link" ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <item.component />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <HeaderButton />
      {!isDesktop && <MobileNavigation isOpen={isOpen} open={open} />}
    </header>
  );
}
