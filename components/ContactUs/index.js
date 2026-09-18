import React from "react";
import FormWithOtp from "../FormWithOtp";
import FormNew from "../FormNew";

const ContactUS = ({ otpForm }) => {
  return (
    <div className="w-full mx-auto md:py-12 py-6 bg-white lg:px-32 md:px-16 px-4" id="contact us">
      <h1 className="text-3xl sm:text-5xl font-poppins text-slate-900 mx-auto font-bold text-center px-6 md:pb-20 pb-8 ">
        Contact US
      </h1>
      <div
        id="contact us"
        className="bg-white flex items-center justify-center rounded-lg"
      >
        {otpForm ? (
          <FormWithOtp width="md:w-1/3 w-full" />
        ) : (
          <FormNew width="sm:w-1/3 w-full" />
        )}
      </div>
    </div>
  );
};

export default ContactUS;
