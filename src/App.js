import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import WorkVisa from './pages/WorkVisa';
import StudyVisa from './pages/StudyVisa';
import Contact from './pages/Contact';

// புதுசா சேர்க்கப்பட்ட 3 பக்கங்களின் இம்போர்ட்ஸ் (ஃபைல் பெயர்களை செக் செய்து கொள்ளவும்)
import Migrate from './pages/Migrate'; 
import VisitVisa from './pages/VisitVisa'; 
import DependentFamily from './pages/DependentFamily'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'migrate':
        return <Migrate />; // புது பக்கம் 1
      case 'work':
        return <WorkVisa />;
      case 'study':
        return <StudyVisa />;
      case 'visit':
        return <VisitVisa />; // புது பக்கம் 2
      case 'dependent':
        return <DependentFamily />; // புது பக்கம் 3
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 selection:bg-amber-200">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppIcon />
    </div>
  );
}