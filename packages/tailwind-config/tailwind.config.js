/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    /* include packages if not transpiling - IMPORTANT for uisng ui package when transpiling it inside apps */
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // content: [
  //   './app/**/*.{js,ts,jsx,tsx}',
  //   './pages/**/*.{js,ts,jsx,tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}',
  //   /* Or if using `src` directory: */
  //   './src/**/*.{js,ts,jsx,tsx}',
  //   /* include packages if not transpiling - IMPORTANT for uisng ui package when transpiling it inside apps */
  //   '../../packages/**/*.{js,ts,jsx,tsx}',
  // ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        eventDee: {
          ...require('daisyui/src/theming/themes')['data-theme=coffee'],
          primary: '#f9b1cc', // Soft Pink
          secondary: '#f9b1cc', // shuold be purple?
          accent: '#1C161D', // yellow
          neutral: '#1C161D', // Dark Charcoal (black-ish)
          'neutral-content': '#F9F8F5', // off-white, set this bc default ws red-ish
          'base-100': '#FFFFFF', // white
          'base-200': '#F9F8F5', // Off-White (almmost white)
          'base-300': '#F2EFE8', // Teamway-beige
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
