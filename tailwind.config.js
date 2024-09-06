module.exports = {
  content: [
    './**/*.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue', // ou .jsx, .tsx selon les technologies utilisées
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

        // bungee_shade: ['Bungee Shade', 'display'],
        // propaganda: ['Archivo Black', 'sans-serif'],
        // propaganda_2: ['Anton', 'sans-serif'],
        // propaganda_3: ['Staatliches', 'display'],
        // title: ['Russo One', 'sans-serif'], 
        // paragraph: ['Bebas Neue', 'display'],
        // kremlin: ['kremlin', 'display'],
      },
      keyframes: {
        pulsate: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        pulsate: 'pulsate 2s ease-in-out infinite',
      },
      backgroundImage: {
        'rays': "url('/src/textures/rays_2-half.jpg')",
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
