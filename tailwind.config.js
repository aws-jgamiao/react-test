/** @type {import('tailwindcss').Config} */
const safelist = require('./safelist.js');
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],  // Load the NativeWind preset
  safelist: safelist,
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
