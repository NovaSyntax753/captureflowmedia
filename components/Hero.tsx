"use client"
import React from "react";
import { motion } from "framer-motion";
import VideoCardLeft from "./VideoCardLeft";

const Hero = () => {
  return (
    <section className="w-full mt-20 sm:mt-10 min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 gap-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Video */}
        <motion.div
          className="flex justify-center items-center w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <VideoCardLeft src="/video15.mp4" />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left text-black"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-2xl lg:text-5xl font-extrabold leading-tight">
            Turn Videos Into Clients with Our 
          </h1>
          <motion.p
            className="italic font-sans text-2xl sm:text-3xl lg:text-5xl mt-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Video Lead Machine 🚀
          </motion.p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
            At Kkapture Flow Media, we don’t just create videos — we turn them into lead-generating machines for your business.
          </p>
          <motion.button
            className="mt-6 w-[200px] px-6 py-3 rounded-full border border-black font-semibold hover:bg-black hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get More Leads
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
