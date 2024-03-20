/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'epilogue':['Epilogue', 'sans-serif'],
      },
      colors:{
        fundo:'#F6F4F4',
        azul_claro:'#286ace',
        azul_escuro:'#2f4b9a',
      }
    },
  },
  plugins: [],
}

