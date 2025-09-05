"use client";
import Image from "next/image";
import conso from "../assets/company/conso.png";
import ark from "../assets/company/ark.png";
import dental from "../assets/company/dental.png";
import blissfull from "../assets/company/blissfull.png";
import quickfintax from "../assets/company/quickfintax.png";
import karma from "../assets/company/karma.png";

import CountryFlag from 'react-country-flag';
import AnimatedTitle from './Animated';

const countries = [
  { name: 'USA', code: 'US' },
  { name: 'UK', code: 'GB' },
  { name: 'Canada', code: 'CA' },
  { name: 'India', code: 'IN' },
  { name: 'Australia', code: 'AU' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'UAE', code: 'AE' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
    { name: 'USA', code: 'US' },
  { name: 'UK', code: 'GB' },
  { name: 'Canada', code: 'CA' },
  { name: 'India', code: 'IN' },
  { name: 'Australia', code: 'AU' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'UAE', code: 'AE' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
];

export default function ClientsMarquee() {
  return (
    <section className="w-full bg-white text-black border-t border-b border-gray-700 py-4 flex flex-col sm:flex-row items-center overflow-hidden">
      {/* Left Text (on top for mobile, left for desktop) */}
      <div className="flex-shrink-0 px-6 sm:h-full  sm:border-b-0 sm:border-r border-gray-600 text-lg font-semibold text-center sm:text-left w-full sm:w-auto pb-2 sm:pb-0">
        We're available in these countries
      </div>

      {/* Divider only on desktop */}
      <div className="hidden sm:block w-1 h-full bg-black mx-4"></div>

      {/* Marquee */}
      <div className="relative flex-1 overflow-hidden w-full">
        <div className="flex w-max animate-marquee gap-6 py-2">
          {countries.map((country, i) => (
            <div key={`set1-${i}`} className="shrink-0">
              <CountryFlag countryCode={country.code} svg style={{ width: '2em', height: '2em' }} />
            </div>
          ))}
            {countries.map((country, i) => (
            <div key={`set1-${i}`} className="shrink-0">
              <CountryFlag countryCode={country.code} svg style={{ width: '2em', height: '2em' }} />
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
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
