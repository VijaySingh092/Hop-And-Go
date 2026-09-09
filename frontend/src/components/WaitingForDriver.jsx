import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        props.waitingForDriver(false)
      }}><i className="text-xl text-gray-250 ri-arrow-down-wide-line"></i></h5>

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
         <i className="ri-map-pin-user-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>561/1223-B</h3>
          <p className='text-sm -mt-1 text-gray-600'>Clock Tower, New Tehri</p>
        </div>
        </div>
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
    </div>
  )
}

export default WaitingForDriver
