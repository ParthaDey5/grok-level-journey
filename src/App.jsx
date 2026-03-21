import { useState } from 'react'
import './index.css'

function App() {
  const [dropMenus, setDropMenus] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>  
    <header className='fixed top-0 left-0 right-0 z-50  transition-all duration-300'>
      <nav className='bg-white w-full row-y-center row-x-between px-[6rem] md:px-[7.5rem] md:h-[5.5rem] h-[9.5rem] md:absolute md:text-shadow shadow-md'>
        <div className='logo'>
          <a href="/" aria-label="Home">
            <img src="/logo-dark.svg" alt="Logo" className='md:w-[5.5rem] w-[11rem] ' />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              // Close (X) icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger menu icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:w-[31.65rem] md:row-x-between'>
          <ul className='nav-items row-y-center gap-[1.9rem] text-[0.75rem] relative' role='menubar'>
            <li role='none'>
              <a href="#" aria-label="Documentation" role='menuitem'>Docs</a>
            </li>
            <li role='none'>
              <a href="#" aria-label="Components" role='menuitem'>Components</a>
            </li>
            <li className='relative group center' role='none'>
              <button
                onMouseEnter={() => setDropMenus(true)}
                onMouseLeave={() => setDropMenus(false)}
                className='row-y-center h-[3rem] gap-[0.3rem]' 
                aria-label="Example Pages"
                aria-expanded={dropMenus}
                aria-haspopup="true"
                role='menuitem'
              >
                <span>Example Pages</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`transition size-2 ${dropMenus ? 'rotate-180' : ''} transition-all duration-300 `} aria-hidden="true">
                  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
              </button>
              
                <ul 
                onMouseEnter={() => setDropMenus(true)}
                onMouseLeave={() => setDropMenus(false)}
                  className={`absolute -left-7 bg-white shadow-xl rounded-md p-2 w-[9.5rem] z-50
                  transition-all duration-300 origin-top ${dropMenus? 'opacity-100 top-12 ' : 'opacity-0 pointer-events-none top-0'} `}
                  role='menu'
                >
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>About</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Landing Page</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Testimonials</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Pricing</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Products</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Profile Page</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Register</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Login Page</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Blog Archive</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Blog Post</a>
                  </li>
                  <li role='none'>
                    <a href="#" className='block px-3 py-2 hover:bg-gray-100 rounded' role='menuitem'>Contact</a>
                  </li>
                </ul>
              
            </li>
          </ul>
          
          <section className='social-links row-y-center gap-[0.7rem]' aria-label='Social media links'>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </section>
          
          <div className='cta-container'>
            <button className='cta-button w-[6rem] h-[3rem] text-[0.97rem] bg-danger text-white font-medium rounded-[0.25rem] hover:bg-rose-600 '>
              Buy Now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='absolute top-full left-0 right-0 shadow-lg md:hidden text-[1.7rem] pb-11 text-shadow-sm'>
            <ul className='col-x-center p-2 space-y-[2.85rem]' role='menu'>
              <li role='none'>
                <a href="#" className='block py-2' role='menuitem'>Docs</a>
              </li>
              <li role='none'>
                <a href="#" className='block py-2' role='menuitem'>Components</a>
              </li>
              <li role='none'>
                <button 
                  className='row-y-center gap-2 w-full py-2 text-left'
                  onClick={() => setDropMenus(!dropMenus)}
                  aria-expanded={dropMenus}
                  aria-haspopup="true"
                  role='menuitem'
                >
                  <span>Example Pages</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`transition size-5 ${dropMenus ? 'rotate-180' : ''}`} aria-hidden="true">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                </button>
                {dropMenus && (
                  <ul className='bg-white pl-8 mt-5 space-y-2 pr-20 rounded-[0.7rem] shadow-lg ' role='menu'>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>About</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Landing Page</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Testimonials</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Pricing</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Products</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Profile Page</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Register</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Login Page</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Blog Archive</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Blog Post</a>
                    </li>
                    <li role='none'>
                      <a href="#" className='block py-5 ' role='menuitem'>Contact</a>
                    </li>
                  </ul>
                )}
              </li>
              <li role='none'>
                <section className='social-links row-y-center gap-4 py-2' aria-label='Social media links'>
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-square" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter-square" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </section>
              </li>
              <li role='none'>
                <button className='mt-3 w-[12rem] h-[5.85rem] cta-button bg-danger text-white text-[2.125rem] font-medium rounded-md '>
                  Buy Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
    </>
  )
}

export default App
