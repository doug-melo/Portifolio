/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 0deg at center, #4f46e5, #9333ea, #f43f5e)',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Controla a velocidade da rotação
      },
    },
  },
  plugins: [],
}