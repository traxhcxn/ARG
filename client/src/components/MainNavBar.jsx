import React from 'react'
import {AppButton} from './Buttons'
import { Link } from 'react-router-dom'

function MainNavBar() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({behaviour: 'smooth'})
    }
    return (
        <div className="navbar bg-base-100 px-10 fixed z-10">
            <div className="navbar-start">
                <Link to={"/"}>
                    <img src='/logo.png' className='size-10' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><a onClick={()=>scrollTo('about')}>ABOUT</a></li>
                    <li><a onClick={()=>scrollTo('contact')}>CONTACT</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <Link to={"/sign-up"}>
                    <AppButton btnText={"SIGN UP"} className={"w-[120px] h-[50px]"} />
                </Link>
                <Link to={"/login"}>
                    <a>LOGIN</a>
                </Link>
            </div>
        </div>
    )
}

export default MainNavBar