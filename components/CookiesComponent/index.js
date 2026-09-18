"use client";

import React from "react";
import { companyName } from "@/utils/constants";
import {
  ArrowLeft,
  Cookie,
} from "lucide-react";
import { useRouter } from "next/navigation";

const CookiesComponent = () => {
  const router = useRouter();

  const sections = [
    {
      title: "What Are Cookies",
      content: `Cookies are small text files that websites, including ${companyName}, send to your browsers when you visit them. They are stored on your computer or mobile device and contain information that the website can access when you revisit it later. Cookies serve various purposes, including enhancing your browsing experience and providing personalized content.`,
    },
    {
      title: "How We Use Cookies",
      content: `At ${companyName}, we use cookies to improve your browsing experience, understand how you interact with our website, and provide personalized services. These cookies help us remember your preferences, maintain your session security, and deliver relevant content based on your interests.`,
    },
    {
      title: "Types of Cookies We Use",
      content:
        "We utilize several types of cookies on our website: Session Cookies - Temporary cookies that are deleted when you close your browser, helping maintain continuity during your visit. Persistent Cookies - Cookies that remain on your device to remember your preferences for future visits. First-Party Cookies - Set directly by our website to improve your experience. Third-Party Cookies - Set by our trusted partners to help us analyze site usage and provide additional services.",
    },
    {
      title: "Managing Your Cookie Preferences",
      content:
        "You have full control over how cookies are used when visiting our website. Most web browsers allow you to modify your cookie settings to accept, reject, or delete cookies. Please note that restricting cookies may impact your experience on our website and limit access to certain features.",
    },
    {
      title: "Cookie Security",
      content:
        "We take the security of your data seriously. All cookies that contain sensitive information are encrypted, and we regularly review our cookie practices to ensure compliance with current privacy regulations and industry standards.",
    },
    {
      title: "Updates to Cookie Policy",
      content: `${companyName} reserves the right to update this cookie policy at any time. We encourage you to periodically review this page to stay informed about how we use cookies and protect your privacy. Continued use of our website indicates your acceptance of our cookie practices.`,
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

          {/* Back Button */}
          <button
            type="button"
            onClick={() => router.back()}
            className="
              group flex items-center gap-2
              rounded-full
              border border-slate-200
              bg-white
              px-4 py-2
              text-xs font-medium text-slate-600
              shadow-sm
              transition-all duration-300
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
              Cookie{" "}
              <span className="text-[#3b82f6]">
                Policy
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Learn how{" "}
              <span className="font-medium text-slate-700">
                {companyName}
              </span>{" "}
              uses cookies to improve your browsing experience and
              understand how you interact with our website.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          COOKIE POLICY CONTENT
      ===================================================== */}

      <section className="relative z-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          
          <div
            className="
              overflow-hidden
              rounded-[24px]
              border border-slate-200
              bg-white
              shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              md:rounded-[28px]
            "
          >
            {/* ===============================================
                DOCUMENT HEADER
            =============================================== */}

            <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white to-white px-6 py-5 sm:px-8 md:px-10">
              <div className="flex items-center gap-4">

                {/* Icon */}
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-[#2563eb]
                    text-white
                    shadow-[0_8px_20px_rgba(37,99,235,0.2)]
                  "
                >
                  <Cookie size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Cookie Information
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    How cookies are used and how you can manage your
                    preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* ===============================================
                POLICY SECTIONS
            =============================================== */}

            <div className="px-6 sm:px-8 md:px-10">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  className="
                    group
                    grid gap-4
                    border-b border-slate-100
                    py-8
                    last:border-b-0
                    md:grid-cols-[70px_1fr]
                    md:gap-6
                    md:py-10
                  "
                >
                  {/* Section Number */}
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

                  {/* Section Content */}
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
              You can manage or disable cookies through your browser
              settings. Some website features may be affected if
              cookies are disabled.
            </p>

            <p className="mt-2 text-xs font-medium text-slate-500">
              © {new Date().getFullYear()}{" "}
              {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CookiesComponent;