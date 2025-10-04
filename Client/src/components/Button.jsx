import React from 'react'

const Button = () => {
  return (
    <button class="scale-110 group relative inline-block cursor-pointer overflow-hidden rounded-full bg-transparent py-3 px-6 text-base font-semibold text-white/25 shadow-[0_0_0_2px_rgba(255,255,255,0.125)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white hover:shadow-[0_0_0_5px_rgba(33,150,243,0.37)] active:scale-95">
        <span class="relative z-10">Dive In</span>
        <span class="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22CED1] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-[150px] group-hover:w-[150px] group-hover:opacity-100"></span>
    </button>
  )
}

export default Button
