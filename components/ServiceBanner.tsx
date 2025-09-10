"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServiceBanner = () => {
   const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: false }); 
  const items = [
    "Video Lead Machine",
    "Video Editing",
    "Graphic Design",
    "Motion Graphics",
  ];

  // Animation variants for stagger effect
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="hidden sm:block border-t-2 border-b-2 border-black bg-white text-black py-6 px-20 h-20">
      <motion.div
        ref={ref}
        className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-12"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}

      viewport={{ once: false, amount: 0.7 }}
      >
        {items.map((text, idx) => (
          <motion.span
            key={idx}
            className="font-semibold text-lg whitespace-nowrap"
            variants={item}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceBanner;
