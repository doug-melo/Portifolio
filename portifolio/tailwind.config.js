/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
      'custom-black': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      },
      animation: {
        'cursor': 'cursor 1s infinite', // Duração e repetição da animação
      },
      keyframes: {
        cursor: {
          '0%': {
            borderRight: '3px solid transparent', // Estado inicial
          },
          '100%': {
            borderRight: '3px solid red', // Estado final
          },
        },
      },
    },
  },
  plugins: [],
};
