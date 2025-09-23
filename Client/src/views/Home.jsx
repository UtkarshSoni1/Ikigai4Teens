import React from 'react'
import Bg from './Bg'
import topL from '../assets/top-left.png'
import topR from '../assets/top-right.png'
import topC from '../assets/top-center.png'
import leftM from '../assets/left-middle.png'
import bottomL from '../assets/bottom-left.png'
import bottomR from '../assets/bottom-right.png'
import bottomC from '../assets/bottom-center.png'
const Home = () => {
  return (
    <>
      <div className="p-4  min-h-screen flex items-center justify-center bg-zinc-700 ">
        <div className="grid grid-cols-12 grid-rows-6 gap-4 max-w-7xl w-full z-50">
        
        {/* Top Left */}
        <div className="relative rounded-xl overflow-hidden col-span-3 row-span-2  hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={topL} className="w-full h-full object-cover" />
          {/* <p className="absolute bottom-4 left-4 text-white font-bold">You’re not lost,<br />you’re here</p> */}
        </div>

        {/* Center Large */}
        <div className="relative rounded-xl overflow-hidden col-span-5 row-span-4 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={topC} className="w-full h-full object-cover" />
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 m-auto h-20 w-40 bg-blue-400 text-white font-bold z-10 flex items-center justify-center rounded-3xl">
            Dive in
          </button>
          {/* <p className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-center"> */}
            {/* Feeling Lost?<br />We got you */}
          {/* </p> */}
        </div>

        {/* Top Right */}
        <div className="relative rounded-xl overflow-hidden col-span-4 row-span-2 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={topR} className="w-full h-full object-cover" />
          {/* <p className="absolute bottom-4 left-4 text-white font-bold">Explore new horizons</p> */}
        </div>

        {/* Middle Left */}
        <div className="relative rounded-xl overflow-hidden col-span-3 row-span-2 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={leftM} className="w-full h-full object-cover" />
          {/* <p className="absolute top-4 left-4 text-white font-bold">Grow and flourish</p> */}
        </div>

        {/* Middle Right */}
        <div className="relative rounded-xl overflow-hidden col-span-4 row-span-4 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={bottomR} className="w-full h-full object-cover" />
          {/* <p className="absolute bottom-4 left-4 text-white font-bold max-w-[80%]">
            Learn how to live a long, happy, and meaningful life with purpose.
          </p> */}
        </div>

        {/* Bottom Left */}
        <div className="relative rounded-xl overflow-hidden col-span-4 row-span-2 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={bottomL} className="w-full h-full object-cover" />
          {/* <p className="absolute bottom-4 left-4 text-white font-bold">Find your way</p> */}
        </div>

        {/* Bottom Center */}
        <div className="relative rounded-xl overflow-hidden col-span-4 row-span-2 hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={bottomC} className="w-full h-full object-cover" />
          {/* <p className="absolute bottom-4 left-4 text-white font-bold">Chart your progress</p> */}
        </div>

        </div>
      </div>
      <Bg />
    </>
  )
}

export default Home
