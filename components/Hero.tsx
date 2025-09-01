"use client"
import React, { useState } from 'react'
import LeadsflowMediaLogo from '../assets/leadsflowmedialogo.png'
import Sublogo from '../assets/Asset 6.png'
import arrow from '../assets/arrow.png'
import CountUp from 'react-countup'
import { FaUsers, FaEye } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';
import AnimatedTitle from './Animated'

const navLinks = [
  { label: 'Our Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Founders', href: '#founders' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact', isButton: true },
];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clientsKey, setClientsKey] = useState(0);
  const [viewsKey, setViewsKey] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll for anchor links
  React.useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement && e.target.hash) {
        const el = document.querySelector(e.target.hash);
        if (el) {
          e.preventDefault();
          setIsMenuOpen(false);
          window.scrollTo({
            top: (el as HTMLElement).offsetTop - 40,
            behavior: 'smooth',
          });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [isMenuOpen]);

  return (
      <div className="flex-1 w-full items-center justify-center bg-cover bg-center "
        style={{
          background: 'radial-gradient(circle at center, #00181c 0%,#000 100%)'
        }}>
        <div className="relative  w-full h-fit pt-10 sm:h-screen md:h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={arrow.src}
              alt="Background" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative z-10 p-4 text-center">
            <AnimatedTitle>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 animate-fadeInUp text-white">
                LeadsFlow Media
              </h1>

            </AnimatedTitle>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white animate-fadeInUp animate-delay-100">
              Your Vision Our Videos,<br /><span className="text-green-500">Endless Leads.</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
        <div className="w-full py-10 md:py-20">
            <AnimatedTitle>

          <div className='flex flex-col items-center justify-center text-center'>
            <img src={Sublogo.src} alt="Sublogo" className="w-32 sm:w-40 md:w-48 mb-4 animate-fadeInUp" />
            <p className="text-lg sm:text-xl md:text-2xl text-white animate-fadeInUp animate-delay-200">
              We are a leading video marketing agency, specializing in creating high-quality videos that drive results.
            </p>
        </div>
            </AnimatedTitle>
          {/* stats section */}
          <div className="w-full mt-0 py-6 sm:py-8 flex justify-center items-center">
            <div
              ref={statsRef}
              className="backdrop-blur-md bg-black/40 border border-white/20 rounded-2xl shadow-lg px-4 xs:px-6 sm:px-8 md:px-10 py-4 sm:py-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 max-w-[340px] sm:max-w-2xl md:max-w-3xl mx-auto w-auto"
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)' }}
            >
              <div
                className="flex flex-row items-center gap-2 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-[#53c926] min-w-[120px] sm:min-w-0 px-2 py-2 rounded-lg hover:bg-white/5 transition"
                tabIndex={0}
                onFocus={() => setClientsKey(prev => prev + 1)}
                onClick={() => setClientsKey(prev => prev + 1)}
                aria-label="Clients stat: focus to animate count up"
              >
                <FaUsers className="text-[#53c926] text-2xl sm:text-3xl md:text-4xl" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-[#53c926] leading-none">
                  {(statsInView || clientsKey > 0) ? <CountUp key={clientsKey} end={30} duration={2} /> : '0'}+
                </span>
                <span className="text-sm sm:text-base md:text-lg text-white font-light ml-1">Clients</span>
              </div>
              <span className="block sm:hidden w-2/3 h-px bg-white/30 my-1 mx-auto"></span>
              <span className="hidden sm:block mx-2 sm:mx-4 text-xl sm:text-2xl text-white font-light">|</span>
              <div
                className="flex flex-row items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#53c926] min-w-[120px] sm:min-w-0 px-2 py-2 rounded-lg hover:bg-white/5 transition"
                tabIndex={0}
                onFocus={() => setViewsKey(prev => prev + 1)}
                onClick={() => setViewsKey(prev => prev + 1)}
                aria-label="Views stat: focus to animate count up"
              >
                <FaEye className="text-[#53c926] text-2xl sm:text-3xl md:text-4xl" />
                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-[#53c926] leading-none">
                  {(statsInView || viewsKey > 0) ? <CountUp key={viewsKey} end={5} duration={2} decimals={1} /> : '0'} Million+
                </span>
                <span className="text-sm sm:text-base md:text-lg text-white font-light ml-1">Views</span>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Hero