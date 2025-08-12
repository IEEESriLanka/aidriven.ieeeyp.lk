import { motion, type SVGMotionProps } from "motion/react";
import { type PropsWithoutRef } from "react";

export function Path(props: PropsWithoutRef<SVGMotionProps<SVGPathElement>>) {
	return (
		<motion.path
			fill="transparent"
			strokeWidth="3"
			stroke="currentColor"
			strokeLinecap="round"
			{...props}
		/>
	);
}

export function Line(props: PropsWithoutRef<SVGMotionProps<SVGLineElement>>) {
	return (
		<motion.line
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			{...props}
		/>
	);
}
