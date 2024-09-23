/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        navbar: 'hsl(209, 23%, 22%)',
        // very dark mode
        darkmodebackground: 'hsl(207, 26%, 17%)', 
        darkblue: 'hsl(209, 23%, 22%)',
        //light mode
        lightmodetext: 'hsl(200, 15%, 8%)',
        lightmodeinput: 'hsl(0, 0%, 52%)',
        lightmodebackground: 'hsl(0, 0%, 98%)',
        text:'hsl(0, 0%, 100%)'

      }
    },
  },
  plugins: [],
}

