const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': [
        'Poppins', 
        ...defaultTheme.fontFamily.sans,
      ]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
