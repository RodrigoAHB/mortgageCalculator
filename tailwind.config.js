/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'myFont': ['myFont'],
      'myFontBold': ['myFontBold'],
      'myFontIta': ['myFontIta'],
      'myFontMed': ['myFontMed']
    },
    extend: {
      colors:{
        "lime": "var(--lime)",
        "primary-red": "var(--red)",
        "primary-white": "var(--white)",
        "slate-100": "var(--slate-100)",
        "slate-300": "var(--slate-300)",
        "slate-500": "var(--slate-500)",
        "slate-700": "var(--slate-700)",
        "slate-900": "var(--slate-900)"
      }
    },
  },
  plugins: [],
}

