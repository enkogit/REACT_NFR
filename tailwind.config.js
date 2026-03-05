module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  darkMode: 'class',
  extend: {
    colors: {
      'north-bg': '#0a120f',      // deepest forest night
      'north-text': '#e8f1eb',
      'north-glow': '#4ade80',    // soft moss green
      'north-wood': '#2a3f35',
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],   // poetic headings
      sans: ['Inter', 'system-ui', 'sans-serif'],
    }
  }
},
  plugins: [],
}
