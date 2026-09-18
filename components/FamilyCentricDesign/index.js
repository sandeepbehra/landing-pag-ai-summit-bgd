// // components/FamilyCentricDesign.jsx
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { 
//   Trees, 
//   Sparkles, 
//   GraduationCap, 
//   Gamepad2, 
//   CheckCircle2, 
//   ArrowUpRight 
// } from 'lucide-react';
// import ModalComponent from "../Modal";

// const highlights = [
//   {
//     title: "Green, open spaces across the township",
//     description: "Expansive natural landscapes and pocket parks providing fresh air and room to roam.",
//     icon: Trees,
//   },
//   {
//     title: "Play areas for different age groups",
//     description: "Dedicated safe zones curated for toddlers, kids, and adolescents to play freely.",
//     icon: Gamepad2,
//   },
//   {
//     title: "Access to top international schools nearby",
//     description: "Proximity to premier educational institutions means less travel and more family time.",
//     icon: GraduationCap,
//   },
//   {
//     title: "Recreational spaces for everyday use",
//     description: "Thoughtfully planned active zones integrated into your daily routine, not just weekends.",
//     icon: Sparkles,
//   },
// ];

// export default function FamilyCentricDesign() {
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <section className="relative bg-[#F4F1EA] text-[#1F2421] py-24 px-6 sm:px-12 lg:px-20 overflow-hidden font-sans">
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
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#D8D2C2]/70 pb-12 mb-16 gap-8">
//           <div className="max-w-2xl">
//             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BDD2C1]/40 border border-[#2D5A43]/20 mb-5">
//               <span className="w-2 h-2 rounded-full bg-[#2D5A43]" />
//               <span className="text-[11px] font-bold tracking-widest text-[#2D5A43] uppercase">
//                 Section 06 · Family First
//               </span>
//             </div>
            
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1F2421] leading-[1.15]">
//               Designed Around Families <br />
//               <span className="font-serif italic font-normal text-[#2D5A43]">
//                 Child Centric Design for You
//               </span>
//             </h2>
//           </div>

//           <div className="lg:max-w-md flex flex-col justify-end">
//             <p className="text-sm sm:text-base text-[#5A635E] leading-relaxed border-l-2 border-[#2D5A43]/30 pl-4">
//               From open green spaces to play areas and recreational zones, the township is planned around families and children first. Kids have room to grow, and parents don’t have to drive elsewhere for it.
//             </p>
//           </div>
//         </div>

//         {/* Main Content Layout: Interactive Grid & Visual Showcase */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
//           {/* Left: Highlights List Cards */}
//           <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
//             {highlights.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={index}
//                   onClick={() => setOpenModal(true)}
//                   className="group relative bg-white/70 hover:bg-white backdrop-blur-sm border border-[#D8D2C2] hover:border-[#2D5A43]/40 rounded-2xl p-6 sm:p-7 flex items-start gap-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] border border-[#D8D2C2]/80 flex-shrink-0 flex items-center justify-center text-[#2D5A43] group-hover:bg-[#2D5A43] group-hover:text-white transition-all duration-300 shadow-sm">
//                     <Icon className="w-5 h-5" />
//                   </div>

//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-1.5">
//                       <CheckCircle2 className="w-4 h-4 text-[#2D5A43]" />
//                       <h4 className="text-lg font-semibold text-[#1F2421] group-hover:text-[#2D5A43] transition-colors leading-snug">
//                         {item.title}
//                       </h4>
//                     </div>
//                     <p className="text-sm text-[#5A635E] leading-relaxed pl-6">
//                       {item.description}
//                     </p>
//                   </div>

//                   <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#F4F1EA] group-hover:bg-[#2D5A43] items-center justify-center text-[#2D5A43] group-hover:text-white transition-all duration-300 self-center">
//                     <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right: Feature Image Showcase Gallery */}
//           <div className="lg:col-span-5 grid grid-cols-2 gap-4">
//             {/* Large Top Image */}
//             <div 
//               onClick={() => setOpenModal(true)}
//               className="group relative col-span-2 h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#D8D2C2] bg-[#BDD2C1]/20 cursor-pointer shadow-sm"
//             >
//               <Image
//                 src="/green-space.webp" // Replace with your image path
//                 alt="Greenwood High International School"
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//               <div className="absolute bottom-4 left-4 right-4 text-white">
//                 <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#2D5A43] rounded-md inline-block mb-1">
//                  Green space
//                 </span>
//                 {/* <p className="text-sm font-medium">Top International Schools within 10 Mins</p> */}
//               </div>
//             </div>

