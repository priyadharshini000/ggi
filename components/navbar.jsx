import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work Visa' },
    { id: 'study', label: 'Study Visa' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed items-center to items-baseline or kept justify-between for proper spacing */}
        <div className="flex items-center justify-between h-20">
          
          {/* Company Logo / Name (Left Side) */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <span className="font-bold text-xl tracking-wider text-amber-400">GLOBAL GATEWAY</span>
            <span className="block text-xs font-semibold tracking-widest text-gray-300">INTERNATIONALS</span>
          </div>
          
          {/* Navigation Menu Buttons (Moved to Right Side using ml-auto or flex properties) */}
          <div className="flex space-x-4 md:space-x-6 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id 
                    ? 'text-amber-400 bg-blue-950' 
                    : 'text-gray-100 hover:text-amber-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}

