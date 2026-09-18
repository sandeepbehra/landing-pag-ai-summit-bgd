"use client";
import Link from "next/link";
import { useState } from "react";
const Footer = ({
  companyName = "BIG ESTATE",
  newsletter = {
    title: "Subscribe to our newsletter",
    buttonText: "Subscribe",
  },
  socialLinks = {
    instagram: "https://www.instagram.com/bigestate.io/",
    twitter: "#",
    facebook: "https://www.facebook.com/bigestate.io/",
    linkedin: "https://www.linkedin.com/company/big-estate/posts/?feedView=all",
  },
  links = {
    forBuyers: [{ name: "For Buyers", href: "#" }],
    forDevelopers: [{ name: "For Developers", href: "#" }],
    forBrokers: [{ name: "For Brokers", href: "#" }],
    forChannelPartners: [{ name: "For Channels Partners", href: "#" }],
    workWithUs: [
      { name: "About Us", href: "/about-us" },
      { name: "Campaign Centre", href: "https://enterprise.bigestate.io/products/campaign-centre" },
      { name: "AI Caller", href: "https://enterprise.bigestate.io/products/ai-calling" },
      { name: "Blogs", href:"/blogs"}
      // { name: "Lead Centre", href: "/products/lead-centre" },
      // { name: "AI Caller", href: "/products/ai-caller" },
      //  { name: "Whatsapp Centre", href: "/products/whatsApp-centre" },
      // { name: "Explore Big Estate", href: "/products" },
      // { name: "Campaign Management", href: "/products/marketing-automation" },
      // { name: "Lead Management", href: "/products/crm-software-management" },
      // { name: "AI Chatbots", href: "/products/ai-chat-bots" },
    ],
    ourProducts: [
      { name: "Products", href: "https://enterprise.bigestate.io/" },
       { name: "Lead Centre", href: "https://enterprise.bigestate.io/products/lead-centre" },
       { name: "Whatsapp Centre", href: "https://enterprise.bigestate.io/products/whatsapp-centre" },
      //  { name: "Products", href: "/products" },
      //  { name: "Lead Centre", href: "/products/lead-centre" },
      //  { name: "Whatsapp Centre", href: "/products/whatsapp-centre" },

      // { name: "Virtual Site Visits", href: "/products/virtual-site-visits" },
      // { name: "Automated AI Video", href: "/products/ai-video-production" },
      // {
      //   name: "Branding & LeadGen",
      //   href: "/products/branding-lead-generation",
      // },
      // { name: "Ad Film Production", href: "/products/ad-film-production" },
      // {
      //   name: "Social Media & Website",
      //   href: "/products/social-media-website",
      // },
    ],
  },
  onNewsletterSubmit,
}) => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (onNewsletterSubmit) {
      onNewsletterSubmit();
    } else {
      console.log("Newsletter subscription clicked");
    }
  };
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      if (onNewsletterSubmit) {
        // Call custom submit handler if provided
        await onNewsletterSubmit(email);
      } else {
        // Default behavior - just log for now
        console.log("Email submitted:", email);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setMessage("Thank you! We'll be in touch soon.");
        setEmail("");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <footer className="bg-black text-white pt-12 pb-4 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 mb-12">
          {/* Logo and Social Media - Takes 3 columns */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <img
                src="/footerBigestatelogo.svg"
                alt="Big Estate Logo"
                className="h-12"
              />
            </div>

            <div>
              <p className="text-[#FFFFFF] text-xl mb-4 font-bold">
                Follow us on:
              </p>
              <div className="flex space-x-4">
                <Link
                  href={socialLinks.instagram}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <img
                    src="/ri_instagram-fill.svg"
                    className="w-5 h-5"
                    alt="Instagram"
                  />
                </Link>
                {/* <Link
                  href={socialLinks.twitter}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <img src="/bi_twitter.svg" className="w-5 h-5" alt="Twitter" />
                </Link> */}
                <Link
                  href={socialLinks.facebook}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <img
                    src="/ic_baseline-facebook.svg"
                    className="w-5 h-5"
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <img src="/Intagram.svg" className="w-5 h-5" alt="LinkedIn" />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden block flex-1 max-w-md w-full  md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col items-center gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email "
                  className="flex-1 w-full px-3 py-2 rounded-lg border-0 text-gray-900 placeholder-gray-500 text-sm text-center focus:outline-none focus:ring-2 focus:ring-white/50"
                  disabled={isSubmitting}
                />
                <h3 className="text-blue-400 text-sm font-medium text-center">
                  {newsletter.title}
                </h3>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#3296FA] to-[#2563EB] text-white px-8 py-2.5 rounded-md transition-colors font-medium text-sm w-auto"
                >
                  {isSubmitting ? "Submitting..." : `${newsletter.buttonText}`}
                </button>
              </div>

              {/* Message display */}
              {message && (
                <div
                  className={`text-sm p-3 rounded-lg ${
                    message.includes("Thank you")
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
          {/* For Buyers/Developers/Brokers/Partners Column - Takes 2 columns */}
          {/* <div className="md:col-span-2">
            {links.forBuyers.map((link, index) => (
              <Link
                key={`buyer-${index}`}
                href={link.href}
                className="block text-white hover:text-blue-400 transition-colors mb-3 text-sm"
              >
                {link.name}
              </Link>
            ))}
            {links.forDevelopers.map((link, index) => (
              <Link
                key={`dev-${index}`}
                href={link.href}
                className="block text-white hover:text-blue-400 transition-colors mb-3 text-sm"
              >
                {link.name}
              </Link>
            ))}
            {links.forBrokers.map((link, index) => (
              <Link
                key={`broker-${index}`}
                href={link.href}
                className="block text-white hover:text-blue-400 transition-colors mb-3 text-sm"
              >
                {link.name}
              </Link>
            ))}
            {links.forChannelPartners.map((link, index) => (
              <Link
                key={`partner-${index}`}
                href={link.href}
                className="block text-white hover:text-blue-400 transition-colors mb-3 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div> */}

          {/* Work With Us Column - Takes 2 columns */}
          <div className="md:col-span-2  ">
            {links.workWithUs.map((link, index) => (
              <Link
                key={`work-${index}`}
                href={link.href}
                className="block text-white hover:text-blue-400 transition-colors mb-3 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Our Work Column - Takes 2 columns */}
          <div className="md:col-span-2">
            {links.ourProducts.map((link, index) => (
              <Link
                key={`ourwork-${index}`}
                href={link.href}
                className="block text-white hover:text-blue-400 transition-colors mb-3 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Newsletter Subscription - Takes 3 columns */}
          <div className="hidden md:block flex-1 max-w-md w-full  md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col items-center gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email "
                  className="flex-1 w-full px-3 py-2 rounded-lg border-0 text-gray-900 placeholder-gray-500 text-sm text-center focus:outline-none focus:ring-2 focus:ring-white/50"
                  disabled={isSubmitting}
                />
                <h3 className="text-blue-400 text-sm font-medium text-center">
                  {newsletter.title}
                </h3>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#3296FA] to-[#2563EB] text-white px-8 py-2.5 rounded-md transition-colors font-medium text-sm w-auto"
                >
                  {isSubmitting ? "Submitting..." : `${newsletter.buttonText}`}
                </button>
              </div>

              {/* Message display */}
              {message && (
                <div
                  className={`text-sm p-3 rounded-lg ${
                    message.includes("Thank you")
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
          {/* <div className="md:col-span-2">
            <div>
              <h3 className="text-blue-400 text-base font-medium mb-2">
                {newsletter.title}
              </h3>
              <button
                onClick={handleNewsletterSubmit}
                className="bg-gradient-to-r from-[#3296FA] to-[#2563EB] text-white px-8 py-2.5 rounded-md transition-colors font-medium text-sm"
              >
                {newsletter.buttonText}
              </button>
            </div>
          </div> */}
        </div>

        {/* Bottom Section with Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Big Growth Digital Private Limited</p>
          <div className="flex-wrap md:flex-nowrap  flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://merchant.razorpay.com/policy/KYj4UYIQ3Ti7U0/terms"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://merchant.razorpay.com/policy/KYj4UYIQ3Ti7U0/shipping"
              className="hover:text-white transition-colors"
            >
              Shipping Policy
            </Link>
            <Link
              href="https://merchant.razorpay.com/policy/KYj4UYIQ3Ti7U0/refund"
              className="hover:text-white transition-colors"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-8">
          <p className="text-sm">@ Powered By: <span><a target="_blank" href="https://biggrowthdigital.com"><strong>Big Growth Digital {new Date().getFullYear()}</strong></a></span></p>
        </div>
      </div>

      {/* Decorative Vector */}
      <div className="absolute -bottom-[3.6rem] left-0 right-0 pointer-events-none">
        <img src="/Vectorfooter.svg" className="w-full" alt="" />
      </div>
    </footer>
  );
};

export default Footer;