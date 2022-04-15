module.exports = {
  content: [
    './public/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'sans': ['poppins', 'ui-sans-serif', 'system-ui'],
      'body': ['poppins', '"Open Sans"'],
    },
    fontSize: {
      '32': '2rem',
      '2xl' : '1.5rem', 
      '5xl': '3rem',
      '4xl': '2.5rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        'main-bg': '#1F1D2B',
        'nav-color': '#BCBCBC',
        'nav-hover': '#9B51E0',
        'gradient-start': '#9B51E0',
        'gradient-end': '#3081ED',
        'text-gray': '#bcbcbc', 
        'footer-copy' : '#828282',
      },
      aspectRatio: {
        'thumb': '4 / 4.1',
      },
      lineHeight: {
        '7xl': '1.14',
      }, 
      width: {
        '35': '35%',
      }
    }, 
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}