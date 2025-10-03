"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-white pt-8 mt-16 mx-auto">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-16">
        {/* About Company */}
        <div>
          <h4 className="mb-6 tracking-wide">About Company</h4>
          <div className="font-bold text-2xl mb-6 text-orange-400">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={180}
                height={60}
                className="cursor-pointer rounded-md"
                priority
              />
            </Link>
          </div>
          <p className="text-sm">
            Tejjy Inc. – 8(a) Certified Women Owned Small Business
            (WOSB/MBE/DBE/WBE). Facilitating Architecture Engineering and
            Construction Industry with BIM VDC & 3D Laser Scanning Services in
            USA
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-6">OUR SERVICES</h4>
          <ul className="text-xs space-y-1">
            {[
              "BIM Services",
              "MEP Services",
              "Structural BIM Services",
              "Architectural BIM Services",
              "VDC Services",
              "Architectural Engineering Services",
              "Facilities Operations & Management",
              "Permit Expeditor Services",
              "CAD Drafting Services",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <FaAngleRight className="text-orange-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-6 tracking-wide">QUICK LINKS</h4>
          <ul className="text-xs space-y-1">
            {["Locations", "Projects", "Blogs", "Capability Statements", "Career"].map(
              (item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:underline cursor-pointer"
                >
                  <FaAngleRight className="text-orange-400" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-6 tracking-wide">CONTACT INFO</h4>
          <ul className="text-xs space-y-1">
            {[
              "1 Research Ct, Ste 335, Rockville MD 20850",
              "202-465-4830 (HQ)",
              "66 W Flagler Street, Suite 900 Miami, FL 33130",
              "(786) 789-2103 (FL)",
              "info@tejjy.com",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaAngleRight className="text-orange-400" />
                {item}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-2xl hover:scale-110 transition-transform"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#011d3c] w-full mx-auto px-4 mt-8 border-t border-blue-800 py-4 flex flex-col md:flex-row justify-around items-center text-sm">
        <span>
          Copyright © 2025 Tejjy Incorporation, All Rights Reserved. Powered by
          Tejjy
        </span>
        <span className="mt-2 md:mt-0 flex gap-4">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of use
          </a>
        </span>
      </div>
    </footer>
  );
}
