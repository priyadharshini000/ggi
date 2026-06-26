import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  // மொபைல் மெனு ஓபன்/க்ளோஸ் செய்ய ஒரு ஸ்டேட்
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'migrate', label: 'Migrate' },
    { id: 'work', label: 'Work' },
    { id: 'study', label: 'Study' },
    { id: 'visit', label: 'Visit' },
    { id: 'dependent', label: 'Dependent' },
    { id: 'contact', label: 'Contact' }
  ];

  const handlePageChange = (id) => {
    setCurrentPage(id);
    setIsOpen(false); // பட்டனை கிளிக் பண்ணியதும் மொபைல் மெனு தானாக மூடிக்கொள்ளும்
  };

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo / Company Name */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handlePageChange('home')}>
            <span className="font-bold text-lg sm:text-xl tracking-wider text-amber-400 block">GLOBAL GATEWAY</span>
            <span className="block text-[10px] sm:text-xs font-semibold tracking-widest text-gray-300">INTERNATIONALS</span>
          </div>

          {/* நீங்க கேட்ட அந்த 3 கோடுகள் கொண்ட மொபைல் பட்டன் (Hamburger Button) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="sm:hidden block p-2 rounded border border-gray-400 text-gray-200 hover:text-white hover:border-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                // மெனு ஓபனில் இருக்கும் போது 'X' மார்க் காட்டும்
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // மெனு க்ளோஸ் ஆகி இருக்கும் போது 3 கோடுகள் காட்டும்
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* சிஸ்டம்/லேப்டாப்பில் எப்போதும் தெரியும் பட்டன்கள் (sm:flex) */}
          <div className="hidden sm:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors duration-200 ${
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

        {/* மொபைலில் 3 கோடு பட்டனை கிளிக் செய்தால் மட்டும் கீழே ஓபன் ஆகும் மெனு லிஸ்ட் */}
        {isOpen && (
          <div className="sm:hidden mt-3 pt-2 border-t border-blue-800 flex flex-col gap-1 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`w-full text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
                  currentPage === item.id 
                    ? 'text-amber-400 bg-blue-950' 
                    : 'text-gray-100 hover:bg-blue-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}