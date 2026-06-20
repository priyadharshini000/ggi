import React, { useState } from 'react';

export default function VisitVisa() {
  const [activeCountry, setActiveCountry] = useState('Canada');

  const visitData = {
    Canada: {
      intro: "Canada is a breathtaking destination known for its vibrant cities, vast natural landscapes, and welcoming environment. Whether you want to explore the Rocky Mountains, visit family, or attend business meetings, a tourist visa opens the doors to unforgettable seasonal experiences.",
      eligibility: "Applicants must hold a valid passport, prove financial self-sufficiency to cover all trip expenses, and provide a clear itinerary. Crucially, you must demonstrate strong ties to India (such as stable employment, property ownership, or close family) to assure immigration officers of your guaranteed return."
    },
    Australia: {
      intro: "From the iconic Sydney Opera House to the stunning Great Barrier Reef, Australia offers a world-class tourism experience. A visitor visa allows you to immerse yourself in its relaxed holiday culture, visit friends and relatives, or explore emerging commercial business opportunities.",
      eligibility: "Requires applying for the Visitor Visa (Subclass 600). You need to provide comprehensive bank statements showing consistent funds, an employment certificate or business proof from India, a detailed day-wise travel plan, and upfront verification ensuring compliance with strict healthcare standards."
    },
    "New Zealand": {
      intro: "New Zealand is a paradise of untouched landscapes, clean air, and world-renowned adventure tourism. Ideal for solo travelers, families, and nature enthusiasts, a tourist visa lets you discover both the North and South islands at your own leisure and pace.",
      eligibility: "Applicants must provide verifiable proof of adequate funds (such as salary slips, tax records, or bank deposits) to support themselves during the stay. You must also supply fully confirmed onward or return flight tickets alongside a valid accommodation layout."
    },
    UK: {
      intro: "The United Kingdom blends rich historical heritage with a modern, fast-paced global culture. A standard visitor visa allows you to explore England, Scotland, Wales, and Northern Ireland for leisure, family gatherings, short-term courses, or corporate networking.",
      eligibility: "Requires a Standard Visitor Visa application. You must submit solid financial documentation proving you can support yourself without accessing public funds. A clear invitation letter (if visiting family/friends) or a detailed hotel booking, along with strong proof of ongoing ties to India, is mandatory."
    },
    Europe: {
      intro: "A single Schengen Visa unlocks seamless travel across 29 incredible European countries, including France, Switzerland, Germany, and Italy. This visa is perfect for tourists looking to explore multiple historic cultures, architectural landmarks, and scenic landscapes in a single trip.",
      eligibility: "Requires a valid Schengen Tourist Visa application. You must present a fully booked round-trip flight itinerary, comprehensive travel medical insurance covering up to €30,000, confirmed hotel reservations across all destinations, and clear 3-to-6 months bank statements with adequate balances."
    },
    "South Korea": {
      intro: "South Korea is a dynamic hub where ancient palaces and futuristic smart-cities live side by side. Driven by the global popularity of K-Culture, it has become a top tourist destination for shopping, food, technological marvels, and beautiful cherry blossom festivals.",
      eligibility: "Applicants must submit an active employment certificate, income tax returns (ITR) to prove financial capacity, a valid passport, and a comprehensive travel timeline. The process requires establishing a clear purpose of visit with transparent accommodation details."
    },
    Japan: {
      intro: "Japan offers an unmatched travel experience, seamlessly balancing sacred shrines and traditional tea ceremonies with bullet trains and neon-lit streets. A short-term tourist visa lets you experience its exceptional safety, legendary hospitality (Omotenashi), and seasonal natural beauty.",
      eligibility: "The application requires a valid passport, official visa application form, a clear day-by-day travel schedule (Itinerary), and solid proof of financial stability (recent bank passbooks or tax filings). If sponsored, a formal guarantee letter from the host is required."
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Explore the World Hassle-Free</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-4">
            Reliable Visitor & Tourist Visa Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Planning a vacation or a business trip abroad shouldn't be stressful. We streamline your documentation process, assist with critical embassy requirements, and maximize your visa approval chances so you can focus on your journey.
          </p>
        </div>

        {/* Dropdown / Country Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          {Object.keys(visitData).map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-5 py-2.5 rounded-md font-medium text-sm transition-all ${
                activeCountry === country 
                  ? 'bg-blue-900 text-white shadow' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-900 inline-block">
            Visit {activeCountry}
          </h2>
          
          <div className="space-y-6">
            {/* Introduction */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Destination Overview</h3>
              <p className="text-gray-600 leading-relaxed text-justify">{visitData[activeCountry].intro}</p>
            </div>
            
            {/* Eligibility Block */}
            <div className="bg-blue-50/60 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Key Documentation & Visa Requirements</h3>
              <p className="text-gray-700 leading-relaxed text-justify">{visitData[activeCountry].eligibility}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}