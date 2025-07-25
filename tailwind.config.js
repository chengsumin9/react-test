/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#165DFF',
          light: '#e8f3ff',
          dark: '#0D42B2',
        },
        success: {
          DEFAULT: '#52c41a',
          light: '#f0f9eb',
        },
        warning: {
          DEFAULT: '#faad14',
          light: '#fff2e8',
        },
        error: {
          DEFAULT: '#f5222d',
          light: '#fff0f0',
        },
        gray: {
          50: '#f5f7fa',
          100: '#f0f2f5',
          200: '#e5e8f0',
          300: '#d9dde8',
          400: '#c4c9d6',
          500: '#86909c',
          600: '#4e5969',
          700: '#1d2129',
          800: '#141414',
          900: '#0a0a0a',
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'dropdown': '0 6px 16px -8px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'base': '4px',
        'card': '8px',
      },
    },
  },
  plugins: [],
}