import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: 'home' },
    { title: 'Visit Visa', path: 'visit' },
    { title: 'Migrate', path: 'migrate' },
    { title: 'Work Visa', path: 'work' },
    { title: 'Study Visa', path: 'study' },
    { title: 'Dependent', path: 'dependent' },
    { title: 'Contact', path: 'contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          
          {/* LEFT: LOGO & COMPANY NAME */}
          <div className="flex items-center space-x-2 min-w-0 max-w-[70%]">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden rounded bg-gray-100">
              <img 
                src="logo1.jpeg" 
                alt="Logo" 
                className="w-full h-full object-contain"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-blue-900 font-bold text-sm sm:text-base leading-tight tracking-wide uppercase truncate">
                Global Gateway
              </h1>
              <span className="text-gray-500 text-[10px] block tracking-widest uppercase truncate">
                Internationals
              </span>
            </div>
          </div>

          {/* MIDDLE/RIGHT: DESKTOP MENU (Hidden on mobile) */}
          <div className="hidden lg:flex space-x-6 flex-shrink-0">
            {navLinks.map((link, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentPage && setCurrentPage(link.path)}
                className={`font-medium text-sm transition duration-200 whitespace-nowrap ${
                  currentPage === link.path ? 'text-blue-900 font-bold border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {link.title}
              </button>
            ))}
          </div>

          {/* RIGHT: MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-900 focus:outline-none p-2 border border-gray-300 rounded-lg bg-gray-50 z-50 relative"
            >
              {!isOpen ? (
                <svg className="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6 block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* BACKGROUND OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE SIDE HAMBURGER MENU DRAWER */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden pt-24 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="px-4 space-y-2">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                if (setCurrentPage) setCurrentPage(link.path);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-150 ${
                currentPage === link.path ? 'bg-blue-50 text-blue-900 font-bold' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;