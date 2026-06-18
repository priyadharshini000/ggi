import React from 'react';

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-blue-950 text-gray-400 py-8 border-t border-blue-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <p className="text-gray-300 font-medium">Global Gateway Internationals &bull; Professional Immigration Consultants</p>
        <div className="flex justify-center space-x-6 text-xs">
          <button onClick={() => setCurrentPage('home')} className="hover:text-amber-400">Home</button>
          <button onClick={() => setCurrentPage('work')} className="hover:text-amber-400">Work Visa Details</button>
          <button onClick={() => setCurrentPage('study')} className="hover:text-amber-400">Study Paths</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-amber-400">Contact Us</button>
        </div>
      </div>
    </footer>
  );
}