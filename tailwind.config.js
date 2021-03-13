/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

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
      boxShadow: ['active'],
      translate: ['active'],
      backgroundColor: ['active'],
      visibility: ['group-hover', 'focus-within'],
      ringWidth: ['focus-visible'],
    },
  },
  plugins: [],
};
