import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignUp = () => {

  const navigate = useNavigate()

const[email,setEmail]=useState('')
  const[password,setPassword] =useState('')
  const[firstName,setFirstName] = useState('')
  const[lastName,setLastName] = useState('')

  const[vehicleColor,setVechicleColor] = useState('')
  const[vehiclePlate,setVechiclePlate] = useState('')
  const[vehicleCapacity,setVechicleCapacity] = useState('')
  const[vehicleType,setVehicleType] = useState('')

  const {captain ,setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler =async (e)=>{
    e.preventDefault()
    const captainData = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      password:password,
      email:email,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

    if(response.status===201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVechicleColor('')
    setVechicleCapacity('')
    setVechiclePlate('')
    setVehicleType('')
  }

  return (
     <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://images.seeklogo.com/logo-png/6/2/hop-go-logo-png_seeklogo-67856.png" alt="" />

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-6'>
            <input required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base' 
            type="text" placeholder='First Name'
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}/>

            <input required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base' 
            type="text" placeholder='Last Name'
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}/>
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required 
          value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
          type="email" placeholder='email@example.com'/>
          
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input required
           className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password'
           value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}/>

            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-7'>
              <input
               required
               className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
               type="text" 
               placeholder='Vehicle Color'
               onChange={(e)=>{
                setVechicleColor(e.target.value)
               }} />
               <input required
               className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
               type='text'
               placeholder='Vehicle Plate'
                onChange={(e)=>{
                setVechiclePlate(e.target.value)
               }}
               />
            </div>
            <div className='flex gap-4 mb-7'>
              <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number" 
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e)=>{
                setVechicleCapacity(e.target.value)
              }}/>
              <select 
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e)=>{
                setVehicleType(e.target.value)
              }}>
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

          <button
          className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-lg'>
            Create Captain Account</button>

            <p className='text-center'>Already have a account <Link to='/login' className='text-blue-600'>Login here</Link></p>

        </form>
      </div>

     <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy</span> and <span className='underline'>Terms of Services apply</span></p>
     </div>

    </div>
    </div>
  )
}

export default CaptainSignUp
