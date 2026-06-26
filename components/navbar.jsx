import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'migrate', label: 'Migrate' },
    { id: 'work', label: 'Work Visa' },
    { id: 'study', label: 'Study Visa' },
    { id: 'visit', label: 'Visit Visa' },
    { id: 'dependent', label: 'Dependent Family' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* py-4 கொடுத்து h-auto ஆக்கியாச்சு, அதனால் மொபைலில் தேவையான உயரத்தை அதுவே எடுத்துக்கொள்ளும் */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:h-24 gap-4 md:gap-0">
          
          {/* Company Logo / Name */}
          <div className="flex-shrink-0 cursor-pointer text-center md:text-left" onClick={() => setCurrentPage('home')}>
            <span className="font-bold text-xl tracking-wider text-amber-400 block">GLOBAL GATEWAY</span>
            <span className="block text-xs font-semibold tracking-widest text-gray-300">INTERNATIONALS</span>
          </div>
          
          {/* Navigation Menu Buttons */}
          {/* flex-wrap w-full justify-center கொடுத்திருப்பதால் மொபைலில் ஸ்க்ரோல் ஆகாமல் பட்டன்ஸ் தானாக கீழே இறங்கி வரும் */}
          <div className="flex flex-wrap justify-center items-center gap-2 w-full md:w-auto md:justify-end md:ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-2.5 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-normal text-center ${
                  currentPage === item.id 
                    ? 'text-amber-400 bg-blue-950 border border-amber-400/20' 
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