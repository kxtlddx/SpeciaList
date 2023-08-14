module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  theme: {
    colors: {
      'black': '#27272a',
      'grey-dark': '#535361',
      'grey-light': '#b5b5bb',
      'white': '#fcfbfa',
      'lavender': '#7e3af2',
      'lavender-dark': '#6c2bd9',
      'lavender-light': '#9747ff',
      'red': '#e02424',
      'green': '#14a077'
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    screens: {
      'phone': '320px',
      'tablet': '792px',
      'desktop': '1280px',
    },
  },
}
