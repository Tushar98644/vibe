"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
