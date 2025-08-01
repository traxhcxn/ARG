import React from 'react'
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom'

function GuestNavBar() {
    return (
        <div className="navbar fixed z-10 px-10 bg-gradient-to-r from-[#8CCDEB] via-[#C0C9EE] to-[#1F2343] shadow-lg">
            <div className="flex-1 gap-3">
                <Link to={'/'}><a className='cursor-pointer'><img src={logo} className='size-10' /></a></Link>
                <p className='text-xl font-semibold'>Institution Name</p>
            </div>
            <div className="flex-none">
                <Link to={'/login'}><a className='text-white shadow-none border-none font-normal'>Back to Login</a></Link>
            </div>
        </div>
    )
}

export default GuestNavBar