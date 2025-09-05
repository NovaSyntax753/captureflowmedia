"use client"
import { Mail, Instagram, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm"


const page = () => {
  return (
    <div className="flex flex-col mt-20 bg-white items-center h-full w-full justify-center">
        <div className="w-full h-full ">
            <ContactForm text1="Let's" text2="talk!" />
        </div>
    <div className="w-full h-full pb-5  text-black px-6 text-center">
      {/* Heading */}
      <h2 className="text-6xl top-0 font-bold mb-4">
        Contact <span className="italic font-normal">Us</span>
      </h2>

      {/* Address */}
      <div className="">
        <p className="font-semibold text-lg">KkaptureFlow Media</p>
        <p className="max-w-xl text-wrap mx-auto text-gray-800 mb-10">
          C-944, C Block, Sushant Lok Phase 1, Near Vyapar Kendra, Gurugram,
          Haryana 122002
         </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-3">
          <Mail className="w-10 h-10" />
          <p className="text-sm md:text-base">business@neonpigeon.in</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Instagram className="w-10 h-10" />
          <p className="text-sm md:text-base">@neonpigeon.in</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Phone className="w-10 h-10" />
          <p className="text-sm md:text-base">
            +91 83909 15155
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page