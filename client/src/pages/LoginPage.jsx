import React from 'react'
import LoginContainer from '../containers/LoginContainer'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#8CCDEB] via-[#C0C9EE] to-white">
            <Link to={"/"}><img src='/logo.png' className='my-14' /></Link>
            <LoginContainer />
        </div>
    )
}

export default LoginPage