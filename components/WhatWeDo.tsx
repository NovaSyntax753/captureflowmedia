"use client";

import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      emoji: "🍬",
      title: "Serve eye candy, always",
      desc: "With 6+ years in the field of content marketing, we create thumb-stopping content for brands that's straight-up fire to make your brand stay front and center.",
    },
    {
      emoji: "📈",
      title: "Build real & organic hype",
      desc: "Our goal? Genuine engagement that actually means something. We're here to turn your TG into loyal fans, creating real conversations around your brand.",
    },
    {
      emoji: "🔥",
      title: "Cook up dope concepts",
      desc: "The sky is truly the limit for us! From executing wild ideas to creating trendsetting campaigns, we’re all about bringing the big vibes and engagement.",
    },
    {
      emoji: "📢",
      title: "Community Building",
      desc: "Our approach goes beyond numbers. We cultivate fanbases creating a space where followers become loyal advocates who share, support, & celebrate with you.",
    },
  ];

  return (
    <section className="w-full bg-black text-white px-6 md:px-12 lg:px-20 py-16 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl text-left mb-6">
        <span className="italic font-light">What </span>
        <span className="font-bold">we do</span>
      </h2>

      {/* Divider */}
      <div className="border-t border-gray-600 mb-12"></div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col w-[300px]  justify-start items-center text-center">
            <div className="text-left w-full  text-4xl mb-4">{service.emoji}</div>
            <h3 className="text-left w-full font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-start">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="px-8 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-black transition">
        Our services
      </button>
    </section>
  );
};

export default WhatWeDo;
