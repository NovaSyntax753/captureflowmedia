
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/leadsflowmedialogo.png';
import ribbon from '../assets/ribbon_Vector-p-2600.png';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Founders', href: '#founders' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/pratik-patel-d21/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:leadsflowmedia1@gmail.com', label: 'Email' },
  { icon: <FaPhoneAlt />, href: 'tel:+918390915155', label: 'Phone' },
];

const Footer = () => (
  <footer className="relative w-full bg-black pt-10 pb-4 flex flex-col items-center overflow-hidden">
    <img src={ribbon.src} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-10 pointer-events-none" />
    <div className="relative z-10 w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between px-4 gap-6 sm:gap-0">
      <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
        <img src={logo.src} alt="LeadsFlow Media Logo" className="w-32 h-auto mb-2" />
        <span className="text-white text-sm font-light">&copy; {new Date().getFullYear()} LeadsFlow Media</span>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-0">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-white text-base hover:text-[#53c926] transition-colors duration-200 font-medium"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex gap-4">
        {socials.map(social => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-[#53c926] hover:bg-[#53c926] hover:text-white border-2 border-[#53c926] transition-colors duration-300 text-xl shadow-md"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-center mt-6">
      <span className="text-gray-400 text-xs text-center">
        &copy; {new Date().getFullYear()} LeadsFlow Media. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer; 