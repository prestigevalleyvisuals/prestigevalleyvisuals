import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pvv: {
          black: '#050505',
          gold: '#BAA054',
          goldLight: '#EED97B',
          goldDark: '#92783A',
          offwhite: '#F2F2F2'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(186, 160, 84, 0.35), 0 0 30px rgba(186, 160, 84, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
