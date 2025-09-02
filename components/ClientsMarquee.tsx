"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/logos/krafton.png",
  "/logos/dutch.png",
  "/logos/lenskart.png",
  "/logos/meril.png",
  "/logos/coca.png",
  "/logos/oppo.png",
  "/logos/tata.png",
  "/logos/bgmi.png",
  "/logos/nyle.png",
  "/logos/pizzahut.png",
];

export default function ClientsMarquee() {
  return (
    <section className="w-full border-y bg-white text-black border-black py-6 overflow-hidden">
      <div className="flex h-full max-w-7xl items-center gap-4">
        {/* Left text */}
        <div className="flex items-center justify-center min-w-[30%] h-full gap-4 z-10 px-4">
          <h2 className="font-bold text-xl">Our Clients</h2>
          <div className="h-10 w-px bg-black"></div>
        </div>

        {/* Marquee section */}
        <motion.div
          className="flex gap-12 flex-shrink-0 z-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="w-28 h-16 relative">
              <Image src={logo} alt="client logo" fill className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
