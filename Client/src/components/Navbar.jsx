import React from 'react'
import { Link,  useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react';
import gradient from '../assets/Gradient.png';
import axios from 'axios';

const Navbar = () => {

    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
  
  const handleLogout = async () => {
    const res = await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
    if (res.data.success) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      sessionStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className='h-14 w-full flex justify-between fixed z-50'>
        <div className='h-full w-[40%] bg-black/40 backdrop-blur-lg relative  ml-3 mt-3 text-white flex items-center gap-20 pl-10 rounded-4xl text-lg font-semibold hover:bg-[#1c1327] delay-100 duration-100 ease-in overflow-hidden'>
            <img src={gradient} alt="" className='absolute inset-0 h-full w-full object-cover z-0 pointer-events-none '/>
            <Link>
                <div className='relative h-full w-1/5 border-white z-10'>Home</div>
            </Link>
            <Link to="/chat">
                <div className='relative h-full w-1/5 border-white z-10'>Guidance</div>
            </Link>
            <Link to='/about'>
                <div className='relative h-full w-1/5 border-white text-nowrap z-10'>About Us</div>
            </Link>
            <Link to='/contact'>
                <div className='relative h-full w-1/5 border-white z-10'>Contact</div>
            </Link>
        </div>
        {!isLoggedIn && (<div className='h-full w-1/8 mt-3 mr-3 text-black flex justify-center items-center gap-2'>
            <Link to="/signUp" className='h-4/5 w-1/2 flex items-center justify-center bg-white font-semibold rounded-2xl text-xl'>
            <div >SignIn</div>      
            </Link>
            <Link to="/login" className='h-4/5 w-1/2 flex items-center justify-center bg-black text-white rounded-2xl font-semibold text-xl'>
                <div >Login</div>      
            </Link>
        </div>)}
        {isLoggedIn && (<div className='h-full w-1/8 mt-3 mr-3 text-white flex justify-center items-center gap-2'>
            <Link to="/"  onClick={handleLogout} className='h-4/5 w-1/2 flex items-center justify-center bg-black font-semibold rounded-2xl text-xl'>
            <div >Logout</div>      
            </Link>
            
        </div>)}
      </div>
  )
}

export default Navbar
