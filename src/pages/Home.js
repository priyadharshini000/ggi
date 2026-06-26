import React from "react";
import companyLogo from "../asset/WhatsApp Image 2026-06-20 at 3.53.37 PM.jpeg";

export default function Home({ setCurrentPage }) {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <img
  src={companyLogo}
  alt="Global Gateway Internationals"
  className="w-32 md:w-44 mx-auto mb-6"
/>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Make a Step Towards Your Global Opportunity
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Pursue your job opportunities in major global hubs with our expert
            immigration guidance.
          </p>

          <button
            onClick={() => setCurrentPage("contact")}
            className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold px-8 py-4 rounded-lg shadow-lg transition-all"
          >
            Book Your Consultation
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-8 mb-6 text-justify">
            At <strong>Global Gateway Internationals</strong>, we are a premier
            global immigration consultancy. Our expertise lies in Work Visa,
            Study Visa, Visit Visa, Migration and Dependent Family Visa
            solutions for leading destinations such as Canada, Australia,
            Europe, the UK, New Zealand, Singapore and the Gulf.
          </p>

          <p className="text-gray-700 leading-8 text-justify">
            Our experienced team simplifies every step of the immigration
            process, providing complete guidance from documentation to visa
            approval, helping you confidently build your future abroad.
          </p>

        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Work Visa */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Work Visa
              </h3>

              <p className="text-gray-600 mb-6 leading-7">
                Land your dream job abroad with our professional Work Visa
                guidance and documentation support.
              </p>

              <button
                onClick={() => setCurrentPage("work")}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Explore Destinations →
              </button>
            </div>

            {/* Study Visa */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Study Visa
              </h3>

              <p className="text-gray-600 mb-6 leading-7">
                Start your international education journey with our expert
                admission and visa assistance.
              </p>

              <button
                onClick={() => setCurrentPage("study")}
                className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-6 py-3 rounded-lg font-semibold"
              >
                Explore Academic Paths →
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}