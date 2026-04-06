"use client";

import Logo from "@/assets/AIDSL_FullLOGOpng.png";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./Mobile";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { navItems } from "@/lib/data";

// Define navigation items array



export default function Header() {
  const [isOpen, open] = useLockingBodyScroll();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <header className="fixed inset-0 top-4 z-[999] container mx-auto flex h-[70px] w-full items-center justify-between overflow-x-clip rounded-2xl px-4 py-3 text-white backdrop-blur-lg lg:grid lg:grid-cols-[1fr_auto_1fr]">
      <div className="bg-gradient absolute top-0 left-0 hidden h-full w-full rounded-xl opacity-95 lg:block" />
      <div className="relative">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="AIDSL Logo" width={150} height={50} />
        </Link>
      </div>
      <div className="relative hidden items-center justify-center lg:flex">
        <nav>
          <ul className="flex items-center space-x-6 text-xl font-semibold">
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
      <div className="relative hidden items-center justify-end lg:flex">
        <Link
          href="/about-us#contact-us"
          className="rounded-lg bg-white px-6 py-2 text-lg font-semibold text-orange-500 transition hover:bg-white/90"
        >
          Contact Us
        </Link>
      </div>
      {!isDesktop && <MobileNavigation isOpen={isOpen} open={open} />}
    </header>
  );
}
