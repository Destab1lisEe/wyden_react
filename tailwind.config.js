/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4316F3",
        textColor: "#252528"
      },
      text: {
        textFont: '16px',
        textLine: '150%'
      },
      container: {
        center: true,
				padding: '15px'
      }
    },
  },
  plugins: [],
}

