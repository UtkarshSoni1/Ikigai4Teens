import React from 'react'
import Home from './views/Home'
import Bg from './views/Bg'
import { Route, Routes } from 'react-router-dom'
import SignUp from './views/SignUp'
import Login from './views/Login'
import Alter from './views/Alter'
import { SignupForm } from './components/signup-form'
import SignupPage from './views/page'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Bg/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/alter' element={<Alter/>}/>
      <Route path='/alterSign' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
