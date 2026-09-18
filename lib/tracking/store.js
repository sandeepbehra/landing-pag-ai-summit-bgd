// lib/landing-tracking/store.js
const landingMetrics = {};

export const setMetric = (key, value) => {
  landingMetrics[key] = value;
};

export const getMetrics = () => ({ ...landingMetrics });
