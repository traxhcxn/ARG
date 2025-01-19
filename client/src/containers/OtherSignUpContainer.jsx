import React from 'react'
import { BaseInput, PasswordInput } from '../components/Inputs'
import {AppButton} from '../components/Buttons'
import { Link } from 'react-router-dom'

function OtherSignUpContainer() {
	return (
		<div className='h-full bg-secondary w-1/3 flex flex-col gap-6 items-center px-14 py-10 rounded-3xl my-28'>
			<p className='text-xl'>Staff Sign Up</p>
			<BaseInput placeholder={"First Name"} className={"w-full"} />
			<BaseInput placeholder={"Last Name"} className={"w-full"} />
			<BaseInput placeholder={"Email Address"} className={"w-full"} />
			<BaseInput placeholder={"UUID"} className={"w-full"} />
			<p className='text-xs mt-[-20px]'>*UUID is a unique key provided by your institution admin.</p>
			<PasswordInput placeholder={"Create Password"} className={"w-full"} />
			<PasswordInput placeholder={"Confirm Password"} className={"w-full"} />
			<AppButton btnText={"CREATE ACCOUNT"} className={"w-full mt-5"} onClick={() => document.getElementById('signUpModal').showModal()}/>
			<dialog id="signUpModal" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box flex flex-col items-center">
					<h3 className="font-bold text-lg">Sign Up Succesful!</h3>
					<div className="modal-action w-full flex justify-center">
						<form method="dialog">
							<AppButton btnText={"LOGIN"} className={"w-32"} onClick={() => document.getElementById('loginLink').click()} />
							<Link to={'/login'} id='loginLink'></Link>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	)
}

export default OtherSignUpContainer