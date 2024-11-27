import './App.css'
import Ads from './components/Ads'
import AnalyticsSection from './components/AnalyticsSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OurVision from './components/OurVision'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <Ads/>
        <AnalyticsSection/>
        <OurVision/>
      </div>
    </>
  )
}

export default App
