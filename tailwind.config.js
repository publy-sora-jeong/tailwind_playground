module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'sans': ['poppins', 'ui-sans-serif', 'system-ui'],
      'body': ['poppins', '"Open Sans"'],
    },
    fontSize: {
      '32': '2rem',
      '5xl': '3rem',
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
        'primary' : '#9B51E0',
      },
      aspectRatio: {
        'thumb': '4 / 4.1',
      },
      lineHeight: {
        '7xl': '1.14',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}