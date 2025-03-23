import React, { useState } from 'react'
import { BaseInput, PasswordInput } from '../components/Inputs'
import { AppButton } from '../components/Buttons'
import { Link } from 'react-router-dom'
import { adminSignUp } from '../services/adminServices'

function SignUpContainer() {
	const [adminSignUpData, setAdminSignUpData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		institution_name: "",
		password_create: "",
		password_confirm: ""
	})
	const onDataChange = (event) => {
		setAdminSignUpData({ ...adminSignUpData, [event.target.name]: event.target.value })
	}
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [message, setMessage] = useState("");

	const onSignUpButtonClicked = async () => {
		if (adminSignUpData.password_create !== adminSignUpData.password_confirm) {
			alert("Passwords Don't Match!");
			return;
		}
		try {
			const userData = {
				first_name: adminSignUpData.first_name,
				last_name: adminSignUpData.last_name,
				email: adminSignUpData.email,
				phone: adminSignUpData.phone,
				institution_name: adminSignUpData.institution_name,
				password: adminSignUpData.password_confirm
			};

			console.log(userData);
			const res = await adminSignUp(userData);
			setResponse(res);
			setMessage("SignUp Successful");
			setError(null);
			document.getElementById("signUpModal").showModal();
		} catch (err) {
			console.log("SignUp Failed", err);
			setError(err.message || "Failed to create User");
			setResponse(null);
			setMessage("");
		}
	};
	return (
		<div className='h-max m-10 p-10 grid grid-cols-5 gap-14'>
			<div className='h-full bg-secondary col-span-2 flex flex-col gap-5 items-center px-20 py-10 rounded-3xl'>
				<p className='text-xl'>Sign up for your institution</p>
				<BaseInput placeholder={"First Name"} className={"w-full"} name={"first_name"} value={adminSignUpData.first_name} onValueChange={onDataChange} />
				<BaseInput placeholder={"Last Name"} className={"w-full"} name={"last_name"} value={adminSignUpData.last_name} onValueChange={onDataChange} />
				<BaseInput placeholder={"Email Address"} className={"w-full"} name={"email"} value={adminSignUpData.email} onValueChange={onDataChange} />
				<BaseInput placeholder={"Phone no."} className={"w-full"} name={"phone"} value={adminSignUpData.phone} onValueChange={onDataChange} />
				<BaseInput placeholder={"Institution Name"} className={"w-full"} name={"institution_name"} value={adminSignUpData.institution_name} onValueChange={onDataChange} />
				<PasswordInput placeholder={"Create Password"} className={"w-full"} name={"password_create"} value={adminSignUpData.password_create} onValueChange={onDataChange} />
				<PasswordInput placeholder={"Confirm Password"} className={"w-full"} name={"password_confirm"} value={adminSignUpData.password_confirm} onValueChange={onDataChange} />
				<AppButton btnText={"CREATE ACCOUNT"} className={"w-full mt-5"} onClick={onSignUpButtonClicked} />
				<dialog id="signUpModal" className="modal modal-bottom sm:modal-middle">
					<div className="modal-box flex flex-col items-center">
						<h3 className="font-bold text-lg">Sign Up Succesful!</h3>
						<div className="modal-action w-full flex justify-center">
							<form method="dialog">
								<Link to="/login">
									<AppButton btnText={"LOGIN"} className={"w-32"} />
								</Link>
							</form>
						</div>
					</div>
				</dialog>
				<hr className='bg-[#B2B2B2] h-1' />
				<div className='flex gap-1 justify-center'>
					<p>Not an admin?</p>
					<Link to={'/sign-up/other-users'} className='cursor-pointer'>Sign Up Here</Link>
				</div>
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