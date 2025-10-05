import React from 'react'
import leftCloud from "../assets/icon_mv_cloud3.svg"
import rightCloud from "../assets/icon_mv_cloud4.svg"
import mainCloud from "../assets/icon_mv_cloud_big.svg"
import person1 from "../assets/icon_mv_human1.webp"
import person2 from "../assets/icon_mv_human2.webp"
import person3 from "../assets/icon_mv_human3.webp"
import icon1 from "../assets/icon_mv1.svg"
import icon2 from "../assets/icon_mv2.svg"
import icon3 from "../assets/icon_mv3.webp"
import icon4 from "../assets/icon_mv4.svg"
import icon5 from "../assets/icon_mv5.svg"
import icon6 from "../assets/icon_mv6.svg"
import Navbar from '../components/Navbar'

const Foreground = () => {
  return (
    <div className='h-screen w-full z-20'>
        <Navbar/>
        <div className='absolute -left-30 -top-60 w-80 h-40 '>
        <img src={leftCloud} alt="" className='object-cover scale-200'/>
        <div className='h-20 relative top-20 left-40 w-36 z-20'>
                <img src={icon1} alt="" className='object-cover'/>
            </div>  
        </div>
        <div className='absolute -right-30 -top-60 w-80 h-40 '>
        <img src={rightCloud} alt="" className='object-cover scale-200'/>
        </div>
        <div className='h-20 absolute top-[28%] left-1/3 w-36 z-20'>
            <img src={icon2} alt="" className='object-cover'/>
        </div>
        <div className='w-1/2 h-1/4 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 '>
        <img src={mainCloud} alt="" className='object-cover scale-125'/>
        </div>
        <div className='absolute h-20 w-1/4 bottom-1/8 left-2/3 -translate-x-2/3 z-50 bg-[#0e0d60] border-2 border-[#e1ff00] flex justify-center items-center -rotate-4'>
            <p className='text-5xl font-black text-[white] z-50 italic tracking-tighter' style={{ fontFamily: 'kelpt, sans-serif' }}>Ikigai4Teens</p>
        </div>
        <div className='absolute h-20 w-[40%] bottom-4 left-2/3 -translate-x-2/3 z-50 bg-[#0e0d60] border-2 border-[#e1ff00] flex justify-center items-center -rotate-4'>
            <p className='text-5xl font-black text-[white] z-50 italic tracking-tighter' style={{ fontFamily: 'kelpt, sans-serif' }}>CAREER STARTS HERE</p>
        </div>
        <div className='w-1/4 h-1/4  absolute top-1/2 left-7/8 -translate-x-7/8 -translate-y-1/2'>
        <img src={person3} alt="" className='object-cover scale-110'/>
        </div>
        <div className='w-1/4 h-1/4  absolute top-1/2 right-5/6 translate-x-5/6 -translate-y-1/2'>
        <img src={person1} alt="" className=''/>
        </div>
        <div className='w-1/4 h-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 '>
        <img src={person2} alt="" className='object-cover scale-125'/>
        </div>
        <div className='h-20 absolute top-20 right-1/2 w-36 z-20'>
            <img src={icon3} alt="" className='object-cover'/>
        </div>
        <div className='h-20 absolute top-36 right-1/3 w-36 z-20'>
            <img src={icon4} alt="" className='object-cover'/>
        </div>
        <div className='h-20 absolute top-20 right-80 w-36 z-20'>
            <img src={icon5} alt="" className='object-cover'/>
        </div>
        <div className='h-20 absolute bottom-20 left-40 w-36 z-20'>
            <img src={icon6} alt="" className='object-cover'/>
        </div>
    </div>
  )
}

export default Foreground
