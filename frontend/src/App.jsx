import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import Login from './pages/UserLogin'
import SignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/Home'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import { UserDataContext } from './context/userContext'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'

const App = () => {

 
  return (
    <div>
     <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/riding' element={<Riding/>}/>
      <Route path='/captain-riding' element={<CaptainRiding/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/captain-login' element={<CaptainLogin/>}/>
      <Route path='/captain-signup' element={<CaptainSignUp/>}/>
      <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
      <Route path='/user/logout' element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>
      <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}/>
     </Routes>
    </div>
  )
}

export default App
