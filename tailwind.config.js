module.exports = {
  content: [
    './**/*.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        sovietRed: '#CC0000',
        sovietYellow: '#FFD700',
        sovietBlack: '#000000',
        sovietBeige: '#F5F5DC',
        sovietGray: '#333333',
      },
      fontFamily: {
        special: ['eurcntrc', 'display'],
        title: ['Bungee', 'display'],
        paragraph: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'rays': "url('/src/assets/background_rays.webp')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-black': {
          'text-shadow': '2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black, 2px 0px 0 black, 0px 2px 0 black, -2px 0px 0 black, 0px -2px 0 black',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
