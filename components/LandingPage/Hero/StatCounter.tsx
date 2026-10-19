"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import type { HeroStatProps } from "@/lib/type";

const format = (n: number) => Math.round(n).toLocaleString("en-US");

export default function StatCounter({ value, suffix, label }: HeroStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  // Server render shows the final value so it is never wrong without JS
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: setDisplay,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <div ref={ref} className="border-primary border-l-2 pl-4">
      {/* The hidden final value reserves the width so neighbours don't shift while counting */}
      <div className="font-elemental-end text-primary relative text-2xl leading-none lg:text-3xl">
        <span className="invisible" aria-hidden="true">
          {format(value)}
          {suffix}
        </span>
        <span className="absolute inset-0">
          {format(display)}
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-xs tracking-widest text-white/60 uppercase">{label}</div>
    </div>
  );
}
