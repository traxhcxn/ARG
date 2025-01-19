import React from 'react'

export function AppButton({ btnText, onClick, className }) {
  return (
    <div className={`btn btn-primary text-base-100 ${className} font-normal rounded-[10px]`} onClick={onClick}>{btnText}</div>
  )
}

export function IconButton({source, className}) {
  return (
    <div className='cursor-pointer'>
      <img src={source} className={`${className} size-10`}/>
    </div>
  )
}