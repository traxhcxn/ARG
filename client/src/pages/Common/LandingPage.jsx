import React from 'react'
import Hero from '../../containers/Common/Hero'
import FeatureContainer from '../../containers/Common/FeatureContainer'
import TestimonialContainer from '../../containers/Common/TestimonialContainer'
import AboutContainer from '../../containers/Common/AboutContainer'
import ContactContainer from '../../containers/Common/ContactContainer'
import MainNavBar from '../../components/Common/MainNavBar'
import Footer from '../../components/Common/Footer'

function LandingPage() {
  return (
    <div>
        <MainNavBar />
        <Hero />
        <FeatureContainer />
        <TestimonialContainer />
        <AboutContainer />
        <ContactContainer />
        <Footer />
    </div>
  )
}

export default LandingPage