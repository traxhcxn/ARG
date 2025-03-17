import React from 'react'
import { BaseInput, Checkbox, PasswordInput } from '../components/Inputs'
import {AppButton} from './Buttons'
import { Link } from 'react-router-dom'

export function OtherLoginForm() {
    return (
        <div className='flex flex-col gap-5'>
            <BaseInput placeholder={"Email Address"} className={"w-full"} />
            <BaseInput placeholder={"UUID"} className={"w-full"} />
            <p className='text-xs mt-[-20px] text-center'>*UUID is a unique key provided by your institution.</p>
            <PasswordInput placeholder={"Password"} />
            <Checkbox label={"Remember me"} className={"mt-[-16px]"} />
            <AppButton btnText={"LOGIN"} className={"w-full mt-5"} onClick={()=>document.getElementById('toStaffLoginTemp').click()}/>
            <Link to={'/staff'} id='toStaffLoginTemp'></Link>
        </div>
    )
}

export function AdminLoginForm() {
  return (
    <div className='flex flex-col gap-5'>
        <BaseInput placeholder={"Email Address"} className={"w-full"}/>
        <PasswordInput placeholder={"Password"} className={"w-full"}/>
        <AppButton btnText={"LOGIN"} className={"w-full mt-5"} onClick={()=>document.getElementById('toInsAdminLogin').click()}/>
        <Link to={'/institution-admin'} id='toInsAdminLogin'></Link>
    </div>
  )
}

export function GuestLoginForm() {
	return(
		<div className='flex flex-col gap-5'>
			<BaseInput placeholder={"Enter Institution name"} className={"w-full"}/>
			<AppButton btnText={"Continue"} onClick={()=>document.getElementById('toGuestLogin').click()}/>
      <Link to={'/guest'} id='toGuestLogin'></Link>
		</div>
	)
}