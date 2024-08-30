import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-bold text-xl">YourBrand</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-200 transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-200 transition duration-300">About</a></li>
              <li><a href="#" className="hover:text-gray-200 transition duration-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-200 transition duration-300">Contact</a></li>
            </ul>
          </nav>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;