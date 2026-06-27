import React from 'react';

export default function Home({ setCurrentPage }) {
  return (
    // 💡 FIXED: w-full, max-w-full மக்னீசம் மூலம் லாக் செய்யப்பட்டுள்ளது
    <div className="w-full max-w-full overflow-hidden bg-gray-50 min-h-screen block">
      
      {/* Hero Section */}
      {/* 💡 FIXED: bg-gradient பிரச்சனையை நீக்கி, சுத்தமான bg-blue-900 மற்றும் மொபைல் padding செட் செய்யப்பட்டுள்ளது */}
      <div className="bg-blue-900 text-white py-16 sm:py-24 px-4 text-center w-full block overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Make a Step Towards Your Global Opportunity
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Pursue your job opportunities in major global hubs with our expert immigration guidance.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg uppercase text-sm sm:text-base transition-all"
          >
            Book Your Consultation
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto py-12 sm:py-16 px-4 block overflow-hidden">
        <div className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 text-center">Who we are?</h2>
          <div className="text-gray-600 space-y-4 leading-relaxed text-base sm:text-lg">
            <p>
              At <strong>Global Gateway Internationals</strong>, we are a premier global immigration consultancy. 
              Our core expertise lies in providing Work Visa solutions, helping skilled professionals relocate 
              and secure careers in top destinations like Canada, Australia, Europe, the UK, New Zealand, Singapore, and the Gulf.
            </p>
            <p>
              Alongside our primary work immigration services, we also provide streamlined Study Visa pathways for 
              students looking to transition from world-class education into successful global careers. From work 
              permits to university placements, we simplify the journey to your international future.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-gray-100 py-12 sm:py-16 px-4 block overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-10">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Service 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-t-4 border-blue-900 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">Work Visa</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Land your dream job abroad. Get expert help with employer-sponsored visas, skilled worker permits, and legal relocation for your family.
                </p>
              </div>
              <button 
                onClick={() => setCurrentPage('work')}
                className="text-blue-900 font-semibold hover:text-amber-500 flex items-center gap-2 transition-colors mt-4 text-sm sm:text-base"
              >
                Explore Destinations &rarr;
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-t-4 border-amber-500 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">Study Visa</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Unlock your academic potential. From university selection to visa approval, we guide you toward the best global education paths.
                </p>
              </div>
              <button 
                onClick={() => setCurrentPage('study')}
                className="text-blue-900 font-semibold hover:text-amber-500 flex items-center gap-2 transition-colors mt-4 text-sm sm:text-base"
              >
                Explore Academic Paths &rarr;
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}