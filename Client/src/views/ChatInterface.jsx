import React, { useState, useRef, useEffect } from 'react';
import sphere from '../assets/sphere.png';
import gradient from '../assets/Gradient.png';
import { Send, Home, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../utils/api';
import Navbar from '../components/Navbar';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  const handleTextareaChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
    
  // Check if user is logged in and get user data on mount
  useEffect(() => {
    const loadUserData = () => {
      const token = localStorage.getItem('token');
      const name = localStorage.getItem('userName');
      console.log('ChatInterface - Reading from localStorage:', { token, name });
      
      if (token) {
        if (name) {
          console.log('ChatInterface - Setting name from localStorage:', name);
          setUserName(name);
        } else {
          console.log('ChatInterface - No name in localStorage, fetching from API');
          // If we have a token but no name, try to fetch user data from the server
          const fetchUserData = async () => {
            try {
              const response = await api.get('/user/profile');
              if (response.data.success && response.data.user?.name) {
                localStorage.setItem('userName', response.data.user.name);
                setUserName(response.data.user.name);
              }
            } catch (error) {
              console.error('Error fetching user data:', error);
              toast.error('Could not fetch user data');
            }
          };
          fetchUserData();
        }
      }
    };
    
    // Load user data on mount
    loadUserData();
    
    // Listen for login events to update userName immediately after login
    const handleLogin = () => {
      console.log('ChatInterface - Login event received');
      loadUserData();
    };
    
    window.addEventListener('login', handleLogin);
    window.addEventListener('storage', handleLogin);
    
    return () => {
      window.removeEventListener('login', handleLogin);
      window.removeEventListener('storage', handleLogin);
    };
  }, []);
  // Handle send message
  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessageText = input.trim();
    
    try {
      // Add user message
      const userMessage = { text: userMessageText, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      
      // Show typing indicator
      const loadingMessage = { text: "Typing...", sender: 'ai', isLoading: true };
      setMessages(prev => [...prev, loadingMessage]);
      
      // Send message to AI with conversation history
      // Format history for the API (exclude loading messages)
      const conversationHistory = messages
        .filter(msg => !msg.isLoading)
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        }));
      
      const response = await api.post('/chat', { 
        message: userMessageText,
        history: conversationHistory
      });

      // Remove loading message and add AI response
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isLoading);
        return [...filtered, { 
          text: response.data.response || 'Sorry, I could not generate a response at this time.', 
          sender: 'ai' 
        }];
      });
    } catch (error) {
      console.error('Chat error:', error);
      console.error('Error response:', error.response?.data);
      // Remove loading message
      setMessages(prev => prev.filter(msg => !msg.isLoading));
      
      if (error.response?.status === 401) {
        toast.error('Please login to continue the conversation');
        // Optionally redirect to login
        // navigate('/login');
      } else if (error.response?.status === 500) {
        // Show detailed error message from server
        const serverError = error.response?.data;
        const errorMessage = serverError?.message || serverError?.error || serverError?.details || 'Server error occurred. Please check server logs.';
        console.error('Server error details:', serverError);
        toast.error(errorMessage);
      } else {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to get AI response. Please try again.';
        toast.error(errorMessage);
      }
    }
    
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className='relative h-screen w-full flex flex-col'>
      {/* <Navbar /> */}
      <img src={gradient} alt="" className='absolute inset-0 h-full w-full object-cover -z-10'/>
      {/* small nav icons: home and dashboard */}
      <div className='absolute top-4 left-4 z-40 flex items-center gap-2'>
        <button
          onClick={() => navigate('/')}
          title='Home'
          className='h-10 w-10 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition'
        >
          <Home size={25} className='text-white' />
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          title='Dashboard'
          className='h-10 w-10 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition'
        >
          <LayoutDashboard size={25} className='text-white' />
        </button>
      </div>
      
      <div className='flex-1 overflow-y-auto px-4 py-6 mt-14'>
        {messages.length === 0 ? (
          // Welcome screen
          <div className='flex flex-col items-center justify-center h-full'>
            <img 
              src={sphere} 
              alt="" 
              className='h-48 w-48 object-contain mb-6 opacity-80'
            />
            <p className='text-5xl text-blue-600 font-medium'>
              Hey {userName || 'there'}
            </p>
            <p className='text-gray-900 text-lg mt-4'>Let's get started with your career journey</p>
          </div>
        ) : (
          // Messages list
          <div className='max-w-3xl mx-auto space-y-4'>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-[#2d2d2d] text-gray-100'
                  } ${message.isLoading ? 'animate-pulse' : ''}`}
                >
                  <p className='text-base leading-relaxed whitespace-pre-wrap'>
                    {message.isLoading ? (
                      <span className="flex items-center gap-2">
                        {message.text}
                        <span className="inline-flex gap-1">
                          <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </span>
                      </span>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: message.text }} />
                    )}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
     
      <div className='sticky bottom-0 w-full px-4 py-6 bg-gradient-to-t from-black/50 to-transparent'>
        <div className='max-w-3xl mx-auto bg-[#2d2d2d] rounded-3xl px-6 py-4 flex items-end gap-3 shadow-2xl'>
          <textarea 
            ref={textareaRef}
            value={input}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask AI..."
            className='flex-1 bg-transparent outline-none text-lg text-white resize-none max-h-40 overflow-y-auto'
            rows={1}
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className={`h-10 w-10 rounded-full flex justify-center items-center shrink-0 transition-all ${
              input.trim() 
                ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' 
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            <Send className='text-white' size={20} />
          </button>
        </div>
        <p className='text-center text-xs text-gray-800 mt-3'>
          AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
