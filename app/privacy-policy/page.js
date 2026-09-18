'use client'
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { companyName } from "@/utils/constants";
import React from "react";

const index = () => {
  let url;

  if(typeof window !== 'undefined') {
    url = window.location.origin;
  }
  
  return (
    <PrivacyPolicy />
  );
};

export default index;
