import React from 'react'
import { Link } from 'react-router-dom'
import { AdminLoginForm, OtherLoginForm } from '../components/LoginForms'
import { useState } from 'react'
import { GuestLoginForm } from '../components/LoginForms'
import { BaseInput } from '../components/Inputs'
import { AppButton } from '../components/Buttons'

function LoginContainer() {
	const [role, setRole] = useState('')
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		uuid: "",
		institution_name: ""
	})
	const onRoleSelect = (event) => {
		setRole(event.target.value)
		setFormData({
			email: '',
			password: '',
			uuid: '',
			institution_name: ''
		})
	}
	return (
		<div className='bg-secondary h-max w-1/3 pt-10 px-16 flex flex-col gap-5 rounded-[20px]'>
			<p className='text-lg text-center'>Log in to your account</p>
			<select className="select select-bordered w-full" onChange={onRoleSelect} defaultValue={''}>
				<option disabled value={''}>Select a Role</option>
				<option value={'Admin'}>Admin</option>	
				<option value={'Staff'}>Staff</option>
				<option value={'Guest'}>Guest</option>
			</select>
			{role === "Admin" && <AdminLoginForm formData={formData} setFormData={setFormData}/>}
			{role === "Staff" && <OtherLoginForm formData={formData} setFormData={setFormData}/>}
			{role === "Guest" && <GuestLoginForm formData={formData} setFormData={setFormData}/>}
			<hr className='bg-[#B2B2B2] h-1' />
			<div className='flex gap-1 justify-center pb-10'>
				<p>Don't have an account?</p>
				<Link to='/sign-up' className='cursor-pointer'>Sign Up</Link>
			</div>
		</div>
	)
}



export default LoginContainer