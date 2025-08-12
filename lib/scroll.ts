export function getScrollbarWidth() {
	if (typeof window === "undefined") return 17; // Usual browser scrollbar width (in case of SSR)

	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll";
	document.body.appendChild(outer);

	const inner = document.createElement("div");
	outer.appendChild(inner);

	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
	document.body.removeChild(outer);

	return scrollbarWidth;
}

export function lockScrollbar(scrollbarWidth: number) {
	document.body.style.overflowY = "hidden";
	document.body.style.marginRight = `${scrollbarWidth}px`;
}

export function unlockScrollbar() {
	document.body.style.overflowY = "auto";
	document.body.style.marginRight = "0px";
}
