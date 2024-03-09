/* eslint-disable quote-props */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'green-yellow': '#CCF381',
        'iris': '#6951FF',
        'purple-blue': '#8E8FFA',
        'blue-white': '#C2D9FF',
        'dark-blue': '#11112D',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#D4D4D4',
        'gray-white': '#F8F8F8',
        'gray-purple': '#FBFBFB'
      },
      fontFamily: {
        sans: ['var(--font-league-spartan)'],
        heading: 'var(--font-josefin-sans)'
      },
      screens: {
        md: '970px'
      },
      gridTemplateColumns: {
        layoutOherProjects: 'repeat(auto-fit, minmax(250px, 1fr))',
        layoutProjects: 'repeat(3, minmax(250px, 1fr))'
      }
    }
  },
  plugins: []
}
export default config
