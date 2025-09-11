"use client";
import videoediting from "../assets/videoediting.jpg";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FaCut, FaFilm, FaRegStar, FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const editingFeatures = [
  {
    icon: <FaCut className="text-xl text-red-500" />,
    title: "Reels, TikToks, Shorts",
    description: "Short-form edits designed to stop the scroll and boost engagement.",
  },
  {
    icon: <FaFilm className="text-xl text-blue-400" />,
    title: "Corporate & Promo Videos",
    description: "Professional edits for business, branding, and promotional content.",
  },
  {
    icon: <FaRegStar className="text-xl text-yellow-400" />,
    title: "Ad Creatives",
    description: "High-impact edits crafted to convert viewers into customers.",
  },
  {
    icon: <FaRegArrowAltCircleRight className="text-xl text-green-500" />,
    title: "Storytelling Edits",
    description: "Narrative-driven editing that turns raw clips into engaging stories.",
  },
];

const editingHighlights = [
  { icon: "✂️", text: "Clean cuts. Smooth transitions. Engaging stories." },
  { icon: "🎬", text: "Reels that stop the scroll." },
  { icon: "🚀", text: "Every frame built to convert." },
];

export default function VideoEditingSection() {
  return (
    <>
      <section
        id="video-editing"
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
            src={videoediting}
            alt="Video Editing Work"
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
            Video Editing{" "}
            <span className="block italic text-3xl font-normal text-slate-900">
              From Raw Clips to High-Impact Content
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
            className="mt-6 text-gray-700 leading-relaxed text-left"
          >
            Your videos shouldn’t just look good — they should make people stop scrolling. Our editing
            turns raw footage into engaging stories that grab attention and drive action.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
            className="mt-8 text-xl font-semibold text-left"
          >
            What we edit:
          </motion.h3>

          {/* Accordion Features */}
          <Accordion type="single" collapsible className="mt-4 w-full">
            {editingFeatures.map((feature, index) => (
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

      {/* Highlights Section */}
      <section className="w-full text-white bg-black py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {editingHighlights.map((item, index) => (
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
