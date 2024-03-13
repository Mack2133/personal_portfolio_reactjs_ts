/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary_Blue: '#1942F4',
        secoundary_lightGray: '#E8E8E8',
      },
    },
  },
  plugins: [],
}

