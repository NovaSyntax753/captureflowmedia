"use client";

import React from "react";

const ContactForm = ({text1,text2}: {text1: string, text2: string}) => {
  return (
    <section className="w-full min-h-screen text-black flex items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <h2 className="text-center text-6xl md:text-4xl font-light mb-10">
          <span className="font-extrabold text-5xl">{text1}</span>{" "}
          <span className="italic text-5xl">{text2}</span>
        </h2>

        {/* Form */}
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
            <input type="hidden" name="access_key" value={process.env.WEB3_ACCESS_KEY} />
          <input
            type="text"
            name="first_name"
            placeholder="First Name*"
            className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="text"
              name="contact_no"
              placeholder="Contact No*"
              className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Company*"
            name="company"
            className="w-full px-4 py-3 rounded-lg bg-[#ebf3f1] focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-3 text-2xl rounded-full border border-black font-extrabold bg-white hover:bg-black hover:text-white transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
