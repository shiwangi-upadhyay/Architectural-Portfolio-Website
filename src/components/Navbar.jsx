"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },

    { href: "/solutions", label: "Our Services" },
    { href: "/our-projects", label: "Projects" },
    // { href: "/ourServices", label: "Our Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`
        sticky top-0 z-50 flex items-center justify-around px-8 py-1 transition-all duration-200
        ${scrolled ? "backdrop-blur-md shadow-md" : "bg-white bg-opacity-100"}
      `}
    >
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/assets/logo1.png"
            alt="Logo"
            width={180}
            height={60}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>
      {/* MENU */}
      <div className="flex gap-3">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-4 py-2 rounded-lg font-semibold  
                ${
                  isActive
                    ? // Active: more opaque, border visible, background blurred
                      "border-orange-400 text-orange-400 bg-[#ffe1cc] backdrop-blur-md"
                    : // Inactive: subtle border, transparent, background blurred, on hover more solid
                      "border-white/20 text-black bg-white/20 backdrop-blur-md hover:border-orange-400 hover:text-orange-400"
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
