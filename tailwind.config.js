/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        glow: '0 0 10px rgba(255, 255, 255, 0.5)',
      },
      textShadow: {
        glow: '0 0 2px #00f, 0 0 4px #0ff',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
