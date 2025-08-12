"use client";

import { useLenis } from "lenis/react";
import { motion } from "motion/react";

import Link from "next/link";
import { SLIDE } from "./anim";

interface NavigationTargetProps {
  href: string;
  label: string;
  index: number,
}

export default function MobileNavigationTarget({
  href,
  label,
  index
}: NavigationTargetProps) {
  const lenis = useLenis();

  const local = href.startsWith("#");

  return (
    <motion.li
      className="font-dm-sans bg-clip-text pb-1 text-4xl font-semibold text-black transition-colors"
      role="link"
      onClick={() => {
        if (local) {
          // if (href === "/") return lenis?.scrollTo(0);
          const hash = href.substring(1);
          const ele = document.getElementById(hash);

          if (ele) {
            return lenis?.scrollTo(ele, {
              offset: -50,
              duration: 1,
              easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
              lerp: 0.1,
            });
          }
        }
      }}
      variants={SLIDE}
      initial="initial"
      custom={index}
      animate="enter"
      exit="exit"
    >
      <Link href={href} className="">
        {label}
      </Link>
    </motion.li>
  );
}
