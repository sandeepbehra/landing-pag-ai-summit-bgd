"use client";
import React from "react";
import Image from "next/image";
import { Lock, ArrowRight } from "lucide-react";
import FadeIn from "../FadeIn";
import ModalComponent from "../Modal";
import { useState } from "react";

export default function Pricing({ onOpenModal }) {
  const [openModal, setOpenModal] = useState(false);
  const inventory = [
    {
      id: 1,
      title: "2 BHK",
      tower: "Phase 2",
      price: "₹ 1.45 CR*",
      priceSubtext: "Starting Price",
      description: "A smart, well-planned home for small families or first-time buyers in Sarjapur.",
      tag: "Smart Living",
      image: "",
    },
    {
      id: 2,
      title: "3 BHK",
      tower: "Phase 2",
      price: "Price on Request*",
      priceSubtext: "Special Launch Terms",
      description: "More room for growing families, with direct access to the lake and sports hub.",
      tag: "Spacious",
      image: "",
    },
    {
      id: 3,
      title: "4 BHK",
      tower: "Phase 2",
      price: "Price on Request*",
      priceSubtext: "Exclusive Inventory",
      description: "For larger families who want expansive space, without leaving the integrated township.",
      tag: "Luxury Suite",
      image: "",
    },
  ];

  return (
    <section className="relative bg-[#F4F1EA] py-8 lg:py-8 px-4 sm:px-16 overflow-hidden font-sans" id="pricing">
      
      {/* Background Architectural Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden">
        <h2 className="text-[18vw] font-serif uppercase tracking-wider text-[#2D5A43]/[0.03] leading-none text-center whitespace-nowrap">
          Phase 02
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-18">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BDD2C1]/40 border border-[#2D5A43]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A43]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#2D5A43] font-bold">
                Section 04 · Configurations & Price
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F2421] leading-tight mb-3">
              Homes In Phase 2 <br />
              <span className="italic font-serif font-normal text-[#2D5A43]">
                Find Your Requirements
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm md:text-base text-[#5A635E] max-w-xl">
              Thoughtfully laid out layouts designed for optimal natural light, cross ventilation, and community living.
            </p>
          </FadeIn>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {inventory.map((item, index) => (
            <FadeIn key={item.id} delay={0.2 + index * 0.15} slideUp={true}>
              <div className="group relative w-full bg-white border border-[#D8D2C2] rounded-2xl flex flex-col justify-between shadow-[0_10px_30px_-15px_rgba(45,90,67,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(45,90,67,0.18)] hover:border-[#2D5A43]/40 transition-all duration-500 overflow-hidden">
                
                <div>
                  {/* Top: Compact Blurred Image with Lock Overlay */}
                  <div className="relative h-[220px] w-full bg-[#F4F1EA] overflow-hidden flex items-center justify-center">
                    
                    {/* Blurred Layout Preview */}
                    <Image
                      src={item.image} 
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover blur-[5px] scale-105 opacity-50 transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Sage Green Mask */}
                    <div className="absolute inset-0 bg-[#2D5A43]/20 backdrop-blur-[2px]" />

                    {/* Lock CTA Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 text-center">
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-3 text-white shadow-md">
                        <Lock className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-lg text-white mb-1 tracking-wide">Floor Plan Locked</h4>
                      <p className="text-white/90 text-[9px] tracking-widest uppercase mb-4 font-medium">Restricted To Verified Enquiries</p>
                      
                      <button 
                       onClick={() => setOpenModal(true)}
                        className="relative overflow-hidden group/btn px-5 py-2 rounded-full bg-[#2D5A43] text-white hover:bg-[#1F2421] transition-all duration-300 active:scale-95 inline-flex items-center gap-2 shadow-lg"
                      >
                        <span className="font-bold tracking-[0.15em] uppercase text-[9px]">
                          Unlock Plan
                        </span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Details Area */}
                  <div className="p-6 flex flex-col bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#2D5A43] font-bold block mb-1">
                          {item.tower}
                        </span>
                        <h3 className="text-2xl font-light text-[#1F2421] tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <span className="bg-[#BDD2C1]/30 text-[#2D5A43] px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-bold border border-[#2D5A43]/15">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A635E] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Pricing Row */}
                <div className="px-6 pb-6 pt-4 border-t border-[#D8D2C2]/60 bg-[#FAF9F5] flex justify-between items-end">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#5A635E] font-semibold block mb-0.5">
                      {item.priceSubtext}
                    </span>
                    <span className="text-xl sm:text-2xl font-light font-serif text-[#2D5A43] block leading-tight">
                      {item.price}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setOpenModal(true)}
                    className="text-xs font-bold text-[#2D5A43] hover:text-[#1F2421] uppercase tracking-wider flex items-center gap-1 transition-colors pb-1"
                  >
                    Enquire <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-14 flex justify-center">
          <FadeIn delay={0.4}>
            <button 
              onClick={() => setOpenModal(true)}
              className="px-8 py-3.5 bg-[#2D5A43] text-white hover:bg-[#1F2421] rounded-full uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300 active:scale-95 shadow-md flex items-center gap-3"
            >
              <span>Download Complete Cost Sheet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </FadeIn>
        </div>
         {openModal && (
                  <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
                )}
      </div>
    </section>
  );
}