import React from 'react'
import SignUpNavBar from '../../components/Common/SignUpNavBar'
import OtherSignUpContainer from '../../containers/Common/OtherSignUpContainer'
import Footer from '../../components/Common/Footer'

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