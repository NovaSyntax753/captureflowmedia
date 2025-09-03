
// import './App.css'
import LeadsflowMediaLogo from './assets/leadsflowmedialogo.png'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ClientCards from '@/components/ClientCards'
import MarqueeSection from '@/components/MarqueeSection'
import Infosection from '@/components/Infosection'
import ribbon from './assets/ribbon_Vector-p-2600.png'
import Services from '@/components/Services'
import Expertise from '@/components/Expertise'
import Work from '@/components/Work'
import Reviews from '@/components/Reviews'
import Founders from '@/components/Founders'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ServiceBanner from '@/components/ServiceBanner'
import CreativeInfo from '@/components/CreativeInfo'
import CreativitySection from '@/components/CreativitiySection'
import WhatWeDo from '@/components/WhatWeDo'
import Spotlight from '@/components/Spotlight'
import ContactForm from '@/components/ContactForm'
import ClientsMarquee from '@/components/ClientsMarquee'
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <Hero/>
      <ServiceBanner/>
      {/* <CreativeInfo/> */}
      <CreativitySection/>
      <WhatWeDo/>
      <Spotlight />
      <ClientsMarquee />
      <ContactForm text1="Talk" text2="to us" />

    </div>
  )
}

export default App
