export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'custom': "url('/icons/cursor.png'), pointer",
      },
      fontFamily: {
        'google-sans-flex': ['"Google Sans Flex"', 'sans-serif'],
        'ubuntu': ['"Ubuntu"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'volkhov': ['"Volkhov"', 'serif'],
        'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
        'bellefair': ['"Bellefair"', 'serif'],
        'barlow': ['"Barlow"', 'sans-serif'],
      },
      colors:{
        'primary': '#444bf8',
        'success': '#00c9a6',
        'danger': '#f12459',
        'info': '#2dd2f6',
        'warning': '#f1be24',
        'dark': '#252631',
        'light': '#e4e5e7',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.row-x-start': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'flex-start',
          'flex-shrink': '0',
        },
        '.row-x-center': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
          'flex-shrink': '0',
        },
        '.row-x-end': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'flex-end',
          'flex-shrink': '0',
        },
        '.row-x-between': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'space-between',
          'flex-shrink': '0',
        },
        '.row-y-start': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'flex-start',
          'flex-shrink': '0',
        },
        '.row-y-center': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'center',
          'flex-shrink': '0',
        },
        '.row-y-end': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'flex-end',
          'flex-shrink': '0',
        },
        '.col-y-start': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'flex-start',
          'flex-shrink': '0',
        },
        '.col-y-center': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          'flex-shrink': '0',
        },
        '.col-y-end': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'flex-end',
          'flex-shrink': '0',
        },
        '.col-y-between': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'space-between',
          'flex-shrink': '0',
        },
        '.col-x-start': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'flex-start',
          'flex-shrink': '0',
        },
        '.col-x-center': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'flex-shrink': '0',
        },
        '.col-x-end': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'flex-end',
          'flex-shrink': '0',
        },
        '.btn-fluid-primary': {
          'color': '#ffffff',
          'width': 'fit-content',
          'height': 'fit-content',
          'font-weight': '600',
          'transition': 'all 200ms',
        },
        '.btn-fluid-secondary': {
          'background-color': '#e5e7eb',
          'color': '#1f2937',
          'width': 'fit-content',
          'height': 'fit-content',
          'padding-left': '1rem',
          'padding-right': '2rem',
          'padding-top': '0.5rem',
          'padding-bottom': '1.125rem',
          'border-radius': '0.5rem',
          'font-weight': '500',
          'transition': 'all 200ms',
        },
        '.btn-fluid-outline': {
          'width': 'fit-content',
          'height': 'fit-content',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'font-weight': '700',
          'transition': 'all 200ms',
        },
        '.btn-fluid-ghost': {
          'color': '#fb923c',
          'width': 'fit-content',
          'height': 'fit-content',
          'padding-left': '1rem',
          'padding-right': '1.5rem',
          'padding-top': '0.5rem',
          'padding-bottom': '1rem',
          'border-radius': '0.5rem',
          'font-weight': '500',
          'transition': 'all 200ms',
        },
        '.hide': {
          'display': 'none !important'
        },
        '.shadow-4xl': {
          'box-shadow': '0 1.25rem 1.5625rem -0.3125rem rgba(0, 0, 0, 0.1), 0 0.625rem 0.625rem -0.3125rem rgba(0, 0, 0, 0.04)',
        },
        '.shadow-5xl': {
          'box-shadow': '0 1.5625rem 3.125rem -0.75rem rgba(0, 0, 0, 0.15)',
        },
        '.shadow-6xl': {
          'box-shadow': '0 2.1875rem 3.75rem -0.9375rem rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-sm': {
          'text-shadow': '0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          'text-shadow': '0 0.04rem 0.02rem rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-dark': {
          'text-shadow': '0 0.05rem 0.005rem rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-xs': {
          'text-shadow': '0 0.05rem 0.05rem rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 0.2rem 0.2rem rgba(0, 0, 0, 0.2)',
        },
        '.tracking-sm': {
          'letter-spacing': '0.005rem',
        },
        '.tracking-md': {
          'letter-spacing': '0.009rem',
        },

        
      }
      addUtilities(newUtilities)
    }

  
  ],
}
