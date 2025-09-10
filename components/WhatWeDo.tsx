"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const WhatWeDo = () => {
  const services = [
    {
      emoji: "🎥",
      title: "Turn Videos Into Leads",
      desc: "We don’t just edit videos — we craft content that attracts attention, builds trust, and gets your audience to take action. Every video is designed to fuel your lead pipeline.",
    },
    {
      emoji: "📈",
      title: "Generate Qualified Leads",
      desc: "Our Video Lead Machine framework converts attention into real prospects. From scroll-stopping reels to high-converting ad creatives, we focus on ROI — not vanity metrics.",
    },
    {
      emoji: "✨",
      title: "Create Content That Sells",
      desc: "Good design looks nice. Great design makes money. Our graphics, motion visuals, and edits are built to not just look aesthetic, but also push your audience closer to saying “yes.”",
    },
    {
      emoji: "🤝",
      title: "Build Lasting Trust",
      desc: "Leads only convert when they trust you. Through consistent content, authority-driven videos, and brand storytelling, we turn cold audiences into loyal clients.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Parent container to stagger children
  const containerVariants = {
    hidden: { opacity: 1 }, // keep container visible but children hidden
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, // ✅ Type-safe easing
    },
  },
};

  return (
    <section
      ref={ref}
      className="w-full bg-black text-white px-6 md:px-12 lg:px-20 py-16 text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl text-left mb-6"
      >
        <span className="italic font-light">What </span>
        <span className="font-bold">we do</span>
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6 }}
        className="origin-left border-t border-gray-600 mb-12"
      />

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 place-items-center"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants} // child animations
            className="flex flex-col w-[300px] p-2 justify-start items-center text-center"
          >
            <div className="text-left w-full text-4xl mb-4">{service.emoji}</div>
            <h3 className="text-left w-full font-bold text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-start">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link
          href={"/services"}
          className="px-8 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-black transition"
        >
          Our services
        </Link>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
