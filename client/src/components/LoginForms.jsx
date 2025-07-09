import React, { useState } from 'react'
import { BaseInput, Checkbox, PasswordInput } from '../components/Inputs'
import { AppButton } from './Buttons'
import { Link, useNavigate } from 'react-router-dom'
import { adminLogin } from '../services/adminServices'
import { staffLogin } from '../services/staffServices'

export function OtherLoginForm({ formData, setFormData }) {
  // Regex patterns
  const uuidRegex = /^\d{6}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  const [fieldErrors, setFieldErrors] = useState({ uuid: '', password: '' });
  const onDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'uuid') {
      if (!uuidRegex.test(value)) {
        setFieldErrors((prev) => ({ ...prev, uuid: 'UUID must be a 6-digit number.' }));
      } else {
        setFieldErrors((prev) => ({ ...prev, uuid: '' }));
      }
    }
    if (name === 'password') {
      if (!passwordRegex.test(value)) {
        setFieldErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
      } else {
        setFieldErrors((prev) => ({ ...prev, password: '' }));
      }
    }
  }
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const onLoginButtonClicked = async () => {
    // Final validation before submit
    let valid = true;
    if (!uuidRegex.test(formData.uuid)) {
      setFieldErrors((prev) => ({ ...prev, uuid: 'UUID must be a 6-digit number.' }));
      valid = false;
    }
    if (!passwordRegex.test(formData.password)) {
      setFieldErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
      valid = false;
    }
    if (!valid) return;
    try {
      const response = await staffLogin(formData)
      navigate('/staff')
    } catch (error) {
      console.error("Login error: ", error)
      setError(error.message || "Login Failed")
    }
  }
  return (
    <div className='flex flex-col gap-5'>
      <BaseInput placeholder={"UUID"} className={"w-full"} name={"uuid"} value={formData.uuid} onValueChange={onDataChange} />
      <span className="block text-xs text-red-500 text-left">{fieldErrors.uuid}</span>
      <p className='text-xs mt-[-20px] text-center'>*UUID is a unique key provided by your institution.</p>
      <PasswordInput placeholder={"Password"} name={"password"} value={formData.password} onValueChange={onDataChange} />
      <span className="block text-xs text-red-500 text-left">{fieldErrors.password}</span>
      <Checkbox label={"Remember me"} className={"mt-[-16px]"} />
      <AppButton btnText={"LOGIN"} className={"w-full h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onLoginButtonClicked} />
    </div>
  )
}

export function AdminLoginForm({ formData, setFormData }) {
  // Regex patterns
  const emailRegex = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  const [fieldErrors, setFieldErrors] = useState({ email: '', password: '' });
  const onDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setFieldErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      } else {
        setFieldErrors((prev) => ({ ...prev, email: '' }));
      }
    }
    if (name === 'password') {
      if (!passwordRegex.test(value)) {
        setFieldErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
      } else {
        setFieldErrors((prev) => ({ ...prev, password: '' }));
      }
    }
  }
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const onLoginButtonClicked = async () => {
    // Final validation before submit
    let valid = true;
    if (!emailRegex.test(formData.email)) {
      setFieldErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      valid = false;
    }
    if (!passwordRegex.test(formData.password)) {
      setFieldErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
      valid = false;
    }
    if (!valid) return;
    try {
      const response = await adminLogin(formData)
      navigate("/institution-admin")
    } catch (error) {
      console.error("Login error", error)
      setError(error.message || "Login Failed")
    }
  }
  return (
    <div className='flex flex-col gap-5'>
      <BaseInput placeholder={"Email Address"} className={"w-full"} name={"email"} value={formData.email} onValueChange={onDataChange} />
      <span className="block text-xs text-red-500 text-left">{fieldErrors.email}</span>
      <PasswordInput placeholder={"Password"} className={"w-full"} name={"password"} value={formData.password} onValueChange={onDataChange} />
      <span className="block text-xs text-red-500 text-left">{fieldErrors.password}</span>
      <AppButton btnText={"LOGIN"} className={"w-full h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onLoginButtonClicked} />
      <Link to={'/institution-admin'} id='toInsAdminLogin'></Link>
    </div>
  )
}

export function GuestLoginForm({ formData, setFormData }) {
  // Regex pattern
  const institutionRegex = /^[A-Za-z ]+$/;
  const [fieldErrors, setFieldErrors] = useState({ institution_name: '' });
  const onDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'institution_name') {
      if (!institutionRegex.test(value)) {
        setFieldErrors((prev) => ({ ...prev, institution_name: 'Institution name can only contain letters and spaces.' }));
      } else {
        setFieldErrors((prev) => ({ ...prev, institution_name: '' }));
      }
    }
  }
  const navigate = useNavigate()
  const onLoginButtonClicked = async () => {
    // Final validation before submit
    if (!institutionRegex.test(formData.institution_name)) {
      setFieldErrors((prev) => ({ ...prev, institution_name: 'Institution name can only contain letters and spaces.' }));
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/institutions/${formData.institution_name}`)
      const data = await response.json()
      if (data.exists) {
        navigate('/guest')
      } else {
        alert("Institution not Found, check your Input.")
      }
    } catch (error) {
      console.error(error)
      alert("Error Verifying institution")
    }
  }
  return (
    <div className='flex flex-col gap-5'>
      <BaseInput placeholder={"Enter Institution name"} className={"w-full"} name={"institution_name"} value={formData.institution_name} onValueChange={onDataChange} />
      <span className="block text-xs text-red-500 text-left">{fieldErrors.institution_name}</span>
      <AppButton btnText={"Continue"} className={"w-full h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onLoginButtonClicked} />
      <Link to={'/guest'} id='toGuestLogin'></Link>
    </div>
  )
}