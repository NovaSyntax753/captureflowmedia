"use client";

import React from "react";
import Image from "next/image";

const CreativitySection = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Creativity is essential <br />
          <span className="text-white">for brands,</span>{" "}
          <span className="italic text-green-400">
            that want to break through <br />
            the noise and build loyalty.
          </span>
        </h2>

        <button className="mt-8 px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-black transition">
          Work with us
        </button>
      </div>

      {/* Right Graph */}
      <div className="w-full md:w-1/2">
        <div className="bg-[#1a1a1a] rounded-3xl p-6 shadow-lg">
          <Image
            src="/graph.png" // replace with your chart image
            alt="Creativity Graph"
            width={600}
            height={400}
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
