import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
    <div className='bg-cover bg-center 
    bg-[url(https://kmphitech.com/wp-content/uploads/2021/08/Taxi-Booking-banner-1.svg)] 
    h-screen pt-2 flex justify-between flex-col w-full bg-gray-300 '>
      <img className='w-18 ml-8 ' src="https://images.seeklogo.com/logo-png/6/2/hop-go-logo-png_seeklogo-67856.png" alt="" />
      <div className='bg-white pb-7 py-4 px-4'>
        <h2 className='text-2xl font-bold'>Start Now</h2>
        <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
      </div>
    </div>
    </div>
  )
}

export default Start
