const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {
      padding: {
        38: '2.37500rem',
        43: '2.6875rem',
        4.5: '18.5px',
        ...defaultTheme.padding,
      },
      backgroundImage: (theme) => ({
        'form-pattern': "url('/assets/iStock-bg.png')",
        'black-white':
          'linear-gradient(to right, black 50%, transparent 50% 100%)',
        'white-black': 'linear-gradient(to right, #F7F7F7 50%, black 50% 100%)',
        'about-img': "url('/assets/about-banner.png')",
      }),
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1228px',
        },

      },
      lineHeight: {
        'loose-10.5': '2.75rem',
        '19':'19.2px',
        'loose-medium': '120%',
        'loose-11': '3rem',
        'loose-12': '3.9rem',
        'loose-28': '29px',
        'leading-loose': '1.32rem',
        '48': '48px',
        '160': '160%',
        'loose-110': '110%'
      },
      minWidth: {
        101: '40px',
      },
      maxWidth: {
        '102xl': '51.688rem',
        '103xl': '54rem',
        '105xl': '57rem',
        '106xl': '59rem',
        800: '800px',
        '107xl' : '65.063rem',
        
      },
      margin: {
        101: '48px',
      },
      gap: {
        101: '32px',
      },
      width: {
        103: '40.625rem',
        104: '31.25rem',
        105: '613px',
        97: '415px',
        110: '45%',
        111: '458px',
        '112': '821px',
        48.5 : "48.5%",
        31 : "31.2%",
        70 : "65.7%",
      },
      height: {
        card: '397px',
        'card-sm': '311px',
        101: '500px',
        '101-2': '550px',
        102: '648px',
        103: '704px',
        104: '720px',
        111: '458px',
        112: '600px',
        113: '120vh',
      },
      letterSpacing: {
        tighter: '.05px',
        default: 'normal'
      },
      maxWidth: {
        '1xl': '39rem',
        820: '54rem',
        1034: '1034px'
      },
      fontSize: {
        '4xl': '2rem', // 32px
        105: '3rem', // 48px
        '19xl': '2.5rem',
        '21xl': '2.25rem', // 36px
        '22xl': '2.75rem',
        '24xl': '5rem', // 80px
        '23xl': '1.75rem', // 28px
        102: '1.5rem', // 24px
        103: '0.875rem',
        106: ['1.125rem', '24px'],
        107: ['1.125rem', '32px'],
        108: ['1.75rem', '38.92px'],
        109: ['3rem', '57.6px'],

        '1xl': [
          '1.125rem', // 18px
          {
            letterSpacing: '0.5px',
            lineHeight: '28px',
          },
        ],
        101: [
          '52px',
          {
            lineHeight: '64px',
            letterSpacing: '-1px',
          },
        ],
        '20xl': [
          '72px',
          {
            letterSpacing: '-1px',
            lineHeight: '1.1',
          },
        ],
        '5xl': [
          '3.25rem', // 52px
          {
            letterSpacing: '-0.8px',
            lineHeight: '62.4px',
          },
        ],
        56: '3.5rem !important', // 56px
        xl: ['1.25rem', '2rem'], // 20px
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        13: '0.938rem',
        100: '45.313rem',
        101: '34.5rem',
        65: '17rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          medium: '#323232',
          'medium-2': '#636363',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#F7F7F7',
          101: '#8A8A8A',
        },
        black: {
          DEFAULT: '#000000',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        green: {
          DEFAULT: '#34fbd5',
        },
        background: 'linear-gradient(to left, #ff0000 50%, #000000 50%)',
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '!./pages/work-detail.tsx',
  ],

  darkMode: false, // or 'media' or 'class'

  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
