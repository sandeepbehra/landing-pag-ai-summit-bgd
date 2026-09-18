"use client";

import FormNew from "../FormNew";
import FadeIn from "../FadeIn";

const FinalRSVPSection = () => {
  return (
    <section
      id="join us"
      className="
        relative overflow-hidden
        bg-white
        px-4 md:px-16 py-8 md:py-16
        
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-brand_1/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-brand_2/10 blur-[150px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2563eb 1px, transparent 1px),
              linear-gradient(to bottom, #2563eb 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          {/* Label */}
          <FadeIn><div className="mb-4 flex items-center justify-center gap-3">

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand_1 sm:text-xs">
              Join Us for the Evening
            </span>

          </div></FadeIn>
          <FadeIn>
             {/* Heading */}
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-[#0F172A] md:text-5xl">
            Seats are <span className="text-brand_1">limited.</span>
          </h2>
          </FadeIn>
          <FadeIn>
             <p className="mx-auto mt-5 max-w-2xl text-sm leading-5 text-slate-600 sm:text-base md:text-lg md:leading-6">
            Join us for an evening built around one conversation{" "}<br></br>
            <span className="font-semibold text-[#0F172A]">
              where AI takes real estate next.
            </span>
          </p>
          </FadeIn>
         
        </div>

        {/* ==================================================
            FORM
        ================================================== */}

        <div className="flex w-full justify-center ">
          <FadeIn><FormNew /></FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FinalRSVPSection;
