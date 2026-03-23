// src/components/Navbar.tsx
import { useState } from "react";

export default function Navbar() {
  const [dropMenus, setDropMenus] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
    <nav id="nav" className={`bg-white fixed top-0 inset-x-0 font-poppins text-black md:h-[5rem] h-[8rem] md:py-0 py-10  shadow-lg transition duration-500 z-50 md:overflow-y-visible overflow-y-hidden md:flex items-center`}>
      <div className="w-full pl-[5.8rem] pr-[7.7rem] md:pl-[7.4rem] md:pr-[6.4rem] ">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              <img src="/logo-dark.svg" alt="logo" className="md:w-[5.5rem] w-[11rem] " />
            </a>
          </div>
    
          {/* Desktop Menu */}
          <div className=" hidden md:row-y-center space-x-[1rem] text-xs w-[48%] ">
            <div className="row-y-center space-x-[1.9rem]">
            <a href="#" className="hover:text-gray-300 transition">Docs</a>
            <a href="#" className="hover:text-gray-300 transition">Components</a>
            <a href="#" className="hover:text-gray-300 transition row-y-center gap-1 py-5 " onMouseEnter={() => setDropMenus(true)} onMouseLeave={() => setDropMenus(false)} ><span>Example Pages</span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`transition size-2 ${dropMenus ? 'rotate-180' : ''} transition-all duration-300 `} aria-hidden="true">
                  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
            </a>
 

           <div className={`absolute top-[4rem] left-[48.5rem] w-48 bg-white shadow-xl rounded-md space-y-1 py-2
           ${dropMenus? 'opacity-100 translate-y-0 duration-300 ' : 'opacity-0 translate-y-4 pointer-events-none '} transition-all 
           `}
           onMouseEnter={() => setDropMenus(true)} onMouseLeave={() => setDropMenus(false)} 
           >
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>About</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Login Page </a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Testimonials </a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Pricing</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Products</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Profile Page </a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Register</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Login Page</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Blog Archive</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Blog Post</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Contact </a>
           </div>



            </div>

            <div className="social-links flex space-x-[0.4rem]">
              <a href=""><i className="fab fa-facebook-square md:w-7 "></i></a>
              <a href=""><i className="fab fa-twitter-square md:w-7 "></i></a>
              <a href=""><i className="fab fa-instagram md:w-7 "></i></a>
            </div>

            <button className="px-5 py-3 whitespace-nowrap bg-danger hover:bg-rose-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-sm ">
              Buy Now
            </button>
          </div>
    
          {/* Mobile Hamburger */}
          <div className="md:hidden">
    <button
      id="menu-btn"
      className="text-black focus:outline-none"
      onClick={() => {
        const nav = document.getElementById("nav");
        const icon = document.getElementById("menu-icon");
        nav?.classList.toggle("h-[8rem]");
        setMobileMenuOpen(!mobileMenuOpen)
    
        if (nav?.classList.contains("h-[8rem]")) {
          icon?.setAttribute("d", "M4 6h16M4 12h16M4 18h16"); // hamburger
        } else {
          icon?.setAttribute("d", "M6 18L18 6M6 6l12 12"); // close
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          id="menu-icon"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu (hidden by default) */}
      
      <div id="mobile-menu" className=" bg-white w-full md:hidden px-2 pt-3 mt-10 space-y-[4.3rem] text-2xl ">
            <a href="#" className="hover:text-gray-300 transition block mx-auto w-fit ">Docs</a>
            <a href="#" className="hover:text-gray-300 transition block mx-auto w-fit">Components</a>
            <a href="#" className="hover:text-gray-300 transition row-y-center space-x-3  block mx-auto w-fit" onClick={() => setDropMenus(!dropMenus)}  ><span>Example Pages</span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`transition size-4 ${dropMenus ? 'rotate-180' : ''} transition-all duration-300 `} aria-hidden="true">
                  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
            </a>

          <div className={`block mx-auto w-[20rem] -translate-y-12 bg-white shadow-lg rounded-md space-y-6 py-8 pl-4
           ${dropMenus? 'block translate-y-0 duration-300 ' : 'hidden translate-y-4 pointer-events-none '} transition-all 
           `}
           >
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>About</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Login Page </a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Testimonials </a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Pricing</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Products</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Profile Page </a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Register</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Login Page</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Blog Archive</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Blog Post</a>
             <a href="#" className='block px-5 py-2 hover:bg-gray-100 rounded' role='menuitem'>Contact </a>
           </div>

            <div className="social-links -translate-y-4 center space-x-7 ">
              <a href=""><i className="fab fa-facebook-square w-10 "></i></a>
              <a href=""><i className="fab fa-twitter-square w-10 "></i></a>
              <a href=""><i className="fab fa-instagram w-10 "></i></a>
              
            </div>

            <button className="px-8 py-7 whitespace-nowrap bg-danger hover:bg-rose-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-3xl block mx-auto -translate-y-5">
              Buy Now
            </button>
      </div>
    </nav>


    
  );
}
