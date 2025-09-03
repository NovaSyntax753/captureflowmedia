"use client"
import React from 'react'
import VideoCardLeft from './VideoCardLeft';
const Hero = () => {
  return (
       <section className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 gap-10">
        <div className='max-w-7xl flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 gap-10 '>
                {/* Left Video */}
       <div className='max-h-[40vh] flex justify-center items-center '>
        <div className="   flex flex-col items-center justify-center overflow-hidden">
          <VideoCardLeft src="https://neonpigeonvideos.s3.ap-south-1.amazonaws.com/home+page/Website-Header-Video-2034X1918+(1).mov"  className='max-h-1/2 ' />
        </div>
       </div>
      <div className="min-w-1/2 text-center flex flex-col justify-center  text-black  md:text-left">
        <h1 className="  sm:text-6xl font-extrabold leading-tight">
          Content Agency
        </h1>
        <p className="italic font-sans text-6xl">with a passion.</p>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Turning innovative ideas into engagement.
        </p>
        <button className="mt-6 w-[200px] px-6 py-3 rounded-full border border-black font-semibold hover:bg-black hover:text-white transition">
          Get in touch
        </button>
      </div>
    </div>
    </section>
  )
}

export default Hero
