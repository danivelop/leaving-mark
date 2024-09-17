/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-extraneous-dependencies */
import { lime } from 'tailwindcss/colors';

import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  mode: 'jit',
  darkMode: 'selector',
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme: lime,
      },
      typography: ({ theme }) => ({
        zinc: {
          css: {
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-invert-headings': theme('colors.zinc[100]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addVariant }: PluginAPI) => {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
      );
      addVariant(
        'prose-block-code',
        '&.prose :where(pre>code):not(:where([class~="not-prose"] *))',
      );
      addVariant(
        'prose-double-blockquote',
        '&.prose :where(blockquote>div>blockquote):not(:where([class~="not-prose"] *))',
      );
      addVariant(
        'prose-triple-blockquote',
        '&.prose :where(blockquote>div>blockquote>div>blockquote):not(:where([class~="not-prose"] *))',
      );
    },
  ],
};
export default config;
