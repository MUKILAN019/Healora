import React from 'react';
import { Heart, Shield, Sparkles, AlertTriangle } from 'lucide-react';

const QuickActions = ({ onSelect }) => {
  const actions = [
    { icon: Heart, label: "Health Symptoms", action: "symptoms" },
    { icon: Shield, label: "Risk Assessment", action: "risk" },
    { icon: Sparkles, label: "Medicine Info", action: "medicine" },
    { icon: AlertTriangle, label: "Emergency", action: "emergency" }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onSelect(action.action)}
          className="flex items-center gap-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:from-cyan-50 hover:to-purple-50 hover:border-cyan-200 transition-all duration-200 group"
        >
          <action.icon className="w-4 h-4 text-gray-600 group-hover:text-cyan-600" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-700">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
