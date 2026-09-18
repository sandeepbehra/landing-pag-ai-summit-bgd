// "use client";
// import { about, companyName } from "@/utils/constants";
// import React, { useState } from "react";
// import Image from "next/image";
// import ModalComponent from "../Modal";
// import FadeIn from "../Fade-in";

// const About = () => {
//   // const [openModal, setOpenModal] = useState(false);

//   return (
//     <section
//       className="relative bg-white text-[#141625] py-10 sm:py-12"
//       id="about us"
//     >
//       <div className="container mx-auto px-6">
//         {/* Hero Header */}
//         <div className="text-center mb-20">
//           <FadeIn>
//             <div className="text-3xl md:4xl inline-flex items-center gap-4 mb-6">
//               {/* <div className="h-[0.2rem] w-16 bg-gradient-to-r from-transparent to-[#141625]"></div> */}
//               <span className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">
//                 About Us
//               </span>
//               {/* <div className="h-[0.2rem] w-16 bg-gradient-to-l from-transparent to-[#141625]"></div> */}
//             </div>
//           </FadeIn>

//           {/* <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-[#141625] font-roboto">
//             A premium 3BHK development in Hyderabad's Financial District. Spanning 4.92 acres, G+45 towers, spacious layouts, and amenities tailored for both lifestyle and investment.
//           </p> */}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto font-light">
//           {/* Content Side */}
//           <div className="space-y-8">
//             <FadeIn>
//               <h1 className="text-2xl sm:text-4xl lg:4xl font-light text-[#141625] mb-6 tracking-tight uppercase">
//                 <span className="font-medium text-[#141625]">A Landmark That Redefines Kukatpally’s Skyline
// </span>
//               </h1>
//             </FadeIn>
//             <FadeIn>
//               <div className="space-y-4">
//                 {about.map((paragraph, index) => (
//                   <div key={index} className="flex items-start">
//                     <p className="text-lg leading-relaxed text-[#141625] ">
//                       {paragraph}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </FadeIn>

//             {/* CTA */}
//             <FadeIn>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <button
//                   onClick={() => {}}
//                   className="px-8 py-4 bg-[#141625] text-white font-medium tracking-wide rounded-md text-xl
//                   hover:bg-[#e8b45c] hover:text-[#141625] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#e8b45c] focus:ring-opacity-50"
//                 >
//                   <span className="flex items-center justify-center gap-2 text-lg">
//                     Know More
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 7l5 5m0 0l-5 5m5-5H6"
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//             </FadeIn>
//           </div>

//           {/* Visual Side */}
//           <div className="relative">
//             <FadeIn>
//               <div className="relative">
//                 <div className="relative aspect-[9/6] rounded-3xl overflow-hidden shadow-lg border-2 border-[#e8b45c]">
//                   <Image
//                     src="/elevation.webp"
//                     alt={`${companyName} - Premium 3BHK Development in Financial District`}
//                     fill
//                     className="object-cover w-full"
//                     priority
//                   />
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {/* {openModal && (
//         <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
//       )} */}
//     </section>
//   );
// };

// export default About;

"use client";

import React from "react";
import ModalComponent from "../Modal";
import { useState } from "react";
import FadeIn from "../FadeIn";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="bg-[#F2EEE2] py-8 md:py-16" id="about us">
      <div className="mx-auto max-w-7xl px-4 md:px-16">
        {/* Top Heading */}
        <FadeIn>
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-16">
            <span className="mb-4 inline-block  text-sm font-semibold uppercase tracking-[0.2em] text-[#527763]">
              Introducing
            </span>

            <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight text-[#121212] sm:text-5xl ">
              The Right Life
              <span className="block font-normal text-[#527763]">
                by Mana Skanda
              </span>
            </h2>

            <div className="mt-6 h-[2px] w-16 bg-[#527763]" />
          </div>
        </FadeIn>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Content */} 
          <FadeIn>
          <div>
            <h3 className="max-w-xl text-2xl font-medium leading-tight text-[#121212] sm:text-3xl  text-center md:text-left">
              A 100+ acre mega township
              <span className="block text-[#527763]">
                built for the long run.
              </span>
            </h3>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#4B514D] sm:text-lg">
              Mana Skanda&apos;s{" "}
              <span className="font-semibold text-[#121212]">TheRightLife</span>{" "}
              is a 100+ acre township on Varthur-Sarjapur Road, bringing
              residential and commercial zones together within the same address.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4B514D] sm:text-lg">
              With Phase 1 already sold out, Phase 2 is now open with spacious
              2, 3 &amp; 4 BHK homes. The location is also set to become more
              connected with the upcoming Dommasandra Metro Station nearby.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-[#121212] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#527763]"
              >
                Explore The Right Life
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
         </FadeIn>
          {/* Right Stats Card */}
          {/* Right Stats Card */}
          <FadeIn>
          <div className="relative h-full">
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-xl">
              {/* Background Image */}
              <img
                src="/about.webp"
                alt="The Right Life township"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Green Glass Overlay */}
              <div className="absolute inset-0 bg-[#BBD4C5]/15" />

              {/* Card Content */}
              <div className="relative z-10 h-full p-7 sm:p-9 lg:p-10">
                {/* Title */}
                <p className="inline-block rounded-md text-sm font-semibold uppercase tracking-[0.18em] text-white bg-[#8FAF9D]/70 p-1 ">
                  TheRightLife
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#8FAF9D]/70">
                  {/* Stat 1 */}
                  <div className="bg-[#BBD4C5]/20 p-6 sm:p-7">
                    <p className="text-2xl font-semibold tracking-tight text-[#121212] sm:text-3xl">
                      100+
                    </p>

                    <p className="mt-1 text-sm leading-5 text-white">
                      Acres of
                      <br />
                      township
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="bg-[#BBD4C5]/70 p-3 sm:p-5">
                    <p className="text-2xl font-semibold tracking-tight text-[#121212] sm:text-3xl">
                      2, 3 & 4
                    </p>

                    <p className="mt-1 text-sm leading-5 text-white">
                      BHK
                      <br />
                      homes
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div className="bg-[#BBD4C5]/70 p-3 sm:p-5">
                    <p className="text-2xl font-semibold tracking-tight text-[#121212] sm:text-3xl">
                      Phase 2
                    </p>

                    <p className="mt-1 text-sm leading-5 text-white">
                      Now
                      <br />
                      open
                    </p>
                  </div>

                  {/* Stat 4 */}
                  <div className="bg-[#BBD4C5]/20 p-3 sm:p-5">
                    <p className="text-3xl font-semibold tracking-tight text-[#121212] sm:text-4xl">
                      Metro
                    </p>

                    <p className="mt-1 text-sm leading-5 text-white">
                      Upcoming
                      <br />
                      connectivity
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-5 border-t bg-[#8FAF9D]/70 p-4 border-[#8FAF9D]/70 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white ">
                    Location
                  </p>

                  <p className="mt-1 text-lg font-medium text-[#121212]">
                    Varthur – Sarjapur Road
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white">
                    Close to the upcoming Dommasandra Metro Station
                  </p>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>

        {/* Bottom Highlight */}
        {/* <div className="mt-12 border-t border-[#C8CEC7] pt-8 md:mt-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <p className="max-w-2xl text-sm leading-6 text-[#5B625E] sm:text-base">
              A thoughtfully planned township designed to bring homes,
              commerce and connectivity together for a more complete way of
              living.
            </p>

            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.15em] text-[#527763]">
              Built for the long run
            </span>
          </div>
        </div> */}
        {openModal && (
          <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </section>
  );
};

export default About;


