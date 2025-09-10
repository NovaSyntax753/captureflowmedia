"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CreativitySection = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Creativity is essential <br />
          <span className="text-white">for brands,</span>{" "}
          <span className="italic text-green-400">
            that want to break through <br />
            the noise and build loyalty.
          </span>
        </h2>
        <Link href="/contact">
          <motion.button
            className="mt-10 px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work with us
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Graph */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="rounded-3xl overflow-hidden border-2 rounded-bl-none border-white/20 shadow-lg">
          <video
            src="/graph.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CreativitySection;
