export default {
  theme: {
    screens: {
      xs: '375px', // Mobile
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px', // Desktop
    },
    extend: {
      colors: {
        primary: 'hsl(47, 88%, 63%)',
        dark: 'hsl(0, 0%, 7%)',
        gray: 'hsl(0, 0%, 42%)',
      },
      spacing: {
        'card-lg-w': '384px', // Desktop
        'card-lg-h': '522px',
        'card-sm-w': '327px', // Mobile
        'card-sm-h': '501px',
        'img-lg-w': '388px', // Desktop
        'img-lg-h': '200px',
        'img-sm-w': '279px', // Mobile
        'img-sm-h': '200px',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
}
