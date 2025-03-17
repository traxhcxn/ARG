import React from 'react'
import {AppButton} from '../components/Buttons'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="hero bg-base-100 h-max z-0 pt-20 pb-5">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Transfom how you prepare annual reports</h1>
                    <p className="py-6 italic">"Automate data integration, analysis, and visualization effortlessly, saving time and reducing errors for smarter, impactful reporting."</p>
                    <Link to={"/sign-up"}>
                    <AppButton btnText={"Get Started"} className={"w-[175px] h-[50px]"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero