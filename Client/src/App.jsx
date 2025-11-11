import React from 'react'
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom'
import SignUp from './views/SignUp'
import Login from './views/Login'
import ChatInterface from './views/ChatInterface'
import Dashboard from './views/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:userId' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/alterSign' element={<SignUp/>}/>
      <Route path='/chat' element={<ChatInterface/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </>
  )
}

export default App
