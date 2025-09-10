"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { number: 100, suffix: "+", text: "happy & satisfied clients" },
    { number: 2, suffix: "+", text: "years of content expertise" },
    { number: 1000, suffix: "+", text: "successful campaigns executed" },
    { number: 500, suffix: "+", text: "content creators onboarded" },
  ];

  // Hook for count-up animation
  const useCountUp = (end: number, duration = 1500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center border-y border-gray-700 py-8">
        {stats.map((stat, index) => {
          const count = useCountUp(stat.number);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }} // animates every time in viewport
            >
              <h3 className="text-2xl font-bold text-green-500">
                {count}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-sm font-bold leading-relaxed">{stat.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
