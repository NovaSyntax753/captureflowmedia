// import React from 'react'
// import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
// import { MdSupportAgent } from 'react-icons/md'
// import AnimatedTitle from './Animated'
// import ServiceCard from './ServiceCard'
// import ribbon from '../assets/ribbon_Vector-p-2600.png'
// const services = [
//    {
//       icon: <FaLinkedin className="text-5xl md:text-6xl text-[#0077b5] drop-shadow" />, // LinkedIn
//       pill: 'Lead Generation',
//       title: <>Content that <span className="text-[#53c926] font-extrabold italic">Converts</span></>,
//       desc: "We craft LinkedIn content that builds authority, sparks real conversations, and leads to high-value client calls. We turn your expertise into posts that start conversations, build authority, and attract clients.",
//     },
//   {
//     icon: <FaInstagram className="text-5xl md:text-6xl text-[#fd5949] drop-shadow" />, // Instagram
//     pill: 'Reels That Sell',
//     title: <>Reels That Sell<span className="text-[#53c926] font-extrabold italic"> — Not Just Go Viral</span></>,
//     desc: "We craft thumb-stopping short-form videos that aren't just trendy—they hook, hold, and convert. Your story + our strategy = content that brings clients.",
//   },
//   {
//     icon: <FaYoutube className="text-5xl md:text-6xl text-[#ff0000] drop-shadow" />, // YouTube
//     pill: 'Storytelling That Rules',
//     title: <>Rule YT with <span className="text-[#53c926] font-extrabold italic">Storytelling!</span></>,
//     desc: "Let your brand story truly connect with the right audience through our powerful storytelling. From deep research and thoughtful scripting to high-quality production, smooth editing, and performance insights — we handle it all.",
//   },
//   {
//     icon: <MdSupportAgent className="text-5xl md:text-6xl text-[#53c926] drop-shadow" />, // Consultation
//     pill: 'Consultation',
//     title: <>Consultation by <span className="text-[#53c926] font-extrabold italic">Founder & Experts</span></>,
//     desc: "We know what it takes to grow online today. We turn ideas into content that people can't ignore.",
//   }
// ]

// const Services = () => {
//   return (
//     <section className="relative w-full py-16 " id="services">
//       <img src={ribbon.src} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
//       <div className="max-w-6xl mx-auto px-4">
//         <AnimatedTitle>
//           <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#53c926]">Our Services</h2>
//         </AnimatedTitle>
//       <AnimatedTitle>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
//           {services.map((service, idx) => (
//             <ServiceCard
//               key={idx}
//               icon={service.icon}
//               pill={service.pill}
//               title={service.title}
//               desc={service.desc}
//             />
//           ))}
//         </div>
//       </AnimatedTitle>
//       </div>
//     </section>
//   )
// }

// export default Services