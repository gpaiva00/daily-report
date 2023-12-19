/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009af4',
        'primary-darken': '#2563eb',
      },
      fontFamily: {
        Afacad: 'Afacad',
      },
    },
  },
  plugins: [],
}
