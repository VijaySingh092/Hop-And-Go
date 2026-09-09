import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen '>
        <Link to='/home' className='fixed right h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=" text-lg font-medium right-2 top-2 ri-home-5-line"></i>
        </Link>
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='h-1/2 p-4'>
      <div className='flex items-center justify-between'>
        <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jOTY0OGQyNS01ZjM4LTQ4MTctODI3NS0xNzhhZWYwNGRjMTcucG5n" alt="" />
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Arun</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>UK02 TA 9078</h4>
            <p className='text-sm text-gray-600'> Mahindra Scorpio N</p>
        </div>
      </div>
      
     <div className='flex gap-2 justify-between flex-col items-center'>
       <div className='full mt-5'> 
        
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-2-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>561/1223-B</h3>
          <p className='text-sm -mt-1 text-gray-600'>Clock Tower, New Tehri</p>
        </div>
        </div>
        <div className='flex items-center gap-5 p-3 '>
          <i className="ri-money-rupee-circle-line"></i>
        <div>
          <h3 className='text-lg font-medium'>₹200.00</h3>
          <p className='text-sm -mt-1 text-gray-600'>Payment</p>
        </div>
        </div>
        </div>
     </div>
      <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding
