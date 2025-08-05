/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#d2201f',
        secondary: '#1a1a1a',
        accent: '#f8f9fa',
        background: '#ffffff',
        'text-dark': '#1a1a1a',
        'text-light': '#666666',
        'red-light': '#ff4444',
        'red-dark': '#b91c1c',
      },
    },
  },
  plugins: [],
} 