"use client";

import React from "react";
import Link from "next/link";
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
        <Link href="/contact">
        <button className="mt-10 px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-black transition">
          Work with us
        </button>
        </Link>
      </div>

      {/* Right Graph */}
      <div className="w-full md:w-1/2">
        <div className=" rounded-3xl overflow-hidden border-2 rounded-bl-none border-white/20 shadow-lg">
          <video  
            src="/graph.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
