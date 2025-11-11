import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import gradient from '../assets/Gradient.png';
import { toast } from 'react-toastify';
import api from '../utils/api';

const Navbar = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
      const update = () => setIsLoggedIn(!!localStorage.getItem('token'));
      update();
      // Listen for both storage and login events
      window.addEventListener('storage', update);
      window.addEventListener('login', update);
      return () => {
        window.removeEventListener('storage', update);
        window.removeEventListener('login', update);
      };
    }, []);
  
    const handleLogout = async () => {
      try {
        await api.post('/logout');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        sessionStorage.clear();
        setIsLoggedIn(false);
        toast.success('Logged out successfully');
        navigate('/login');
      } catch (error) {
        console.error(error);
        toast.error('Error logging out');
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
            <Link to="/">
                <div className='relative h-full w-1/5 border-white z-10'>Home</div>
            </Link>
            <Link to='/chat' onClick={handleChat}>
                <div className='relative h-full w-1/5 border-white z-10 cursor-pointer'>
                    Guidance
                </div>
            </Link>
            <Link>
            <div 
                onClick={() => {
                  const aboutSection = document.getElementById('about-section');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#about');
                  }
                }}
                className='relative h-full w-1/5 border-white text-nowrap z-10 cursor-pointer'>
                About Us
            </div>
            </Link>
            <Link>
            <div 
                onClick={() => {
                  const faqsSection = document.getElementById('faqs-section');
                  if (faqsSection) {
                        faqsSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#faqs');
                    }
                  }}
                  className='relative h-full w-1/5 border-white z-10 cursor-pointer'>
                FAQs
            </div>
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
