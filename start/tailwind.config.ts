import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8fffb',
          100: '#d2fff7',
          500: '#2bcbba',
          600: '#1db89d',
          700: '#006b6e',
          900: '#2d3436',
        },
      },
      boxShadow: {
        card: '0 12px 30px rgba(45, 52, 54, 0.12)',
      },
      borderRadius: {
        card: '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config;