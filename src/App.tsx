import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

import TrustSection from './components/TrustSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-(--color-bg-primary)">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TrustSection />
      </main>
      <Footer />
    </div>
  )
}
