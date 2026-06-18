import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'immigration',
    country: 'canada',
    message: '',
    cv: null
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setShowPopup(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'immigration',
      country: 'canada',
      message: '',
      cv: null
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 relative">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
        
        {/* Info Column */}
        <div className="md:col-span-2 bg-blue-900 text-white p-8 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-amber-400">Company Details</h2>
            <div className="space-y-6 text-sm text-blue-100">
              <div>
                <span className="block text-xs uppercase font-bold tracking-wider text-amber-500 mb-1">Our Corporate HQ</span>
                <p className="text-base font-medium">123 Global Gateway Tower, Business District, India</p>
              </div>
              <div>
                <span className="block text-xs uppercase font-bold tracking-wider text-amber-500 mb-1">Phone Helpline</span>
                <p className="text-base font-medium">+91 98765 43210</p>
              </div>
              <div>
                <span className="block text-xs uppercase font-bold tracking-wider text-amber-500 mb-1">Email Inquiries</span>
                <p className="text-base font-medium">info@globalgatewayintl.com</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-blue-300 mt-8 border-t border-blue-800 pt-4">
            Global Gateway Internationals &copy; All Rights Reserved.
          </p>
        </div>

        {/* Form Column */}
        <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase tracking-tight">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">NAME:</label>
              <input 
                type="text" required placeholder="Enter your name"
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">EMAIL:</label>
                <input 
                  type="email" required placeholder="Enter your email address"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">PHONE NUMBER:</label>
                <input 
                  type="tel" required placeholder="Enter your mobile number"
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">PREFERRED SERVICE:</label>
                <select 
                  value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full border border-gray-300 p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-900 text-sm"
                >
                  <option value="immigration">Immigration (Work Visa)</option>
                  <option value="Study">Study</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">COUNTRY PREFERENCE:</label>
                <select 
                  value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full border border-gray-300 p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-900 text-sm"
                >
                  <option value="canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Europe">Europe</option>
                  <option value="Newzealand">New Zealand</option>
                  <option value="UK">UK</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Gulf">Gulf</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">MESSAGE:</label>
              <textarea 
                rows="4" placeholder="Type your message here..."
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">DROP YOUR CV \ RESUME HERE:</label>
              <input 
                type="file" accept=".pdf,.doc,.docx"
                onChange={(e) => setFormData({...formData, cv: e.target.files[0]})}
                className="w-full border border-gray-300 p-2.5 rounded-lg bg-gray-50 text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-950"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-500 text-blue-950 font-bold p-3 rounded-lg uppercase tracking-wider hover:bg-amber-600 transition-colors shadow-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Popup Dialog Box */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-xl max-w-sm w-full text-center shadow-2xl border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Response Successfully Sent!</h3>
            <p className="text-gray-500 text-sm mb-6">Our team will get back to you soon.</p>
            <button 
              onClick={() => setShowPopup(false)}
              className="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-950 text-sm font-semibold transition-colors w-full"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}