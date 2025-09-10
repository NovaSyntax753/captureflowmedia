"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Custom hook for count-up animation
function useCountUp(end: number, duration = 1500): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(1, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

// Separate component for each stat
function Stat({ number, suffix, text, delay }: { number: number; suffix: string; text: string; delay: number }) {
  const count = useCountUp(number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-center"
    >
      <h3 className="text-2xl font-bold text-green-500">
        {count}
        {suffix}
      </h3>
      <p className="mt-2 text-sm font-bold leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    { number: 100, suffix: "+", text: "happy & satisfied clients" },
    { number: 2, suffix: "+", text: "years of content expertise" },
    { number: 1000, suffix: "+", text: "successful campaigns executed" },
    { number: 500, suffix: "+", text: "content creators onboarded" },
  ];

  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-y border-gray-700 py-8">
        {stats.map((stat, idx) => (
          <Stat
            key={idx}
            number={stat.number}
            suffix={stat.suffix}
            text={stat.text}
            delay={idx * 0.2}
          />
        ))}
      </div>
    </section>
  );
}
