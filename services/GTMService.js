const triggerEvent = (eventName, data) => {
  window.dataLayer = window.dataLayer || [];
  if (typeof dataLayer !== "undefined") {
    if (data && Object.keys(data).length) {
      dataLayer.push({
        event: eventName,
        ...data,
      });
    } else {
      dataLayer.push({
        event: eventName,
      });
    }
  }
};

export default {
  triggerEvent,
};
