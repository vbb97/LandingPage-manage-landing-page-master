/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.-rotate-x-90': {
      transform: 'rotateX(-90deg)',
    },
  })
})

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryBrightRed': 'hsl(12, 88%, 59%)',
        'primaryDarkBlue': 'hsl(228, 39%, 23%)',
        'neutralDarkGrayishBlue': 'hsl(227, 12%, 61%)',
        'neutralVeryDarkBlue': 'hsl(233, 12%, 13%)',
        'neutralVeryPaleRed': 'hsl(13, 100%, 96%)',
        'neutralVeryLightGray': 'hsl(0, 0%, 98%)',
      },
      screens: {
        'sm': '320px',
        'md': '481px',
        '2md': '550px',
        'lg': '720px',
        'xl': '1025px',
        '2xl': '1201px',
        
      },
      backgroundPosition: {
        'bottom-4': 'top 4rem left 12rem',
        'left-4': 'top 2rem left 0',
      },
      backgroundImage: {
        'overlay': 'linear-gradient(to bottom, rgba(0, 0, 0, .2), rgba(0, 0, 0, .8))',
      }

    },
  },
  plugins: [rotateX],
}
