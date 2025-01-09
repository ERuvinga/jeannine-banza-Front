import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main: '#0799B2',
        'main-50': '#C2FBFF',
        'main-100': '#88E4EB',
        'main-200': '#56CED6',
        'main-300': '#2BB8C2',
        'main-400': '#07A7B2',
        'main-500': '#058F99',
        'main-600': '#02727A',
        'main-700': '#01565C',
        'main-800': '#00393D',
      },
    },
  },
  plugins: [],
} satisfies Config;
