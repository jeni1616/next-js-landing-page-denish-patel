"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-indigo-600">
              The Humble Hackers
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-4 space-y-1">
            <Link href="#features" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600">
              Features
            </Link>
            <Link href="#testimonials" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600">
              Testimonials
            </Link>
            <Link href="#pricing" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600">
              Pricing
            </Link>
            <Link href="#contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600">
              Contact
            </Link>
            <div className="pl-3 pr-4 py-2">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 