"use client"
import React, { useState } from 'react'
import LeadsflowMediaLogo from '../assets/leadsflowmedialogo.png'
import Sublogo from '../assets/Asset 6.png'
import arrow from '../assets/arrow.png'
import CountUp from 'react-countup'
import { FaUsers, FaEye } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';
import AnimatedTitle from './Animated'
import VideoPlayer from './VideoCardLeft'
import VideoCardLeft from './VideoCardLeft'

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
       <section className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 gap-10">
        <div className='max-w-7xl flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 gap-10 '>
                {/* Left Video */}
       <div className='max-h-[40vh] flex justify-center items-center '>
        <div className="   flex flex-col items-center justify-center overflow-hidden">
          <VideoCardLeft src="https://neonpigeonvideos.s3.ap-south-1.amazonaws.com/home+page/Website-Header-Video-2034X1918+(1).mov"  className='max-h-1/2 ' />
        </div>
       </div>
      <div className="min-w-1/2 text-center flex flex-col justify-center  text-black  md:text-left">
        <h1 className="  sm:text-6xl font-extrabold leading-tight">
          Content Agency
        </h1>
        <p className="italic font-sans text-6xl">with a passion.</p>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Turning innovative ideas into engagement.
        </p>
        <button className="mt-6 w-[200px] px-6 py-3 rounded-full border border-black font-semibold hover:bg-black hover:text-white transition">
          Get in touch
        </button>
      </div>
    </div>
    </section>
  )
}

export default Hero
{/* <div className="relative  w-full h-fit pt-10 sm:h-screen md:h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden">
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
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div> */}
{/* Right Content */}