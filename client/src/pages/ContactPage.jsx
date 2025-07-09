import React from 'react'
import ContactContainer from '../containers/ContactContainer'
import MainNavBar from '../components/MainNavBar'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
        <MainNavBar />
        <div className="pt-20">
            <ContactContainer />
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage
