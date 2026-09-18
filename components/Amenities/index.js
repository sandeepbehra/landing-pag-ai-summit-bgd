"use client";
import React from "react";
import FadeIn from "../FadeIn";

const Amenities = () => {
  const amenitiesData = [
    {
      category: "Leisure & Wellness",
      items: ["Swimming pool", "Gym", "Sports courts"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.38,8.57l-1.23,1.85a8,8,0,0,1-.22,7.58H5.07A8,8,0,0,1,4.85,10.42L3.62,8.57a1,1,0,0,1,.78-1.42H19.6A1,1,0,0,1,20.38,8.57ZM12,1.85A2.5,2.5,0,0,1,14.5,4.35V6.15H9.5V4.35A2.5,2.5,0,0,1,12,1.85Z" />
        </svg>
      ),
    },
    {
      category: "Convenience",
      items: ["Crèche", "Supermarket", "Pharmacy", "Co-working"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
    {
      category: "Community",
      items: ["Grand lobbies", "Party lounge", "Landscaped greens"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      category: "Safety",
      items: ["24x7 security", "NBC-compliant fire systems"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10 C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1 s3.1,1.39,3.1,3.1V8z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative bg-white text-[#141625] py-10 sm:py-12"
      id="amenities"
    >
      <div className="container mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-4 mb-6">
              {/* <div className="h-[0.2rem] w-16 bg-gradient-to-r from-transparent to-[#141625]"></div> */}
              <span className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">
                A Clubhouse That Hosts Life, Not Just Events
              </span>
              {/* <div className="h-[0.2rem] w-16 bg-gradient-to-l from-transparent to-[#141625]"></div> */}
            </div>
          </FadeIn>
          <FadeIn>    
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-[#141625] font-roboto">
              Experience luxury living with thoughtfully designed amenities that
              cater to every aspect of modern lifestyle
            </p>
          </FadeIn>
        </div>

        {/* Amenities Grid */}
        <div className="max-w-7xl mx-auto font-light">
          <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {amenitiesData.map((amenity, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-[#141625]"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#e8b45c] to-[#d4a044] text-[#141625] rounded-2xl flex items-center justify-center relative">
                    {amenity.icon}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Enhanced Category Heading */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <h3 className="text-2xl font-bold text-[#141625] uppercase tracking-wide relative z-10 group-hover:text-[#e8b45c] transition-colors duration-300">
                      {amenity.category}
                    </h3>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#e8b45c] to-transparent opacity-60 group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Premium Grid for Items */}
                <div className="grid gap-4">
                  {amenity.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="relative bg-white rounded-xl p-4 border border-[#141625] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#e8b45c]/5 hover:to-transparent"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-base font-medium text-[#141625] leading-relaxed">
                          {item}
                        </p>
                        <div className="w-2 h-2 rounded-full bg-[#e8b45c] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Subtle gradient overlay */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
