"use client"
import DiagonalImageColumns from "@/components/DiagonalImageColumns"
import PortfolioSection from "@/components/PortfolioSection"
import StatsSection from "@/components/StatsSection"
import VideoCarousel from "@/components/VideoCarousel"


const page = () => {
  return (
    <div className="items-center bg-white justify-center flex flex-col ">
        <StatsSection />
        <PortfolioSection />
        <VideoCarousel />
        <DiagonalImageColumns />
    </div>
  )
}

export default page