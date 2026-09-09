import React from 'react'

const LocationSearchPanel = (props) => {
  const locations = [
    "Thdc Institute of Hydropower Engineering and Technology , New Tehri, Uttarakhand",
    "Bipin Tripati Kumoun Institute of Technology, Dhawarahat, Almora, Uttarakhand",
    "Institute of Technology Gopeshwar, Gopeshwar, Uttarakhand",
    "Institute of Technology Baun, Baun, Uttarkashi, Uttarakhand"
  ]
  return (
    
    <div>
      {
        locations.map(function(elem,idx){
          return <div key={idx} onClick={()=>{
           props.setVehiclePanel(true)
           props.setPanelOpen(false)
          }} className='flex gap-4 border-2 border-gray-50 active:border-black rounded-xl p-3 items-center my-2 justify-start'>
        <h2 className='bg-[#eee] rounded-full h-10 w-12 flex items-center justify-center'><i className="ri-map-pin-fill "></i></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
        })
      }
      
    </div>
  )
}

export default LocationSearchPanel
