"use client";

import React from "react";
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <Image src="/logo2.png" alt="Logo" width={150} height={50} className="bg-white" />

          <p className="mt-4 text-gray-300">
            Get the latest Content Marketing news in your inbox
          </p>

          {/* Email Subscription */}
          <form action="https://api.web3forms.com/submit" method="POST"  className="flex items-center mt-4 rounded-full border border-gray-500 overflow-hidden  max-w-sm">
          <input type="hidden" name="access_key" value={process.env.WEB3_ACCESS_KEY} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-transparent text-white focus:outline-none"
            />
            <button type="submit" className="px-4 py-2 bg-transparent text-xl">👍</button>
          </form>

          {/* Buttons */}
          <div className="flex gap-4 text-sm sm:text-md mt-6">
            <Link href={"/contact"} className="px-6 py-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
              Brief Us
            </Link>
            <Link href={"/about"} className="px-6 py-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
              Our Credentials
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
    <div>
      <h3 className="text-xl mb-4">Contact Us</h3>
      <ul className="space-y-3 text-gray-300">
        {/* Instagram */}
        <li className="flex items-center gap-2">
          <Instagram size={18} />
          <Link
            href="https://instagram.com/kkapture_flow_media"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @kkapture_flow_media
          </Link>
        </li>

        {/* Email */}
        <li className="flex items-center gap-2">
          <Mail size={18} />
          <Link href="mailto:kkaptureflowmedia@gmail.com" className="hover:underline">
            kkaptureflowmedia@gmail.com
          </Link>
        </li>

        {/* Phone */}
        <li className="flex items-center gap-2">
          <Phone size={18} />
          <Link href="tel:+918390915155" className="hover:underline">
            +91 83909 15155
          </Link>
        </li>

        {/* YouTube */}
        <li className="flex items-center gap-2">
          <Youtube size={18} />
          <Link
            href="https://youtube.com/@growwithpatels"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @growwithpatels
          </Link>
        </li>

        {/* Address */}
        <li className="flex items-center gap-2">
          <MapPin size={18} />
          <Link
            href="https://maps.google.com/?q=Second Floor, Inox Rd, above Bramha Hotel, near Shastri Nagar, Chapru Nagar, Sq, Shashtri Nagar, Nagpur, Maharashtra 440008"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline max-w-xs"
          >
            Second Floor, Inox Rd, above Bramha Hotel, near Shastri Nagar, Chapru Nagar, Sq, Shashtri Nagar, Nagpur, Maharashtra 440008
          </Link>
        </li>
      </ul>
    </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© KKaptureFLow Media &nbsp; | &nbsp; Privacy Policy</p>
        <p>
          Crafted with <span className="text-pink-500">❤</span> by KKaptureFlow
          Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
