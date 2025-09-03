
// import Marquee from 'react-fast-marquee';
// import CountryFlag from 'react-country-flag';
// import AnimatedTitle from './Animated';

// const countries = [
//   { name: 'USA', code: 'US' },
//   { name: 'UK', code: 'GB' },
//   { name: 'Canada', code: 'CA' },
//   { name: 'India', code: 'IN' },
//   { name: 'Australia', code: 'AU' },
//   { name: 'New Zealand', code: 'NZ' },
//   { name: 'UAE', code: 'AE' },
//   { name: 'France', code: 'FR' },
//   { name: 'Germany', code: 'DE' },
// ];

// const MarqueeSection = () => {
//   return (
//     <section
//       className="w-full py-8 md:py-12  relative overflow-hidden"

//     >
//       <AnimatedTitle>
//         <div className="max-w-5xl mx-auto px-4 w-1/2 inline">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-6 animate-fadeInUp drop-shadow-lg">
//             <span className="text-[#53c926]">We're available in</span> these countries
//           </h2>
//         </div>

//       </AnimatedTitle>
//       <div className='w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto mb-4 p-4 rounded-xl bg-white opacity-80 backdrop-blur-2xl shadow-lg'>
//       <Marquee gradient={false} speed={40} pauseOnHover>
//         {[...countries, ...countries].map((country, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-4 mx-8 animate-fadeInUp"
//           >
//             <CountryFlag
//               countryCode={country.code}
//               svg
//               style={{ width: '2.5em', height: '2.5em', borderRadius: '0.4em', boxShadow: '0 2px 8px #00181c33' }}
//               aria-label={country.name}
//             />
//             <span className="text-md font-extrabold text-black tracking-wide uppercase" style={{letterSpacing: '0.05em'}}>{country.name}</span>
//           </div>
//         ))}
//       </Marquee>
//       </div>
//     </section>
//   );
// };

// export default MarqueeSection;
