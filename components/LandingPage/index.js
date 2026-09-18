"use client";
import React, { useEffect, useState } from "react";
import ConnectButton from "../ConnectButton";
import FloorPlan from "../FloorPlan";
import ProjectImage from "../ProjectImage";
import About from "../About";
import Highlights from "../Highlights";
import LocationAdvantage from "../LocationAdvantage";
import Amenities from "../Amenities";
import RouteHandler from "../RouteHandler";
import FormNew from "../FormNew";
import Gallery from "../Gallery";
import FormWithOtp from "../FormWithOtp";
import Navbar from "../Navbar";
import { companyName } from "@/utils/constants";
import MasterPlan from "../MasterPlan";
import PriceBreakup from "../Pricebreakup";
import ContactUS from "../ContactUs";

import KeyUSPs from "../USPs";
import ASBLLandingPage from "../Developer";
import InvestmentAngle from "../InvestmentAngle";
import Footer from "../Footer";
import NewFooter from "../NewFooter";
import WhyRightLife from "../WhyRightLIfe";
import LakeSportsHub from "../LakeSportsHub";
import FamilyCentricDesign from "../FamilyCentricDesign";
import TownshipLiving from "../TownshipLiving";
import DeveloperSection from "../DeveloperSection";
import WhyThisSummit from "../WhyThisSummit";
import PanelSection from "../PanelSection";
import EveningSession from "../EveningSession";
import VenueSection from "../VenueSection";
import FinalRSVPSection from "../FinalRSVPSection";


const LandingPage = () => {
  const [otpForm, setOtpForm] = useState(false);
  let url;
  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  useEffect(() => {
    if (url.includes("/official")) {
      setOtpForm(true);
    }
  }, [url]);

  return (
    <div className="bg-heading">
      <div className="w-screen flex justify-between z-50">
        <Navbar otpForm={otpForm} />
      </div>
      <div className="flex flex-col md:w-[98.8%]">
         <section id="home" className="relative" data-track="home">
          <ProjectImage otpForm={otpForm} />
        </section>
        {/* <div className="md:hidden block bg-background -mt16">
          {otpForm ? <FormWithOtp /> : <FormNew/>}
        </div> */}
         <section  className="relative">
         <WhyThisSummit/>
        </section>
         <section  className="relative">
         <PanelSection/>
        </section>
         <section  className="relative">
         <EveningSession/>
        </section>
         <section  className="relative">
         <VenueSection/>
        </section>
         <section  className="relative">
         <FinalRSVPSection/>
        </section>
      
        {/* <ContactUS/> */}
        <div className="mb-4">
          <NewFooter/>
        </div>
      

        <div className="fixed bottom-0 block z-40">
          <ConnectButton otpForm={otpForm} />
        </div>
        <RouteHandler eventName="page_viewed" />
      </div>
    </div>
  );
};

export default LandingPage;
