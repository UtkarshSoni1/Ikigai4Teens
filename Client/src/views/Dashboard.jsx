import React from 'react'
import gradient from '../assets/Gradient.png';

const Dashboard = () => {
  return (
    <>
    <div className='h-screen w-full relative flex flex-col items-center'>
        <img src={gradient} alt="" className='absolute inset-0 h-full w-full object-cover -z-10 '/>
    <span className="absolute inset-0 top-1/2 -translate-y-1/2 text-center text-[10rem] text-nowrap font-bold text-stone-600 z-20 ">
      Coming Soon..
    </span>

        <div className='grid grid-cols-12 grid-rows-6 gap-4 max-w-6xl h-full w-full px-5 py-6 max-h-5xl z-10'>
            <div className='col-span-4 row-span-2 relative rounded-xl overflow-hidden bg-zinc-700/50 z-10'>BOX-1</div>
            <div className='col-span-5 row-span-4 relative rounded-xl overflow-hidden bg-zinc-700/50 z-10'>BOX-2</div>
            <div className='col-span-3 row-span-3 relative rounded-xl overflow-hidden bg-zinc-700/50 z-10'>BOX-3</div>
            <div className='col-span-4 row-span-4 relative rounded-xl overflow-hidden bg-zinc-700/50 z-10'>BOX-4</div>
            <div className='col-span-3 row-span-3 relative rounded-xl overflow-hidden bg-zinc-700/50 z-10'>BOX-5</div>
            <div className='col-span-5 row-span-3 relative rounded-xl overflow-hidden bg-zinc-700/50 z-10'>BOX-6</div>
        </div>
        
    </div>
    </>
  )
}

export default Dashboard

