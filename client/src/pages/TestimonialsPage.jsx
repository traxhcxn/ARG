import React from 'react'
import TestimonialContainer from '../containers/TestimonialContainer'
import MainNavBar from '../components/MainNavBar'
import Footer from '../components/Footer'

function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
      <MainNavBar />
      <div className="pt-20">
        <TestimonialContainer />
      </div>
      <Footer />
    </div>
  )
}

export default TestimonialsPage
