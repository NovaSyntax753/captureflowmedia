
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
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <Hero/>
      <ClientCards/>  
      <MarqueeSection />
 

      {/* About BrandFlow Section */}
      <About />
      
      {/* Making Your Life Easier Section */} 
       <Infosection/>
      {/* Our Services Section */}
        <Services/>

      {/* Our Expertise Section */}
      <Expertise/>

      {/* Our Work Section */}
      <Work/>
      {/* Words From Our Clients Section */}
      <Reviews/>

      {/* About Team Section */}
      <Founders/>

      {/* Contact Section */}

      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
