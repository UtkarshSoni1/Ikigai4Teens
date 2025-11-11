import React, { useEffect, useRef } from 'react'
import bgAbout from "../assets/bg_about.svg"
import circle1 from "../assets/circle 1.png"
import circle2 from "../assets/circle 2.png"
import circle3 from "../assets/circle 3.png"
import circle4 from "../assets/circle 4.png"
import circle5 from "../assets/circle 5.png" 
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const AboutUs = () => {
  const bgRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const circleRefs = useRef([])

  useEffect(() => {
    const bg = bgRef.current
    const heading = headingRef.current
    const para = paraRef.current
    const circles = circleRefs.current.filter(Boolean)

    if (!bg || !heading) return

    // set initial state
    gsap.set(bg, { transformOrigin: 'left center', scaleX: 0 })
    gsap.set(heading, { opacity: 0, y: 24 })
    gsap.set(para, { opacity: 0, y: 40 })
    circles.forEach((c) => gsap.set(c, { opacity: 0 }))

    const offsets = [ { x: -36, y: 18 }, { x: 28, y: 8 }, { x: -18, y: 26 }, { x: 22, y: 12 }, { x: -30, y: 6 } ]

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-section',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power2.out' }
    })

    tl.to(bg, { scaleX: 1, duration: 0.9 })
      .to(heading, { opacity: 1, y: 0, duration: 0.7 }, '-=0.25')
      .to(para, { opacity: 1, y: 34, duration: 0.7 }, '-=0.25')

    circles.forEach((el, i) => {
      const { x, y } = offsets[i] || { x: 0, y: 12 }
      tl.fromTo(el, { opacity: 0, x, y }, { opacity: 1, x: 0, y: 0, duration: 0.6 }, '-=0.5')
    })

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [])

  return (
    <>
        <div id="about-section" className='relative h-screen w-full bg-[#1548d6] z-30 overflow-hidden'>
            <div className='w-full overflow-hidden'>
              <img ref={bgRef} src={bgAbout} alt="" className='w-full max-w-full h-auto object-cover mt-40 scale-y-125 scale-x-200'/>
            </div>
            <div className='absolute top-10 left-1/2 -translate-x-1/2 bg-[#1548d6] h-32 w-1/2 flex justify-center items-center'>
                <p ref={headingRef} className='text-[6rem] text-white font-semibold'>About Us</p>
            </div>
            <div className='absolute top-1/4 left-1/2 -translate-x-1/2 bg-[#1548d6] h-1/3 w-1/2 text-white text-center flex flex-col justify-center items-center p-10 text-2xl font-semibold space-y-4'>
                <p ref={paraRef}>
                    Ikigai4Teens is built to help teenagers figure out what they love, what they’re good at, and how it connects to real careers. We use simple AI tools to make career discovery easier, more personal, and less confusing. Our goal is to give teens the clarity and confidence to shape their future paths.
                </p>
            </div>
            <div className='absolute left-1/2 bottom-12 -translate-x-1/2 h-1/3 w-full flex items-center gap-16 px-10'>
                <div ref={el => circleRefs.current[0] = el} className='h-60 w-1/6 relative bottom-20'>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle1} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Collecting your interests and goals</p>
                </div>
                <div ref={el => circleRefs.current[1] = el} className='h-60 w-1/6 relative bottom-5'>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle2} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Exploring your hobbies and passions</p>
                </div>
                <div ref={el => circleRefs.current[2] = el} className='h-60 w-1/6 relative bottom-0 '>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle3} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Identifying your strengths and skills</p>
                </div>
                <div ref={el => circleRefs.current[3] = el} className='h-60 w-1/6 relative bottom-5 '>
                    <div className='h-56 w-56 rounded-full border-2 border-white overflow-hidden'>
                        <img src={circle4} alt="" className='object-cover'/>
                    </div>
                    <p className='text-lg text-white mt-2 text-center'>Mapping them to real-world needs</p>
                </div>
                <div ref={el => circleRefs.current[4] = el} className='h-60 w-1/6 relative bottom-20 '>
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
