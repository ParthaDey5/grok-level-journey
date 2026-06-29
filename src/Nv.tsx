import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle.js';
import SearchBar from './components/SearchBar.js';

export default function Navbar({value, setValue}) {
  const [isOpen, setIsOpen] = useState(false);
  

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar text-white shadow-lg dark:shadow-gray-400 fixed left-0 right-0 top-0  z-50">
      <div className="relative mx-auto md:py-0.5 py-10 px-16 sm:px-10 lg:px-8 flex items-center justify-between ">

        {/* Mobile Menu */}
          <div className={`${isOpen?"h-[22rem] " : "h-0 "} absolute top-[8rem] inset-x-0 md:hidden bg-[#e8ede8] dark:bg-gray-800 dark:text-white text-black text-3xl shadow-lg dark:shadow-gray-400 transition-all ease-in-out duration-500 overflow-hidden`}>
            <div className={`px-28 mt-8 space-y-10 `}>
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 hover:bg-gray-700 rounded">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3  hover:bg-gray-700 rounded">About</Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="block px-3  hover:bg-gray-700 rounded">Projects</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3  hover:bg-gray-700 rounded">Contact</Link>
            </div>
          </div>
        

         <div className="w-[96%] flex md:justify-between  h-16 items-center ">

          {/* Mobile Hamburger */}
          <div className="m-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              <svg className="size-12 dark:text-white text-black " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 text-green-500 dark:text-orange-500 font-bold md:text-xl text-5xl">
            Partha.dev
          </div>

        <div className='flex justify-between gap-10 mr-4'>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link
              to="/"
              className={`navlink group relative py-2 transition-colors ${isActive('/') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-orange-500 transition-all duration-300 
                ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link
              to="/about"
              className={`navlink group relative py-2 transition-colors ${isActive('/about') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-orange-500 transition-all duration-300 
                ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link
              to="/projects"
              className={`navlink group relative py-2 transition-colors ${isActive('/projects') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              Projects
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-orange-500 transition-all duration-300 
                ${isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link
              to="/contact"
              className={`navlink group relative py-2 transition-colors ${isActive('/contact') ? 'text-[#40D435] font-semibold' : 'text-[#5F8A5C] hover:text-white'}`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 dark:bg-orange-500 transition-all duration-300 
                ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* Searchbar */}
          <SearchBar value={value} setValue={setValue}/>
          </div>
        </div> 

        <span className='md:scale-[1] scale-[1.5]'>
          <DarkModeToggle />
        </span>
      </div>


    </nav>
  );
}