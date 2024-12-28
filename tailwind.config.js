/** @type {import('tailwindcss').Config} */
export default {
  content: ["/src/**/*.{html,js,ts,jsx,tsx}",
     'src/Components/**/*.jsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui',require('@tailwindcss/line-clamp'))],
}

