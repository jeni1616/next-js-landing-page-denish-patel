"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      {/* Background image */}
      <div className="absolute top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-blue-500 to-indigo-600">
        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 className="text-white font-semibold text-5xl mb-4">
                Your Journey Starts With Us
              </h1>
              <p className="mt-4 text-lg text-gray-200 mb-8">
                This is a simple landing page built with Next.js and Tailwind CSS.
                Featuring responsive design, smooth animations, and modern UI components.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md">
                  Get Started
                </button>
                <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 