"use client";

import React from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <Image src="/logo1.png" alt="Logo" width={150} height={50} className="bg-white" />

          <p className="mt-4 text-gray-300">
            Get the latest Content Marketing news in your inbox
          </p>

          {/* Email Subscription */}
          <div className="flex items-center mt-4 rounded-full border border-gray-500 overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-transparent text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-transparent text-xl">👍</button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
              Brief Us
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
              Our Credentials
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Instagram size={18} /> @neonpigeon.in
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> business@neonpigeon.in
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> 9873370885, 8130606202
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> C-944, C Block, Sushant Lok Phase 1, Near Vyapar
              Kendra, Gurugram, Haryana 122002
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© KKaptureFLow Media &nbsp; | &nbsp; Privacy Policy</p>
        <p>
          Crafted with <span className="text-pink-500">❤</span> by Quickfusion
          Innovations
        </p>
      </div>
    </footer>
  );
};

export default Footer;
