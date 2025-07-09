import React from 'react'
import SignUpNavBar from '../components/SignUpNavBar'
import OtherSignUpContainer from '../containers/OtherSignUpContainer'
import Footer from '../components/Footer'

function SignUpPageOther() {
  return (
    <>
      <SignUpNavBar />
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white pt-28">
        <OtherSignUpContainer />
        <Footer />
      </div>
    </>
  )
}

export default SignUpPageOther