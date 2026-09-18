"use client";
import React, { useState } from "react";
import ModalComponent from "../Modal";
import FadeIn from "../FadeIn";
import { Fade } from "@mui/material";

const PriceBreakup = ({ otpForm }) => {
  const [openModal, setOpenModal] = useState(false);

  const PriceData = [
    {
      size: "1695 sq ft",
      price: "On Request",
      image: "/Screenshot 2025-09-12 181441 (1).webp",
    },
    {
      size: "1695 sq ft",
      price: "On Request",
      image: "/Screenshot 2025-09-12 181507 (1).webp",
    },
  ];

  return (
    <section
      className="relative bg-white text-[#141625] py-10 sm:py-12 font-light"
      id="pricing"
    >
      <div className="container mx-auto px-6">
        {/* Hero Header - Same style as Master Plan */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-4 mb-6">
              {/* <div className="h-[0.2rem] w-16 bg-gradient-to-r from-transparent to-[#141625]"></div> */}
              <span className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">
                Limited Period Zero Burden Offer
              </span>
              {/* <div className="h-[0.2rem] w-16 bg-gradient-to-l from-transparent to-[#141625]"></div> */}
            </div>
          </FadeIn>
          <FadeIn>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-[#141625] font-roboto">
            Pay 0% Interest on Your Home Loan | Starting ₹2.4 Cr*
          </p>
          </FadeIn>
        </div>

        {/* Price Cards - Same container style as Master Plan */}
        <div className="max-w-7xl mx-auto">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {PriceData.map((priceData, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-[#141625]"
              >
                {/* Floor Plan Thumbnail - Same image container style */}
                <div className="relative mb-8">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#141625]/10 group-hover:border-[#e8b45c]/30 transition-all duration-500">
                    <img
                      src={priceData.image}
                      alt="Floor Plan"
                      className="w-full rounded-2xl blur-sm h-[250px]"
                    />
                  </div>
                </div>

                {/* Price Info */}
                <div className="text-center mb-8">
                  <p className="text-xl font-medium text-[#141625] mb-2">
                    {priceData.size} | {priceData.price}
                  </p>
                </div>

                {/* Premium Button - Same style as Master Plan */}
                <div className="text-center">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[#141625] bg-white border-2 border-[#e8b45c] rounded-full hover:bg-[#e8b45c] hover:text-white transition-all duration-300 group/btn overflow-hidden"
                  >
                    <span className="relative z-10 uppercase tracking-wide text-[12px]">
                      Download Floor Plan & Pricing PDF
                    </span>

                    {/* Button gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e8b45c]/0 to-[#e8b45c]/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>

                    {/* Button icon */}
                    <svg
                      className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          </FadeIn>

        </div>

        {/* Background Decorative Elements - Same as Master Plan */}
      </div>

      {openModal && (
        <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </section>
  );
};

export default PriceBreakup;
