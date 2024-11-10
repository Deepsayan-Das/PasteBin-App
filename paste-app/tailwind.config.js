/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '80vw': '80 vw' ,
        '100vw': '100 vw' ,
      }
    },
  },
  plugins: [],
}

