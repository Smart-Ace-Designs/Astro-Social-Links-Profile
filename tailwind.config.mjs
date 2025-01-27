/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-green": "hsl(75, 94%, 57%)",
        "theme-white": "hsl(0, 0%, 100%)",
        "theme-grey": "hsl(0, 0%, 20%)",
        "theme-dark-grey": "hsl(0, 0%, 12%)",
        "theme-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
