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
          secondary: '#F2EFE8', // Beige
          accent: '#f9b1cc', // Soft Pink
          neutral: '#1C161D', // Dark Charcoal (black-ish)
          'base-100': '#F9F8F5', // Off-White (almmost white)
          info: '#87B1E8', // Sky Blue
          success: '#7FE6A7', // Mint Green
          warning: '#FAA447', // Tangerine Orange
          error: '#EA5766', // Coral Red
        },
      },
      'coffee',
      // 'synthwave',
      // 'cupcake',
      // 'light',
    ],
  },
};
