import { motion, useScroll, useTransform } from "motion/react";
import { type RefObject, useRef } from "react";

import { MENU_SLIDE } from "./anim";
import AnimatedCurve from "./Curve";
import Link from "next/link";
import MobileNavigationTarget from "./Target";
import { navItems } from "@/lib/data";

type Props = { id: string; open: (isOpen: boolean) => void };

export default function Sheet({ id, open }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={containerRef}
      id={id}
      role="listbox"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={MENU_SLIDE}
      className="fixed inset-0 -top-2.5 -left-[16px] flex min-h-[100dvh] w-[105vw] flex-col bg-[rgb(30,30,30)]/80 pb-12 backdrop-blur-xl lg:hidden"
    >
      <SheetHeaderCover container={containerRef} />
      <div className="flex flex-col gap-6 px-6 pt-8">
        <ul
          className="flex flex-col space-y-4 text-2xl font-semibold"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A")
              open.call(null, false);
            e.stopPropagation();
          }}
        >
          {navItems.map((item, index) => (
            <MobileNavigationTarget key={index} index={index} href={item.href}>
              {item.type === "link" ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <item.component />
              )}
            </MobileNavigationTarget>
          ))}
        </ul>
      </div>
      <div aria-hidden className="my-6 flex-1" />

      <AnimatedCurve fill="fill-[#1e1e1ecc]" />
    </motion.div>
  );
}

type SheetHeaderCoverProps = {
  container: RefObject<HTMLDivElement | null>;
};

function SheetHeaderCover({ container }: SheetHeaderCoverProps) {
  const { scrollYProgress } = useScroll({
    container,
    axis: "y",
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="relative top-0 z-10 min-h-[6.5rem] w-full bg-gradient-to-b from-transparent"
    />
  );
}
