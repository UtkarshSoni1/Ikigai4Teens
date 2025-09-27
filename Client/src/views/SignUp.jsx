import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import man from '../assets/man1.png'
import Button from '../components/Button';
import Matrix from '../components/Matrix';
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
    <div className='h-screen w-full bg-gradient-to-b from-[#0c1327] to-black'>
      <div className='absolute top-1/2  -translate-y-1/2 right-28 h-[90%] w-[30%] border-2 border-white rounded-3xl'>
        <p className='text-white font-semibold text-center mt-10 text-3xl'>SignUp</p>     
        <form className='h-full w-full flex flex-col items-center' onSubmit={submitHandler}>
            <input type="text" name="name" id="" placeholder='enter your name' className='h-1/10 w-4/5 border-2 border-white rounded-2xl text-white text-2xl mt-10 text-center' 
            onChange={(e)=>{setname(e.target.value)}} />
            <input type="text" name="email" id="" placeholder='enter your Email' className='h-1/10 w-4/5 border-2 border-white rounded-2xl text-white text-2xl mt-10 text-center' 
            onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="password" name="password" id="" placeholder='Create your password' className='h-1/10 w-4/5 border-2 border-white rounded-2xl text-white text-2xl mt-10 text-center' 
            onChange={(e)=>{setpassword(e.target.value)}}/>
            <input type="password" name="passwordC" id="" placeholder='confirm your password' className='h-1/10 w-4/5 border-2 border-white rounded-2xl text-white text-2xl mt-10 mb-10 text-center' 
            onChange={(e)=>{setpasswordc(e.target.value)}}/>
            {/* <input type="submit" value="Register"  className='mt-10 h-16 w-50 bg-blue-400 rounded-2xl text-2xl text-white' /> */}
            <Button/>
          </form> 
      </div>
      <div className='absolute left-20 h-full w-[50%] rounded-2xl'>
        <Matrix/>
      </div>
    </div>
  )
}

export default SignUp
