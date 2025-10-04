import React from 'react'
import bg from "../assets/bg_night.webp"

const Background = () => {
  return (
    <>
    <div className='h-screen w-[100vw] z-0 fixed '>
        <img src={bg} alt="" className='object-cover'/>
    </div>
    </>
  )
}

export default Background
