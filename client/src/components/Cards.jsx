import React from 'react'
import { BaseInput, BigInput } from './Inputs'
import { AppButton } from './Buttons'

export function FeatureCard({
  feature,
  featureIcon,
  featureDesc,
  className = '',
}) {
  return (
    <div className={`min-h-[200px] flex flex-col items-start ${className}`}>
      <img
        src={featureIcon}
        alt={feature}
        className="mt-2 mb-4 max-w-[60px] max-h-[60px]"
      />
      <p className="text-lg font-medium mb-1 break-words">{feature}</p>
      <p className="text-sm break-words">{featureDesc}</p>
    </div>
  );
}

export function TestimonialCard({ className, testimonial, testimonialProfileIcon, testimonialAccount, testimonialRole, testimonialInstitution }) {
  return (
    <div className={`w-[350px] h-max py-1 px-5 bg-base-100 rounded-[20px] gap-20 ${className} flex flex-col`}>
      <p className='text-justify'>{testimonial}</p>
      <div className='flex gap-2 items-center'>
        <img src={testimonialProfileIcon} className='size-[40px]' />
        <div>
          <p className='font-semibold'>{testimonialAccount}</p>
          <p className='mt-[-5px] text-sm'>{testimonialRole}, {testimonialInstitution}</p>
        </div>
      </div>
    </div>
  )
}

export function AnalyticsCard({ source, authorName, role, institution }) {
  return (
    <div className='flex bg-base-100 p-5 rounded-xl border justify-center'>
      <img src={source} className='overflow-auto' />
    </div>
  )
}

export function AdminAnalyticsCard({ source, className, defaultChecked, authorName, role, institution }) {
  return (
    <div className='flex gap-3 bg-base-100 p-5 rounded-xl border'>
      <input type="checkbox" className={className} defaultChecked={defaultChecked} />
      <img src={source} className='overflow-auto' />
    </div>
  )
}

export function ReportAnalyticsCard({ source, authorName, role, institution }) {
  return (
    <div className='flex flex-col items-center bg-base-100 p-5 rounded-xl border gap-5'>
      <BaseInput className={'w-full'} placeholder={'Enter Heading'} />
      <img src={source} className='overflow-auto' />
      <BigInput className={'w-full'} placeholder={'Enter Description'} />
      <AppButton btnText={"Add to Report"} />
    </div>
  )
}