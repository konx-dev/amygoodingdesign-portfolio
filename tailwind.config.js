module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': ['Hey August','sans-serif'],
      'anton': ['Anton Regular','sans-serif'],
      'body': ['Raleway','sans-serif']
    },
    colors: {
      brand: {
        teal: '#57ffc9',
        blue: '#00b4c8',
        pink: '#ff00c8',
        white: '#f2f2f2',
        black: '#000f14',
        navy: '#193c4b'
      }
    },
    
    extend: {
      maxWidth: {
        '300': '300px',
        '220': '220px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
