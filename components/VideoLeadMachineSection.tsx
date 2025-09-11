"use client";
import leadmachine from "../assets/videoleadmachine.jpg";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FaBullhorn, FaFunnelDollar, FaUserShield, FaRocket } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const leadMachineFeatures = [
  {
    icon: <FaBullhorn className="text-xl text-blue-600" />,
    title: "Video Ads for Your Niche",
    description: "Custom-crafted video ads designed to attract your ideal audience and maximize attention.",
  },
  {
    icon: <FaFunnelDollar className="text-xl text-green-500" />,
    title: "Conversion Funnels",
    description: "Proven funnel strategies that turn viewers into leads and leads into sales.",
  },
  {
    icon: <FaUserShield className="text-xl text-yellow-500" />,
    title: "Authority-Building Content",
    description: "Content that builds trust and positions your brand as the go-to expert.",
  },
  {
    icon: <FaRocket className="text-xl text-red-500" />,
    title: "Paid & Organic Lead Systems",
    description: "Integrated systems to generate leads from both paid ads and organic reach.",
  },
];

const leadMachineHighlights = [
  { icon: "🎯", text: "Videos that don’t just get views — they get leads." },
  { icon: "⚙️", text: "Your growth system in motion." },
  { icon: "➡️", text: "From attention → to action → to clients." },
];

export default function VideoLeadMachineSection() {
  return (
    <>
      <section
        id="video-lead-machine"
        className="w-full py-16 px-6 lg:px-20 flex flex-col justify-center items-center lg:flex-row gap-12"
      >
        {/* Left Content */}
        <div className="flex-1 justify-center max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl md:text-4xl text-left font-bold"
          >
            Video Lead Machine{" "}
            <span className="block italic text-3xl font-normal text-slate-900">
              Turn Attention Into Clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
            className="mt-6 text-gray-700 leading-relaxed text-left"
          >
            Our signature framework designed to convert views into leads and leads into sales. We blend
            creative content with proven lead-generation funnels so your brand doesn’t just get seen — it gets results.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
            className="mt-8 text-xl font-semibold text-left"
          >
            What’s inside:
          </motion.h3>

          {/* Accordion Features */}
          <Accordion type="single" collapsible className="mt-4 w-full">
            {leadMachineFeatures.map((feature, index) => (
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: false }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-green-700 transition"
            >
              Build My Lead Machine
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src={leadmachine}
            alt="Video Lead Machine"
            width={500}
            height={800}
            className="rounded-[60px] h-[500px] rounded-br-none object-cover shadow-md"
          />
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="w-full text-white bg-black py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {leadMachineHighlights.map((item, index) => (
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
