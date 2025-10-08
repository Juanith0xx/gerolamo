// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // tu fuente Roboto
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [],
}
