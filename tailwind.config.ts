import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#0f172a', // dark blue
        foreground: '#e2e8f0', // light gray
        primary: {
          DEFAULT: '#3b82f6', // blue
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#1e293b', // darker blue
          foreground: '#e2e8f0',
        },
        muted: {
          DEFAULT: '#334155', // slate
          foreground: '#94a3b8',
        },
        accent: {
          DEFAULT: '#60a5fa', // lighter blue
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444', // red
          foreground: '#ffffff',
        },
        border: '#1e293b',
        input: '#1e293b',
        ring: '#3b82f6',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;