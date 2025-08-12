import { Path } from "@/components/common/MotionSVG";
import { motion } from "motion/react";


type Props = {
	relId: string;
	isOpen: boolean;
	open: (isOpen: boolean) => void;
};

export default function ToggleButton({ relId, isOpen, open }: Props) {
	return (
		<motion.button
			type="button"
			role="combobox"
			aria-expanded={isOpen}
			aria-controls={relId}
			onClick={() => open(!isOpen)}
			initial={false}
			className="z-20 inline-flex size-8 items-center justify-center rounded-full lg:hidden"
			animate={isOpen ? "open" : "closed"}
		>
			<svg width="23" height="23" viewBox="0 0 23 23">
				<Path
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
				/>
			</svg>
		</motion.button>
	);
}
