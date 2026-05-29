import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import CoreBanking from './components/CoreBanking'
import ConnectedBanking from './components/ConnectedBanking'
import PaperlessCTA from './components/PaperlessCTA'
import Marquee from './components/Marquee'
import DigitalBanking from './components/DigitalBanking'
import Insights from './components/Insights'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-n7-dark">
      <Navbar />
      <Hero />
      <Solutions />
      <CoreBanking />
      <ConnectedBanking />
      <PaperlessCTA />
      <Marquee />
      <DigitalBanking />
      <PaperlessCTA background="light" text="N7" />
      <Insights />
      <PaperlessCTA noBackground />
      <Footer />
    </div>
  )
}
