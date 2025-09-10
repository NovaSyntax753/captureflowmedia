"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const ContactForm = ({ text1, text2 }: { text1: string; text2: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Container for staggered animation
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Each form item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen text-black flex items-center justify-center bg-white px-6 py-16"
    >
      <div className="w-full max-w-3xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
          className="text-center text-6xl md:text-4xl font-light mb-10"
        >
          <span className="font-extrabold text-5xl">{text1}</span>{" "}
          <span className="italic text-5xl">{text2}</span>
        </motion.h2>

        {/* Form */}
        <motion.form
          action="https://api.web3forms.com/submit"
          method="POST"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-5"
        >
          <input
            type="hidden"
            name="access_key"
            value={process.env.WEB3_ACCESS_KEY}
          />

          <motion.input
            variants={itemVariants}
            type="text"
            name="first_name"
            placeholder="First Name*"
            className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <motion.input
            variants={itemVariants}
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
          />

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.input
              variants={itemVariants}
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <motion.input
              variants={itemVariants}
              type="text"
              name="contact_no"
              placeholder="Contact No*"
              className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </motion.div>

          <motion.input
            variants={itemVariants}
            type="text"
            placeholder="Company*"
            name="company"
            className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 text-2xl rounded-full border border-black font-extrabold bg-white hover:bg-black hover:text-white transition"
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
