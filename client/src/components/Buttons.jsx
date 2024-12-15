import React from 'react'

export default function AppButton({btnText, onClick, className}) {
  return (
    <div className={`btn btn-primary text-base-100 ${className} font-normal rounded-[10px]`} onClick={onClick}>{btnText}</div>
  )
}