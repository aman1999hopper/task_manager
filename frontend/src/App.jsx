import './App.css'
import AboutUsSection from './components/AboutUs'
import Ads from './components/Ads'
import AnalyticsSection from './components/AnalyticsSection'
import ContactUsSection from './components/ContactUs'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OurVision from './components/OurVision'
import TestimonialSection from './components/TestimonialSection'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <Ads/>
        <AnalyticsSection/>
        <OurVision/>
        <TestimonialSection/>
        <AboutUsSection/>
        <ContactUsSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
