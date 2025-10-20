"use client";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTumblr,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";

export default function TopInfoBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={` w-full text-white text-xs py-2 flex items-center justify-between px-8 transition-all duration-200
      ${scrolled ? "backdrop-blur-md shadow-md bg-[#9d9d9d]" : "bg-[#232323]"}`

    }>
      {/* Left: Contact Info */}
      <div>
        Phone:{" "}
        <a href="tel:8603177105" className="hover:underline text-gray-200">
          +91 0000000000
        </a>
        , Email:{" "}
        <a
          href="mailto:info@united-bim.com"
          className="hover:underline text-gray-200"
        >
          info@shri.com
        </a>
      </div>
      {/* Right: Social Icons */}
      <div className="flex gap-3 items-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tumblr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaTumblr />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaPinterestP />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
