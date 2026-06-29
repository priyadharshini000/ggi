import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    // inline styles மூலமாக மொபைல் வியூவில் 100% பிக்ஸ் செய்யப்பட்டுள்ளது
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full" style={{ display: 'block' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* LEFT: LOGO & COMPANY NAME */}
          <div className="flex items-center space-x-2 min-w-0 max-w-[70%]" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden rounded bg-gray-100">
              <img 
                src="logo1.jpeg" 
                alt="Logo" 
                className="w-full h-full object-contain"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="min-w-0" style={{ marginLeft: '8px' }}>
              <h1 className="text-blue-900 font-bold text-sm sm:text-base leading-tight tracking-wide uppercase truncate">
                Global Gateway
              </h1>
              <span className="text-gray-500 text-[10px] block tracking-widest uppercase truncate">
                Internationals
              </span>
            </div>
          </div>

          {/* DESKTOP MENU (Pure CSS Media Query மூலம் லாக் செய்யப்பட்டுள்ளது) */}
          <div className="hidden lg:flex space-x-6 flex-shrink-0 custom-desktop-menu">
            {navLinks.map((link, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentPage && setCurrentPage(link.path)}
                className={`font-medium text-sm transition duration-200 whitespace-nowrap ${
                  currentPage === link.path ? 'text-blue-900 font-bold border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                style={{ background: 'none', border: 'none', padding: '0 10px' }}
              >
                {link.title}
              </button>
            ))}
          </div>

          {/* RIGHT: MOBILE HAMBURGER BUTTON (கட்டாயமாக மொபைலில் மட்டும் தெரியும்படி செய்யப்பட்டுள்ளது) */}
          <div className="custom-mobile-hamburger">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-900 focus:outline-none p-2 border border-gray-300 rounded-lg bg-gray-50"
              style={{ padding: '8px', borderRadius: '6px', backgroundColor: '#f9fafb', border: '1px solid #d1d5db', cursor: 'pointer' }}
            >
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN LINKS MENU */}
      {mobileMenuOpen && (
        <div className="bg-white border-t border-gray-100 shadow-inner w-full absolute left-0 top-20 z-40" style={{ position: 'absolute', width: '100%', left: 0, background: '#fff', borderTop: '1px solid #f3f4f6', zIndex: 999 }}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white" style={{ padding: '16px' }}>
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  if (setCurrentPage) setCurrentPage(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition duration-150 ${
                  currentPage === link.path ? 'bg-blue-50 text-blue-900 font-bold' : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', border: 'none', background: currentPage === link.path ? '#eff6ff' : 'none', borderRadius: '6px', marginBottom: '4px' }}
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;