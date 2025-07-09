import React, { useState } from 'react'
import { BaseInput, BigInput } from '../components/Inputs'
import { AppButton } from '../components/Buttons'
import axios from 'axios'

function ContactContainer({ id }) {
  const [contactData, setContactData] = useState({
    contactName: "",
    email: "",
    content: ""
  })
  const [errors, setErrors] = useState({
    contactName: "",
    email: ""
  })

  // Regex patterns
  const nameRegex = /^[A-Za-z .]+$/;
  const emailRegex = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const onDataChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });

    // Validate on change
    if (name === "contactName") {
      if (!nameRegex.test(value)) {
        setErrors((prev) => ({ ...prev, contactName: "Name can only contain letters, spaces, and a full stop." }));
      } else {
        setErrors((prev) => ({ ...prev, contactName: "" }));
      }
    }
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  }

  const onSubmitButtonClicked = async () => {
    // Final validation before submit
    let valid = true;
    if (!nameRegex.test(contactData.contactName)) {
      setErrors((prev) => ({ ...prev, contactName: "Name can only contain letters, spaces, and a full stop." }));
      valid = false;
    }
    if (!emailRegex.test(contactData.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      valid = false;
    }
    if (!valid) return;
    try {
      const response = await axios.post("http://localhost:5000/arg/contact", contactData, { headers: { "Content-Type": "application/json" } })
      console.log(response.data)
      alert("Message sent successfully")
    } catch (error) {
      console.error("Error: ", error.response?.data || error.message)
      alert("Failed to send message, Try again.")
    }
  }
  return (
    <div className="w-full max-w-4xl mx-auto my-10 py-10 px-6 rounded-3xl bg-white/60 backdrop-blur-md border border-[#C0C9EE] shadow-xl relative" id={id}>
      <h2 className='text-3xl font-bold text-[#1F2343] drop-shadow-sm'>Contact Us</h2>
      <div className='flex flex-col md:flex-row mt-5 gap-8 md:gap-16'>
        <div className='flex flex-col gap-3 items-center'>
          <BaseInput label={"Name:"} className={"w-[400px]"} name={"contactName"} value={contactData.contactName} onValueChange={onDataChange} />
          {errors.contactName && <span className="text-xs text-red-500 w-[400px] text-left">{errors.contactName}</span>}
          <BaseInput label={"Email:"} className={"w-[400px]"} name={"email"} value={contactData.email} onValueChange={onDataChange} />
          {errors.email && <span className="text-xs text-red-500 w-[400px] text-left">{errors.email}</span>}
          <BigInput label={"How can we help?"} className={"w-[400px] h-[200px]"} name={"content"} value={contactData.content} onValueChange={onDataChange} />
          <AppButton btnText={"SUBMIT"} className={"w-[120px] h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onSubmitButtonClicked} />
        </div>
        <div className='flex flex-col justify-center gap-3 text-[#1F2343]'>
          <p className='font-bold text-2xl italic'>We believe in providing quick and effective solutions. Reach out to us, and we’ll be happy to assist!</p>
          <p className='text-lg'>Write to us directly: some.address@example.com</p>
          <p className='text-lg'>Talk to our customer support: 8989898989</p>
          <p className='text-lg'>Schedule a demo: 7979797979 or someone@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactContainer