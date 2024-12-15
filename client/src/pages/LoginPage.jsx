import React from 'react'
import LoginContainer from '../containers/LoginContainer'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div className='flex flex-col items-center'>
            <Link to={"/"}><img src='/logo.png' className='my-14'/></Link>
            <LoginContainer />
            <Footer />
        </div>
    )
}

export default LoginPage