import React from 'react'
import { Link } from 'react-router-dom'
import { AdminLoginForm, OtherLoginForm } from '../components/LoginForms'
import { useState } from 'react'

function LoginContainer() {
	const [role, setRole] = useState('')
	const onRoleSelect = (event) => {
		setRole(event.target.value)
	}
	return (
		<div className='bg-secondary h-max w-1/3 pt-10 px-16 flex flex-col gap-5 rounded-[20px]'>
			<p className='text-lg text-center'>Log in to your account</p>
			<select className="select select-bordered w-full" onChange={onRoleSelect} defaultValue={''}>
				<option disabled selected value={''}>Select a Role</option>
				<option value={'Admin'}>Institution Admin</option>
				<option value={'Other'}>Department Admin</option>
				<option value={'Other'}>Staff</option>
			</select>
			{role === 'Admin'? <AdminLoginForm /> : <OtherLoginForm />}
			<hr className='bg-[#B2B2B2] h-1' />
			<div className='flex gap-1 justify-center pb-10'>
				<p>Don't have an account?</p>
				<Link to={'/sign-up'}><a className='cursor-pointer'>Sign Up</a></Link>
			</div>
		</div>
	)
}

export default LoginContainer