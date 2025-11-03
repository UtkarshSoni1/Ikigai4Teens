import React from 'react'
import bg from "../assets/bg_night.webp"

const Background = () => {
  return (
    <>
    <div className='h-screen w-[100vw] z-0 fixed '>
        <img src={bg} alt="" className="w-full h-full object-cover pointer-events-none"/>
    </div>
    </>
  )
}

export default Background
