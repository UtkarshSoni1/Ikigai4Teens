import React from 'react'
import Home from './views/Home'
import Bg from './views/Bg'
import { Route, Routes } from 'react-router-dom'
import SignUp from './views/SignUp'
import Login from './views/Login'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Bg/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
