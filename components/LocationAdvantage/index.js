"use client";
import { useState, useEffect } from "react";
import { MapPin, Car, Building2, Plane } from "lucide-react";
import FadeIn from "../FadeIn";
import ModalComponent from "../Modal";

const LocationAdvantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Balanagar Metro (2 mins)",
      icon: <Building2 className="w-7 h-7" style={{ color: "#e8b45c" }} />,
    },
    {
      id: 2,
      title: "HITECH City, Manyata Tech Park (10 mins)",
      icon: <Building2 className="w-7 h-7" style={{ color: "#e8b45c" }} />,
    },
    {
      id: 3,
      title: "Financial District (15 mins)",
      icon: <Car className="w-7 h-7" style={{ color: "#e8b45c" }} />,
    },
    {
      id: 4,
      title: "Forum Sujana Mall / Manjeera Mall (5 mins)",
      icon: <Plane className="w-7 h-7" style={{ color: "#e8b45c" }} />,
    },
    {
      id: 5,
      title: "KIMS / Apollo Hospitals / DPS / Silver Oaks",
      icon: <Car className="w-7 h-7" style={{ color: "#e8b45c" }} />,
    },
  ];

  return (
    <section
      className="relative bg-white overflow-hidden py-10 sm:py-12 font-light"
      id="location"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <FadeIn>
            <div className="inline-flex items-center gap-4 mb-6">
              {/* <div
                className="h-[0.2rem] w-16"
                style={{
                  background: `linear-gradient(to right, transparent, #141625)`,
                }}
              ></div> */}
              <span
                className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]"
                style={{ color: "#141625" }}
              >
                Location Advantage
              </span>
              {/* <div
                className="h-[0.2rem] w-16"
                style={{
                  background: `linear-gradient(to left, transparent, #141625)`,
                }}
              ></div> */}
            </div>
          </FadeIn>
          {/* <FadeIn>
            <h1
              className="text-4xl sm:text-7xl font-light mb-6 tracking-tight uppercase"
              style={{ color: "#141625" }}
            >
              Connectivity at{" "}
              <span
                className="font-medium"
                style={{
                  background: `linear-gradient(135deg, #e8b45c)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Doorstep
              </span>
            </h1>
          </FadeIn> */}
          <FadeIn>
            <p
              className="text-xl max-w-3xl mx-auto font-light leading-relaxed"
              style={{ color: "#141625" }}
            >
              In the Heart of Hyderabad’s IT & Business Belt
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Map Section */}
          <FadeIn>
            <div
              className={`relative order-2 lg:order-1 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div
                className={`w-full relative lg:sticky lg:top-24 mb-6 lg:mb-0 transform transition-all duration-300 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src="/location-landmark.webp"
                  alt="Location Map"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </FadeIn>

          {/* Location Advantages */}
          <FadeIn>
            <div
              className={`space-y-6 order-1 lg:order-2 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="group p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 border-2 shadow-lg hover:shadow-xl hover:scale-[1.02] mt-20"
                  style={{
                    backgroundColor: "rgba(232, 180, 92, 0.05)",
                    borderColor: "rgba(20, 22, 37, 0.1)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2 border-[#141625]"
                      style={{
                        backgroundColor: "rgba(232, 180, 92, 0.1)",
                        borderColor: "rgba(232, 180, 92, 0.3)",
                      }}
                    >
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-semibold group-hover:opacity-80 transition-opacity duration-300"
                        style={{ color: "#141625" }}
                      >
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        
      </div>
      <div className="relative z-10 container mx-auto px-6 flex flex-col gap-4">
        <FadeIn>
          <p
            className="text-2xl max-w-3xl font-light leading-relaxed mt-8"
            style={{ color: "#141625" }}
          >
            Live close to everything that matters, from work to wellness.
          </p>
        </FadeIn>
        {/* CTA */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => setOpenModal(true)}
              className="px-8 py-4 bg-[#141625] text-white font-medium tracking-wide rounded-md text-xl
              hover:bg-[#e8b45c] hover:text-[#141625] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#e8b45c] focus:ring-opacity-50"
            >
              <span className="flex items-center justify-center gap-2 text-lg">
                Schedule Site Visit
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
      {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
      
    </section>
  );
};

export default LocationAdvantage;
