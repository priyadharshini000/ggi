import React, { useState } from 'react';

export default function Migrate() {
  const [activeCountry, setActiveCountry] = useState('Canada');

  const migrateData = {
    Canada: {
      intro: "Canada remains one of the world's top destinations for skilled workers, offering a high standard of living, stable economy, and welcoming community. Through its robust immigration frameworks, foreign nationals can transition into a culturally diverse society with excellent social benefits, public healthcare, and free education for children.",
      eligibility: "The primary pathway is the Express Entry system, which operates on a points-based Comprehensive Ranking System (CRS). Points are awarded for age, holding a Bachelor's degree or higher, relevant skilled work experience, and strong language proficiency (typically achieving a CLB 7 to CLB 9 score in IELTS or CELPIP)."
    },
    Australia: {
      intro: "Australia combines economic prosperity with an exceptional outdoor lifestyle, making it highly attractive for global professionals. Migration here grants access to a strong job market, universal healthcare (Medicare), a top-tier schooling system, and a pathway to citizenship in one of the most livable countries on Earth.",
      eligibility: "Most applicants look toward General Skilled Migration (GSM) visas like the Subclass 189 or 190. You must score at least 65 points on the points test, have an occupation listed on the relevant Skilled Occupation List, clear a mandatory Skills Assessment, and demonstrate Competent English (minimum 6.0 in each IELTS band)."
    },
    UK: {
      intro: "The United Kingdom offers skilled professionals the chance to advance their careers within a historic yet innovative economy. With its world-recognized corporate hubs, migrating to the UK allows individuals and families to secure an enriched quality of life, access the National Health Service (NHS), and enjoy broad European connectivity.",
      eligibility: "Migration is primarily driven by the Points-Based Skilled Worker Visa system. To qualify, you must have a formal job offer from a UK-licensed sponsor at an eligible skill level, meet the minimum salary threshold set for your specific occupation code, and prove English language proficiency at a CEFR level B1 minimum (IELTS 4.0 or higher)."
    },
    "New Zealand": {
      intro: "New Zealand provides a safe, peaceful, and clean environment ideal for raising families while pursuing meaningful career paths. Known for its perfect work-life balance and strong emphasis on community wellbeing, migrating here provides a permanent home in an economy actively seeking specialized talent.",
      eligibility: "The Skilled Migrant Category uses a simplified 6-point system where points are gained from professional registration, qualification level, or high income, alongside years of skilled work experience in the country. A minimum overall IELTS score of 6.5 is required, along with a formal job offer from an accredited employer."
    },
    Germany: {
      intro: "Germany stands as Europe's economic engine, offering unparalleled industrial stability, strong employee protections, and high wages. Migrating to Germany opens doors to world-class innovation hubs, social security benefits, free university education, and unrestricted travel access across all 29 Schengen zone nations.",
      eligibility: "The Opportunity Card (Chancenkarte) or standard Skilled Worker visa requires a recognized university degree or vocational qualification. Under the points-based card, you need a minimum of 6 points based on qualifications, age, language skills (German A1-B2 or English B2), and link to Germany. No formal job offer is required to apply for the card itself."
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Your Path to Permanent Residency</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-4">
            Expert Visa Guidance for Global Migration
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Navigating immigration laws can be overwhelming. We simplify your journey by matching your professional skills with international point systems, providing a smooth transition to your dream destination. Secure your family's future today.
          </p>
        </div>

        {/* Dropdown / Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          {Object.keys(migrateData).map((country) => (
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

        {/* Country Content Card */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-900 inline-block">
            Migrate to {activeCountry}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Why Migrate Here?</h3>
              <p className="text-gray-600 leading-relaxed">{migrateData[activeCountry].intro}</p>
            </div>
            <div className="bg-blue-50/60 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Migration & Points Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">{migrateData[activeCountry].eligibility}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}