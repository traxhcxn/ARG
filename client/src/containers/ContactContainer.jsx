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
  const onDataChange = (event) => {
    setContactData({ ...contactData, [event.target.name]: event.target.value })
  }
  const onSubmitButtonClicked = async () => {
    try {
      const response = await axios.post("http://localhost:5000/arg/contact", contactData, { headers: { "Content-Type": "application/json" } })
      console.log(response.data)
      alert("Message sent successfully")
    } catch(error) {
      console.error("Error: ", error.response?.data || error.message)
      alert("Failed to send message, Try again.")
    }
  }
  return (
    <div className='px-20 my-10 bg-secondary py-10' id={id}>
      <h2 className='text-3xl font-bold'>Contact Us</h2>
      <div className='flex mt-5 gap-16'>
        <div className='flex flex-col gap-3 items-center'>
          <BaseInput label={"Name:"} className={"w-[400px]"} name={"contactName"} value={contactData.contactName} onValueChange={onDataChange} />
          <BaseInput label={"Email:"} className={"w-[400px]"} name={"email"} value={contactData.email} onValueChange={onDataChange} />
          <BigInput label={"How can we help?"} className={"w-[400px] h-[200px]"} name={"content"} value={contactData.content} onValueChange={onDataChange} />
          <AppButton btnText={"SUBMIT"} className={"w-[220px]"} onClick={onSubmitButtonClicked} />
        </div>
        <div className='flex flex-col justify-center gap-3'>
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