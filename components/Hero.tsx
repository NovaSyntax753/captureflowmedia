"use client"
import React from "react";
import VideoCardLeft from "./VideoCardLeft";

const Hero = () => {
  return (
    <section className="w-full mt-20 sm:mt-10 min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 gap-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Video */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <VideoCardLeft src="/video15.mp4" />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left text-black">
          <h1 className="text-4xl sm:text-2xl lg:text-5xl font-extrabold leading-tight">
            Turn Videos Into Clients with Our 
          </h1>
          <p className="italic font-sans text-2xl sm:text-3xl lg:text-5xl mt-2">
            Video Lead Machine 🚀
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
            At Kkapture Flow Media, we don’t just create videos — we turn them into lead-generating machines for your business.
          </p>
          <button className="mt-6 w-[200px] px-6 py-3 rounded-full border border-black font-semibold hover:bg-black hover:text-white transition">
            Get More Leads
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
