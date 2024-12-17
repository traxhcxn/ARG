import React from 'react'
import { BaseInput, Checkbox, PasswordInput } from '../Global/Inputs'
import AppButton from '../Global/Buttons'

export function OtherLoginForm() {
    return (
        <div className='flex flex-col gap-5'>
            <BaseInput placeholder={"Email Address"} className={"w-full"} />
            <BaseInput placeholder={"UUID"} className={"w-full"} />
            <p className='text-xs mt-[-20px] text-center'>*UUID is a unique key provided by your institution.</p>
            <PasswordInput placeholder={"Password"} />
            <Checkbox label={"Remember me"} className={"mt-[-16px]"} />
            <AppButton btnText={"LOGIN"} className={"w-full mt-5"} />
        </div>
    )
}

export function AdminLoginForm() {
  return (
    <div className='flex flex-col gap-5'>
        <BaseInput placeholder={"Email Address"} className={"w-full"}/>
        <PasswordInput placeholder={"Password"} className={"w-full"}/>
        <AppButton btnText={"LOGIN"} className={"w-full mt-5"}/>
    </div>
  )
}
