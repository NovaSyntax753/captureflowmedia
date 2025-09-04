"use client"
import DiagonalImageColumns from "@/components/DiagonalImageColumns"
import PortfolioSection from "@/components/PortfolioSection"
import StatsSection from "@/components/StatsSection"
// import VideoCarousel from "@/components/VideoCarousel"


const page = () => {
  return (
    <div className="items-center py-10 bg-black text-white justify-center flex flex-col ">
        <StatsSection />
        <PortfolioSection />
        {/* <VideoCarousel /> */}
        <DiagonalImageColumns />
        <div className="max-w-6xl mx-auto px-4 py-10">
          <button className="bg-white font-bold text-xl text-black px-6 py-3 rounded-full mt-8 hover:bg-gray-800 transition-colors">
          Work with us
        </button>
        </div>
    </div>
  )
}

export default page