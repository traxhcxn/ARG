import React from 'react'
import FeatureContainer from '../containers/FeatureContainer'
import MainNavBar from '../components/MainNavBar'
import Footer from '../components/Footer'

function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
      <MainNavBar />
      <section className="flex-1 flex flex-col items-center justify-center pt-24 pb-10 relative overflow-hidden">
        {/* Magical blurred background shapes */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C0C9EE] opacity-30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8CCDEB] opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#C0C9EE] opacity-10 rotate-12 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 w-full flex flex-col items-center">
          <FeatureContainer />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default FeaturesPage
