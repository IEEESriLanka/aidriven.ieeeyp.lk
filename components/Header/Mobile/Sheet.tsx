import { motion, useScroll, useTransform } from "motion/react";
import { type RefObject, useRef } from "react";
import { usePathname } from "next/navigation";

import { MENU_SLIDE } from "./anim";
import AnimatedCurve from "./Curve";
import { navItems } from "..";
import Link from "next/link";

type Props = { id: string; open: (isOpen: boolean) => void };

export default function Sheet({ id }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
        {pathname === "/" && (
          <ul className="flex flex-col space-y-4 text-2xl font-semibold">
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
        )}
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
