"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo1.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement && e.target.hash) {
        const el = document.querySelector(e.target.hash);
        if (el) {
          e.preventDefault();
          setIsMenuOpen(false);
          window.scrollTo({
            top: (el as HTMLElement).offsetTop - 80, // offset for sticky nav
            behavior: "smooth",
          });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-24 py-2 border-b-2 flex flex-col bg-white text-black font-sans items-center justify-center text-center ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-12 items-center relative">
        {/* Logo + Menu Button */}
        <div className="min-w-1/2 flex items-center lg:w-auto justify-between lg:justify-start gap-10 w-full">
          <Image
            src={logo.src}
            height={100}
            width={100}
            alt="KkaptureFlow Media Logo"
            className="object-contain sm:h-20 h-16"
          />
          <button
            onClick={toggleMenu}
            className="lg:hidden text-black focus:outline-none z-110"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white bg-opacity-95 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-black hover:text-gray-600 text-2xl block py-2 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="w-1/2 hidden lg:flex flex-row items-center text-lg justify-end pr-10 gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-4xl transition duration-300 hover:font-semibold hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
