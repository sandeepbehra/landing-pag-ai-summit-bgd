"use client";
import React, { useState } from "react";
import FadeIn from "../FadeIn";
import ModalComponent from "../Modal";

const KeyUSPs = () => {
  const [openModal, setOpenModal] = useState(false);

  const usps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "0% Interest Offer",
      description: "Save more on your investment",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
        </svg>
      ),
      title: "42,500 sq.ft. Clubhouse",
      description: "Fitness, leisure & celebration spaces",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "30+ Lifestyle Amenities",
      description: "Designed for every generation",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "2 Mins from Balanagar Metro",
      description: "Seamless city connectivity",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "Near HITECH City & Manyata Tech Park",
      description: "Surrounded by top IT employers",
    },
  ];

  return (
    <section
      className="relative bg-white text-[#141625] py-10 sm:py-12"
      id="highlights"
    >
      <div className="container mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center mb-20">
          {/* <FadeIn>
            <div className="inline-flex items-center gap-4 mb-6">
              <div className=" h-[0.2rem] w-16 bg-gradient-to-r from-transparent to-[#141625]"></div>
              <span className="font-light tracking-[0.3em] text-3xl md:4xl uppercase text-[#141625]">
               Why Choose Us
              </span>
              <div className="h-[0.2rem] w-16 bg-gradient-to-l from-transparent to-[#141625]"></div>
            </div>
          </FadeIn> */}
          <FadeIn>
            <h1 className="text-4xl sm:text-7xl font-light text-[#141625] mb-6 tracking-tight uppercase">

              <span className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">Highlights</span>
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-[#141625]">
              Discover the unique advantages that make our development the
              perfect choice for discerning investors and homebuyers
            </p>
          </FadeIn>
        </div>

        {/* USPs Grid */}
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {usps.map((usp, index) => (
                <div key={index} className="text-center space-y-6">
                  {/* Icon Container */}
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-[#e8b45c] text-[#141625] rounded-2xl flex items-center justify-center shadow-lg">
                      {usp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-[#141625]">
                      {usp.title}
                    </h3>
                    <p className="text-2xl leading-relaxed text-[#141625] font-light">
                      {usp.description}
                    </p>
                  </div>

                  {/* Simple Decorative Element */}
                  <div className="flex justify-center">
                    <div className="w-12 h-[0.15rem] bg-gradient-to-r from-transparent via-[#e8b45c] to-transparent opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        {/* CTA */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => setOpenModal(true)}
              className="px-8 py-4 bg-[#141625] text-white font-medium tracking-wide rounded-md text-xl
              hover:bg-[#e8b45c] hover:text-[#141625] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#e8b45c] focus:ring-opacity-50"
            >
              <span className="flex items-center justify-center gap-2 text-lg">
                Book Your Site Visit
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </FadeIn>

        {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
      </div>
    </section>
  );
};

export default KeyUSPs;
