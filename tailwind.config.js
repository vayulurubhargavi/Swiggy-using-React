/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 14px 4px  rgb(169, 167, 167) ,0 0px 14px 4px grey ;',
      }
    },
  },
  plugins: [],
}

