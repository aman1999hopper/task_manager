import './App.css'
import Ads from './components/Ads'
import AnalyticsSection from './components/AnalyticsSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <Ads/>
        <AnalyticsSection/>
      </div>
    </>
  )
}

export default App
