import React from 'react'
import SignUpNavBar from '../components/SignUpNavBar'
import OtherSignUpContainer from '../containers/OtherSignUpContainer'
import Footer from '../components/Footer'

function SignUpPageOther() {
  return (
    <div className='flex flex-col items-center'>
      <SignUpNavBar />
      <OtherSignUpContainer />
      <Footer />
    </div>
  )
}

export default SignUpPageOther