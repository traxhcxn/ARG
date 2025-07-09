import React from 'react'
import { AppButton } from '../components/Buttons'
import { Link } from 'react-router-dom'

function SignUpNavBar() {
    return (
        <div className="navbar px-10 fixed z-20 bg-gradient-to-r from-[#8CCDEB] via-[#C0C9EE] to-[#1F2343] shadow-lg">
            <div className="navbar-start">
                <Link to={"/"}>
                    <img src='/logo.png' className='size-10' />
                </Link>
                <p className='mx-3 font-bold text-xl'>ARGS</p>
            </div>
            <div className="navbar-end flex gap-3">
                <p>Already have an account?</p>
                <Link to={"/login"}>
                    <AppButton btnText={"LOGIN"} className={"w-[120px] h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} />
                </Link>
            </div>
        </div>
    )
}

export default SignUpNavBar