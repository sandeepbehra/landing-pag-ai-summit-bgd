"use client";

import Image from "next/image";
import FadeIn from "../FadeIn";

const LakeSportsHub = () => {
  return (
    <section className="w-full bg-[#F2EEE2]">
      <FadeIn>
      <div className="relative min-h-[650px] overflow-hidden lg:min-h-[720px]">
        {/* Background Image */}
        <Image
          src="/lake-view.webp"
          alt="The Lake at The Right Life by Mana Skanda"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark gradient for better readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[300px] items-center px-5 py-12 sm:px-10 lg:min-h-[720px] lg:px-16 xl:px-24">
          <div className="w-full max-w-xl">
            <div
              className="
                rounded-[28px]
                border border-white/40
                bg-white/25
                p-7
                shadow-2xl
                backdrop-blur-xl
                sm:p-10
                lg:p-12
              "
            >
              {/* Label */}
              <div className="md:mb-7 mb-4 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/20 px-4 py-2 backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#527763] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 8c2 2 4 2 6 0s4-2 6 0 4 2 4 0" />
                    <path d="M4 13c2 2 4 2 6 0s4-2 6 0 4 2 4 0" />
                    <path d="M4 18c2 2 4 2 6 0s4-2 6 0 4 2 4 0" />
                  </svg>
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#315D4B]">
                  The Lake
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-semibold leading-[1.05] tracking-tight text-[#121212] sm:text-4xl">
                A lake you&apos;ll
                <span className="block font-normal text-[#315D4B]">
                  actually walk to.
                </span>
              </h2>

              {/* Divider */}
              <div className="md:my-7 my-4 h-[2px] w-12 bg-[#527763]" />

              {/* Description */}
              <p className="max-w-lg text-base leading-7 text-[#26342E] sm:text-lg sm:leading-8">
                A 10+ acre man-made lake, designed around an ocean theme to be
                a place you actually walk to in the evening, not just a picture
                on a brochure.
              </p>

              {/* Bottom Stat */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#527763] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M8 3v4M16 3v4M4 10h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-[#121212]">
                    10+
                  </p>

                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#527763]">
                    Acres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeIn>

    <FadeIn>
      <div className="relative min-h-[650px] overflow-hidden lg:min-h-[720px]">
        {/* Background Image */}
        <Image
          src="/play-zone.webp"
          alt="Sports Complex at The Right Life by Mana Skanda"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[300px] items-center justify-end px-5 py-12 sm:px-10 lg:min-h-[720px] lg:px-16 xl:px-24">
          <div className="w-full max-w-xl">
            <div
              className="
                rounded-[28px]
                border border-white/40
                bg-white/25
                p-7
                shadow-2xl
                backdrop-blur-xl
                sm:p-10
                lg:p-12
              "
            >
              {/* Label */}
              <div className="md:mb-7 mb-4 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/20 px-4 py-2 backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#527763] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#315D4B]">
                  The Sports Complex
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-semibold leading-[1.05] tracking-tight text-[#121212] sm:text-4xl">
                Make sport
                <span className="block font-normal text-[#315D4B]">
                  part of daily life.
                </span>
              </h2>

              {/* Divider */}
              <div className="md:my-7 my-4 h-[2px] w-12 bg-[#527763]" />

              {/* Description */}
              <p className="max-w-lg text-base leading-7 text-[#26342E] sm:text-lg sm:leading-8">
                The township includes a dedicated sports hub for kids, adults
                and families who want sport to be part of daily life, not an
                afterthought.
              </p>

              {/* Audience */}
              <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/40 pt-7">
                {/* Kids */}
                <div className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#527763] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="7" r="3" />
                      <path d="M6 21c.5-4 2-7 6-7s5.5 3 6 7" />
                    </svg>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#315D4B]">
                    For Kids
                  </p>
                </div>

                {/* Adults */}
                <div className="border-x border-white/40 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#527763] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="7" r="3" />
                      <path d="M5 21c.7-4.5 3-7 7-7s6.3 2.5 7 7" />
                    </svg>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#315D4B]">
                    For Adults
                  </p>
                </div>

                {/* Families */}
                <div className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#527763] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="9" cy="8" r="2.5" />
                      <circle cx="16" cy="9" r="2" />
                      <path d="M4 20c.5-3.5 2-6 5-6s4.5 2.5 5 6" />
                      <path d="M14 15c2.5 0 4 1.5 4.5 5" />
                    </svg>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#315D4B]">
                    For Families
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
};

export default LakeSportsHub;