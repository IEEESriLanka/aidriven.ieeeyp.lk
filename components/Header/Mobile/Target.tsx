"use client";

import { useLenis } from "lenis/react";
import { HTMLMotionProps, motion } from "motion/react";

import { SLIDE } from "./anim";

interface NavigationTargetProps
  extends HTMLMotionProps<"li"> {
  href?: string;
  index: number;
  children: React.ReactNode;
}

export default function MobileNavigationTarget({
  href,
  children,
  index,
  ...props
}: NavigationTargetProps) {
  const lenis = useLenis();
  let local: boolean;

  if (href) {
    local = href.startsWith("#");
  }

  return (
    <motion.li
      className="font-dm-sans bg-clip-text pb-1 text-4xl font-semibold text-white transition-colors"
      role="link"
      onClick={() => {
        if (href && local) {
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
      {...props}
    >
      {children}
    </motion.li>
  );
}
