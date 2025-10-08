import React, { useState, useRef, useEffect } from 'react';
import sphere from '../assets/sphere.png';
import gradient from '../assets/Gradient.png';
import { Send } from 'lucide-react';

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

  // Handle send message
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage = { 
        text: "This is a simulated AI response. Connect your AI API here!", 
        sender: 'ai' 
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
    
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
      {/* Background */}
      <img src={gradient} alt="" className='absolute inset-0 h-full w-full object-cover -z-10'/>
      
      {/* Main chat area */}
      <div className='flex-1 overflow-y-auto px-4 py-6'>
        {messages.length === 0 ? (
          // Welcome screen
          <div className='flex flex-col items-center justify-center h-full'>
            <img 
              src={sphere} 
              alt="" 
              className='h-48 w-48 object-contain mb-6 opacity-80'
            />
            <p className='text-5xl text-blue-600 font-medium'>Hey Utkarsh</p>
            <p className='text-gray-900 text-lg mt-4'>Lets get started with your career journey</p>
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
                  }`}
                >
                  <p className='text-base leading-relaxed whitespace-pre-wrap'>
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Input area */}
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
