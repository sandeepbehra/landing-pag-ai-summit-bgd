


// import React, { useState } from 'react';
// import { 
//   Compass, 
//   TrainTrack, 
//   Waves, 
//   Trophy, 
//   ArrowUpRight,
//   Sparkles
// } from 'lucide-react';
// import ModalComponent from "../Modal";
// import FadeIn from '../FadeIn';

// const features = [
//   {
//     number: "01",
//     tag: "Prime Access",
//     title: "Highway-Facing Location",
//     description: "A home right on Varthur-Sarjapur Road and near Whitefield means easier everyday commutes and better visibility for retail and commercial spaces.",
//     icon: Compass,
//     accent: "from-[#2D5A43] to-[#406853]",
//     span: "lg:col-span-7"
//   },
//   {
//     number: "02",
//     tag: "Transit Hub",
//     title: "Close To Upcoming Dommasandra Metro",
//     description: "As the metro line expands near your doorstep, direct connectivity to Bengaluru's core hubs becomes effortless.",
//     icon: TrainTrack,
//     accent: "from-[#3D6351] to-[#254634]",
//     span: "lg:col-span-5"
//   },
//   {
//     number: "03",
//     tag: "Natural Sanctuary",
//     title: "A 10+ Acre Lake, Right At Home",
//     description: "An ocean-themed, man-made lake spread across 10+ acres gives the township an expansive, serene waterfront vibe rarely found near the city.",
//     icon: Waves,
//     accent: "from-[#254634] to-[#3D6351]",
//     span: "lg:col-span-5"
//   },
//   {
//     number: "04",
//     tag: "Active Living",
//     title: "A Real Sports Complex, Not Just A Gym",
//     description: "A sprawling sports hub and private club built for comprehensive athletics, wellness, and tournament-grade recreation.",
//     icon: Trophy,
//     accent: "from-[#406853] to-[#2D5A43]",
//     span: "lg:col-span-7"
//   }
// ];

// export default function WhyRightLife() {
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <section className="relative bg-[#F4F1EA] text-[#1F2421] py-8 md:py-16 px-4 md:px-16 overflow-hidden font-sans" id='why choose'>
//       {/* Background Architectural Grid Pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.035] pointer-events-none" 
//         style={{
//           backgroundImage: 'radial-gradient(#1F2421 1px, transparent 1px)',
//           backgroundSize: '28px 28px'
//         }} 
//       />

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#D8D2C2]/70 pb-12 md:mb-16 mb-8 gap-8">
//         <FadeIn>
//           <div className="max-w-2xl text-center md:text-left">
//             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BDD2C1]/40 border border-[#2D5A43]/20 mb-5">
//               <Sparkles className="w-3.5 h-3.5 text-[#2D5A43]" />
//               <span className="text-[11px] font-bold tracking-widest text-[#2D5A43] uppercase">
//                 Township Edge
//               </span>
//             </div>
            
//             <h2 className="text-3xl md:text-5xl  font-light tracking-tight text-[#1F2421] leading-[1.1]">
//               A Home Address <br />
//               <span className="font-serif italic font-normal text-[#2D5A43]">
//                 Upgrades the Life
//               </span>
//             </h2>
//           </div>
//           </FadeIn>
//           <FadeIn>
//           <div className="lg:max-w-xs flex flex-col justify-end">
//             <p className="text-sm sm:text-base text-[#5A635E] leading-relaxed border-l-2 border-[#2D5A43]/30 pl-4">
//               Carefully curated infrastructure and strategic connectivity designed to elevate your everyday standard of living.
//             </p>
//           </div>
//           </FadeIn>
//         </div>

