"use client"
import React from "react";
import VideoCardLeft from "./VideoCardLeft";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 gap-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Video */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <VideoCardLeft src="/video15.mp4" />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left text-black">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Content Agency
          </h1>
          <p className="italic font-sans text-2xl sm:text-3xl lg:text-4xl mt-2">
            with a passion.
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
            Turning innovative ideas into engagement.
          </p>
          <button className="mt-6 w-[200px] px-6 py-3 rounded-full border border-black font-semibold hover:bg-black hover:text-white transition">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
