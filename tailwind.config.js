module.exports = {
  content : ['./index.html', './src/**/*.{js,jsx,ts,tsx}', './src/compoents/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [
    function({addComponents}){
      addComponents({
        '.container':{
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '1200px',
          },
        }
      })
    }
  ],
}
