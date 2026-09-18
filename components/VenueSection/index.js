"use client";

import Image from "next/image";
import {
  MapPin,
  Navigation,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Building2,
  X,
} from "lucide-react";

import FadeIn from "../FadeIn";
import { useState } from "react";
import ModalComponent from "../Modal";

const VenueSection = () => {
  const [openModal, setOpenModal] =
    useState(false);

  const [selectedImage, setSelectedImage] =
    useState(null);

  // Google Maps Link
  const googleMapLink =
    "https://www.google.com/maps/place/Shubh+Banquets+%26+Convention+Centre/@28.481333,77.0451791,586m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d19bab9dffaa7:0x22ac65738c0fc42!8m2!3d28.481333!4d77.0451791!16s%2Fg%2F1tj31hq0!5m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D";

  const venueImage = {
    src: "/shubh-banquets.webp",
    alt: "Shubh Banquets & Convention Centre",
  };

  return (
    <>
      <section
        id="venue"
        className="
          relative overflow-hidden
          bg-[#F7F9FC]
          py-8 md:py-16
          px-4 md:px-16
        "
      >
        {/* =====================================================
            BACKGROUND DECORATION
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-brand_1/[0.08] blur-[140px]" />

          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-brand_2/[0.07] blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(#2563eb 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="mb-10 md:mb-14">
            <FadeIn>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand_1 sm:text-sm">
                  The Venue
                </span>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid gap-5 lg:grid-cols-2 lg:items-end">
                <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
                  One evening.
                  <br />

                  <span className="text-brand_1">
                    One remarkable setting.
                  </span>
                </h2>

                <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8 lg:ml-auto">
                  Join leaders, innovators and
                  decision-makers for an evening
                  dedicated to the future of AI-powered
                  real estate.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* =====================================================
              VENUE HERO
          ===================================================== */}

          <FadeIn>
            <div
              className="
                relative overflow-hidden
                rounded-2xl
                bg-[#061747]
                shadow-[0_25px_70px_rgba(15,23,42,0.14)]
              "
            >
              {/* ===============================================
                  CLICKABLE IMAGE
              =============================================== */}

              <div
                onClick={() =>
                  setSelectedImage(venueImage)
                }
                className="
                  group relative
                  h-[520px]
                  cursor-pointer
                  overflow-hidden
                  sm:h-[580px]
                  lg:h-[620px]
                "
              >
                <Image
                  src={venueImage.src}
                  alt={venueImage.alt}
                  fill
                  priority={false}
                  sizes="100vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                  "
                />

                {/* Overlays */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020B20]/90 via-[#020B20]/45 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B20]/80 via-transparent to-black/10" />
              </div>

              {/* =================================================
                  IMAGE CONTENT
              ================================================= */}

              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="w-full p-6 sm:p-9 lg:p-12">
                  <div className="max-w-2xl">
                    {/* Badge */}

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        Summit Venue
                      </span>
                    </div>

                    {/* Venue Name */}

                    <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                      Shubh Banquets

                      <span className="block text-blue-300">
                        & Convention Centre
                      </span>
                    </h3>

                    {/* Location */}

                    <div className="mt-5 flex max-w-xl items-start gap-3">
                      <MapPin
                        size={20}
                        className="mt-1 shrink-0 text-blue-300"
                      />

                      <p className="text-sm leading-6 text-white/75 sm:text-base">
                        Lt. Atul Kataria Marg, Rajiv
                        Nagar, Sector 13, Gurugram,
                        Haryana
                      </p>
                    </div>

                    {/* =========================================
                        BUTTONS
                    ========================================= */}

                    <div className="pointer-events-auto mt-7 flex flex-wrap gap-3">
                      {/* Directions */}

                      <a
                        href={googleMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group inline-flex
                          min-h-[52px]
                          items-center justify-center
                          gap-2.5
                          rounded-xl
                          bg-brand_1
                          px-6
                          text-sm font-semibold
                          text-white
                          transition duration-500
                          hover:-translate-y-0.5
                          hover:bg-brand_2
                        "
                      >
                        <Navigation size={17} />

                        Get Directions

                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>

                      {/* Save Spot */}

                      <button
                        type="button"
                        onClick={() =>
                          setOpenModal(true)
                        }
                        className="
                          inline-flex
                          min-h-[52px]
                          items-center justify-center
                          rounded-xl
                          border border-white/25
                          bg-white/10
                          px-6
                          text-sm font-semibold
                          text-white
                          backdrop-blur-md
                          transition-all duration-500
                          hover:bg-white
                          hover:text-slate-950
                        "
                      >
                        Save Your Spot
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING VENUE TAG
              ================================================= */}

              <div className="pointer-events-none absolute right-7 top-7 hidden rounded-2xl border border-white/20 bg-black/20 p-4 text-white backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Building2 size={19} />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                      Location
                    </p>

                    <p className="mt-0.5 text-sm font-semibold">
                      Gurugram
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* =====================================================
              DETAILS
          ===================================================== */}

          <FadeIn>
            <div className="relative z-20 mx-auto -mt-5 w-[94%] md:-mt-7 md:w-[90%]">
              <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.10)] sm:grid-cols-3">
                {/* Event */}

                <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r md:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand_1">
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                      Event
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 md:text-base">
                      Real Estate AI Summit
                    </p>
                  </div>
                </div>

                {/* Time */}

                <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r md:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand_1">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                      Starts At
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 md:text-base">
                      6:00 PM
                    </p>
                  </div>
                </div>

                {/* Location Clickable */}

                <a
                  href={googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 transition hover:bg-blue-50/60 md:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand_1 transition group-hover:bg-brand_1 group-hover:text-white">
                    <MapPin size={20} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                      Venue
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900 md:text-base">
                        Sector 13, Gurugram
                      </p>

                      <ArrowUpRight
                        size={14}
                        className="text-brand_1"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* =====================================================
            REGISTRATION MODAL
        ===================================================== */}

        {openModal && (
          <ModalComponent
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </section>

      {/* =======================================================
          FULLSCREEN VENUE IMAGE
      ======================================================= */}

      {selectedImage && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/90
            p-4
            backdrop-blur-sm
          "
          onClick={() =>
            setSelectedImage(null)
          }
        >
          {/* Close Button */}

          <button
            type="button"
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Close image"
            className="
              absolute right-5 top-5 z-20
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/10
              text-white
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white/20
              md:right-8 md:top-8
            "
          >
            <X size={22} />
          </button>

          {/* Full Image */}

          <div
            className="
              relative
              h-[90vh]
              w-full
              max-w-6xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VenueSection;