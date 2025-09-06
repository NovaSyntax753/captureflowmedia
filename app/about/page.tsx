"use client";
import howwework from "../../assets/how we work.png"
import ribbon from "../../assets/ribbon_Vector-p-2600.png";

export default function Page() {

 const leadMachineHighlights = [
    {
        icon: "🚀",
        // title:"Creativity",
        text: "Videos that stop the scroll",
    },
    {
        icon: "🎯",
        // title:"Strategy",
        text: "Content aligned with growth goals",
    },
    {
        icon: "💰",
        // title:"Results",
        text: "Views that turn into real revenue",
    }
];

  const leadMachineHighlights2 = [
    {
        icon: "🎥",
        title:"Video that drives leads, not just views.",
    },
    {
        icon: "📈",
        title:"Campaigns built for ROI.",
    },
    {
        icon: "📊",
        title:"Strategies that scale with you.",
    }
  ];

  return (
    <section className="w-full h-full mt-20 min-h-screen bg-black text-white text-center py-12">
      <About />
      {/* <CgiContentSection /> */}
       <section className="w-full  py-2 min-h-[25vh]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                    {leadMachineHighlights.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-5xl mb-4">{item.icon}</span>
                            {/* <h3 className="text-xl font-semibold mb-2">{item.title}</h3> */}
                            <p className="text-lg font-medium leading-relaxed max-w-xs">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

      <Founders />
      <section className="w-full py-2">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                    {leadMachineHighlights2.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                            <span className="text-5xl mb-4">{item.icon}</span>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        </div>
                    ))}
                </div>
      </section>
      <FlowCircles />
      <Reviews />

    </section>
  );
}


import Image from "next/image";
import Founders from "@/components/Founders";
import About from "@/components/About";
import AnimatedTitle from "@/components/Animated";
import Reviews from "@/components/Reviews";

// const accordionItems = [
//   {
//     title: "Unreal Visual",
//     content: "We create jaw-dropping CGI visuals that push the limits of imagination and innovation."
//   },
//   {
//     title: "Imagination Without Limit",
//     content: "Transforming ideas into stunning 3D content that goes beyond conventional creativity."
//   },
//   {
//     title: "Mind Blowing Conceptualizing",
//     content: "We conceptualize unique designs and animations to bring your brand to life in unforgettable ways."
//   }
// ];

//  function CgiContentSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full bg-black py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
//       {/* Right Side */}
  
//       <div className="flex-1 flex justify-center">
//         <Image
//           src="/logo1.png" // replace with your image path
//           alt="CGI Content Work"
//           width={500}
//           height={500}
//           className="rounded-2xl shadow-lg bg-white   object-cover"
//         />
//       </div>
//       {/* Left Side */}
//       <div className="flex-1">
//         <p className="text-xl lg:text-2xl font-italic mb-6 mt-6 text-gray-500 leading-relaxed text-left">
//           Kkapture Flow Media was founded with a simple mission: help businesses grow by
// using the most powerful content format in the world — VIDEO.
// Unlike typical agencies that just deliver designs or edits, we focus on what actually
// matters — getting you clients.
// Our proprietary strategy, the Video Lead Machine, blends engaging visuals with
// lead-generation funnels to help you stand out, build trust, and convert
//         </p>
//       </div>

//     </section>
//   );
// }



export function FlowCircles() {

  return (
    <div className="w-full flex justify-center relative py-10 sm:py-14 md:py-20  flex-col items-center">
          <Image src={ribbon.src} height={100} width={100} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
    <AnimatedTitle>
      <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-[#53c926]">How We WOrk</h2>
    </AnimatedTitle>
    <AnimatedTitle>
      <Image
        src={howwework}
        alt="How We Work"
        width={800}
        height={400}
        className="object-contain rounded-xl shadow-lg bg-white"
      />
    </AnimatedTitle>
    </div>
  );
}
