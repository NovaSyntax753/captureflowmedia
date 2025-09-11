"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FaBullhorn, FaFunnelDollar, FaUserShield, FaRocket } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const leadMachineFeatures = [
    {
        icon: <FaBullhorn className="text-xl text-blue-600" />,
        title: "Video Ads for Your Niche",
        description: "Custom video campaigns designed to capture attention and drive leads.",
    },
    // {
    //     icon: <FaFunnelDollar className="text-xl text-green-500" />,
    //     title: "Conversion Funnels",
    //     description: "End-to-end funnel systems that turn views into booked calls.",
    // },
    {
        icon: <FaUserShield className="text-xl text-yellow-500" />,
        title: "Authority-Building Content",
        description: "Strategic video content that positions you as the go-to expert in your field.",
    },
];

// const leadMachineHighlights = [
//     {
//         icon: "🎯",
//         text: "Videos that don’t just get views — they get leads.",
//     },
//     {
//         icon: "⚙️",
//         text: "Your growth system in motion.",
//     },
//     {
//         icon: "➡️",
//         text: "From attention → to action → to clients.",
//     },
// ];

export default function AboutHeader() {
    return (
        <>
            <section id="Who we are" className="w-full py-16 px-6 lg:px-20 flex flex-col justify-center items-center lg:flex-row gap-20">
                {/* Left Content */}
                <div className="flex-1 justify-center max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl text-left font-bold">
                        About Us{" "}
                        <span className="block italic text-3xl font-normal text-slate-900">
                           We Are Growth Partners, Not Just Another Media Agency.
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-700 leading-relaxed text-left">
                                    Kkapture Flow Media was founded with a simple mission: help businesses grow by
            using the most powerful content format in the world — <span className="font-semibold">VIDEO</span>.
            Unlike typical agencies that just deliver designs or edits, we focus on what
            actually matters — <span className="font-semibold">getting you clients</span>.
            Our proprietary strategy, the <span className="italic">Video Lead Machine</span>, blends engaging visuals with
            lead-generation funnels to help you stand out, build trust, and convert.
                    </p>

                    <h3 className="mt-8 text-xl font-semibold text-left">What we do:</h3>

                    {/* Accordion Features */}
                    <Accordion type="single" collapsible className="mt-4 w-full">
                        {leadMachineFeatures.map((feature, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b w-full">
                                <AccordionTrigger>
                                    <h2 className="flex items-center gap-2">{feature.icon} {feature.title}</h2>
                                </AccordionTrigger>
                                <AccordionContent className="text-left text-gray-600">
                                    {feature.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="mt-6 text-gray-700 leading-relaxed text-left" >
                        At the end of the day, we’re not just here to “make videos.” We’re here to build you a growth engine that gets results.
                    </p>
                    <div className="mt-8 flex w-full items-start justify-start">
                        <Link
                            href="#founders"
                            className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-white hover:text-black transition"
                        >
                            Meet Our Founders
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-end">
                    <video
                        src="/aboutus.mp4"
                        autoPlay
                        muted
                        loop
                        className="rounded-[60px] min-h-[350px]  bg-black  rounded-br-none object-fit shadow-md"
                    />
                </div>
            </section>
            {/* <section className="w-full text-black py-2">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                    {leadMachineHighlights.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-5xl mb-4">{item.icon}</span>
                            <p className="text-lg font-medium leading-relaxed max-w-xs">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section> */}
        </>
    );
}
