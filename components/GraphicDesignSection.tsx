"use client";
import { useState } from "react";
import graphicsdesign from "../assets/graphics-design2.png"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FaRegImage, FaPaintBrush, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
const designFeatures = [
  {
    icon: <FaRegImage className="text-xl text-pink-500" />,
    title: "Social Media Graphics",
    description: "Scroll-stopping designs made to grab attention instantly.",
  },
  {
    icon: <FaPaintBrush className="text-xl text-blue-500" />,
    title: "Ad Creatives",
    description: "Persuasive visuals that don’t just look good — they convert.",
  },
  {
    icon: <FaLightbulb className="text-xl text-yellow-400" />,
    title: "Brand Identity Support",
    description: "Designs that sharpen your brand identity and consistency.",
  },
  {
    icon: <FaPaintBrush className="text-xl text-green-500" />,
    title: "Creative Campaigns",
    description: "Big-picture concepts turned into impactful design campaigns.",
  },
];

const graphicfeatures = [
   {
     icon: "🖼",
     text: "Designs that speak louder than words.",
   },
   {
     icon: "🎨",
     text: "Creativity with purpose.",
   },
   {
     icon: "💡",
     text: "Visuals that stick in the mind.",
   },
];

export default function GraphicDesignSection() {
  return (
    <>
    <section id="graphics" className="w-full py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl text-left font-bold">
          Graphic Design{" "}
          <span className="block italic text-3xl font-normal text-slate-900">
            Your Brand, But Sharper
          </span>
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed text-left">
          We design visuals that don’t just decorate — they sell. From
          scroll-stopping social posts to persuasive ad creatives, our designs
          make your brand impossible to ignore.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-left">What we design:</h3>

        {/* Accordion Features */}
        <Accordion type="single" collapsible className="mt-4 w-full">
          {designFeatures.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b w-full">
              <AccordionTrigger>
                <h2 className="flex items-center gap-2">{feature.icon} {feature.title}</h2>
              </AccordionTrigger>
              <AccordionContent className="text-left text-gray-600">
                {feature.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-end">
        <Image
          src={graphicsdesign}
          alt="Graphic Design Work"
          width={500}
          height={800}
          className="rounded-[60px] h-[500px]  rounded-br-none object-cover shadow-md"
        />
      </div>
    </section>
    <section className="w-full text-white">
      <div className="w-full text-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {graphicfeatures.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl mb-4">{item.icon}</span>
            <p className="text-lg font-medium leading-relaxed max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>

  );
}
