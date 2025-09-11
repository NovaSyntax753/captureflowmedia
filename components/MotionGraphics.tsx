"use client";
import motiongraphics from "../assets/motion graphics.jpg";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FaRegPlayCircle, FaRegStar, FaRegObjectUngroup } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const motionFeatures = [
  {
    icon: <FaRegPlayCircle className="text-xl text-purple-500" />,
    title: "Logo Animations",
    description: "Logos that come alive and leave a lasting impression.",
  },
  {
    icon: <FaRegObjectUngroup className="text-xl text-blue-400" />,
    title: "Explainer Videos",
    description: "Motion that tells stories and simplifies complex ideas.",
  },
  {
    icon: <FaRegStar className="text-xl text-yellow-400" />,
    title: "Motion Effects for Ads",
    description: "Animations that elevate your brand and boost engagement.",
  },
  {
    icon: <FaRegPlayCircle className="text-xl text-pink-500" />,
    title: "Titles & Transitions",
    description: "Dynamic titles and seamless transitions for polished videos.",
  },
];

const motionHighlights = [
  { icon: "🎬", text: "Logos that come alive." },
  { icon: "🎞", text: "Motion that tells stories." },
  { icon: "✨", text: "Animations that elevate your brand." },
];

export default function MotionGraphicsSection() {
  return (
    <>
      <section
        id="motion-graphics"
        className="w-full py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-start"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src={motiongraphics}
            alt="Motion Graphics Work"
            width={500}
            height={800}
            className="rounded-[60px] h-[500px] rounded-br-none object-cover shadow-md"
          />
        </motion.div>

        {/* Left Content */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl md:text-4xl text-left font-bold"
          >
            Motion Graphics{" "}
            <span className="block italic text-3xl font-normal text-slate-900">
              Bring Your Brand to Life
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
            className="mt-6 text-gray-700 leading-relaxed text-left"
          >
            Animation creates memorability. Whether it’s logo reveals, explainers, or ad effects, our
            motion graphics make your brand more dynamic, modern, and unforgettable.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
            className="mt-8 text-xl font-semibold text-left"
          >
            What we animate:
          </motion.h3>

          {/* Accordion Features */}
          <Accordion type="single" collapsible className="mt-4 w-full">
            {motionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: false }}
              >
                <AccordionItem value={`item-${index}`} className="border-b w-full">
                  <AccordionTrigger>
                    <h2 className="flex items-center gap-2">
                      {feature.icon} {feature.title}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-gray-600">
                    {feature.description}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full text-white bg-black py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {motionHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <p className="text-lg font-medium leading-relaxed max-w-xs">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
