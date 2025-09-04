"use client";
import React from "react";

const features = [
  {
    icon: "🫠", // replace with better emoji/icon if needed
    text: "We deliver high-quality renders."
  },
  {
    icon: "📱",
    text: "Create captivating short format videos"
  },
  {
    icon: "📺",
    text: "Dynamic DVC content that resonates."
  }
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-5xl mb-4">{item.icon}</span>
            <p className="text-lg font-medium leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
