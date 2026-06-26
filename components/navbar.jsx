import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Ungaloda pages list inga potukkoonga
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT SIDE: LOGO & COMPANY NAME */}
          <div className="flex items-center space-x-3">
            {/* Logo image handling - image correct path kudunga, load aagalana initial text kaatum */}
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded">
              <img 
                src="/logo.png" // Path correct ah check pannikonga (e.g., assets folder or public folder)
                alt="Global Gateway Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Image path thappa irundha error varama text-ah flat panradhuku shortcut
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <h1 className="text-blue-900 font-bold text-lg leading-tight tracking-wide uppercase">
                Global Gateway
              </h1>
              <span className="text-gray-500 text-xs block tracking-widest uppercase">
                Internationals
              </span>
            </div>
          </div>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.path} 
                className="text-gray-700 hover:text-blue-900 font-medium transition duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON (Right Side) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-900 focus:outline-none p-2 border border-gray-300 rounded-lg bg-gray-50"
              aria-label="Toggle menu"
            >
              {/* Conditional Menu Icon (Hamburger / Close Cross) */}
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN PAGES MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner animate-fadeIn">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition duration-150"
                onClick={() => setIsOpen(false)} // Page select panna menu auto close aagidum
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