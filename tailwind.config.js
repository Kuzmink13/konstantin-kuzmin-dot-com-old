module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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
    extend: {
      visibility: ['group-hover', 'focus-within'],
    },
  },
  plugins: [],
};
