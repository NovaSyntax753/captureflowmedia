"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../public/logo4.png";
import logo1 from "../public/logo9.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Navbar hide on scroll down, show on scroll up — listener registered once only
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic background based on route
  const navBg = pathname === "/work" ? "bg-black text-white" : "bg-white text-black";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 h-24 py-2 border-b-2 flex flex-col font-sans items-center justify-center text-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${navBg}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-12 items-center relative">
        {/* Logo + Menu Button */}
        <div className="min-w-1/2 flex items-center lg:w-auto justify-between lg:justify-start gap-10 w-full">
          <Image
            src={pathname === "/work" ? logo : logo1}
            height={100}
            width={100}
            alt="KkaptureFlow Media Logo"
            className="object-contain sm:h-20 h-16"
          />
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none z-110"
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
          className={`fixed inset-0 ${navBg} bg-opacity-95 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:opacity-75 text-2xl block py-2 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/admin/login"
                className="hover:opacity-100 text-base block py-2 px-4 opacity-80"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Admin panel"
              >
                🔒
              </a>
            </li>
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
          <li>
            <a
              href="/admin/login"
              aria-label="Admin panel"
              className="ml-2 px-3 py-2 rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200 text-sm"
              title="Admin"
            >
              🔒
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
