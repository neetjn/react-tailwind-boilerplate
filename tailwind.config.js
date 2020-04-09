module.exports = {
  theme: {
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    extend: {
      inset: {
        1: '10%',
        2: '20%',
        3: '30%',
        4: '40%',
        5: '50%',
        6: '60%',
        7: '70%',
        8: '80%',
        9: '90%',
        10: '100%',
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/6': '16%'
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/6': '16%',
        '1/8': '12%'
      }
    }
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-transitions')()
  ]
}

