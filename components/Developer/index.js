import React from "react";
import {
  Building,
  Users,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
} from "lucide-react";
import FadeIn from "../FadeIn";

const ASBLLandingPage = () => {
  return (
    <div className="bg-white font-light" id="developer">
      {/* About Developer Section */}
      <section className="py-12 lg:px-32 md:px-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">
                  From ASBL
                </span><br/>
                <span className="font-light tracking-[0.3em] text-2xl md:text-4xl uppercase text-[#141625]">A Name Built on Trust</span>

              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              {/* ASBL Logo */}
              <FadeIn>
                <div className="mb-10 sm:text-left text-center">
                  <div>
                    <img
                      src="/landmark-logo.webp"
                      alt="ASBL Logo"
                      className="h-24 md:h-28 w-auto object-contain"
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p style={{ color: "#141625" }}>
                    ASBL was born to break the mold of residential real estate
                    and bring about a change in how homes are made. We strive to
                    serve our patrons through customer-centric design,
                    impeccable delivery standards, and proactive communications.
                  </p>

                  <p style={{ color: "#141625" }}>
                    With the ASBL family growing by the day, the trust of our
                    audience is the positive reinforcement we need to continue
                    building the realty of tomorrow with passion.
                  </p>
                </div>
              </FadeIn>

              {/* Trust Indicators */}
              {/* <FadeIn>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["ISO Certified", "RERA Approved", "Award Winning"].map(
                    (label, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-opacity-40"
                        style={{
                          borderColor: "#e8b45c",
                          backgroundColor: "rgba(232, 180, 92, 0.1)",
                        }}
                      >
                        <CheckCircle
                          className="w-5 h-5"
                          style={{ color: "#e8b45c" }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#141625" }}
                        >
                          {label}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </FadeIn> */}
            </div>

            {/* Right Side - Stats */}
            <FadeIn>
              <div className="grid grid-cols-2 gap-6">
                {/* Delivered/Under Construction */}

                <div
                  className="rounded-2xl p-6 text-center border border-opacity-20 hover:shadow-md transition-all duration-300"
                  style={{
                    borderColor: "#e8b45c",
                    backgroundColor: "rgba(232,180,92,0.05)",
                  }}
                >
                  <Building
                    className="w-10 h-10 mx-auto mb-4"
                    style={{ color: "#e8b45c" }}
                  />
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#e8b45c" }}
                  >
                    6
                  </div>
                  <div
                    className="text-xl font-bold mb-3"
                    style={{ color: "#141625" }}
                  >
                    MN Sq Ft
                  </div>
                  <div
                    className="text-xs leading-relaxed"
                    style={{ color: "#141625" }}
                  >
                    DELIVERED/UNDER CONSTRUCTION IN HYDERABAD
                  </div>
                </div>

                {/* Upcoming Projects */}
                <div
                  className="rounded-2xl p-6 text-center border border-opacity-20 hover:shadow-md transition-all duration-300"
                  style={{
                    borderColor: "#e8b45c",
                    backgroundColor: "rgba(232,180,92,0.05)",
                  }}
                >
                  <TrendingUp
                    className="w-10 h-10 mx-auto mb-4"
                    style={{ color: "#e8b45c" }}
                  />
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#e8b45c" }}
                  >
                    10
                  </div>
                  <div
                    className="text-xl font-bold mb-3"
                    style={{ color: "#141625" }}
                  >
                    MN Sq Ft
                  </div>
                  <div
                    className="text-xs leading-relaxed"
                    style={{ color: "#141625" }}
                  >
                    UPCOMING RESIDENTIAL APARTMENT PROJECT IN HYDERABAD
                  </div>
                </div>

                {/* Happy Families */}
                <div
                  className="rounded-2xl p-6 text-center border border-opacity-20 hover:shadow-md transition-all duration-300"
                  style={{
                    borderColor: "#e8b45c",
                    backgroundColor: "rgba(232,180,92,0.05)",
                  }}
                >
                  <Users
                    className="w-10 h-10 mx-auto mb-4"
                    style={{ color: "#e8b45c" }}
                  />
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#e8b45c" }}
                  >
                    1800+
                  </div>
                  <div
                    className="text-lg font-semibold mb-2"
                    style={{ color: "#141625" }}
                  >
                    HAPPY FAMILIES
                  </div>
                  <div className="text-xs" style={{ color: "#141625" }}>
                    Living the ASBL Dream
                  </div>
                </div>

                {/* Award */}
                <div
                  className="rounded-2xl p-6 text-center border border-opacity-20 hover:shadow-md transition-all duration-300"
                  style={{
                    borderColor: "#e8b45c",
                    backgroundColor: "rgba(232,180,92,0.05)",
                  }}
                >
                  <Award
                    className="w-10 h-10 mx-auto mb-4"
                    style={{ color: "#e8b45c" }}
                  />
                  <div
                    className="text-lg font-semibold mb-1"
                    style={{ color: "#141625" }}
                  >
                    COMPANY OF THE YEAR
                  </div>
                  <div className="text-xs mb-3" style={{ color: "#141625" }}>
                    OUTLOOK BUSINESS 2022
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-current"
                        style={{ color: "#e8b45c" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ASBLLandingPage;
