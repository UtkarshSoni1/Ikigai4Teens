import React, { useEffect, useRef } from 'react'
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
import { gsap } from 'gsap';

const Foreground = () => {
  const leftCloudRef = useRef(null);
  const rightCloudRef = useRef(null);
  const mainCloudRef = useRef(null);
  const person1Ref = useRef(null);
  const person2Ref = useRef(null);
  const person3Ref = useRef(null);
  const icon3Ref = useRef(null);
  const icon4Ref = useRef(null);
  const icon5Ref = useRef(null);
  const icon6Ref = useRef(null);

    useEffect(() => {
        // Capture refs to local variables so cleanup is safe
        const left = leftCloudRef.current;
        const right = rightCloudRef.current;
        const main = mainCloudRef.current;
        const p1 = person1Ref.current;
        const p2 = person2Ref.current;
        const p3 = person3Ref.current;
        const i3 = icon3Ref.current;
        const i4 = icon4Ref.current;
        const i5 = icon5Ref.current;
        const i6 = icon6Ref.current;

        // Clouds
        if (left) gsap.to(left, { y: -16, duration: 4.5, ease: 'power1.inOut', repeat: -1, yoyo: true });
        if (right) gsap.to(right, { y: -16, duration: 4.8, ease: 'power1.inOut', repeat: -1, yoyo: true });
        if (main) gsap.to(main, { y: -12, duration: 4.0, ease: 'power1.inOut', repeat: -1, yoyo: true });

        // Persons (slightly different speeds)
        if (p1) gsap.to(p1, { y: -10, duration: 3.6, ease: 'sine.inOut', repeat: -1, yoyo: true });
        if (p2) gsap.to(p2, { y: -12, duration: 3.8, ease: 'sine.inOut', repeat: -1, yoyo: true });
        if (p3) gsap.to(p3, { y: -8, duration: 3.4, ease: 'sine.inOut', repeat: -1, yoyo: true });

        // Icons with staggered timings
        if (i3) gsap.to(i3, { y: -8, duration: 3.0, ease: 'sine.inOut', repeat: -1, yoyo: true });
        if (i4) gsap.to(i4, { y: -10, duration: 3.2, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 0.2 });
        if (i5) gsap.to(i5, { y: -6, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 0.4 });
        if (i6) gsap.to(i6, { y: -9, duration: 3.4, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 0.1 });

        return () => {
            gsap.killTweensOf([left, right, main, p1, p2, p3, i3, i4, i5, i6]);
        };
    }, []);

  return (
    <div className='h-screen w-full z-20'>
        <Navbar/>
        <div className='absolute -left-30 -top-60 w-80 h-40 '>
        <img ref={leftCloudRef} src={leftCloud} alt="" className='object-cover scale-200'/>
        <div className='h-20 relative top-20 left-40 w-36 z-20'>
                <img src={icon1} alt="" className='object-cover'/>
            </div>  
        </div>
    <div className='absolute -right-30 -top-60 w-80 h-40 '>
    <img ref={rightCloudRef} src={rightCloud} alt="" className='object-cover scale-200'/>
    </div>
        <div className='h-20 absolute top-[28%] left-1/3 w-36 z-20'>
            <img src={icon2} alt="" className='object-cover'/>
        </div>
    <div className='w-1/2 h-1/4 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 '>
    <img ref={mainCloudRef} src={mainCloud} alt="" className='object-cover scale-125'/>
    </div>
        <div className='absolute h-20 w-1/4 bottom-1/8 left-2/3 -translate-x-2/3 z-50 bg-[#0e0d60] border-2 border-[#e1ff00] flex justify-center items-center -rotate-4'>
            <p className='text-5xl font-black text-[white] z-50 italic tracking-tighter' style={{ fontFamily: 'kelpt, sans-serif' }}>Ikigai4Teens</p>
        </div>
        <div className='absolute h-20 w-[40%] bottom-4 left-2/3 -translate-x-2/3 z-50 bg-[#0e0d60] border-2 border-[#e1ff00] flex justify-center items-center -rotate-4'>
            <p className='text-5xl font-black text-[white] z-50 italic tracking-tighter' style={{ fontFamily: 'kelpt, sans-serif' }}>CAREER STARTS HERE</p>
        </div>
    <div className='w-1/4 h-1/4  absolute top-1/2 left-7/8 -translate-x-7/8 -translate-y-1/2'>
    <img ref={person3Ref} src={person3} alt="" className='object-cover scale-110'/>
    </div>
    <div className='w-1/4 h-1/4  absolute top-1/2 right-5/6 translate-x-5/6 -translate-y-1/2'>
    <img ref={person1Ref} src={person1} alt="" className='object-cover'/>
    </div>
    <div className='w-1/4 h-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 '>
    <img ref={person2Ref} src={person2} alt="" className='object-cover scale-125'/>
    </div>
        <div className='h-20 absolute top-20 right-1/2 w-36 z-20'>
            <img ref={icon3Ref} src={icon3} alt="" className='object-cover'/>
        </div>
        <div className='h-20 absolute top-36 right-1/3 w-36 z-20'>
            <img ref={icon4Ref} src={icon4} alt="" className='object-cover'/>
        </div>
        <div className='h-20 absolute top-20 right-80 w-36 z-20'>
            <img ref={icon5Ref} src={icon5} alt="" className='object-cover'/>
        </div>
        <div className='h-20 absolute bottom-20 left-40 w-36 z-20'>
            <img ref={icon6Ref} src={icon6} alt="" className='object-cover'/>
        </div>
    </div>
  )
}

export default Foreground
