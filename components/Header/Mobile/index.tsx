"use client";

import { AnimatePresence } from "motion/react";
import { useId } from "react";


import ToggleButton from "./Close";
import MobileSheet from "./Sheet";

type Props = {
	isOpen: boolean;
	open: (isOpen: boolean) => void;
};

export default function MobileNavigation({isOpen, open}: Props) {
	const id = useId();

	return (
		<>
			<ToggleButton relId={id} isOpen={isOpen} open={open} />
			<AnimatePresence>
				{isOpen && <MobileSheet key="sheet" id={id} open={open} />}
			</AnimatePresence>
		</>
	);
}
