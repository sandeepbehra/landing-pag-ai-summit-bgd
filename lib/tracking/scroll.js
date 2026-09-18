// // lib/landing-tracking/scroll.js
// import { setMetric } from "./store";

// let maxScroll = 0;
// let lastY = 0;
// let lastTime = Date.now();
// let velocities = [];

// export const initScrollTracking = () => {
//   window.addEventListener("scroll", () => {
//     const y = window.scrollY;
//     const docHeight =
//       document.documentElement.scrollHeight - window.innerHeight;

//     const percent = Math.round((y / docHeight) * 100);
//     maxScroll = Math.max(maxScroll, percent);

//     const now = Date.now();
//     const velocity = Math.abs(y - lastY) / (now - lastTime || 1);
//     velocities.push(velocity);

//     lastY = y;
//     lastTime = now;
//   });

//   window.addEventListener("beforeunload", () => {
//     setMetric("scroll_depth_percent", maxScroll);
//     setMetric(
//       "scroll_velocity",
//       velocities.reduce((a, b) => a + b, 0) /
//         (velocities.length || 1)
//     );
//   });
// };

import { useEffect, useRef } from "react";

export function useScrollDepth() {
  const maxScrollPercent = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // track max depth only
      maxScrollPercent.current = Math.max(
        maxScrollPercent.current,
        scrollPercent
      );
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return maxScrollPercent;
}
