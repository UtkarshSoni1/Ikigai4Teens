import React from 'react'
import Navbar from '../components/Navbar'

const Bg = () => {
  return (
    <div className='bg-gradient-to-b from-black to-[#0c1327] w-full h-screen fixed bottom-0 left-0 z-40'>
      <Navbar/>
        <p className='absolute top-1/9 left-1/2 -translate-x-1/2 text-5xl font-black text-[#d3fb52] z-50 italic tracking-tighter' style={{ fontFamily: 'kelpt, sans-serif' }}>Ikigai4Teens</p>
        <p className='absolute top-1/6 left-1/2 -translate-x-1/2 text-[10rem] font-black text-white z-50 tracking-tighter ' style={{ fontFamily: 'gothic' }} >Career</p>
        <p className='absolute top-1/3 left-1/2 -translate-x-1/2 text-[10rem] font-black text-white z-50 tracking-tighter  text-nowrap font-serif' style={{ fontFamily: 'gothic' }} >Starts Here</p>

    </div>
  )
}

export default Bg
