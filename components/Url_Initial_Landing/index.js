  "use client";

  import { useEffect } from "react";

  export default function Url_Initial_Landing() {
    useEffect(() => {
      const STORAGE_KEY = "savedLandingUrl";
        const EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours
      // const EXPIRY_TIME = 2 * 60 * 1000;
      if (typeof window !== "undefined") {
        const storedItemStr = localStorage.getItem(STORAGE_KEY);
        const now = new Date().getTime();
        let shouldStoreNewUrl = false;

        if (storedItemStr) {
          try {
            const storedItem = JSON.parse(storedItemStr);
            if (now > storedItem.expiry) {
              localStorage.removeItem(STORAGE_KEY);
              shouldStoreNewUrl = true;
            }
          } catch (e) {
            localStorage.removeItem(STORAGE_KEY);
            shouldStoreNewUrl = true;
          }
        } else {
          shouldStoreNewUrl = true;
        }

        if (shouldStoreNewUrl) {
          const item = { url: window.location.href, expiry: now + EXPIRY_TIME };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
        }
      }
    }, []);

    return null; // This tells React to render nothing, keeping it invisible
  }