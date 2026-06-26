import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  // உங்க App.js-ல் இருக்கும் 7 பேஜஸையும் இங்க ஆட் பண்ணியாச்சு
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
        
        {/* மொபைலில் லோகோ மற்றும் பட்டன்ஸ் ஒன்னுக்கு கீழ ஒன்னு (flex-col) வரும், லேப்டாப்பில் பக்கத்துல (md:flex-row) மாறும் */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:h-24 gap-4 md:gap-0">
          
          {/* Company Logo / Name */}
          <div className="flex-shrink-0 cursor-pointer text-center md:text-left" onClick={() => setCurrentPage('home')}>
            <span className="font-bold text-xl tracking-wider text-amber-400 block">GLOBAL GATEWAY</span>
            <span className="block text-xs font-semibold tracking-widest text-gray-300">INTERNATIONALS</span>
          </div>
          
          {/* Navigation Menu Buttons */}
          {/* flex-wrap கொடுத்திருக்கறதால மொபைல் ஸ்கிரீனுக்கு ஏத்த மாதிரி பட்டன்ஸ் தானாக அடுத்தடுத்த லைனுக்கு நீட்டா வந்துடும், கட் ஆகாது */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 md:ml-auto max-w-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 ${
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