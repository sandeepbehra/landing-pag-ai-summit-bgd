"use client";

import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { navbarData } from "@/utils/constants";

const Footer = ({
  socialLinks = {
    instagram: "https://www.instagram.com/bigestate.io/",
    facebook: "https://www.facebook.com/bigestate.io/",
    linkedin:
      "https://www.linkedin.com/company/big-estate/posts/?feedView=all",
  },
}) => {
  const legalLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      href: "/terms-and-conditions",
    },
    {
      name: "Cookies Policy",
      href: "/cookies-policy",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020817] text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(#60a5fa 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 md:pt-16 lg:px-12 lg:pt-20">
        <div
          className="
            grid gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_0.7fr_0.8fr]
            lg:gap-20
          "
        >
          {/* ==================================================
              LOGO + SOCIAL MEDIA
          ================================================== */}

          <div className="sm:col-span-2 lg:col-span-1">
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              offset={-70}
              className="inline-block cursor-pointer"
            >
              <img
                src="/footerBigestatelogo.svg"
                alt="Big Estate"
                className="h-11 w-auto md:h-12"
              />
            </ScrollLink>

            <p className="mt-6 max-w-[330px] text-sm leading-7 text-slate-200">
              Where real estate leaders come together to explore what AI
              changes next.
            </p>

            {/* SOCIAL */}

            <div className="mt-7">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                Follow Us
              </p>

              <div className="flex items-center gap-3">
                {/* Instagram */}

                <NextLink
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/[0.04]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/50
                    hover:bg-blue-600
                  "
                >
                  <img
                    src="/ri_instagram-fill.svg"
                    alt="Instagram"
                    className="h-[18px] w-[18px]"
                  />
                </NextLink>

                {/* Facebook */}

                <NextLink
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/[0.04]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/50
                    hover:bg-blue-600
                  "
                >
                  <img
                    src="/ic_baseline-facebook.svg"
                    alt="Facebook"
                    className="h-[18px] w-[18px]"
                  />
                </NextLink>

                {/* LinkedIn */}

                <NextLink
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/[0.04]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/50
                    hover:bg-blue-600
                  "
                >
                  <img
                    src="/Intagram.svg"
                    alt="LinkedIn"
                    className="h-[18px] w-[18px]"
                  />
                </NextLink>
              </div>
            </div>
          </div>

          {/* ==================================================
              NAVIGATION — REACT SCROLL
          ================================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              

              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                Navigation
              </h3>
            </div>

            <nav className="space-y-2">
              {navbarData.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.name.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  spy={true}
                  className="
                    group flex w-fit cursor-pointer
                    items-center gap-2
                    text-base text-slate-200
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-white
                    md:text-base
                  "
                >
                  <span>{link.name}</span>

                  <span
                    className="
                      -translate-x-1 text-blue-400
                      opacity-0 transition-all duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>
                </ScrollLink>
              ))}
            </nav>
          </div>

          {/* ==================================================
              LEGAL & POLICIES
          ================================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              

              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                Legal & Policies
              </h3>
            </div>

            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <NextLink
                  key={link.name}
                  href={link.href}
                  className="
                    group flex w-fit items-center gap-2
                    text-base text-slate-200
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-white
                    md:text-base
                  "
                >
                  <span>{link.name}</span>

                  <span
                    className="
                      -translate-x-1 text-blue-400
                      opacity-0 transition-all duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>
                </NextLink>
              ))}

            
            </nav>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-14 border-t border-white/[0.08] pt-7 md:mt-16">
          <div className="flex flex-col gap-4 text-xs text-slate-200 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Big Growth Digital Private
              Limited. All rights reserved.
            </p>

            <p>
              Powered by{" "}
              <a
                href="https://biggrowthdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-300 transition-colors hover:text-blue-400"
              >
                Big Growth Digital
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ================= VECTOR ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-20">
        <img
          src="/Vectorfooter.svg"
          alt=""
          className="w-full"
        />
      </div>
    </footer>
  );
};

export default Footer;