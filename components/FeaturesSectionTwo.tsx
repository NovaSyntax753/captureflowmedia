"use client";
import React from "react";

const features = [
  {
    icon: "🧚‍♀️",
    text: "lifestyle reels that showcase real moments."
  },
  {
    icon: "💥",
    text: "festive/ topical videos to celebrate key events."
  },
  {
    icon: "📈",
    text: "leverage trending content to keep your brand relevant."
  }
];

export default function FeaturesSectionTwo() {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-5xl mb-4">{item.icon}</span>
            <p className="text-lg font-medium leading-relaxed max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
