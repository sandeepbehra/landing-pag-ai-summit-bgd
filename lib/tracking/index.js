// lib/landing-tracking/index.js
import { initSessionTracking } from "./session";
import { initScrollTracking } from "./scroll";
import { initInteractionTracking } from "./interactions";

export const initLandingTracking = () => {
  if (typeof window === "undefined") return;
  if (window.__landingTrackingInitialized) return;

  window.__landingTrackingInitialized = true;

  initSessionTracking();
  // initScrollTracking();
  initInteractionTracking();
};
