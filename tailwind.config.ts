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
        'xs': '480px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    ({ addUtilities }: PluginAPI) => {
      const newUtilities = {
        '.word-style': {
          'word-break': 'break-word',
          'overflow-wrap': 'break-word',
        },
        '.ellipsis': {
          'text-overflow': 'ellipsis',
          'overflow': 'hidden',
          'white-space': 'nowrap',
        },
        '.line-clamp-3': {
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
          'line-clamp': '3',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
