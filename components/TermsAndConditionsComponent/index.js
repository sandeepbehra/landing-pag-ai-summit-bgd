"use client";

import React from "react";
import { companyName } from "@/utils/constants";
import { ArrowLeft, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

const TermsAndConditionsComponent = () => {
  const router = useRouter();

  const sections = [
    {
      title: "Welcome",
      content: `Welcome to ${companyName}. These terms and conditions outline the rules and regulations for the use of our website.`,
    },
    {
      title: "Terminology",
      content: `"Client", "You" and "Your" refers to you, the person accessing this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.`,
    },
    {
      title: "Cookies",
      content: `We employ the use of cookies. By accessing ${companyName}, you agreed to use cookies in agreement with our Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable functionality of certain areas and improve user experience.`,
    },
    {
      title: "License",
      content: `Unless otherwise stated, ${companyName} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this website for your own personal use subjected to restrictions set in these terms and conditions.`,
    },
    {
      title: "Restrictions",
      content:
        "You must not: Republish material from our website, Sell, rent or sub-license material from our website, Reproduce, duplicate or copy material from our website, Redistribute content from our website.",
    },
    {
      title: "Content Liability",
      content:
        "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
    },
    {
      title: "Reservation of Rights",
      content:
        "We reserve the right to request removal of all links or any particular link to our Website. We also reserve the right to amend these terms and conditions at any time. By continuously linking to our Website, you agree to be bound to and follow these terms and conditions.",
    },
    {
      title: "Disclaimer",
      content:
        "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F9FC] font-sans">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue ambient glows */}
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
              Terms &{" "}
              <span className="text-[#3b82f6]">
                Conditions
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Please read these terms carefully before using the{" "}
              <span className="font-medium text-slate-700">
                {companyName}
              </span>{" "}
              website.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS CONTENT
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
            {/* =================================================
                DOCUMENT HEADER
            ================================================= */}

            <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white to-white px-6 py-5 sm:px-8 md:px-10">
              <div className="flex items-center gap-4">
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
                  <FileText size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Website Terms
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Rules and conditions governing the use of this
                    website.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                SECTIONS
            ================================================= */}

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

                  {/* Content */}
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
              BOTTOM
          ================================================= */}

          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-xs leading-6 text-slate-400">
              By accessing and continuing to use this website, you
              acknowledge that you have read and agreed to these
              Terms & Conditions.
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

export default TermsAndConditionsComponent;