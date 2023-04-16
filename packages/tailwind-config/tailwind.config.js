/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    // include packages if not transpiling - IMPORTANT for uisng ui package when transpiling it inside apps
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        eventDee: {
          ...require('daisyui/src/colors/themes')['[data-theme=coffee]'],
          primary: '#F9F8F5', // white-ish
          // "primary-focus": "mediumblue",
          secondary: '#F2EFE8', // beige
          accent: '#f9b1cc',
          neutral: '#1C161D',
          'base-100': '#F9F8F5', // almmost white
          info: '#87B1E8',
          success: '#7FE6A7',
          warning: '#FAA447',
          error: '#EA5766',
        },
      },
      'coffee',
      // 'synthwave',
      // 'cupcake',
      // 'light',
    ],
  },
};
