/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
          Karla : ["Karla", 'sans-serif'],
      },
      backgroundImage: {
        'header-banner': "url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg')",
        'featured-img': "url('https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')",
       
      },
      colors: {
        'light-coffee': "#c16100",
      },
      keyframes: {
        slideDown:{
          '0%' : { transform : "translateY(-100%)"},
          '100%': { transform: "translateY(0)"},
        }
      },
      animation: {
        slideDown: "slideDown .4s ease-in-out"
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

