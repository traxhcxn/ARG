import React from 'react'
import { BaseInput, PasswordInput } from '../../components/Global/Inputs'
import AppButton from '../../components/Global/Buttons'
import { Link } from 'react-router-dom'

function SignUpContainer() {
	return (
		<div className='h-max m-10 p-10 grid grid-cols-5 gap-14'>
			<div className='h-full bg-secondary col-span-2 flex flex-col gap-5 items-center px-20 py-10 rounded-3xl'>
				<p className='text-xl'>Sign up for your institution</p>
				<BaseInput placeholder={"First Name"} className={"w-full"} />
				<BaseInput placeholder={"Last Name"} className={"w-full"} />
				<BaseInput placeholder={"Email Address"} className={"w-full"} />
				<BaseInput placeholder={"Phone no."} className={"w-full"} />
				<BaseInput placeholder={"Institution Name"} className={"w-full"} />
				<PasswordInput placeholder={"Create Password"} className={"w-full"} />
				<PasswordInput placeholder={"Confirm Password"} className={"w-full"} />
				<AppButton btnText={"CREATE ACCOUNT"} className={"w-full mt-5"} onClick={() => document.getElementById('signUpModal').showModal()} />
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
				<hr className='bg-[#B2B2B2] h-1' />
				<div className='flex gap-1 justify-center'>
					<p>Not an Institution admin?</p>
					<Link to={'/sign-up/other-users'}><a className='cursor-pointer'>Sign Up Here</a></Link>
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