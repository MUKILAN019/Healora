import React, { useState } from 'react';
import {
  Bot,
  Clock,
  MessageCircle,
  Search,
  Filter,
  Calendar,
  ChevronRight,
  Trash2,
  MoreVertical,
  ArrowLeft
} from 'lucide-react';

const HistoryPage = () => { // Changed from historyPage to HistoryPage
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedChats, setSelectedChats] = useState([]);

  // Mock chat history data
  const chatHistory = [
    {
      id: 1,
      title: "Headache and Fever Symptoms",
      lastMessage: "Thank you for the comprehensive analysis. I'll follow up with my doctor as recommended.",
      timestamp: "2 hours ago",
      date: "Today",
      messageCount: 12,
      category: "symptoms",
      severity: "moderate"
    },
    {
      id: 2,
      title: "Medication Side Effects Query",
      lastMessage: "The bias check results show no concerning patterns in the recommendations.",
      timestamp: "Yesterday",
      date: "Yesterday",
      messageCount: 8,
      category: "medicine",
      severity: "low"
    },
    {
      id: 3,
      title: "Chest Pain Assessment",
      lastMessage: "I've scheduled an appointment with a cardiologist as suggested.",
      timestamp: "2 days ago",
      date: "Jan 6, 2025",
      messageCount: 15,
      category: "emergency",
      severity: "high"
    },
    {
      id: 4,
      title: "Diabetes Risk Analysis",
      lastMessage: "The lifestyle recommendations are very helpful. I'll start implementing them.",
      timestamp: "3 days ago",
      date: "Jan 5, 2025",
      messageCount: 20,
      category: "risk",
      severity: "moderate"
    },
    {
      id: 5,
      title: "Sleep Disorder Discussion",
      lastMessage: "I understand the importance of sleep hygiene now. Thank you!",
      timestamp: "1 week ago",
      date: "Jan 1, 2025",
      messageCount: 10,
      category: "symptoms",
      severity: "low"
    },
    {
      id: 6,
      title: "Vaccination Schedule Query",
      lastMessage: "Got all the information I needed about upcoming vaccinations.",
      timestamp: "1 week ago",
      date: "Dec 30, 2024",
      messageCount: 6,
      category: "medicine",
      severity: "low"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'symptoms':
        return '🩺';
      case 'medicine':
        return '💊';
      case 'emergency':
        return '🚨';
      case 'risk':
        return '⚠️';
      default:
        return '💬';
    }
  };

  const filteredHistory = chatHistory.filter(chat => {
    const matchesSearch = chat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || chat.category === filterBy;
    return matchesSearch && matchesFilter;
  });

  const handleChatSelect = (chatId) => {
    setSelectedChats(prev => 
      prev.includes(chatId) 
        ? prev.filter(id => id !== chatId)
        : [...prev, chatId]
    );
  };

  const handleGoBack = () => {
    console.log('Navigate back to main app');
  };

  const handleChatClick = (chatId) => {
    console.log('Open chat:', chatId);
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected chats:', selectedChats);
    setSelectedChats([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleGoBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-semibold text-gray-800">Chat History</h1>
                  <p className="text-sm text-gray-600">
                    {filteredHistory.length} conversation{filteredHistory.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>
            {selectedChats.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition-all duration-200 shadow-lg"
              >
                <Trash2 className="w-4 h-4" />
                Delete ({selectedChats.length})
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="pl-10 pr-8 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="symptoms">Symptoms</option>
                  <option value="medicine">Medicine</option>
                  <option value="emergency">Emergency</option>
                  <option value="risk">Risk Analysis</option>
                </select>
              </div>
            </div>
          </div>

          {/* Chat List */}
          <div className="divide-y divide-gray-200">
            {filteredHistory.length === 0 ? (
              <div className="p-12 text-center">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No conversations found</h3>
                <p className="text-gray-500">
                  {searchTerm ? 'Try adjusting your search terms' : 'Your chat history will appear here'}
                </p>
              </div>
            ) : (
              filteredHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                    selectedChats.includes(chat.id) ? 'bg-cyan-50 border-l-4 border-cyan-500' : ''
                  }`}
                  onClick={() => handleChatClick(chat.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedChats.includes(chat.id)}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleChatSelect(chat.id);
                            }}
                            className="w-4 h-4 text-cyan-600 rounded border-gray-300 focus:ring-cyan-500"
                          />
                          <span className="text-lg">{getCategoryIcon(chat.category)}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 truncate">{chat.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(chat.severity)}`}>
                          {chat.severity}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {chat.lastMessage}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {chat.timestamp}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {chat.messageCount} messages
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {chat.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('More options for chat:', chat.id);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage; // Changed from historyPage to HistoryPage