"use client";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaFileAlt,
  FaMagic,
  FaLinkedin,
  FaStar,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaRocket className="w-5 h-5 text-[#53c926]" />,
    title: "Strategy Call & Personalized Video Plan",
    desc: "Build trust, position you as the authority, and attract high-ticket clients.",
  },
  {
    icon: <FaFileAlt className="w-5 h-5 text-[#53c926]" />,
    title: "Script Framework That Converts",
    desc: "Hooks, insights, and CTAs that connect emotionally and bring in leads.",
  },
  {
    icon: <FaMagic className="w-5 h-5 text-[#53c926]" />,
    title: "You Record → We Do the Magic",
    desc: "Guidance + editing to deliver scroll-stopping branded videos.",
  },
  {
    icon: <FaLinkedin className="w-5 h-5 text-[#53c926]" />,
    title: "LinkedIn Strategy & Automatic Clients",
    desc: "Profile optimization, smart scripts, and consistent high-ticket leads.",
  },
  {
    icon: <FaStar className="w-5 h-5 text-[#53c926]" />,
    title: "Dream Outcome",
    desc: "Your calendar fills with premium leads. Clients come without burnout.",
  },
];

export default function Timeline() {
  return (
    <section className="w-full py-20  bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold italic text-gray-900 mb-16">
          How We Work
        </h2>

        {/* Wrapper */}
        <div className="relative flex pt-10 flex-col sm:flex-row sm:justify-between sm:space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center sm:flex-1 mb-12 sm:mb-0"
            >
              {/* Connector Line */}
              

              {/* Horizontal (desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden sm:block absolute top-6 left-1/2 w-full border-t border-gray-300"></div>
                )}

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white shadow-md relative z-10">
                {step.icon}
              </div>

              {/* Content */}
              <div className="mt-6 max-w-xs">
                <h3 className="text-base font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
