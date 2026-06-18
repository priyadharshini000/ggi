import React from 'react';

export default function WhatsAppIcon() {
  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919876543210', '_blank'); // Unga WhatsApp number-ah inga mathிக்கலாம்
  };

  return (
    <div 
      onClick={handleWhatsAppChat}
      className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl cursor-pointer hover:bg-green-600 transition-all transform hover:scale-105 z-50 group font-sans"
    >
      <span className="text-sm font-bold tracking-wide">
        Chat with us Now!
      </span>
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.948 0c3.174.001 6.157 1.237 8.401 3.484 2.244 2.247 3.478 5.23 3.477 8.404-.004 6.557-5.345 11.905-11.893 11.905-2.003-.001-3.973-.508-5.719-1.472L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.75 1.451 5.378 0 9.752-4.368 9.754-9.743.001-2.605-1.013-5.053-2.859-6.897C16.4 2.122 13.957 1.109 11.353 1.109c-5.383 0-9.759 4.373-9.763 9.751-.001 1.666.452 3.284 1.31 4.716l-.991 3.616 3.738-.979z"/>
      </svg>
    </div>
  );
}