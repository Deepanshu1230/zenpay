/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Next.js apps (monorepo)
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    // Shared packages (UI, db types, etc.)
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

