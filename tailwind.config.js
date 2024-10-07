/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        grey: {
          500: 'hsl(186, 15%, 59%)',
          900: 'hsl(187, 24%, 22%)',
        },
        green: {
          200: 'hsl(148, 38%, 91%)',
          600: 'hsl(169, 82%, 27%)',
        },
        red: {
          DEFAULT: 'hsl(0, 66%, 54%)',
        },
      },
    },
  },
  plugins: [],
}
