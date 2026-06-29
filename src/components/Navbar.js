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
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full" style={{ display: 'block', background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          
          {/* LEFT: LOGO & COMPANY NAME */}
          <div className="flex items-center space-x-2 min-w-0 max-w-[70%]" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden rounded bg-gray-100" style={{ width: '40px', height: '40px' }}>
              <img 
                src="logo1.jpeg" 
                alt="Logo" 
                className="w-full h-full object-contain"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="min-w-0" style={{ marginLeft: '8px' }}>
              <h1 className="text-blue-900 font-bold text-sm sm:text-base leading-tight tracking-wide uppercase truncate" style={{ color: '#1e3a8a', fontWeight: 'bold', margin: 0 }}>
                Global Gateway
              </h1>
              <span className="text-gray-500 text-[10px] block tracking-widest uppercase truncate" style={{ color: '#6b7280', fontSize: '10px', display: 'block' }}>
                Internationals
              </span>
            </div>
          </div>

          {/* DESKTOP MENU (custom-desktop-menu மூலம் சிஎஸ்எஸ்-ல் கட்டுப்படுத்தப்படுகிறது) */}
          <div className="custom-desktop-menu space-x-6 flex-shrink-0">
            {navLinks.map((link, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentPage && setCurrentPage(link.path)}
                className={`font-medium text-sm transition duration-200 whitespace-nowrap ${
                  currentPage === link.path ? 'text-blue-900 font-bold border-b-2 border-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
                style={{ background: 'none', border: 'none', padding: '0 10px', fontSize: '14px', cursor: 'pointer' }}
              >
                {link.title}
              </button>
            ))}
          </div>

          {/* RIGHT: MOBILE HAMBURGER BUTTON (custom-mobile-hamburger மூலம் மொபைலில் மட்டும் போர்ஸ் செய்து காட்டப்படும்) */}
          <div className="custom-mobile-hamburger">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              style={{ padding: '8px', borderRadius: '6px', backgroundColor: '#f9fafb', border: '1px solid #d1d5db', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {!mobileMenuOpen ? (
                <svg style={{ width: '24px', height: '24px', color: '#374151' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg style={{ width: '24px', height: '24px', color: '#374151' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN LINKS MENU */}
      {mobileMenuOpen && (
        <div className="bg-white border-t border-gray-100 shadow-inner w-full absolute left-0" style={{ position: 'absolute', width: '100%', left: 0, top: '80px', background: '#fff', borderTop: '1px solid #f3f4f6', zIndex: 999, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
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
                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', border: 'none', background: currentPage === link.path ? '#eff6ff' : 'transparent', color: currentPage === link.path ? '#1e3a8a' : '#374151', borderRadius: '6px', marginBottom: '4px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
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