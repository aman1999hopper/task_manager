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

  const sections = [
    { Component: HeroSection, id: 'hero' },
    { Component: Ads, id: 'ads' },
    { Component: AnalyticsSection, id: 'analytics' },
    { Component: OurVision, id: 'ourVision' },
    { Component: TestimonialSection, id: 'testimonial' },
    { Component: AboutUsSection, id: 'aboutUs' },
    { Component: ContactUsSection, id: 'contactUs' },
  ];

  return (
    <>
      <div>
        <Navbar />
        {sections.map(({ Component, id }) => (
          <div key={id}>
            <Component />
          </div>
        ))}
        <Footer />
      </div>
    </>
  )
}

export default App
