/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
       
        backgroundImage:{
            'gradient-black':
            ' linear-gradient(to top,rgb(0, 0, 0,0.8) 30%, rgba(255, 255, 255, 0)  )',
            'gradient-black2':
            ' linear-gradient(to top,rgb(0, 0, 0,0.92) 30%, rgba(0, 0, 0, 0.2) )',

        },
        fontFamily:{
            'openSans':['openSans']
        },
        screens:{
            'xs':'480px',
            'sm':'768px',
            'md':'1060px'
        },
        colors:{
            red:'#bb0000',
        }
    },
  },
  plugins: [],
}

