"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const Spotlight = () => {
  const videos = [
    { src: "/video16.1.mp4", alt: "Video 1" },
    { src: "/video15.mp4", alt: "Video 2" },
    { src: "/video14.1.mp4", alt: "Video 3" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Parent stagger
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  // Card animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-white px-6 md:px-12 lg:px-20 py-16 text-center"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black px-4 py-5 text-5xl font-extrabold"
      >
        Spotlight
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full border-t border-gray-400 origin-left"
      />

      {/* Videos Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap mt-10 justify-center gap-8 mb-12"
      >
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="w-[280px] h-[500px] rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-gray-800 transition"
      >
        See More
      </motion.button>
    </section>
  );
};

export default Spotlight;
