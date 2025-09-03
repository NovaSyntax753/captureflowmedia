// "use client"
// import React, { useState } from 'react';
// import { FaPhoneAlt, FaEnvelope, FaRegCopy, FaCheck, FaArrowRight, FaComments } from 'react-icons/fa';
// import AnimatedTitle from './Animated';

// const contactInfo = [
//   {
//     type: 'Mobile',
//     value: '+91 83909 15155',
//     icon: <FaPhoneAlt className="w-7 h-7 text-[#53c926]" />,
//     labelIcon: <FaPhoneAlt className="w-5 h-5 text-[#53c926] mr-2" />,
//     cta: 'Call Now',
//     href: 'tel:+918390915155',
//     badge: 'Fastest Response!'
//   },
//   {
//     type: 'Email',
//     value: 'leadsflowmedia1@gmail.com',
//     icon: <FaEnvelope className="w-7 h-7 text-[#53c926]" />,
//     labelIcon: <FaEnvelope className="w-5 h-5 text-[#53c926] mr-2" />,
//     cta: 'Email Us',
//     href: 'mailto:leadsflowmedia1@gmail.com',
//     badge: null
//   },
// ];

// const FloatingDots = () => (
//   <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
//     <div className="absolute top-8 left-8 w-6 h-6 bg-gradient-to-br from-[#53c926] to-transparent opacity-30 rounded-full animate-pulse" />
//     <div className="absolute bottom-12 right-12 w-8 h-8 bg-gradient-to-tr from-[#53c926] to-transparent opacity-20 rounded-full animate-pulse delay-200" />
//     <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-br from-[#53c926] to-transparent opacity-20 rounded-full animate-pulse delay-500" />
//     <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-gradient-to-tr from-[#53c926] to-transparent opacity-25 rounded-full animate-pulse delay-700" />
//   </div>
// );

// const Contact = () => {
//   const [copied, setCopied] = useState<CopiedState>({});

//   interface ContactInfo {
//     type: string;
//     value: string;
//     icon: React.ReactNode;
//     labelIcon: React.ReactNode;
//     cta: string;
//     href: string;
//     badge: string | null;
//   }

//   interface CopiedState {
//     [key: string]: boolean;
//   }

//   const handleCopy = (type: string, value: string): void => {
//     navigator.clipboard.writeText(value);
//     setCopied((prev: CopiedState) => ({ ...prev, [type]: true }));
//     setTimeout(() => setCopied((prev: CopiedState) => ({ ...prev, [type]: false })), 1500);
//   };

//   return (
//     <section className="w-full py-10 sm:py-14 md:py-20  flex flex-col items-center relative overflow-hidden font-sans" id="contact">
//       <FloatingDots />
//       <AnimatedTitle>
//       <div className="relative z-10 w-full flex flex-col items-center px-2 sm:px-4 md:px-0">
//         <div className="flex items-center gap-2 sm:gap-3 mb-3">
//           <FaComments className="w-7 h-7 sm:w-8 sm:h-8 text-[#53c926] drop-shadow-lg animate-bounce-slow" />
//           <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-center text-[#53c926] drop-shadow-lg tracking-tight">Let's Connect!</h2>
//         </div>
      
//         <p className="text-white text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 text-center max-w-2xl font-light">
//         Leads stuck? Let them flow — with Leads Flow Media.
//         </p>
          
//         <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-stretch w-full max-w-3xl mt-10 mb-8">
//           {contactInfo.map((info) => (
//             <div
//             key={info.type}
//               className="relative group bg-white/10 backdrop-blur-md border-2 border-transparent rounded-2xl p-[2px] transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl min-h-[180px] sm:min-h-[200px] w-full sm:min-w-[340px] flex-1 z-10 mb-4 sm:mb-0"
//               style={{ boxShadow: '0 4px 32px 0 rgba(83,201,38,0.10)' }}
//             >
//               <div className="bg-black/80 rounded-2xl p-5 sm:p-7 flex flex-col items-center text-center h-full">
//                 {info.badge && (
//                   <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#53c926] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">{info.badge}</span>
//                 )}
//                 <div className="mb-2 sm:mb-3 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#53c926] bg-opacity-10 border border-[#53c926]">
//                   {info.icon}
//                 </div>
//                 <div className="flex items-center justify-center text-[#53c926] font-bold text-base sm:text-lg md:text-xl mb-1 tracking-tight">
//                   {info.labelIcon}
//                   <span>{info.type}</span>
//                 </div>
//                 <div className="text-white text-sm sm:text-base md:text-lg mb-3 sm:mb-4 break-all font-medium">{info.value}</div>
//                 <div className="flex gap-2 w-full justify-center">
//                   <a
//                     href={info.href}
//                     className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg border-0 bg-gradient-to-r from-[#53c926] to-green-400 text-black font-bold text-sm sm:text-base shadow-md group hover:from-green-400 hover:to-[#53c926] hover:shadow-[0_0_16px_2px_#53c92655] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#53c926]"
//                     style={{ boxShadow: '0 2px 12px 0 #53c92633' }}
//                   >
//                     {info.cta}
//                     <span className="relative flex items-center">
//                       <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 animate-pulse-x" />
//                     </span>
//                   </a>
//                   <button
//                     onClick={() => handleCopy(info.type, info.value)}
//                     className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-[#53c926] bg-white/80 text-[#53c926] hover:bg-[#53c926] hover:text-white transition-colors duration-300 font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#53c926] ${copied[info.type] ? 'bg-[#53c926] text-white' : ''}`}
//                   >
//                     {copied[info.type] ? <FaCheck className="w-5 h-5" /> : <FaRegCopy className="w-5 h-5" />}
//                     {copied[info.type] ? 'Copied!' : 'Copy'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//       </AnimatedTitle>
//       {/* Custom keyframes for bounce and pulse-x */}
//       <style>{`
//         @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
//         .animate-bounce-slow { animation: bounce-slow 2.2s infinite; }
//         @keyframes pulse-x { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(6px); } }
//         .animate-pulse-x { animation: pulse-x 1.2s infinite; }
//       `}</style>
//     </section>
//   );
// };

// export default Contact; 