// components/DeveloperSection.jsx
import React, { useState } from 'react';
import ModalComponent from "../Modal";

export default function DeveloperSection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="bg-[#FAF8F5] text-[#1F2421] py-8 sm:py-16 px-4 sm:px-16 font-sans border-t border-[#EAE5D9]" id='developer'>
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Subtle Overhead Label */}
        <p className="text-xs font-bold tracking-[0.25em] bg-[#1A2E22] text-[#F6F4EB] rounded-2xl px-3 py-2 inline-block uppercase mb-4">
           By Mana Skanda
        </p>

        {/* Serif Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1F2421] tracking-tight leading-tight mb-8">
          Setting a new benchmark for integrated townships in Bengaluru.
        </h2>

        {/* Focused Narrative */}
        <p className="text-base sm:text-lg text-[#5A635E] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          <strong className="text-[#1F2421] font-medium">‘TheRightLife’</strong> is brought to life by Mana Skanda, bringing large-scale, thoughtfully planned community living where homes and daily essentials exist in natural harmony.
        </p>

        {/* Minimalist Action */}
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="inline-block border-b border-[#2D5A43] pb-1 text-sm font-medium tracking-wider text-[#2D5A43] hover:text-[#1F2421] hover:border-[#1F2421] transition-colors uppercase"
          >
            Learn More About The Developer →
          </button>
        </div>

      </div>

      {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
    </section>
  );
}