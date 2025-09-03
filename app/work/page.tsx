"use client"
import DiagonalImageColumns from "@/components/DiagonalImageColumns"
import PortfolioSection from "@/components/PortfolioSection"
import StatsSection from "@/components/StatsSection"


const page = () => {
  return (
    <div className="items-center bg-white justify-center flex flex-col ">
        <StatsSection />
        <PortfolioSection />
        <DiagonalImageColumns />
    </div>
  )
}

export default page