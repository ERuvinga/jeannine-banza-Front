import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
      },
      fontFamily: {
        sans: 'Opensans',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        //Brand main color
        'main-50': '#ffebf6',
        'main-100': '#ffc2e3',
        'main-200': '#ff99d1',
        'main-300': '#ff70Bf',
        'main-400': '#FF36A5',
        'main-500': '##FF0A91',
        'main-600': '##CC0070',
        'main-700': '#01565C',
        'main-800': '#290016',

        //Brand Green color
        'Brand-green-50': '#C2FFEB',
        'Brand-green-100': '#85E5C5',
        'Brand-green-200': '#52CCA3',
        'Brand-green-300': '#27B284',
        'Brand-green-400': '#069968',
        'Brand-green-500': '#047A53',
        'Brand-green-600': '#026645',
        'Brand-green-700': '##A3005A',
        'Brand-green-800': '#003D29',

        //Brand Red Color
        'Brand-red-50': '#FBC0C1',
        'Brand-red-100': '#E39697',
        'Brand-red-200': '#E3787A',
        'Brand-red-300': '#E3585D',
        'Brand-red-400': '#FD3D40',
        'Brand-red-500': '#D62729',
        'Brand-red-600': '#B81619',
        'Brand-red-700': '#94090B',
        'Brand-red-800': '#700002',

        //Brand violet Color
        'Brand-Amethy-50': '#f3effb',
        'Brand-Amethy-100': '#dacef3',
        'Brand-Amethy-200': '#cebeef',
        'Brand-Amethy-300': '#b69de7',
        'Brand-Amethy-400': '#9370DB',
        'Brand-Amethy-500': '#572cb5',
        'Brand-Amethy-600': '#3f2083',
        'Brand-Amethy-700': '#281452',
        'Brand-Amethy-800': '#100821',

        //Brand rose Color
        'Brand-blueM-50': '#fdedf3',
        'Brand-blueM-100': '#f8bfd5',
        'Brand-blueM-200': '#f5a3c2',
        'Brand-blueM-300': '#ef6c9e',
        'Brand-blueM-400': '#39357a',
        'Brand-blueM-500': '#dc1864',
        'Brand-blueM-600': '#a5124b',
        'Brand-blueM-700': '#6e0c32',
        'Brand-blueM-800': '#250411',

        //Brand yellow Color
        'Brand-yellow-50': '#FFF6C2',
        'Brand-yellow-100': '#EBDFA4',
        'Brand-yellow-200': '#DBCE86',
        'Brand-yellow-300': '#C4B668',
        'Brand-yellow-400': '#AFA04E',
        'Brand-yellow-500': '#918336',
        'Brand-yellow-600': '#756923',
        'Brand-yellow-700': '#594F15',
        'Brand-yellow-800': '#3D350A',

        //Brand Neutral Color
        'Brand-neutral-50': '#F5F5F5',
        'Brand-neutral-100': '#C3D5D6',
        'Brand-neutral-200': '#97B5B8',
        'Brand-neutral-300': '#2EDCD0',
        'Brand-neutral-400': '#21C0B5',
        'Brand-neutral-500': '#157A73',
        'Brand-neutral-600': '#0F5752',
        'Brand-neutral-700': '#093431',
        'Brand-neutral-800': '#031211',
      },
    },
  },
  plugins: [],
} satisfies Config;
