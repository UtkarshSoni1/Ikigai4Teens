import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Matrix from '../components/Matrix';

const Login = () => {
//   const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
//   const [passwordC, setpasswordc] = useState('');

    const navigate = useNavigate();

  const submitHandler = async (e) => {
        e.preventDefault();
        
        const res = await axios.post('http://localhost:5000/login',{email, password});
        console.log(res.data);
        if(res.data === "user logged in"){
            navigate('/');
        }
        // else{
        //     ("Invalid email or password");
        // }
        setemail('');
        setpassword('');
        // console.log(email, password);
        
        
    }
  return (
    <div className='h-screen w-full bg-gradient-to-b from-[#0c1327] to-black'>
      <div className='absolute top-1/2  -translate-y-1/2 right-28 h-[70%] w-[25%] border-2 border-white rounded-3xl'>
        <p className='text-white font-semibold text-center mt-10 text-3xl'>Login</p>     
        <form className='h-full w-full flex flex-col items-center' onSubmit={submitHandler}>
            
            <input type="text" name="email" id="" placeholder='enter your Email' className='h-1/10 w-4/5 border-2 border-white rounded-2xl text-white text-2xl mt-10 text-center outline-none' 
            onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="password" name="password" id="" placeholder='Enter your password' className='h-1/10 w-4/5 border-2 border-white rounded-2xl text-white text-2xl mt-10 mb-10 text-center outline-none' 
            onChange={(e)=>{setpassword(e.target.value)}}/>
            
            {/* <input type="submit" value="Register"  className='mt-10 h-16 w-50 bg-blue-400 rounded-2xl text-2xl text-white' /> */}
            <Button type="submit" />
            <Link to={'/SignUp'} className='text-white text-md hover:text-blue-400 hover:underline mt-10'>Create your account</Link>
          </form> 
      </div>
      <div className='absolute left-20 h-full w-[50%] rounded-2xl'>
        <Matrix/>
      </div>
    </div>
  )
}

export default Login
