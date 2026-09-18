// hooks/useFingerprint.ts
import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { USER_FINGERPRINT,USER_SESSION } from '@/utils/constants';

export function useFingerprint() {
  const [fingerprint, setFingerprint] = useState(null);
  const [session, setSession] = useState(null);
 console.log("doman 1")
  useEffect(() => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") return;

    // const userSessionData = JSON.parse(localStorage.getItem(USER_SESSION));
    const storedFingerPrint = JSON.parse(localStorage.getItem(USER_FINGERPRINT));
    let isMounted = true;
    if (!storedFingerPrint || !storedFingerPrint.length) {
      async function loadFingerprint() {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        console.log("result finger print", result);
        console.log("doman 2")
        
        if (isMounted) {
          setFingerprint(result.visitorId);
          console.log("doman 6")
        }
      }
      loadFingerprint();
    }
    setFingerprint(storedFingerPrint)
    // if (userSession || userSession.length) {
    //   setSession(userSessionData)
    // }

    return () => {
      isMounted = false;
    };
  }, []);
  console.log("doman 3 ->",fingerprint)
  return {fingerprint};
}
