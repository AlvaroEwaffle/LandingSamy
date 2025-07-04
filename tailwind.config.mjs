/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#29005f',
        secondary: '#FF27A4',
        accent: '#FEEBDD',
        background: '#FEEBDD',
        'text-dark': '#333333',
        'text-light': '#666666',
      },
    },
  },
  plugins: [],
} 