"use client";
import leadmachine from "../assets/videoleadmachine.jpg"; // Update with your lead machine image
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FaBullhorn, FaFunnelDollar, FaUserShield, FaRocket } from "react-icons/fa";
import Image from "next/image";

const leadMachineFeatures = [
    {
        icon: <FaBullhorn className="text-xl text-blue-600" />,
        title: "Video Ads for Your Niche",
        description: "Custom-crafted video ads designed to attract your ideal audience and maximize attention.",
    },
    {
        icon: <FaFunnelDollar className="text-xl text-green-500" />,
        title: "Conversion Funnels",
        description: "Proven funnel strategies that turn viewers into leads and leads into sales.",
    },
    {
        icon: <FaUserShield className="text-xl text-yellow-500" />,
        title: "Authority-Building Content",
        description: "Content that builds trust and positions your brand as the go-to expert.",
    },
    {
        icon: <FaRocket className="text-xl text-red-500" />,
        title: "Paid & Organic Lead Systems",
        description: "Integrated systems to generate leads from both paid ads and organic reach.",
    },
];

const leadMachineHighlights = [
    {
        icon: "🎯",
        text: "Videos that don’t just get views — they get leads.",
    },
    {
        icon: "⚙️",
        text: "Your growth system in motion.",
    },
    {
        icon: "➡️",
        text: "From attention → to action → to clients.",
    },
];

export default function VideoLeadMachineSection() {
    return (
        <>
            <section id="video-lead-machine" className="w-full py-16 px-6 lg:px-20 flex flex-col justify-center items-center lg:flex-row gap-12">
                {/* Left Content */}
                <div className="flex-1 justify-center max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl text-left font-bold">
                        Video Lead Machine{" "}
                        <span className="block italic text-3xl font-normal text-slate-900">
                            Turn Attention Into Clients
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-700 leading-relaxed text-left">
                        Our signature framework designed to convert views into leads and leads into sales. We blend creative content with proven lead-generation funnels so your brand doesn’t just get seen — it gets results.
                    </p>

                    <h3 className="mt-8 text-xl font-semibold text-left">What’s inside:</h3>

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

                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-green-700 transition"
                        >
                            Build My Lead Machine
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-end">
                    <Image
                        src={leadmachine}
                        alt="Video Lead Machine"
                        width={500}
                        height={800}
                        className="rounded-[60px] h-[500px] rounded-br-none object-cover shadow-md"
                    />
                </div>
            </section>
            <section className="w-full text-black py-2">
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
            </section>
        </>
    );
}
