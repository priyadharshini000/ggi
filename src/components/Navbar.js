import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // மொபைல் ஸ்க்ரீனா இல்லையான்னு செக் பண்ண சின்ன ட்ரிக் (Responsive check)
  const isMobile = window.innerWidth < 768;

  return (
    <nav style={{ backgroundColor: '#ffffff', width: '100%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 16px', display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
        
        {/* லோகோ பகுதி */}
        <div>
          <img src="logo.png" alt="GGI Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </div>

        {/* 🍔 மொபைல் ஹேம்பர்கர் பட்டன் - எப்போதும் தெரியும் படி (Force Display) */}
        <div>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            {/* பட்டன் உள்ளே ஹேம்பர்கர் (3 கோடுகள்) அல்லது 'X' மார்க் */}
            {isOpen ? (
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>✕</span>
            ) : (
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>☰</span>
            )}
          </button>
        </div>

      </div>

      {/* மெனு டிராப்டவுன் (கிளிக் பண்ணா மட்டும் ஓபன் ஆகும்) */}
      {isOpen && (
        <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #eee', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>About</a>
          <a href="#services" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Services</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;