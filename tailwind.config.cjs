/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,svelte,jsx,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
  ],
}
