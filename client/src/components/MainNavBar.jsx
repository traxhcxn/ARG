import React from 'react'
import {AppButton} from './Buttons'
import { Link } from 'react-router-dom'

function MainNavBar() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({behaviour: 'smooth'})
    }
    return (
        <div className="navbar px-10 fixed z-20 bg-gradient-to-r from-[#8CCDEB] via-[#C0C9EE] to-[#1F2343] shadow-lg">
            <div className="navbar-start">
                <Link to={"/"}>
                    <img src='/logo.png' className='size-10' />
                </Link>
                <p className='mx-3 font-bold text-xl'>ARGS</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-semibold">
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/features'}>FEATURES</Link></li>
                    <li><Link to={'/testimonials'}>TESTIMONIALS</Link></li>
                    <li><Link to={'/about'}>ABOUT</Link></li>
                    <li><Link to={'/contact'}>CONTACT</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <Link to={"/sign-up"}>
                    <AppButton btnText={"SIGN UP"} className={"w-[120px] h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} />
                </Link>
                <Link to={"/login"}>
                    <a className="text-white hover:text-[#8CCDEB] transition-colors">LOGIN</a>
                </Link>
            </div>
        </div>
    )
}

export default MainNavBar