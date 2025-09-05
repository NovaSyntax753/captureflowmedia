"use client";
import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPinterest,
  FaYoutube,
  FaSnapchat,
  FaThreads,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const icons = [
  <FaLinkedin key="linkedin" className="text-[#0A66C2]" />,
  <FaFacebook key="facebook" className="text-[#1877F2]" />,
  <FaWhatsapp key="whatsapp" className="text-[#25D366]" />,
  <FaPinterest key="pinterest" className="text-[#E60023]" />,
  <FaYoutube key="youtube" className="text-[#FF0000]" />,
  <FaSnapchat key="snapchat" className="text-[#FFFC00]" />,
  <FaThreads key="threads" className="text-white bg-black rounded-full" />,
  <FaInstagram key="instagram" className="text-pink-500" />,
  <FaXTwitter key="twitter" className="text-white" />,
    <FaLinkedin key="linkedin" className="text-[#0A66C2]" />,
  <FaFacebook key="facebook" className="text-[#1877F2]" />,
  <FaWhatsapp key="whatsapp" className="text-[#25D366]" />,
  <FaPinterest key="pinterest" className="text-[#E60023]" />,
  <FaYoutube key="youtube" className="text-[#FF0000]" />,
  <FaSnapchat key="snapchat" className="text-[#FFFC00]" />,
  <FaThreads key="threads" className="text-white bg-black rounded-full" />,
  <FaInstagram key="instagram" className="text-pink-500" />,
  <FaXTwitter key="twitter" className="text-white" />,
    <FaLinkedin key="linkedin" className="text-[#0A66C2]" />,
  <FaFacebook key="facebook" className="text-[#1877F2]" />,
  <FaWhatsapp key="whatsapp" className="text-[#25D366]" />,
  <FaPinterest key="pinterest" className="text-[#E60023]" />,
  <FaYoutube key="youtube" className="text-[#FF0000]" />,
  <FaSnapchat key="snapchat" className="text-[#FFFC00]" />,
  <FaThreads key="threads" className="text-white bg-black rounded-full" />,
  <FaInstagram key="instagram" className="text-pink-500" />,
  <FaXTwitter key="twitter" className="text-white" />,
];

export default function SocialMarquee() {
  return (
    <section className="w-full bg-black text-white border-t border-b border-gray-700 py-4 flex flex-col sm:flex-row items-center overflow-hidden">
      {/* Left Text (top on mobile, left on desktop) */}
      <div className="flex-shrink-0 px-6 sm:h-full border-b sm:border-b-0 sm:border-r border-gray-600 text-lg font-semibold text-center sm:text-left w-full sm:w-auto pb-2 sm:pb-0">
        We Got You <br /> Covered!
      </div>

      {/* Divider only on desktop */}
      <div className="hidden sm:block w-1 h-full bg-white mx-4"></div>

      {/* Marquee */}
      <div className="relative flex-1 overflow-hidden w-full">
        <div className="flex w-max animate-marquee gap-6 text-3xl py-2">
          {icons.map((icon, i) => (
            <div key={`set1-${i}`} className="shrink-0">
              {icon}
            </div>
          ))}
          {icons.map((icon, i) => (
            <div key={`set2-${i}`} className="shrink-0">
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
