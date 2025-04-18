/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A4C8B',
        secondary: '#2874C6',
        accent: '#FF5599',
        yellow: '#FFD93B',
        'gray-light': '#F5F5F5',
        'text-dark': '#333333',
      },
    },
  },
  plugins: [],
} 