import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        props.setVehiclePanel(false)
      }}><i className="text-xl text-gray-250 ri-arrow-down-wide-line"></i></h5>
     
      <h3 className='text-3xl font-semibold mb-5'>Choose a Vehicle</h3>
      
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }}  className='flex border-2 active:border-black  mb-2 rounded-xl p-3 items-center justify-between w-full'>
        <img className='h-15' 
        src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jOTY0OGQyNS01ZjM4LTQ4MTctODI3NS0xNzhhZWYwNGRjMTcucG5n" alt="" />

        <div className='ml-2 w-1/2'>
          <h4 className='font-medium text-base'>Go <span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className='font-medium text-sm'>5 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹200.00</h2>
      </div>
      
       <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }}  className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between w-full'>
        <img className='ml-2 h-12' 
        src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/Regular/MotorcycleOrangeYellowplate-079-0.png" alt="" />

        <div className=' w-1/2'>
          <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>2</span></h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹100.00</h2>
      </div>

       <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }}  className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between w-full'>
        <img className='ml-2 h-12' 
        src="https://tb-static.uber.com/prod/udam-assets/4e718d5c-e431-59c5-acb5-ac40c26c24df.webp" alt="" />

        <div className=' w-1/2'>
          <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹120.00</h2>
      </div>
    </div>
  )
}

export default VehiclePanel
