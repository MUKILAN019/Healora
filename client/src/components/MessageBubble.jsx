import React, { useEffect, useState } from 'react';
import { Bot, User } from 'lucide-react';

const MessageBubble = ({ message, isUser, timestamp }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className={`flex items-end gap-2 max-w-xs lg:max-w-md ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isUser 
              ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
              : 'bg-gradient-to-r from-emerald-400 to-cyan-400'
          }`}>
            {isUser ? (
              <User className="w-4 h-4 text-white" />
            ) : (
              <Bot className="w-8 h-8 text-white" />
            )}
          </div>
          
          <div className={`relative px-4 py-3 rounded-2xl ${
            isUser 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-br-md' 
              : 'bg-white text-gray-800 rounded-bl-md shadow-lg border border-gray-100'
          }`}>
            <p className="text-sm leading-relaxed">{message}</p>
            {timestamp && (
              <p className={`text-xs mt-1 ${isUser ? 'text-cyan-100' : 'text-gray-400'}`}>
                {timestamp}
              </p>
            )}
            <div className={`absolute bottom-0 w-3 h-3 ${
              isUser 
                ? 'right-0 transform translate-x-1 bg-purple-500' 
                : 'left-0 transform -translate-x-1 bg-white border-l border-b border-gray-100'
            } rotate-45`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
