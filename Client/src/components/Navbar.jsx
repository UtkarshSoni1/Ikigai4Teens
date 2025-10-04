import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='h-14 w-full flex justify-between fixed z-50'>

        <div className='h-full w-[40%] bg-black/40 backdrop-blur-lg ml-3 mt-3 text-white flex items-center gap-20 pl-10 rounded-4xl text-lg font-semibold hover:bg-[#1c1327] delay-100 duration-100 ease-in'>
            <a href="">
                <div className='h-full w-1/5 border-white '>Home</div>
            </a>
            <a href="">
                <div className='h-full w-1/5 border-white '>Guidance</div>
            </a>
            <a href="">
                <div className='h-full w-1/5 border-white text-nowrap'>About Us</div>
            </a>
            <a href="">
                <div className='h-full w-1/5 border-white '>Contact</div>
            </a>
        </div>
        <div className='h-full w-1/8 mt-3 mr-3 text-black flex justify-center items-center gap-2'>
            <Link to="/signUp" className='h-4/5 w-1/2 flex items-center justify-center border-2 border-black rounded-2xl'>
            <div >Sign-up</div>      
            </Link>
            <Link to="/login" className='h-4/5 w-1/2 flex items-center justify-center bg-[#12046b] text-white rounded-2xl font-semibold text-xl'>
                <div >Login</div>      
            </Link>
        </div>
      </div>
  )
}

export default Navbar
