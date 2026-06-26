import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        return stored === 'dark' || (!stored && prefersDark);
    });

    // ✅ Only update state
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDark(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // ✅ React to state changes (SINGLE source of side effects)
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggle = () => {
        setIsDark(prev => !prev);
    };

    return (
        <button
            onClick={toggle}
            className="relative w-16 h-8 md:scale-100  scale-[1.25] rounded-full transition-all duration-300 ease-spring
        bg-gray-400 
        shadow-lg hover:shadow-xl md:hover:scale-105 hover:scale-[1.26]  md:mr-0 mr-8"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >

            {/* Sliding thumb */}
            <div
                className={`w-7 h-7 rounded-full bg-purple-300 shadow-md
          transition-transform duration-300 ease-spring flex items-center justify-center
          ${isDark ? 'translate-x-[2.1rem]' : 'translate-x-0.5'} z-1`}
            >

            </div>

            <div className='absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-between pl-1.5 pr-2'>
                <svg id="light" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-5`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

                <svg id="dark" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </div>
        </button>
    );
}
