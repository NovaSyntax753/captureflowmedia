"use client";
import Image from "next/image";
import conso from "../assets/company/conso.png";
import ark from "../assets/company/ark.png";
import dental from "../assets/company/dental.png";
import blissfull from "../assets/company/blissfull.png";
import quickfintax from "../assets/company/quickfintax.png";
import karma from "../assets/company/karma.png";

const clients = [
  { name: "CA Shubham Patel", title: "Founder and CEO Conso AI", image: conso },
  { name: "Rohit Purohit", title: "Managing Director ARK2Construct", image: ark },
  { name: "Dr. Ankita Agrawal", title: "Co Founder Agrawal Dental Clinic", image: dental },
  { name: "Dr. Vrutika Patel", title: "Founder Blissful hands", image: blissfull },
  { name: "CA CS Harshwardhan Bissa", title: "Co-founder - Quick Fintax", image: quickfintax },
  { name: "Dr Shalini Deshmukh", title: "Managing Director Karma Astrology", image: karma },
    { name: "CA Shubham Patel", title: "Founder and CEO Conso AI", image: conso },
  { name: "Rohit Purohit", title: "Managing Director ARK2Construct", image: ark },
  { name: "Dr. Ankita Agrawal", title: "Co Founder Agrawal Dental Clinic", image: dental },
  { name: "Dr. Vrutika Patel", title: "Founder Blissful hands", image: blissfull },
  { name: "CA CS Harshwardhan Bissa", title: "Co-founder - Quick Fintax", image: quickfintax },
  { name: "Dr Shalini Deshmukh", title: "Managing Director Karma Astrology", image: karma },
    { name: "CA Shubham Patel", title: "Founder and CEO Conso AI", image: conso },
  { name: "Rohit Purohit", title: "Managing Director ARK2Construct", image: ark },
  { name: "Dr. Ankita Agrawal", title: "Co Founder Agrawal Dental Clinic", image: dental },
  { name: "Dr. Vrutika Patel", title: "Founder Blissful hands", image: blissfull },
  { name: "CA CS Harshwardhan Bissa", title: "Co-founder - Quick Fintax", image: quickfintax },
  { name: "Dr Shalini Deshmukh", title: "Managing Director Karma Astrology", image: karma },
    { name: "CA Shubham Patel", title: "Founder and CEO Conso AI", image: conso },
  { name: "Rohit Purohit", title: "Managing Director ARK2Construct", image: ark },
  { name: "Dr. Ankita Agrawal", title: "Co Founder Agrawal Dental Clinic", image: dental },
  { name: "Dr. Vrutika Patel", title: "Founder Blissful hands", image: blissfull },
  { name: "CA CS Harshwardhan Bissa", title: "Co-founder - Quick Fintax", image: quickfintax },
  { name: "Dr Shalini Deshmukh", title: "Managing Director Karma Astrology", image: karma },
];

export default function ClientsMarquee() {
  return (
    <section className="w-full bg-white text-black border-t border-b border-gray-700 py-4 flex flex-col sm:flex-row items-center overflow-hidden">
      {/* Left Text (on top for mobile, left for desktop) */}
      <div className="flex-shrink-0 min-w-[340px] px-6   sm:h-full  sm:border-b-0 sm:border-r border-gray-600 text-lg font-semibold text-center sm:text-right w-full sm:w-auto pb-2 sm:pb-0">
        Top Clients we have worked with
      </div>

      {/* Divider only on desktop */}
      <div className="hidden sm:block w-1 h-full bg-black mx-4"></div>

      {/* Marquee */}
      <div className="relative flex-1 overflow-hidden w-full">
        <div className="flex w-max animate-marquee gap-6 py-1">
          {clients.map((client, i) => (
            <div key={`set1-${i}`} className="shrink-0">
              <Image
                src={client.image}
                alt={client.name}
                width={35}
                height={35}
                className="object-cover rounded-md"
              />
            </div>
          ))}
          {clients.map((client, i) => (
            <div key={`set2-${i}`} className="shrink-0">
              <Image
                src={client.image}
                alt={client.name}
                width={35}
                height={ 35}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
