import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
// import Matrix from '../components/Matrix';
import { ToastContainer, toast } from 'react-toastify';
import bgImage2 from '../assets/gradient.png';
import bgImage from '../assets/icon_mv_cloud_big.svg'
import person from '../assets/icon_mv_human2.webp'
// import { log } from 'console';
const Login = () => {
//   const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
//   const [passwordC, setpasswordc] = useState('');

    const navigate = useNavigate();
    const notify = () => toast('Logged in successfully !');
  const submitHandler = async (e) => {
        e.preventDefault();
        
        const res = await axios.post('http://localhost:5000/login',{email, password},{ withCredentials: true });
        console.log(res.data);
        
        if(res.data.success && res.data.user){
            const id = res.data.user?.userId || res.data.userId || res.data._id;
            const token = res.data.user?.token;
        
            localStorage.setItem('token', token);

            localStorage.setItem('userId', id);
            console.log(id);
            navigate(`/${id}`);
        }
        // else{
        //     ("Invalid email or password");
        // }
        setemail('');
        setpassword('');
        // console.log(email, password);
        
        
    }
  return (
    <>
    <div className='h-screen w-full flex items-center justify-center'>
      <img src={bgImage2} alt="" className='h-full w-full -z-10 object-cover' />
    </div>
    <div className='h-screen w-full'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 right-28 h-[90%] w-[80%] border-2 border-white rounded-3xl overflow-hidden flex items-center'>
        <form className='h-full w-[40%] flex flex-col items-center bg-blue-400/60 text-black font-semibold border-r-2 border-white' onSubmit={submitHandler}>
          <p className='text-black font-semibold text-center mt-10 text-3xl '>Login</p>     
            <div className='h-1/8 w-4/5 mt-10'>
              <p className='text-lg text-left mb-2'>Enter your Email</p>
              <input type="text" name="email" id="" placeholder='m@example.com' className='h-4/5 w-full border-2 border-zinc-900 rounded-2xl text-2xl text-center outline-none' 
              onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className='h-1/8 w-4/5 mt-10 mb-16'>
              <p className='text-lg text-left mb-2 '>Enter your Password</p>
              <input type="password" name="password" id="" placeholder='********' className='h-4/5 w-full border-2 border-zinc-900 rounded-2xl text-2xl  text-center outline-none' 
              onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            
            {/* <input type="submit" value="Register"  className='mt-10 h-16 w-50 bg-blue-400 rounded-2xl text-2xl text-white' /> */}
            <Button type="submit" onClick={notify} />
            <Link to={'/signup'} className='text-white text-md hover:text-blue-900 hover:underline mt-10'>New here? Create your account</Link>
          </form> 
          <div className='relative h-full w-[60%] overflow-hidden bg-blue-400/40'>
            <div className='relative h-20 w-1/2 top-10 left-1/2 -translate-x-1/2 z-50 bg-[#2d2d2d] rounded-2xl flex justify-center items-center'>
              <p className='text-5xl font-black text-[#d3fb52] z-50 italic tracking-tighter' style={{ fontFamily: 'kelpt, sans-serif' }}>Ikigai4Teens</p>
            </div>
              <img src={bgImage} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-full object-contain z-10' />
              <img src={person} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/5 w-3/5 z-30 object-contain' />
          </div>
      </div>
      
    </div>
    </>
  )
}

export default Login
