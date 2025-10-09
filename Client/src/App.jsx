import React from 'react'
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom'
import SignUp from './views/SignUp'
import Login from './views/Login'
// import { SignupForm } from './components/signup-form'
// import SignupPage from './views/page'
import ChatInterface from './views/ChatInterface'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:userId' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/alter' element={<Alter/>}/> */}
      <Route path='/alterSign' element={<SignUp/>}/>
      <Route path='/chat' element={<ChatInterface/>}/>
    </Routes>
    </>
  )
}

export default App
