// lib/landing-tracking/session.js
// import { setMetric } from "./store";

// let startTime = Date.now();
// let idleSeconds = 0;
// let idleTimer = null;
// let hasScrolled = false;

// export const initSessionTracking = () => {
//   setMetric("landing_page_entered_timestamp", new Date().toISOString());

//   // Page load time
//   window.addEventListener("load", () => {
//     const t = performance.timing;
//     setMetric("page_load_time_ms", t.loadEventEnd - t.navigationStart);
//   });

//   // Idle detection
//   const resetIdle = () => {
//     clearTimeout(idleTimer);
//     idleTimer = setTimeout(() => {
//       idleSeconds += 30;
//     }, 30000);
//   };

//   ["mousemove", "keydown", "scroll", "click"].forEach(e =>
//     window.addEventListener(e, resetIdle)
//   );

//   window.addEventListener("scroll", () => {
//     hasScrolled = true;
//   });

//   window.addEventListener("beforeunload", () => {
//     setMetric(
//       "time_on_landing_page_seconds",
//       Math.floor((Date.now() - startTime) / 1000)
//     );
//     setMetric("idle_time_seconds", idleSeconds);
//     setMetric("bounce_before_scroll", !hasScrolled);
//   });
// };


import GTMService from "@/services/GTMService";
import { setMetric } from "./store";
import { useEffect, useRef } from "react";

let startTime = Date.now();
let idleSeconds = 0;
let idleTimer = null;
let hasScrolled = false;

export const initSessionTracking = () => {
  setMetric("landing_page_entered_timestamp", new Date().toISOString());

  window.addEventListener("load", () => {
    const t = performance.timing;
    setMetric("page_load_time_ms", t.loadEventEnd - t.navigationStart);
  });

  const resetIdle = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      idleSeconds += 30;
    }, 30000);
  };

  ["mousemove", "keydown", "scroll", "click"].forEach(e =>
    window.addEventListener(e, resetIdle)
  );

  window.addEventListener("scroll", () => {
    hasScrolled = true;
  });

  //  SAFE EXIT
  const captureExit = () => {
    GTMService.triggerEvent(
      "time_on_landing_page_seconds",
      {value: Math.floor((Date.now() - startTime) / 1000)}
    );
    GTMService.triggerEvent("idle_time_seconds", {value: idleSeconds});
    GTMService.triggerEvent("bounce_before_scroll", {value: !hasScrolled});
  };

  window.addEventListener("pagehide", captureExit);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      captureExit();
    }
  });
};



export function useActiveTimeOnPage() {
  const activeTimeRef = useRef(0);
  const lastActiveStartRef = useRef(null);
  const inactivityTimerRef = useRef(null);

  const INACTIVITY_LIMIT = 15000; // 15s

  const startActiveSession = () => {
    if (!lastActiveStartRef.current) {
      lastActiveStartRef.current = Date.now();
    }
  };

  const stopActiveSession = () => {
    if (lastActiveStartRef.current) {
      activeTimeRef.current += Date.now() - lastActiveStartRef.current;
      lastActiveStartRef.current = null;
    }
  };

  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(
      stopActiveSession,
      INACTIVITY_LIMIT
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleActivity = () => {
      if (document.visibilityState === "visible") {
        startActiveSession();
        resetInactivityTimer();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopActiveSession();
      }
    };

    const events = [
      "scroll",
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart"
    ];

    events.forEach(e =>
      window.addEventListener(e, handleActivity, { passive: true })
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    // start immediately if page is visible
    handleActivity();

    return () => {
      stopActiveSession();
      clearTimeout(inactivityTimerRef.current);

      events.forEach(e =>
        window.removeEventListener(e, handleActivity)
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return {
    getActiveTimeSeconds: () => {
      if (lastActiveStartRef.current) {
        activeTimeRef.current +=
          Date.now() - lastActiveStartRef.current;
        lastActiveStartRef.current = Date.now();
      }

      return Math.round(activeTimeRef.current / 1000);
    }
  };

}

