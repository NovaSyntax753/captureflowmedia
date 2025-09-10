"use client";
import { Mail, Instagram, Phone, Youtube } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="flex flex-col mt-20 bg-white items-center h-full w-full justify-center">
      
      {/* Contact Form */}
      <div className="w-full h-full">
        <ContactForm text1="Let's" text2="talk!" />
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col w-full h-full min-h-[400px] pb-5 gap-10 text-black px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-6xl top-0 font-bold mb-4"
        >
          Contact <span className="italic font-normal">Us</span>
        </motion.h2>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="font-semibold text-lg">KkaptureFlow Media</p>
          <p className="max-w-xl text-wrap mx-auto text-gray-800 mb-10">
            Second Floor, Inox Rd, above Bramha Hotel, near Shastri Nagar, Chapru Nagar, Sq, Shashtri Nagar, Nagpur, Maharashtra 440008
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <Link href="mailto:kkaptureflowmedia@gmail.com">
            <div className="flex flex-col items-center gap-3">
              <Mail className="w-10 h-10" />
              <p className="text-sm md:text-base">kkaptureflowmedia@gmail.com</p>
            </div>
          </Link>

          <Link href="https://www.instagram.com/kkapture_flow_media/" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center gap-3">
              <Instagram className="w-10 h-10" />
              <p className="text-sm md:text-base">@kkapture_flow_media</p>
            </div>
          </Link>

          <Link href="tel:+918390915155">
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <Phone className="w-10 h-10" />
              <p className="text-sm md:text-base">+91 83909 15155</p>
            </div>
          </Link>

          <Link href="https://youtube.com/@growwithpatels?si=9RTfjzHirqLciOJp" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center gap-3">
              <Youtube className="w-10 h-10" />
              <p className="text-sm md:text-base">@growwithpatels</p>
            </div>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

export default page;
