"use client";
import React, { useEffect, useState } from "react";
import ModalComponent from "../Modal";

import { companyAddress, companyName } from "@/utils/constants";
import { FaWhatsapp } from "react-icons/fa";

const ProjectImage = ({ otpForm }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenModal(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className={`flex md:flex-row flex-col md:justify-between justify-center gap12 w-screen mt-12 sm:mt-16`}
        id="Home"
      >
        <div className="hidden">
          <h1>
            {" "}
            {companyName} at {companyAddress}{" "}
          </h1>
          <h2> Ultra Luxury 2 & 3 BHK Apartments </h2>
          <h3> Starting Price: Rs. 1.26 Cr* </h3>
        </div>
        <div className="w-full items-center md:justify-center bg-background font-semibold text-primary">
          <img
            src="/banner-desktop.webp"
            className="md:block hidden w-full object-cover"
          />
          <img
            src="/banner-mobile.webp"
            className="md:hidden  block w-full object-cover"
          />
        </div>

        {/* <button
          onClick={() => setOpenModal((prev) => !prev)}
          className="z-20 md:block hidden border-2 border-white bg-[#141625] -rotate-90 rounded-tl-lg rounded-br-lg fixed px-4 py-2 text-lg text-white md:top-96 top-72 -right-[3rem] hover:bg-[#e8b45c] transition-colors duration-500 ease-in-out"
        >
          Enquire Now
        </button> */}
        {openModal && (
          <ModalComponent
            otpForm={otpForm}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </>
  );
};

export default ProjectImage;
