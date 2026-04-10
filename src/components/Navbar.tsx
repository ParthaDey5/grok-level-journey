// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';  // Remove useLocation import



export default function Navbar() {
  const [dropMenus, setDropMenus] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const currentPath = useLocation().pathname;


  const clipboard = () => window.Clipboard;


  // Update icon based on current state
  const updateIcon = () => {
    const toggleIcon = document.querySelector('#toggle-icon');
    const isDarkMode = document.body.classList.contains('dark');

    if (isDarkMode) {
      toggleIcon?.setAttribute("d", "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z")
    } else {
      toggleIcon?.setAttribute("d", "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z")
    }
  };

  // Read localStorage on page load (pure JS)
  const hasDark = JSON.parse(localStorage.getItem('isDark') || 'false');
  if (hasDark) {
    document.body.classList.add('dark');
    updateIcon();
  } else {
    document.body.classList.remove('dark')
    updateIcon();
  }

  // Listen for browser preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    updateIcon(); // Update icon when browser changes
  });

  // Initialize on page load
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
  }
  updateIcon(); // Set correct icon on load

  const toggleButton = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("isDark", 'true')
    } else {
      localStorage.setItem("isDark", 'false')
    }
    updateIcon(); // Update icon when user toggles
  };


  return (
    <>
      <nav
        id="nav"
        className={` fixed top-0 inset-x-0 font-poppins text-black md:h-[5rem] h-[8rem] md:py-0 py-10  transition duration-500 z-50 md:overflow-y-visible overflow-y-hidden md:flex items-center dark:shadow-slate-400 md:shadow-lg `}
      >

        <div className="w-full pl-[5.8rem] pr-[7.7rem] md:pl-[7.4rem] md:pr-[6.4rem] ">
          <div className="w-full flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="" className=" text-2xl font-bold">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 20" className="md:w-[5.5rem] w-[11rem] ">
                  <g fill="currentColor">
                    <g transform="translate(26 4)">
                      <polygon points="1.216 11.456 1.216 4.816 1.072 2.032 1.088 2.032 4.56 11.456 5.648 11.456 9.12 2.032 9.136 2.032 8.992 4.816 8.992 11.456 10.208 11.456 10.208 .896 8.24 .896 5.936 7.328 5.12 9.952 5.088 9.952 4.288 7.312 1.968 .896 0 .896 0 11.456" />
                      <path d="M14.064,1.92 C14.352,1.92 14.584,1.832 14.76,1.656 C14.936,1.48 15.024,1.248 15.024,0.96 C15.024,0.672 14.936,0.44 14.76,0.264 C14.584,0.088 14.352,0 14.064,0 C13.776,0 13.544,0.088 13.368,0.264 C13.192,0.44 13.104,0.672 13.104,0.96 C13.104,1.248 13.192,1.48 13.368,1.656 C13.544,1.832 13.776,1.92 14.064,1.92 Z" />
                      <polygon points="14.704 11.456 14.704 3.456 13.424 3.456 13.424 11.456" />
                      <path d="M18.96 11.456L18.96 7.136C18.96 6.57066667 19.064 6.088 19.272 5.688 19.48 5.288 19.7466667 4.98933333 20.072 4.792 20.3973333 4.59466667 20.7306667 4.496 21.072 4.496 21.488 4.496 21.824 4.56533333 22.08 4.704L22.08 4.704 22.336 3.456C22.1333333 3.34933333 21.84 3.296 21.456 3.296 20.1973333 3.296 19.344 3.78666667 18.896 4.768L18.896 4.768 18.72 3.456 17.68 3.456 17.68 11.456 18.96 11.456zM24.848 1.92C25.136 1.92 25.368 1.832 25.544 1.656 25.72 1.48 25.808 1.248 25.808.96 25.808.672 25.72.44 25.544.264 25.368.088 25.136 0 24.848 0 24.56 0 24.328.088 24.152.264 23.976.44 23.888.672 23.888.96 23.888 1.248 23.976 1.48 24.152 1.656 24.328 1.832 24.56 1.92 24.848 1.92z" />
                      <polygon points="25.488 11.456 25.488 3.456 24.208 3.456 24.208 11.456" />
                      <path d="M38.192,11.616 C39.536,11.616 40.5626667,11.272 41.272,10.584 C41.9813333,9.896 42.336,8.87466667 42.336,7.52 L42.336,7.52 L42.336,0.896 L41.056,0.896 L41.056,7.2 C41.056,8.30933333 40.824,9.12266667 40.36,9.64 C39.896,10.1573333 39.1733333,10.416 38.192,10.416 C37.2106667,10.416 36.488,10.1573333 36.024,9.64 C35.56,9.12266667 35.328,8.30933333 35.328,7.2 L35.328,7.2 L35.328,0.896 L34.048,0.896 L34.048,7.52 C34.048,8.864 34.4026667,9.88266667 35.112,10.576 C35.8213333,11.2693333 36.848,11.616 38.192,11.616 Z" />
                      <polygon points="46.96 11.456 46.96 .896 45.68 .896 45.68 11.456" />
                    </g>
                    <path d="M10,20 C4.48609848,20 0,15.5139015 0,10 C0,4.48609848 4.48609848,0 10,0 C15.5139015,0 20,4.48609848 20,10 C20,15.5139015 15.5139015,20 10,20 Z M10,1.25 C5.17518939,1.25 1.25,5.17518939 1.25,10 C1.25,14.8248106 5.17518939,18.75 10,18.75 C14.8248106,18.75 18.75,14.8248106 18.75,10 C18.75,5.17518939 14.8248106,1.25 10,1.25 Z" />
                    <path d="M10,13.75 C7.93212121,13.75 6.25,12.0678788 6.25,10 C6.25,7.93212121 7.93212121,6.25 10,6.25 C12.0678788,6.25 13.75,7.93212121 13.75,10 C13.75,12.0678788 12.0678788,13.75 10,13.75 Z M10,7.5 C8.62121212,7.5 7.5,8.62121212 7.5,10 C7.5,11.3787879 8.62121212,12.5 10,12.5 C11.3787879,12.5 12.5,11.3787879 12.5,10 C12.5,8.62121212 11.3787879,7.5 10,7.5 Z" />
                    <path d="M10,11.25 C9.31090909,11.25 8.75,10.6890909 8.75,10 C8.75,9.31090909 9.31090909,8.75 10,8.75 C10.6890909,8.75 11.25,9.31090909 11.25,10 C11.25,10.6890909 10.6890909,11.25 10,11.25 Z" />
                  </g>
                </svg>

              </a>
            </div>

            {/* Desktop Menu */}
            <div className=" hidden md:row-y-center space-x-[1rem] text-xs w-[48%] ">
              <div className="row-y-center space-x-[1.9rem]">
                <Link to="/docs" className="hover:text-blue-400 transition group relative">
                  Docs
                  <span className={`h-[0.2rem] w-full scale-x-0 group-hover:scale-x-100 origin-center bg-orange-500 absolute -bottom-1 left-0 transform duration-300 ${currentPath === "/docs" ? "scale-x-100" : ""} `}></span>
                </Link>
                <Link to="/components" className="hover:text-blue-400 transition group relative">
                  Components
                  <span className={`h-[0.2rem] w-full scale-x-0 group-hover:scale-x-100 origin-center bg-orange-500 absolute -bottom-1 left-0 transform duration-300 ${currentPath === "/components" ? "scale-x-100" : ""} `}></span>
                </Link>

                <div className="group relative">
                  <button
                    className="hover:text-blue-400 transition row-y-center gap-1 py-5 "
                    onMouseEnter={() => setDropMenus(true)}
                    onMouseLeave={() => setDropMenus(false)}
                  >
                    <span>Example Pages</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`transition size-2 ${dropMenus ? "rotate-180" : ""} transition-all duration-300 `}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`drop-menus absolute w-48 shadow-xl rounded-md grid grid-rows-[0fr] group-hover:grid-rows-[1fr]
         transition-[grid-template-rows] duration-[600ms] 
           `}    >
                    <div className="overflow-hidden">
                      <div className="py-3 space-y-1 ">
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          About

                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          Login Page{" "}
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2 rounded"
                          role="menuitem"
                        >
                          Testimonials{" "}
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          Pricing
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          Products
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          Profile Page{" "}
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          Register
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          Login Page
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2 rounded"
                          role="menuitem"
                        >
                          Blog Archive
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2  rounded"
                          role="menuitem"
                        >
                          Blog Post
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2 rounded"
                          role="menuitem"
                        >
                          Contact{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <div className="social-links flex space-x-[0.4rem]">
                <a href="">
                  <i className="fab fa-facebook-square text-[1.2rem] "></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter-square text-[1.2rem] "></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram text-[1.2rem] "></i>
                </a>
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
                  setMobileMenuOpen(!mobileMenuOpen);

                  if (mobileMenuOpen) {
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

        {/* dark mode toggle button */}
        <button className="absolute right-10 top-1/2 -translate-y-1/2 " onClick={toggleButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="cursor-pointer hover:rotate-90 transition md:size-6 size-11 "
          >
            <path id="toggle-icon" d={`${hasDark ? "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" : "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"}`} />

          </svg>
        </button>
      </nav>

      {/* Mobile Menu (hidden by default) */}
      <div
        id="mobile-menu"
        className={`bg-white dark:bg-black shadow-lg dark:shadow-slate-400 absolute top-0 inset-x-0  md:hidden overflow-hidden px-2 pb-8 pt-24  space-y-[4.3rem] text-2xl transition-all duration-500 ease-linear ${mobileMenuOpen ? " max-h-[90rem] " : "max-h-0 "}`}
      >
        <a
          href="#"
          className="hover:text-gray-500 transition block mx-auto w-fit mt-10"
        >
          Docs
        </a>
        <a
          href="#"
          className="hover:text-gray-500 transition block mx-auto w-fit"
        >
          Components
        </a>
        <a
          href="#"
          className="hover:text-gray-500 transition row-y-center space-x-3  block mx-auto w-fit"
          onClick={() => setDropMenus(!dropMenus)}
        >
          <span>Example Pages</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`transition size-4 ${dropMenus ? "rotate-180" : ""} transition-all duration-300 `}
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <div
          className={`drop-menus block mx-auto w-[20rem] -translate-y-[2.1rem]  shadow-2xl rounded-md py-5 
           ${dropMenus ? "block translate-y-0 duration-300 " : "hidden translate-y-4 pointer-events-none "} transition-all 
           `}
        >
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            About
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Login Page{" "}
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Testimonials{" "}
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Products
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Profile Page{" "}
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Register
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Login Page
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Blog Archive
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Blog Post
          </a>
          <a
            href="#"
            className="block px-10 py-5  rounded"
            role="menuitem"
          >
            Contact{" "}
          </a>
        </div>

        <div className="social-links -translate-y-4 center space-x-7 ">
          <a href="">
            <i className="fab fa-facebook-square text-[2.5rem] "></i>
          </a>
          <a href="">
            <i className="fab fa-twitter-square text-[2.5rem] "></i>
          </a>
          <a href="">
            <i className="fab fa-instagram text-[2.5rem]"></i>
          </a>
        </div>

        <button className="px-8 py-7 whitespace-nowrap bg-danger hover:bg-rose-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-3xl block mx-auto -translate-y-5">
          Buy Now
        </button>

      </div>

    </>
  );
}
