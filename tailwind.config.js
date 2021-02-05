module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'system-ui'],
        roboto: ['Roboto', 'system-ui'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
