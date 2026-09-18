"use client";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import SidebarComponent from "../Sidebar";
import { navbarData } from "@/utils/constants";
import ModalComponent from "../Modal";
import { IoMdArrowForward } from "react-icons/io";

const Navbar = ({ otpForm }) => {
  const [sidebar, setSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarVisiblity = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <nav
      className={`w-full fixed z-50 transition-all duration-300 md:h-[70px] h-[58px] px-4
      bg-white
    `}
    >
    {/* <nav
      className={`w-full fixed z-50 transition-all duration-300 md:h-[90px] h-[58px] px-4
      ${
        scrolled
          ? "bg-gradient-to-b from-black/100 to-black/20"
            : "bg-gradient-to-b from-black/50 to-black/2"
      }
    `}
    > */}
      <div className="max-w-[1440px]  h-full  mx-auto flex items-center justify-between relative">
        <a
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="md:h-12 h-6 w-auto object-contain"
          />
        </a>

        <div className="lg:flex hidden items-center gap-x-4 absolute left-1/2 -translate-x-1/2">
          {navbarData.map((data) => (
            <Link
              key={data.name}
              to={data.name.toLowerCase()}
              smooth={true}
              className="relative group cursor-pointer text-xs tracking-wider font-medium whitespace-nowrap font-poppins"
            >
              <span className="block text-gray-900 font-poppins">
                {data.name.toUpperCase()}
              </span>
              <span className="absolute mt-1 bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setOpenModal((prev) => !prev)}
            className={`${
              logoVisible && "md:mr-32"
            } relative overflow-hidden border-2 font-medium bg-blue-500 border-white hover:border-blue-600
                    rounded-lg px-6 py-2.5 lg:flex hidden items-center gap-2 group transition-all duration-300
                    hover:shadow-lg hover:scale-105`}
          >
            <span className="z-20 relative text-sm tracking-wider text-white font-poppins group-hover:text-blue-600 transition-colors duration-300">
              SCHEDULE SITE VISIT
            </span>
            <IoMdArrowForward className="text-xl z-20 text-white group-hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
          </button>
          <button
            className="lg:hidden p-2 hover:bg-blue-500 text-brand_2 rounded-full transition-colors duration-300"
            onClick={handleSidebarVisiblity}
            aria-label="Toggle menu"
          >
            <RxHamburgerMenu
              className={`${!sidebar ? "block" : "hidden"} text-3xl`}
            />
            <RxCross1 className={`${sidebar ? "block" : "hidden"} text-3xl`} />
          </button>
        </div>
      </div>

      {sidebar && (
        <SidebarComponent sidebar={sidebar} setSidebar={setSidebar} />
      )}
      {openModal && (
        <ModalComponent
          otpForm={otpForm}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </nav>
  );
};

export default Navbar;