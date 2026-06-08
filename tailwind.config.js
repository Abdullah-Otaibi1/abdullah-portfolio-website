/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        'navy-secondary': '#111827',
        card: '#1E293B',
        accent: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
        },
        border: '#334155',
        muted: '#CBD5E1',
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
