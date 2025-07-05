import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bot, Package, Clock, FileBarChart2 } from 'lucide-react';

const ChatLayout = () => {
  const { pathname } = useLocation();

  const navItems = [
    { path: '/', label: 'Chat', icon: Bot },
    { path: '/delivery', label: 'Delivery', icon: Package },
    { path: '/history', label: 'History', icon: Clock },
    { path: '/report-status', label: 'Reports', icon: FileBarChart2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow border-b px-6 py-4 sticky top-0 z-20">
        <h1 className="text-xl font-semibold text-gray-800">Healora Dashboard</h1>
      </header>

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-sm p-4 space-y-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 p-2 rounded-lg transition hover:bg-cyan-50 ${
                pathname.startsWith(path) ? 'bg-cyan-100 text-cyan-700 font-medium' : 'text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ChatLayout;
