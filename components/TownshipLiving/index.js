// components/TownshipLivingSplitDark.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Store,
  Layers
} from 'lucide-react';
import ModalComponent from "../Modal";
import FadeIn from "../FadeIn"

export default function TownshipLiving() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="bg-[#1A2E22] text-[#F6F4EB] py-8 md:py-16 px-4 sm:px-16 font-sans relative overflow-hidden" id='township'>
      {/* Editorial Decorative Background Text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[20vw] font-serif font-black text-white leading-none whitespace-nowrap">
        100+ ACRES
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Minimal Header */}
        <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#BDD2C1]/20 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BDD2C1]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#BDD2C1]">
                 Master Development
              </span>
            </div>
            <h2 className="text-3xl  md:text-5xl font-light tracking-tight text-white text-center">
              A Township, <span className="font-serif italic text-[#BDD2C1]">Not Just An Apartment</span>
            </h2>
          </div>
        
          <button
            onClick={() => setOpenModal(true)}
            className="group flex items-center gap-3 bg-[#BDD2C1] text-[#1A2E22] hover:bg-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 w-fit self-start md:self-auto shadow-lg hover:shadow-xl mx-auto"
          >
            <span>Explore Masterplan</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        </FadeIn>

        {/* Central Split Canvas */}
        <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Frame */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => setOpenModal(true)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#BDD2C1]/30 shadow-2xl cursor-pointer group"
            >
              <Image
                src="/about-new.webp" // Replace with your image
                alt="100+ Acre Township Masterplan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Bottom Image Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
                <span className="bg-[#1A2E22]/90 backdrop-blur-md border border-[#BDD2C1]/30 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#BDD2C1]" />
                  Varthur-Sarjapur Road
                </span>
                <span className="font-mono text-[#BDD2C1] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  Phase 2 Active
                </span>
              </div>
            </div>

            {/* Overlapping Floating Metric Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#F6F4EB] text-[#1F2421] p-5 rounded-xl border border-[#D8D2C2] shadow-2xl max-w-[220px]">
              <p className="text-3xl font-light font-serif text-[#1A2E22]">100+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#5A635E] mt-0.5">Acres Integrated</p>
              <p className="text-[11px] text-[#5A635E]/80 mt-1 leading-tight">Homes & retail in one unified ecosystem.</p>
            </div>
          </div>

          {/* Right Column: Editorial Accordion-style List */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#BDD2C1] uppercase block mb-2">
                100+ Acres · Residential & Commercial
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-white leading-snug">
                Homes And Commercial Spaces, <span className="font-serif italic text-[#BDD2C1]">Together.</span>
              </h3>
              <p className="text-[#BDD2C1]/80 text-sm sm:text-base leading-relaxed mt-4">
                Most apartments ask you to leave the gate for everyday needs. Mana Skanda’s &lsquo;TheRightLife&rsquo; is planned differently: residential and commercial zones built into the same masterplan, so daily life needs less travel and more time at home.
              </p>
            </div>

            {/* Structured Value Rows */}
            <div className="divide-y divide-[#BDD2C1]/15 border-y border-[#BDD2C1]/15">
              
              <div 
                onClick={() => setOpenModal(true)}
                className="py-4 flex items-center justify-between group cursor-pointer hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-[#BDD2C1]/20 flex items-center justify-center text-[#BDD2C1] group-hover:bg-[#BDD2C1] group-hover:text-[#1A2E22] transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-[#BDD2C1] transition-colors">
                      Phase 1 Sold Out · Phase 2 Available
                    </h4>
                    <p className="text-xs text-[#BDD2C1]/70">Early entry pricing into an established mega-development.</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#BDD2C1]/50 group-hover:text-[#BDD2C1] group-hover:translate-x-1 transition-all" />
              </div>

              <div 
                onClick={() => setOpenModal(true)}
                className="py-4 flex items-center justify-between group cursor-pointer hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-[#BDD2C1]/20 flex items-center justify-center text-[#BDD2C1] group-hover:bg-[#BDD2C1] group-hover:text-[#1A2E22] transition-colors">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-[#BDD2C1] transition-colors">
                      High-Street Retail & Daily Conveniences
                    </h4>
                    <p className="text-xs text-[#BDD2C1]/70">Everything essential accessible without stepping on the highway.</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#BDD2C1]/50 group-hover:text-[#BDD2C1] group-hover:translate-x-1 transition-all" />
              </div>

              <div 
                onClick={() => setOpenModal(true)}
                className="py-4 flex items-center justify-between group cursor-pointer hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-[#BDD2C1]/20 flex items-center justify-center text-[#BDD2C1] group-hover:bg-[#BDD2C1] group-hover:text-[#1A2E22] transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-[#BDD2C1] transition-colors">
                      Long-Term Value Creation
                    </h4>
                    <p className="text-xs text-[#BDD2C1]/70">Built to appreciation standards of a self-sustaining city.</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#BDD2C1]/50 group-hover:text-[#BDD2C1] group-hover:translate-x-1 transition-all" />
              </div>

            </div>

            {/* Bottom Callout Banner */}
            <div className="p-4 rounded-xl bg-white/5 border border-[#BDD2C1]/20 flex items-center justify-between text-xs text-[#BDD2C1]">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#BDD2C1]" />
                Limited units remaining under Phase 2 launch benefits
              </span>
              <button 
                onClick={() => setOpenModal(true)}
                className="underline font-bold hover:text-white transition-colors uppercase tracking-wider"
              >
                Check Pricing
              </button>
            </div>
          </div>

        </div>
        </FadeIn>

        {/* Modal Integration */}
        {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
      </div>
    </section>
  );
}