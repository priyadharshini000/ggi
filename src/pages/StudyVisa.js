import React, { useState } from 'react';

export default function StudyVisa() {
  const [activeCountry, setActiveCountry] = useState('Canada');

  const studyData = {
    Canada: {
      intro: "Canada is a global hotspot hosting over 1 million international students, celebrated for its world-class education and high quality of life. The biggest advantage of studying here is the clear pathway to permanent residency (PR) and generous Post-Graduation Work Permits (PGWP) that kickstart global careers.",
      eligibility: "Applicants generally need a minimum of 60% to 65% in their previous highest qualification, with top-tier universities preferring 70% or above. For language proficiency, a minimum overall IELTS score of 6.0 to 6.5 is required, ensuring no individual band falls below 6.0 under the standard application streams."
    },
    Australia: {
      intro: "Australia blends a relaxed lifestyle with academic excellence, making it a top choice for hundreds of thousands of students annually. The primary benefits include access to globally ranked research universities, strong part-time work rights, and post-study work visas extending up to 4–6 years depending on the region.",
      eligibility: "Universities look for a consistent academic record of 60% to 65% or higher, along with a clean study history where any gaps are fully justified by work experience. The language requirement dictates an overall IELTS score between 6.0 and 6.5, with no individual sub-score lower than 5.5 to 6.0."
    },
    Europe: {
      intro: "Europe attracts over 400,000 international students yearly by offering top-tier education with exceptionally low or entirely free tuition at premier public universities. Students enjoy the unique benefit of a single Schengen visa, allowing them to freely travel, live, and explore career opportunities across 29 European nations.",
      eligibility: "Admission standardly requires an academic average of 65% or higher, with a heavy emphasis on matching prerequisite course credits from your previous degree. For English-taught programs, an IELTS score of 6.0 to 6.5 is necessary, though native language programs accept localized certificates (like German B2/C1) instead."
    },
    "New Zealand": {
      intro: "New Zealand provides a highly secure, peaceful learning environment where all 8 of its public universities rank among the top 3% in the world. The standout benefits are its highly practical, industry-aligned teaching style and excellent post-study work pathways that pave a direct route to residency.",
      eligibility: "Private institutions and diploma tracks accept candidates with 55% to 60%, while public universities strictly require 65% or above in past studies. Language requirements demand an overall IELTS score of 6.0 for undergraduate admissions and a strict 6.5 (with no band below 6.0) for postgraduate courses."
    },
    UK: {
      intro: "The United Kingdom remains an educational powerhouse welcoming over 600,000 international students annually. The key benefit is maximum time and cost efficiency, as most Bachelor's degrees take 3 years and Master's degrees take just 1 year, followed by a 2-year Graduate Route work visa.",
      eligibility: "Entry requires a minimum of 60% in 12th grade for bachelor's applicants, and 55% to 65% in a completed Bachelor's degree for master's programs. An overall IELTS score of 6.0 to 6.5 is standard, though many universities offer complete IELTS waivers if a student scored 70% or higher in 12th-grade English."
    },
    Singapore: {
      intro: "Singapore stands as Asia's premier financial and technological hub, offering international students an elite educational ecosystem in a highly safe, modern environment. The ultimate advantage is its close proximity to booming Asian corporate headquarters, providing students with unmatched networking and direct global job placements.",
      eligibility: "Admission is highly competitive, generally requiring a strong, consistent academic track record of 70% or higher in your previous studies. Proficiency requires an overall IELTS score of 6.0 to 6.5, though select private colleges may offer internal English placement tests as an alternative."
    },
    Gulf: {
      intro: "The Gulf region, Centered around Dubai, has emerged as a major modern education hub featuring elite branch campuses of top Western universities. The major advantages are studying for prestigious UK or US degrees at a lower cost of living, experiencing a tax-free economy, and tapping into booming local job markets.",
      eligibility: "Academic eligibility is flexible, starting from 50% to 60% for foundational and undergraduate entry, and climbing to 65% for premium campuses. An overall IELTS score of 5.5 to 6.0 is widely accepted, and complete IELTS waivers are commonly granted if your entire previous education was conducted in English."
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">The Foundation for Your Global Future</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-4">
            Expert Visa Guidance for Your Global Education
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don’t let complicated visa rules delay your education. We bridge the gap between your academic talents and global opportunities with an efficient, hassle-free process. Step into your international future with peace of mind today.
          </p>
        </div>

        {/* Dropdown Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          {Object.keys(studyData).map((country) => (
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-900 inline-block">
            Study in {activeCountry}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Why Study Here?</h3>
              <p className="text-gray-600 leading-relaxed">{studyData[activeCountry].intro}</p>
            </div>
            <div className="bg-blue-50/60 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Academic & Language Eligibility</h3>
              <p className="text-gray-700 leading-relaxed">{studyData[activeCountry].eligibility}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}