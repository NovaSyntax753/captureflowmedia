"use client";
import { useState } from "react";
import SocialMarquee from "@/components/SocialMarquee";
import GraphicDesignSection from "@/components/GraphicDesignSection";
import MotionGraphicsSection from "@/components/MotionGraphics";
import VideoEditingSection from "@/components/VideoEditing";
import VideoLeadMachineSection from "@/components/VideoLeadMachineSection";

const tabs = [
  { id: "video-lead-machine", label: "Video Lead Machine" },
  { id: "video-editing", label: "Video Editing" },
  { id: "graphics", label: "Graphic Design" },
  { id: "motion-graphics", label: "Motion Graphics" },
];

export default function ServicesNavigator() {
  const [active, setActive] = useState("video-lead-machine");

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full mt-20 overflow-hidden min-h-screen flex flex-col justify-center items-center text-center py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] bg-white text-black flex flex-col justify-center gap-4 sm:gap-6">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Content Marketing
        </h2>
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl italic mb-6 sm:mb-8">
          Services
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center sm:justify-evenly gap-3 sm:gap-4 bg-gray-100 p-2 sm:p-3 rounded-full w-full max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg transition-all ${
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

      {/* Divider */}
      <hr className="hidden sm:block mt-8 mb-6 sm:mb-10 w-[90%] border-t border-black" />

      {/* Sections */}
      <div className="w-full space-y-12 sm:space-y-16 lg:space-y-20">
        <VideoLeadMachineSection />
        <VideoEditingSection />
        <SocialMarquee />
        <GraphicDesignSection />
        <MotionGraphicsSection />
      </div>
    </section>
  );
}
