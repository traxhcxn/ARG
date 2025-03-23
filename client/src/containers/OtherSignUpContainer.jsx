import React, { useState } from 'react'
import { BaseInput, PasswordInput } from '../components/Inputs'
import { AppButton } from '../components/Buttons'
import { Link } from 'react-router-dom'
import { staffSignUp } from '../services/staffServices'

function OtherSignUpContainer() {
	const [signUpData, setSignUpData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		uuid: "",
		password_create: "",
		password_confirm: "",
	})
	const onDataChange = (event) => {
		setSignUpData({ ...signUpData, [event.target.name]: event.target.value })
	}
	const [response, setResponse] = useState(null)
	const [message, setMessage] = useState("")
	const [error, setError] = useState(null)
	const onSignUpButtonClicked = async () => {
		if (signUpData.password_create !== signUpData.password_confirm) {
			alert("Passwords Don't Match!")
			return
		}
		try {
			const userData = {
				first_name: signUpData.first_name,
				last_name: signUpData.last_name,
				email: signUpData.email,
				uuid: signUpData.uuid,
				password: signUpData.password_confirm
			}
			console.log(userData)
			const res = await staffSignUp(userData)
			setResponse(res)
			setMessage("SignUp Successful")
			setError(null)
			document.getElementById("signUpModal").showModal()
		} catch (error) {
			console.log("SignUp Failed", error)
			setError(error.message || "Failed to create User")
			setMessage("")
			setResponse(null)
		}
	}
	return (
		<div className='h-full bg-secondary w-1/3 flex flex-col gap-6 items-center px-14 py-10 rounded-3xl my-28'>
			<p className='text-xl'>Staff Sign Up</p>
			<BaseInput placeholder={"First Name"} className={"w-full"} name={"first_name"} value={signUpData.first_name} onValueChange={onDataChange} />
			<BaseInput placeholder={"Last Name"} className={"w-full"} name={"last_name"} value={signUpData.last_name} onValueChange={onDataChange} />
			<BaseInput placeholder={"Email Address"} className={"w-full"} name={"email"} value={signUpData.email} onValueChange={onDataChange} />
			<BaseInput placeholder={"UUID"} className={"w-full"} name={"uuid"} value={signUpData.uuid} onValueChange={onDataChange} />
			<p className='text-xs mt-[-20px]'>*UUID is a unique key provided by your institution admin.</p>
			<PasswordInput placeholder={"Create Password"} className={"w-full"} name={"password_create"} value={signUpData.password_create} onValueChange={onDataChange} />
			<PasswordInput placeholder={"Confirm Password"} className={"w-full"} name={"password_confirm"} value={signUpData.password_confirm} onValueChange={onDataChange} />
			<AppButton btnText={"CREATE ACCOUNT"} className={"w-full mt-5"} onClick={onSignUpButtonClicked} />
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