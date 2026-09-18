import { useState } from "react";
import FadeIn from "../FadeIn";
import ModalComponent from "../Modal";

export default function InvestmentAngle() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section
          className="relative bg-white text-[#141625] py-5 sm:py-8"
          id="investment"
        >
        <div className="container mx-auto px-6">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-4 mb-6">
                {/* <div className="h-[0.2rem] w-16 bg-gradient-to-r from-transparent to-[#141625]"></div> */}
                <span className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">
                  Where Growth Meets Location
                </span>
                {/* <div className="h-[0.2rem] w-16 bg-gradient-to-l from-transparent to-[#141625]"></div> */}
              </div>
            </FadeIn>
            <FadeIn>    
              <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-[#141625] font-roboto">
                Just minutes from Hyderabad’s IT and business districts, HITECH City, Mindspace, and Gachibowli. ASBL Landmark stands in a micro-market backed by Amazon, Deloitte, TCS, and Accenture.
              </p>
              <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-[#141625] font-roboto">
                High rental potential. Long-term appreciation. Trusted developer.
              </p>
              {/* CTA */}

                <div className="flex justify-center flex-col sm:flex-row gap-4 pt-4 mt-4">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="px-8 py-4 bg-[#141625] text-white font-medium tracking-wide rounded-md text-xl
                    hover:bg-[#e8b45c] hover:text-[#141625] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#e8b45c] focus:ring-opacity-50"
                  >
                    <span className="flex items-center justify-center gap-2 text-lg">
                       Call Us Today
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
          </div>
        </div>
        {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal}/>}
      </section>
  );
}