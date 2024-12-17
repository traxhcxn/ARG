import React from 'react'
import SignUpNavBar from '../../components/Common/SignUpNavBar'
import SignUpContainer from '../../containers/Common/SignUpContainer'
import Footer from '../../components/Common/Footer'

function SignUpPage() {
  return (
    <>
        <SignUpNavBar />
        <h1 className='pt-24 text-2xl font-bold text-center'>Start Your Path to Smarter Reports</h1>
        <SignUpContainer />
        <Footer />
    </>
  )
}

export default SignUpPage