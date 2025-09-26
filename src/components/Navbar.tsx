import React, { useState } from 'react';

import logo from "../assets/img/logo.PNG";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <img src={logo} alt="NYSC Connect Logo" className="w-6 h-6 object-contain" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold text-gray-900">NYSC Connect</span>
                <span className="text-xs text-gray-500 md:block hidden">
                  The Ultimate for Job Seekers
                </span>
              </div>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-green-500/20 hover:text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200">Find jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-green-500/20 hover:text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200">For recruiters</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-green-500/20 hover:text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-green-500/20 hover:text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200">Career tips</a>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-green-600 hover:bg-green-500/20 hover:text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 hidden sm:inline-block">
                Login
              </a>
              <a
                href="#"
                className=" border border-[#056608] hover:bg-green-600 text-[#056608] px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Register
              </a>

              {/* Mobile Trigger */}
              <button
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(v => !v)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                {/* Hamburger icon */}
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className={`${mobileOpen ? 'block' : 'hidden'} absolute top-md left-0 right-0 bg-white border-b border-gray-200 shadow-lg py-4 px-4 space-y-3`}>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium text-sm py-2">Find jobs</a>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium text-sm py-2">For recruiters</a>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium text-sm py-2">Blog</a>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium text-sm py-2">Career tips</a>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium text-sm py-2 border-t border-gray-200 mt-3 pt-3">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;