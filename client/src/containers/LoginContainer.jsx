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
		<div className="bg-white/80 rounded-3xl p-8 md:p-10 flex flex-col gap-6 justify-center shadow-xl border border-[#C0C9EE] text-[#1F2343] w-full max-w-md mx-auto">
			<h2 className="text-xl font-bold text-center">Log in to your account</h2>
			<select className="select select-bordered w-full" onChange={onRoleSelect} defaultValue={''}>
				<option disabled value={''}>Select a Role</option>
				<option value={'Admin'}>Admin</option>
				<option value={'Staff'}>Staff</option>
				<option value={'Guest'}>Guest</option>
			</select>
			{role === "Admin" && <AdminLoginForm formData={formData} setFormData={setFormData}/>} 
			{role === "Staff" && <OtherLoginForm formData={formData} setFormData={setFormData}/>} 
			{role === "Guest" && <GuestLoginForm formData={formData} setFormData={setFormData}/>} 
			<hr className="bg-[#B2B2B2] h-1" />
			<div className="flex gap-1 justify-center pb-2">
				<p>Don't have an account?</p>
				<Link to='/sign-up' className='cursor-pointer underline'>Sign Up</Link>
			</div>
		</div>
	)
}



export default LoginContainer