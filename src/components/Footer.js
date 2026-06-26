import React from 'react';

export default function Footer({ setCurrentPage }) {
  // Footer-லும் அதே 7 பேஜுகள் லிங்க் செய்யப்பட்டுள்ளது
  const footerItems = [
    { id: 'home', label: 'Home' },
    { id: 'migrate', label: 'Migrate' },
    { id: 'work', label: 'Work Visa' },
    { id: 'study', label: 'Study Visa' },
    { id: 'visit', label: 'Visit Visa' },
    { id: 'dependent', label: 'Dependent Family' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <footer className="bg-blue-950 text-gray-400 py-8 border-t border-blue-900 text-sm w-full">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <p className="text-gray-300 font-medium">Global Gateway Internationals &bull; Professional Immigration Consultants</p>
        
        {/* மொபைல் ஸ்கிரீனிலும் 7 லிங்குகளும் கட் ஆகாமல் வளைந்து கொடுக்கும்படி flex-wrap செய்யப்பட்டுள்ளது */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          {footerItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setCurrentPage(item.id)} 
              className="hover:text-amber-400 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
