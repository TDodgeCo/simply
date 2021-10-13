const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./resources/views/**/*.edge', './resources/views/*.edge'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: colors.teal,
      green: colors.green,
      purple: colors.purple,
    },
    boxShadow: {
      DEFAULT: '0px 2px 4px rgba(44, 43, 42, 0.31)',
      spread: '0px 12px 32px rgba(44, 43, 42, 0.16)',
    },
    minWidth: {
      240: '240px',
    },
    extend: {
      minHeight: {
        shell: 'calc(100vh - 97px - 64px)',
      },
      fontSize: {
        'xl': ['1.375rem', '2.125rem'],
        '6xl': ['3.625rem', '4rem'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}