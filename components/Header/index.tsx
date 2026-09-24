"use client";

import Logo from "@/assets/AIDSL_FullLOGOpng.png";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./Mobile";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { navItems } from "@/lib/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, open] = useLockingBodyScroll();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isClient = useIsClient();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const onScroll = () => {
      const lenis = (window as any).lenis;
      const scrollPosition = lenis ? lenis.actualScroll : window.scrollY;
      setScrolled(scrollPosition > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Also listen to Lenis scroll event if available
    const handleLenisScroll = () => onScroll();
    window.addEventListener("lenis-scroll", handleLenisScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lenis-scroll", handleLenisScroll);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] w-[95%] max-w-7xl transition-all duration-500">
      <header
        className={cn(
          "w-full flex h-[70px] items-center justify-between px-6 py-3 text-white transition-all duration-500 lg:grid lg:grid-cols-[1fr_auto_1fr] rounded-2xl overflow-hidden border",
          scrolled ? "bg-[#2D1B19]/50 backdrop-blur-md border-white/10" : "bg-[#2D1B19]/95 border-transparent shadow-xl"
        )}
        data-lenis-prevent
      >
        <div className="relative z-10">
          <Link href="/home" className="flex items-center">
            <Image src={Logo} alt="AIDSL Logo" width={150} height={50} />
          </Link>
        </div>
        <div className="relative hidden items-center justify-center lg:flex z-10">
          <nav>
            <ul className="flex items-center space-x-6 text-xl font-semibold">
              {navItems.map((item, index) => {
                const active = item.type === "link" ? isActive(item.href) : pathname.startsWith("/events");
                return (
                  <li
                    key={index}
                    className={cn(
                      "transition-colors duration-200 hover:text-[#EA421E]",
                      scrolled && "[text-shadow:0_0_12px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,0.8)]",
                      active && "text-[#EA421E]",
                    )}
                  >
                    {item.type === "link" ? (
                      <Link href={item.href} aria-current={active ? "page" : undefined}>
                        {item.label}
                      </Link>
                    ) : (
                      <item.component active={active} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="relative hidden items-center justify-end lg:flex z-10">
          <Link
            href="/about-us#contact-us"
            className="rounded-lg border border-[#EA421E] px-6 py-1.5 text-sm font-semibold text-[#EA421E] transition-all duration-300 hover:bg-[#EA421E] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
        {!isDesktop && <MobileNavigation isOpen={isOpen} open={open} />}
      </header>
    </div>
  );
}
