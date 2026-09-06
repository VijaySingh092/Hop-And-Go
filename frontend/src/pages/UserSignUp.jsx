import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const UserSignUp = () => {

  const[email,setEmail]=useState('')
  const[password,setPassword] =useState('')
  const[firstName,setFirstName] = useState('')
  const[lastName,setLastName] = useState('')
  const[userData,setUserData] = useState({})

  const submitHandler =(e)=>{
    e.preventDefault()
    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      password:password,
      email:email
    })
console.log(userData)
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
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

          <button
          className='bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-lg'>
            Sign Up</button>

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

export default UserSignUp
