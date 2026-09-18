

// landingPageTracker.ts
import { sectionsConfig } from "@/utils/constants";
export function createLandingPageTracker() {

  // Prevent server-side execution
  if (typeof window === "undefined") {
    return {
      getPayload: () => ({})
    };
  }
  
  const viewedDefaults = Object.fromEntries(
  sectionsConfig.map(({ key }) => [key, false])
);;
  
  const state = {
    landing_page_entered_timestamp: new Date().toISOString(),

    pageLoadStart: performance.now(),
    pageLoadEnd: null,
    time_on_landing_page_seconds: 0,
    form_start_time: null,
    form_completion_time_seconds: 0,
    idle_time_seconds: 0,
    max_scroll_percent: 0,
    total_scroll_distance: 0,
    total_scroll_time: 0,
    last_scroll_y: window.scrollY,
    last_scroll_time: performance.now(),
    clicked_call_button: false,
    clicked_whatsapp_button: false,
    form_field_focus_count: 0,
    bounce_before_scroll: true,
    last_activity_time: Date.now(),
    ...viewedDefaults
    
  };

  /* ---------------- PAGE LOAD ---------------- */

  window.addEventListener("load", () => {
    state.pageLoadEnd = performance.now();
  });

  /* ---------------- SCROLL ---------------- */

  window.addEventListener("scroll", () => {

    const now = performance.now();
    const currentY = window.scrollY;

    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const percent =
      docHeight > 0 ? Math.round((currentY / docHeight) * 100) : 0;

    state.max_scroll_percent = Math.max(state.max_scroll_percent, percent);

    if (currentY > window.innerHeight * 0.2) {
      state.bounce_before_scroll = false;
    }

    const deltaY = Math.abs(currentY - state.last_scroll_y);
    const deltaTime = (now - state.last_scroll_time) / 1000;

    if (deltaTime > 0) {
      state.total_scroll_distance += deltaY;
      state.total_scroll_time += deltaTime;
    }

    state.last_scroll_y = currentY;
    state.last_scroll_time = now;

    state.last_activity_time = Date.now();
  });

  /* ---------------- IDLE ---------------- */

  setInterval(() => {

    const now = Date.now();

    if (now - state.last_activity_time > 30000) {
      state.idle_time_seconds += 1;
    }

  }, 1000);

  /* ---------------- SECTION TRACKING ---------------- */

  function trackSectionView(selector, callback) {

    const element = document.querySelector(selector);

    if (!element) return;

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            callback();

            observer.unobserve(entry.target);

          }

        });

      },

      { threshold: 0.2 }

    );

    observer.observe(element);

  }


  function registerSections() {
  sectionsConfig.forEach(({ name, key }) => {
    const selector = `[data-track="${name}"]`;

    trackSectionView(selector, () => {
      state[key] = true;
    });
  });
}
  setTimeout(() => {

    registerSections();

  }, 1200);

  /* ---------------- CLICK TRACKING ---------------- */

  document.addEventListener("click", (e) => {

    const target = e.target.closest("[data-track]");
    const action = target?.dataset?.track;

    if (!action) return;

    if (action === "call") state.clicked_call_button = true;
    if (action === "whatsapp") state.clicked_whatsapp_button = true;

    state.last_activity_time = Date.now();

  });

  /* ---------------- FORM ---------------- */

  document.addEventListener("focusin", (e) => {

    const target = e.target;

    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {

      state.form_field_focus_count += 1;

      if (!state.form_start_time) {

        state.form_start_time = Date.now();

      }

    }

  });

  /* ---------------- PAYLOAD ---------------- */

 

  function getPayload() {
  const now = Date.now();

  //  dynamically collect all viewed_* fields
  const viewedPayload = Object.fromEntries(
    sectionsConfig.map(({ key }) => [key, state[key]])
  );

  return {
    landing_page_entered_timestamp: state.landing_page_entered_timestamp,

    time_on_landing_page_seconds: Math.floor(
      (now - new Date(state.landing_page_entered_timestamp).getTime()) / 1000
    ),

    scroll_depth_percent: state.max_scroll_percent,

    ...viewedPayload, //  all viewed_* fields injected dynamically

    clicked_call_button: state.clicked_call_button,
    clicked_whatsapp_button: state.clicked_whatsapp_button,
    form_field_focus_count: state.form_field_focus_count,
    idle_time_seconds: state.idle_time_seconds,
    bounce_before_scroll: state.bounce_before_scroll,

    page_load_time_ms: state.pageLoadEnd
      ? Math.round(state.pageLoadEnd - state.pageLoadStart)
      : null
  };
}
  return { getPayload };

}

export const landingPageTracker = createLandingPageTracker();