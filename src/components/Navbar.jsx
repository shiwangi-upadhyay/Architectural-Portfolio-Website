"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Our Services" },
    { href: "/our-projects", label: "Projects" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`
          sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 transition-all duration-200
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
              className="cursor-pointer w-32 md:w-44"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-3">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-lg font-semibold transition-all duration-200
                  ${
                    isActive
                      ? "border border-orange-200 text-orange-400 bg-[#fae3d3] backdrop-blur-md"
                      : "border border-white/20 text-black bg-white/20 backdrop-blur-md  hover:text-orange-400"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col p-4 gap-2 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-center
                    ${
                      isActive
                        ? " text-orange-400 "
                        : " text-gray-800 bg-white  hover:text-orange-400 hover:bg-orange-50"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
