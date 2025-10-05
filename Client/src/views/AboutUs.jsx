import React from 'react'
import bgAbout from "../assets/bg_about.svg"
import circle1 from "../assets/circle 1.png"
import circle2 from "../assets/circle 2.png"
import circle3 from "../assets/circle 3.png"
import circle4 from "../assets/circle 4.png"
import circle5 from "../assets/circle 5.png" 
const AboutUs = () => {
  return (
    <>
        <div className='relative h-screen w-full bg-[#1548d6] z-30 overflow-hidden'>
            <img src={bgAbout} alt="" className='w-full max-w-full h-auto object-cover mt-40 scale-y-125 scale-x-150'/>
            <div className='absolute top-10 left-1/2 -translate-x-1/2 bg-[#1548d6] h-32 w-1/2 flex justify-center items-center'>
                <p className='text-[6rem] text-white font-semibold'>About Us</p>
            </div>
            <div className='absolute top-1/4 left-1/2 -translate-x-1/2 bg-[#1548d6] h-1/3 w-1/2 text-white text-center flex flex-col justify-center items-center p-10 text-2xl font-semibold space-y-4'>
                <p>
                    Ikigai4Teens is built to help teenagers figure out what they love, what they’re good at, and how it connects to real careers. We use simple AI tools to make career discovery easier, more personal, and less confusing. Our goal is to give teens the clarity and confidence to shape their future paths.
                </p>
            </div>
            <div className='absolute left-1/2 bottom-12 -translate-x-1/2 h-1/3 w-full flex items-center gap-16 px-10'>
                <div className='h-60 w-1/6 relative bottom-20'>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle1} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Collecting your interests and goals</p>
                </div>
                <div className='h-60 w-1/6 relative bottom-5'>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle2} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Exploring your hobbies and passions</p>
                </div>
                <div className='h-60 w-1/6 relative bottom-0 '>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle3} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Identifying your strengths and skills</p>
                </div>
                <div className='h-60 w-1/6 relative bottom-5 '>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle4} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Mapping them to real-world needs</p>
                </div>
                <div className='h-60 w-1/6 relative bottom-20 '>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle5} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white  mt-2 text-center'>Shaping a clear path for your future</p>
                </div>
                
            </div>
            
        </div> 
    </>
  )
}

export default AboutUs
