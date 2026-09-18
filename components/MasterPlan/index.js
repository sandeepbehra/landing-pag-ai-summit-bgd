"use client";
import React from "react";
import { useState } from "react";
import ModalComponent from "../Modal";
import FadeIn from "../FadeIn";

const MasterPlan = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="relative bg-white text-[#141625] py-10 sm:py-12 font-light" id="master plan">
      <div className="container mx-auto px-6">
        {/* Hero Header - Same style as Amenities */}
        <div className="text-center mb-20">
          {/* <FadeIn>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-[0.2rem] w-16 bg-gradient-to-r from-transparent to-[#141625]"></div>
            <span className="font-light tracking-[0.3em] text-lg uppercase text-[#141625]">
              Master Plan
            </span>
            <div className="h-[0.2rem] w-16 bg-gradient-to-l from-transparent to-[#141625]"></div>
          </div>
          </FadeIn> */}
          <FadeIn>
          <h1 className="text-4xl sm:text-7xl font-light text-[#141625] mb-6 tracking-tight uppercase">
            <span className="ont-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">Thoughtfully Planned Homes for Modern Living</span>
          </h1>
          </FadeIn>
          <FadeIn>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-[#141625] font-roboto">
            Spacious 3 & 3.5 BHK homes with open layouts and abundant light
          </p>
          </FadeIn>
        </div>

        {/* Master Plan Content */}
        <div className="max-w-7xl mx-auto">
          <FadeIn>
          <div className="group bg-white rounded-3xl p-8 border border-[#141625]">
            
            {/* Image Container */}
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/masterplan.webp"
                  alt="Master Plan"
                  className="w-full rounded-2xl blur-sm h-[300px]"
                />
                
              </div>
            </div>

            {/* Premium Button */}
            <div className="text-center">
              <button
                onClick={() => setOpenModal((prev) => !prev)}
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[#141625] bg-white border-2 border-[#e8b45c] rounded-full hover:bg-[#e8b45c] hover:text-white transition-all duration-300 group/btn overflow-hidden"
              >
                <span className="relative z-10 uppercase tracking-wide">View Floor Plans</span>
                
                {/* Button gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e8b45c]/0 to-[#e8b45c]/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                
                {/* Button icon */}
                <svg className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </button>
            </div>

            {/* Decorative Elements */}
         
          </div>
          </FadeIn>
        </div>

      </div>
      {openModal && (
              <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
            )}
    </section>
  );
};

export default MasterPlan;