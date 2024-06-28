/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "hsl(75, 94%, 57%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralGrey: "hsl(0, 0%, 20%)",
        neutralDarkGrey: "hsl(0, 0%, 12%)",
        neutralOffBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
