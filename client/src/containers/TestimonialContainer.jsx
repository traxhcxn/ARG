import React from 'react'
import testimonialList from '../data/static/testimonialList'
import { TestimonialCard } from '../components/Cards'

function TestimonialContainer() {
  return (
    <div className="w-full max-w-6xl mx-auto h-max px-8 py-10 flex flex-col items-center rounded-3xl bg-white/70 backdrop-blur-md border border-[#C0C9EE] shadow-xl relative">
      <div className='text-center mb-8'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-[#1F2343] drop-shadow-sm mb-2'>Testimonials</h2>
        <p className='text-[#1F2343] text-base md:text-lg'>Hear from those who transformed their reporting journey: Real Stories of Success, Impact and Smarter Solutions in Action!</p>
      </div>
      <div className='carousel carousel-center w-full space-x-10 py-4 mt-5'>
        {testimonialList.map((t, idx) => (
          <div key={idx} className="carousel-item rounded-2xl p-[2px] bg-gradient-to-br from-[#8CCDEB] via-[#C0C9EE] to-white">
            <div className="bg-white rounded-2xl h-full w-full p-6 flex flex-col justify-between shadow hover:shadow-lg transition-shadow">
              <TestimonialCard testimonial={t.testimonial} testimonialProfileIcon={t.testimonialProfileIcon} testimonialAccount={t.testimonialAccount} testimonialRole={t.testimonialRole} testimonialInstitution={t.testimonialInstitution} className="w-full h-full p-0 bg-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialContainer