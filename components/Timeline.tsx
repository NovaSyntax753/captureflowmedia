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
    icon: <FaRocket className="w-5 h-5" />,
    title: "Strategy Call & Personalized Video Plan",
    desc: "Build trust, position you as the authority, and attract high-ticket clients.",
  },
  {
    icon: <FaFileAlt className="w-5 h-5" />,
    title: "Script Framework That Converts",
    desc: "Hooks, insights, and CTAs that connect emotionally and bring in leads.",
  },
  {
    icon: <FaMagic className="w-5 h-5" />,
    title: "You Record → We Do the Magic",
    desc: "Guidance + editing to deliver scroll-stopping branded videos.",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    title: "LinkedIn Strategy & Automatic Clients",
    desc: "Profile optimization, smart scripts, and consistent high-ticket leads.",
  },
  {
    icon: <FaStar className="w-5 h-5" />,
    title: "Dream Outcome",
    desc: "Your calendar fills with premium leads. Clients come without burnout.",
  },
];

export default function Timeline() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-16">
          How We Work
        </h2>

        <div className="relative flex flex-col sm:flex-row items-center sm:justify-between sm:space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white shadow-sm z-10">
                {step.icon}
              </div>

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden sm:block absolute top-6 left-1/2 w-full border-t border-gray-300 -z-0"></div>
              )}

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-base font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
