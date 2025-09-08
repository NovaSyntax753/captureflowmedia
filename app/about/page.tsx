"use client";
import { useState } from "react";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Reviews from "@/components/Reviews";
import Timeline from "@/components/Timeline";

const aboutTabs = [
  { id: "Who we are", label: "Who We Are" },
  { id: "founders", label: "Our Founders" },
  { id: "How we work", label: "How We Work" },
  { id:"testimonials", label: "Testimonials" },
];

 const leadMachineHighlights = [
    {
        icon: "🚀",
        // title:"Creativity",
        text: "Videos that stop the scroll",
    },
    {
        icon: "🎯",
        // title:"Strategy",
        text: "Content aligned with growth goals",
    },
    {
        icon: "💰",
        // title:"Results",
        text: "Views that turn into real revenue",
    }
];

const leadMachineHighlights2 = [
    {
        icon: "🎥",
        title:"Video that drives leads, not just views.",
    },
    {
        icon: "📈",
        title:"Campaigns built for ROI.",
    },
    {
        icon: "📊",
        title:"Strategies that scale with you.",
    }
  ];
export default function AboutSection() {
  const [active, setActive] = useState("Who we are");

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" , inline: "nearest" });
    }
  };

  return (
    <section className="w-full mt-20 bg-white overflow-hidden min-h-screen flex flex-col justify-center items-center text-center py-12 sm:py-16 lg:py-20  text-black relative">

      {/* Header */}
      <div className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center gap-4 sm:gap-6">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          About Us
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic mb-6 sm:mb-8">
          We Are Growth Partners, Not Just Another Media Agency.
        </p>

        {/* Tabs */}
        <div className="bg-gray-100  flex flex-wrap justify-center sm:justify-evenly gap-3 sm:gap-4  p-2 sm:p-3 rounded-full w-full max-w-4xl mx-auto">
          {aboutTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`px-4 sm:px-6 py-2 cursor-pointer rounded-full text-sm sm:text-base md:text-lg transition-all ${
                active === tab.id
                  ? "bg-white text-black shadow-md font-semibold"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="hidden sm:block mt-8 mb-6 sm:mb-10 w-[90%] border-t border-white/40" />

      {/* Sections */}
      <div className="w-full space-y-12 sm:space-y-16 lg:space-y-20 mx-auto px-4">
          <About />
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {leadMachineHighlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.text}</h3>
            </div>
            ))}
          </div>

        {/*Founders Section*/}
        <Founders />

        {/* Approach with Image */}
        <div id="How we work" className="flex  flex-col items-center gap-8 scroll-mt-20">
          <Timeline />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {leadMachineHighlights2.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            </div>
            ))}
        </div>
          
          <Reviews />
      </div>
    </section>
  );
}
