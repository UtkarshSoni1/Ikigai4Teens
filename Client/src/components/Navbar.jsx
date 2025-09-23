import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='h-1/15 w-full flex justify-between'>

        <div className='h-full w-[40%] bg-black backdrok ml-3 mt-3 text-white flex items-center gap-20 pl-10 rounded-xl text-lg font-semibold hover:bg-[#1c1327] '>
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
        <div className='h-full w-1/8 mt-3 mr-3 text-white flex justify-center items-center gap-2'>
            <Link to="/signUp" className='h-4/5 w-1/2 flex items-center justify-center border-2 border-white rounded-2xl'>
            <div >Sign-up</div>      
            </Link>
            <Link to="/login" className='h-4/5 w-1/2 flex items-center justify-center bg-[#d3fb52] text-black rounded-2xl font-semibold text-xl'>
                <div >Login</div>      
            </Link>
        </div>
      </div>
  )
}

export default Navbar
