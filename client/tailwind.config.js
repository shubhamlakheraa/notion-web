/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter'],
        'hedvig': ['Hedvig Letters Serif'],
  
      },
      boxShadow: {
        '2xl': '0px 4px 18px rgb(0 0 0/4%),0px 2.025px 7.84688px rgba(0,0,0,.027),0px 0.8px 2.925px rgb(0 0 0/2%),0px 0.175px 1.04062px rgba(0,0,0,.013)',
      }


    },
  },
  plugins: [],
}

