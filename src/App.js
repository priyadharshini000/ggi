import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';

// Unga pages core files (Exact string alignment match)
import Home from './pages/Home';
import Migrate from './pages/Migrate';
import WorkVisa from './pages/WorkVisa';
import StudyVisa from './pages/StudyVisa';
import Visitvisa from './pages/Visitvisa'; // 👈 'v' is caps, 'v'isa is small (Exact match!)
import DependentFamily from './pages/Dependent-Family';
import Contact from './pages/Contact';

export default function App() {
  // Application default page state hook
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'migrate':
        return <Migrate />;
      case 'work':
        return <WorkVisa />;
      case 'study':
        return <StudyVisa />;
      case 'visit':
        return <Visitvisa />;
      case 'dependent':
        return <DependentFamily />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col font-sans antialiased text-gray-900 selection:bg-amber-200">
      
      {/* FIXED: Navbar-ku currentPage and setCurrentPage state dynamic props-ah pass panniyachu */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="flex-grow w-full">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppIcon />
    </div>
  );
}