import React from 'react'

export function BaseInput({ placeholder, className, label, value, onValueChange, name }) {
  return (
    <div className='w-full'>
      <p className='ml-1'>{label}</p>
      <input type="text" placeholder={placeholder} className={`input input-bordered ${className}`} value={value} name={name} onChange={onValueChange} />
    </div>
  )
}

export function SettingsBaseInput({ placeholder, className, label, value, onValueChange }) {
  return (
    <div className='w-full flex items-center gap-3'>
      <p>{label}</p>
      <input type="text" placeholder={placeholder} className={`input input-bordered ${className} w-96`} value={value} onChange={onValueChange} />
    </div>
  )
}

export function BigInput({ placeholder, className, label, value, onValueChange, name }) {
  return (
    <div className='w-full'>
      <p className='ml-1'>{label}</p>
      <textarea placeholder={placeholder} className={`textarea textarea-bordered textarea-lg text-[16px] ${className}`} name={name} value={value} onChange={onValueChange}></textarea>
    </div>
  )
}

export function PasswordInput({ placeholder, name, value, onValueChange }) {
  return (
    <label className="input input-bordered flex items-center gap-2 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          fillRule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clipRule="evenodd" />
      </svg>
      <input type="password" className="grow w-full" placeholder={placeholder} name={name} value={value} onChange={onValueChange} />
    </label>
  )
}

export function SettingsPasswordInput({ label, placeholder }) {
  return (
    <div className='flex justify-between items-center w-full'>
      <p>{label}</p>
      <input type="password" placeholder={placeholder} className='input input-bordered w-96'/>
    </div>
  )
}


export function Checkbox({ label, className }) {
  return (
    <div className={`form-control ${className}`}>
      <div className="cursor-pointer flex gap-1">
        <input type="checkbox" defaultChecked className="checkbox checkbox-sm rounded-md" />
        <span className="label-text">{label}</span>
      </div>
    </div>
  )
}
