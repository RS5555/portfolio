import React, { useState } from 'react';
import GlowText from './GlowText'; // Assuming GlowText component is in a separate file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">Your Logo</span>
            </div>
            <div className="hidden md:block">
              {/* Add your navigation links here */}
              <a href="#" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <GlowText text="Link 1" />
              </a>
              <a href="#" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <GlowText text="Link 2" />
              </a>
              <a href="#" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <GlowText text="Link 3" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Add your secondary navigation or user actions here */}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Add your mobile navigation links here */}
            <a href="#" className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <GlowText text="Link 1" />
            </a>
            <a href="#" className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <GlowText text="Link 2" />
            </a>
            <a href="#" className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <GlowText text="Link 3" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
