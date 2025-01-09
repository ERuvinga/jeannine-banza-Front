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

        //Brand Green color
        'Brand-green-50': '#C2FFEB',
        'Brand-green-100': '#85E5C5',
        'Brand-green-200': '#52CCA3',
        'Brand-green-300': '#27B284',
        'Brand-green-400': '#069968',
        'Brand-green-500': '#047A53',
        'Brand-green-600': '#026645',
        'Brand-green-700': '#015237',
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

        //Brand Blue Color
        'Brand-blue-50': '#B8DFF2',
        'Brand-blue-100': '#8DC7E3',
        'Brand-blue-200': '#64B9E3',
        'Brand-blue-300': '#3DADE3',
        'Brand-blue-400': '#127DB2',
        'Brand-blue-500': '#0E6996',
        'Brand-blue-600': '#095175',
        'Brand-blue-700': '#063A54',
        'Brand-blue-800': '#032333',

        //Brand Blue-marine Color
        'Brand-blueM-50': '#C2FBFF',
        'Brand-blueM-100': '#88E4EB',
        'Brand-blueM-200': '#56CED6',
        'Brand-blueM-300': '#2BB8C2',
        'Brand-blueM-400': '#07A7B2',
        'Brand-blueM-500': '#058F99',
        'Brand-blueM-600': '#02727A',
        'Brand-blueM-700': '#01565C',
        'Brand-blueM-800': '#00393D',

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
        'Brand-neutral-300': '#6B9699',
        'Brand-neutral-400': '#4C7376',
        'Brand-neutral-500': '#2F595C',
        'Brand-neutral-600': '#1D4447',
        'Brand-neutral-700': '#103133',
        'Brand-neutral-800': '#061D1F',
      },
    },
  },
  plugins: [],
} satisfies Config;
