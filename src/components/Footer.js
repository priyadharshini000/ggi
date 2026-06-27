import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const footerItems = [
    { id: '/', label: 'Home' },
    { id: '/Visitvisa', label: 'Visit Visa' },
    { id: '/Migrate', label: 'Migrate' },
    { id: '/WorkVisa', label: 'Work Visa' },
    { id: '/StudyVisa', label: 'Study Visa' },
    { id: '/Dependent-Family', label: 'Dependent Family' },
    { id: '/Contact', label: 'Contact Us' }
  ];

  return (
    <footer className="bg-blue-950 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">Global Gateway</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in international immigration, study visas, and global career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2">
              {footerItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.id}
                    className="text-gray-300 hover:text-white transition duration-150 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact Us</h4>
            <p className="text-gray-300 text-sm mb-2">Email: info@globalgateway.com</p>
            <p className="text-gray-300 text-sm">Support: Available 24/7</p>
          </div>

        </div>

        <div className="border-t border-blue-900 mt-8 pt-6 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Global Gateway Internationals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;