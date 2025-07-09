import React from 'react'

function AboutContainer({ id }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-10 py-16 px-6 rounded-3xl bg-white/60 backdrop-blur-md border border-[#C0C9EE] shadow-xl relative" id={id}>
      <h2 className='text-3xl font-bold text-[#1F2343] drop-shadow-sm'>About</h2>
      <p className='text-justify mt-3 text-[#1F2343]'>At ARG, we are passionate about simplifying data management and empowering institutions with innovative tools designed to enhance efficiency and productivity. Our mission is to bridge the gap between complex data processes and user-friendly solutions, making technology accessible for all.Founded with the vision of transforming how organizations handle data, we specialize in offering cutting-edge features like seamless data collection, effortless visualization, and customizable reporting. Our intuitive dashboards and ability to access data from anywhere enable teams to collaborate and make informed decisions in real time.We believe in delivering solutions that not only meet your immediate needs but also grow with your organization. Our team of dedicated professionals is committed to ensuring that our platform is adaptable, reliable, and easy to use, regardless of technical expertise.With a focus on innovation and customer satisfaction, we strive to build tools that empower educational institutions, businesses, and organizations across industries to achieve their goals more effectively. Whether you are streamlining workflows, enhancing collaboration, or improving insights, we’re here to support you every step of the way.Join us in transforming the way you work with data. Together, we can unlock new opportunities and help you focus on what matters most—making a meaningful impact. </p>
    </div>
  )
}

export default AboutContainer