import React from 'react'
import { BaseInput, Checkbox, PasswordInput } from '../components/Inputs'
import AppButton from '../components/Buttons'
import { Link } from 'react-router-dom'

function LoginContainer() {
  return (
    <div className='bg-secondary h-max w-1/3 pt-10 px-16 flex flex-col gap-5'>
        <p className='text-lg text-center'>Log in to your account</p>
        <BaseInput placeholder={"Email Address"} className={"w-full"}/>
        <BaseInput placeholder={"UUID"} className={"w-full"}/>
        <p className='text-xs mt-[-20px]'>*UUID is a unique key provided by your institution/department admins.</p>
        <PasswordInput placeholder={"Password"}/>
        <Checkbox label={"Remember me"} className={"mt-[-16px]"}/>
        <AppButton btnText={"LOGIN"} className={"w-full mt-5"}/>
        <hr className='bg-[#B2B2B2] h-1'/>
        <div className='flex gap-1 justify-center pb-10'>
            <p>Don't have an account?</p>
            <Link to={'/sign-up'}><a className='cursor-pointer'>Sign Up</a></Link>
        </div>
    </div>
  )
}

export default LoginContainer