// tailwind.config.js
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',  // Ensure this includes your root file
    './src/**/*.{js,jsx,ts,tsx}',  // Include all files in the src folder where your components are
  ],
  theme: {
    extend: {},
  },
  presets: [require("nativewind/preset")],
  plugins: [],
};