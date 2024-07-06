/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryBlue: "#1A73E8",
        primaryBlue: "#1A73E8",
        textColor : '#262626',
        secondaryText : '#1A73E8',
        graybg: '#94A3B8'
      },
      fontFamily: {
        customFont: ['"Open Sans"', "sans-serif"],
      },

      backgroundImage : {
        'hero-image' : "url('/src/assets/images/hero.png)",
        

      }
    },
  },
  plugins: [],
};

