/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        empirica: {
          50: "#fbfcfe",
          100: "#f2f7fd",
          200: "#bcd8f6",
          300: "#8abbef",
          400: "#549ce8",
          500: "#237fe1",
          600: "#1966b8",
          700: "#124b87",
          800: "#0c325a",
          900: "#06192d",
        },
      },
    },
  },
  plugins: [],
}
