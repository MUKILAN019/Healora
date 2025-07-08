import React, { useState, useRef, useEffect } from 'react';
import {
  Shield,
  MoreVertical,
  Send,
  Sparkles,
  Bot
} from 'lucide-react';

import MessageBubble from '../../components/MessageBubble';
import TypingIndicator from '../../components/TypingIndicator';
import QuickActions from '../../components/QuickActions';
import historyPage from './historyPage';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello! I\'m Healora, your AI health assistant. I\'m here to help you with health risk analysis, symptom checking, and connecting you with affordable healthcare solutions. How can I assist you today?',
      timestamp: '2:34 PM'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setShowQuickActions(false);
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "I understand you're experiencing some health concerns. Can you tell me more about when these symptoms started?",
        "Thank you for sharing that with me. Based on what you've described, I'd like to ask a few more questions to better understand your situation.",
        "I appreciate you providing those details. Let me analyze this information and provide you with some helpful insights.",
        "Based on your symptoms, I recommend we explore this further. Would you like me to perform a bias check on potential treatment recommendations?"
      ];

      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'ai',
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action) => {
    const actionMessages = {
      symptoms: "I'd like to discuss my health symptoms",
      risk: "I want to understand my health risks",
      medicine: "I need information about medicines",
      emergency: "This is an emergency situation"
    };

    setInput(actionMessages[action]);
    setShowQuickActions(false);
  };

  const handleBiasCheck = () => {
    console.log('Navigate to bias check');
  };

  const handleGoHome = () => {
    console.log('Navigate to home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleGoHome}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-800">Healora AI</h1>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Online & Ready to Help
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleBiasCheck}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Shield className="w-4 h-4" />
              Bias Check
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="h-96 overflow-y-auto p-6 bg-gradient-to-b from-gray-50/50 to-white">
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg.text}
                isUser={msg.sender === 'user'}
                timestamp={msg.timestamp}
              />
            ))}
            {isTyping && <TypingIndicator />}
            {showQuickActions && messages.length === 1 && (
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3 text-center">
                  Quick actions to get started:
                </p>
                <QuickActions onSelect={handleQuickAction} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200 disabled:opacity-50"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-center mt-3">
              <p className="text-xs text-gray-500">
                Healora AI is designed to provide health information and support. 
                <span className="font-medium text-cyan-600"> Always consult healthcare professionals for medical advice.</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
