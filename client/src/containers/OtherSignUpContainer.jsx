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
const [errors, setErrors] = useState({
  first_name: "",
  last_name: "",
  email: "",
  uuid: "",
  password_create: "",
  password_confirm: "",
})
const [response, setResponse] = useState(null)
const [message, setMessage] = useState("")
const [error, setError] = useState(null)

// Regex patterns
const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const uuidRegex = /^\d{6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const onDataChange = (event) => {
  const { name, value } = event.target;
  setSignUpData({ ...signUpData, [name]: value });

  // Validate on change
  if (name === 'first_name') {
	if (!nameRegex.test(value)) {
	  setErrors((prev) => ({ ...prev, first_name: 'First name can only contain letters and spaces.' }));
	} else {
	  setErrors((prev) => ({ ...prev, first_name: '' }));
	}
  }
  if (name === 'last_name') {
	if (!nameRegex.test(value)) {
	  setErrors((prev) => ({ ...prev, last_name: 'Last name can only contain letters and spaces.' }));
	} else {
	  setErrors((prev) => ({ ...prev, last_name: '' }));
	}
  }
  if (name === 'email') {
	if (!emailRegex.test(value)) {
	  setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
	} else {
	  setErrors((prev) => ({ ...prev, email: '' }));
	}
  }
  if (name === 'uuid') {
	if (!uuidRegex.test(value)) {
	  setErrors((prev) => ({ ...prev, uuid: 'UUID must be a 6-digit number.' }));
	} else {
	  setErrors((prev) => ({ ...prev, uuid: '' }));
	}
  }
  if (name === 'password_create') {
	if (!passwordRegex.test(value)) {
	  setErrors((prev) => ({ ...prev, password_create: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
	} else {
	  setErrors((prev) => ({ ...prev, password_create: '' }));
	}
  }
  if (name === 'password_confirm') {
	if (value !== signUpData.password_create) {
	  setErrors((prev) => ({ ...prev, password_confirm: "Passwords don't match." }));
	} else {
	  setErrors((prev) => ({ ...prev, password_confirm: '' }));
	}
  }
}

const onSignUpButtonClicked = async () => {
  // Final validation before submit
  let valid = true;
  if (!nameRegex.test(signUpData.first_name)) {
	setErrors((prev) => ({ ...prev, first_name: 'First name can only contain letters and spaces.' }));
	valid = false;
  }
  if (!nameRegex.test(signUpData.last_name)) {
	setErrors((prev) => ({ ...prev, last_name: 'Last name can only contain letters and spaces.' }));
	valid = false;
  }
  if (!emailRegex.test(signUpData.email)) {
	setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
	valid = false;
  }
  if (!uuidRegex.test(signUpData.uuid)) {
	setErrors((prev) => ({ ...prev, uuid: 'UUID must be a 6-digit number.' }));
	valid = false;
  }
  if (!passwordRegex.test(signUpData.password_create)) {
	setErrors((prev) => ({ ...prev, password_create: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
	valid = false;
  }
  if (signUpData.password_create !== signUpData.password_confirm) {
	setErrors((prev) => ({ ...prev, password_confirm: "Passwords don't match." }));
	valid = false;
  }
  if (!valid) return;
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
		<div className="bg-white/80 rounded-3xl p-8 md:p-10 flex flex-col gap-5 justify-center shadow-xl border border-[#C0C9EE] text-[#1F2343] w-full max-w-md mx-auto">
			<h2 className="text-xl font-bold text-center">Staff Sign Up</h2>
	  <BaseInput placeholder="First Name" className="w-full" name="first_name" value={signUpData.first_name} onValueChange={onDataChange} />
	  <span className="block text-xs text-red-500 text-left">{errors.first_name}</span>
	  <BaseInput placeholder="Last Name" className="w-full" name="last_name" value={signUpData.last_name} onValueChange={onDataChange} />
	  <span className="block text-xs text-red-500 text-left">{errors.last_name}</span>
	  <BaseInput placeholder="Email Address" className="w-full" name="email" value={signUpData.email} onValueChange={onDataChange} />
	  <span className="block text-xs text-red-500 text-left">{errors.email}</span>
	  <BaseInput placeholder="UUID" className="w-full" name="uuid" value={signUpData.uuid} onValueChange={onDataChange} />
	  <span className="block text-xs text-red-500 text-left">{errors.uuid}</span>
	  <p className="text-xs mt-[-10px] text-[#1F2343]">*UUID is a unique key provided by your institution admin.</p>
	  <PasswordInput placeholder="Create Password" className="w-full" name="password_create" value={signUpData.password_create} onValueChange={onDataChange} />
	  <span className="block text-xs text-red-500 text-left">{errors.password_create}</span>
	  <PasswordInput placeholder="Confirm Password" className="w-full" name="password_confirm" value={signUpData.password_confirm} onValueChange={onDataChange} />
	  <span className="block text-xs text-red-500 text-left">{errors.password_confirm}</span>
			<AppButton btnText="CREATE ACCOUNT" className={"w-full h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onSignUpButtonClicked} />
			<dialog id="signUpModal" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box flex flex-col items-center">
					<h3 className="font-bold text-lg">Sign Up Successful!</h3>
					<div className="modal-action w-full flex justify-center">
						<form method="dialog">
							<Link to="/login">
								<AppButton btnText="LOGIN" className={"w-[120px] h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} />
							</Link>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	)
}

export default OtherSignUpContainer