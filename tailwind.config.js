/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#EDCC23",
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

