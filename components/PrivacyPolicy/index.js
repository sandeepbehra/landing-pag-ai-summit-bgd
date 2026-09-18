"use client";

import React from "react";
import { companyName } from "@/utils/constants";
import {
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPolicy = () => {
  const router = useRouter();

  const sections = [
    {
      title: "Disclaimer",
      content:
        "This website is only for the purpose of providing information regarding real estate projects in different regions. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company. Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/ information on this website.",
    },
    {
      title: "RERA Compliance Notice",
      content:
        "Please also note that the company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about the RERA registration status of the listed real estate projects before purchasing property.",
    },
    {
      title: "Privacy Policy Introduction",
      content:
        "In our endeavor and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.",
    },
    {
      title: "Updation of Privacy Policy",
      content:
        "This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.",
    },
    {
      title: "User Information",
      content:
        "By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party.",
    },
    {
      title: "Security",
      content:
        "To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality. Use of cookies: We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F9FC] font-sans">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue Glow */}
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#3b82f6]/10 blur-[150px]" />

        <div className="absolute -left-48 top-[45%] h-[450px] w-[450px] rounded-full bg-[#2563eb]/[0.06] blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2563eb 1px, transparent 1px),
              linear-gradient(to bottom, #2563eb 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="relative z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="cursor-pointer"
            aria-label="Go to home"
          >
            <img
              src="/logo.png"
              alt="Big Estate"
              className="h-9 w-auto object-contain md:h-11"
            />
          </button>

          {/* Back */}
          <button
            type="button"
            onClick={() => router.back()}
            className="
              group flex items-center gap-2
              rounded-full border border-slate-200
              bg-white px-4 py-2
              text-xs font-medium text-slate-600
              shadow-sm transition-all duration-300
              hover:border-blue-200
              hover:text-[#2563eb]
            "
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back
          </button>
        </div>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 md:pb-14 md:pt-20 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#3b82f6]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#2563eb]">
                Legal & Policies
              </span>

              <span className="h-px w-8 bg-[#3b82f6]" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#0F172A] md:text-5xl">
              Privacy{" "}
              <span className="text-[#3b82f6]">
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              How we collect, use and protect information when you
              interact with {companyName || "Big Estate"}.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          POLICY CONTENT
      ===================================================== */}

      <section className="relative z-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <div
            className="
              overflow-hidden rounded-[24px]
              border border-slate-200
              bg-white
              shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              md:rounded-[28px]
            "
          >
            {/* ================= CARD HEADER ================= */}

            <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white to-white px-6 py-5 sm:px-8 md:px-10">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563eb] text-white shadow-[0_8px_20px_rgba(37,99,235,0.2)]">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Your privacy matters
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Please read the following information carefully.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= SECTIONS ================= */}

            <div className="px-6 sm:px-8 md:px-10">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  className="
                    group grid gap-4
                    border-b border-slate-100
                    py-8
                    last:border-b-0
                    md:grid-cols-[70px_1fr]
                    md:gap-6
                    md:py-10
                  "
                >
                  {/* Number */}
                  <div>
                    <span
                      className="
                        inline-flex h-9 min-w-9
                        items-center justify-center
                        rounded-full
                        border border-blue-100
                        bg-blue-50
                        px-2
                        text-xs font-semibold
                        text-[#2563eb]
                        transition-all duration-300
                        group-hover:border-[#3b82f6]
                        group-hover:bg-[#2563eb]
                        group-hover:text-white
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-[#0F172A] sm:text-xl md:text-2xl">
                      {section.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                      {section.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =================================================
              BOTTOM NOTE
          ================================================= */}

          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-xs leading-6 text-slate-400">
              By continuing to use this website, you acknowledge that
              you have read and understood this Privacy Policy.
            </p>

            <p className="mt-2 text-xs font-medium text-slate-500">
              © {new Date().getFullYear()}{" "}
              {companyName || "Big Estate"}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;