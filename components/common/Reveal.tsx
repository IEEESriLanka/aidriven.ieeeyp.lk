"use client";

import { motion, useReducedMotion } from "motion/react";

// Fades its content up into place the first time it scrolls into view
export default function Reveal({ children }: React.PropsWithChildren) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
