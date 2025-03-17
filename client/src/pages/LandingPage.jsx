import React from 'react'
import Hero from '../containers/Hero'
import FeatureContainer from '../containers/FeatureContainer'
import TestimonialContainer from '../containers/TestimonialContainer'
import AboutContainer from '../containers/AboutContainer'
import ContactContainer from '../containers/ContactContainer'
import MainNavBar from '../components/MainNavBar'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div>
        <MainNavBar />
        <Hero />
        <FeatureContainer />
        <TestimonialContainer />
        <AboutContainer id={'about'}/>
        <ContactContainer id={'contact'}/>
        <Footer />
    </div>
  )
}

export default LandingPage