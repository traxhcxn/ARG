import React from 'react'
import AboutContainer from '../containers/AboutContainer'
import MainNavBar from '../components/MainNavBar'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
        <MainNavBar />
        <div className="pt-20">
            <AboutContainer />
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage
