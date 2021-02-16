module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
