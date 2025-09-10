"use client";

import { motion } from "framer-motion";
import DiagonalImageColumns from "@/components/DiagonalImageColumns";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
// import VideoCarousel from "@/components/VideoCarousel"

const page = () => {
  return (
    <div className="items-center mt-20 bg-black text-white justify-center flex flex-col">

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <StatsSection />
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <PortfolioSection />
      </motion.div>

      {/* Diagonal Image Columns */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <DiagonalImageColumns />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-4 py-10"
      >
        <button className="bg-white font-bold text-xl text-black px-6 py-3 rounded-full mt-8 hover:bg-gray-800 transition-colors">
          Work with us
        </button>
      </motion.div>
      
    </div>
  );
};

export default page;
