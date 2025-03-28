import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated import for v2

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Left Side: Menu Icon (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-800">
              <img className='w-24' src="../../../../src/assets/Screenshot 2025-03-20 161642-Photoroom.png" alt="" />
            </span>
          </div>

          {/* Right Side: Navigation Links (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8 ">
            <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-md font-bold">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-md font-bold">
              Places
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-md font-bold">
              Profile
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Places
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Profile
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UserNav;