module.exports = {
  theme: {
    extend: {
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        scrollUp: 'scrollUp 15s linear infinite',
        scrollUpSlow: 'scrollUp 20s linear infinite',
        scrollUpMedium: 'scrollUp 18s linear infinite',
      },
    },
  },
  plugins: [],
};
