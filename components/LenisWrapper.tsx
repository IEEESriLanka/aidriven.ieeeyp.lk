"use client";

import { ReactLenis } from "lenis/react";

function LenisWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis options={{ autoRaf: true }} root={true}>
      {children}
    </ReactLenis>
  );
}

export default LenisWrapper;
