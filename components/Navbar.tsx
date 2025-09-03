"use client"
import React, { useState } from 'react'
import LeadsflowMediaLogo from '../assets/leadsflowmedialogo.png'
import Sublogo from '../assets/Asset 6.png'
import arrow from '../assets/arrow.png'
import CountUp from 'react-countup'
import { FaUsers, FaEye } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';
import AnimatedTitle from './Animated'
import { label } from 'framer-motion/client'

const navLinks = [
    {label:'Home', href:'/'},
    {label: 'About', href: '/about'},
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
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
    <div className="relative h-24 py-2 flex flex-col bg-white text-black  font-sans items-center justify-center text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-12 items-center relative">
        <div className="min-w-1/2 flex items-center lg:w-auto justify-between lg:justify-start gap-4">
          {/* <img src={LeadsflowMediaLogo.src} alt="Leadsflow Media Logo" className="h-16 md:h-20" /> */}
          <h1 className="text-2xl font-bold">KkaptureFlow Media</h1>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-black focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0  bg-opacity-95 z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map(link =>(
              <li key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-white text-2xl block py-2 px-4" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="w-1/2 hidden lg:flex flex-row items-center text-lg justify-end pr-10 gap-2">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className={`px-4 py-2 rounded-4xl transition duration-300 hover:font-semibold hover:underline`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Navbar;