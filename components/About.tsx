import ribbon from '../assets/ribbon_Vector-p-2600.png'
import Image from "next/image"

const About = () => {
  return (
    <div id="Who we are" className="relative w-full py-20 px-4 md:px-12 bg-white text-black overflow-hidden">

      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-5 relative z-10">
        {/* Left side: Title and Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <Image src="/logo1.png" height={500} width={400} alt="Green Swirl Arrow" className="rounded-[100px]  w-64 bg-white sm:w-80 md:w-96 lg:w-[30rem] min-h-[350px] object-contain mt-4" />
        </div>

        {/* Right side: Text Content */}
        <div className="md:w-1/2 text-lg sm:text-xl md:text-2xl leading-relaxed">
              <h2 className="text-3xl md:text-4xl text-center font-bold">
        About Us
      </h2>
        <p className="mb-4">
            Kkapture Flow Media was founded with a simple mission: help businesses grow by
            using the most powerful content format in the world — <span className="font-semibold">VIDEO</span>.
        </p>
        <p className="mb-4">
            Unlike typical agencies that just deliver designs or edits, we focus on what
            actually matters — <span className="font-semibold">getting you clients</span>.
        </p>
        <p className="mb-4">
            Our proprietary strategy, the <span className="italic">Video Lead Machine</span>, blends engaging visuals with
            lead-generation funnels to help you stand out, build trust, and convert.
        </p>
        </div>

      </div>
    </div>
  )
}

export default About