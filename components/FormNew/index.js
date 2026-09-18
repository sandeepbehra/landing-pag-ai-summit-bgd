"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { POST, POST_TRACK } from "@/services/APIService";
import GTMService from "@/services/GTMService";
import { landingPageTracker } from "@/lib/tracking/universal";
import { ERP_PROJECT_ID, USER_FINGERPRINT, USER_SESSION } from "@/utils/constants";
import { CalendarMonth, Description, Phone, Close } from "@mui/icons-material";

function parseMobileNumber(phone) {
  return phone?.replaceAll("-")?.replaceAll(" ", "");
}

const FormNew = ({ setOpenModal, useCase = null }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(""); 
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const formSubmitted = useRef(false);

  const router = useRouter();

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

  // Tracking: exit without form submit
  useEffect(() => {
    let exitSent = false;
    const sendExitEvent = () => {
      if (exitSent || formSubmitted.current) return;
      exitSent = true;
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
    setSubmitting(true);
    const parsedNumber = parseMobileNumber(phone);

    if (!parsedNumber || parsedNumber?.length !== 10) {
      setError(true);
      setErrorMessage("Invalid mobile number");
      setSubmitting(false);
      return;
    }

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
            initialUrl = window.location.href; 
          } else {
            initialUrl = storedItem.url; 
          }
        } catch (e) {
          initialUrl = window.location.href;
        }
      } else {
        initialUrl = window.location.href;
      }
    }

    const eventsList = buildEventsList(false);
    formSubmitted.current = true;

    POST_TRACK("https://oe1zo030ri.execute-api.ap-south-1.amazonaws.com/dev/user/event", {
      pageUrl: window.location.href,
      events: eventsList,
      erpProject: ERP_PROJECT_ID,
    });

    let gtmEventData = { name, email, phone: parsedNumber, message:company, page_url: initialUrl };

    POST("https://api.bigestate.io/api/v1/googleWebhooks?pid=6aabc8a0fb2b524312796416&clid=671b73c62eae0c41c7fa25d1", { 
        email, 
        phone: parsedNumber, 
        name, 
        message : company, 
        ["Page URL"]: initialUrl,
        ["Sub URL"]: window.location.href,
    })
      .then(() => {
        GTMService.triggerEvent("submit_lead_form", gtmEventData);
        
        if (useCase === "downloadBrochure") {
          const brochureUrl = "/brochure.pdf";
          const link = document.createElement("a");
          link.href = brochureUrl;
          link.setAttribute("download", "Real_Estate_AI_Summit_Brochure.pdf");
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);

          if (setOpenModal) setOpenModal(false);
          router.push("/thank-you");
          return;
        }

        if (setOpenModal) setOpenModal(false);
        router.push("/thank-you");
      })
      .catch((err) => console.log(err.message))
      .finally(() => setSubmitting(false));
  };

 return (
  <div
    className="
      relative w-[94vw] max-w-[920px]
      overflow-hidden rounded-[24px]
      bg-white
      shadow-[0_30px_100px_rgba(0,0,0,0.30)]
      font-sans
      md:grid md:grid-cols-[36%_64%]
    "
  >
    {/* ================= CLOSE ================= */}

    {setOpenModal && (
      <button
        type="button"
        onClick={() => setOpenModal(false)}
        aria-label="Close"
        className="
          absolute right-4 top-4 z-50
          flex h-9 w-9 items-center justify-center
          rounded-full border border-slate-200
          bg-white text-slate-500
          shadow-sm transition
          hover:bg-slate-100 hover:text-slate-950
        "
      >
        <Close fontSize="small" />
      </button>
    )}

    {/* =====================================================
        LEFT — EVENT BRANDING
    ===================================================== */}

    <div
      className="
        relative hidden overflow-hidden
        bg-[#061747]
        px-8 py-9 text-white
        md:flex md:flex-col md:justify-between
      "
    >
      {/* glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#3b82f6]/25 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#2563eb]/25 blur-[90px]" />

      {/* dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* TOP */}
      <div className="relative z-10">
        <img
          src="/logo.png"
          alt="Big Estate"
          className="h-10 w-auto object-contain brightness-0 invert"
        />

        <div className="mt-10 flex items-center gap-3">
          {/* <span className="h-[2px] w-7 bg-[#60A5FA]" /> */}

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-100">
            Real Estate AI Summit 2026
          </span>
        </div>

        {/* <h2 className="mt-5 text-[32px] font-semibold leading-[1.12] tracking-tight">
          Be in the room
          <span className="block text-blue-300">
            where the future
          </span>
          gets discussed.
        </h2>

        <p className="mt-5 max-w-[260px] text-sm leading-6 text-white/60">
          Join real estate leaders for one focused evening on how AI
          is changing marketing, sales and deal-making.
        </p> */}

        {/* Event information */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300">
              <CalendarMonth sx={{ fontSize: 18 }} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                Date & Time
              </p>

              <p className="mt-0.5 text-xs font-medium text-white">
                October 6, 2026 · 6:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300">
              <span className="text-base">✦</span>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                The Evening
              </p>

              <p className="mt-0.5 text-xs font-medium text-white">
                Panel · Felicitation · Dinner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-10 border-t border-white/10 pt-5">
        <p className="text-xs leading-5 text-white/45">
          Limited attendance for meaningful conversations and
          connections.
        </p>

        <a
          href="tel:+917991479011"
          className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-white transition hover:text-blue-300"
        >
          <Phone
            sx={{ fontSize: 15 }}
            className="text-blue-300"
          />

          +91 7991479011
        </a>
      </div>
    </div>

    {/* =====================================================
        RIGHT — FORM
    ===================================================== */}

    <div className="relative flex flex-col justify-center px-6 py-7 sm:px-8 md:px-10 md:py-9">
      
      {/* Mobile only branding */}
      <div className="mb-6 pr-12 md:hidden">
        <img
          src="/logo.png"
          alt="Big Estate"
          className="mb-5 h-9 w-auto"
        />

        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
          Real Estate AI Summit 2026
        </span>
      </div>

      {/* ================= HEADER ================= */}

      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Registration
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-[#0F172A] md:text-3xl">
          Register for the Summit
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Enter your details to receive your event confirmation.
        </p>
      </div>

      {/* ================= FORM ================= */}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* NAME + EMAIL */}

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-700">
              Full name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Your full name"
              required
              className="
                h-[48px] w-full rounded-xl
                border border-slate-200
                bg-[#F8FAFC] px-4
                text-sm text-slate-950
                outline-none transition
                placeholder:text-slate-400
                focus:border-[#3b82f6]
                focus:bg-white
                focus:ring-4 focus:ring-blue-500/10
              "
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-700">
              Email address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="you@company.com"
              required
              className="
                h-[48px] w-full rounded-xl
                border border-slate-200
                bg-[#F8FAFC] px-4
                text-sm text-slate-950
                outline-none transition
                placeholder:text-slate-400
                focus:border-[#3b82f6]
                focus:bg-white
                focus:ring-4 focus:ring-blue-500/10
              "
            />
          </div>
        </div>

        {/* MOBILE + COMPANY */}

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Mobile */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-700">
              Mobile number
            </label>

            <div
              className={`
                flex h-[48px] overflow-hidden rounded-xl
                border bg-[#F8FAFC]
                transition
                focus-within:bg-white
                focus-within:ring-4
                focus-within:ring-blue-500/10

                ${
                  error
                    ? "border-red-400"
                    : "border-slate-200 focus-within:border-[#3b82f6]"
                }
              `}
            >
              <div className="flex shrink-0 items-center border-r border-slate-200 px-3">
                <span className="text-xs font-medium text-slate-600">
                  +91
                </span>
              </div>

              <input
                type="tel"
                value={phone}
                inputMode="numeric"
                onChange={(e) => {
                  const { value } = e.target;

                  if (
                    /^\d*$/.test(value) &&
                    value.length <= 10
                  ) {
                    setPhone(value);
                    setError(false);
                  }
                }}
                placeholder="10-digit number"
                required
                className="
                  min-w-0 w-full rounded-tr-xl rounded-br-xl
                  bg-transparent px-3
                  text-sm text-slate-950
                  outline-none
                  placeholder:text-slate-400
                "
              />
            </div>

            {error && (
              <p className="mt-1 text-xs font-medium text-red-500">
                {errorMessage}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-xs font-medium text-slate-700">
                Company
              </label>

              <span className="text-[9px] text-slate-400">
                Optional
              </span>
            </div>

            <input
              type="text"
              value={company}
              onChange={(e) =>
                setCompany(e.target.value)
              }
              placeholder="Company name"
              className="
                h-[48px] w-full rounded-xl
                border border-slate-200
                bg-[#F8FAFC] px-4
                text-sm text-slate-950
                outline-none transition
                placeholder:text-slate-400
                focus:border-[#3b82f6]
                focus:bg-white
                focus:ring-4 focus:ring-blue-500/10
              "
            />
          </div>
        </div>

        {/* ================= CTA ================= */}

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="
              group flex h-[50px] w-full
              items-center justify-center gap-2
              rounded-xl
              bg-[#2563eb]
              text-sm font-semibold text-white
              shadow-[0_8px_22px_rgba(37,99,235,0.22)]
              transition-all duration-300
              hover:bg-[#1d4ed8]
              hover:shadow-[0_12px_28px_rgba(37,99,235,0.30)]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                Processing...
              </>
            ) : (
              <>
               Register Now

                {/* <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span> */}
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <p className="text-center text-[10px] leading-5 text-slate-400">
            Limited seats · Confirmation details will be sent after
            registration.
          </p>
        </div>
      </form>
    </div>
  </div>
);
};

export default FormNew;

// // NewContactUs.jsx
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { POST, POST_TRACK } from "@/services/APIService";
// import GTMService from "@/services/GTMService";
// import { User, Phone, Mail, Send } from "lucide-react";
// import { landingPageTracker } from "@/lib/tracking/universal";
// import {
//   ERP_PROJECT_ID,
//   USER_FINGERPRINT,
//   USER_SESSION,
// } from "@/utils/constants";

// function parseMobileNumber(phone) {
//   let cleanedPhone = phone.replace(/\D/g, "");
//   cleanedPhone = cleanedPhone.replace(/^(\+91|0)/, "");
//   return /^[6-9]\d{9}$/.test(cleanedPhone) ? cleanedPhone : null;
// }

// const NewContactUs = ({ setOpenModal }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState(false);
//   const [isChecked, setIsChecked] = useState(true);

//   const router = useRouter();

//   const [errorMessage, setErrorMessage] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const formSubmitted = useRef(false);

//   // --- TRACKING LOGIC: Build Events ---
//   const buildEventsList = (exitValue) => {
//     const intentData = landingPageTracker.getPayload();
//     const eventsList = Object.entries(intentData).map(([key, value]) => ({
//       eventName: key,
//       value,
//     }));

//     eventsList.push({
//       eventName: "exit_without_form_submit",
//       value: exitValue,
//     });

//     return eventsList;
//   };

//   // --- TRACKING LOGIC: Exit Without Submit ---
//   useEffect(() => {
//     if (
//       typeof window !== "undefined" &&
//       window.__exitWithoutSubmitSent === undefined
//     ) {
//       window.__exitWithoutSubmitSent = false;
//     }

//     const sendExitEvent = () => {
//       if (window.__exitWithoutSubmitSent || formSubmitted.current) return;

//       window.__exitWithoutSubmitSent = true;

//       const eventsList = buildEventsList(true);
//       const payload = {
//         pageUrl: window.location.href,
//         events: eventsList,
//         erpProject: ERP_PROJECT_ID,
//         userFingerPrint: JSON.parse(localStorage.getItem(USER_FINGERPRINT)),
//         userSession: JSON.parse(localStorage.getItem(USER_SESSION)),
//       };

//       const blob = new Blob([JSON.stringify(payload)], {
//         type: "text/plain",
//       });
//       const url =
//         "https://oe1zo030ri.execute-api.ap-south-1.amazonaws.com/dev/user/event";

//       const success = navigator.sendBeacon(url, blob);
//       if (!success) {
//         fetch(url, {
//           method: "POST",
//           body: JSON.stringify(payload),
//           headers: {
//             "Content-Type": "application/json",
//           },
//           keepalive: true,
//         });
//       }
//     };

//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "hidden") {
//         sendExitEvent();
//       }
//     };

//     window.addEventListener("beforeunload", sendExitEvent);
//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       window.removeEventListener("beforeunload", sendExitEvent);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!isChecked) {
//       alert("Please authorize contact to proceed.");
//       return;
//     }

//     setSubmitting(true);
//     const parsedNumber = parseMobileNumber(phone);

//     if (!parsedNumber) {
//       setError(true);
//       setErrorMessage("Invalid Mobile Number*");
//       setSubmitting(false);
//       return;
//     }
//      // --- NEW: RETRIEVE STORED URL ---
//     const STORAGE_KEY = "savedLandingUrl";
//     let initialUrl = "";
//     if (typeof window !== "undefined") {
//       const storedItemStr = localStorage.getItem(STORAGE_KEY);
//       const now = new Date().getTime();

//       if (storedItemStr) {
//         try {
//           const storedItem = JSON.parse(storedItemStr);
//           if (now > storedItem.expiry) {
//             localStorage.removeItem(STORAGE_KEY);
//             initialUrl = window.location.href; // Fallback to current URL if expired
//           } else {
//             initialUrl = storedItem.url; // Use the successfully stored URL
//           }
//         } catch (e) {
//           initialUrl = window.location.href;
//         }
//       } else {
//         initialUrl = window.location.href;
//       }
//     }
//     // --- TRACKING LOGIC: Form Submit Intent ---
//     formSubmitted.current = true;
//     const eventsList = buildEventsList(false);
//     POST_TRACK(
//       "https://oe1zo030ri.execute-api.ap-south-1.amazonaws.com/dev/user/event",
//       {
//         pageUrl: window.location.href,
//         events: eventsList,
//         erpProject: ERP_PROJECT_ID,
//       },
//     ).catch((err) => console.log("Tracking error:", err));

//     let gtmEventData = {
//       name,
//       email,
//       phone: parsedNumber,
//       page_url: initialUrl,
//     };

//     POST(
//       "https://api.bigestate.io/api/v1/googleWebhooks?pid=6a8c2609d6eadc361cf41ea7&clid=6a40bb48fd28d38e09580842",
//       {
//         email,
//         phone: parsedNumber,
//         name,
//         ["Page URL"]: initialUrl,
//         ["Sub URL"]: window.location.href,
//       }
//     )
//       .then(() => {
//         setEmail("");
//         setPhone("");
//         setName("");
//         GTMService.triggerEvent("submit_lead_form", gtmEventData);
//         if (setOpenModal) setOpenModal(false); // Close modal on success if prop exists
//       })
//       .catch((error) => console.log(error.message));

//     setSubmitting(false);
//     router.push("/thank-you");
//   };

//   return (
//     <section id="contact-us" className="w-full max-w-md mx-auto font-sans bg-white p-4 sm:p-4 relative ">
      
//       {/* Header Section */}
//       <div className="text-center mb-6">
//         <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C57B43] mb-1">
//           Register Interest
//         </span>
//         <h2 className="text-3xl sm:text-4xl font-serif text-[#17362B] tracking-wide">
//           ENQUIRE NOW
//         </h2>
//       </div>

//       <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        
//         {/* Full Name */}
//         <div className="flex flex-col gap-2">
//           <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#17362B]">
//             Full Name
//           </label>
//           <div className="relative flex items-center">
//             <User className="absolute left-4 w-4 h-4 text-gray-400" strokeWidth={1.5} />
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full pl-11 pr-4 py-2.5 bg-[#FAFAFA] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#17362B] transition-colors placeholder:text-gray-400"
//               placeholder="Enter your name"
//             />
//           </div>
//         </div>

//         {/* Phone Number */}
//         <div className="flex flex-col gap-2">
//           <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#17362B]">
//             Phone Number
//           </label>
//           <div className="relative flex items-center">
//             <Phone className="absolute left-4 w-4 h-4 text-gray-400" strokeWidth={1.5} />
//             <input
//               id="phone"
//               type="tel"
//               minLength={10}
//               value={phone}
//               onChange={(e) => {
//                 setPhone(e.target.value);
//                 setError(false);
//               }}
//               required
//               className={`w-full pl-11 pr-4 py-2.5 bg-[#FAFAFA] border ${
//                 error ? "border-red-500" : "border-gray-200 focus:border-[#17362B]"
//               } text-gray-800 text-sm focus:outline-none transition-colors placeholder:text-gray-400`}
//               placeholder="Enter your 10-digit phone"
//             />
//           </div>
//           {error && <span className="text-red-500 text-[10px] font-medium">{errorMessage}</span>}
//         </div>

//         {/* Email Address */}
//         <div className="flex flex-col gap-2">
//           <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#17362B]">
//             Email Address
//           </label>
//           <div className="relative flex items-center">
//             <Mail className="absolute left-4 w-4 h-4 text-gray-400" strokeWidth={1.5} />
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full pl-11 pr-4 py-2.5 bg-[#FAFAFA] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#17362B] transition-colors placeholder:text-gray-400"
//               placeholder="Enter your email"
//             />
//           </div>
//         </div>

//         {/* Checkbox */}
//         <div className="flex items-start gap-3 pt-2 mb-2">
//           <div className="relative flex items-center justify-center mt-0.5 shrink-0">
//             <input
//               type="checkbox"
//               id="authorize"
//               checked={isChecked}
//               onChange={(e) => setIsChecked(e.target.checked)}
//               className="peer appearance-none w-4 h-4 border border-[#C57B43] rounded-sm checked:bg-transparent cursor-pointer transition-all"
//             />
//             {/* Custom Checkmark matching the image's copper tone */}
//             <svg
//               className={`absolute w-3 h-3 text-[#C57B43] pointer-events-none transition-opacity ${
//                 isChecked ? "opacity-100" : "opacity-0"
//               }`}
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="20 6 9 17 4 12" />
//             </svg>
//           </div>
//           <label htmlFor="authorize" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
//             I authorize Mana Skanda to contact me with updates and offers via WhatsApp, SMS, and Calls.
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="pt-2">
//           <button
//             type="submit"
//             disabled={error || submitting}
//             className="w-full flex items-center justify-center gap-2 bg-[#2D5A43] text-white hover:bg-[#1F2421] py-4 px-6 text-xs font-bold uppercase tracking-[0.2em] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
//           >
//             <span>{submitting ? "Processing..." : "Request Details"}</span>
//             <Send className="w-4 h-4 mb-0.5" strokeWidth={1.5} />
//           </button>
//         </div>

//       </form>
//     </section>
//   );
// };

// export default NewContactUs;