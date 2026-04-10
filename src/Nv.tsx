import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar text-white shadow-lg fixed top-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
        <div className="w-[90%] flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 text-green-500 font-bold text-xl">
            Partha.dev
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            
            <Link
              to="/"
              className={`group relative py-2 transition-colors ${isActive('/') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 
                ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link
              to="/about"
              className={`group relative py-2 transition-colors ${isActive('/about') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 
                ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link
              to="/projects"
              className={`group relative py-2 transition-colors ${isActive('/projects') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              Projects
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 
                ${isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link
              to="/contact"
              className={`group relative py-2 transition-colors ${isActive('/contact') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 
                ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
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
        <DarkModeToggle/>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 hover:bg-gray-700 rounded">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 hover:bg-gray-700 rounded">About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block px-3 py-3 hover:bg-gray-700 rounded">Projects</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 hover:bg-gray-700 rounded">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}