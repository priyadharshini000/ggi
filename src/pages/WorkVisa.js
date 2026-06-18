import React, { useState } from 'react';

export default function WorkVisa() {
  const [activeCountry, setActiveCountry] = useState('Canada');

  const countryData = {
    Canada: {
      intro: "Canada is a top global hub for skilled professionals, offering excellent work-life balance, high living standards, and free healthcare. Indian citizens consistently lead its intake, securing over 40% of all Express Entry invitations. Working here also grants a fast-track pathway to Permanent Residency (PR) and open work permits for spouses.",
      eligibility: "Applicants must be at least 21 years old (ideally 21–40 to maximize selection points), hold a university degree/diploma verified by an ECA, and have at least 1 year of continuous, full-time professional work experience within the last 10 years. Additionally, clearing the IELTS General Training with a minimum score of 6.0 in each module (CLB 7) is generally required for most skilled immigration pathways."
    },
    Australia: {
      intro: "Australia is a premier global destination for skilled workers, celebrated for its high wages, booming economy, and great outdoor lifestyle. The Australian government heavily relies on overseas talent, allocating over 132,000 places to its Skilled Migration Program to fill critical shortages. Working here offers competitive salaries, top-tier healthcare benefits, and an excellent, long-term pathway to Permanent Residency (PR).",
      eligibility: "Applicants must be between 21 and 44 years of age (with maximum selection points awarded to those between 25 and 32). You must hold a university degree or trade qualification verified by a relevant Australian Skills Assessment authority, along with professional work experience in a high-demand occupation. Additionally, proving English language proficiency through IELTS or PTE with a minimum score equivalent to IELTS 6.0 in all bands."
    },
    Europe: {
      intro: "Europe offers highly skilled professionals top-tier Euro-based salaries, strong labor laws, and a premium quality of life. The EU Blue Card program allows non-EU talent to live and work across 25 European nations, providing free travel within the Schengen Zone and a direct pathway to permanent residency.",
      eligibility: "Applicants must be at least 21 years old and hold a valid job offer or employment contract from an EU employer for at least 6 months. Candidates must possess a recognized higher education degree or equivalent professional experience. While there is no universal language exam requirement, proficiency in English or the local language is essential, along with meeting the hiring country's minimum salary threshold."
    },
    "New Zealand": {
      intro: "New Zealand offers skilled professionals an unbeatable quality of life, iconic natural landscapes, and a world-class work-life balance. To tackle local skill shortages, the government uses its Green List pathways to grant global talent fast-tracked or direct residency options. Working here ensures competitive wages, safe communities, and great healthcare benefits.",
      eligibility: "Applicants must be at least 21 years old (under 55 for residency routes) and hold a genuine job offer from an accredited New Zealand employer. Candidates must possess a relevant university qualification or equivalent professional work experience matching the role. Proving English language proficiency through a test like IELTS (with a minimum overall score between 4.0 and 6.5, depending on the job tier) is required."
    },
    UK: {
      intro: "The UK is a powerhouse economy offering global professionals high earning potential, rich culture, and strong networks. Through its points-based system, it actively recruits international talent to fill critical skill gaps in tech, engineering, and finance. Working here ensures competitive GBP-based salaries, NHS healthcare access, and a 5-year route to permanent settlement.",
      eligibility: "Applicants must be at least 21 years old and hold a valid Certificate of Sponsorship (CoS) from an approved UK employer. The job must meet the required skill level (RQF Level 6/graduate level) and pay a minimum standard threshold of £41,700 per year (or the specific 'going rate' for the role, whichever is higher). Clearing a certified English test at CEFR Level B2 (IELTS 5.5 to 6.5) is also mandatory."
    },
    Singapore: {
      intro: "Singapore is a premier global business hub offering professionals an elite lifestyle, ultra-low tax rates, and exceptional career growth. As a major regional headquarters for multinational companies, it provides highly competitive SGD-based salaries, world-class infrastructure, and a streamlined route to bringing your family along via a Dependent Pass.",
      eligibility: "Applicants must be at least 21 years old and hold a valid executive or managerial job offer from a Singapore-registered employer. Candidates must possess a recognized university degree or top-tier professional certifications. You must pass the points-based COMPASS framework and meet a minimum monthly qualifying salary of S$5,600 (S$6,200 for financial services), which scales higher based on age."
    },
    Gulf: {
      intro: "The Gulf region (UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain) is a premier hub for global talent seeking tax-free income and high savings potential. Driven by mega-projects like Saudi Vision 2030, the region offers competitive tax-free salaries, free accommodation, and company-sponsored medical insurance.",
      eligibility: "Applicants must be at least 21 years old and hold a valid employment contract from a licensed Gulf employer. You must possess a verified university degree or trade certificate authenticated by the local embassy. Clearing a mandatory medical fitness check is required, though formal language tests like IELTS are generally not mandatory."
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-amber-600 tracking-wider uppercase">Your Gateway to Global Opportunities</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-4">
            Your Trusted Partner for International Work Visas
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your career global? We simplify the international work permit process from start to finish. Our efficient, transparent approach ensures you stay updated at every stage, helping you relocate and secure your dream job abroad with complete confidence.
          </p>
        </div>

        {/* Dropdown Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          {Object.keys(countryData).map((country) => (
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

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-amber-500 inline-block">
            {activeCountry}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Introduction</h3>
              <p className="text-gray-600 leading-relaxed">{countryData[activeCountry].intro}</p>
            </div>
            <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Eligibility Criteria</h3>
              <p className="text-amber-950 leading-relaxed">{countryData[activeCountry].eligibility}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}