import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";


type AnimatedCurveProps = {
  fill?: string;
};

export default function AnimatedCurve({
  fill = "fill-[rgb(41,41,41)]",
}: AnimatedCurveProps) {
  const height = typeof window !== 'undefined' ? window.innerHeight : 800;
  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <svg
      className={cn(
        "absolute top-0 -left-[99px] h-[100vh] w-[100px] stroke-none",
        fill,
      )}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
