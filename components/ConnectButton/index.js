"use client";
import React, { useState } from "react";
import ModalComponent from "../Modal";
import Link from "next/link";
import { companyWhatsapp } from "@/utils/constants";

const ConnectButton = ({ otpForm }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-screen flex fixed sm:hidden bg-brand_2  hover:bg-brand_1 bottom-0 z-40 text-white ">
      <button
        onClick={() => setOpenModal(true)}
        className="w-full p-2 text-lg"
      >
        Enquire Now
      </button>
      {/* <a
        href="tel:+9179059 50648"
        className="w-full p-2 text-lg text-center"
      >
        Call Now
      </a> */}
      {openModal && (
        <ModalComponent otpForm={otpForm} openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default ConnectButton;
