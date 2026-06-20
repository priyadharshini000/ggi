import React, { useState } from 'react';

export default function DependentFamily() {
  const [activeCountry, setActiveCountry] = useState('Canada');

  const dependentData = {
    Canada: {
      intro: "Canada deeply values family reunification, offering extensive pathways for citizens, permanent residents, or foreign skilled workers/students to bring their families. Through temporary dependent visas or permanent Spousal Sponsorship programs, families can build a secure life together with access to world-class public services.",
      eligibility: "Primary routes include the Spousal Open Work Permit (SOWP) for spouses of qualifying international students or skilled workers, and Family Class Sponsorship for PR/citizens. Sponsors must provide evidence of genuine relationship (marriage certificate, shared life proof) and satisfy minimum financial thresholds to support dependents."
    },
    Australia: {
      intro: "Australia provides excellent dependent stream pathways that enable temporary visa holders (subclass 482, 500 etc.) or permanent residents to stay with their spouses and children. This structure ensures that families remain united while actively contributing to Australia's prosperous economy.",
      eligibility: "Dependents are usually included in the main applicant's initial visa or added later via a Subsequent Entrant application. For permanent paths, the Partner Visa (Subclass 820/801 or 309/100) requires intensive proof of a genuine and continuing relationship, health assessments, and character clearances."
    },
    "New Zealand": {
      intro: "New Zealand's immigration policy strongly supports keeping immediate families together. Spouses and dependent children of accredited work visa holders or higher-level students can migrate to enjoy a peaceful, safe environment with an exceptional work-life balance.",
      eligibility: "Dependents can apply for a Relationship-based Work Visa (allowing open employment) or a Visitor/Student Visa depending on the sponsor's skill level and income. You must provide official marriage or birth certificates, alongside proof of financial stability and shared residential arrangements."
    },
    UK: {
      intro: "The United Kingdom offers structured Family and Dependent visas, allowing qualifying professionals on skilled worker, scale-up, or health and care visas to live alongside their immediate family members. This pathway grants access to the UK's top-tier schools and healthcare infrastructure.",
      eligibility: "Applies to legal spouses, civil partners, and children under 18. The main sponsor must hold a valid UK visa and demonstrate sufficient funds to maintain dependents without public assistance. On permanent routes (Spouse Visa), the sponsor must satisfy a specific minimum annual income threshold."
    },
    "US H-4": {
      intro: "The H-4 visa is a dedicated non-immigrant dependent visa issued by the United States to immediate family members (spouse and unmarried children under 21) of H-1B highly skilled specialty occupation visa holders, allowing families to live together in the US.",
      eligibility: "Requires proof of a valid marriage to the primary H-1B visa holder, or birth certificates for children. The H-1B sponsor must maintain a valid legal status in the US. H-4 spouses can apply for an Employment Authorization Document (EAD) to work in the US once the H-1B holder's I-140 immigration petition is approved."
    },
    Germany: {
      intro: "Germany's Family Reunification Visa (Ehegattennachzug) allows families of qualified professionals, EU Blue Card holders, or research scholars to settle in Germany, offering full access to the social security network, free healthcare, and premium education systems.",
      eligibility: "The sponsor in Germany must possess a valid residence permit, sufficient living space (square footage rules), and stable financial income. For certain visa types, the joining spouse must demonstrate basic German language skills (A1 level), though EU Blue Card dependents are exempt from this language rule."
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Reuniting Families Globally</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-4">
            Dependent & Family Visa Guidance
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bringing your loved ones abroad requires careful navigation of strict relationship verifications and financial criteria. We simplify the legal complexities, handle document curation, and ensure a seamless pathway to keep your family together.
          </p>
        </div>

        {/* Country Select Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          {Object.keys(dependentData).map((country) => (
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
            {activeCountry === 'US H-4' ? 'US H-4 Dependent Visa' : `Dependent Visa for ${activeCountry}`}
          </h2>
          
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Pathway Overview</h3>
              <p className="text-gray-600 leading-relaxed text-justify">{dependentData[activeCountry].intro}</p>
            </div>
            
            {/* Eligibility Block */}
            <div className="bg-blue-50/60 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Core Sponsorship & Eligibility Criteria</h3>
              <p className="text-gray-700 leading-relaxed text-justify">{dependentData[activeCountry].eligibility}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}