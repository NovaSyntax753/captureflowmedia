"use client";
import { useState } from "react";
import SocialMarquee from "@/components/SocialMarquee";
import  GraphicDesignSection  from "@/components/GraphicDesignSection";
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
  const [active, setActive] = useState("cgi");

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full h-full flex flex-col justify-center min-h-screen text-center py-12">
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
      <VideoLeadMachineSection />
      <VideoEditingSection />
      <SocialMarquee />
      <GraphicDesignSection />
      <MotionGraphicsSection />

    </section>
  );
}


