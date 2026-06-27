import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Visit Visa', path: '/Visitvisa' },
    { title: 'Migrate', path: '/Migrate' },
    { title: 'Work Visa', path: '/WorkVisa' },
    { title: 'Study Visa', path: '/StudyVisa' },
    { title: 'Dependent', path: '/Dependent-Family' },
    { title: 'Contact', path: '/Contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIXED: items-center and flex-row forced, overflow protected */}
        <div className="flex justify-between items-center h-20 w-full overflow-hidden">
          
          {/* LEFT SIDE: LOGO & COMPANY NAME */}
          <div className="flex items-center space-x-2 min-w-0 max-w-[75%]">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden rounded bg-gray-100">
              <img 
                // FIXED: GitHub Pages sub-folder route handle panna relative image path set panniyachu
                src="logo1.jpeg" 
                alt="Global Gateway Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            {/* FIXED: text wrap restricted so it won't break layout on tiny mobile screens */}
            <div className="truncate">
              <h1 className="text-blue-900 font-bold text-sm md:text-base leading-tight tracking-wide uppercase truncate">
                Global Gateway
              </h1>
              <span className="text-gray-500 text-[10px] block tracking-widest uppercase truncate">
                Internationals
              </span>
            </div>
          </div>

          {/* DESKTOP MENU (Navbar.js kulla replace panna vendiyadhu) */}
<div className="hidden lg:flex space-x-6">
  {navLinks.map((link, index) => (
    <button 
      key={index} 
      onClick={() => {
        if(link.title === 'Home') setCurrentPage('home');
        if(link.title === 'Visit Visa') setCurrentPage('visit');
        if(link.title === 'Migrate') setCurrentPage('migrate');
        if(link.title === 'Work Visa') setCurrentPage('work');
        if(link.title === 'Study Visa') setCurrentPage('study');
        if(link.title === 'Dependent') setCurrentPage('dependent');
        if(link.title === 'Contact') setCurrentPage('contact');
      }}
      className={`font-medium text-sm transition duration-200 whitespace-nowrap ${currentPage === link.title.toLowerCase() ? 'text-blue-900 font-bold' : 'text-gray-700 hover:text-blue-900'}`}
    >
      {link.title}
    </button>
  ))}
</div>

          {/* MOBILE HAMBURGER BUTTON (Forced block view on mobile/tablet resolutions) */}
          <div className="flex lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-900 focus:outline-none p-2 border border-gray-300 rounded-lg bg-gray-50 transition-all z-50"
              aria-label="Toggle menu"
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

      {/* MOBILE DROPDOWN PAGES MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner w-full absolute left-0 top-20 z-40 block">
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="block px-4 py-3 rounded-md text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;