//             {/* Bottom Left Image */}
//             <div 
//               onClick={() => setOpenModal(true)}
//               className="group relative h-48 rounded-2xl overflow-hidden border border-[#D8D2C2] bg-[#BDD2C1]/20 cursor-pointer shadow-sm"
//             >
//               <Image
//                 src="/swimming-pool.webp" 
//                 alt="Head Start Educational Academy"
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//               <div className="absolute bottom-3 left-3 right-3 text-white">
//                 <p className="text-xs font-medium leading-tight">Swimming Pool</p>
//               </div>
//             </div>

//             {/* Bottom Right Card / CTA */}
//             <div 
//               onClick={() => setOpenModal(true)}
//               className="group relative h-48 rounded-2xl p-5 border border-[#2D5A43]/30 bg-[#2D5A43] text-white flex flex-col justify-between cursor-pointer hover:bg-[#244835] transition-colors shadow-md"
//             >
//               <div>
//                 <span className="text-[10px] uppercase tracking-widest text-[#BDD2C1] font-semibold">
//                   Township Living
//                 </span>
//                 <h5 className="text-lg font-light leading-snug mt-1 font-serif italic">
//                   A complete environment for growth.
//                 </h5>
//               </div>

//               <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#BDD2C1] group-hover:text-white">
//                 <span>View Masterplan</span>
//                 <ArrowUpRight className="w-4 h-4" />
//               </div>
//             </div>
//           </div>

//         </div>

//         {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
//       </div>
//     </section>
//   );
// }

// components/FamilyCentricDesign.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Trees, 
  Sparkles, 
  GraduationCap, 
  Gamepad2, 
  ArrowUpRight,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import ModalComponent from "../Modal";
import FadeIn from '../FadeIn';

const highlights = [
  {
    number: "01",
    title: "Green, open spaces across the township",
    description: "Expansive landscaped gardens and oxygen-rich walking trails for uninterrupted outdoor play.",
    icon: Trees,
    tag: "Nature First"
  },
  {
    number: "02",
    title: "Play areas for different age groups",
    description: "Dedicated child-safe play equipment, sandpits, and activity spaces tailored to every developmental stage.",
    icon: Gamepad2,
    tag: "Active Play"
  },
  {
    number: "03",
    title: "Access to top international schools nearby",
    description: "Located within minutes of premier schools like Greenwood High and Head Start Academy for effortless school runs.",
    icon: GraduationCap,
    tag: "Education"
  },
  {
    number: "04",
    title: "Recreational spaces for everyday use",
    description: "Resort-style amenities and leisure areas thoughtfully integrated into daily life, not just for the weekend.",
    icon: Sparkles,
    tag: "Lifestyle"
  },
];

