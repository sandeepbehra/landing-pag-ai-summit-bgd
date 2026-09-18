
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient': 'linear-gradient(315deg, #12100e 0%, #2b4162 74%)',
        'blue-gradient': 'linear-gradient(45deg, #3296fa, #2563eb)',
        'grad': 'linear-gradient(22.5deg, #e48f6e, #cd7357, #ce764b)',
        'gradient-heading': "linear-gradient(90deg, #ECE18A 0%, #C58C34 35%, #ECE18A 100%)"
      },
      fontFamily: {
        modernline: ['Modernline', 'sans-serif'], 
        caslon: ['BigCaslon', 'serif'],
        begumsans: ['Begumsans', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        background: "#051c3b",
        primary: '#41AD49',
        heading: '#BBD4C5',
        bgHeading: '#e48f6e',
        golden : "#d4a94e",
        brand_1 : "#3b82f6",
        brand_2 : "#2563eb"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
