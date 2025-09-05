"use client";

import React from "react";

const ServiceBanner = () => {
  const items = [
    "Video Lead Machine ",
    "Video Editing",
    "Graphic Design",
    "Motion Graphics"
  ];

  return (
    <div className="hidden sm:block border-t-2 border-b-2 border-black bg-white  text-black py-6 px-5 h-20">
      <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-12">
        {items.map((item, idx) => (
          <span key={idx} className="font-semibold text-lg whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceBanner;
