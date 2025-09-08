"use client";

import React from "react";

const Spotlight = () => {
  const videos = [
    {
      src: "/video16.1.mp4",
      alt: "Video 1",
    },
    {
      src: "/video15.mp4",
      alt: "Video 2",
    },
    {
      src: "/video14.1.mp4",
      alt: "Video 3",
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-16 text-center">
      {/* Divider with text */}
        <h1 className=" bg-white text-black px-4  py-5 text-5xl font-extrabold">
          Spotlight
        </h1>
        <div className="w-full border-t border-gray-400"></div>
      {/* <div className="relative flex items-center justify-center mb-12">
      </div> */}

      {/* Videos Grid */}
      <div className="flex flex-wrap mt-10 justify-center gap-8 mb-12">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="w-[280px] h-[500px] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"            
            />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-gray-800 transition">
        See More
      </button>
    </section>
  );
};

export default Spotlight;