export default function FamilyCentricDesign() {
  const [openModal, setOpenModal] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <section className="relative bg-[#F4F1EA] text-[#1F2421] py-8 md:py-16 px-4 md:px-16 overflow-hidden font-sans" id='highlights'>
      {/* Background Architectural Dot Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#1F2421 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} 
      />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#BDD2C1]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#D8D2C2]/70 pb-12 md:mb-16 mb-8 gap-8">
        <FadeIn>
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BDD2C1]/40 border border-[#2D5A43]/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2D5A43] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#2D5A43] uppercase">
                 Family Ecosystem
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl  font-light tracking-tight text-[#1F2421] leading-[1.15]">
              Designed Around Families <br />
              <span className="font-serif italic font-normal text-[#2D5A43]">
                Child Centric Design for You
              </span>
            </h2>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="lg:max-w-md flex flex-col justify-end">
            <p className="text-sm sm:text-base text-[#5A635E] leading-relaxed border-l-2 border-[#2D5A43]/40 pl-4">
              From open green spaces to dedicated play zones, the township is planned around your family first—giving kids room to flourish without parents spending hours in traffic.
            </p>
          </div>
          </FadeIn>
        </div>

        {/* Main Content Layout */}
        <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Feature Cards */}
          
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeHighlight === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveHighlight(index)}
                  onClick={() => setOpenModal(true)}
                  className={`group relative rounded-2xl p-6 sm:p-7 flex items-start gap-5 cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? 'bg-white border-[#2D5A43]/50 shadow-[0_12px_30px_-10px_rgba(45,90,67,0.12)] -translate-y-0.5' 
                      : 'bg-white/60 hover:bg-white border-[#D8D2C2] hover:border-[#2D5A43]/30 shadow-none'
                  }`}
                >
                  {/* Left Icon with Dual Theme */}
                  <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 shadow-sm border ${
                    isSelected
                      ? 'bg-[#2D5A43] text-white border-[#2D5A43]'
                      : 'bg-[#F4F1EA] text-[#2D5A43] border-[#D8D2C2]/80 group-hover:bg-[#2D5A43] group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                      <span className="text-[10px] font-mono font-bold text-[#2D5A43] bg-[#BDD2C1]/30 px-2 py-0.5 rounded">
                        {item.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5A635E]">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className={`text-base sm:text-lg font-semibold tracking-tight transition-colors leading-snug mb-1.5 ${
                      isSelected ? 'text-[#2D5A43]' : 'text-[#1F2421] group-hover:text-[#2D5A43]'
                    }`}>
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5A635E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow Action Icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 self-center ${
                    isSelected
                      ? 'bg-[#2D5A43] text-white rotate-45'
                      : 'bg-[#F4F1EA] text-[#2D5A43] group-hover:bg-[#2D5A43] group-hover:text-white group-hover:rotate-45'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
            {/* Right Column: Editorial Image Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Top Large Feature Image */}
           
            <div 
              onClick={() => setOpenModal(true)}
              className="group relative sm:col-span-2 h-72 sm:h-80 rounded-3xl overflow-hidden border border-[#D8D2C2] bg-[#BDD2C1]/20 cursor-pointer shadow-sm"
            >
              <Image
                src="/green-space.webp"
                alt="Township Green Spaces"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              
              {/* Floating Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#1F2421] shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A43]" />
                100% Pedestrian Safe
              </div>

              {/* Bottom Card Copy */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#BDD2C1] block mb-1">
                    Expansive Outdoors
                  </span>
                  <h4 className="text-xl font-medium tracking-tight">
                    Lush Parks & Protected Green Belts
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#2D5A43] group-hover:scale-110 transition-all flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Bottom Left: Swimming Pool / Amenities */}
            
            <div 
              onClick={() => setOpenModal(true)}
              className="group relative h-60 rounded-3xl overflow-hidden border border-[#D8D2C2] bg-[#BDD2C1]/20 cursor-pointer shadow-sm"
            >
              <Image
                src="/swimming-pool.webp" 
                alt="Township Swimming Pool & Leisure Club"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-semibold text-[#BDD2C1] block">
                  Club Amenities
                </span>
                <p className="text-sm font-medium leading-snug mt-0.5">Kids & Adults Swimming Pool</p>
              </div>
            </div>
           
            {/* Bottom Right: High-Impact Township Card */}
           
            <div 
              onClick={() => setOpenModal(true)}
              className="group relative h-60 rounded-3xl p-6 border border-[#2D5A43]/20 bg-[#2D5A43] text-white flex flex-col justify-between cursor-pointer hover:bg-[#244835] transition-all duration-300 shadow-md overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#BDD2C1] font-bold bg-white/10 px-2.5 py-1 rounded-full mb-3">
                  <MapPin className="w-3 h-3 text-[#BDD2C1]" />
                  Whitefield Vicinity
                </div>
                <h5 className="text-lg font-light leading-snug font-serif italic text-white/95">
                  “A complete ecosystem built so children thrive and families connect.”
                </h5>
              </div>

              <div className="relative flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-[#BDD2C1] group-hover:text-white">
                <span>Request Brochure</span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#2D5A43] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
           
          </div>

        </div>
       </FadeIn>
        {/* Modal Hookup */}
        {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
      </div>
    </section>
  );
}