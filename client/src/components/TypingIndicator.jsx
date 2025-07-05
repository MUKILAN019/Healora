import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => (
  <div className="flex justify-start mb-4">
    <div className="flex items-end gap-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-lg border border-gray-100">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  </div>
);

export default TypingIndicator;
