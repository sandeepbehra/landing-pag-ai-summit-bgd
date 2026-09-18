"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import FadeIn from "../FadeIn";

const panelists = [
  {
    name: "Deepak Rawat",
    role: "VP Marketing",
    company: "Omaxe Limited",
    image: "/members/DEEPAK RAWAT.webp",
    description:
      "What AI-led marketing looks like from inside one of India's largest developer brands.",
  },
  {
    name: "Karan Kumar",
    role: "Founder & Principal Advisor",
    company: "Inflection",
    image: "/members/KARAN KUMAR.webp",
    description:
      "The assumptions real estate has stopped questioning, and what AI forces open.",
  },
  {
    name: "Sahil Kapoor",
    role: "Director",
    company: "Keller Williams (Delhi NCR)",
    image: "/members/SAHIL KAPOOR.webp",
    description:
      "What's actually changing on the ground for channel partners and IPCs in closing deals right now.",
  },
];

const PanelSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const moderator = {
    name: "Tanuj Gupta",
    image: "/members/Tanuj_Gupta.webp",
  };

  return (
    <>
      <section
        id="panel"
        className="relative overflow-hidden bg-[#F7F9FC] py-8 md:py-16 px-4 md:px-16"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-brand_1/[0.08] blur-[140px]" />

          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-brand_2/[0.07] blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(#2563eb 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ================= HEADER ================= */}

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <FadeIn>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand_2 sm:text-sm">
                  The Panel
                </span>
              </FadeIn>
            </div>

            <FadeIn>
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-slate-950 md:text-5xl">
                Four Voices. One stage.
                <span className="mt-2 block text-brand_1">
                  How AI is Changing Real Estate
                </span>
              </h2>
            </FadeIn>

            <FadeIn>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-5 text-slate-700 md:text-lg md:leading-6">
                A developer, an advisor, and a broker sit down together to talk
                about where AI takes real estate next.
              </p>
            </FadeIn>
          </div>

          {/* ================= MODERATOR ================= */}

          <FadeIn>
            <div className="mt-12 md:mt-16">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand_1 to-brand_2 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
                {/* Background effects */}
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand_1/30 blur-[100px]" />

                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative grid min-h-[360px] md:grid-cols-[0.8fr_1.2fr]">
                  {/* Moderator Image */}
                  <div
                    onClick={() => setSelectedImage(moderator)}
                    className="
                      group relative min-h-[340px]
                      cursor-pointer overflow-hidden
                      md:min-h-[420px]
                    "
                  >
                    <Image
                      src={moderator.image}
                      alt={moderator.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="
                        object-cover object-top
                        transition-transform duration-700
                        group-hover:scale-[1.03]
                      "
                    />

                    {/* Image gradients */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071A46] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#071A46]" />
                  </div>

                  {/* Moderator Content */}
                  <div className="relative flex flex-col justify-center px-6 pb-9 pt-4 sm:px-9 md:px-12 md:py-12 lg:px-16">
                    <div className="mb-7">
                      <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                        Moderator
                      </span>
                    </div>

                    <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      Tanuj Gupta
                    </h3>

                    <div className="mt-3">
                      <p className="text-base font-medium text-blue-300 md:text-lg">
                        Founder & CEO
                      </p>

                      <p className="mt-1 text-sm text-white/55 md:text-base">
                        Big Growth Digital
                      </p>
                    </div>

                    <div className="my-7 h-px max-w-md bg-gradient-to-r from-blue-400/60 to-transparent" />

                    <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                      Setting the pace for a conversation on where real estate
                      is headed, and how AI gets it there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ================= PANELISTS ================= */}

          <div className="mt-10 md:mt-12">
            <FadeIn>
              <div className="mb-6 flex items-center gap-4">
                <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Meet the panelists
                </p>

                <div className="h-px w-full bg-slate-200" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid gap-5 md:grid-cols-3">
                {panelists.map((person) => (
                  <article
                    key={person.name}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]"
                  >
                    {/* ================= PHOTO ================= */}

                    <div
                      onClick={() => setSelectedImage(person)}
                      className="
                        relative h-[340px]
                        cursor-pointer overflow-hidden
                        bg-slate-100
                        sm:h-[400px]
                        md:h-[330px]
                        lg:h-[390px]
                      "
                    >
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="
                          object-cover object-top
                          transition-transform duration-700
                          group-hover:scale-[1.04]
                        "
                      />

                      {/* Gradient */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Name */}
                      <div className="pointer-events-none absolute bottom-5 left-5 right-5">
                        <h3 className="text-2xl font-semibold tracking-tight text-white">
                          {person.name}
                        </h3>
                      </div>
                    </div>

                    {/* ================= DETAILS ================= */}

                    <div className="p-6">
                      <div className="min-h-[52px]">
                        <p className="text-xl font-semibold text-brand_2">
                          {person.role}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          {person.company}
                        </p>
                      </div>

                      <div className="my-5 h-px bg-slate-100" />

                      <p className="text-sm leading-7 text-slate-600 lg:text-[15px]">
                        {person.description}
                      </p>

                      {/* <div className="mt-6 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-brand_1" />

                        <span className="h-px w-10 bg-brand_1/40" />
                      </div> */}
                    </div>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULLSCREEN IMAGE VIEWER
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
          {/* Close */}
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

          {/* Full Image */}
          <div
            className="relative h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.name}
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

export default PanelSection;