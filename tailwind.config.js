/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6E3',
        'cream-dark': '#F5E6C8',
        brutal: {
          black: '#1a1a1a',
          red: '#E74C3C',
          green: '#2ECC71',
          yellow: '#F39C12',
          orange: '#E67E22',
          pink: '#FF6B9D',
          mint: '#7FDBCA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #1a1a1a',
        'brutal-sm': '2px 2px 0px 0px #1a1a1a',
        'brutal-lg': '6px 6px 0px 0px #1a1a1a',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
