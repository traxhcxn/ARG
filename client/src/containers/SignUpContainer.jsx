import React from 'react'
import { BaseInput, PasswordInput } from '../components/Inputs'
import AppButton from '../components/Buttons'

function SignUpContainer() {
  return (
    <div className='h-max m-10 p-10 grid grid-cols-5 gap-14'>
        <div className='h-full bg-secondary col-span-2 flex flex-col gap-5 items-center px-20 py-10 rounded-3xl'>
            <p className='text-xl'>Sign up for your institution</p>
            <BaseInput placeholder={"First Name"} className={"w-full"}/>
            <BaseInput placeholder={"Last Name"} className={"w-full"}/>
            <BaseInput placeholder={"Email Address"} className={"w-full"}/>
            <BaseInput placeholder={"Phone no."} className={"w-full"}/>
            <BaseInput placeholder={"Institution Name"} className={"w-full"}/>
            <PasswordInput placeholder={"Create Password"} className={"w-full"}/>
            <PasswordInput placeholder={"Confirm Password"} className={"w-full"}/>
            <AppButton btnText={"CREATE ACCOUNT"} className={"w-full mt-5"}/>
        </div>
        <div className='col-span-3 flex flex-col gap-5'>
            <p className='text-xl font-semibold text-center'>Join us and streamline your annual reports with ease</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. </p>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. </p>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. </p>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec vehicula lectus, et hendrerit ante. Sed porttitor facilisis quam, eu euismod quam ullamcorper eu. </p>
        </div>
    </div>
  )
}

export default SignUpContainer