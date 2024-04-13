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
       
      },
      colors: {
        'light-coffee': "#c16100",
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

