import React, { useState } from 'react'
import { BaseInput, Checkbox, PasswordInput } from '../components/Inputs'
import { AppButton } from './Buttons'
import { Link, useNavigate } from 'react-router-dom'
import { adminLogin } from '../services/adminServices'
import { staffLogin } from '../services/staffServices'

export function OtherLoginForm({ formData, setFormData }) {
  const onDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const onLoginButtonClicked =  async () => {
    try{
      const response = await staffLogin(formData)
    navigate('/toStaffLoginTemp')
    } catch(error) {
      console.error("Login error: ", error)
      setError(error.message || "Login Failed")
    }
  }
  return (
    <div className='flex flex-col gap-5'>
      <BaseInput placeholder={"UUID"} className={"w-full"} name={"uuid"} value={formData.uuid} onValueChange={onDataChange} />
      <p className='text-xs mt-[-20px] text-center'>*UUID is a unique key provided by your institution.</p>
      <PasswordInput placeholder={"Password"} name={"password"} value={formData.password} onValueChange={onDataChange} />
      <Checkbox label={"Remember me"} className={"mt-[-16px]"} />
      <AppButton btnText={"LOGIN"} className={"w-full mt-5"} onClick={onLoginButtonClicked} />
      <Link to={'/staff'} id='toStaffLoginTemp'></Link>
    </div>
  )
}

export function AdminLoginForm({ formData, setFormData }) {
  const onDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const onLoginButtonClicked = async () => {
    try {
      const response = await adminLogin(formData)
      navigate("/institution-admin")
    } catch(error) {
      console.error("Login error", error)
      setError(error.message || "Login Failed")
    }
  }
  return (
    <div className='flex flex-col gap-5'>
      <BaseInput placeholder={"Email Address"} className={"w-full"} name={"email"} value={formData.email} onValueChange={onDataChange} />
      <PasswordInput placeholder={"Password"} className={"w-full"} name={"password"} value={formData.password} onValueChange={onDataChange} />
      <AppButton btnText={"LOGIN"} className={"w-full mt-5"} onClick={onLoginButtonClicked} />
      <Link to={'/institution-admin'} id='toInsAdminLogin'></Link>
    </div>
  )
}

export function GuestLoginForm({ formData, setFormData }) {
  const onDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const navigate = useNavigate()
  const onLoginButtonClicked = async () => {
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
      <AppButton btnText={"Continue"} onClick={onLoginButtonClicked} />
      <Link to={'/guest'} id='toGuestLogin'></Link>
    </div>
  )
}