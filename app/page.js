"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Components
import LandingPage from "@/components/LandingPage";
import UserTracker from "@/components/userTracker";

// Services & Hooks
import GTMService from "@/services/GTMService";
import { useFingerprint } from "@/hooks/useFingerprint";
import { POST_TRACK } from "@/services/APIService";
import { initLandingTracking } from "@/lib/tracking";

// Constants (Make sure these are set correctly for Asaya in your constants file)
import { 
  ERP_PROJECT_ID, 
  USER_FINGERPRINT, 
  USER_SESSION 
} from "@/utils/constants";

function HomeContent() {
  const searchParams = useSearchParams();
  const { fingerprint } = useFingerprint();

  // 1. Handle Fingerprint and Guest User Registration
  useEffect(() => {
    if (fingerprint) {
      console.log("Visitor fingerprint:", fingerprint);
      
      POST_TRACK("https://oe1zo030ri.execute-api.ap-south-1.amazonaws.com/dev/user/guestUser", {
        fingerPrint: fingerprint,
        erpProject: ERP_PROJECT_ID,
      })
        .then((data) => {
          // Store the returned fingerprint and session ID
          console.log("user data value", data);
          if (data?.data) {
            localStorage.setItem(USER_FINGERPRINT, JSON.stringify(data.data.fingerPrint));
            localStorage.setItem(USER_SESSION, JSON.stringify(data.data._id));
          }
        })
        .catch((err) => {
          console.error("Failed to register guest user:", err);
        });
    }
  }, [fingerprint]);

  // 2. Store URL Search Parameters
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const paramsObj = Object.fromEntries(searchParams.entries());
    if (Object.keys(paramsObj).length > 0) {
      localStorage.setItem("params", JSON.stringify(paramsObj));
    }
  }, [searchParams]);

  // 3. Track Page Load Event
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const timetrack = new Date().toISOString();

    const handleLoad = () => {
      GTMService.triggerEvent("landing_page_entered_timestamp", {
        value: timetrack,
      });
    };

    // If document is already loaded, fire immediately
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // 4. Initialize Scroll/Section Tracking
  useEffect(() => {
    if (typeof initLandingTracking === "function") {
      initLandingTracking();
    }
  }, []);

  return (
    <div>
      <LandingPage />
      <UserTracker /> 
    </div>
  );
}

export default function Home() {
  return (
    // Suspense is required by Next.js when using useSearchParams in a Client Component
    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
      <HomeContent />
    </Suspense>
  );
}