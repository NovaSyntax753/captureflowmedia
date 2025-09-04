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
];

export default function SocialMarquee() {
  return (
    <section className="w-full bg-black text-white border-t border-b border-gray-700 py-4 flex items-center overflow-hidden">
      {/* Left Text */}
      <div className="flex-shrink-0 px-6 border-r border-gray-600 text-lg font-semibold text-center">
        We Got You <br /> Covered!
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative flex-1">
        <div className="flex gap-6 animate-marquee text-3xl">
          {Array(3)
            .fill(icons)
            .flat()
            .map((icon, i) => (
              <div key={i} className="shrink-0">
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
          width: max-content;
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
