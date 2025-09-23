import React from 'react'
import Home from './views/Home'
import Bg from './views/Bg'
import { Route, Routes } from 'react-router-dom'
import SignUp from './views/SignUp'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Bg/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
