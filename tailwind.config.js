/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  daisyui: {
    themes: ['forest', 'pastel'],
    themeRoot: ':body',
  },
  darkMode: ['selector', '[data-theme="forest"]'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