//         {/* Asymmetrical Bento Grid */}
//         <FadeIn>
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {features.map((feature) => {
//             const Icon = feature.icon;
//             return (
              
//               <div
//                 key={feature.number}
//                 onClick={() => setOpenModal(true)}
//                 className={`group relative ${feature.span} bg-primary/40 hover:bg-primary/30 backdrop-blur-sm border border-[#D8D2C2] hover:border-[#2D5A43]/40 rounded-xl p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(45,90,67,0.12)] hover:-translate-y-1 overflow-hidden`}
//               >
//                 {/* Subtle Hover Gradient Fill */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#BDD2C1]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//                 {/* Top Row: Tag, Icon & Monogram */}
//                 <div className="relative flex items-center justify-between gap-4 mb-8">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-2xl bg-[#F4F1EA] border border-[#D8D2C2]/80 flex items-center justify-center text-[#2D5A43] group-hover:bg-[#2D5A43] group-hover:text-white transition-all duration-300 shadow-sm">
//                       <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
//                     </div>
//                     <span className="text-xs font-semibold uppercase tracking-wider text-[#5A635E] bg-[#F4F1EA] px-3 py-1 rounded-full border border-[#D8D2C2]/60">
//                       {feature.tag}
//                     </span>
//                   </div>

//                   {/* <span className="font-mono text-3xl font-light text-[#D8D2C2] group-hover:text-[#2D5A43]/40 transition-colors">
//                     {feature.number}
//                   </span> */}
//                 </div>

//                 {/* Middle Content */}
//                 <div className="relative mb-8">
//                   <h3 className="text-2xl font-medium text-[#1F2421] tracking-tight mb-3 group-hover:text-[#2D5A43] transition-colors">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm sm:text-base text-[#5A635E] leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Bottom Interactive Bar */}
//                 <div className="relative pt-5 border-t border-[#D8D2C2]/50 flex items-center justify-between">
//                   <span className="text-xs font-bold uppercase tracking-widest text-[#2D5A43]">
//                     Explore Feature
//                   </span>
//                   <div className="w-8 h-8 rounded-full bg-[#F4F1EA] group-hover:bg-[#2D5A43] flex items-center justify-center text-[#2D5A43] group-hover:text-white transition-all duration-300">
//                     <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                   </div>
//                 </div>
//               </div>
             
//             );
//           })}
//         </div>
//         </FadeIn>

//         {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import {
  Compass,
  TrainTrack,
  Waves,
  Trophy,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import ModalComponent from "../Modal";
import FadeIn from "../FadeIn";



const features = [
  {
    number: "01",
    tag: "Prime Access",
    title: "Highway-Facing Location",
    description:
      "A home right on Varthur-Sarjapur Road and near Whitefield means easier everyday commutes and better visibility for retail and commercial spaces.",
    icon: Compass,
    backgroundText : "Highway"
  },
  {
    number: "02",
    tag: "Transit Hub",
    title: "Close To Upcoming Dommasandra Metro",
    description:
      "As the metro line expands near your doorstep, direct connectivity to Bengaluru's core hubs becomes effortless.",
    icon: TrainTrack,
    backgroundText : "Metro"
  },
  {
    number: "03",
    tag: "Natural Sanctuary",
    title: "A 10+ Acre Lake, Right At Home",
    description:
      "An ocean-themed, man-made lake spread across 10+ acres gives the township an expansive, serene waterfront vibe rarely found near the city.",
    icon: Waves,
    backgroundText : "10+ acre"
  },
  {
    number: "04",
    tag: "Active Living",
    title: "A Real Sports Complex, Not Just A Gym",
    description:
      "A sprawling sports hub and private club built for comprehensive athletics, wellness, and tournament-grade recreation.",
    icon: Trophy,
    backgroundText : "Sports"
  },
];

export default function WhyRightLife() {
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ================= AUTO CAROUSEL =================
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // ================= MANUAL NAVIGATION =================
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + features.length) % features.length
    );
  };

  return (
    <section
      id="why choose"
      className="relative overflow-hidden bg-[#F4F1EA] py-8 font-sans text-[#1F2421] md:py-16"
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#1F2421 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#2D5A43]/10" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-16">
        {/* ================= HEADER ================= */}
        <div className="mb-10 flex flex-col justify-between gap-8  md:mb-14 md:flex-row md:items-end ">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex  items-center  gap-2 rounded-full border border-[#2D5A43]/20 bg-[#BDD2C1]/40 px-3.5 py-1.5 ">
                

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2D5A43]">
                  Township Edge
                </span>
              </div>

              <h2 className="text-3xl font-light leading-[1.05] tracking-tight md:text-5xl text-center md:text-left">
                A Home Address
                <br />

                <span className="font-serif italic text-[#2D5A43]">
                  Upgrades the Life
                </span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="max-w-sm border-l-2 border-[#2D5A43]/30 pl-5">
              <p className="text-sm leading-7 text-[#5A635E] sm:text-base">
                Carefully curated infrastructure and strategic connectivity
                designed to elevate your everyday standard of living.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ================= CAROUSEL ================= */}
        <FadeIn>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel */}
            <div className="overflow-hidden px-4 md:px-8 lg:px-0">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.number}
                      className="min-w-full px-2 md:px-1"
                    >
                      <div
                        onClick={() => setOpenModal(true)}
                        className="group relative grid min-h-[470px] cursor-pointer overflow-hidden rounded-[28px] border border-[#D8D2C2] bg-[#2D5A43]  md:grid-cols-12"
                      >
                        {/* ================= LEFT ================= */}
                        <div className="relative flex min-h-[180px] flex-col justify-between overflow-hidden p-4 text-white sm:p-10 md:col-span-5 md:min-h-[470px] md:p-12">
                          {/* Huge Number */}
                          <div className="pointer-events-none absolute -right-8 -top-14 font-serif text-[230px] font-light leading-none text-white/[0.045] transition-transform duration-700 group-hover:scale-110">
                            {feature.backgroundText}
                          </div>

                          {/* Icon */}
                          <div className="relative">
                            <div className="relative flex md:h-20 md:w-20 h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-105">
                              <div className="absolute inset-2 rounded-full border border-white/10" />

                              <Icon className="relative md:h-8 md:w-8 h-6 w-6" />
                            </div>
                          </div>

                          {/* Bottom */}
                          <div className="relative mt-10">
                            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#BDD2C1]">
                              Why this address
                            </span>

                            <div className="flex items-end justify-between">
                              <span className="font-serif md:text-7xl text-4xl font-light leading-none text-white/90">
                                {feature.number}
                              </span>

                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2D5A43] transition-all duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="h-5 w-5" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ================= RIGHT ================= */}
                        <div className="relative flex flex-col justify-between bg-[#FAF8F3] p-7 sm:p-10 md:col-span-7 md:p-14">
                          <div>
                            <div className="md:mb-8 mb-4 flex items-center justify-between">
                              <span className="rounded-full border border-[#D8D2C2] bg-[#F4F1EA] px-4  md:py-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2D5A43]">
                                {feature.tag}
                              </span>

                              <span className="font-serif md:text-3xl text-2xl text-[#D8D2C2]">
                                {feature.number}
                              </span>
                            </div>

                            <h3 className="max-w-2xl text-2xl font-medium leading-[1.1] tracking-tight text-[#1F2421] transition-colors duration-300 group-hover:text-[#2D5A43]  md:text-5xl">
                              {feature.title}
                            </h3>

                            <p className="md:mt-6 mt-3 max-w-xl text-sm leading-7 text-[#5A635E] sm:text-base">
                              {feature.description}
                            </p>
                          </div>

                          <div className="md:mt-10 mt-4">
                            <div className="md:mb-5 mb-2 h-px w-full bg-[#D8D2C2]" />

                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D5A43]">
                                Explore Feature
                              </span>

                              <span className="flex items-center gap-2 text-xs text-[#7B827D]">
                                Discover more
                                <ArrowUpRight className="h-4 w-4 text-[#2D5A43]" />
                              </span>
                            </div>
                          </div>

                          <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-full border-l border-t border-[#D8D2C2]/50" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= CONTROLS ================= */}
            <div className="mt-7 flex items-center justify-between px-4 md:px-8 lg:px-0">
              {/* Progress Indicators */}
              <div className="flex items-center gap-2">
                {features.map((feature, index) => (
                  <button
                    key={feature.number}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to feature ${index + 1}`}
                    className="group"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ${
                        activeIndex === index
                          ? "w-10 bg-[#2D5A43]"
                          : "w-2 bg-[#C9C3B5] group-hover:bg-[#2D5A43]/50"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Counter + Arrows */}
              <div className="flex items-center gap-5">
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="font-serif text-xl text-[#2D5A43]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[#C1BBAF]">/</span>

                  <span className="text-sm text-[#858B86]">
                    {String(features.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous feature"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D2C2] bg-[#F9F7F2] text-[#2D5A43] transition-all duration-300 hover:border-[#2D5A43] hover:bg-[#2D5A43] hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next feature"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D2C2] bg-[#F9F7F2] text-[#2D5A43] transition-all duration-300 hover:border-[#2D5A43] hover:bg-[#2D5A43] hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ================= AUTOPLAY PROGRESS ================= */}
            <div className="mt-5 h-[2px] w-full overflow-hidden bg-[#D8D2C2]">
              {!isPaused && (
                <div
                  key={activeIndex}
                  className="h-full origin-left bg-[#2D5A43]"
                  style={{
                    animation: "carouselProgress 5s linear forwards",
                  }}
                />
              )}
            </div>
          </div>
        </FadeIn>

      
        {/* ================= MODAL ================= */}
        {openModal && (
          <ModalComponent
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </div>

      {/* ================= PROGRESS ANIMATION ================= */}
      <style jsx>{`
        @keyframes carouselProgress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}




