import React from 'react'
import {AppButton} from '../components/Buttons'
import { Link } from 'react-router-dom'

function SignUpNavBar() {
    return (
        <div className="navbar bg-base-100 px-10 fixed z-10">
            <div className="navbar-start">
                <Link to={"/"}>
                    <img src='/logo.png' className='size-10' />
                </Link>
            </div>
            <div className="navbar-end flex gap-3">
                <p>Already have an account?</p>
                <Link to={"/login"}>
                    <AppButton btnText={"LOGIN"} className={"w-[120px] h-[50px]"} />
                </Link>
            </div>
        </div>
    )
}

export default SignUpNavBar