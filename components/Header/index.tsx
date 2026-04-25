"use client";

import Logo from "@/assets/AIDSL_FullLOGOpng.png";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./Mobile";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { navItems } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, open] = useLockingBodyScroll();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isClient) return null;

  return (
    <header className={`fixed inset-0 top-4 z-[999] container mx-auto flex h-[70px] w-full items-center justify-between overflow-x-clip rounded-2xl px-4 py-3 text-white transition-all duration-500 lg:grid lg:grid-cols-[1fr_auto_1fr] ${scrolled ? "border border-white/15" : "backdrop-blur-lg"}`}>
      <div className={`bg-gradient absolute top-0 left-0 h-full w-full rounded-xl transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-95"}`} />
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
