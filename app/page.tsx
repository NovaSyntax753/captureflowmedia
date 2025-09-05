import Hero from '@/components/Hero'
import ServiceBanner from '@/components/ServiceBanner'
import CreativitySection from '@/components/CreativitiySection'
import WhatWeDo from '@/components/WhatWeDo'
import Spotlight from '@/components/Spotlight'
import ClientsMarquee from '@/components/ClientsMarquee'
import ContactForm from '@/components/ContactForm'
import ClientCards from '@/components/ClientCards'
import MarqueeSection from "@/components/MarqueeSection";
import CountriesMarquee from '@/components/CountriesMarquee'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero/>
      <ServiceBanner/>
      <CreativitySection/>
      <WhatWeDo/>
      <Spotlight />
      <ClientsMarquee />
      <div className="py-5 bg-white"></div>
      <CountriesMarquee />
      <ContactForm text1="Talk" text2="to us" />
    </div>
  )
}

export default App
