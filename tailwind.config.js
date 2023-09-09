/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#5E3BEE",
        "headingcolor": "#282938",
        "bgShade": "#F5FCFF",
        "dribble": "#E62872",
        "body": "#1C1E53",
      }
    },
  },
  plugins: [],
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx', './public/index.html'],
}

