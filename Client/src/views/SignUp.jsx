import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import man from '../assets/man1.png'
import Button from '../components/Button';
import Matrix from '../components/Matrix';
import bgImage from '../assets/icon_mv_cloud_big.svg'
import bgImage2 from '../assets/result_0.jpeg'
import bgImage3 from '../assets/bg_night.webp'
import person from '../assets/icon_mv_human3.webp'
import Background from './Background';
const SignUp = () => {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordC, setpasswordc] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (e) => {
        e.preventDefault();
        if (password === passwordC) {
          const res = await axios.post('http://localhost:5000/signUp',{name, email, password});
          console.log(res.data);
          navigate('/');
          setemail('');
          setpassword('');
          // console.log(email, password);
        }
        
    }

  return (
    <>
    <div className='h-screen w-full flex items-center justify-center'>
      <img src={bgImage2} alt="" className='h-full w-full -z-10 object-cover' />
    </div>
    <div className='absolute inset-0 h-screen w-full flex items-center justify-center'>
      {/* <Background/> */}
      <div className='h-[90%] w-4/5 rounded-4xl border-2 border-white flex items-center z-20 overflow-hidden'>
        <div className='h-full w-[40%] border-r-2 border-white bg-[#2d2d2d] '>
          <p className=' font-semibold text-center mt-10 text-3xl text-white '>SignUp</p>     
          <form className='h-full w-full flex flex-col items-center text-white' onSubmit={submitHandler}>
              <div className='h-1/8 w-4/5 mt-10'>
                <p className=' text-lg text-left'>Enter your Name</p>
                <input type="text" name="name" id="" placeholder='John doe' className='h-2/3 w-full border-2  rounded-2xl  text-2xl text-center' 
                onChange={(e)=>{setname(e.target.value)}} />
              </div>
              <div className='h-1/8 w-4/5 mt-10'>
                <p className=' text-lg text-left'>Enter your Email</p>
                <input type="text" name="email" id="" placeholder='m@example.com' className='h-2/3 w-full border-2  rounded-2xl  text-2xl text-center' 
                onChange={(e)=>{setemail(e.target.value)}}/>
              </div>
              <div className='h-1/8 w-4/5 mt-10'>
                <p className=' text-lg text-left'>Enter your Password</p>
                <input type="password" name="password" id="" placeholder='*********' className='h-2/3 w-full border-2  rounded-2xl  text-2xl text-center' 
                onChange={(e)=>{setpassword(e.target.value)}}/>
              </div>
              <div className='h-1/8 w-4/5 mt-10 mb-10'>
                <p className=' text-lg text-left'>confirm your password</p>
                <input type="password" name="passwordC" id="" placeholder='confirm your password' className='h-2/3 w-full border-2  rounded-2xl  text-2xl text-center' 
                onChange={(e)=>{setpasswordc(e.target.value)}}/>
              </div>
              {/* <input type="submit" value="Register"  className='mt-10 h-16 w-50 bg-blue-400 rounded-2xl text-2xl text-white' /> */}
              <Button/>
            </form> 
        </div>
        {/* <Background/> */}
        <div className='relative h-full w-[60%] overflow-hidden bg-blue-400/40'>
          {/* <img src={bgImage3} alt="" className='absolute inset-0 h-full w-full object-cover z-0' /> */}
          <img src={bgImage} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-full object-contain z-10' />
          <img src={person} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/5 w-3/5 z-30 object-contain' />
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp
