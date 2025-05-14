import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-screen h-screen hero">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="animate-fade-in text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              The Ultimate Solution 
              <span className="block mt-2">for New Parents</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Registered Nurse and Lactation Counselor,
              <span className="block mt-1">
                Specializing in Labor and Delivery and Motherhood Support Services
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/appointment" 
                className="inline-flex items-center px-8 py-4 text-base font-medium text-gray-900 
                  bg-white rounded-full transition-all duration-300 transform hover:scale-105 
                  hover:bg-pink-50 hover:text-pink-600 shadow-lg hover:shadow-xl"
              >
                Book an Appointment
                <svg 
                  className="w-5 h-5 ml-2 -mr-1" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <button 
                onClick={scrollToServices}
                className="inline-flex items-center px-8 py-4 text-base font-medium 
                  text-white border-2 border-white/30 rounded-full backdrop-blur-sm 
                  transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
