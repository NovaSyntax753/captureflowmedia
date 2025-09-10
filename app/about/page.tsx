"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutHeader from "@/components/AboutHeader";
import Founders from "@/components/Founders";
import Reviews from "@/components/Reviews";
import Timeline from "@/components/Timeline";

const aboutTabs = [
  { id: "Who we are", label: "Who We Are" },
  { id: "founders", label: "Our Founders" },
  { id: "How we work", label: "How We Work" },
  { id: "testimonials", label: "Testimonials" },
];

const leadMachineHighlights = [
  { icon: "🚀", text: "Videos that stop the scroll" },
  { icon: "🎯", text: "Content aligned with growth goals" },
  { icon: "💰", text: "Views that turn into real revenue" },
];

const leadMachineHighlights2 = [
  { icon: "🎥", title: "Video that drives leads, not just views." },
  { icon: "📈", title: "Campaigns built for ROI." },
  { icon: "📊", title: "Strategies that scale with you." },
];

export default function AboutSection() {
  const [active, setActive] = useState("Who we are");

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Motion variants for scroll animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full mt-20 bg-white overflow-hidden min-h-screen flex flex-col justify-center items-center text-center py-12 sm:py-16 lg:py-20 text-black relative">
      {/* Header */}
      <div className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center gap-4 sm:gap-6">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic mb-6 sm:mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Are Growth Partners, Not Just Another Media Agency.
        </motion.p>

        {/* Tabs */}
        <motion.div
          className="bg-gray-100 flex flex-wrap justify-center sm:justify-evenly gap-3 sm:gap-4 p-2 sm:p-3 rounded-full w-full max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {aboutTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`px-4 sm:px-6 py-2 cursor-pointer rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 ease-in-out transform ${
                active === tab.id
                  ? "bg-white text-black shadow-md font-semibold scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="hidden sm:block mt-8 mb-6 sm:mb-10 w-[90%] border-t border-white/40" />

      {/* Sections */}
      <div className="w-full space-y-12 sm:space-y-16 lg:space-y-20 mx-auto px-4">
        {/* About Header */}
        <AboutHeader />

        {/* Lead Machine Highlights */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {leadMachineHighlights.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.text}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Founders Section */}
        <Founders />

        {/* Approach with Image */}
        <div id="How we work" className="flex flex-col items-center gap-8 scroll-mt-20">
          <Timeline />
        </div>

        {/* Lead Machine Highlights 2 */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {leadMachineHighlights2.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews */}
        <Reviews />
      </div>
    </section>
  );
}
