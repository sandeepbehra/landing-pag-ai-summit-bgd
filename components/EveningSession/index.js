"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  Crown,
  MapPin,
  Trophy,
  Users,
  Utensils,
  ArrowUpRight,
  ArrowRight,
  X,
} from "lucide-react";

import FadeIn from "../FadeIn";
import { useState } from "react";
import ModalComponent from "../Modal";

const schedule = [
  {
    icon: Clock3,
    title: "6:00 PM",
    description: "Opening remarks, Tanuj Gupta",
  },
  {
    icon: Crown,
    title: "Guest of Honour address",
    name: "Sarvesh Tiwari",
    description: "Founder, PRP",
    featured: true,
  },
  {
    icon: Users,
    title: "Panel discussion",
    description: "Real estate meets AI",
  },
  {
    icon: Trophy,
    title: "Felicitation",
  },
  {
    icon: Utensils,
    title: "Dinner & networking",
  },
];

const EveningSession = () => {
  const [openModal, setOpenModal] = useState(false);

  // Fullscreen image
  const [selectedImage, setSelectedImage] = useState(null);

  const venueMapLink =
    "https://www.google.com/maps/place/Shubh+Banquets+%26+Convention+Centre/@28.481333,77.0451791,586m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d19bab9dffaa7:0x22ac65738c0fc42!8m2!3d28.481333!4d77.0451791!16s%2Fg%2F1tj31hq0!5m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D";

  const sarveshImage = {
    src: "/members/SARVESH TIWARI.webp",
    alt: "Sarvesh Tiwari",
  };

  return (
    <>
      <section
        id="evening session"
        className="relative overflow-hidden bg-white py-8 md:py-16 px-4 md:px-16"
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-brand_1/[0.07] blur-[130px]" />

          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand_2/[0.08] blur-[150px]" />

          {/* Subtle Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #2563eb 1px, transparent 1px),
                linear-gradient(to bottom, #2563eb 1px, transparent 1px)
              `,
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <FadeIn>
            <div className="mb-12 max-w-3xl md:mb-16">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand_1 sm:text-sm">
                  The Evening Session
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                What to{" "}
                <span className="text-brand_1">
                  expect
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-5 text-slate-600 md:text-lg md:leading-6">
                A focused evening of insights, conversations and connections
                with the people shaping the next era of real estate.
              </p>
            </div>
          </FadeIn>

          {/* =====================================================
              MAIN AREA
          ===================================================== */}

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-stretch lg:gap-14">
            {/* =================================================
                TIMELINE
            ================================================= */}

            <FadeIn>
              <div>
                <div className="relative">
                  {/* Timeline Vertical Line */}

                  <div className="absolute bottom-8 left-[23px] top-8 w-px bg-gradient-to-b from-brand_1 via-blue-200 to-transparent sm:left-[27px]" />

                  <div className="space-y-4">
                    {schedule.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="relative flex gap-4 sm:gap-6"
                        >
                          {/* Icon */}

                          <div
                            className={`
                              relative z-10 flex h-12 w-12 shrink-0
                              items-center justify-center rounded-full
                              border bg-white shadow-sm
                              sm:h-14 sm:w-14

                              ${
                                item.featured
                                  ? "border-brand_1 bg-blue-50 text-brand_1"
                                  : "border-blue-100 text-brand_1"
                              }
                            `}
                          >
                            <Icon
                              size={20}
                              strokeWidth={2}
                            />
                          </div>

                          {/* Content */}

                          <div
                            className={`
                              flex flex-1 items-center
                              rounded-xl border
                              px-3 py-2
                              transition duration-300

                              md:min-h-[82px]
                              md:px-5 md:py-4

                              sm:px-6

                              ${
                                item.featured
                                  ? "border-blue-200 bg-gradient-to-r from-blue-50 to-white shadow-[0_10px_35px_rgba(37,99,235,0.08)]"
                                  : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                              }
                            `}
                          >
                            <div>
                              <h3
                                className={`text-base font-semibold sm:text-lg ${
                                  item.featured
                                    ? "text-brand_1"
                                    : "text-slate-950"
                                }`}
                              >
                                {item.title}
                              </h3>

                              {item.name && (
                                <p className="mt-1 font-semibold text-slate-950">
                                  {item.name}
                                </p>
                              )}

                              {item.description && (
                                <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* =================================================
                SARVESH FEATURE
            ================================================= */}

            <FadeIn>
              <div className="relative">
                <div className="relative h-full min-h-[520px] overflow-hidden rounded-2xl bg-[#061A49] shadow-[0_25px_70px_rgba(15,23,42,0.16)]">
                  
                  {/* ==========================================
                      CLICKABLE PERSON IMAGE
                  ========================================== */}

                  <div
                    onClick={() =>
                      setSelectedImage(sarveshImage)
                    }
                    className="group absolute inset-0 cursor-pointer"
                  >
                    <Image
                      src={sarveshImage.src}
                      alt={sarveshImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03143d] via-[#03143d]/10 to-transparent" />

                  {/* Guest Badge */}

                  <div className="pointer-events-none absolute left-3 top-2 sm:left-7 sm:top-7">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      {/* <Crown
                        size={14}
                        className="text-blue-300"
                      /> */}

                      Guest of Honour
                    </div>
                  </div>

                  {/* Person Details */}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      Sarvesh Tiwari
                    </h3>

                    <p className="mt-2 text-base text-blue-200 sm:text-lg">
                      Founder, PRP
                    </p>

                    <p className="mt-5 max-w-md text-sm leading-7 text-white/70 sm:text-base">
                      Joining the evening as Guest of Honour for a conversation
                      around technology, transformation and the future of real
                      estate.
                    </p>
                  </div>
                </div>

                {/* Decorative Dots */}

                <div className="absolute -bottom-5 -right-5 -z-10 hidden grid-cols-5 gap-2 lg:grid">
                  {Array.from({
                    length: 25,
                  }).map((_, index) => (
                    <span
                      key={index}
                      className="h-1 w-1 rounded-full bg-brand_1/50"
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* =====================================================
              BOTTOM BAR
          ===================================================== */}

          <FadeIn>
            <div className="mt-12 rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_15px_50px_rgba(15,23,42,0.06)] md:mt-16 md:p-5">
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.2fr_auto] md:items-center">
                
                {/* Evening */}

                <div className="flex items-center gap-4 rounded-xl px-3 py-3 md:border-r md:border-slate-200 md:pr-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand_1">
                    <CalendarDays size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      One Evening
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Big ideas. Real conversations.
                    </p>
                  </div>
                </div>

                {/* Venue / MAP LINK */}

                <a
                  href={venueMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl px-3 py-3 transition hover:bg-blue-50 md:border-r md:border-slate-200 md:px-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand_1 transition-all duration-500 group-hover:bg-brand_1 group-hover:text-white">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-semibold text-slate-950">
                        One Venue
                      </p>

                      <ArrowUpRight
                        size={13}
                        className="text-brand_1"
                      />
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      View location on Google Maps
                    </p>
                  </div>
                </a>

                {/* Networking */}

                <div className="flex items-center gap-4 rounded-xl px-3 py-3 md:px-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand_1">
                    <Users size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Meaningful Connections
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Meet leaders shaping real estate.
                    </p>
                  </div>
                </div>

                {/* CTA */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenModal((prev) => !prev)
                  }
                  className="group flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-brand_1 px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand_2 hover:shadow-[0_15px_35px_rgba(37,99,235,0.3)]"
                >
                  Save Your Spot

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
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
          FULLSCREEN IMAGE VIEWER
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
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
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

          {/* Complete Image */}

          <div
            className="
              relative
              h-[90vh]
              w-full
              max-w-5xl
            "
            onClick={(e) => e.stopPropagation()}
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

export default EveningSession;