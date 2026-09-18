"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { POST } from "@/services/APIService";
import GTMService from "@/services/GTMService";
import { Phone } from "@mui/icons-material";
import OtpModalComponent from "../OTPModal";
import { companyName } from "@/utils/constants";
import { landingPageTracker } from "@/lib/tracking/universal";
import {
  ERP_PROJECT_ID,
  USER_FINGERPRINT,
  USER_SESSION,
} from "@/utils/constants";

function parseMobileNumber(phone) {
  const parsedNumber = phone.replace(/\D/g, "");

  return parsedNumber;
}

const FormWithOtp = ({
  buttonClasses = "",
  setOpenModal,
  width,
  textColor = "text-white",
  placeholderColor = "placeholder-white",
}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkboxVal, setCheckboxVal] = useState(null);

  const checkboxData = ["3Cr - 4Cr", "4Cr - 5Cr", "5Cr - 6Cr", "6Cr+"];

  const [openOtpModal, setOpenOtpModal] = useState(false);
  const [otpVerificationStarted, setOtpVerificationStarted] = useState(false); // tells the state if verification started or not
  const [otpVerificationFailed, setOtpVerificationFailed] = useState(true); // tells if verification failed

  const router = useRouter();
  const formSubmitted = useRef(false);
  // --- TRACKING LOGIC: Build Events ---
  const buildEventsList = (exitValue) => {
    const intentData = landingPageTracker.getPayload();
    const eventsList = Object.entries(intentData).map(([key, value]) => ({
      eventName: key,
      value,
    }));

    eventsList.push({
      eventName: "exit_without_form_submit",
      value: exitValue,
    });

    return eventsList;
  };

  // --- TRACKING LOGIC: Exit Without Submit ---
  useEffect(() => {
    // Initialize global tracking flag if it doesn't exist
    if (
      typeof window !== "undefined" &&
      window.__exitWithoutSubmitSent === undefined
    ) {
      window.__exitWithoutSubmitSent = false;
    }

    const sendExitEvent = () => {
      // Check global window flag instead of local variable
      if (window.__exitWithoutSubmitSent || formSubmitted.current) return;

      window.__exitWithoutSubmitSent = true; // Block all future global triggers

      const eventsList = buildEventsList(true);
      const payload = {
        pageUrl: window.location.href,
        events: eventsList,
        erpProject: ERP_PROJECT_ID,
        userFingerPrint: JSON.parse(localStorage.getItem(USER_FINGERPRINT)),
        userSession: JSON.parse(localStorage.getItem(USER_SESSION)),
      };

      const blob = new Blob([JSON.stringify(payload)], {
        type: "text/plain",
      });
      const url =
        "https://oe1zo030ri.execute-api.ap-south-1.amazonaws.com/dev/user/event";

      const success = navigator.sendBeacon(url, blob);
      if (!success) {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
          keepalive: true,
        });
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendExitEvent();
      }
    };

    window.addEventListener("beforeunload", sendExitEvent);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", sendExitEvent);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedNumber = parseMobileNumber(phone); //number parsing function to check for valid number

    if (isNaN(parsedNumber) || parsedNumber.length < 10) {
      setError(true);
      setErrorMessage("Invalid Mobile Number");
      return;
    }

    // sending OTP on whatsapp
    POST("https://api.bigestate.io/api/v1/sendWhatsappOtp", {
      phone,
      projectName: companyName,
    })
      .then((response) => {
        if (response.result.success) {
          setOpenOtpModal((prev) => !prev);
        } else {
          setError(true);
          setErrorMessage("OTP generation failed");
        }
      })
      .catch((error) => {
        console.log({ error });
        setError(true);
        setErrorMessage("OTP generation failed");
      });
  };

  // if state of otpVerification changes and there is no error(i.e otp verified), make an api call to the webhook with the same data
  useEffect(() => {
    if (!otpVerificationFailed) {
      const parsedNumber = parseMobileNumber(phone);
      // --- TRACKING LOGIC: Form Submit Intent ---
      formSubmitted.current = true;
      const eventsList = buildEventsList(false);
      POST_TRACK(
        "https://oe1zo030ri.execute-api.ap-south-1.amazonaws.com/dev/user/event",
        {
          pageUrl: window.location.href,
          events: eventsList,
          erpProject: ERP_PROJECT_ID,
        },
      ).catch((err) => console.log("Tracking error:", err));
      // --- NEW: RETRIEVE STORED URL ---
      const STORAGE_KEY = "savedLandingUrl";
      let initialUrl = "";
      if (typeof window !== "undefined") {
        const storedItemStr = localStorage.getItem(STORAGE_KEY);
        const now = new Date().getTime();

        if (storedItemStr) {
          try {
            const storedItem = JSON.parse(storedItemStr);
            if (now > storedItem.expiry) {
              localStorage.removeItem(STORAGE_KEY);
              initialUrl = window.location.href; // Fallback to current URL if expired
            } else {
              initialUrl = storedItem.url; // Use the successfully stored URL
            }
          } catch (e) {
            initialUrl = window.location.href;
          }
        } else {
          initialUrl = window.location.href;
        }
      }
      let gtmEventData = {
        name,
        email,
        phone: parsedNumber,
        message,
        page_url: initialUrl,
      };

      POST(
        "https://api.bigestate.io/api/v1/googleWebhooks?pid=6a8c2609d6eadc361cf41ea7&clid=6a40bb48fd28d38e09580842",
        {
          email,
          phone: parsedNumber,
          name,
          message,
          ["Page URL"]: initialUrl,
          ["Sub URL"]: window.location.href,
        },
      )
        .then((response) => {
          setEmail("");
          setPhone("");
          setName("");
          setMessage("");
          GTMService.triggerEvent("submit_lead_form", gtmEventData);
        })
        .catch((error) => console.log(error.message));

      {
        setOpenModal && setOpenModal(false);
      }
      router.push("/official/thank-you");
    }
  }, [otpVerificationFailed]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        width ? width : "w-full"
      } font-optima h-full flex flex-col gap-4 p-4 justify-center ${textColor}`}
    >
      <div className="flex flex-col gap-4 border-2 border-heading p-4 py-8">
        <div className="flex flex-col items-center gap-4 ">
          {/* <img src="/logo.webp" className="w-1/5" /> */}
          <p
            className={`uppercase text-4xl leading-8 ${textColor} mb-4 text-center`}
          >
            {" "}
            Enquire Now{" "}
          </p>
        </div>
        <div>
          <input
            className={`border-0 border-b-2 border-heading bg-transparent w-full ${placeholderColor}`}
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your Name*"
            required
          />
        </div>
        <div>
          <input
            className={`border-0 border-b-2 border-heading bg-transparent w-full ${placeholderColor}`}
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Email*"
            required
          />
        </div>
        <div>
          <input
            className={`border-0 border-b-2 border-heading bg-transparent w-full ${placeholderColor}`}
            minLength={10}
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              setError(false);
            }}
            placeholder="Whatsapp Number*"
            required
          />
        </div>
        <div>
          <input
            className={`border-0 border-b-2 border-heading bg-transparent w-full ${placeholderColor}`}
            id="message"
            value={message}
            placeholder="Your Message"
            onChange={(event) => setMessage(event.target.value)}
            type="text"
          />
        </div>
        {error && <div className="${textColor}">{errorMessage}</div>}
        <button
          className={` bg-heading text-white p-2 flex items-center justify-center filter hover:brightness-125 ${
            buttonClasses && !buttonClasses
          }`}
          disabled={error}
          type="submit"
        >
          Get OTP on Whatsapp
        </button>
        <div className="flex text-white gap-4 items-center justify-center">
          <Phone className="text-base" />
          Get Callback In 24 Hours
        </div>
      </div>
      {setOpenOtpModal && (
        <OtpModalComponent
          setError={setError}
          setErrorMessage={setErrorMessage}
          phone={phone}
          setOtpVerificationFailed={setOtpVerificationFailed}
          setOpenOtpModal={setOpenOtpModal}
          openOtpModal={openOtpModal}
        />
      )}
      {/* <div className="text-sm">
          By clicking submit, you agree to your personal information being
          collected, held, used and disclosed by us in accordance with
          our 
          <a className="underline underline-offset-4" href="/privacyPolicy"> Privacy Policy </a>.
        </div> */}
    </form>
  );
};

export default FormWithOtp;
