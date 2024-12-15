import React from 'react'
import testimonialList from '../data/testimonialList'
import { TestimonialCard } from '../components/Cards'

function TestimonialContainer() {
  return (
    <div className='mx-20 my-10'>
        <div>
            <h2 className='text-3xl font-bold'>Testimonials</h2>
            <p>Hear from those who transformed their reporting journey: Real Stories of Success, Impact and Smarter Solutions in Action!</p>
        </div>
        <div className='carousel carousel-center bg-base-100 w-full space-x-10 py-4 mt-5'>
          {testimonialList.map((t) => (<TestimonialCard className={"carousel-item"} testimonial={t.testimonial} testimonialProfileIcon={t.testimonialProfileIcon} testimonialAccount={t.testimonalAccount} testimonialRole={t.testimonialRole} testimonialInstitution={t.testimonialInstitution} />))}
        </div>
    </div>
  )
}

export default TestimonialContainer