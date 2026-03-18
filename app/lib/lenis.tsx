import Lenis from "@studio-freight/lenis";

export const lenis = typeof window !== "undefined" ? new Lenis({
  duration: 1.2,                 // smoothness
  easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease
  wheelMultiplier: 0.9,          // premium slow scroll feel
  touchMultiplier: 1.2,          // smooth mobile scroll
  autoResize: true,              // handles resize correctly
}) : null;
