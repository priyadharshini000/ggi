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
      <div className="max-w-7xl mx-auto px-3 py-3">
        
        {/* மொபைல் மற்றும் சிஸ்டம் லேஅவுட்டை சீரமைக்கும் கன்டைனர் */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          
          {/* கம்பெனி பெயர் (டெக்ஸ்ட் லோகோவாக மாற்றப்பட்டுள்ளது, இதனால் படம் உடையாது) */}
          <div className="flex-shrink-0 cursor-pointer text-center sm:text-left" onClick={() => setCurrentPage('home')}>
            <span className="font-bold text-lg sm:text-xl tracking-wider text-amber-400 block">GLOBAL GATEWAY</span>
            <span className="block text-[10px] sm:text-xs font-semibold tracking-widest text-gray-300">INTERNATIONALS</span>
          </div>
          
          {/* 7 பட்டன்களும் மொபைல் ஸ்க்ரீனிற்குள் அழகாக மடிந்து (Wrap) காட்டும் பகுதி */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 w-full sm:w-auto sm:justify-end">
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