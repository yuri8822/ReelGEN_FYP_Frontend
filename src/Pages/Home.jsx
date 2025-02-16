import React from 'react'
import CTA from '../Components/Home/CTA'
import Features from '../Components/Home/Features'
import Footer from '../Components/Home/Footer'
import Hero from '../Components/Home/Hero'
import HowItWorks from '../Components/Home/HowItWorks'
import Pricing from '../Components/Home/Pricings'

const Home = () => {
  return (
    <div className="font-sans">
    
    <Hero />
    <Features />
    <HowItWorks />
    <Pricing />
    <CTA />
    <Footer />
  </div>
  )
}

export default Home
