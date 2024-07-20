import React from 'react'
import Navbar from './Navbar'

function AboutUs() {
  return (
    <>
    <Navbar/>
    <div className='mt-20'>
      <div className='bg-[#EEF5FF] mt-[20px] max-w-[600px] mx-auto min-h-[400px] rounded-lg'>
        <p className='font-bold text-center text-3xl mt-10 text-blue-700'>About us</p>
        <p className='text-xl mt-6 px-10'>
          ACCREDIAN is India's pioneering academic institution dedicated to transforming and upskilling working professionals in the domains of Product Management, Data Science & AI, General management and other professional upskilling programs.
          <br /><br />

          Our mission is crystal clear - to produce the sharpest minds, who will lead tomorrow's world with their astute analytical skills and intuitive decision-making abilities. 

          We are not just a learning platform, but a catalyst that ignites the #PassionForLearning in every individual who walks through our doors.
        </p>
      </div>      
    </div>
    </>
    
  )
}

export default AboutUs