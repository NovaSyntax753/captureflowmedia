"use client";
import { useState } from "react";

const tabs = [
  { id: "cgi", label: "3D, CGI & VFX" },
  { id: "video", label: "Video Production" },
  { id: "digital", label: "Digital Art" },
  { id: "photoshoot", label: "Commercial Photoshoot" },
  { id: "ugc", label: "Community & UGC" },
];

export default function ServicesNavigator() {
  const [active, setActive] = useState("cgi");

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full h-full min-h-screen text-center py-12">
      <div className="min-h-[60vh] bg-white text-black justify-center flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Content Marketing</h2>
      <p className="text-xl italic mb-8">Services</p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-3 rounded-full w-fit mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`px-6 py-2 rounded-full transition-all ${
              active === tab.id
                ? "bg-white shadow-md font-semibold"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      </div>
      <CgiContentSection />
      <Founders />

    </section>
  );
}


import Image from "next/image";
import Founders from "@/components/Founders";

const accordionItems = [
  {
    title: "Unreal Visual",
    content: "We create jaw-dropping CGI visuals that push the limits of imagination and innovation."
  },
  {
    title: "Imagination Without Limit",
    content: "Transforming ideas into stunning 3D content that goes beyond conventional creativity."
  },
  {
    title: "Mind Blowing Conceptualizing",
    content: "We conceptualize unique designs and animations to bring your brand to life in unforgettable ways."
  }
];

 function CgiContentSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-6 bg-black lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold">
          3D & CGI Content{" "}
          <span className="block italic font-medium text-gray-700">
            to make you stand out from the rest!
          </span>
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed">
          This is the portal where imagination meets reality. Our 3D and CGI work here
          at Neon Pigeon turns visions into visually stunning experiences, bringing ideas
          to life in ways you never thought possible. Let’s create something jaw-dropping together!
        </p>

        {/* Accordion */}
        <div className="mt-8 space-y-4">
          {accordionItems.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/cgi-image.jpg" // replace with your image path
          alt="CGI Content Work"
          width={500}
          height={400}
          className="rounded-[100px]  rounded-br-none shadow-lg bg-white   object-cover"
        />
      </div>
    </section>
  );
}
