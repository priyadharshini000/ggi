import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'migrate', label: 'Migrate' },
    { id: 'work', label: 'Work' },
    { id: 'study', label: 'Study' },
    { id: 'visit', label: 'Visit' },
    { id: 'dependent', label: 'Dependent' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        
        {/* சிஸ்டம் மற்றும் மொபைல் இரண்டிலும் ஒரே லேஅவுட்டில் வர வைக்க flex-row மற்றும் flex-wrap கொடுத்துள்ளோம் */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-3 sm:gap-0">
          
          {/* Company Logo / Name */}
          <div className="flex-shrink-0 cursor-pointer text-center sm:text-left" onClick={() => setCurrentPage('home')}>
            <span className="font-bold text-lg sm:text-xl tracking-wider text-amber-400 block">GLOBAL GATEWAY</span>
            <span className="block text-[10px] sm:text-xs font-semibold tracking-widest text-gray-300">INTERNATIONALS</span>
          </div>
          
          {/* Navigation Menu Buttons */}
          {/* 'flex-wrap' பட்டன்ஸை ஸ்க்ரோல் ஆக விடாமல் மொபைல் ஸ்க்ரீனிற்குள் கச்சிதமாக மடிந்து காட்டும் */}
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 w-full sm:w-auto sm:justify-end">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-2 py-1 rounded text-[11px] sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  currentPage === item.id 
                    ? 'text-amber-400 bg-blue-950 border border-amber-400/30' 
                    : 'text-gray-100 hover:text-amber-400 hover:bg-blue-800'
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