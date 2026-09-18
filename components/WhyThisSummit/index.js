"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import FadeIn from "../FadeIn";

const summitImages = [
  {
    src: "/cImage2.webp",
    alt: "Real Estate AI Summit 2026",
  },
  {
    src: "/cImage1.webp",
    alt: "AI closes the real estate response gap",
  },
  {
    src: "/cImage3.webp",
    alt: "AI improves real estate booking rates",
  },
];

const WhyThisSummit = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section
        className="relative overflow-hidden bg-white py-8 md:py-16 px-4 md:px-16"
        id="why us"
      >
        {/* Soft background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-brand_1/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* ================= TOP CONTENT ================= */}

          <div className="grid gap-8 border-b border-slate-200 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:pb-12">
            {/* Heading */}
            <FadeIn>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand_1">
                    Why This Summit
                  </span>
                </div>

                <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-slate-950 md:text-5xl">
                  Real Estate is
                  <br />
                  <span className="text-brand_1">
                    Changing Fast
                  </span>
                </h2>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn>
              <div className="max-w-2xl md:ml-auto">
                <p className="text-base leading-4 text-slate-700 md:text-lg md:leading-6">
                  From how leads are generated, to how follow-ups happen, to
                  how site visits get scheduled, AI is already reshaping how
                  the industry works.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                  This summit brings together the people building and adopting
                  that change, in one room, for one evening.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ================= IMAGE SHOWCASE ================= */}

          <div className="mt-10 md:mt-12">
            {/* Mobile helper */}
            <FadeIn>
              <div className="mb-5 flex items-center justify-between md:hidden">
                <p className="text-sm font-medium text-slate-500">
                  What you&apos;ll discover
                </p>

                <span className="text-xs font-medium text-brand_1">
                  Swipe →
                </span>
              </div>
            </FadeIn>

            <FadeIn>
              <div
                className="
                  flex snap-x snap-mandatory gap-4
                  overflow-x-auto pb-3
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden

                  md:grid
                  md:grid-cols-3
                  md:overflow-visible
                  md:pb-0
                "
              >
                {summitImages.map((item) => (
                  <article
                    key={item.src}
                    className="
                      group
                      min-w-[82%]
                      snap-center
                      sm:min-w-[55%]
                      md:min-w-0
                    "
                  >
                    <div
                      onClick={() => setSelectedImage(item)}
                      className="
                        relative cursor-pointer
                        overflow-hidden rounded-xl
                        bg-[#061747]
                        shadow-[0_12px_35px_rgba(15,23,42,0.10)]
                      "
                    >
                      {/* Image */}
                      <div className="relative h-[360px] sm:h-[400px] md:h-[390px] lg:h-[430px]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="
                            (max-width: 640px) 82vw,
                            (max-width: 768px) 55vw,
                            33vw
                          "
                          className="
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-[1.03]
                          "
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULLSCREEN IMAGE
      ===================================================== */}

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
            className="
              absolute right-5 top-5 z-20
              flex h-11 w-11
              items-center justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
              md:right-8 md:top-8
            "
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          {/* Full Image */}
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

export default WhyThisSummit;