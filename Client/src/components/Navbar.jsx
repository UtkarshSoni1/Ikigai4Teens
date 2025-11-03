import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import gradient from '../assets/Gradient.png';
import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

const Navbar = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
      const update = () => setIsLoggedIn(!!localStorage.getItem('token'));
      update();
      window.addEventListener('storage', update);
      return () => window.removeEventListener('storage', update);
    }, []);
  
    const handleLogout = async () => {
      try {
        await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
      } catch (e) {
        // ignore network error, still clear client-side
        console.log(e);
        
      } finally {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        sessionStorage.clear();
        setIsLoggedIn(false);
        navigate('/login');
      }
    };

    const handleChat = async () => {
        try {
            const response = await api.get('/chat');
            if (response.data.success) {
                navigate(`/chat`);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Unauthorized, redirect to login
                navigate('/login');
            } else {
                console.error('Error accessing chat:', error);
            }
        }
    }

  return (
    <div className='h-14 w-full flex justify-between fixed z-50'>
        <div className='h-full w-[40%] bg-black/40 backdrop-blur-lg relative  ml-3 mt-3 text-white flex items-center gap-20 pl-10 rounded-4xl text-lg font-semibold hover:bg-[#1c1327] delay-100 duration-100 ease-in overflow-hidden'>
            <img src={gradient} alt="" className='absolute inset-0 h-full w-full object-cover z-0 pointer-events-none '/>
            <Link>
                <div className='relative h-full w-1/5 border-white z-10'>Home</div>
            </Link>
            <Link to='/chat' onClick={handleChat}>
                <div  className='relative h-full w-1/5 border-white z-10 cursor-pointer'>
                    Guidance
                </div>
            </Link>
            <Link to='/about'>
                <div className='relative h-full w-1/5 border-white text-nowrap z-10'>About Us</div>
            </Link>
            <Link to='/contact'>
                <div className='relative h-full w-1/5 border-white z-10'>Contact</div>
            </Link>
        </div>
        {!isLoggedIn && (
          <div className='h-full mt-3 mr-3 text-black flex items-center gap-2'>
            <Link to="/signUp" className='h-4/5 px-3 flex items-center justify-center bg-white font-semibold rounded-2xl text-xl'>
              SignIn
            </Link>
            <Link to="/login" className='h-4/5 px-3 flex items-center justify-center bg-black text-white rounded-2xl font-semibold text-xl'>
              Login
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <div className='h-full mt-3 mr-3 text-white flex items-center gap-2'>
            <button onClick={handleLogout} className='h-4/5 px-4 flex items-center justify-center bg-black font-semibold rounded-2xl text-xl'>
              Logout
            </button>
          </div>
        )}
      </div>
  )
}

export default Navbar
